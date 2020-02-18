import { IGrid, ActionArgs, NotifyArgs } from '../base/interface';
import { Observer, isBlazor, isNullOrUndefined } from '@syncfusion/ej2-base';
import * as events from '../base/constant';
import { Column } from '../models/column';
import { Row } from '../models/row';
import { AriaService } from '../services/aria-service';
import { Cell } from '../models/cell';
import { CellType, AggregateType } from '../base/enum';
import { ReturnType } from '../base/type';
import { AggregateRow } from '../models/aggregate';
import { DataUtil } from '@syncfusion/ej2-data';

export const gridObserver: Observer = new Observer();

/**
 * BlazorAction is used for performing Blazor related Grid Actions.
 * @hidden
 */
export class BlazorAction {
    private parent: IGrid;

    private aria: AriaService = new AriaService();
    private actionArgs: ActionArgs = {};

    constructor(parent?: IGrid) {
        this.parent = parent;
        this.addEventListener();
    }

    public addEventListener(): void {
        if (this.parent.isDestroyed) {
            return;
        }
        this.parent.on('detailclick', this.onDetailRowClick, this);
        this.parent.on('add-delete-success', this.addDeleteSuccess, this);
        this.parent.on('editsuccess', this.editSuccess, this);
        this.parent.on('setvisibility', this.setColumnVisibility, this);
        this.parent.on('offset', this.setServerOffSet, this);
        this.parent.on('updateaction', this.modelChanged, this);
        this.parent.on(events.modelChanged, this.modelChanged, this);
     }

    public removeEventListener(): void {
        if (this.parent.isDestroyed) {
            return;
        }
        this.parent.off('detailclick', this.onDetailRowClick);
        this.parent.off('add-delete-success', this.addDeleteSuccess);
        this.parent.off('editsuccess', this.editSuccess);
        this.parent.off('setvisibility', this.setColumnVisibility);
        this.parent.off('offset', this.setServerOffSet);
        this.parent.off('updateaction', this.modelChanged);
        this.parent.off(events.modelChanged, this.modelChanged);
     }

    public getModuleName(): string { return 'blazor'; };

    public modelChanged(args: ActionArgs): void {
        this.actionArgs = args;
        this.parent.currentAction = args;
    }

    public addDeleteSuccess(args: NotifyArgs): void {

        let editArgs: Object;
        let action: string = 'name';
        let data: string = 'data';
        editArgs = {
            requestType: args.requestType,
            data: args[data],
            action: args[action]
        };
        args.promise.then((e: ReturnType) => this.editSuccess(editArgs)
        ).catch((e: Error) => {
            if (isBlazor() && this.parent.isServerRendered) {
                let error: string = 'error';
                let message: string = 'message';
                if (!isNullOrUndefined(e[error]) && !isNullOrUndefined(e[error][message])) {
                    e[error] = e[error][message];
                }
            }
            this.parent.trigger(events.actionFailure, ((isBlazor() && e instanceof Array) ? e[0] : e));
            this.parent.hideSpinner();
            this.parent.log('actionfailure', { error: e });
        });
    }
    public editSuccess(args: ActionArgs): void {
        this.actionArgs = args;
        this.parent.currentAction = args;
        this.parent.allowServerDataBinding = true;
        this.parent.serverDataBind();
        this.parent.allowServerDataBinding = false;
    }

    public onDetailRowClick(target: Element): void {
        let gObj: IGrid = this.parent;
        let adaptor: string = 'interopAdaptor'; let rIndex: string = 'rowIndex';
        let invokeMethodAsync: string = 'invokeMethodAsync';
        let tr: HTMLTableRowElement = target.parentElement as HTMLTableRowElement;
        let uid: string = tr.getAttribute('data-uid');
        let rowObj: Row<Column> = gObj.getRowObjectFromUID(uid);
        let args: Object = {
            uid: uid, classList: target.classList[0], index: tr.getAttribute('aria-rowindex'),
            rowIndex: gObj.getRowsObject().indexOf(rowObj), colSpan: this.parent.getVisibleColumns().length
        };
        gObj[adaptor][invokeMethodAsync]('OnDetailClick', args);
        if (target.classList.contains('e-detailrowcollapse')) {
            let rows: Row<Column>[] = gObj.getRowsObject();
            let rowData: Object = rowObj.data;
            let gridRowId: string = this.parent.getRowUid('grid-row');
            let len: number = gObj.groupSettings.columns.length;
            let gridRow: Row<Column> = new Row<Column>({
                isDataRow: true,
                isExpand: true,
                uid: gridRowId,
                isDetailRow: true,
                cells: [new Cell<Column>({ cellType: CellType.Indent }), new Cell<Column>({ isDataCell: true, visible: true })]
            });
            for (let i: number = 0; i < len; i++) {
                gridRow.cells.unshift(new Cell({ cellType: CellType.Indent }));
            }
            rows.splice(args[rIndex] + 1, 0, gridRow);
            gObj.trigger(events.detailDataBound, { data: rowData});
            gObj.notify(events.detailDataBound, { rows: gObj.getRowsObject() });
            rowObj.isExpand = true;
            this.aria.setExpand(target as HTMLElement, true);
        } else {
            gObj.getRowsObject().splice(args[rIndex] + 1, 1);
            gObj.notify(events.detailDataBound, { rows: gObj.getRowsObject() });
            rowObj.isExpand = false;
            this.aria.setExpand(target as HTMLElement, false);
        }
    }

    public setColumnVisibility(columns: Column[]): void {
        let visible: Object = {};
        let adaptor: string = 'interopAdaptor';
        let invokeMethodAsync: string = 'invokeMethodAsync';
        for (let i: number = 0; i < columns.length; i++) {
            visible[columns[i].uid] = columns[i].visible;
        }
        this.parent[adaptor][invokeMethodAsync]('setColumnVisibility', {visible: visible});
    }

    public dataSuccess(args: ReturnType): void {
        if (args.foreignColumnsData) {
            let columns: Column[] = this.parent.getColumns();
            for (let i: number = 0; i < columns.length; i++) {
                if (args.foreignColumnsData[columns[i].field]) {
                    columns[i].columnData = args.foreignColumnsData[columns[i].field];
                }
            }
        }
        if (this.parent.allowGrouping && this.parent.groupSettings.columns) {
            let agg: Object[] = [];
            let aggRows: AggregateRow | Object[] = this.parent.aggregates;
            for (let i: number = 0; i < aggRows.length; i++) {
                let aggRow: AggregateRow = aggRows[i] as AggregateRow;
                for ( let j: number = 0; j < aggRow.columns.length; j++) {
                    let aggr: Object = {};
                    let type: string | AggregateType[] = aggRow.columns[j].type.toString();
                    aggr = { type: type.toLowerCase(), field: aggRow.columns[j].field };
                    agg.push(aggr);
                }
            }
            let data: Object[];
            let aggrds: Object[];
            let groupedCols: string[] = this.parent.groupSettings.columns;
            for ( let k: number = 0; k < groupedCols.length; k++) {
                aggrds = data ? data : args.result;
                data = DataUtil.group(aggrds, groupedCols[k], agg, null, null);
            }
            args.result = data ? data : args.result;
        }
        let rowUid: string = 'rowUid';
        let offsetTime: string = 'offsetTime'; let off: string = 'offset';
        this.parent[rowUid] = args[rowUid];
        args[off] = Math.sign(args[off]) === 1 ? -Math.abs(args[off]) : Math.abs(args[off]);
        this.parent[offsetTime] = args[off];
        if (this.parent[offsetTime] !== new Date().getTimezoneOffset() / 60) {
            if (this.parent.editSettings.mode !== 'Batch') {
                let action: string = 'action';
                let rowIndex: string = 'rowIndex';
                let index: string = 'index';
                if (this.actionArgs[action] === 'edit') {
                    this.setClientOffSet(args, this.actionArgs[rowIndex]);
                } else if (this.actionArgs[action] === 'add') {
                    this.setClientOffSet(args, this.actionArgs[index]);
                }
            } else if (this.parent.editSettings.mode === 'Batch') {
                let changes: string = 'changes';
                let changedRecords: string = 'changedRecords';
                let addedRecords: string = 'addedRecords';
                let keyField: string = this.parent.getPrimaryKeyFieldNames()[0];
                let batchChanges: Object = this.actionArgs[changes] || { changedRecords: [], addedRecords: [] };
                for (let i: number = 0; i < batchChanges[changedRecords].length; i++) {
                    for (let j: number = 0; j < args.result.length; j++) {
                        if (batchChanges[changedRecords][i][keyField] === args.result[j][keyField]) {
                            this.setClientOffSet(args, j);
                        }
                    }
                }
                for (let i: number = 0; i < batchChanges[addedRecords].length; i++) {
                    for (let j: number = 0; j < args.result.length; j++) {
                        if (batchChanges[addedRecords][i][keyField] === args.result[j][keyField]) {
                            this.setClientOffSet(args, j);
                        }
                    }
                }
            }
        }
        this.parent.renderModule.dataManagerSuccess(args, <NotifyArgs>this.actionArgs);
        this.parent.getMediaColumns();
        this.actionArgs = this.parent.currentAction = {};
    }

    private setClientOffSet(args: ReturnType, index: number): void {
        let timeZone: number = DataUtil.serverTimezoneOffset;
        DataUtil.serverTimezoneOffset = 0;
        args.result[index] = DataUtil.parse.parseJson(JSON.stringify(args.result[index]));
        DataUtil.serverTimezoneOffset = timeZone;
    }

    private setServerOffSet(args: Object): void {
        let serverTimeZone: number = DataUtil.serverTimezoneOffset;
        let offsetTime: string = 'offsetTime';
        let data: string = 'data';
        let timeZone: number = new Date().getTimezoneOffset() / 60 * 2 + this.parent[offsetTime];
        DataUtil.serverTimezoneOffset = timeZone;
        args[data] = DataUtil.parse.parseJson(JSON.stringify(args[data]));
        DataUtil.serverTimezoneOffset = serverTimeZone;
    }


    public dataFailure(args: { result: Object[] }): void {
        this.parent.renderModule.dataManagerFailure(args, <NotifyArgs>this.actionArgs);
        this.actionArgs = this.parent.currentAction = {};
     }

     public destroy(): void {
        this.removeEventListener();
     }
}
