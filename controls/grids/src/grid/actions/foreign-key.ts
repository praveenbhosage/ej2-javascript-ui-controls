import { isNullOrUndefined, extend } from '@syncfusion/ej2-base';
import { DataManager, Query, Deferred, Predicate, DataUtil } from '@syncfusion/ej2-data';
import { IGrid, ColumnDataStateChangeEventArgs, NotifyArgs } from '../base/interface';
import { ServiceLocator } from '../services/service-locator';
import { Column } from '../models/column';
import { PredicateModel, SearchSettingsModel } from '../base/grid-model';
import { ReturnType } from '../base/type';
import { initForeignKeyColumn, getForeignKeyData, generateQuery } from '../base/constant';
import { getDatePredicate } from '../base/util';
import { Data } from './data';
import * as events from '../base/constant';

/**
 * `ForeignKey` module is used to handle foreign key column's actions.
 */

export class ForeignKey extends Data {

    constructor(parent: IGrid, serviceLocator: ServiceLocator) {
        super(parent, serviceLocator);
        this.parent = parent;
        this.serviceLocator = serviceLocator;
        this.initEvent();
    }

    private initEvent(): void {
        if (this.parent.isDestroyed) { return; }
        this.parent.on(initForeignKeyColumn, this.initForeignKeyColumns, this);
        this.parent.on(getForeignKeyData, this.getForeignKeyData, this);
        this.parent.on(generateQuery, this.generateQueryFormData, this);
    }

    private initForeignKeyColumns(columns: Column[]): void {
        for (let i: number = 0; i < columns.length; i++) {
            columns[i].dataSource = (columns[i].dataSource instanceof DataManager ? <DataManager>columns[i].dataSource :
                (isNullOrUndefined(columns[i].dataSource) ? new DataManager() : 'result' in columns[i].dataSource ? columns[i].dataSource :
                    new DataManager(columns[i].dataSource as Object[])));
        }
    }

    private eventfPromise(
        args: { requestType?: string, foreignKeyData?: string[], data?: Object, action: NotifyArgs },
        query?: Query, key?: string, column?: Column): Deferred {
        const state: ColumnDataStateChangeEventArgs = this.getStateEventArgument(query) as ColumnDataStateChangeEventArgs;
        const def: Deferred = new Deferred();
        const deff: Deferred = new Deferred();
        state.action = args.action;
        const dataModule: Data = this.parent.getDataModule();
        if (!isNullOrUndefined(args.action) && args.action.requestType && dataModule.foreignKeyDataState.isDataChanged !== false) {
            dataModule.setForeignKeyDataState({
                isPending: true, resolver: deff.resolve
            });
            deff.promise.then(() => {
                def.resolve(column.dataSource);
            });
            state.setColumnData = this.parent.setForeignKeyData.bind(this.parent);
            this.parent.trigger(events.columnDataStateChange, state);
        } else {
            dataModule.setForeignKeyDataState({});
            def.resolve(key);
        }
        return def;
    }

    private getForeignKeyData(args: {
        data: Promise<Object>, result: ReturnType, promise: Deferred, isComplex?: boolean,
        column?: Column, action: NotifyArgs
    }): void {
        const foreignColumns: Column[] = args.column ? [args.column] : this.parent.getForeignKeyColumns();
        const allPromise: Promise<Object>[] = [];
        for (let i: number = 0; i < foreignColumns.length; i++) {
            let promise: Promise<Object>;
            const query: Query = args.isComplex ? this.genarateColumnQuery(foreignColumns[i]) :
                <Query>this.genarateQuery(foreignColumns[i], <{ records?: Object[] }>args.result.result, false, true);
            query.params = this.parent.query.params;
            const dataSource: DataManager = <DataManager>foreignColumns[i].dataSource;
            if (dataSource && 'result' in dataSource) {
                const def: Deferred = this.eventfPromise(args, query, dataSource, foreignColumns[i]);
                promise = def.promise;
            } else if (!dataSource.ready || dataSource.dataSource.offline) {
                promise = dataSource.executeQuery(query);
            } else {
                promise = dataSource.ready.then(() => {
                    return dataSource.executeQuery(query);
                });
            }
            allPromise.push(promise);
        }
        <Promise<Object>>Promise.all(allPromise).then((responses: ReturnType[]) => {
            for (let i: number = 0; i < responses.length; i++) {
                foreignColumns[i].columnData = responses[i].result;
                if (foreignColumns[i].editType === 'dropdownedit' && 'result' in foreignColumns[i].dataSource) {
                    foreignColumns[i].edit.params = extend(foreignColumns[i].edit.params, {
                        dataSource: responses[i].result,
                        query: new Query(), fields: {
                            value: foreignColumns[i].foreignKeyField || foreignColumns[i].field,
                            text: foreignColumns[i].foreignKeyValue
                        }
                    });
                }
            }
            args.promise.resolve(args.result);
        }).catch((e: Object) => {
            this.parent.log(['actionfailure', 'foreign_key_failure']);
            if (args.promise && args.promise.reject) {
                args.promise.reject(e);
            }
            return e;
        });
    }

    private generateQueryFormData(args: { column: Column, predicate: { predicate?: Predicate } }): void {
        args.predicate.predicate = <Predicate>this.genarateQuery(args.column, <{ records?: Object[] }>args.column.columnData, true);
    }

    private genarateQuery(column: Column, e?: { records?: Object[] }, fromData?: boolean, needQuery?: boolean): Predicate | Query {
        const gObj: IGrid = this.parent;
        const predicates: Predicate[] = [];
        const query: Query = new Query();
        let field: string = fromData ? column.foreignKeyField : column.field;
        if (gObj.allowPaging || gObj.enableVirtualization || fromData) {
            e = <{ records?: Object[] }>new DataManager(((gObj.allowGrouping && gObj.groupSettings.columns.length && !fromData) ?
                e.records : e) as JSON[]).executeLocal(new Query().select(field));
            const filteredValue: Object[] = DataUtil.distinct(<Object[]>e, field, false);
            field = fromData ? column.field : column.foreignKeyField;
            for (let i: number = 0; i < filteredValue.length; i++) {
                if (filteredValue[i] && (<Date>filteredValue[i]).getDay) {
                    predicates.push(
                        getDatePredicate({ field: field, operator: 'equal', value: <string>filteredValue[i], matchCase: false })
                    );
                } else {
                    predicates.push(new Predicate(field, 'equal', <string>filteredValue[i], false));
                }
            }
        }
        if (needQuery) {
            return predicates.length ? query.where(Predicate.or(predicates)) : query;
        }
        return (predicates.length ? Predicate.or(predicates) : { predicates: [] }) as Predicate;
    }

    private genarateColumnQuery(column: Column): Query {
        const gObj: IGrid = this.parent;
        let query: Query = new Query();
        const queryColumn: { column: PredicateModel[], isTrue: boolean } = this.isFiltered(column);
        if (queryColumn.isTrue) {
            query = this.filterQuery(query, <PredicateModel[]>queryColumn.column, true);
        }

        if (gObj.searchSettings.key.length) {
            const sSettings: SearchSettingsModel = gObj.searchSettings;
            if (column.dataSource instanceof DataManager && ((<{ getModuleName?: Function }>column.dataSource.adaptor).getModuleName &&
                (<{ getModuleName?: Function }>column.dataSource.adaptor).getModuleName() === 'ODataV4Adaptor')) {
                query = this.searchQuery(query, column, true);
            } else {
                query.search(sSettings.key, column.foreignKeyValue, sSettings.operator, sSettings.ignoreCase);
            }
        }

        return query;
    }

    private isFiltered(column: Column): { column: PredicateModel[], isTrue: boolean } {
        const filterColumn: PredicateModel[] = this.parent.filterSettings.columns.filter((fColumn: PredicateModel) => {
            return (fColumn.field === column.foreignKeyValue && fColumn.uid === column.uid);
        });
        return {
            column: filterColumn, isTrue: !!filterColumn.length
        };
    }

    protected getModuleName(): string {
        return 'foreignKey';
    }

    protected destroy(): void {
        this.destroyEvent();
    }

    private destroyEvent(): void {
        if (this.parent.isDestroyed) { return; }
        this.parent.off(initForeignKeyColumn, this.initForeignKeyColumns);
        this.parent.off(getForeignKeyData, this.getForeignKeyData);
        this.parent.off(generateQuery, this.generateQueryFormData);
    }
}
