import { RangeModel, Workbook, getCell, SheetModel, RowModel, CellModel, getSheetIndex } from '../base/index';
import { insertModel, ExtendedRange, InsertDeleteModelArgs, workbookFormulaOperation, checkUniqueRange } from '../../workbook/common/index';
import { insert, insertMerge, MergeArgs, InsertDeleteEventArgs, refreshClipboard, refreshInsertDelete } from '../../workbook/common/index';
import { ModelType, CellStyleModel } from '../../workbook/common/index';


/**
 * The `WorkbookInsert` module is used to insert cells, rows, columns and sheets in to workbook.
 */
export class WorkbookInsert {
    private parent: Workbook;
    /**
     * Constructor for the workbook insert module.
     *
     * @param {Workbook} parent - Specifies the workbook.
     * @private
     */
    constructor(parent: Workbook) {
        this.parent = parent;
        this.addEventListener();
    }
    // tslint:disable-next-line
    private insertModel(args: InsertDeleteModelArgs): void {
        if (args.modelType === 'Column') {
            if (typeof (args.start) === 'number') {
                for (let i: number = 0; i <= this.parent.getActiveSheet().usedRange.rowIndex + 1; i++) {
                    const uniqueArgs: { cellIdx: number[], isUnique: boolean } = { cellIdx: [i, args.start], isUnique: false };
                    this.parent.notify(checkUniqueRange, uniqueArgs);
                    if (uniqueArgs.isUnique) {
                        return;
                    }
                }
            }
        } else if (args.modelType === 'Row') {
            if (typeof (args.start) === 'number') {
                for (let j: number = 0; j <= this.parent.getActiveSheet().usedRange.colIndex + 1; j++) {
                    const uniqueArgs: { cellIdx: number[], isUnique: boolean } = { cellIdx: [args.start, j], isUnique: false };
                    this.parent.notify(checkUniqueRange, uniqueArgs);
                    if (uniqueArgs.isUnique) { return; }
                }
            }
        }
        if (!args.model) { return; }
        let index: number; let model: RowModel[] = []; let mergeCollection: MergeArgs[]; let isModel: boolean;
        if (typeof (args.start) === 'number') {
            index = args.start; args.end = args.end || index;
            if (index > args.end) { index = args.end; args.end = args.start; }
            for (let i: number = index; i <= args.end; i++) { model.push({}); }
        } else {
            if (args.start) {
                index = args.start[0].index || 0; model = args.start; isModel = true;
            } else {
                index = 0; model.push({});
            }
        }
        let freezePane: boolean;
        const insertArgs: InsertDeleteEventArgs = { startIndex: index, endIndex: index + model.length - 1, modelType: args.modelType, sheet:
            args.model, isInsert: true };
        if (args.modelType === 'Row') {
            if (args.checkCount !== undefined && args.model.rows && args.checkCount === args.model.rows.length) { return; }
            this.parent.notify(refreshInsertDelete, insertArgs);
            args.model = <SheetModel>args.model;
            if (!args.model.rows) { args.model.rows = []; }
            if (isModel && args.model.usedRange.rowIndex > -1 && index > args.model.usedRange.rowIndex) {
                for (let i: number = args.model.usedRange.rowIndex; i < index - 1; i++) {
                    model.splice(0, 0, {});
                }
            }
            const frozenRow: number = this.parent.frozenRowCount(args.model);
            if (index < frozenRow) {
                this.parent.setSheetPropertyOnMute(args.model, 'frozenRows', args.model.frozenRows + model.length); freezePane = true;
            }
            args.model.rows.splice(index, 0, ...model);
            //this.setInsertInfo(args.model, index, model.length, 'count');
            if (index > args.model.usedRange.rowIndex) {
                this.parent.setUsedRange(index + (model.length - 1), args.model.usedRange.colIndex, args.model);
            } else {
                this.parent.setUsedRange(args.model.usedRange.rowIndex + model.length, args.model.usedRange.colIndex, args.model);
            }
            const curIdx: number = index + model.length; let style: CellStyleModel; let cell: CellModel;
            for (let i: number = 0; i <= args.model.usedRange.colIndex; i++) {
                if (args.model.rows[curIdx] && args.model.rows[curIdx].cells && args.model.rows[curIdx].cells[i]) {
                    cell = args.model.rows[curIdx].cells[i];
                    if (cell.rowSpan !== undefined && cell.rowSpan < 0 && cell.colSpan === undefined) {
                        this.parent.notify(insertMerge, <MergeArgs>{
                            range: [curIdx, i, curIdx, i], insertCount: model.length, insertModel: 'Row'
                        });
                    }
                    if (cell.style && getCell(index - 1, i, args.model, false, true).style) {
                        style = this.checkBorder(cell.style, args.model.rows[index - 1].cells[i].style);
                        if (style !== {}) {
                            model.forEach((row: RowModel): void => {
                                if (!row.cells) { row.cells = []; }
                                if (!row.cells[i]) { row.cells[i] = {}; }
                                if (!row.cells[i].style) { row.cells[i].style = {}; }
                                Object.assign(row.cells[i].style, style);
                            });
                        }
                    }
                }
            }
        } else if (args.modelType === 'Column') {
            if (args.checkCount !== undefined && args.model.columns && args.checkCount === args.model.columns.length) { return; }
            this.parent.notify(refreshInsertDelete, insertArgs);
            args.model = <SheetModel>args.model;
            if (!args.model.columns) { args.model.columns = []; }
            if (index && !args.model.columns[index - 1]) {
                args.model.columns[index - 1] = {};
            }
            args.model.columns.splice(index, 0, ...model);
            const frozenCol: number = this.parent.frozenColCount(args.model);
            if (index < frozenCol) {
                this.parent.setSheetPropertyOnMute(args.model, 'frozenColumns', args.model.frozenColumns + model.length); freezePane = true;
            }
            //this.setInsertInfo(args.model, index, model.length, 'fldLen', 'Column');
            if (index > args.model.usedRange.colIndex) {
                this.parent.setUsedRange(args.model.usedRange.rowIndex, index + (model.length - 1), args.model);
            } else {
                this.parent.setUsedRange(args.model.usedRange.rowIndex, args.model.usedRange.colIndex + model.length, args.model);
            }
            if (!args.model.rows) { args.model.rows = []; }
            const cellModel: CellModel[] = [];
            if (!args.columnCellsModel) { args.columnCellsModel = []; }
            for (let i: number = 0; i < model.length; i++) { cellModel.push(null); }
            mergeCollection = [];
            let cell: CellModel; let style: CellStyleModel;
            for (let i: number = 0; i <= args.model.usedRange.rowIndex; i++) {
                if (!args.model.rows[i]) {
                    args.model.rows[i] = { cells: [] };
                } else if (!args.model.rows[i].cells) {
                    args.model.rows[i].cells = [];
                }
                if (index && !args.model.rows[i].cells[index - 1]) {
                    args.model.rows[i].cells[index - 1] = {};
                }
                args.model.rows[i].cells.splice(index, 0, ...(args.columnCellsModel[i] && args.columnCellsModel[i].cells ?
                    args.columnCellsModel[i].cells : cellModel));
                const curIdx: number = index + model.length;
                if (args.model.rows[i].cells[curIdx]) {
                    cell = args.model.rows[i].cells[curIdx];
                    if (cell.colSpan !== undefined && cell.colSpan < 0 && cell.rowSpan === undefined) {
                        mergeCollection.push(<MergeArgs>{
                            range: [i, curIdx, i, curIdx], insertCount: cellModel.length, insertModel: 'Column'
                        });
                    }
                    if (cell.style && getCell(i, index - 1, args.model, false, true).style) {
                        style = this.checkBorder(cell.style, args.model.rows[i].cells[index - 1].style);
                        if (style !== {}) {
                            for (let j: number = index; j < curIdx; j++) {
                                if (!args.model.rows[i].cells[j]) { args.model.rows[i].cells[j] = {}; }
                                if (!args.model.rows[i].cells[j].style) { args.model.rows[i].cells[j].style = {}; }
                                Object.assign(args.model.rows[i].cells[j].style, style);
                            }
                        }
                    }
                }
            }
            mergeCollection.forEach((mergeArgs: MergeArgs): void => { this.parent.notify(insertMerge, mergeArgs); });
        } else {
            if (args.checkCount !== undefined && args.checkCount === this.parent.sheets.length) { return; }
            const sheetModel: SheetModel[] = model as SheetModel[];
            for (let i: number = 0; i < sheetModel.length; i++) {
                if (sheetModel[i].name) {
                    for (let j: number = 0; j < this.parent.sheets.length; j++) {
                        if (sheetModel[i].name === this.parent.sheets[j].name) {
                            sheetModel.splice(i, 1); i--; break;
                        }
                    }
                }
            }
            if (!sheetModel.length) { return; }
            delete model[0].index; this.parent.createSheet(index, model); let id: number;
            if (args.activeSheetIndex) {
                this.parent.setProperties({ activeSheetIndex: args.activeSheetIndex }, true);
            } else if (!args.isAction && args.start < this.parent.activeSheetIndex) {
                this.parent.setProperties({ activeSheetIndex: this.parent.skipHiddenSheets(this.parent.activeSheetIndex) }, true);
            }
            model.forEach((sheet: SheetModel): void => {
                if (isModel) { this.updateRangeModel(sheet.ranges); }
                id = sheet.id;
                this.parent.notify(workbookFormulaOperation, {
                    action: 'addSheet', visibleName: sheet.name, sheetName: 'Sheet' + id, sheetId: id });
            });
        }
        if (args.modelType !== 'Sheet') {
            this.parent.notify(
                refreshClipboard,
                { start: index, end: index + model.length - 1, modelType: args.modelType, model: args.model, isInsert: true });
            if (args.model.name !== this.parent.getActiveSheet().name) { return; }
            this.parent.notify(insert, { model: model, index: index, modelType: args.modelType, isAction: args.isAction, activeSheetIndex:
                getSheetIndex(this.parent, args.model.name), sheetCount: args.modelType === 'Row' ? args.model.rows.length :
                args.model.columns.length, insertType: args.insertType, freezePane: freezePane, isUndoRedo: args.isUndoRedo });
        } else {
            this.parent.notify(insert, { model: model, index: index, modelType: args.modelType, isAction: args.isAction, activeSheetIndex:
                args.activeSheetIndex, sheetCount: this.parent.sheets.length, insertType: args.insertType, freezePane: freezePane,
            isUndoRedo: args.isUndoRedo });
        }
    }
    private updateRangeModel(ranges: RangeModel[]): void {
        ranges.forEach((range: RangeModel): void => {
            if (range.dataSource) {
                range.startCell = range.startCell || 'A1';
                range.showFieldAsHeader = range.showFieldAsHeader === undefined || range.showFieldAsHeader;
                range.template = range.template || '';
                range.address = range.address || 'A1';
            }
        });
    }
    private checkBorder(style: CellStyleModel, adjStyle: CellStyleModel): CellStyleModel {
        const matchedStyle: CellStyleModel = {};
        if (style.borderLeft && style.borderLeft === adjStyle.borderLeft) { matchedStyle.borderLeft = style.borderLeft; }
        if (style.borderRight && style.borderRight === adjStyle.borderRight) { matchedStyle.borderRight = style.borderRight; }
        if (style.borderTop && style.borderTop === adjStyle.borderTop) { matchedStyle.borderTop = style.borderTop; }
        if (style.borderBottom && style.borderBottom === adjStyle.borderBottom) { matchedStyle.borderBottom = style.borderBottom; }
        return matchedStyle;
    }
    private setInsertInfo(sheet: SheetModel, startIndex: number, count: number, totalKey: string, modelType: ModelType = 'Row'): void {
        const endIndex: number = count = startIndex + (count - 1);
        sheet.ranges.forEach((range: ExtendedRange): void => {
            if (range.info && startIndex < range.info[totalKey]) {
                if (!range.info[`insert${modelType}Range`]) {
                    range.info[`insert${modelType}Range`] = [[startIndex, endIndex]];
                } else {
                    range.info[`insert${modelType}Range`].push([startIndex, endIndex]);
                }
                range.info[totalKey] += ((endIndex - startIndex) + 1);
            }
        });
    }
    private addEventListener(): void {
        this.parent.on(insertModel, this.insertModel, this);
    }
    /**
     * Destroy workbook insert module.
     *
     * @returns {void} - destroy the workbook insert module.
     */
    public destroy(): void {
        this.removeEventListener();
        this.parent = null;
    }
    private removeEventListener(): void {
        if (!this.parent.isDestroyed) {
            this.parent.off(insertModel, this.insertModel);
        }
    }
    /**
     * Get the workbook insert module name.
     *
     * @returns {string} - Return the string.
     */
    public getModuleName(): string {
        return 'workbookinsert';
    }
}
