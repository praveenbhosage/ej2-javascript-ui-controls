import { SpreadsheetHelper } from "../util/spreadsheethelper.spec";
import { defaultData } from '../util/datasource.spec';
import { BeforeOpenEventArgs, DialogBeforeOpenEventArgs, ICellRenderer, setCell, SheetModel, Spreadsheet } from '../../../src/index';

describe('Open & Save ->', () => {
    const helper: SpreadsheetHelper = new SpreadsheetHelper('spreadsheet');

    describe('public method ->', () => {
        beforeAll((done: Function) => {
            helper.initializeSpreadsheet({
                openUrl: 'https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/open',
                saveUrl: 'https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/save', sheets: [{ ranges: [{ dataSource: defaultData }] }],
                beforeSave: (args: any) => { args.isFullPost = false }
            }, done);
        });
        afterAll(() => {
            helper.invoke('destroy');
        });
        it('Open', (done: Function) => {
            fetch('https://cdn.syncfusion.com/scripts/spreadsheet/Sample.xlsx').then((response) => {
                response.blob().then((data: Blob) => {
                    const file: File = new File([data], "Sample.xlsx");
                    helper.invoke('open', [{ file: file }]);
                    setTimeout(() => { // check this now
                        // expect(JSON.stringify(helper.getInstance().sheets[0].rows[0].cells[0])).toBe('{"isLocked":true,"style":{"fontWeight":"Bold","textAlign":"Center","verticalAlign":"Middle"},"value":"Customer Name"}');
                        // expect(JSON.stringify(helper.getInstance().sheets[0].rows[30].cells[5])).toBe('{"format":"$#,##0.00","formula":"=SUM(F2:F30)","isLocked":true,"style":{"fontWeight":"Bold"},"value":"282501.5"}');
                        // expect(helper.getInstance().sheets[0].columns[0].width).toBe(180);
                        // expect(helper.invoke('getCell', [0, 1]).textContent).toBe('Model');
                        done();
                    }, 1500);
                });
            });
        });

        // it('Save', (done: Function) => {
        //     helper.invoke('save', []);
        //     setTimeout(()=>{
        //         // Need to check how to write test case for this case
        //         done();
        //     }, 3000);
        // });

        it('Open & Save from JSON', (done: Function) => {
            // helper.edit('A1', 'Test'); Check this now
            // helper.invoke('saveAsJson').then((response: any) => {
            //     expect(response.jsonObject.Workbook.sheets[0].rows[0].cells[0].value).toBe('Test');
            //     helper.invoke('openFromJson', [{ file: response.jsonObject }]);
            //     setTimeout(() => {
            //         expect(helper.getInstance().sheets[0].rows[0].cells[0].value).toBe('Test');
                     done();
            //     });
            // });
        });
    });

    describe('Save method ->', () => {
        beforeAll((done: Function) => {
            helper.initializeSpreadsheet({
                openUrl: 'https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/open',
                saveUrl: 'https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/save', sheets: [{ ranges: [{ dataSource: defaultData }] }]
            }, done);
        });
        afterAll(() => {
            helper.invoke('destroy');
        });
        it('Save dialog opening using keyboard shortcuts->', (done: Function) => {
            helper.triggerKeyNativeEvent(83,true);
            setTimeout(() => {
                expect(helper.getElementFromSpreadsheet('.e-dialog.e-popup-open')).not.toBeNull();
                helper.setAnimationToNone('.e-dialog');
                helper.click('.e-dialog .e-flat');
                done();
            });
        });
        it('Providing no name in save as dialog->', (done: Function) => {
            helper.triggerKeyNativeEvent(83,true);
            setTimeout(() => {
                helper.setAnimationToNone('.e-dialog');
                (helper.getElements('.e-dialog input')[0] as HTMLInputElement).value = '';
                helper.click('.e-dialog .e-primary');
                var alertText =  (document.getElementsByClassName('e-file-alert-span')[0] as HTMLElement).textContent;
                expect(alertText).toBe('File name cannot be empty.');
                helper.click('.e-dialog .e-flat');
                done();
            });
        });
        it('Providing invalid characters in name input in save as dialog->', (done: Function) => {
            helper.triggerKeyNativeEvent(83,true);
            setTimeout(() => {
                helper.setAnimationToNone('.e-dialog');
                (helper.getElements('.e-dialog input')[0] as HTMLInputElement).value = '/Test/';
                helper.click('.e-dialog .e-primary');
                var alertText =  (document.getElementsByClassName('e-file-alert-span')[0] as HTMLElement).textContent;
                expect(alertText).not.toBeNull();
                helper.click('.e-dialog .e-flat');
                done();
            });
        });
        it('Providing name with length > 218->', (done: Function) => {
            helper.triggerKeyNativeEvent(83,true);
            setTimeout(() => {
                helper.setAnimationToNone('.e-dialog');
                (helper.getElements('.e-dialog input')[0] as HTMLInputElement).value = 'xcvbnjhgfdwertyuytresdxcvbnbvcxzxcvbnmjuytrewqasxcvbhjuytredscvhjiokjhgfdsxsaqwertyuioooooooooplkjhgfdsazxcvbnmkiuytrewqasdfghjklkmnbvcxzaqwertyujhgfdertyuiuytrewqazxcvbnjkioiuytrewqwertyuiopoiuytrewqasdfghjklkjhgfdszxcvbnm';
                helper.click('.e-dialog .e-primary');
                var alertText =  (document.getElementsByClassName('e-file-alert-span')[0] as HTMLElement).textContent;
                expect(alertText).toBe('The name is too long.');
                helper.click('.e-dialog .e-flat');
                done();
            });
        });
        it('Save error dialog opening by calling showerrordialog method->', (done: Function) => {
            helper.getInstance().saveModule.showErrorDialog({content: 'Save not Working'});
            setTimeout(() => {
                expect(helper.getElementFromSpreadsheet('.e-dialog.e-popup-open')).not.toBeNull();
                helper.setAnimationToNone('.e-dialog');
                helper.click('.e-dialog .e-primary');
                done();
            });
        });
        it('Cancelling the save as dialog opening', (done: Function) => {
            const spreadsheet: Spreadsheet = helper.getInstance();
            spreadsheet.dialogBeforeOpen = (args: DialogBeforeOpenEventArgs): void => {
            args.cancel = true;
            };
            helper.triggerKeyNativeEvent(83,true);
            setTimeout(function () {
                expect(helper.getElementFromSpreadsheet('.e-dialog.e-popup-open')).toBeNull();
                done();
            });
        });
    });
});
describe('EJ2-56416 ->', () => {
    const helper: SpreadsheetHelper = new SpreadsheetHelper('spreadsheet');
    beforeAll((done: Function) => {
        helper.initializeSpreadsheet({
            openUrl: 'https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/open',
            sheets: [{ ranges: [{ dataSource: defaultData }] }],
            beforeOpen: (args: BeforeOpenEventArgs) => { args.cancel = true }
        }, done);
    });
    afterAll(() => {
        helper.invoke('destroy');
    });
    it('Spinner loads endlessly while importing an excel file', (done: Function) => {
        fetch('https://cdn.syncfusion.com/scripts/spreadsheet/Sample.xlsx').then((response) => {
            response.blob().then((data: Blob) => {
                const file: File = new File([data], "Sample.xlsx");
                helper.invoke('open', [{ file: file }]);
                setTimeout(() => {
                    expect(helper.getElements('.e-spin-show')[0]).toBeUndefined();
                    done();
                }, 1500);
            });
        });
    });
    it('Number format update checking after importing', (done: Function) => {
        const spreadsheet: Spreadsheet = helper.getInstance();
        spreadsheet.openModule.isImportedFile = true; // After importing, this property will be enabled.
        const sheet: SheetModel = helper.invoke('getActiveSheet');
        setCell(12, 0, sheet, { value: '5-10' });
        const cell: HTMLElement = helper.invoke('getCell', [12, 0]);
        spreadsheet.serviceLocator.getService<ICellRenderer>('cell').refresh(12, 0, false, cell, false, false, true);
        expect(cell.textContent).toBe('5-10');
        expect(sheet.rows[12].cells[0].format).toBeUndefined();
        helper.edit('B13', '5-10');
        expect(sheet.rows[12].cells[1].value).toBe('45056');
        expect(sheet.rows[12].cells[1].format).toBe('dd-MMM');
        done();
    });
});