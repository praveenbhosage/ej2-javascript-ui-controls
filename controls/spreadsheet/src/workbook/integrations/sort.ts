import { Workbook, SheetModel, CellModel, getCell, setCell, getData, getSheet, isHiddenRow } from '../base/index';
import { DataManager, Query, ReturnOption, DataUtil, Deferred } from '@syncfusion/ej2-data';
import { getCellIndexes, getColumnHeaderText, getRangeAddress, workbookLocale, isNumber, getUpdatedFormula, getDataRange } from '../common/index';
import { SortDescriptor, SortOptions, BeforeSortEventArgs, SortEventArgs, getSwapRange, CellStyleModel } from '../common/index';
import { parseIntValue, SortCollectionModel } from '../common/index';
import { initiateSort, updateSortedDataOnCell } from '../common/event';
import { extend, isNullOrUndefined, L10n } from '@syncfusion/ej2-base';

/**
 * The `WorkbookSort` module is used to handle sort action in Spreadsheet.
 */
export class WorkbookSort {
    private parent: Workbook;
    /**
     * Constructor for WorkbookSort module.
     *
     * @param {Workbook} parent - Specifies the workbook.
     */
    constructor(parent: Workbook) {
        this.parent = parent;
        this.addEventListener();
    }

    /**
     * To destroy the sort module.
     *
     * @returns {void} - To destroy the sort module.
     */
    protected destroy(): void {
        this.removeEventListener();
        this.parent = null;
    }

    private addEventListener(): void {
        this.parent.on(initiateSort, this.initiateSortHandler, this);
        this.parent.on(updateSortedDataOnCell, this.updateSortedDataOnCell, this);
    }

    private removeEventListener(): void {
        if (!this.parent.isDestroyed) {
            this.parent.off(initiateSort, this.initiateSortHandler);
            this.parent.off(updateSortedDataOnCell, this.updateSortedDataOnCell);
        }
    }

    /**
     * Sorts range of cells in the sheet.
     *
     * @param {{ args: BeforeSortEventArgs, promise: Promise<SortEventArgs> }} eventArgs - Specify the arguments.
     * @param {BeforeSortEventArgs} eventArgs.args - arguments for sorting.
     * @param {Promise<SortEventArgs>} eventArgs.promise - Specify the promise.
     * @param {SortCollectionModel} eventArgs.previousSort - Specify the previous sort model.
     * @returns {void} - Sorts range of cells in the sheet.
     */
    private initiateSortHandler(
        eventArgs: { args: BeforeSortEventArgs, promise: Promise<SortEventArgs>, previousSort: SortCollectionModel }): void {
        const args: BeforeSortEventArgs = eventArgs.args;
        const deferred: Deferred = new Deferred();
        const addressInfo: { sheetIndex: number, indices: number[] } = this.parent.getAddressInfo(args.range);
        const sheet: SheetModel = getSheet(this.parent, addressInfo.sheetIndex);
        let range: number[] = getSwapRange(addressInfo.indices);
        const sortOptions: SortOptions = args.sortOptions || { sortDescriptors: {}, containsHeader: true };
        let isSingleCell: boolean = false;
        eventArgs.promise = deferred.promise;
        if (range[0] > sheet.usedRange.rowIndex || range[1] > sheet.usedRange.colIndex) {
            deferred.reject(this.parent.serviceLocator.getService<L10n>(workbookLocale).getConstant('SortOutOfRangeError'));
            return;
        }
        let containsHeader: boolean = sortOptions.containsHeader;
        const checkForHeader: boolean = (args as { checkForHeader?: boolean }).checkForHeader;
        if (range[0] === range[2] || checkForHeader) { //if selected range is a single cell
            if (!checkForHeader) { range = getDataRange(range[0], range[1], sheet); }
            isSingleCell = true;
            if (isNullOrUndefined(sortOptions.containsHeader)) {
                if (typeof getCell(range[0], range[1], sheet, null, true).value ===
                    typeof getCell(range[0] + 1, range[1], sheet, null, true).value) {
                    containsHeader = this.isSameStyle(
                        getCell(range[0], range[1], sheet, null, true).style,
                        getCell(range[0] + 1, range[1], sheet, null, true).style) ? false : true;
                } else {
                    containsHeader = true;
                }
            }
        }
        if ((isNullOrUndefined(args.sortOptions) || isNullOrUndefined(args.sortOptions.containsHeader)) && !isSingleCell) {
            const firstCell: CellModel = getCell(range[0], range[1], sheet);
            const secondCell: CellModel = getCell(range[0] + 1, range[1], sheet);
            if (firstCell && secondCell) {
                if (typeof firstCell.value === typeof secondCell.value) {
                    containsHeader = !this.isSameStyle(firstCell.style, secondCell.style);
                } else {
                    containsHeader = true;
                }
            }
        }
        range[0] = containsHeader ? range[0] + 1 : range[0];
        const cell: number[] = getCellIndexes(sheet.activeCell);
        const header: string = getColumnHeaderText(cell[1] + 1);
        delete sortOptions.containsHeader;
        let sortDescriptors: SortDescriptor | SortDescriptor[] = sortOptions.sortDescriptors;
        const address: string = getRangeAddress(range);
        getData(this.parent, `${sheet.name}!${address}`, true, null, null, null, null, null, undefined, null, cell[1]).then((jsonData: { [key: string]: CellModel }[]) => {
            const dataManager: DataManager = new DataManager(jsonData);
            const query: Query = new Query();
            if (Array.isArray(sortDescriptors)) { //multi-column sorting.
                if (!sortDescriptors || sortDescriptors.length === 0) {
                    sortDescriptors = [{ field: header }];
                }
                for (let length: number = sortDescriptors.length, i: number = length - 1; i > -1; i--) {
                    if (!sortDescriptors[length - 1].field) {
                        sortDescriptors[length - 1].field = header;
                    }
                    if (!sortDescriptors[i].field) { continue; }
                    const comparerFn: Function = sortDescriptors[i].sortComparer
                        || this.sortComparer.bind(this, sortDescriptors[i], sortOptions.caseSensitive);
                    query.sortBy(sortDescriptors[i].field, comparerFn);
                }
            } else { //single column sorting.
                if (!sortDescriptors) {
                    sortDescriptors = { field: header };
                }
                if (!sortDescriptors.field) { sortDescriptors.field = header; }
                const comparerFn: Function = sortDescriptors.sortComparer
                    || this.sortComparer.bind(this, sortDescriptors, sortOptions.caseSensitive);
                query.sortBy(sortDescriptors.field, comparerFn);
            }
            dataManager.executeQuery(query).then((e: ReturnOption) => {
                this.parent.notify('setActionData', { args: { action: 'beforeSort', eventArgs: { range: address, cellDetails: jsonData, sortedCellDetails: e.result } } });
                this.updateSortedDataOnCell({ result: e.result, range: range, sheet: sheet, jsonData: jsonData });
                const sortArgs: { range: string, sortOptions: SortOptions, previousSort?: SortCollectionModel } = { range:
                    `${sheet.name}!${address}`, sortOptions: args.sortOptions };
                if (eventArgs.previousSort) { sortArgs.previousSort = eventArgs.previousSort; }
                deferred.resolve(sortArgs);
            });
        });
    }

    private updateSortedDataOnCell(args: { result: ReturnOption, range: number[], sheet: SheetModel, jsonData: { [key: string]: CellModel }[], isUndo?: boolean }): void {
        let fields: string[] = []; let cell: CellModel;
        const updateCell: Function = (rowIdx: number, data: { [key: string]: CellModel }): void => {
            for (let j: number = args.range[1], k: number = 0; j <= args.range[3]; j++, k++) {
                if (!fields[k]) {
                    fields[k] = getColumnHeaderText(j + 1);
                }
                if (data[fields[k]]) {
                    cell = extend({}, data[fields[k]], null, true)
                } else {
                    if (!getCell(rowIdx, j, args.sheet)) {
                        continue;
                    }
                    cell = null;
                }
                cell = this.skipBorderOnSorting(rowIdx, j, args.sheet, cell);
                if (cell && cell.formula) {
                    cell.formula = getUpdatedFormula([rowIdx, j], [parseInt(data['__rowIndex'] as string, 10) - 1, j], args.sheet, cell);
                }
                setCell(rowIdx, j, args.sheet, cell);
            }
        };
        let updatedCellDetails: { [key: string]: boolean } = args.isUndo && {}; let rIdx: number;
        for (let i: number = args.range[0], idx: number = 0; i <= args.range[2]; i++, idx++) {
            if (isHiddenRow(args.sheet, i)) {
                idx--;
                continue;
            }
            if (args.isUndo) {
                if (args.result[idx]) {
                    rIdx = parseInt(args.result[idx]['__rowIndex'] as string, 10) - 1;
                    updatedCellDetails[rIdx] = true;
                    updateCell(rIdx, args.result[idx]);
                    if (i === rIdx) {
                        continue;
                    }
                }
                if (!updatedCellDetails[i] && args.sheet.rows[i]) {
                    updateCell(i, {});
                }
            } else {
                updateCell(i, args.result[idx] || {});
            }
        }
    }

    private skipBorderOnSorting(rowIndex: number, colIndex: number, sheet: SheetModel, cell: CellModel): CellModel {
        const prevCell: CellModel = getCell(rowIndex, colIndex, sheet);
        const borders: string[] = ['borderBottom', 'borderTop', 'borderRight', 'borderLeft', 'border'];
        if (cell && cell.style) {
            for (const border of borders) {
                delete cell.style[border];
            }
        }
        if (prevCell && prevCell.style) {
            for (const border of borders) {
                if (prevCell.style[border]) {
                    if (!cell) {
                        cell = {};
                    }
                    if (!cell.style) {
                        cell.style = {};
                    }
                    cell.style[border] = prevCell.style[border];
                }
            }
        }
        return cell;
    }

    private isSameStyle(firstCellStyle: CellStyleModel, secondCellStyle: CellStyleModel): boolean {
        if (!firstCellStyle) { firstCellStyle = {}; }
        if (!secondCellStyle) { secondCellStyle = {}; }
        let sameStyle: boolean = true;
        const keys: string[] = Object.keys(firstCellStyle);
        for (let i: number = 0; i < keys.length; i++) {
            if (firstCellStyle[keys[i]] === secondCellStyle[keys[i]] || this.parent.cellStyle[keys[i]] === firstCellStyle[keys[i]]) {
                sameStyle = true;
            } else {
                sameStyle = false;
                break;
            }
        }
        return sameStyle;
    }

    /**
     * Compares the two cells for sorting.
     *
     * @param {SortDescriptor} sortDescriptor - protocol for sorting.
     * @param {boolean} caseSensitive - value for case sensitive.
     * @param {CellModel} x - first cell
     * @param {CellModel} y - second cell
     * @returns {number} - Compares the two cells for sorting.
     */
    private sortComparer(sortDescriptor: SortDescriptor, caseSensitive: boolean, x: CellModel, y: CellModel): number {
        const direction: string = sortDescriptor.order || '';
        const comparer: Function = DataUtil.fnSort(direction);
        let isXStringVal: boolean = false; let isYStringVal: boolean = false;
        if (x && y && (typeof x.value === 'string' || typeof y.value === 'string') && (x.value !== '' && y.value !== '')) {
            if (isNumber(x.value)) { // Imported number values are of string type, need to handle this case in server side
                x.value = <string>parseIntValue(x.value);
                isXStringVal = true;
            }
            if (isNumber(y.value)) {
                y.value = <string>parseIntValue(y.value);
                isYStringVal = true;
            }
            if (!isYStringVal && !isYStringVal) {
                const caseOptions: { [key: string]: string } = { sensitivity: caseSensitive ? 'case' : 'base' };
                const collator: Intl.Collator = new Intl.Collator(this.parent.locale, caseOptions);
                if (!direction || direction.toLowerCase() === 'ascending') {
                    return collator.compare(x.value as string, y.value as string);
                } else {
                    return collator.compare(x.value as string, y.value as string) * -1;
                }
            }
        }
        const isXNull: boolean = (isNullOrUndefined(x) || x && (isNullOrUndefined(x.value) || x.value === ''));
        const isYNull: boolean = (isNullOrUndefined(y) || y && (isNullOrUndefined(y.value) || y.value === ''));
        if (isXNull && isYNull) {
            return -1;
        }
        if (isXNull) {
            return 1;
        }
        if (isYNull) {
            return -1;
        }
        return comparer(x ? x.value : x, y ? y.value : y);
    }

    /**
     * Gets the module name.
     *
     * @returns {string} - Get the module name.
     */
    protected getModuleName(): string {
        return 'workbookSort';
    }
}
