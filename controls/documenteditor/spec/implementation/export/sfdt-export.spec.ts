import { DocumentEditor } from '../../../src/document-editor/document-editor';
import { PageLayoutViewer, LayoutViewer, DocumentHelper } from '../../../src/document-editor/implementation/viewer/viewer';;
import { createElement, isNullOrUndefined } from '@syncfusion/ej2-base';
import { TestHelper } from '../../test-helper.spec';
import { Editor } from '../../../src/document-editor/implementation/editor/editor';
import { Selection } from '../../../src/document-editor/implementation/selection/selection';
import { SfdtExport } from '../../../src/document-editor/implementation/writer/sfdt-export';
import { BodyWidget, LineWidget, ParagraphWidget, ShapeElementBox, TableCellWidget, TableRowWidget, TableWidget } from '../../../src/document-editor/implementation/viewer/page';
import { WordExport } from '../../../src/document-editor/implementation/writer/word-export';

let charParaBidi: any = { "sections": [{ "blocks": [{ "characterFormat": { "bidi": true }, "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "???", "characterFormat": { "bidi": true } }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Second column", "characterFormat": { "bdo": "RTL" } }, { "name": "_GoBack", "bookmarkType": 0 }, { "name": "_GoBack", "bookmarkType": 1 }, { "text": " ", "characterFormat": { "bdo": "RTL" } }, { "text": "?", "characterFormat": { "bdo": "RTL" } }] }, { "paragraphFormat": { "styleName": "Normal", "bidi": true }, "inlines": [{ "text": "Third column " }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Second Page" }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [] }, { "paragraphFormat": { "styleName": "Normal", "bidi": true }, "inlines": [{ "text": "ssASasAS" }] }], "headersFooters": {}, "sectionFormat": { "headerDistance": 36.0, "footerDistance": 36.0, "pageWidth": 612.0, "pageHeight": 792.0, "leftMargin": 72.0, "rightMargin": 72.0, "topMargin": 72.0, "bottomMargin": 72.0, "differentFirstPage": false, "differentOddAndEvenPages": false, "bidi": true } }], "characterFormat": { "fontSize": 11.0, "fontFamily": "Calibri" }, "paragraphFormat": { "afterSpacing": 8.0, "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple" }, "background": { "color": "#FFFFFFFF" }, "styles": [{ "type": "Paragraph", "name": "Normal", "next": "Normal" }, { "type": "Character", "name": "Default Paragraph Font" }, { "type": "Character", "name": "Line Number", "basedOn": "Default Paragraph Font" }, { "type": "Paragraph", "name": "Header", "basedOn": "Normal", "link": "Header Char", "paragraphFormat": { "afterSpacing": 0.0, "lineSpacing": 1.0, "lineSpacingType": "Multiple", "tabs": [{ "tabJustification": "Center", "position": 234.0, "tabLeader": "None", "deletePosition": 0.0 }, { "tabJustification": "Right", "position": 468.0, "tabLeader": "None", "deletePosition": 0.0 }] } }, { "type": "Character", "name": "Header Char", "basedOn": "Default Paragraph Font" }, { "type": "Paragraph", "name": "Footer", "basedOn": "Normal", "link": "Footer Char", "paragraphFormat": { "afterSpacing": 0.0, "lineSpacing": 1.0, "lineSpacingType": "Multiple", "tabs": [{ "tabJustification": "Center", "position": 234.0, "tabLeader": "None", "deletePosition": 0.0 }, { "tabJustification": "Right", "position": 468.0, "tabLeader": "None", "deletePosition": 0.0 }] } }, { "type": "Character", "name": "Footer Char", "basedOn": "Default Paragraph Font" }] };
let tableBidi: any = { "sections": [{ "blocks": [{ "rows": [{ "rowFormat": { "allowBreakAcrossPages": true, "isHeader": false, "height": 0.0, "heightType": "AtLeast", "borders": { "left": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "right": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "top": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "bottom": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } } }, "cells": [{ "blocks": [{ "characterFormat": { "bidi": true }, "paragraphFormat": { "styleName": "Normal", "bidi": true }, "inlines": [{ "text": "sample" }] }], "cellFormat": { "columnSpan": 1, "rowSpan": 1, "preferredWidth": 233.75, "preferredWidthType": "Point", "verticalAlignment": "Top", "isSamePaddingAsTable": true, "borders": { "left": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "right": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "top": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "bottom": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } } } }, { "blocks": [{ "characterFormat": { "bidi": true }, "paragraphFormat": { "styleName": "Normal", "bidi": true }, "inlines": [] }], "cellFormat": { "columnSpan": 1, "rowSpan": 1, "preferredWidth": 233.75, "preferredWidthType": "Point", "verticalAlignment": "Top", "isSamePaddingAsTable": true, "borders": { "left": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "right": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "top": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "bottom": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } } } }] }, { "rowFormat": { "allowBreakAcrossPages": true, "isHeader": false, "height": 0.0, "heightType": "AtLeast", "borders": { "left": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "right": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "top": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "bottom": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } } }, "cells": [{ "blocks": [{ "characterFormat": { "bidi": true }, "paragraphFormat": { "styleName": "Normal", "bidi": true }, "inlines": [] }], "cellFormat": { "columnSpan": 1, "rowSpan": 1, "preferredWidth": 233.75, "preferredWidthType": "Point", "verticalAlignment": "Top", "isSamePaddingAsTable": true, "borders": { "left": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "right": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "top": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "bottom": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } } } }, { "blocks": [{ "characterFormat": { "bidi": true }, "paragraphFormat": { "styleName": "Normal", "bidi": true }, "inlines": [] }], "cellFormat": { "columnSpan": 1, "rowSpan": 1, "preferredWidth": 233.75, "preferredWidthType": "Point", "verticalAlignment": "Top", "isSamePaddingAsTable": true, "borders": { "left": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "right": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "top": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "bottom": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } } } }] }], "title": null, "description": null, "tableFormat": { "allowAutoFit": true, "leftIndent": 0.0, "tableAlignment": "Left", "preferredWidthType": "Auto", "borders": { "left": { "lineStyle": "Single", "lineWidth": 0.5, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "right": { "lineStyle": "Single", "lineWidth": 0.5, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "top": { "lineStyle": "Single", "lineWidth": 0.5, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "bottom": { "lineStyle": "Single", "lineWidth": 0.5, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "vertical": { "lineStyle": "Single", "lineWidth": 0.5, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "Single", "lineWidth": 0.5, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } }, "bidi": true } }, { "paragraphFormat": { "styleName": "Normal", "bidi": true }, "inlines": [] }, { "paragraphFormat": { "styleName": "Normal", "bidi": true }, "inlines": [{ "text": "hgfgfghfgfghfhgfgh" }, { "name": "_GoBack", "bookmarkType": 0 }, { "name": "_GoBack", "bookmarkType": 1 }] }], "headersFooters": {}, "sectionFormat": { "headerDistance": 36.0, "footerDistance": 36.0, "pageWidth": 612.0, "pageHeight": 792.0, "leftMargin": 72.0, "rightMargin": 72.0, "topMargin": 72.0, "bottomMargin": 72.0, "differentFirstPage": false, "differentOddAndEvenPages": false, "bidi": false } }], "characterFormat": { "fontSize": 11.0, "fontFamily": "Calibri" }, "paragraphFormat": { "afterSpacing": 8.0, "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple" }, "background": { "color": "#FFFFFFFF" }, "styles": [{ "type": "Paragraph", "name": "Normal", "next": "Normal" }, { "type": "Character", "name": "Default Paragraph Font" }] };


describe('Sfdt export for section,character and paragraph format Bidi validation', () => {
    let editor: DocumentEditor;
    let documentHelper: DocumentHelper;
    let exportData: any;
    beforeAll((): void => {
        let ele: HTMLElement = createElement('div', { id: 'container' });
        document.body.appendChild(ele);
        DocumentEditor.Inject(SfdtExport);
        editor = new DocumentEditor({ enableSfdtExport: true });
        (editor.documentHelper as any).containerCanvasIn = TestHelper.containerCanvas;
        (editor.documentHelper as any).selectionCanvasIn = TestHelper.selectionCanvas;
        (editor.documentHelper.render as any).pageCanvasIn = TestHelper.pageCanvas;
        (editor.documentHelper.render as any).selectionCanvasIn = TestHelper.pageSelectionCanvas;
        editor.appendTo('#container');
        documentHelper = editor.documentHelper;
        editor.open(JSON.stringify(charParaBidi));
        exportData = JSON.parse(editor.sfdtExportModule.serialize());
    });
    afterAll((done): void => {
        documentHelper.destroy();
        documentHelper = undefined;
        editor.destroy();
        document.body.removeChild(document.getElementById('container'));
        editor = undefined;
        document.body.innerHTML = '';
        setTimeout(function () {
            done();
        }, 1000);
    });
    it('Section format in export bidi validation', () => {
        console.log('Section format in export bidi validation');
        expect(exportData.sections[0].sectionFormat.bidi).toBe(true);
    });
    it('Character format in export bidi validation', () => {
        console.log('Character format in export bidi validation');
        expect(exportData.sections[0].blocks[0].characterFormat.bidi).toBe(true);
        expect(exportData.sections[0].blocks[0].paragraphFormat.bidi).toBeUndefined();
    });
    it('Paragraph format in export bidi validation', () => {
        console.log('Paragraph format in export bidi validation');
        expect(exportData.sections[0].blocks[2].paragraphFormat.bidi).toBe(true);
    });

    it('Character format in export bdo validation', () => {
        console.log('Character format in export bdo validation');
        expect(exportData.sections[0].blocks[1].inlines[0].characterFormat.bdo).toBe('RTL');
    });
});

describe('Sfdt export for Table format Bidi validation', () => {
    let editor: DocumentEditor;
    let documentHelper: DocumentHelper;
    let exportData: any;
    beforeAll((): void => {
        let ele: HTMLElement = createElement('div', { id: 'container' });
        document.body.appendChild(ele);
        DocumentEditor.Inject(SfdtExport);
        editor = new DocumentEditor({ enableSfdtExport: true });
        (editor.documentHelper as any).containerCanvasIn = TestHelper.containerCanvas;
        (editor.documentHelper as any).selectionCanvasIn = TestHelper.selectionCanvas;
        (editor.documentHelper.render as any).pageCanvasIn = TestHelper.pageCanvas;
        (editor.documentHelper.render as any).selectionCanvasIn = TestHelper.pageSelectionCanvas;
        editor.appendTo('#container');
        documentHelper = editor.documentHelper;
        editor.open(JSON.stringify(tableBidi));
        exportData = JSON.parse(editor.sfdtExportModule.serialize());
    });
    afterAll((done): void => {
        documentHelper.destroy();
        documentHelper = undefined;
        editor.destroy();
        document.body.removeChild(document.getElementById('container'));
        editor = undefined;
        document.body.innerHTML = '';
        setTimeout(function () {
            done();
        }, 1000);
    });
    it('Section format in export bidi validation', () => {
        console.log('Section format in export bidi validation');
        expect(exportData.sections[0].sectionFormat.bidi).toBe(false);
    });
    it('Table format in export bidi validation', () => {
        console.log('Table format in export bidi validation');
        expect(exportData.sections[0].blocks[0].tableFormat.bidi).toBe(true);
    });
});


let rtlFormat: any = { "sections": [{ "blocks": [{ "characterFormat": { "bold": true, "boldBidi": true }, "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Sample", "characterFormat": { "bold": true, "boldBidi": true } }] }, { "characterFormat": { "bold": true, "fontSize": 22.0, "fontFamily": "Segoe UI", "boldBidi": true, "fontSizeBidi": 22.0, "fontFamilyBidi": "Segoe UI" }, "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "سشةحمث", "characterFormat": { "bold": true, "fontSize": 22.0, "fontFamily": "Segoe UI", "bidi": true, "boldBidi": true, "fontSizeBidi": 22.0, "fontFamilyBidi": "Segoe UI" } }] }, { "characterFormat": { "italic": true, "fontSize": 22.0, "bidi": true, "italicBidi": true, "fontSizeBidi": 22.0 }, "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "name": "_GoBack", "bookmarkType": 0 }, { "text": "דשצפךק", "characterFormat": { "italic": true, "fontSize": 22.0, "bidi": true, "italicBidi": true, "fontSizeBidi": 22.0 } }, { "name": "_GoBack", "bookmarkType": 1 }] }], "headersFooters": {}, "sectionFormat": { "headerDistance": 36.0, "footerDistance": 36.0, "pageWidth": 612.0, "pageHeight": 792.0, "leftMargin": 72.0, "rightMargin": 72.0, "topMargin": 72.0, "bottomMargin": 72.0, "differentFirstPage": false, "differentOddAndEvenPages": false, "bidi": false } }], "characterFormat": { "fontSize": 11.0, "fontFamily": "Calibri", "fontSizeBidi": 11.0, "fontFamilyBidi": "Calibri" }, "paragraphFormat": { "afterSpacing": 8.0, "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple" }, "background": { "color": "#FFFFFFFF" }, "styles": [{ "type": "Paragraph", "name": "Normal", "next": "Normal" }, { "type": "Character", "name": "Default Paragraph Font" }] };

describe('Sfdt export for Table format Bidi validation', () => {
    let editor: DocumentEditor;
    let exportData: any;
    let documentHelper: DocumentHelper;
    beforeAll((): void => {
        let ele: HTMLElement = createElement('div', { id: 'container' });
        document.body.appendChild(ele);
        DocumentEditor.Inject(SfdtExport, WordExport);
        editor = new DocumentEditor({ enableSfdtExport: true, enableWordExport: true });
        (editor.documentHelper as any).containerCanvasIn = TestHelper.containerCanvas;
        (editor.documentHelper as any).selectionCanvasIn = TestHelper.selectionCanvas;
        (editor.documentHelper.render as any).pageCanvasIn = TestHelper.pageCanvas;
        (editor.documentHelper.render as any).selectionCanvasIn = TestHelper.pageSelectionCanvas;
        editor.appendTo('#container');
        documentHelper = editor.documentHelper;
        editor.open(JSON.stringify(rtlFormat));
        exportData = JSON.parse(editor.sfdtExportModule.serialize());
    });
    afterAll((done): void => {
        documentHelper.destroy();
        documentHelper = undefined;
        editor.destroy();
        document.body.removeChild(document.getElementById('container'));
        editor = undefined;
        document.body.innerHTML = '';
        setTimeout(function () {
            done();
        }, 1000);
    });
    it('Rtl export font family bidi validation', () => {
        console.log('Rtl export font family bidi validation');
        let line: LineWidget = (editor.documentHelper.pages[0].bodyWidgets[0].childWidgets[1] as ParagraphWidget).childWidgets[0] as LineWidget;
        expect(line.children[0].characterFormat.fontSizeBidi).toBe(22);
        expect(line.children[0].characterFormat.fontFamilyBidi).toBe("Segoe UI");
    });
    it('Word export of RTL format ', () => {
        console.log('Word export of RTL format ');
        expect(() => { editor.save('Smaple', 'Docx') }).not.toThrowError();
    });
});


let tab: any = {
    "sections": [
        {
            "blocks": [
                {
                    "inlines": [
                        {
                            "text": "\t"
                        }
                    ]
                }
            ]
        }
    ],
    "defaultTabWidth": 56.0
};
describe('Default tab width export validation', () => {
    let editor: DocumentEditor;
    let documentHelper: DocumentHelper;
    beforeAll((): void => {
        let ele: HTMLElement = createElement('div', { id: 'container' });
        document.body.appendChild(ele);
        DocumentEditor.Inject(SfdtExport, WordExport);
        editor = new DocumentEditor({ enableSfdtExport: true, enableWordExport: true });
        (editor.documentHelper as any).containerCanvasIn = TestHelper.containerCanvas;
        (editor.documentHelper as any).selectionCanvasIn = TestHelper.selectionCanvas;
        (editor.documentHelper.render as any).pageCanvasIn = TestHelper.pageCanvas;
        (editor.documentHelper.render as any).selectionCanvasIn = TestHelper.pageSelectionCanvas;
        editor.appendTo('#container');
        documentHelper = editor.documentHelper;
    });
    afterAll((done): void => {
        documentHelper.destroy();
        documentHelper = undefined;
        editor.destroy();
        document.body.removeChild(document.getElementById('container'));
        editor = undefined;
        document.body.innerHTML = '';
        setTimeout(function () {
            done();
        }, 1000);
    });
    it('opened document- check default tab width', () => {
        console.log('opened document- check default tab width');
        editor.open(JSON.stringify(tab));
        documentHelper = editor.documentHelper;
        let document: any = documentHelper.owner.sfdtExportModule.write();
        expect(document.defaultTabWidth).toBe(56);
    });
    it('open blank default tab width export validation', () => {
        console.log('open blank default tab width export validation');
        editor.openBlank();
        documentHelper = editor.documentHelper;
        let document: any = documentHelper.owner.sfdtExportModule.write();
        expect(document.defaultTabWidth).toBe(36);
    });
});
let chart: any = { "sections": [{ "sectionFormat": { "pageWidth": 612, "pageHeight": 792, "leftMargin": 72, "rightMargin": 72, "topMargin": 72, "bottomMargin": 72, "differentFirstPage": false, "differentOddAndEvenPages": false, "headerDistance": 36, "footerDistance": 36, "bidi": false }, "blocks": [{ "paragraphFormat": { "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [{ "characterFormat": {}, "chartLegend": { "position": "Bottom", "chartTitleArea": { "fontName": "+mn-lt", "fontSize": 9, "layout": { "layoutX": 0, "layoutY": 0 }, "dataFormat": { "fill": { "foreColor": "000000", "rgb": "#000000" }, "line": { "color": "808080", "rgb": "#808080" } } } }, "chartTitleArea": { "fontName": "+mn-lt", "fontSize": 14, "layout": { "layoutX": 0, "layoutY": 0 }, "dataFormat": { "fill": { "foreColor": "000000", "rgb": "#000000" }, "line": { "color": "000000", "rgb": "#000000" } } }, "chartArea": { "foreColor": "#FFFFFFFF" }, "plotArea": { "foreColor": "#000000FF" }, "chartCategory": [{ "chartData": [{ "yValue": 4.3 }, { "yValue": 2.4 }, { "yValue": 2 }], "categoryXName": "Category 1" }, { "chartData": [{ "yValue": 2.5 }, { "yValue": 4.4 }, { "yValue": 2 }], "categoryXName": "Category 2" }, { "chartData": [{ "yValue": 3.5 }, { "yValue": 1.8 }, { "yValue": 3 }], "categoryXName": "Category 3" }, { "chartData": [{ "yValue": 4.5 }, { "yValue": 2.8 }, { "yValue": 5 }], "categoryXName": "Category 4" }], "chartSeries": [{ "dataPoints": [{ "fill": { "foreColor": "4472c4", "rgb": "#4472c4" }, "line": { "color": "000000", "rgb": "#000000" } }], "seriesName": "Series 1", "dataLabel": { "position": "Outside", "fontName": "+mn-lt", "fontColor": "404040", "fontSize": 9, "isLegendKey": false, "isBubbleSize": false, "isCategoryName": false, "isSeriesName": false, "isValue": true, "isPercentage": false, "isLeaderLines": false }, "errorBar": { "type": "StandardError", "direction": "Both", "endStyle": "Cap", "errorValue": 10 }, "trendLines": [{ "name": "Linear (Series 1)", "type": "Linear", "forward": 0, "backward": 0, "intercept": 2, "isDisplayEquation": true, "isDisplayRSquared": true }] }, { "dataPoints": [{ "fill": { "foreColor": "ed7d31", "rgb": "#ed7d31" }, "line": { "color": "000000", "rgb": "#000000" } }], "seriesName": "Series 2", "dataLabel": { "position": "Outside", "fontName": "+mn-lt", "fontColor": "404040", "fontSize": 9, "isLegendKey": false, "isBubbleSize": false, "isCategoryName": false, "isSeriesName": false, "isValue": true, "isPercentage": false, "isLeaderLines": false }, "errorBar": { "type": "StandardError", "direction": "Both", "endStyle": "Cap", "errorValue": 10 } }, { "dataPoints": [{ "fill": { "foreColor": "a5a5a5", "rgb": "#a5a5a5" }, "line": { "color": "000000", "rgb": "#000000" } }], "seriesName": "Series 3", "dataLabel": { "position": "Outside", "fontName": "+mn-lt", "fontColor": "404040", "fontSize": 9, "isLegendKey": false, "isBubbleSize": false, "isCategoryName": false, "isSeriesName": false, "isValue": true, "isPercentage": false, "isLeaderLines": false }, "errorBar": { "type": "StandardError", "direction": "Both", "endStyle": "Cap", "errorValue": 10 } }], "chartPrimaryCategoryAxis": { "chartTitle": null, "chartTitleArea": { "layout": {}, "dataFormat": { "fill": {}, "line": {} } }, "categoryType": "Automatic", "fontSize": 9, "fontName": "+mn-lt", "numberFormat": "General", "maximumValue": 0, "minimumValue": 0, "majorUnit": 0, "hasMajorGridLines": false, "hasMinorGridLines": false, "majorTickMark": "TickMark_None", "minorTickMark": "TickMark_None", "tickLabelPosition": "TickLabelPosition_NextToAxis" }, "chartPrimaryValueAxis": { "chartTitle": null, "chartTitleArea": { "layout": {}, "dataFormat": { "fill": {}, "line": {} } }, "fontSize": 9, "fontName": "+mn-lt", "maximumValue": 6, "minimumValue": 0, "majorUnit": 1, "hasMajorGridLines": true, "hasMinorGridLines": false, "majorTickMark": "TickMark_None", "minorTickMark": "TickMark_None", "tickLabelPosition": "TickLabelPosition_NextToAxis" }, "chartTitle": "ClusterBar", "chartType": "Bar_Clustered", "gapWidth": 182, "overlap": 0, "height": 252, "width": 432 }, { "characterFormat": {}, "bookmarkType": 0, "name": "_GoBack" }, { "characterFormat": {}, "bookmarkType": 1, "name": "_GoBack" }] }], "headersFooters": {} }], "characterFormat": { "bold": false, "italic": false, "fontSize": 11, "fontFamily": "Calibri", "underline": "None", "strikethrough": "None", "baselineAlignment": "Normal", "highlightColor": "NoColor", "fontColor": "#000000", "fontSizeBidi": 11, "fontFamilyBidi": "Calibri" }, "paragraphFormat": { "leftIndent": 0, "rightIndent": 0, "firstLineIndent": 0, "textAlignment": "Left", "beforeSpacing": 0, "afterSpacing": 8, "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple", "listFormat": {}, "bidi": false }, "defaultTabWidth": 36, "styles": [{ "name": "Normal", "type": "Paragraph", "paragraphFormat": { "listFormat": {} }, "characterFormat": {}, "next": "Normal" }, { "name": "Default Paragraph Font", "type": "Character", "characterFormat": {} }, { "name": "Balloon Text", "type": "Paragraph", "paragraphFormat": { "afterSpacing": 0, "lineSpacing": 1, "lineSpacingType": "Multiple", "listFormat": {} }, "characterFormat": { "fontSize": 9, "fontFamily": "Segoe UI", "fontSizeBidi": 9, "fontFamilyBidi": "Segoe UI" }, "basedOn": "Normal", "link": "Balloon Text Char" }, { "name": "Balloon Text Char", "type": "Character", "characterFormat": { "fontSize": 9, "fontFamily": "Segoe UI", "fontSizeBidi": 9, "fontFamilyBidi": "Segoe UI" }, "basedOn": "Default Paragraph Font" }, { "name": "Heading 1", "type": "Paragraph", "paragraphFormat": { "leftIndent": 0, "rightIndent": 0, "firstLineIndent": 0, "textAlignment": "Left", "beforeSpacing": 12, "afterSpacing": 0, "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple", "outlineLevel": "Level1", "listFormat": {} }, "characterFormat": { "fontSize": 16, "fontFamily": "Calibri Light", "fontColor": "#2F5496" }, "basedOn": "Normal", "link": "Heading 1 Char", "next": "Normal" }, { "name": "Heading 1 Char", "type": "Character", "characterFormat": { "fontSize": 16, "fontFamily": "Calibri Light", "fontColor": "#2F5496" }, "basedOn": "Default Paragraph Font" }, { "name": "Heading 2", "type": "Paragraph", "paragraphFormat": { "leftIndent": 0, "rightIndent": 0, "firstLineIndent": 0, "textAlignment": "Left", "beforeSpacing": 2, "afterSpacing": 0, "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple", "outlineLevel": "Level2", "listFormat": {} }, "characterFormat": { "fontSize": 13, "fontFamily": "Calibri Light", "fontColor": "#2F5496" }, "basedOn": "Normal", "link": "Heading 2 Char", "next": "Normal" }, { "name": "Heading 2 Char", "type": "Character", "characterFormat": { "fontSize": 13, "fontFamily": "Calibri Light", "fontColor": "#2F5496" }, "basedOn": "Default Paragraph Font" }, { "name": "Heading 3", "type": "Paragraph", "paragraphFormat": { "leftIndent": 0, "rightIndent": 0, "firstLineIndent": 0, "textAlignment": "Left", "beforeSpacing": 2, "afterSpacing": 0, "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple", "outlineLevel": "Level3", "listFormat": {} }, "characterFormat": { "fontSize": 12, "fontFamily": "Calibri Light", "fontColor": "#1F3763" }, "basedOn": "Normal", "link": "Heading 3 Char", "next": "Normal" }, { "name": "Heading 3 Char", "type": "Character", "characterFormat": { "fontSize": 12, "fontFamily": "Calibri Light", "fontColor": "#1F3763" }, "basedOn": "Default Paragraph Font" }, { "name": "Heading 4", "type": "Paragraph", "paragraphFormat": { "leftIndent": 0, "rightIndent": 0, "firstLineIndent": 0, "textAlignment": "Left", "beforeSpacing": 2, "afterSpacing": 0, "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple", "outlineLevel": "Level4", "listFormat": {} }, "characterFormat": { "italic": true, "fontFamily": "Calibri Light", "fontColor": "#2F5496" }, "basedOn": "Normal", "link": "Heading 4 Char", "next": "Normal" }, { "name": "Heading 4 Char", "type": "Character", "characterFormat": { "italic": true, "fontFamily": "Calibri Light", "fontColor": "#2F5496" }, "basedOn": "Default Paragraph Font" }, { "name": "Heading 5", "type": "Paragraph", "paragraphFormat": { "leftIndent": 0, "rightIndent": 0, "firstLineIndent": 0, "textAlignment": "Left", "beforeSpacing": 2, "afterSpacing": 0, "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple", "outlineLevel": "Level5", "listFormat": {} }, "characterFormat": { "fontFamily": "Calibri Light", "fontColor": "#2F5496" }, "basedOn": "Normal", "link": "Heading 5 Char", "next": "Normal" }, { "name": "Heading 5 Char", "type": "Character", "characterFormat": { "fontFamily": "Calibri Light", "fontColor": "#2F5496" }, "basedOn": "Default Paragraph Font" }, { "name": "Heading 6", "type": "Paragraph", "paragraphFormat": { "leftIndent": 0, "rightIndent": 0, "firstLineIndent": 0, "textAlignment": "Left", "beforeSpacing": 2, "afterSpacing": 0, "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple", "outlineLevel": "Level6", "listFormat": {} }, "characterFormat": { "fontFamily": "Calibri Light", "fontColor": "#1F3763" }, "basedOn": "Normal", "link": "Heading 6 Char", "next": "Normal" }, { "name": "Heading 6 Char", "type": "Character", "characterFormat": { "fontFamily": "Calibri Light", "fontColor": "#1F3763" }, "basedOn": "Default Paragraph Font" }], "lists": [], "abstractLists": [] };
let lineChart: any = { "sections": [{ "sectionFormat": { "pageWidth": 612, "pageHeight": 792, "leftMargin": 72, "rightMargin": 72, "topMargin": 72, "bottomMargin": 72, "differentFirstPage": false, "differentOddAndEvenPages": false, "headerDistance": 36, "footerDistance": 36, "bidi": false }, "blocks": [{ "paragraphFormat": { "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [{ "characterFormat": {}, "chartLegend": { "position": "Bottom", "chartTitleArea": { "fontName": "+mn-lt", "fontSize": 9, "layout": { "layoutX": 0, "layoutY": 0 }, "dataFormat": { "fill": { "foreColor": "000000", "rgb": "#000000" }, "line": { "color": "808080", "rgb": "#808080" } } } }, "chartTitleArea": { "fontName": "+mn-lt", "fontSize": 14, "layout": { "layoutX": 0, "layoutY": 0 }, "dataFormat": { "fill": { "foreColor": "000000", "rgb": "#000000" }, "line": { "color": "000000", "rgb": "#000000" } } }, "chartArea": { "foreColor": "#FFFFFFFF" }, "plotArea": { "foreColor": "#000000FF" }, "chartCategory": [{ "chartData": [{ "yValue": 4.3 }, { "yValue": 2.4 }, { "yValue": 2 }], "categoryXName": "Category 1" }, { "chartData": [{ "yValue": 2.5 }, { "yValue": 4.4 }, { "yValue": 2 }], "categoryXName": "Category 2" }, { "chartData": [{ "yValue": 3.5 }, { "yValue": 1.8 }, { "yValue": 3 }], "categoryXName": "Category 3" }, { "chartData": [{ "yValue": 4.5 }, { "yValue": 2.8 }, { "yValue": 5 }], "categoryXName": "Category 4" }], "chartSeries": [{ "dataPoints": [{ "fill": { "foreColor": "000000", "rgb": "#000000" }, "line": { "color": "4472c4", "rgb": "#4472c4" } }], "seriesName": "Series 1", "seriesFormat": { "markerStyle": "Circle", "markerSize": 5, "markerColor": "ff4472c4" } }, { "dataPoints": [{ "fill": { "foreColor": "000000", "rgb": "#000000" }, "line": { "color": "ed7d31", "rgb": "#ed7d31" } }], "seriesName": "Series 2", "seriesFormat": { "markerStyle": "Circle", "markerSize": 5, "markerColor": "ffed7d31" } }, { "dataPoints": [{ "fill": { "foreColor": "000000", "rgb": "#000000" }, "line": { "color": "a5a5a5", "rgb": "#a5a5a5" } }], "seriesName": "Series 3", "seriesFormat": { "markerStyle": "Circle", "markerSize": 5, "markerColor": "ffa5a5a5" } }], "chartPrimaryCategoryAxis": { "chartTitle": null, "chartTitleArea": { "layout": {}, "dataFormat": { "fill": {}, "line": {} } }, "categoryType": "Automatic", "fontSize": 9, "fontName": "+mn-lt", "numberFormat": "General", "maximumValue": 0, "minimumValue": 0, "majorUnit": 0, "hasMajorGridLines": false, "hasMinorGridLines": false, "majorTickMark": "TickMark_None", "minorTickMark": "TickMark_None", "tickLabelPosition": "TickLabelPosition_NextToAxis" }, "chartPrimaryValueAxis": { "chartTitle": null, "chartTitleArea": { "layout": {}, "dataFormat": { "fill": {}, "line": {} } }, "fontSize": 9, "fontName": "+mn-lt", "maximumValue": 6, "minimumValue": 0, "majorUnit": 1, "hasMajorGridLines": true, "hasMinorGridLines": false, "majorTickMark": "TickMark_None", "minorTickMark": "TickMark_None", "tickLabelPosition": "TickLabelPosition_NextToAxis" }, "chartTitle": "Chart Title", "chartType": "Line_Markers", "gapWidth": 0, "overlap": 0, "height": 252, "width": 432 }, { "characterFormat": {}, "bookmarkType": 0, "name": "_GoBack" }, { "characterFormat": {}, "bookmarkType": 1, "name": "_GoBack" }] }], "headersFooters": {} }], "characterFormat": { "bold": false, "italic": false, "fontSize": 11, "fontFamily": "Calibri", "underline": "None", "strikethrough": "None", "baselineAlignment": "Normal", "highlightColor": "NoColor", "fontColor": "#000000", "fontSizeBidi": 11, "fontFamilyBidi": "Calibri" }, "paragraphFormat": { "leftIndent": 0, "rightIndent": 0, "firstLineIndent": 0, "textAlignment": "Left", "beforeSpacing": 0, "afterSpacing": 8, "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple", "listFormat": {}, "bidi": false }, "defaultTabWidth": 36, "enforcement": false, "hashValue": "", "saltValue": "", "formatting": false, "protectionType": "ReadOnly", "styles": [{ "name": "Normal", "type": "Paragraph", "paragraphFormat": { "listFormat": {} }, "characterFormat": {}, "next": "Normal" }, { "name": "Default Paragraph Font", "type": "Character", "characterFormat": {} }, { "name": "Balloon Text", "type": "Paragraph", "paragraphFormat": { "afterSpacing": 0, "lineSpacing": 1, "lineSpacingType": "Multiple", "listFormat": {} }, "characterFormat": { "fontSize": 9, "fontFamily": "Segoe UI", "fontSizeBidi": 9, "fontFamilyBidi": "Segoe UI" }, "basedOn": "Normal", "link": "Balloon Text Char" }, { "name": "Balloon Text Char", "type": "Character", "characterFormat": { "fontSize": 9, "fontFamily": "Segoe UI", "fontSizeBidi": 9, "fontFamilyBidi": "Segoe UI" }, "basedOn": "Default Paragraph Font" }, { "name": "Heading 1", "type": "Paragraph", "paragraphFormat": { "leftIndent": 0, "rightIndent": 0, "firstLineIndent": 0, "textAlignment": "Left", "beforeSpacing": 12, "afterSpacing": 0, "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple", "outlineLevel": "Level1", "listFormat": {} }, "characterFormat": { "fontSize": 16, "fontFamily": "Calibri Light", "fontColor": "#2F5496" }, "basedOn": "Normal", "link": "Heading 1 Char", "next": "Normal" }, { "name": "Heading 1 Char", "type": "Character", "characterFormat": { "fontSize": 16, "fontFamily": "Calibri Light", "fontColor": "#2F5496" }, "basedOn": "Default Paragraph Font" }, { "name": "Heading 2", "type": "Paragraph", "paragraphFormat": { "leftIndent": 0, "rightIndent": 0, "firstLineIndent": 0, "textAlignment": "Left", "beforeSpacing": 2, "afterSpacing": 0, "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple", "outlineLevel": "Level2", "listFormat": {} }, "characterFormat": { "fontSize": 13, "fontFamily": "Calibri Light", "fontColor": "#2F5496" }, "basedOn": "Normal", "link": "Heading 2 Char", "next": "Normal" }, { "name": "Heading 2 Char", "type": "Character", "characterFormat": { "fontSize": 13, "fontFamily": "Calibri Light", "fontColor": "#2F5496" }, "basedOn": "Default Paragraph Font" }, { "name": "Heading 3", "type": "Paragraph", "paragraphFormat": { "leftIndent": 0, "rightIndent": 0, "firstLineIndent": 0, "textAlignment": "Left", "beforeSpacing": 2, "afterSpacing": 0, "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple", "outlineLevel": "Level3", "listFormat": {} }, "characterFormat": { "fontSize": 12, "fontFamily": "Calibri Light", "fontColor": "#1F3763" }, "basedOn": "Normal", "link": "Heading 3 Char", "next": "Normal" }, { "name": "Heading 3 Char", "type": "Character", "characterFormat": { "fontSize": 12, "fontFamily": "Calibri Light", "fontColor": "#1F3763" }, "basedOn": "Default Paragraph Font" }, { "name": "Heading 4", "type": "Paragraph", "paragraphFormat": { "leftIndent": 0, "rightIndent": 0, "firstLineIndent": 0, "textAlignment": "Left", "beforeSpacing": 2, "afterSpacing": 0, "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple", "outlineLevel": "Level4", "listFormat": {} }, "characterFormat": { "italic": true, "fontFamily": "Calibri Light", "fontColor": "#2F5496" }, "basedOn": "Normal", "link": "Heading 4 Char", "next": "Normal" }, { "name": "Heading 4 Char", "type": "Character", "characterFormat": { "italic": true, "fontFamily": "Calibri Light", "fontColor": "#2F5496" }, "basedOn": "Default Paragraph Font" }, { "name": "Heading 5", "type": "Paragraph", "paragraphFormat": { "leftIndent": 0, "rightIndent": 0, "firstLineIndent": 0, "textAlignment": "Left", "beforeSpacing": 2, "afterSpacing": 0, "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple", "outlineLevel": "Level5", "listFormat": {} }, "characterFormat": { "fontFamily": "Calibri Light", "fontColor": "#2F5496" }, "basedOn": "Normal", "link": "Heading 5 Char", "next": "Normal" }, { "name": "Heading 5 Char", "type": "Character", "characterFormat": { "fontFamily": "Calibri Light", "fontColor": "#2F5496" }, "basedOn": "Default Paragraph Font" }, { "name": "Heading 6", "type": "Paragraph", "paragraphFormat": { "leftIndent": 0, "rightIndent": 0, "firstLineIndent": 0, "textAlignment": "Left", "beforeSpacing": 2, "afterSpacing": 0, "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple", "outlineLevel": "Level6", "listFormat": {} }, "characterFormat": { "fontFamily": "Calibri Light", "fontColor": "#1F3763" }, "basedOn": "Normal", "link": "Heading 6 Char", "next": "Normal" }, { "name": "Heading 6 Char", "type": "Character", "characterFormat": { "fontFamily": "Calibri Light", "fontColor": "#1F3763" }, "basedOn": "Default Paragraph Font" }], "lists": [], "abstractLists": [] };
describe('Chart export validation', () => {
    let editor: DocumentEditor;
    let documentHelper: DocumentHelper;
    let exportData: any;
    beforeAll((): void => {
        let ele: HTMLElement = createElement('div', { id: 'container' });
        document.body.appendChild(ele);
        DocumentEditor.Inject(SfdtExport, WordExport);
        editor = new DocumentEditor({ enableSfdtExport: true, enableWordExport: true });
        (editor.documentHelper as any).containerCanvasIn = TestHelper.containerCanvas;
        (editor.documentHelper as any).selectionCanvasIn = TestHelper.selectionCanvas;
        (editor.documentHelper.render as any).pageCanvasIn = TestHelper.pageCanvas;
        (editor.documentHelper.render as any).selectionCanvasIn = TestHelper.pageSelectionCanvas;
        editor.appendTo('#container');
        documentHelper = editor.documentHelper;
    });
    afterAll((done): void => {
        documentHelper.destroy();
        documentHelper = undefined;
        editor.destroy();
        document.body.removeChild(document.getElementById('container'));
        editor = undefined;
        document.body.innerHTML = '';
        setTimeout(function () {
            done();
        }, 1000);
    });
    it('opened document- check chart title', () => {
        console.log('opened document- check chart title');
        editor.open(JSON.stringify(chart));
        exportData = JSON.parse(editor.sfdtExportModule.serialize());
    });
    it('opened document- check line marker', () => {
        console.log('opened document- check line marker');
        editor.open(JSON.stringify(lineChart));
        exportData = JSON.parse(editor.sfdtExportModule.serialize());
    });
});


let breakHypen: any = {
    "sections": [
        {
            "blocks": [
                {
                    "paragraphFormat": {
                        "rightIndent": 0.34999999403953552,
                        "textAlignment": "Justify",
                        "styleName": "List Paragraph"
                    },
                    "inlines": [
                        {
                            "name": "_GoBack",
                            "bookmarkType": 0
                        },
                        {
                            "name": "_GoBack",
                            "bookmarkType": 1
                        },
                        {
                            "text": "non"
                        },
                        {
                            "text": "\u001e"
                        },
                        {
                            "text": "refundable "
                        }
                    ]
                },
                {
                    "paragraphFormat": {
                        "leftIndent": 72.0,
                        "beforeSpacing": 12.0,
                        "afterSpacing": 4.0,
                        "lineSpacing": 0.85833334922790527,
                        "lineSpacingType": "Multiple",
                        "textAlignment": "Justify",
                        "styleName": "List Paragraph",
                        "contextualSpacing": false
                    },
                    "inlines": []
                }
            ],
            "headersFooters": {},
            "sectionFormat": {
                "headerDistance": 36.0,
                "footerDistance": 13.699999809265137,
                "pageWidth": 612.0,
                "pageHeight": 1008.0,
                "leftMargin": 36.0,
                "rightMargin": 36.0,
                "topMargin": 43.200000762939453,
                "bottomMargin": 43.200000762939453,
                "differentFirstPage": false,
                "differentOddAndEvenPages": false,
                "bidi": false
            }
        }
    ],
    "characterFormat": {
        "fontFamily": "Times New Roman",
        "fontFamilyBidi": "Times New Roman"
    },
    "background": {
        "color": "#FFFFFFFF"
    },
    "defaultTabWidth": 36.0,
    "formatting": false,
    "protectionType": "NoProtection",
    "enforcement": false
};

describe('No break hyphen character validation', () => {
    let editor: DocumentEditor;
    let documentHelper: DocumentHelper;
    beforeAll((): void => {
        let ele: HTMLElement = createElement('div', { id: 'container' });
        document.body.appendChild(ele);
        DocumentEditor.Inject(SfdtExport, WordExport);
        editor = new DocumentEditor({ enableSfdtExport: true, enableWordExport: true });
        (editor.documentHelper as any).containerCanvasIn = TestHelper.containerCanvas;
        (editor.documentHelper as any).selectionCanvasIn = TestHelper.selectionCanvas;
        (editor.documentHelper.render as any).pageCanvasIn = TestHelper.pageCanvas;
        (editor.documentHelper.render as any).selectionCanvasIn = TestHelper.pageSelectionCanvas;
        editor.appendTo('#container');
        documentHelper = editor.documentHelper;
    });
    afterAll((done): void => {
        documentHelper.destroy();
        documentHelper = undefined;
        editor.destroy();
        document.body.removeChild(document.getElementById('container'));
        editor = undefined;
        document.body.innerHTML = '';
        setTimeout(function () {
            done();
        }, 1000);
    });
    it('opened document- check default tab width', () => {
        console.log('opened document- check default tab width');
        editor.open(JSON.stringify(breakHypen));
        documentHelper = editor.documentHelper;
        let document: any = documentHelper.owner.sfdtExportModule.write();
        expect(document.sections[0].blocks[0].inlines[3].text).toBe('-');
    });
});

let listJson: any = {
    "sections": [
        {
            "sectionFormat": {
                "pageWidth": 595.2999877929688,
                "pageHeight": 841.9000244140625,
                "leftMargin": 72,
                "rightMargin": 72,
                "topMargin": 72,
                "bottomMargin": 72,
                "differentFirstPage": false,
                "differentOddAndEvenPages": false,
                "headerDistance": 35.400001525878906,
                "footerDistance": 35.400001525878906,
                "bidi": false
            },
            "blocks": [
                {
                    "paragraphFormat": {
                        "leftIndent": 50.20000076293945,
                        "textAlignment": "Left",
                        "afterSpacing": 6,
                        "styleName": "Body",
                        "listFormat": {
                            "listId": 7,
                            "listLevelNumber": 0
                        }
                    },
                    "characterFormat": {
                        "underline": "Single"
                    },
                    "inlines": [
                        {
                            "characterFormat": {
                                "underline": "Single"
                            },
                            "text": " "
                        }
                    ]
                }
            ],
            "headersFooters": {
            }
        }
    ],
    "characterFormat": {
        "bold": false,
        "italic": false,
        "fontSize": 11,
        "fontFamily": "Calibri",
        "underline": "None",
        "strikethrough": "None",
        "baselineAlignment": "Normal",
        "highlightColor": "NoColor",
        "fontColor": "#000000",
        "fontSizeBidi": 11,
        "fontFamilyBidi": "Arial"
    },
    "paragraphFormat": {
        "leftIndent": 0,
        "rightIndent": 0,
        "firstLineIndent": 0,
        "textAlignment": "Left",
        "beforeSpacing": 0,
        "afterSpacing": 8,
        "lineSpacing": 1.0791666507720947,
        "lineSpacingType": "Multiple",
        "listFormat": {
        },
        "bidi": false
    },
    "defaultTabWidth": 36,
    "enforcement": false,
    "hashValue": "",
    "saltValue": "",
    "formatting": false,
    "protectionType": "NoProtection",
    "styles": [
        {
            "name": "Normal",
            "type": "Paragraph",
            "paragraphFormat": {
                "afterSpacing": 0,
                "lineSpacing": 1.100000023841858,
                "lineSpacingType": "Multiple",
                "listFormat": {
                },
                "contextualSpacing": true
            },
            "characterFormat": {
                "fontSize": 10,
                "fontFamily": "Calibri Light",
                "fontSizeBidi": 10
            },
            "next": "Normal"
        },
        {
            "name": "Heading 1",
            "type": "Paragraph",
            "paragraphFormat": {
                "afterSpacing": 6,
                "lineSpacing": 1.5,
                "lineSpacingType": "Multiple",
                "outlineLevel": "Level1",
                "listFormat": {
                    "listId": 1
                },
                "contextualSpacing": false
            },
            "characterFormat": {
                "bold": true,
                "fontSize": 16,
                "fontFamily": "Calibri Light",
                "fontColor": "#EB5015FF"
            },
            "basedOn": "Normal",
            "link": "Heading 1 Char",
            "next": "Heading 2"
        },
        {
            "name": "Heading 1 Char",
            "type": "Character",
            "characterFormat": {
                "bold": true,
                "fontSize": 16,
                "fontFamily": "Calibri Light",
                "fontColor": "#EB5015FF",
                "fontSizeBidi": 10
            },
            "basedOn": "Default Paragraph Font"
        },
        {
            "name": "Default Paragraph Font",
            "type": "Character",
            "characterFormat": {
            }
        },
        {
            "name": "Heading 2",
            "type": "Paragraph",
            "paragraphFormat": {
                "beforeSpacing": 16,
                "afterSpacing": 6,
                "lineSpacing": 1.5,
                "lineSpacingType": "Multiple",
                "outlineLevel": "Level2",
                "listFormat": {
                    "listId": 1,
                    "listLevelNumber": 1
                },
                "contextualSpacing": false
            },
            "characterFormat": {
                "fontSize": 13,
                "fontFamily": "Calibri Light",
                "fontColor": "#EB5015FF",
                "boldBidi": true,
                "fontSizeBidi": 14,
                "fontFamilyBidi": "Times New Roman"
            },
            "basedOn": "Normal",
            "link": "Heading 2 Char",
            "next": "Body"
        },
        {
            "name": "Heading 2 Char",
            "type": "Character",
            "characterFormat": {
                "fontSize": 13,
                "fontFamily": "Calibri Light",
                "fontColor": "#EB5015FF",
                "boldBidi": true,
                "fontSizeBidi": 14,
                "fontFamilyBidi": "Times New Roman"
            },
            "basedOn": "Default Paragraph Font"
        },
        {
            "name": "Body",
            "type": "Paragraph",
            "paragraphFormat": {
                "textAlignment": "Justify",
                "afterSpacing": 0,
                "lineSpacing": 1.100000023841858,
                "lineSpacingType": "Multiple",
                "listFormat": {
                }
            },
            "characterFormat": {
                "fontSize": 10,
                "fontFamily": "Calibri Light",
                "fontColor": "#404040FF",
                "fontSizeBidi": 10
            },
            "link": "Body Char",
            "next": "Normal"
        },
        {
            "name": "Body Char",
            "type": "Character",
            "characterFormat": {
                "fontSize": 10,
                "fontFamily": "Calibri Light",
                "fontColor": "#404040FF",
                "fontSizeBidi": 10
            },
            "basedOn": "Default Paragraph Font"
        },
        {
            "name": "Heading 3",
            "type": "Paragraph",
            "paragraphFormat": {
                "beforeSpacing": 14,
                "afterSpacing": 6,
                "lineSpacing": 1.5,
                "lineSpacingType": "Multiple",
                "outlineLevel": "Level3",
                "listFormat": {
                    "listId": 1,
                    "listLevelNumber": 2
                }
            },
            "characterFormat": {
                "fontSize": 12,
                "fontFamily": "Calibri Light",
                "fontColor": "#EB5015FF",
                "boldBidi": true,
                "fontSizeBidi": 12,
                "fontFamilyBidi": "Times New Roman"
            },
            "basedOn": "Normal",
            "link": "Heading 3 Char",
            "next": "Body"
        },
        {
            "name": "Heading 3 Char",
            "type": "Character",
            "characterFormat": {
                "fontSize": 12,
                "fontFamily": "Calibri Light",
                "fontColor": "#EB5015FF",
                "boldBidi": true,
                "fontSizeBidi": 12,
                "fontFamilyBidi": "Times New Roman"
            },
            "basedOn": "Default Paragraph Font"
        },
        {
            "name": "Heading 4",
            "type": "Paragraph",
            "paragraphFormat": {
                "outlineLevel": "Level4",
                "listFormat": {
                }
            },
            "characterFormat": {
                "fontSize": 11,
                "fontColor": "#EB501FFF",
                "italicBidi": true
            },
            "basedOn": "Heading 3",
            "link": "Heading 4 Char",
            "next": "Normal"
        },
        {
            "name": "Heading 4 Char",
            "type": "Character",
            "characterFormat": {
                "fontFamily": "Calibri Light",
                "fontColor": "#EB501FFF",
                "boldBidi": true,
                "italicBidi": true,
                "fontSizeBidi": 12,
                "fontFamilyBidi": "Times New Roman"
            },
            "basedOn": "Default Paragraph Font"
        },
        {
            "name": "Heading 5",
            "type": "Paragraph",
            "paragraphFormat": {
                "beforeSpacing": 12,
                "afterSpacing": 6,
                "lineSpacing": 1.5,
                "lineSpacingType": "Multiple",
                "outlineLevel": "Level5",
                "listFormat": {
                    "listId": 1,
                    "listLevelNumber": 4
                }
            },
            "characterFormat": {
                "fontFamily": "Calibri Light",
                "fontColor": "#ED7D31FF",
                "fontFamilyBidi": "Times New Roman"
            },
            "basedOn": "Normal",
            "link": "Heading 5 Char",
            "next": "Normal"
        },
        {
            "name": "Heading 5 Char",
            "type": "Character",
            "characterFormat": {
                "fontSize": 10,
                "fontFamily": "Calibri Light",
                "fontColor": "#ED7D31FF",
                "fontSizeBidi": 10,
                "fontFamilyBidi": "Times New Roman"
            },
            "basedOn": "Default Paragraph Font"
        },
        {
            "name": "Heading 6",
            "type": "Paragraph",
            "paragraphFormat": {
                "beforeSpacing": 2,
                "outlineLevel": "Level6",
                "listFormat": {
                    "listId": 1,
                    "listLevelNumber": 5
                }
            },
            "characterFormat": {
                "fontFamily": "Calibri Light",
                "fontColor": "#1F3763FF",
                "fontFamilyBidi": "Times New Roman"
            },
            "basedOn": "Normal",
            "link": "Heading 6 Char",
            "next": "Normal"
        },
        {
            "name": "Heading 6 Char",
            "type": "Character",
            "characterFormat": {
                "fontSize": 10,
                "fontFamily": "Calibri Light",
                "fontColor": "#1F3763FF",
                "fontSizeBidi": 10,
                "fontFamilyBidi": "Times New Roman"
            },
            "basedOn": "Default Paragraph Font"
        },
        {
            "name": "Heading 7",
            "type": "Paragraph",
            "paragraphFormat": {
                "beforeSpacing": 2,
                "outlineLevel": "Level7",
                "listFormat": {
                    "listId": 1,
                    "listLevelNumber": 6
                }
            },
            "characterFormat": {
                "italic": true,
                "fontFamily": "Calibri Light",
                "fontColor": "#1F3763FF",
                "italicBidi": true,
                "fontFamilyBidi": "Times New Roman"
            },
            "basedOn": "Normal",
            "link": "Heading 7 Char",
            "next": "Normal"
        },
        {
            "name": "Heading 7 Char",
            "type": "Character",
            "characterFormat": {
                "italic": true,
                "fontSize": 10,
                "fontFamily": "Calibri Light",
                "fontColor": "#1F3763FF",
                "italicBidi": true,
                "fontSizeBidi": 10,
                "fontFamilyBidi": "Times New Roman"
            },
            "basedOn": "Default Paragraph Font"
        },
        {
            "name": "Heading 8",
            "type": "Paragraph",
            "paragraphFormat": {
                "beforeSpacing": 2,
                "outlineLevel": "Level8",
                "listFormat": {
                    "listId": 1,
                    "listLevelNumber": 7
                }
            },
            "characterFormat": {
                "fontSize": 10.5,
                "fontFamily": "Calibri Light",
                "fontColor": "#272727FF",
                "fontSizeBidi": 10.5,
                "fontFamilyBidi": "Times New Roman"
            },
            "basedOn": "Normal",
            "link": "Heading 8 Char",
            "next": "Normal"
        },
        {
            "name": "Heading 8 Char",
            "type": "Character",
            "characterFormat": {
                "fontSize": 10.5,
                "fontFamily": "Calibri Light",
                "fontColor": "#272727FF",
                "fontSizeBidi": 10.5,
                "fontFamilyBidi": "Times New Roman"
            },
            "basedOn": "Default Paragraph Font"
        },
        {
            "name": "Heading 9",
            "type": "Paragraph",
            "paragraphFormat": {
                "beforeSpacing": 2,
                "outlineLevel": "Level9",
                "listFormat": {
                    "listId": 1,
                    "listLevelNumber": 8
                }
            },
            "characterFormat": {
                "italic": true,
                "fontSize": 10.5,
                "fontFamily": "Calibri Light",
                "fontColor": "#272727FF",
                "italicBidi": true,
                "fontSizeBidi": 10.5,
                "fontFamilyBidi": "Times New Roman"
            },
            "basedOn": "Normal",
            "link": "Heading 9 Char",
            "next": "Normal"
        },
        {
            "name": "Heading 9 Char",
            "type": "Character",
            "characterFormat": {
                "italic": true,
                "fontSize": 10.5,
                "fontFamily": "Calibri Light",
                "fontColor": "#272727FF",
                "italicBidi": true,
                "fontSizeBidi": 10.5,
                "fontFamilyBidi": "Times New Roman"
            },
            "basedOn": "Default Paragraph Font"
        }
    ],
    "lists": [
        {
            "abstractListId": 1,
            "listId": 1
        },
        {
            "abstractListId": 5,
            "listId": 7
        }
    ],
    "abstractLists": [
        {
            "abstractListId": 1,
            "levels": [
                {
                    "characterFormat": {
                    },
                    "paragraphFormat": {
                        "leftIndent": 21.600000381469727,
                        "firstLineIndent": -21.600000381469727,
                        "listFormat": {
                        }
                    },
                    "followCharacter": "Tab",
                    "listLevelPattern": "Arabic",
                    "numberFormat": "%1",
                    "restartLevel": 0,
                    "startAt": 1
                },
                {
                    "characterFormat": {
                    },
                    "paragraphFormat": {
                        "leftIndent": 28.799999237060547,
                        "firstLineIndent": -28.799999237060547,
                        "listFormat": {
                        }
                    },
                    "followCharacter": "Tab",
                    "listLevelPattern": "Arabic",
                    "numberFormat": "%1.%2",
                    "restartLevel": 1,
                    "startAt": 1
                },
                {
                    "characterFormat": {
                    },
                    "paragraphFormat": {
                        "leftIndent": 36,
                        "firstLineIndent": -36,
                        "listFormat": {
                        }
                    },
                    "followCharacter": "Tab",
                    "listLevelPattern": "Arabic",
                    "numberFormat": "%1.%2.%3",
                    "restartLevel": 2,
                    "startAt": 1
                },
                {
                    "characterFormat": {
                    },
                    "paragraphFormat": {
                        "leftIndent": 43.20000076293945,
                        "firstLineIndent": -43.20000076293945,
                        "listFormat": {
                        }
                    },
                    "followCharacter": "Tab",
                    "listLevelPattern": "Arabic",
                    "numberFormat": "%1.%2.%3.%4",
                    "restartLevel": 3,
                    "startAt": 1
                },
                {
                    "characterFormat": {
                    },
                    "paragraphFormat": {
                        "leftIndent": 50.400001525878906,
                        "firstLineIndent": -50.400001525878906,
                        "listFormat": {
                        }
                    },
                    "followCharacter": "Tab",
                    "listLevelPattern": "Arabic",
                    "numberFormat": "%1.%2.%3.%4.%5",
                    "restartLevel": 4,
                    "startAt": 1
                },
                {
                    "characterFormat": {
                    },
                    "paragraphFormat": {
                        "leftIndent": 57.599998474121094,
                        "firstLineIndent": -57.599998474121094,
                        "listFormat": {
                        }
                    },
                    "followCharacter": "Tab",
                    "listLevelPattern": "Arabic",
                    "numberFormat": "%1.%2.%3.%4.%5.%6",
                    "restartLevel": 5,
                    "startAt": 1
                },
                {
                    "characterFormat": {
                    },
                    "paragraphFormat": {
                        "leftIndent": 64.80000305175781,
                        "firstLineIndent": -64.80000305175781,
                        "listFormat": {
                        }
                    },
                    "followCharacter": "Tab",
                    "listLevelPattern": "Arabic",
                    "numberFormat": "%1.%2.%3.%4.%5.%6.%7",
                    "restartLevel": 6,
                    "startAt": 1
                },
                {
                    "characterFormat": {
                    },
                    "paragraphFormat": {
                        "leftIndent": 72,
                        "firstLineIndent": -72,
                        "listFormat": {
                        }
                    },
                    "followCharacter": "Tab",
                    "listLevelPattern": "Arabic",
                    "numberFormat": "%1.%2.%3.%4.%5.%6.%7.%8",
                    "restartLevel": 7,
                    "startAt": 1
                },
                {
                    "characterFormat": {
                    },
                    "paragraphFormat": {
                        "leftIndent": 79.19999694824219,
                        "firstLineIndent": -79.19999694824219,
                        "listFormat": {
                        }
                    },
                    "followCharacter": "Tab",
                    "listLevelPattern": "Arabic",
                    "numberFormat": "%1.%2.%3.%4.%5.%6.%7.%8.%9",
                    "restartLevel": 8,
                    "startAt": 1
                }
            ]
        },
        {
            "abstractListId": 5,
            "levels": [
                {
                    "characterFormat": {
                        "bold": false
                    },
                    "paragraphFormat": {
                        "leftIndent": 32.20000076293945,
                        "firstLineIndent": -18,
                        "listFormat": {
                        }
                    },
                    "followCharacter": "Tab",
                    "listLevelPattern": "LowLetter",
                    "numberFormat": "%1.",
                    "restartLevel": 0,
                    "startAt": 1
                },
                {
                    "characterFormat": {
                        "fontFamily": "Symbol"
                    },
                    "paragraphFormat": {
                        "leftIndent": 72,
                        "firstLineIndent": -18,
                        "listFormat": {
                        }
                    },
                    "followCharacter": "Tab",
                    "listLevelPattern": "Bullet",
                    "numberFormat": "",
                    "restartLevel": 0,
                    "startAt": 0
                },
                {
                    "characterFormat": {
                    },
                    "paragraphFormat": {
                        "leftIndent": 108,
                        "firstLineIndent": -9,
                        "listFormat": {
                        }
                    },
                    "followCharacter": "Tab",
                    "listLevelPattern": "LowRoman",
                    "numberFormat": "%3.",
                    "restartLevel": 2,
                    "startAt": 1
                },
                {
                    "characterFormat": {
                    },
                    "paragraphFormat": {
                        "leftIndent": 144,
                        "firstLineIndent": -18,
                        "listFormat": {
                        }
                    },
                    "followCharacter": "Tab",
                    "listLevelPattern": "Arabic",
                    "numberFormat": "%4.",
                    "restartLevel": 3,
                    "startAt": 1
                },
                {
                    "characterFormat": {
                    },
                    "paragraphFormat": {
                        "leftIndent": 180,
                        "firstLineIndent": -18,
                        "listFormat": {
                        }
                    },
                    "followCharacter": "Tab",
                    "listLevelPattern": "LowLetter",
                    "numberFormat": "%5.",
                    "restartLevel": 4,
                    "startAt": 1
                },
                {
                    "characterFormat": {
                    },
                    "paragraphFormat": {
                        "leftIndent": 216,
                        "firstLineIndent": -9,
                        "listFormat": {
                        }
                    },
                    "followCharacter": "Tab",
                    "listLevelPattern": "LowRoman",
                    "numberFormat": "%6.",
                    "restartLevel": 5,
                    "startAt": 1
                },
                {
                    "characterFormat": {
                    },
                    "paragraphFormat": {
                        "leftIndent": 252,
                        "firstLineIndent": -18,
                        "listFormat": {
                        }
                    },
                    "followCharacter": "Tab",
                    "listLevelPattern": "Arabic",
                    "numberFormat": "%7.",
                    "restartLevel": 6,
                    "startAt": 1
                },
                {
                    "characterFormat": {
                    },
                    "paragraphFormat": {
                        "leftIndent": 288,
                        "firstLineIndent": -18,
                        "listFormat": {
                        }
                    },
                    "followCharacter": "Tab",
                    "listLevelPattern": "LowLetter",
                    "numberFormat": "%8.",
                    "restartLevel": 7,
                    "startAt": 1
                },
                {
                    "characterFormat": {
                    },
                    "paragraphFormat": {
                        "leftIndent": 324,
                        "firstLineIndent": -9,
                        "listFormat": {
                        }
                    },
                    "followCharacter": "Tab",
                    "listLevelPattern": "LowRoman",
                    "numberFormat": "%9.",
                    "restartLevel": 8,
                    "startAt": 1
                }
            ]
        }
    ]
};
describe('Sfdt export for validating abstract list collection', () => {
    let editor: DocumentEditor;
    let exportData: any;
    let documentHelper: DocumentHelper;
    beforeAll((): void => {
        let ele: HTMLElement = createElement('div', { id: 'container' });
        document.body.appendChild(ele);
        DocumentEditor.Inject(SfdtExport);
        editor = new DocumentEditor({ enableSfdtExport: true });
        (editor.documentHelper as any).containerCanvasIn = TestHelper.containerCanvas;
        (editor.documentHelper as any).selectionCanvasIn = TestHelper.selectionCanvas;
        (editor.documentHelper.render as any).pageCanvasIn = TestHelper.pageCanvas;
        (editor.documentHelper.render as any).selectionCanvasIn = TestHelper.pageSelectionCanvas;
        editor.appendTo('#container');
        documentHelper = editor.documentHelper;
        editor.open(JSON.stringify(listJson));
        exportData = JSON.parse(editor.sfdtExportModule.serialize());
    });
    afterAll((done): void => {
        documentHelper.destroy();
        documentHelper = undefined;
        editor.destroy();
        document.body.removeChild(document.getElementById('container'));
        editor = undefined;
        document.body.innerHTML = '';
        setTimeout(function () {
            done();
        }, 1000);
    });
    it('Abstract list collection validation', () => {
        console.log('Abstract list collection validation');
        expect(exportData.abstractLists.length).toBe(2);
    });
});

let sfdt: any = { "sections": [{ "sectionFormat": { "pageWidth": 612, "pageHeight": 792, "leftMargin": 72, "rightMargin": 72, "topMargin": 72, "bottomMargin": 72, "differentFirstPage": false, "differentOddAndEvenPages": false, "headerDistance": 36, "footerDistance": 36, "bidi": false }, "blocks": [{ "paragraphFormat": { "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [{ "characterFormat": { "bidi": false }, "text": "First Page" }] }, { "paragraphFormat": { "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [] }, { "paragraphFormat": { "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [] }, { "paragraphFormat": { "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [] }, { "paragraphFormat": { "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [] }, { "paragraphFormat": { "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [] }, { "paragraphFormat": { "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [] }, { "paragraphFormat": { "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [] }, { "paragraphFormat": { "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [] }, { "paragraphFormat": { "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [] }, { "paragraphFormat": { "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [] }, { "paragraphFormat": { "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [] }, { "paragraphFormat": { "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [] }, { "paragraphFormat": { "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [] }, { "paragraphFormat": { "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [] }, { "paragraphFormat": { "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [] }, { "paragraphFormat": { "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [] }, { "paragraphFormat": { "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [] }, { "paragraphFormat": { "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [] }, { "paragraphFormat": { "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [] }, { "paragraphFormat": { "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [] }, { "paragraphFormat": { "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [] }, { "paragraphFormat": { "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [] }, { "paragraphFormat": { "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [] }, { "paragraphFormat": { "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [] }, { "paragraphFormat": { "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [] }, { "paragraphFormat": { "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [] }, { "paragraphFormat": { "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [] }, { "paragraphFormat": { "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [] }, { "paragraphFormat": { "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [] }, { "paragraphFormat": { "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [] }, { "paragraphFormat": { "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [] }, { "paragraphFormat": { "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [] }, { "paragraphFormat": { "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [] }, { "paragraphFormat": { "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [] }, { "paragraphFormat": { "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [] }, { "paragraphFormat": { "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [] }, { "paragraphFormat": { "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [] }, { "paragraphFormat": { "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [] }, { "paragraphFormat": { "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [] }, { "paragraphFormat": { "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [] }, { "paragraphFormat": { "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [] }, { "paragraphFormat": { "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [] }, { "paragraphFormat": { "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [] }, { "paragraphFormat": { "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [] }, { "paragraphFormat": { "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [] }, { "paragraphFormat": { "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [] }, { "paragraphFormat": { "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [{ "characterFormat": { "bidi": false }, "text": "Second Page" }] }], "headersFooters": { "header": { "blocks": [{ "paragraphFormat": { "listFormat": {} }, "characterFormat": {}, "inlines": [{ "characterFormat": {}, "fieldType": 0, "hasFieldEnd": true }, { "characterFormat": {}, "text": "PAGE  \\* MERGEFORMAT" }, { "characterFormat": {}, "fieldType": 2 }, { "characterFormat": {}, "text": "2" }, { "characterFormat": {}, "fieldType": 1 }] }] }, "footer": { "blocks": [{ "paragraphFormat": { "listFormat": {} }, "characterFormat": {}, "inlines": [] }] }, "evenHeader": {}, "evenFooter": {}, "firstPageHeader": {}, "firstPageFooter": {} } }], "characterFormat": { "bold": false, "italic": false, "fontSize": 11, "fontFamily": "Calibri", "underline": "None", "strikethrough": "None", "baselineAlignment": "Normal", "highlightColor": "NoColor", "fontColor": "#000000", "fontSizeBidi": 11, "fontFamilyBidi": "Calibri" }, "paragraphFormat": { "leftIndent": 0, "rightIndent": 0, "firstLineIndent": 0, "textAlignment": "Left", "beforeSpacing": 0, "afterSpacing": 0, "lineSpacing": 1, "lineSpacingType": "Multiple", "listFormat": {}, "bidi": false }, "defaultTabWidth": 36, "enforcement": false, "hashValue": "", "saltValue": "", "formatting": false, "protectionType": "NoProtection", "styles": [{ "name": "Normal", "type": "Paragraph", "paragraphFormat": { "listFormat": {} }, "characterFormat": {}, "next": "Normal" }, { "name": "Heading 1", "type": "Paragraph", "paragraphFormat": { "leftIndent": 0, "rightIndent": 0, "firstLineIndent": 0, "textAlignment": "Left", "beforeSpacing": 12, "afterSpacing": 0, "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple", "outlineLevel": "Level1", "listFormat": {} }, "characterFormat": { "fontSize": 16, "fontFamily": "Calibri Light", "fontColor": "#2F5496" }, "basedOn": "Normal", "link": "Heading 1 Char", "next": "Normal" }, { "name": "Heading 1 Char", "type": "Character", "characterFormat": { "fontSize": 16, "fontFamily": "Calibri Light", "fontColor": "#2F5496" }, "basedOn": "Default Paragraph Font" }, { "name": "Default Paragraph Font", "type": "Character", "characterFormat": {} }, { "name": "Heading 2", "type": "Paragraph", "paragraphFormat": { "leftIndent": 0, "rightIndent": 0, "firstLineIndent": 0, "textAlignment": "Left", "beforeSpacing": 2, "afterSpacing": 0, "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple", "outlineLevel": "Level2", "listFormat": {} }, "characterFormat": { "fontSize": 13, "fontFamily": "Calibri Light", "fontColor": "#2F5496" }, "basedOn": "Normal", "link": "Heading 2 Char", "next": "Normal" }, { "name": "Heading 2 Char", "type": "Character", "characterFormat": { "fontSize": 13, "fontFamily": "Calibri Light", "fontColor": "#2F5496" }, "basedOn": "Default Paragraph Font" }, { "name": "Heading 3", "type": "Paragraph", "paragraphFormat": { "leftIndent": 0, "rightIndent": 0, "firstLineIndent": 0, "textAlignment": "Left", "beforeSpacing": 2, "afterSpacing": 0, "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple", "outlineLevel": "Level3", "listFormat": {} }, "characterFormat": { "fontSize": 12, "fontFamily": "Calibri Light", "fontColor": "#1F3763" }, "basedOn": "Normal", "link": "Heading 3 Char", "next": "Normal" }, { "name": "Heading 3 Char", "type": "Character", "characterFormat": { "fontSize": 12, "fontFamily": "Calibri Light", "fontColor": "#1F3763" }, "basedOn": "Default Paragraph Font" }, { "name": "Heading 4", "type": "Paragraph", "paragraphFormat": { "leftIndent": 0, "rightIndent": 0, "firstLineIndent": 0, "textAlignment": "Left", "beforeSpacing": 2, "afterSpacing": 0, "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple", "outlineLevel": "Level4", "listFormat": {} }, "characterFormat": { "italic": true, "fontFamily": "Calibri Light", "fontColor": "#2F5496" }, "basedOn": "Normal", "link": "Heading 4 Char", "next": "Normal" }, { "name": "Heading 4 Char", "type": "Character", "characterFormat": { "italic": true, "fontFamily": "Calibri Light", "fontColor": "#2F5496" }, "basedOn": "Default Paragraph Font" }, { "name": "Heading 5", "type": "Paragraph", "paragraphFormat": { "leftIndent": 0, "rightIndent": 0, "firstLineIndent": 0, "textAlignment": "Left", "beforeSpacing": 2, "afterSpacing": 0, "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple", "outlineLevel": "Level5", "listFormat": {} }, "characterFormat": { "fontFamily": "Calibri Light", "fontColor": "#2F5496" }, "basedOn": "Normal", "link": "Heading 5 Char", "next": "Normal" }, { "name": "Heading 5 Char", "type": "Character", "characterFormat": { "fontFamily": "Calibri Light", "fontColor": "#2F5496" }, "basedOn": "Default Paragraph Font" }, { "name": "Heading 6", "type": "Paragraph", "paragraphFormat": { "leftIndent": 0, "rightIndent": 0, "firstLineIndent": 0, "textAlignment": "Left", "beforeSpacing": 2, "afterSpacing": 0, "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple", "outlineLevel": "Level6", "listFormat": {} }, "characterFormat": { "fontFamily": "Calibri Light", "fontColor": "#1F3763" }, "basedOn": "Normal", "link": "Heading 6 Char", "next": "Normal" }, { "name": "Heading 6 Char", "type": "Character", "characterFormat": { "fontFamily": "Calibri Light", "fontColor": "#1F3763" }, "basedOn": "Default Paragraph Font" }], "lists": [], "abstractLists": [] };

describe('Header Page Number Validation', () => {
    let editor: DocumentEditor;
    let exportData: any;
    let documentHelper: DocumentHelper;
    beforeAll((): void => {
        let ele: HTMLElement = createElement('div', { id: 'container' });
        document.body.appendChild(ele);
        DocumentEditor.Inject(SfdtExport);
        editor = new DocumentEditor({ enableSfdtExport: true });
        (editor.documentHelper as any).containerCanvasIn = TestHelper.containerCanvas;
        (editor.documentHelper as any).selectionCanvasIn = TestHelper.selectionCanvas;
        (editor.documentHelper.render as any).pageCanvasIn = TestHelper.pageCanvas;
        (editor.documentHelper.render as any).selectionCanvasIn = TestHelper.pageSelectionCanvas;
        editor.appendTo('#container');
        documentHelper = editor.documentHelper;
        editor.open(JSON.stringify(sfdt));
        exportData = documentHelper.owner.sfdtExportModule.write();
    });
    afterAll((done): void => {
        documentHelper.destroy();
        documentHelper = undefined;
        editor.destroy();
        document.body.removeChild(document.getElementById('container'));
        editor = undefined;
        document.body.innerHTML = '';
        setTimeout(function () {
            done();
        }, 1000);
    });
    it('FieldEnd Validation', () => {
        console.log('FieldEnd Validation');
        expect(exportData.sections[0].headersFooters.header.blocks[0].inlines[0].hasFieldEnd).toBe(true);
    });
    it('FieldType Validation', () => {
        console.log('FieldType Validation');
        expect(exportData.sections[0].headersFooters.header.blocks[0].inlines[0].fieldType).toBe(0);
    });
});

let bidi: any = { "sections": [{ "sectionFormat": { "pageWidth": 595.2999877929688, "pageHeight": 841.9000244140625, "leftMargin": 72, "rightMargin": 72, "topMargin": 72, "bottomMargin": 72, "differentFirstPage": false, "differentOddAndEvenPages": false, "headerDistance": 35.400001525878906, "footerDistance": 35.400001525878906, "bidi": true }, "blocks": [{ "paragraphFormat": { "styleName": "Normal", "listFormat": {} }, "characterFormat": { "bidi": true }, "inlines": [{ "characterFormat": { "fontFamily": "Arial", "fontColor": "#000080FF", "bidi": true, "fontFamilyBidi": "Arial" }, "text": "הגיעה קולקציית " }, { "characterFormat": { "fontFamily": "Arial", "fontColor": "#000080FF", "fontFamilyBidi": "Arial" }, "text": "<<" }, { "characterFormat": { "fontFamily": "Arial", "fontColor": "#000080FF", "fontFamilyBidi": "Arial" }, "text": "Lead#First" }, { "characterFormat": { "fontFamily": "Arial", "fontColor": "#000080FF", "fontFamilyBidi": "Arial" }, "text": " name>>" }, { "characterFormat": { "fontFamily": "Arial", "fontColor": "#000080FF", "bidi": true, "fontFamilyBidi": "Arial" }, "text": " " }, { "characterFormat": { "fontFamily": "Arial", "fontColor": "#000080FF", "bidi": true, "fontFamilyBidi": "Arial" }, "text": "מרהיבה! עשרות דגמים חדשים במחירים מפתיעים לחברי מועדון " }, { "characterFormat": { "fontFamily": "Arial", "fontColor": "#000080FF", "bidi": true, "fontFamilyBidi": "Arial" }, "text": "בלבד. מחכים לכם ב" }, { "characterFormat": { "fontFamily": "Arial", "fontColor": "#000080FF", "bidi": true, "fontFamilyBidi": "Arial" }, "text": " " }, { "characterFormat": { "fontFamily": "Arial", "fontColor": "#000080FF", "fontFamilyBidi": "Arial" }, "text": "<<" }, { "characterFormat": { "fontFamily": "Arial", "fontColor": "#000080FF", "fontFamilyBidi": "Arial" }, "text": "Lead#Last" }, { "characterFormat": { "fontFamily": "Arial", "fontColor": "#000080FF", "fontFamilyBidi": "Arial" }, "text": " name>>" }, { "characterFormat": { "fontFamily": "Arial", "fontColor": "#000080FF", "bidi": true, "fontFamilyBidi": "Arial" }, "text": "." }, { "characterFormat": {}, "bookmarkType": 0, "name": "_GoBack" }, { "characterFormat": {}, "bookmarkType": 1, "name": "_GoBack" }] }], "headersFooters": {} }], "characterFormat": { "bold": false, "italic": false, "fontSize": 11, "fontFamily": "Calibri", "underline": "None", "strikethrough": "None", "baselineAlignment": "Normal", "highlightColor": "NoColor", "fontColor": "#000000", "fontSizeBidi": 11, "fontFamilyBidi": "minorBidi" }, "paragraphFormat": { "leftIndent": 0, "rightIndent": 0, "firstLineIndent": 0, "textAlignment": "Left", "beforeSpacing": 0, "afterSpacing": 8, "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple", "listFormat": {}, "bidi": false }, "defaultTabWidth": 36, "enforcement": false, "hashValue": "", "saltValue": "", "formatting": false, "protectionType": "NoProtection", "styles": [{ "name": "Normal", "type": "Paragraph", "paragraphFormat": { "textAlignment": "Right", "listFormat": {}, "bidi": true }, "characterFormat": {}, "next": "Normal" }, { "name": "Default Paragraph Font", "type": "Character", "characterFormat": {} }, { "name": "Heading 1", "type": "Paragraph", "paragraphFormat": { "leftIndent": 0, "rightIndent": 0, "firstLineIndent": 0, "textAlignment": "Left", "beforeSpacing": 12, "afterSpacing": 0, "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple", "outlineLevel": "Level1", "listFormat": {} }, "characterFormat": { "fontSize": 16, "fontFamily": "Calibri Light", "fontColor": "#2F5496" }, "basedOn": "Normal", "link": "Heading 1 Char", "next": "Normal" }, { "name": "Heading 1 Char", "type": "Character", "characterFormat": { "fontSize": 16, "fontFamily": "Calibri Light", "fontColor": "#2F5496" }, "basedOn": "Default Paragraph Font" }, { "name": "Heading 2", "type": "Paragraph", "paragraphFormat": { "leftIndent": 0, "rightIndent": 0, "firstLineIndent": 0, "textAlignment": "Left", "beforeSpacing": 2, "afterSpacing": 0, "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple", "outlineLevel": "Level2", "listFormat": {} }, "characterFormat": { "fontSize": 13, "fontFamily": "Calibri Light", "fontColor": "#2F5496" }, "basedOn": "Normal", "link": "Heading 2 Char", "next": "Normal" }, { "name": "Heading 2 Char", "type": "Character", "characterFormat": { "fontSize": 13, "fontFamily": "Calibri Light", "fontColor": "#2F5496" }, "basedOn": "Default Paragraph Font" }, { "name": "Heading 3", "type": "Paragraph", "paragraphFormat": { "leftIndent": 0, "rightIndent": 0, "firstLineIndent": 0, "textAlignment": "Left", "beforeSpacing": 2, "afterSpacing": 0, "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple", "outlineLevel": "Level3", "listFormat": {} }, "characterFormat": { "fontSize": 12, "fontFamily": "Calibri Light", "fontColor": "#1F3763" }, "basedOn": "Normal", "link": "Heading 3 Char", "next": "Normal" }, { "name": "Heading 3 Char", "type": "Character", "characterFormat": { "fontSize": 12, "fontFamily": "Calibri Light", "fontColor": "#1F3763" }, "basedOn": "Default Paragraph Font" }, { "name": "Heading 4", "type": "Paragraph", "paragraphFormat": { "leftIndent": 0, "rightIndent": 0, "firstLineIndent": 0, "textAlignment": "Left", "beforeSpacing": 2, "afterSpacing": 0, "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple", "outlineLevel": "Level4", "listFormat": {} }, "characterFormat": { "italic": true, "fontFamily": "Calibri Light", "fontColor": "#2F5496" }, "basedOn": "Normal", "link": "Heading 4 Char", "next": "Normal" }, { "name": "Heading 4 Char", "type": "Character", "characterFormat": { "italic": true, "fontFamily": "Calibri Light", "fontColor": "#2F5496" }, "basedOn": "Default Paragraph Font" }, { "name": "Heading 5", "type": "Paragraph", "paragraphFormat": { "leftIndent": 0, "rightIndent": 0, "firstLineIndent": 0, "textAlignment": "Left", "beforeSpacing": 2, "afterSpacing": 0, "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple", "outlineLevel": "Level5", "listFormat": {} }, "characterFormat": { "fontFamily": "Calibri Light", "fontColor": "#2F5496" }, "basedOn": "Normal", "link": "Heading 5 Char", "next": "Normal" }, { "name": "Heading 5 Char", "type": "Character", "characterFormat": { "fontFamily": "Calibri Light", "fontColor": "#2F5496" }, "basedOn": "Default Paragraph Font" }, { "name": "Heading 6", "type": "Paragraph", "paragraphFormat": { "leftIndent": 0, "rightIndent": 0, "firstLineIndent": 0, "textAlignment": "Left", "beforeSpacing": 2, "afterSpacing": 0, "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple", "outlineLevel": "Level6", "listFormat": {} }, "characterFormat": { "fontFamily": "Calibri Light", "fontColor": "#1F3763" }, "basedOn": "Normal", "link": "Heading 6 Char", "next": "Normal" }, { "name": "Heading 6 Char", "type": "Character", "characterFormat": { "fontFamily": "Calibri Light", "fontColor": "#1F3763" }, "basedOn": "Default Paragraph Font" }], "lists": [], "abstractLists": [] };

describe('Bidi Property Validation', () => {
    let editor: DocumentEditor;
    let exportData: any;
    let documentHelper: DocumentHelper;
    beforeAll((): void => {
        let ele: HTMLElement = createElement('div', { id: 'container' });
        document.body.appendChild(ele);
        DocumentEditor.Inject(SfdtExport);
        editor = new DocumentEditor({ enableSfdtExport: true });
        (editor.documentHelper as any).containerCanvasIn = TestHelper.containerCanvas;
        (editor.documentHelper as any).selectionCanvasIn = TestHelper.selectionCanvas;
        (editor.documentHelper.render as any).pageCanvasIn = TestHelper.pageCanvas;
        (editor.documentHelper.render as any).selectionCanvasIn = TestHelper.pageSelectionCanvas;
        editor.appendTo('#container');
        documentHelper = editor.documentHelper;
        editor.open(JSON.stringify(bidi));
        exportData = documentHelper.owner.sfdtExportModule.write();
    });
    afterAll((): void => {
        documentHelper.destroy();
        documentHelper = undefined;
        editor.destroy();
        document.body.removeChild(document.getElementById('container'));
        document.body.innerHTML = '';
        editor = undefined;
    });
    it('Check Bidi Has a value', () => {
        console.log('Check Bidi Has a value');
        expect(exportData.styles[0].paragraphFormat.bidi).toBe(true);
    });
});


describe('Export for paragraph and character format validation when document contains selection', () => {
    let editor: DocumentEditor;
    let exportData: any;
    let documentHelper: DocumentHelper;
    beforeAll((): void => {
        let ele: HTMLElement = createElement('div', { id: 'container' });
        document.body.appendChild(ele);

        editor = new DocumentEditor({ isReadOnly: false });
        editor.enableAllModules();
        (editor.documentHelper as any).containerCanvasIn = TestHelper.containerCanvas;
        (editor.documentHelper as any).selectionCanvasIn = TestHelper.selectionCanvas;
        (editor.documentHelper.render as any).pageCanvasIn = TestHelper.pageCanvas;
        (editor.documentHelper.render as any).selectionCanvasIn = TestHelper.pageSelectionCanvas;
        editor.appendTo('#container');
        documentHelper = editor.documentHelper;
    });
    afterAll((done): void => {
        documentHelper.destroy();
        documentHelper = undefined;
        editor.destroy();
        document.body.removeChild(document.getElementById('container'));
        editor = undefined;
        document.body.innerHTML = '';
        setTimeout(function () {
            done();
        }, 1000);
    });
    it('sfdt export validation', () => {
        console.log('sfdt export validation');
        editor.editor.insertText('Hello world');
        editor.selection.selectAll();
        editor.selection.characterFormat.bold = true;
        editor.selection.paragraphFormat.textAlignment = 'Center';
        editor.selection.handleHomeKey();
        editor.selection.handleControlShiftRightKey();
        exportData = editor.sfdtExportModule.write();
        expect(exportData.sections[0].blocks[0].paragraphFormat.textAlignment).toBe('Center');
        expect(exportData.sections[0].blocks[0].characterFormat.bold).toBe(true);
    });
});

let jsonData: any = { "sections": [{ "sectionFormat": { "pageWidth": 612, "pageHeight": 792, "leftMargin": 72, "rightMargin": 72, "topMargin": 72, "bottomMargin": 72, "differentFirstPage": true, "differentOddAndEvenPages": false, "headerDistance": 36, "footerDistance": 36, "bidi": false }, "blocks": [{ "paragraphFormat": { "afterSpacing": 0, "lineSpacing": 1.100000023841858, "lineSpacingType": "Multiple", "styleName": "Normal", "listFormat": {} }, "characterFormat": { "bold": true, "fontSize": 10, "fontSizeBidi": 10, "fontFamilyBidi": "Arial" }, "inlines": [{ "characterFormat": { "bold": true, "fontSize": 10, "fontSizeBidi": 10, "fontFamilyBidi": "Arial" }, "text": "Issue with the heading styled text" }, { "characterFormat": {}, "bookmarkType": 0, "name": "_GoBack" }, { "characterFormat": {}, "bookmarkType": 1, "name": "_GoBack" }] }, { "paragraphFormat": { "leftIndent": 28.350000381469727, "textAlignment": "Justify", "afterSpacing": 0, "lineSpacing": 1.100000023841858, "lineSpacingType": "Multiple", "styleName": "Normal", "listFormat": {} }, "characterFormat": { "fontSize": 10, "fontSizeBidi": 10, "fontFamilyBidi": "Arial" }, "inlines": [] }, { "paragraphFormat": { "afterSpacing": 0, "styleName": "RTZ Heading 2", "listFormat": {} }, "characterFormat": {}, "inlines": [{ "characterFormat": {}, "text": "Sub " }, { "characterFormat": {}, "text": "heading" }] }, { "paragraphFormat": { "textAlignment": "Justify", "afterSpacing": 0, "lineSpacing": 1.100000023841858, "lineSpacingType": "Multiple", "styleName": "Normal", "listFormat": {} }, "characterFormat": { "fontSize": 10, "fontSizeBidi": 10, "fontFamilyBidi": "Arial" }, "inlines": [] }, { "paragraphFormat": { "afterSpacing": 0, "styleName": "RTZ Heading 3", "listFormat": {} }, "characterFormat": {}, "inlines": [{ "characterFormat": {}, "text": "List " }, { "characterFormat": {}, "text": "item1" }] }], "headersFooters": { "footer": { "blocks": [{ "paragraphFormat": { "textAlignment": "Center", "styleName": "Footer", "listFormat": {} }, "characterFormat": { "fontSize": 10, "fontSizeBidi": 10 }, "inlines": [{ "characterFormat": { "fontSize": 10, "fontSizeBidi": 10 }, "fieldType": 0, "hasFieldEnd": true }, { "characterFormat": { "fontSize": 10, "fontSizeBidi": 10 }, "text": " PAGE   \\* MERGEFORMAT " }, { "characterFormat": {}, "fieldType": 2 }, { "characterFormat": { "fontSize": 10, "fontSizeBidi": 10 }, "text": "2" }, { "characterFormat": { "fontSize": 10, "fontSizeBidi": 10 }, "fieldType": 1 }] }, { "paragraphFormat": { "styleName": "Footer", "listFormat": {} }, "characterFormat": {}, "inlines": [] }] }, "firstPageFooter": { "blocks": [{ "paragraphFormat": { "styleName": "Footer", "listFormat": {} }, "characterFormat": { "italic": true, "fontSize": 8, "italicBidi": true, "fontSizeBidi": 8 }, "inlines": [] }] } } }], "characterFormat": { "bold": false, "italic": false, "fontSize": 11, "fontFamily": "Calibri", "underline": "None", "strikethrough": "None", "baselineAlignment": "Normal", "highlightColor": "NoColor", "fontColor": "#000000", "fontSizeBidi": 11, "fontFamilyBidi": "Arial" }, "paragraphFormat": { "leftIndent": 0, "rightIndent": 0, "firstLineIndent": 0, "textAlignment": "Left", "beforeSpacing": 0, "afterSpacing": 10, "lineSpacing": 1.149999976158142, "lineSpacingType": "Multiple", "listFormat": {}, "bidi": false }, "defaultTabWidth": 36, "enforcement": false, "hashValue": "", "saltValue": "", "formatting": false, "protectionType": "NoProtection", "styles": [{ "name": "Normal", "type": "Paragraph", "paragraphFormat": { "listFormat": {} }, "characterFormat": { "fontFamily": "Arial" }, "next": "Normal" }, { "name": "Heading 1", "type": "Paragraph", "paragraphFormat": { "beforeSpacing": 12, "afterSpacing": 0, "outlineLevel": "Level1", "listFormat": {} }, "characterFormat": { "fontSize": 16, "fontFamily": "Cambria", "fontColor": "#365F91FF", "fontSizeBidi": 16, "fontFamilyBidi": "Times New Roman" }, "basedOn": "Normal", "link": "Heading 1 Char", "next": "Normal" }, { "name": "Heading 1 Char", "type": "Character", "characterFormat": { "fontSize": 16, "fontFamily": "Cambria", "fontColor": "#365F91FF", "fontSizeBidi": 16, "fontFamilyBidi": "Times New Roman" }, "basedOn": "Default Paragraph Font" }, { "name": "Default Paragraph Font", "type": "Character", "characterFormat": {} }, { "name": "Header", "type": "Paragraph", "paragraphFormat": { "afterSpacing": 0, "lineSpacing": 1, "lineSpacingType": "Multiple", "listFormat": {}, "tabs": [{ "position": 225.64999389648438, "deletePosition": 0, "tabJustification": "Center", "tabLeader": "None" }, { "position": 451.29998779296875, "deletePosition": 0, "tabJustification": "Right", "tabLeader": "None" }] }, "characterFormat": {}, "basedOn": "Normal", "link": "Header Char" }, { "name": "Header Char", "type": "Character", "characterFormat": { "fontFamily": "Arial" }, "basedOn": "Default Paragraph Font" }, { "name": "Footer", "type": "Paragraph", "paragraphFormat": { "afterSpacing": 0, "lineSpacing": 1, "lineSpacingType": "Multiple", "listFormat": {}, "tabs": [{ "position": 225.64999389648438, "deletePosition": 0, "tabJustification": "Center", "tabLeader": "None" }, { "position": 451.29998779296875, "deletePosition": 0, "tabJustification": "Right", "tabLeader": "None" }] }, "characterFormat": {}, "basedOn": "Normal", "link": "Footer Char", "next": "Normal" }, { "name": "Footer Char", "type": "Character", "characterFormat": { "fontFamily": "Arial" }, "basedOn": "Default Paragraph Font" }, { "name": "Balloon Text", "type": "Paragraph", "paragraphFormat": { "afterSpacing": 0, "lineSpacing": 1, "lineSpacingType": "Multiple", "listFormat": {} }, "characterFormat": { "fontSize": 9, "fontFamily": "Segoe UI", "fontSizeBidi": 9, "fontFamilyBidi": "Segoe UI" }, "basedOn": "Normal", "link": "Balloon Text Char" }, { "name": "Balloon Text Char", "type": "Character", "characterFormat": { "fontSize": 9, "fontFamily": "Segoe UI", "fontSizeBidi": 9, "fontFamilyBidi": "Segoe UI" }, "basedOn": "Default Paragraph Font" }, { "name": "TOC Heading", "type": "Paragraph", "paragraphFormat": { "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple", "outlineLevel": "BodyText", "listFormat": {} }, "characterFormat": {}, "basedOn": "Heading 1", "next": "Normal" }, { "name": "TOC 2", "type": "Paragraph", "paragraphFormat": { "leftIndent": 11, "afterSpacing": 5, "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple", "listFormat": {} }, "characterFormat": { "fontFamily": "Calibri", "fontFamilyBidi": "Times New Roman" }, "basedOn": "Normal", "next": "Normal" }, { "name": "TOC 1", "type": "Paragraph", "paragraphFormat": { "afterSpacing": 5, "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple", "listFormat": {} }, "characterFormat": { "fontSize": 10, "fontFamilyBidi": "Times New Roman" }, "basedOn": "Normal", "next": "Normal" }, { "name": "TOC 3", "type": "Paragraph", "paragraphFormat": { "leftIndent": 22, "afterSpacing": 5, "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple", "listFormat": {} }, "characterFormat": { "fontFamily": "Calibri", "fontFamilyBidi": "Times New Roman" }, "basedOn": "Normal", "next": "Normal" }, { "name": "RTZ Heading 1", "type": "Paragraph", "paragraphFormat": { "beforeSpacing": 18, "afterSpacing": 6, "lineSpacing": 1.100000023841858, "lineSpacingType": "Multiple", "outlineLevel": "Level1", "listFormat": { "listId": 16 } }, "characterFormat": { "bold": true, "fontSize": 10, "fontSizeBidi": 10, "fontFamilyBidi": "Times New Roman" }, "basedOn": "Normal", "link": "RTZ Heading 1 Char", "next": "RTZ Heading 2" }, { "name": "RTZ Heading 1 Char", "type": "Character", "characterFormat": { "bold": true, "fontSize": 10, "fontFamily": "Arial", "fontSizeBidi": 10, "fontFamilyBidi": "Times New Roman" }, "basedOn": "Default Paragraph Font" }, { "name": "RTZ Heading 2", "type": "Paragraph", "paragraphFormat": { "textAlignment": "Justify", "beforeSpacing": 0, "outlineLevel": "BodyText", "listFormat": { "listLevelNumber": 1 } }, "characterFormat": { "bold": false }, "basedOn": "RTZ Heading 1", "next": "RTZ Body Text 2" }, { "name": "RTZ Body Text 2", "type": "Paragraph", "paragraphFormat": { "leftIndent": 36, "listFormat": {} }, "characterFormat": { "fontFamilyBidi": "Arial" }, "basedOn": "RTZ Body Text 1" }, { "name": "RTZ Body Text 1", "type": "Paragraph", "paragraphFormat": { "textAlignment": "Justify", "beforeSpacing": 6, "afterSpacing": 6, "lineSpacing": 1.100000023841858, "lineSpacingType": "Multiple", "listFormat": {} }, "characterFormat": { "fontSize": 10, "fontSizeBidi": 10, "fontFamilyBidi": "Times New Roman" }, "basedOn": "Normal" }, { "name": "No Spacing", "type": "Paragraph", "paragraphFormat": { "afterSpacing": 0, "lineSpacing": 1, "lineSpacingType": "Multiple", "listFormat": {} }, "characterFormat": { "fontFamily": "Arial" } }, { "name": "Hyperlink", "type": "Character", "characterFormat": { "underline": "Single", "baselineAlignment": "Normal" }, "basedOn": "Default Paragraph Font" }, { "name": "FollowedHyperlink", "type": "Character", "characterFormat": { "underline": "Single", "fontColor": "#800080FF" }, "basedOn": "Default Paragraph Font" }, { "name": "RTZ Heading 3", "type": "Paragraph", "paragraphFormat": { "listFormat": { "listLevelNumber": 2 } }, "characterFormat": {}, "basedOn": "RTZ Heading 2", "next": "Normal" }, { "name": "RTZ Heading 4", "type": "Paragraph", "paragraphFormat": { "listFormat": { "listLevelNumber": 3 } }, "characterFormat": {}, "basedOn": "RTZ Heading 3" }, { "name": "RTZ Heading 6", "type": "Paragraph", "paragraphFormat": { "textAlignment": "Justify", "beforeSpacing": 6, "afterSpacing": 6, "lineSpacing": 1.100000023841858, "lineSpacingType": "Multiple", "listFormat": { "listId": 16, "listLevelNumber": 5 } }, "characterFormat": { "fontSize": 10, "fontSizeBidi": 10, "fontFamilyBidi": "Times New Roman" }, "basedOn": "Normal", "link": "RTZ Heading 6 Char" }, { "name": "RTZ Heading 6 Char", "type": "Character", "characterFormat": { "fontSize": 10, "fontFamily": "Arial", "fontSizeBidi": 10, "fontFamilyBidi": "Times New Roman" }, "basedOn": "Default Paragraph Font" }, { "name": "RTZ Heading 5", "type": "Paragraph", "paragraphFormat": { "listFormat": { "listLevelNumber": 4 } }, "characterFormat": {}, "basedOn": "RTZ Heading 6" }, { "name": "List Paragraph", "type": "Paragraph", "paragraphFormat": { "leftIndent": 36, "listFormat": {}, "contextualSpacing": true }, "characterFormat": {}, "basedOn": "Normal" }, { "name": "RTZ Schedule5 SubHeading 3", "type": "Paragraph", "paragraphFormat": { "outlineLevel": "Level3", "listFormat": { "listLevelNumber": 4 } }, "characterFormat": { "bold": true }, "basedOn": "RTZ Schedule4 SubHeading 2", "link": "RTZ Schedule5 SubHeading 3 Char" }, { "name": "RTZ Schedule4 SubHeading 2", "type": "Paragraph", "paragraphFormat": { "listFormat": { "listLevelNumber": 3 } }, "characterFormat": { "bold": false }, "basedOn": "RTZ Schedule3 SubHeading 1", "link": "RTZ Schedule4 SubHeading 2 Char", "next": "Body Text 2" }, { "name": "RTZ Schedule3 SubHeading 1", "type": "Paragraph", "paragraphFormat": { "textAlignment": "Justify", "beforeSpacing": 6, "afterSpacing": 6, "lineSpacing": 1.100000023841858, "lineSpacingType": "Multiple", "outlineLevel": "Level2", "listFormat": { "listId": 20, "listLevelNumber": 2 } }, "characterFormat": { "bold": true, "fontSize": 10, "fontSizeBidi": 10, "fontFamilyBidi": "Times New Roman" }, "basedOn": "Normal", "link": "RTZ Schedule3 SubHeading 1 Char", "next": "Normal" }, { "name": "RTZ Schedule3 SubHeading 1 Char", "type": "Character", "characterFormat": { "bold": true, "fontSize": 10, "fontFamily": "Arial", "fontSizeBidi": 10, "fontFamilyBidi": "Times New Roman" }, "basedOn": "Default Paragraph Font" }, { "name": "RTZ Schedule4 SubHeading 2 Char", "type": "Character", "characterFormat": { "bold": false, "fontSize": 10, "fontFamily": "Arial", "fontSizeBidi": 10, "fontFamilyBidi": "Times New Roman" }, "basedOn": "RTZ Schedule3 SubHeading 1 Char" }, { "name": "Body Text 2", "type": "Paragraph", "paragraphFormat": { "afterSpacing": 6, "lineSpacing": 2, "lineSpacingType": "Multiple", "listFormat": {} }, "characterFormat": {}, "basedOn": "Normal", "link": "Body Text 2 Char" }, { "name": "Body Text 2 Char", "type": "Character", "characterFormat": { "fontFamily": "Arial" }, "basedOn": "Default Paragraph Font" }, { "name": "RTZ Schedule5 SubHeading 3 Char", "type": "Character", "characterFormat": { "fontSize": 10, "fontFamily": "Arial", "fontSizeBidi": 10, "fontFamilyBidi": "Times New Roman" }, "basedOn": "Default Paragraph Font" }, { "name": "RTZ Schedule8 SubHeading 6", "type": "Paragraph", "paragraphFormat": { "listFormat": { "listLevelNumber": 7 } }, "characterFormat": {}, "basedOn": "RTZ Schedule7 SubHeading 5" }, { "name": "RTZ Schedule7 SubHeading 5", "type": "Paragraph", "paragraphFormat": { "outlineLevel": "Level5", "listFormat": { "listLevelNumber": 6 } }, "characterFormat": {}, "basedOn": "RTZ Schedule5 SubHeading 3", "link": "RTZ Schedule7 SubHeading 5 Char" }, { "name": "RTZ Schedule7 SubHeading 5 Char", "type": "Character", "characterFormat": { "fontSize": 10, "fontFamily": "Arial", "fontSizeBidi": 10, "fontFamilyBidi": "Times New Roman" }, "basedOn": "RTZ Schedule5 SubHeading 3 Char" }, { "name": "RTZ Schedule1 Number & Title", "type": "Paragraph", "paragraphFormat": { "leftIndent": 0, "textAlignment": "Center", "afterSpacing": 0, "lineSpacing": 1.100000023841858, "lineSpacingType": "Multiple", "outlineLevel": "Level1", "listFormat": { "listId": 20 } }, "characterFormat": { "bold": true, "fontSize": 10, "fontSizeBidi": 10, "fontFamilyBidi": "Times New Roman" }, "basedOn": "Normal", "next": "Normal" }, { "name": "RTZ Schedule6 SubHeading 4", "type": "Paragraph", "paragraphFormat": { "beforeSpacing": 0, "afterSpacing": 0, "outlineLevel": "Level4", "listFormat": { "listLevelNumber": 5 } }, "characterFormat": { "bold": false }, "basedOn": "RTZ Schedule5 SubHeading 3" }, { "name": "RTZ Schedule2 Part Number & Title", "type": "Paragraph", "paragraphFormat": { "afterSpacing": 6, "outlineLevel": "Level2", "listFormat": { "listId": 20, "listLevelNumber": 1 } }, "characterFormat": { "fontFamily": "Arial Bold", "underline": "Single" }, "basedOn": "RTZ Schedule1 Number & Title", "next": "Normal" }, { "name": "annotation reference", "type": "Character", "characterFormat": { "fontSize": 8, "fontSizeBidi": 8 }, "basedOn": "Default Paragraph Font" }, { "name": "annotation text", "type": "Paragraph", "paragraphFormat": { "afterSpacing": 0, "lineSpacing": 1.100000023841858, "lineSpacingType": "Multiple", "listFormat": {} }, "characterFormat": { "fontSize": 10, "fontSizeBidi": 10, "fontFamilyBidi": "Times New Roman" }, "basedOn": "Normal", "link": "Comment Text Char" }, { "name": "Comment Text Char", "type": "Character", "characterFormat": { "fontSize": 10, "fontFamily": "Arial", "fontSizeBidi": 10, "fontFamilyBidi": "Times New Roman" }, "basedOn": "Default Paragraph Font" }, { "name": "RTZ Appendix Number", "type": "Paragraph", "paragraphFormat": { "textAlignment": "Center", "beforeSpacing": 6, "afterSpacing": 0, "lineSpacing": 2, "lineSpacingType": "Multiple", "outlineLevel": "Level1", "listFormat": { "listId": 9 } }, "characterFormat": { "bold": true, "fontSize": 10, "fontFamily": "Arial Bold", "boldBidi": true, "fontSizeBidi": 10, "fontFamilyBidi": "Times New Roman" }, "basedOn": "Normal" }, { "name": "RTZ Appendix Title", "type": "Paragraph", "paragraphFormat": { "textAlignment": "Center", "beforeSpacing": 6, "afterSpacing": 0, "lineSpacing": 2, "lineSpacingType": "Multiple", "listFormat": {} }, "characterFormat": { "bold": true, "fontSize": 10, "boldBidi": true, "fontSizeBidi": 10, "fontFamilyBidi": "Arial" }, "basedOn": "Normal" }, { "name": "RTZ Body Text 3", "type": "Paragraph", "paragraphFormat": { "leftIndent": 72, "listFormat": {} }, "characterFormat": {}, "basedOn": "RTZ Body Text 2" }, { "name": "RTZ Body Text 4", "type": "Paragraph", "paragraphFormat": { "leftIndent": 108, "listFormat": {} }, "characterFormat": {}, "basedOn": "RTZ Body Text 3" }, { "name": "RTZ Body Text 5", "type": "Paragraph", "paragraphFormat": { "leftIndent": 144, "listFormat": {} }, "characterFormat": {}, "basedOn": "RTZ Body Text 4" }, { "name": "RTZ Body Text 6", "type": "Paragraph", "paragraphFormat": { "leftIndent": 180, "listFormat": {} }, "characterFormat": {}, "basedOn": "RTZ Body Text 5" }, { "name": "RTZ Body Text Gen", "type": "Paragraph", "paragraphFormat": { "textAlignment": "Justify", "beforeSpacing": 6, "afterSpacing": 6, "lineSpacing": 1, "lineSpacingType": "Multiple", "listFormat": {}, "tabs": [{ "position": 56.70000076293945, "deletePosition": 0, "tabJustification": "Left", "tabLeader": "None" }] }, "characterFormat": { "fontFamily": "Times New Roman", "fontSizeBidi": 10, "fontFamilyBidi": "Times New Roman" }, "basedOn": "Normal", "link": "RTZ Body Text Gen Char" }, { "name": "RTZ Body Text Gen Char", "type": "Character", "characterFormat": { "fontFamily": "Times New Roman", "fontSizeBidi": 10, "fontFamilyBidi": "Times New Roman" }, "basedOn": "Default Paragraph Font" }, { "name": "RTZ Document Title", "type": "Paragraph", "paragraphFormat": { "textAlignment": "Center", "beforeSpacing": 18, "afterSpacing": 18, "lineSpacing": 1.100000023841858, "lineSpacingType": "Multiple", "listFormat": {} }, "characterFormat": { "bold": true, "fontSize": 10, "boldBidi": true, "fontSizeBidi": 10, "fontFamilyBidi": "Times New Roman" }, "basedOn": "Normal" }, { "name": "RTZ Heading 7", "type": "Paragraph", "paragraphFormat": { "leftIndent": 216, "firstLineIndent": -36, "textAlignment": "Justify", "beforeSpacing": 6, "afterSpacing": 6, "lineSpacing": 1.100000023841858, "lineSpacingType": "Multiple", "listFormat": {}, "tabs": [{ "position": 216, "deletePosition": 0, "tabJustification": "List", "tabLeader": "None" }] }, "characterFormat": { "fontSize": 10, "fontSizeBidi": 10, "fontFamilyBidi": "Times New Roman" }, "basedOn": "Normal" }, { "name": "RTZ Notice - Party Names", "type": "Paragraph", "paragraphFormat": { "textAlignment": "Justify", "beforeSpacing": 24, "afterSpacing": 5, "lineSpacing": 1, "lineSpacingType": "Multiple", "listFormat": {} }, "characterFormat": { "bold": true, "fontSize": 10, "boldBidi": true, "fontSizeBidi": 10, "fontFamilyBidi": "Times New Roman" }, "basedOn": "Body Text 2" }, { "name": "RTZ Party & Recital Headings", "type": "Paragraph", "paragraphFormat": { "leftIndent": 36, "firstLineIndent": -36, "textAlignment": "Justify", "beforeSpacing": 6, "afterSpacing": 6, "lineSpacing": 1.100000023841858, "lineSpacingType": "Multiple", "listFormat": {}, "tabs": [{ "position": 56.70000076293945, "deletePosition": 0, "tabJustification": "Left", "tabLeader": "None" }] }, "characterFormat": { "bold": true, "fontSize": 10, "boldBidi": true, "fontSizeBidi": 10, "fontFamilyBidi": "Times New Roman" }, "basedOn": "Normal" }, { "name": "RTZ Party Names", "type": "Paragraph", "paragraphFormat": { "textAlignment": "Justify", "beforeSpacing": 6, "afterSpacing": 6, "lineSpacing": 1.100000023841858, "lineSpacingType": "Multiple", "listFormat": { "listId": 2 }, "tabs": [{ "position": 0, "deletePosition": 36, "tabJustification": "Left", "tabLeader": "None" }] }, "characterFormat": { "fontSize": 10, "boldBidi": true, "fontSizeBidi": 10, "fontFamilyBidi": "Times New Roman" }, "basedOn": "Normal", "next": "Normal" }, { "name": "RTZ Recitals", "type": "Paragraph", "paragraphFormat": { "textAlignment": "Justify", "beforeSpacing": 6, "afterSpacing": 6, "lineSpacing": 1.100000023841858, "lineSpacingType": "Multiple", "listFormat": { "listId": 0 } }, "characterFormat": { "fontSize": 10, "fontSizeBidi": 10, "fontFamilyBidi": "Times New Roman" }, "basedOn": "Normal" }, { "name": "Heading 2", "type": "Paragraph", "paragraphFormat": { "leftIndent": 0, "rightIndent": 0, "firstLineIndent": 0, "textAlignment": "Left", "beforeSpacing": 2, "afterSpacing": 0, "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple", "outlineLevel": "Level2", "listFormat": {} }, "characterFormat": { "fontSize": 13, "fontFamily": "Calibri Light", "fontColor": "#2F5496" }, "basedOn": "Normal", "link": "Heading 2 Char", "next": "Normal" }, { "name": "Heading 2 Char", "type": "Character", "characterFormat": { "fontSize": 13, "fontFamily": "Calibri Light", "fontColor": "#2F5496" }, "basedOn": "Default Paragraph Font" }, { "name": "Heading 3", "type": "Paragraph", "paragraphFormat": { "leftIndent": 0, "rightIndent": 0, "firstLineIndent": 0, "textAlignment": "Left", "beforeSpacing": 2, "afterSpacing": 0, "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple", "outlineLevel": "Level3", "listFormat": {} }, "characterFormat": { "fontSize": 12, "fontFamily": "Calibri Light", "fontColor": "#1F3763" }, "basedOn": "Normal", "link": "Heading 3 Char", "next": "Normal" }, { "name": "Heading 3 Char", "type": "Character", "characterFormat": { "fontSize": 12, "fontFamily": "Calibri Light", "fontColor": "#1F3763" }, "basedOn": "Default Paragraph Font" }, { "name": "Heading 4", "type": "Paragraph", "paragraphFormat": { "leftIndent": 0, "rightIndent": 0, "firstLineIndent": 0, "textAlignment": "Left", "beforeSpacing": 2, "afterSpacing": 0, "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple", "outlineLevel": "Level4", "listFormat": {} }, "characterFormat": { "italic": true, "fontFamily": "Calibri Light", "fontColor": "#2F5496" }, "basedOn": "Normal", "link": "Heading 4 Char", "next": "Normal" }, { "name": "Heading 4 Char", "type": "Character", "characterFormat": { "italic": true, "fontFamily": "Calibri Light", "fontColor": "#2F5496" }, "basedOn": "Default Paragraph Font" }, { "name": "Heading 5", "type": "Paragraph", "paragraphFormat": { "leftIndent": 0, "rightIndent": 0, "firstLineIndent": 0, "textAlignment": "Left", "beforeSpacing": 2, "afterSpacing": 0, "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple", "outlineLevel": "Level5", "listFormat": {} }, "characterFormat": { "fontFamily": "Calibri Light", "fontColor": "#2F5496" }, "basedOn": "Normal", "link": "Heading 5 Char", "next": "Normal" }, { "name": "Heading 5 Char", "type": "Character", "characterFormat": { "fontFamily": "Calibri Light", "fontColor": "#2F5496" }, "basedOn": "Default Paragraph Font" }, { "name": "Heading 6", "type": "Paragraph", "paragraphFormat": { "leftIndent": 0, "rightIndent": 0, "firstLineIndent": 0, "textAlignment": "Left", "beforeSpacing": 2, "afterSpacing": 0, "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple", "outlineLevel": "Level6", "listFormat": {} }, "characterFormat": { "fontFamily": "Calibri Light", "fontColor": "#1F3763" }, "basedOn": "Normal", "link": "Heading 6 Char", "next": "Normal" }, { "name": "Heading 6 Char", "type": "Character", "characterFormat": { "fontFamily": "Calibri Light", "fontColor": "#1F3763" }, "basedOn": "Default Paragraph Font" }], "lists": [{ "abstractListId": 0, "listId": 0 }, { "abstractListId": 2, "listId": 2 }, { "abstractListId": 9, "listId": 9 }, { "abstractListId": 16, "listId": 16 }, { "abstractListId": 20, "listId": 20 }], "abstractLists": [{ "abstractListId": 0, "levels": [{ "characterFormat": { "bold": true, "italic": false, "fontSize": 10, "fontFamily": "Arial Bold", "strikethrough": "None", "baselineAlignment": "Normal", "boldBidi": false, "italicBidi": false, "fontFamilyBidi": "Times New Roman" }, "paragraphFormat": { "leftIndent": 36, "firstLineIndent": -18, "listFormat": {} }, "followCharacter": "Tab", "listLevelPattern": "UpLetter", "numberFormat": "(%1)", "restartLevel": 0, "startAt": 1 }, { "characterFormat": {}, "paragraphFormat": { "leftIndent": 72, "firstLineIndent": -18, "listFormat": {} }, "followCharacter": "Tab", "listLevelPattern": "LowLetter", "numberFormat": "%2.", "restartLevel": 1, "startAt": 1 }, { "characterFormat": {}, "paragraphFormat": { "leftIndent": 108, "firstLineIndent": -9, "listFormat": {} }, "followCharacter": "Tab", "listLevelPattern": "LowRoman", "numberFormat": "%3.", "restartLevel": 2, "startAt": 1 }, { "characterFormat": {}, "paragraphFormat": { "leftIndent": 144, "firstLineIndent": -18, "listFormat": {} }, "followCharacter": "Tab", "listLevelPattern": "Arabic", "numberFormat": "%4.", "restartLevel": 3, "startAt": 1 }, { "characterFormat": {}, "paragraphFormat": { "leftIndent": 180, "firstLineIndent": -18, "listFormat": {} }, "followCharacter": "Tab", "listLevelPattern": "LowLetter", "numberFormat": "%5.", "restartLevel": 4, "startAt": 1 }, { "characterFormat": {}, "paragraphFormat": { "leftIndent": 216, "firstLineIndent": -9, "listFormat": {} }, "followCharacter": "Tab", "listLevelPattern": "LowRoman", "numberFormat": "%6.", "restartLevel": 5, "startAt": 1 }, { "characterFormat": {}, "paragraphFormat": { "leftIndent": 252, "firstLineIndent": -18, "listFormat": {} }, "followCharacter": "Tab", "listLevelPattern": "Arabic", "numberFormat": "%7.", "restartLevel": 6, "startAt": 1 }, { "characterFormat": {}, "paragraphFormat": { "leftIndent": 288, "firstLineIndent": -18, "listFormat": {} }, "followCharacter": "Tab", "listLevelPattern": "LowLetter", "numberFormat": "%8.", "restartLevel": 7, "startAt": 1 }, { "characterFormat": {}, "paragraphFormat": { "leftIndent": 324, "firstLineIndent": -9, "listFormat": {} }, "followCharacter": "Tab", "listLevelPattern": "LowRoman", "numberFormat": "%9.", "restartLevel": 8, "startAt": 1 }] }, { "abstractListId": 2, "levels": [{ "characterFormat": { "bold": true, "italic": false, "fontSize": 10, "fontFamily": "Arial Bold" }, "paragraphFormat": { "leftIndent": 36, "firstLineIndent": -36, "listFormat": {}, "tabs": [{ "position": 36, "deletePosition": 0, "tabJustification": "List", "tabLeader": "None" }] }, "followCharacter": "Tab", "listLevelPattern": "Arabic", "numberFormat": "(%1)", "restartLevel": 0, "startAt": 1 }, { "characterFormat": {}, "paragraphFormat": { "leftIndent": 72, "firstLineIndent": -18, "listFormat": {}, "tabs": [{ "position": 72, "deletePosition": 0, "tabJustification": "List", "tabLeader": "None" }] }, "followCharacter": "Tab", "listLevelPattern": "LowLetter", "numberFormat": "%2.", "restartLevel": 1, "startAt": 1 }, { "characterFormat": {}, "paragraphFormat": { "leftIndent": 108, "firstLineIndent": -9, "listFormat": {}, "tabs": [{ "position": 108, "deletePosition": 0, "tabJustification": "List", "tabLeader": "None" }] }, "followCharacter": "Tab", "listLevelPattern": "LowRoman", "numberFormat": "%3.", "restartLevel": 2, "startAt": 1 }, { "characterFormat": {}, "paragraphFormat": { "leftIndent": 144, "firstLineIndent": -18, "listFormat": {}, "tabs": [{ "position": 144, "deletePosition": 0, "tabJustification": "List", "tabLeader": "None" }] }, "followCharacter": "Tab", "listLevelPattern": "Arabic", "numberFormat": "%4.", "restartLevel": 3, "startAt": 1 }, { "characterFormat": {}, "paragraphFormat": { "leftIndent": 180, "firstLineIndent": -18, "listFormat": {}, "tabs": [{ "position": 180, "deletePosition": 0, "tabJustification": "List", "tabLeader": "None" }] }, "followCharacter": "Tab", "listLevelPattern": "LowLetter", "numberFormat": "%5.", "restartLevel": 4, "startAt": 1 }, { "characterFormat": {}, "paragraphFormat": { "leftIndent": 216, "firstLineIndent": -9, "listFormat": {}, "tabs": [{ "position": 216, "deletePosition": 0, "tabJustification": "List", "tabLeader": "None" }] }, "followCharacter": "Tab", "listLevelPattern": "LowRoman", "numberFormat": "%6.", "restartLevel": 5, "startAt": 1 }, { "characterFormat": {}, "paragraphFormat": { "leftIndent": 252, "firstLineIndent": -18, "listFormat": {}, "tabs": [{ "position": 252, "deletePosition": 0, "tabJustification": "List", "tabLeader": "None" }] }, "followCharacter": "Tab", "listLevelPattern": "Arabic", "numberFormat": "%7.", "restartLevel": 6, "startAt": 1 }, { "characterFormat": {}, "paragraphFormat": { "leftIndent": 288, "firstLineIndent": -18, "listFormat": {}, "tabs": [{ "position": 288, "deletePosition": 0, "tabJustification": "List", "tabLeader": "None" }] }, "followCharacter": "Tab", "listLevelPattern": "LowLetter", "numberFormat": "%8.", "restartLevel": 7, "startAt": 1 }, { "characterFormat": {}, "paragraphFormat": { "leftIndent": 324, "firstLineIndent": -9, "listFormat": {}, "tabs": [{ "position": 324, "deletePosition": 0, "tabJustification": "List", "tabLeader": "None" }] }, "followCharacter": "Tab", "listLevelPattern": "LowRoman", "numberFormat": "%9.", "restartLevel": 8, "startAt": 1 }] }, { "abstractListId": 9, "levels": [{ "characterFormat": { "bold": true, "italic": false, "fontSize": 10, "fontFamily": "Arial Bold", "strikethrough": "None", "baselineAlignment": "Normal", "fontSizeBidi": 11, "fontFamilyBidi": "Times New Roman" }, "paragraphFormat": { "leftIndent": 0, "firstLineIndent": 0, "listFormat": {} }, "followCharacter": "None", "listLevelPattern": "UpLetter", "numberFormat": "Appendix %1", "restartLevel": 0, "startAt": 1 }, { "characterFormat": { "bold": false, "italic": false, "fontSize": 10, "fontFamily": "Arial", "strikethrough": "None", "baselineAlignment": "Normal", "fontSizeBidi": 11, "fontFamilyBidi": "Times New Roman" }, "paragraphFormat": { "leftIndent": 36, "firstLineIndent": -36, "listFormat": {}, "tabs": [{ "position": 36, "deletePosition": 0, "tabJustification": "List", "tabLeader": "None" }] }, "followCharacter": "Tab", "listLevelPattern": "Arabic", "numberFormat": "%2.", "restartLevel": 1, "startAt": 1 }, { "characterFormat": { "bold": false, "italic": false, "fontSize": 10, "fontFamily": "Arial", "fontSizeBidi": 11, "fontFamilyBidi": "Times New Roman" }, "paragraphFormat": { "leftIndent": 72, "firstLineIndent": -36, "listFormat": {}, "tabs": [{ "position": 36, "deletePosition": 0, "tabJustification": "List", "tabLeader": "None" }] }, "followCharacter": "Tab", "listLevelPattern": "LowLetter", "numberFormat": "(%3)", "restartLevel": 2, "startAt": 1 }, { "characterFormat": { "bold": false, "italic": false, "fontSize": 11, "fontFamily": "Times New Roman" }, "paragraphFormat": { "leftIndent": 108, "firstLineIndent": -36, "listFormat": {}, "tabs": [{ "position": 72, "deletePosition": 0, "tabJustification": "List", "tabLeader": "None" }] }, "followCharacter": "Tab", "listLevelPattern": "None", "numberFormat": "", "restartLevel": 3, "startAt": 1 }, { "characterFormat": {}, "paragraphFormat": { "leftIndent": 144, "firstLineIndent": -36, "listFormat": {}, "tabs": [{ "position": 108, "deletePosition": 0, "tabJustification": "List", "tabLeader": "None" }] }, "followCharacter": "Tab", "listLevelPattern": "None", "numberFormat": "", "restartLevel": 4, "startAt": 1 }, { "characterFormat": {}, "paragraphFormat": { "leftIndent": 180, "firstLineIndent": -36, "listFormat": {}, "tabs": [{ "position": 144, "deletePosition": 0, "tabJustification": "List", "tabLeader": "None" }] }, "followCharacter": "Tab", "listLevelPattern": "None", "numberFormat": "", "restartLevel": 5, "startAt": 1 }, { "characterFormat": {}, "paragraphFormat": { "leftIndent": 216, "firstLineIndent": -36, "listFormat": {}, "tabs": [{ "position": 180, "deletePosition": 0, "tabJustification": "List", "tabLeader": "None" }] }, "followCharacter": "Tab", "listLevelPattern": "None", "numberFormat": "", "restartLevel": 6, "startAt": 1 }, { "characterFormat": {}, "paragraphFormat": { "leftIndent": 252, "firstLineIndent": -36, "listFormat": {}, "tabs": [{ "position": 216, "deletePosition": 0, "tabJustification": "List", "tabLeader": "None" }] }, "followCharacter": "Tab", "listLevelPattern": "None", "numberFormat": "", "restartLevel": 7, "startAt": 1 }, { "characterFormat": {}, "paragraphFormat": { "leftIndent": 288, "firstLineIndent": -36, "listFormat": {}, "tabs": [{ "position": 252, "deletePosition": 0, "tabJustification": "List", "tabLeader": "None" }] }, "followCharacter": "Tab", "listLevelPattern": "None", "numberFormat": "", "restartLevel": 8, "startAt": 1 }] }, { "abstractListId": 16, "levels": [{ "characterFormat": { "bold": true, "italic": false, "fontSize": 10, "fontFamily": "Arial" }, "paragraphFormat": { "leftIndent": 36, "firstLineIndent": -36, "listFormat": {}, "tabs": [{ "position": 36, "deletePosition": 0, "tabJustification": "List", "tabLeader": "None" }] }, "followCharacter": "Tab", "listLevelPattern": "Arabic", "numberFormat": "%1.", "restartLevel": 0, "startAt": 1 }, { "characterFormat": {}, "paragraphFormat": { "leftIndent": 36, "firstLineIndent": -36, "listFormat": {}, "tabs": [{ "position": 36, "deletePosition": 0, "tabJustification": "List", "tabLeader": "None" }] }, "followCharacter": "Tab", "listLevelPattern": "Arabic", "numberFormat": "%1.%2", "restartLevel": 1, "startAt": 1 }, { "characterFormat": {}, "paragraphFormat": { "leftIndent": 72, "firstLineIndent": -36, "listFormat": {}, "tabs": [{ "position": 72, "deletePosition": 0, "tabJustification": "List", "tabLeader": "None" }] }, "followCharacter": "Tab", "listLevelPattern": "LowLetter", "numberFormat": "(%3)", "restartLevel": 2, "startAt": 1 }, { "characterFormat": { "bold": false, "italic": false, "fontSize": 10, "fontFamily": "Arial" }, "paragraphFormat": { "leftIndent": 108, "firstLineIndent": -36, "listFormat": {}, "tabs": [{ "position": 108, "deletePosition": 0, "tabJustification": "List", "tabLeader": "None" }] }, "followCharacter": "Tab", "listLevelPattern": "LowRoman", "numberFormat": "(%4)", "restartLevel": 3, "startAt": 1 }, { "characterFormat": { "bold": false, "italic": false, "fontSize": 10, "fontFamily": "Arial" }, "paragraphFormat": { "leftIndent": 144, "firstLineIndent": -36, "listFormat": {}, "tabs": [{ "position": 144, "deletePosition": 0, "tabJustification": "List", "tabLeader": "None" }] }, "followCharacter": "Tab", "listLevelPattern": "UpLetter", "numberFormat": "(%5)", "restartLevel": 4, "startAt": 1 }, { "characterFormat": { "bold": false, "italic": false, "fontSize": 10, "fontFamily": "Arial" }, "paragraphFormat": { "leftIndent": 180, "firstLineIndent": -36, "listFormat": {}, "tabs": [{ "position": 180, "deletePosition": 0, "tabJustification": "List", "tabLeader": "None" }] }, "followCharacter": "Tab", "listLevelPattern": "UpRoman", "numberFormat": "(%6)", "restartLevel": 5, "startAt": 1 }, { "characterFormat": {}, "paragraphFormat": { "leftIndent": 216, "firstLineIndent": -36, "listFormat": {}, "tabs": [{ "position": 216, "deletePosition": 0, "tabJustification": "List", "tabLeader": "None" }] }, "followCharacter": "Tab", "listLevelPattern": "None", "numberFormat": "", "restartLevel": 6, "startAt": 1 }, { "characterFormat": {}, "paragraphFormat": { "leftIndent": 252, "firstLineIndent": -36, "listFormat": {}, "tabs": [{ "position": 216, "deletePosition": 0, "tabJustification": "List", "tabLeader": "None" }] }, "followCharacter": "Tab", "listLevelPattern": "None", "numberFormat": "", "restartLevel": 7, "startAt": 1 }, { "characterFormat": {}, "paragraphFormat": { "leftIndent": 288, "firstLineIndent": -36, "listFormat": {}, "tabs": [{ "position": 252, "deletePosition": 0, "tabJustification": "List", "tabLeader": "None" }] }, "followCharacter": "Tab", "listLevelPattern": "None", "numberFormat": "", "restartLevel": 8, "startAt": 1 }] }, { "abstractListId": 20, "levels": [{ "characterFormat": {}, "paragraphFormat": { "leftIndent": 248.10000610351562, "firstLineIndent": 0, "listFormat": {} }, "followCharacter": "None", "listLevelPattern": "Arabic", "numberFormat": "Schedule %1", "restartLevel": 0, "startAt": 1 }, { "characterFormat": { "bold": true, "italic": false, "fontSize": 10, "fontFamily": "Arial Bold", "underline": "Single", "strikethrough": "None", "baselineAlignment": "Normal", "fontColor": "#000000FF", "boldBidi": false, "italicBidi": false, "fontSizeBidi": 0, "fontFamilyBidi": "Times New Roman" }, "paragraphFormat": { "leftIndent": 0, "firstLineIndent": 0, "listFormat": {} }, "followCharacter": "None", "listLevelPattern": "UpLetter", "numberFormat": "Part %2", "restartLevel": 1, "startAt": 1 }, { "characterFormat": { "bold": true, "italic": false, "fontSize": 10, "fontFamily": "Arial Bold", "strikethrough": "None", "baselineAlignment": "Normal" }, "paragraphFormat": { "leftIndent": 36, "firstLineIndent": -36, "listFormat": {}, "tabs": [{ "position": 36, "deletePosition": 0, "tabJustification": "List", "tabLeader": "None" }] }, "followCharacter": "Tab", "listLevelPattern": "Arabic", "numberFormat": "%3.", "restartLevel": 2, "startAt": 1 }, { "characterFormat": {}, "paragraphFormat": { "leftIndent": 36, "firstLineIndent": -36, "listFormat": {}, "tabs": [{ "position": 36, "deletePosition": 0, "tabJustification": "List", "tabLeader": "None" }] }, "followCharacter": "Tab", "listLevelPattern": "Arabic", "numberFormat": "%3.%4.", "restartLevel": 3, "startAt": 1 }, { "characterFormat": { "bold": false, "italic": false, "fontSize": 10, "fontFamily": "Arial" }, "paragraphFormat": { "leftIndent": 72, "firstLineIndent": -36, "listFormat": {}, "tabs": [{ "position": 72, "deletePosition": 0, "tabJustification": "List", "tabLeader": "None" }] }, "followCharacter": "Tab", "listLevelPattern": "LowLetter", "numberFormat": "(%5)", "restartLevel": 4, "startAt": 1 }, { "characterFormat": {}, "paragraphFormat": { "leftIndent": 108, "firstLineIndent": -36, "listFormat": {}, "tabs": [{ "position": 108, "deletePosition": 0, "tabJustification": "List", "tabLeader": "None" }] }, "followCharacter": "Tab", "listLevelPattern": "LowRoman", "numberFormat": "(%6)", "restartLevel": 5, "startAt": 1 }, { "characterFormat": { "bold": false, "italic": false, "fontSize": 10, "fontFamily": "Arial" }, "paragraphFormat": { "leftIndent": 144, "firstLineIndent": -36, "listFormat": {}, "tabs": [{ "position": 144, "deletePosition": 0, "tabJustification": "List", "tabLeader": "None" }] }, "followCharacter": "Tab", "listLevelPattern": "UpLetter", "numberFormat": "(%7)", "restartLevel": 6, "startAt": 1 }, { "characterFormat": { "bold": false, "italic": false, "fontSize": 10, "fontFamily": "Arial" }, "paragraphFormat": { "leftIndent": 180, "firstLineIndent": -36, "listFormat": {} }, "followCharacter": "Tab", "listLevelPattern": "Arabic", "numberFormat": "(%8)", "restartLevel": 7, "startAt": 1 }, { "characterFormat": { "bold": false, "italic": false, "fontSize": 10, "fontFamily": "Arial" }, "paragraphFormat": { "leftIndent": 180, "firstLineIndent": -18, "listFormat": {}, "tabs": [{ "position": 180, "deletePosition": 0, "tabJustification": "List", "tabLeader": "None" }] }, "followCharacter": "Tab", "listLevelPattern": "None", "numberFormat": "", "restartLevel": 8, "startAt": 1 }] }], "comments": [] };
describe('export list level number validation', () => {
    let editor: DocumentEditor;
    let viewer: LayoutViewer;
    let exportData: any;
    beforeAll((): void => {
        let ele: HTMLElement = createElement('div', { id: 'container' });
        document.body.appendChild(ele);

        editor = new DocumentEditor({ isReadOnly: false });
        editor.enableAllModules();
        (editor.documentHelper as any).containerCanvasIn = TestHelper.containerCanvas;
        (editor.documentHelper as any).selectionCanvasIn = TestHelper.selectionCanvas;
        (editor.documentHelper.render as any).pageCanvasIn = TestHelper.pageCanvas;
        (editor.documentHelper.render as any).selectionCanvasIn = TestHelper.pageSelectionCanvas;
        editor.appendTo('#container');
        viewer = editor.viewer as PageLayoutViewer;
    });
    afterAll((done): void => {
        viewer.destroy();
        viewer = undefined;
        editor.destroy();
        document.body.removeChild(document.getElementById('container'));
        editor = undefined;
        document.body.innerHTML = '';
        setTimeout(function () {
            done();
        }, 1000);
    });
    it('sfdt export validation', () => {
        console.log('sfdt export validation');
        editor.open(JSON.stringify(jsonData));
        exportData = editor.sfdtExportModule.write();
        expect(exportData.styles[16].paragraphFormat.listFormat.listLevelNumber).toBe(1);
    });
});

let levelOverrides: string = '{"sections":[{"sectionFormat":{"pageWidth":612,"pageHeight":792,"leftMargin":72,"rightMargin":72,"topMargin":72,"bottomMargin":72,"differentFirstPage":true,"differentOddAndEvenPages":false,"headerDistance":36,"footerDistance":36,"bidi":false},"blocks":[{"paragraphFormat":{"leftIndent":0,"styleName":"RTZ Body Text 2","listFormat":{}},"characterFormat":{},"inlines":[{"characterFormat":{},"bookmarkType":0,"name":"_GoBack"},{"characterFormat":{},"bookmarkType":1,"name":"_GoBack"}]},{"paragraphFormat":{"textAlignment":"Justify","afterSpacing":0,"lineSpacing":1.100000023841858,"lineSpacingType":"Multiple","styleName":"Normal","listFormat":{}},"characterFormat":{"bold":true,"underline":"Single","fontSizeBidi":10,"fontFamilyBidi":"Arial"},"inlines":[{"characterFormat":{},"bookmarkType":0,"name":"_Hlk23323837"},{"characterFormat":{"bold":true,"underline":"Single","fontSizeBidi":10,"fontFamilyBidi":"Arial"},"text":" "},{"characterFormat":{"bold":true,"underline":"Single","fontSizeBidi":10,"fontFamilyBidi":"Arial"},"text":"[Abbreviated "},{"characterFormat":{"bold":true,"underline":"Single","fontSizeBidi":10,"fontFamilyBidi":"Arial"},"text":"name "},{"characterFormat":{"bold":true,"underline":"Single","fontSizeBidi":10,"fontFamilyBidi":"Arial"},"text":"of "},{"characterFormat":{"bold":true,"underline":"Single","fontSizeBidi":10,"fontFamilyBidi":"Arial"},"text":"Party "},{"characterFormat":{"bold":true,"underline":"Single","fontSizeBidi":10,"fontFamilyBidi":"Arial"},"text":"as "},{"characterFormat":{"bold":true,"underline":"Single","fontSizeBidi":10,"fontFamilyBidi":"Arial"},"text":"used "},{"characterFormat":{"bold":true,"underline":"Single","fontSizeBidi":10,"fontFamilyBidi":"Arial"},"text":"in "},{"characterFormat":{"bold":true,"underline":"Single","fontSizeBidi":10,"fontFamilyBidi":"Arial"},"text":"Agreement]"}]},{"paragraphFormat":{"textAlignment":"Justify","afterSpacing":0,"lineSpacing":1.100000023841858,"lineSpacingType":"Multiple","styleName":"Normal","listFormat":{}},"characterFormat":{"bold":true,"fontSizeBidi":10,"fontFamilyBidi":"Arial"},"inlines":[{"characterFormat":{"bold":true,"highlightColor":"BrightGreen","fontSizeBidi":10,"fontFamilyBidi":"Arial"},"text":"[SIGNATURE "},{"characterFormat":{"bold":true,"highlightColor":"BrightGreen","fontSizeBidi":10,"fontFamilyBidi":"Arial"},"text":"BLOCK "},{"characterFormat":{"bold":true,"highlightColor":"BrightGreen","fontSizeBidi":10,"fontFamilyBidi":"Arial"},"text":"FOR "},{"characterFormat":{"bold":true,"highlightColor":"BrightGreen","fontSizeBidi":10,"fontFamilyBidi":"Arial"},"text":"CORPORATE "},{"characterFormat":{"bold":true,"highlightColor":"BrightGreen","fontSizeBidi":10,"fontFamilyBidi":"Arial"},"text":"ENTITY]"}]},{"paragraphFormat":{"listFormat":{}},"characterFormat":{},"inlines":[]}],"headersFooters":{"firstPageFooter":{"blocks":[{"paragraphFormat":{"styleName":"Footer","listFormat":{}},"characterFormat":{},"inlines":[{"characterFormat":{},"bookmarkType":0,"name":"_Hlk23323631"},{"characterFormat":{},"bookmarkType":0,"name":"_Hlk23323632"},{"characterFormat":{},"bookmarkType":0,"name":"_Hlk23323634"},{"characterFormat":{},"bookmarkType":0,"name":"_Hlk23323635"},{"characterFormat":{"italic":true,"fontSize":8},"text":"Execution page to Shareholders’ Agreement"},{"characterFormat":{},"bookmarkType":1,"name":"_Hlk23323631"},{"characterFormat":{},"bookmarkType":1,"name":"_Hlk23323632"},{"characterFormat":{},"bookmarkType":1,"name":"_Hlk23323634"},{"characterFormat":{},"bookmarkType":1,"name":"_Hlk23323635"}]}]}}}],"characterFormat":{"bold":false,"italic":false,"fontSize":11,"fontFamily":"Calibri","underline":"None","strikethrough":"None","baselineAlignment":"Normal","highlightColor":"NoColor","fontColor":"#000000","fontSizeBidi":11,"fontFamilyBidi":"Arial"},"paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":0,"afterSpacing":10,"lineSpacing":1.149999976158142,"lineSpacingType":"Multiple","listFormat":{},"bidi":false},"defaultTabWidth":36,"enforcement":false,"hashValue":"","saltValue":"","formatting":false,"protectionType":"NoProtection","dontUseHTMLParagraphAutoSpacing":false,"styles":[{"name":"Normal","type":"Paragraph","paragraphFormat":{"listFormat":{}},"characterFormat":{"fontSize":10,"fontFamily":"Arial"},"next":"Normal"},{"name":"Heading 1","type":"Paragraph","paragraphFormat":{"leftIndent":0,"firstLineIndent":0,"textAlignment":"Justify","afterSpacing":0,"lineSpacing":1.100000023841858,"lineSpacingType":"Multiple","outlineLevel":"Level1","listFormat":{"listId":15}},"characterFormat":{"bold":true,"fontFamily":"Arial Bold","boldBidi":true,"fontSizeBidi":14,"fontFamilyBidi":"Times New Roman"},"basedOn":"Normal","link":"Heading 1 Char","next":"Normal"},{"name":"Heading 1 Char","type":"Character","characterFormat":{"bold":true,"fontSize":10,"fontFamily":"Arial Bold","boldBidi":true,"fontSizeBidi":14,"fontFamilyBidi":"Times New Roman"},"basedOn":"Default Paragraph Font"},{"name":"Default Paragraph Font","type":"Character","characterFormat":{}},{"name":"Heading 2","type":"Paragraph","paragraphFormat":{"outlineLevel":"Level2","listFormat":{"listLevelNumber":1}},"characterFormat":{"fontFamily":"Arial"},"basedOn":"Heading 1","link":"Heading 2 Char","next":"Normal"},{"name":"Heading 2 Char","type":"Character","characterFormat":{"bold":true,"fontSize":10,"fontFamily":"Arial","boldBidi":true,"fontSizeBidi":14,"fontFamilyBidi":"Times New Roman"},"basedOn":"Default Paragraph Font"},{"name":"Heading 3","type":"Paragraph","paragraphFormat":{"textAlignment":"Justify","afterSpacing":0,"lineSpacing":1.100000023841858,"lineSpacingType":"Multiple","outlineLevel":"Level3","listFormat":{"listId":14,"listLevelNumber":2}},"characterFormat":{"fontColor":"#000000FF","boldBidi":true,"fontFamilyBidi":"Times New Roman"},"basedOn":"Normal","link":"Heading 3 Char","next":"Heading 3"},{"name":"Heading 3 Char","type":"Character","characterFormat":{"fontSize":10,"fontFamily":"Arial","fontColor":"#000000FF","boldBidi":true,"fontFamilyBidi":"Times New Roman"},"basedOn":"Default Paragraph Font"},{"name":"Heading 4","type":"Paragraph","paragraphFormat":{"textAlignment":"Justify","afterSpacing":0,"lineSpacing":1.100000023841858,"lineSpacingType":"Multiple","outlineLevel":"Level4","listFormat":{"listId":14,"listLevelNumber":3}},"characterFormat":{"boldBidi":true,"italicBidi":true,"fontFamilyBidi":"Times New Roman"},"basedOn":"Normal","link":"Heading 4 Char","next":"Normal"},{"name":"Heading 4 Char","type":"Character","characterFormat":{"fontSize":10,"fontFamily":"Arial","boldBidi":true,"italicBidi":true,"fontFamilyBidi":"Times New Roman"},"basedOn":"Default Paragraph Font"},{"name":"Heading 5","type":"Paragraph","paragraphFormat":{"textAlignment":"Justify","afterSpacing":0,"lineSpacing":1,"lineSpacingType":"Multiple","outlineLevel":"Level5","listFormat":{"listId":14,"listLevelNumber":4}},"characterFormat":{"fontSize":10,"fontFamily":"Arial","boldBidi":true,"fontSizeBidi":14,"fontFamilyBidi":"Times New Roman"},"link":"Heading 5 Char","next":"Normal"},{"name":"Heading 5 Char","type":"Character","characterFormat":{"fontSize":10,"fontFamily":"Arial","boldBidi":true,"fontSizeBidi":14,"fontFamilyBidi":"Times New Roman"},"basedOn":"Default Paragraph Font"},{"name":"Heading 6","type":"Paragraph","paragraphFormat":{"afterSpacing":0,"lineSpacing":1,"lineSpacingType":"Multiple","outlineLevel":"Level6","listFormat":{"listId":14,"listLevelNumber":5}},"characterFormat":{"fontSize":10,"fontFamily":"Arial","boldBidi":true,"fontSizeBidi":14,"fontFamilyBidi":"Times New Roman"},"link":"Heading 6 Char","next":"Normal"},{"name":"Heading 6 Char","type":"Character","characterFormat":{"fontSize":10,"fontFamily":"Arial","boldBidi":true,"fontSizeBidi":14,"fontFamilyBidi":"Times New Roman"},"basedOn":"Default Paragraph Font"},{"name":"RTZ Appendix Number","type":"Paragraph","paragraphFormat":{"textAlignment":"Center","beforeSpacing":6,"afterSpacing":0,"lineSpacing":2,"lineSpacingType":"Multiple","outlineLevel":"Level1","listFormat":{"listId":6}},"characterFormat":{"bold":true,"fontFamily":"Arial Bold","boldBidi":true,"fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"basedOn":"Normal","next":"RTZ Appendix Number"},{"name":"RTZ Appendix Title","type":"Paragraph","paragraphFormat":{"textAlignment":"Center","beforeSpacing":6,"afterSpacing":0,"lineSpacing":2,"lineSpacingType":"Multiple","listFormat":{}},"characterFormat":{"bold":true,"boldBidi":true,"fontSizeBidi":10,"fontFamilyBidi":"Arial"},"basedOn":"Normal","next":"RTZ Appendix Title"},{"name":"RTZ Body Text 1","type":"Paragraph","paragraphFormat":{"textAlignment":"Justify","beforeSpacing":6,"afterSpacing":6,"lineSpacing":1.100000023841858,"lineSpacingType":"Multiple","listFormat":{}},"characterFormat":{"fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"basedOn":"Normal","next":"RTZ Body Text 1"},{"name":"RTZ Body Text 2","type":"Paragraph","paragraphFormat":{"leftIndent":36,"beforeSpacing":0,"afterSpacing":0,"listFormat":{}},"characterFormat":{"fontFamilyBidi":"Arial"},"basedOn":"RTZ Body Text 1","next":"RTZ Body Text 2"},{"name":"RTZ Body Text 3","type":"Paragraph","paragraphFormat":{"leftIndent":72,"listFormat":{}},"characterFormat":{},"basedOn":"RTZ Body Text 2","next":"RTZ Body Text 3"},{"name":"RTZ Body Text 4","type":"Paragraph","paragraphFormat":{"leftIndent":108,"listFormat":{}},"characterFormat":{},"basedOn":"RTZ Body Text 3","next":"RTZ Body Text 4"},{"name":"RTZ Body Text 5","type":"Paragraph","paragraphFormat":{"leftIndent":144,"listFormat":{}},"characterFormat":{},"basedOn":"RTZ Body Text 4","next":"RTZ Body Text 5"},{"name":"RTZ Body Text 6","type":"Paragraph","paragraphFormat":{"leftIndent":180,"listFormat":{}},"characterFormat":{},"basedOn":"RTZ Body Text 5","next":"RTZ Body Text 6"},{"name":"RTZ Body Text Gen","type":"Paragraph","paragraphFormat":{"textAlignment":"Justify","beforeSpacing":6,"afterSpacing":6,"lineSpacing":1,"lineSpacingType":"Multiple","listFormat":{},"tabs":[{"position":56.70000076293945,"deletePosition":0,"tabJustification":"Left","tabLeader":"None"}]},"characterFormat":{"fontFamily":"Times New Roman","fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"basedOn":"Normal","link":"RTZ Body Text Gen Char","next":"RTZ Body Text Gen"},{"name":"RTZ Body Text Gen Char","type":"Character","characterFormat":{"fontFamily":"Times New Roman","fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"basedOn":"Default Paragraph Font"},{"name":"RTZ Document Title","type":"Paragraph","paragraphFormat":{"textAlignment":"Center","beforeSpacing":18,"afterSpacing":18,"lineSpacing":1.100000023841858,"lineSpacingType":"Multiple","listFormat":{}},"characterFormat":{"bold":true,"boldBidi":true,"fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"basedOn":"Normal","next":"RTZ Document Title"},{"name":"RTZ Heading 1","type":"Paragraph","paragraphFormat":{"afterSpacing":0,"lineSpacing":1.100000023841858,"lineSpacingType":"Multiple","outlineLevel":"Level1","listFormat":{"listId":9}},"characterFormat":{"bold":true,"fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"basedOn":"Normal","link":"RTZ Heading 1 Char","next":"Normal"},{"name":"RTZ Heading 1 Char","type":"Character","characterFormat":{"bold":true,"fontSize":10,"fontFamily":"Arial","fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"basedOn":"Default Paragraph Font"},{"name":"RTZ Heading 2","type":"Paragraph","paragraphFormat":{"textAlignment":"Justify","outlineLevel":"BodyText","listFormat":{"listLevelNumber":1}},"characterFormat":{"bold":false},"basedOn":"RTZ Heading 1","next":"RTZ Body Text 2"},{"name":"RTZ Heading 3","type":"Paragraph","paragraphFormat":{"listFormat":{"listLevelNumber":2}},"characterFormat":{},"basedOn":"RTZ Heading 2","next":"RTZ Heading 3"},{"name":"RTZ Heading 4","type":"Paragraph","paragraphFormat":{"listFormat":{"listLevelNumber":3}},"characterFormat":{},"basedOn":"RTZ Heading 3","next":"RTZ Heading 4"},{"name":"RTZ Heading 6","type":"Paragraph","paragraphFormat":{"textAlignment":"Justify","beforeSpacing":6,"afterSpacing":6,"lineSpacing":1.100000023841858,"lineSpacingType":"Multiple","listFormat":{"listId":9,"listLevelNumber":5}},"characterFormat":{"fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"basedOn":"Normal","link":"RTZ Heading 6 Char","next":"RTZ Heading 6"},{"name":"RTZ Heading 6 Char","type":"Character","characterFormat":{"fontSize":10,"fontFamily":"Arial","fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"basedOn":"Default Paragraph Font"},{"name":"RTZ Heading 5","type":"Paragraph","paragraphFormat":{"listFormat":{"listLevelNumber":4}},"characterFormat":{},"basedOn":"RTZ Heading 6","next":"RTZ Heading 5"},{"name":"RTZ Heading 7","type":"Paragraph","paragraphFormat":{"leftIndent":216,"firstLineIndent":-36,"textAlignment":"Justify","beforeSpacing":6,"afterSpacing":6,"lineSpacing":1.100000023841858,"lineSpacingType":"Multiple","listFormat":{},"tabs":[{"position":216,"deletePosition":0,"tabJustification":"List","tabLeader":"None"}]},"characterFormat":{"fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"basedOn":"Normal","next":"RTZ Heading 7"},{"name":"RTZ Notice - Party Names","type":"Paragraph","paragraphFormat":{"textAlignment":"Justify","beforeSpacing":24,"afterSpacing":5,"lineSpacing":1,"lineSpacingType":"Multiple","listFormat":{}},"characterFormat":{"bold":true,"boldBidi":true,"fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"basedOn":"Body Text 2","next":"RTZ Notice - Party Names"},{"name":"Body Text 2","type":"Paragraph","paragraphFormat":{"afterSpacing":6,"lineSpacing":2,"lineSpacingType":"Multiple","listFormat":{}},"characterFormat":{},"basedOn":"Normal","link":"Body Text 2 Char","next":"Body Text 2"},{"name":"Body Text 2 Char","type":"Character","characterFormat":{"fontFamily":"Arial"},"basedOn":"Default Paragraph Font"},{"name":"RTZ Party & Recital Headings","type":"Paragraph","paragraphFormat":{"leftIndent":36,"firstLineIndent":-36,"textAlignment":"Justify","beforeSpacing":6,"afterSpacing":6,"lineSpacing":1.100000023841858,"lineSpacingType":"Multiple","listFormat":{},"tabs":[{"position":56.70000076293945,"deletePosition":0,"tabJustification":"Left","tabLeader":"None"}]},"characterFormat":{"bold":true,"boldBidi":true,"fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"basedOn":"Normal","next":"RTZ Party & Recital Headings"},{"name":"RTZ Party Names","type":"Paragraph","paragraphFormat":{"textAlignment":"Justify","beforeSpacing":6,"afterSpacing":6,"lineSpacing":1.100000023841858,"lineSpacingType":"Multiple","listFormat":{"listId":1},"tabs":[{"position":0,"deletePosition":36,"tabJustification":"Left","tabLeader":"None"}]},"characterFormat":{"boldBidi":true,"fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"basedOn":"Normal","next":"Normal"},{"name":"RTZ Recitals","type":"Paragraph","paragraphFormat":{"firstLineIndent":-36,"textAlignment":"Justify","beforeSpacing":6,"afterSpacing":6,"lineSpacing":1.100000023841858,"lineSpacingType":"Multiple","listFormat":{"listId":0}},"characterFormat":{"fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"basedOn":"Normal","next":"RTZ Recitals"},{"name":"RTZ Schedule1 Number & Title","type":"Paragraph","paragraphFormat":{"leftIndent":0,"firstLineIndent":0,"textAlignment":"Center","beforeSpacing":6,"afterSpacing":6,"lineSpacing":2,"lineSpacingType":"Multiple","outlineLevel":"Level1","listFormat":{"listId":5}},"characterFormat":{"bold":true,"fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"basedOn":"Normal","next":"Normal"},{"name":"RTZ Schedule2 Part Number & Title","type":"Paragraph","paragraphFormat":{"outlineLevel":"Level2","listFormat":{"listLevelNumber":1}},"characterFormat":{"fontFamily":"Arial Bold","underline":"Single"},"basedOn":"RTZ Schedule1 Number & Title","next":"Normal"},{"name":"RTZ Schedule3 SubHeading 1","type":"Paragraph","paragraphFormat":{"textAlignment":"Justify","beforeSpacing":6,"afterSpacing":6,"lineSpacing":1.100000023841858,"lineSpacingType":"Multiple","outlineLevel":"Level2","listFormat":{"listId":5,"listLevelNumber":2}},"characterFormat":{"bold":true,"fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"basedOn":"Normal","link":"RTZ Schedule3 SubHeading 1 Char","next":"Normal"},{"name":"RTZ Schedule3 SubHeading 1 Char","type":"Character","characterFormat":{"bold":true,"fontSize":10,"fontFamily":"Arial","fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"basedOn":"Default Paragraph Font"},{"name":"RTZ Schedule4 SubHeading 2","type":"Paragraph","paragraphFormat":{"listFormat":{"listLevelNumber":3}},"characterFormat":{},"basedOn":"RTZ Schedule3 SubHeading 1","link":"RTZ Schedule4 SubHeading 2 Char","next":"Body Text 2"},{"name":"RTZ Schedule4 SubHeading 2 Char","type":"Character","characterFormat":{"bold":true,"fontSize":10,"fontFamily":"Arial","fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"basedOn":"RTZ Schedule3 SubHeading 1 Char"},{"name":"RTZ Schedule5 SubHeading 3","type":"Paragraph","paragraphFormat":{"outlineLevel":"Level3","listFormat":{"listLevelNumber":4}},"characterFormat":{"bold":false},"basedOn":"RTZ Schedule4 SubHeading 2","link":"RTZ Schedule5 SubHeading 3 Char","next":"RTZ Schedule5 SubHeading 3"},{"name":"RTZ Schedule5 SubHeading 3 Char","type":"Character","characterFormat":{"fontSize":10,"fontFamily":"Arial","fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"basedOn":"Default Paragraph Font"},{"name":"RTZ Schedule6 SubHeading 4","type":"Paragraph","paragraphFormat":{"beforeSpacing":0,"afterSpacing":0,"outlineLevel":"Level4","listFormat":{"listLevelNumber":5}},"characterFormat":{},"basedOn":"RTZ Schedule5 SubHeading 3","next":"RTZ Schedule6 SubHeading 4"},{"name":"RTZ Schedule7 SubHeading 5","type":"Paragraph","paragraphFormat":{"outlineLevel":"Level5","listFormat":{"listLevelNumber":6}},"characterFormat":{},"basedOn":"RTZ Schedule5 SubHeading 3","link":"RTZ Schedule7 SubHeading 5 Char","next":"RTZ Schedule7 SubHeading 5"},{"name":"RTZ Schedule7 SubHeading 5 Char","type":"Character","characterFormat":{"fontSize":10,"fontFamily":"Arial","fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"basedOn":"RTZ Schedule5 SubHeading 3 Char"},{"name":"RTZ Schedule8 SubHeading 6","type":"Paragraph","paragraphFormat":{"listFormat":{"listLevelNumber":7}},"characterFormat":{},"basedOn":"RTZ Schedule7 SubHeading 5","next":"RTZ Schedule8 SubHeading 6"},{"name":"Header","type":"Paragraph","paragraphFormat":{"afterSpacing":0,"lineSpacing":1.100000023841858,"lineSpacingType":"Multiple","listFormat":{},"tabs":[{"position":216,"deletePosition":0,"tabJustification":"Center","tabLeader":"None"},{"position":432,"deletePosition":0,"tabJustification":"Right","tabLeader":"None"}]},"characterFormat":{"fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"basedOn":"Normal","link":"Header Char","next":"Header"},{"name":"Header Char","type":"Character","characterFormat":{"fontSize":10,"fontFamily":"Arial","fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"basedOn":"Default Paragraph Font"},{"name":"Hyperlink","type":"Character","characterFormat":{"underline":"Single","fontColor":"#0000FFFF"},"basedOn":"Default Paragraph Font"},{"name":"Unresolved Mention","type":"Character","characterFormat":{"fontColor":"#605E5CFF"},"basedOn":"Default Paragraph Font"},{"name":"TOC 1","type":"Paragraph","paragraphFormat":{"textAlignment":"Justify","afterSpacing":5,"lineSpacing":1.100000023841858,"lineSpacingType":"Multiple","listFormat":{},"tabs":[{"position":22.5,"deletePosition":0,"tabJustification":"Left","tabLeader":"None"},{"position":450.79998779296875,"deletePosition":0,"tabJustification":"Right","tabLeader":"Dot"}]},"characterFormat":{"fontFamilyBidi":"Times New Roman"},"basedOn":"Normal","next":"Normal"},{"name":"List Bullet Table","type":"Paragraph","paragraphFormat":{"afterSpacing":6,"lineSpacing":1,"lineSpacingType":"Multiple","listFormat":{"listId":3}},"characterFormat":{"fontSize":9,"fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"basedOn":"Normal","next":"List Bullet Table"},{"name":"List Paragraph","type":"Paragraph","paragraphFormat":{"leftIndent":36,"listFormat":{},"contextualSpacing":true},"characterFormat":{},"basedOn":"Normal","next":"List Paragraph"},{"name":"annotation reference","type":"Character","characterFormat":{"fontSize":8,"fontSizeBidi":8},"basedOn":"Default Paragraph Font"},{"name":"annotation text","type":"Paragraph","paragraphFormat":{"afterSpacing":0,"lineSpacing":1.100000023841858,"lineSpacingType":"Multiple","listFormat":{}},"characterFormat":{"fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"basedOn":"Normal","link":"Comment Text Char","next":"annotation text"},{"name":"Comment Text Char","type":"Character","characterFormat":{"fontSize":10,"fontFamily":"Arial","fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"basedOn":"Default Paragraph Font"},{"name":"Balloon Text","type":"Paragraph","paragraphFormat":{"afterSpacing":0,"lineSpacing":1,"lineSpacingType":"Multiple","listFormat":{}},"characterFormat":{"fontSize":9,"fontFamily":"Segoe UI","fontSizeBidi":9,"fontFamilyBidi":"Segoe UI"},"basedOn":"Normal","link":"Balloon Text Char","next":"Balloon Text"},{"name":"Balloon Text Char","type":"Character","characterFormat":{"fontSize":9,"fontFamily":"Segoe UI","fontSizeBidi":9,"fontFamilyBidi":"Segoe UI"},"basedOn":"Default Paragraph Font"},{"name":"TOC 9","type":"Paragraph","paragraphFormat":{"leftIndent":88,"afterSpacing":5,"listFormat":{}},"characterFormat":{},"basedOn":"Normal","next":"Normal"},{"name":"Footer","type":"Paragraph","paragraphFormat":{"afterSpacing":0,"lineSpacing":1,"lineSpacingType":"Multiple","listFormat":{},"tabs":[{"position":225.64999389648438,"deletePosition":0,"tabJustification":"Center","tabLeader":"None"},{"position":451.29998779296875,"deletePosition":0,"tabJustification":"Right","tabLeader":"None"}]},"characterFormat":{},"basedOn":"Normal","link":"Footer Char","next":"Footer"},{"name":"Footer Char","type":"Character","characterFormat":{"fontFamily":"Arial"},"basedOn":"Default Paragraph Font"},{"name":"TOC Heading","type":"Paragraph","paragraphFormat":{"textAlignment":"Left","beforeSpacing":12,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"BodyText","listFormat":{"listId":-1,"listLevelNumber":0}},"characterFormat":{"bold":false,"fontSize":16,"fontFamily":"Cambria","fontColor":"#365F91FF","boldBidi":false,"fontSizeBidi":16,"fontFamilyBidi":"Times New Roman"},"basedOn":"Heading 1","next":"Normal"},{"name":"TOC 2","type":"Paragraph","paragraphFormat":{"leftIndent":11,"afterSpacing":5,"listFormat":{}},"characterFormat":{},"basedOn":"Normal","next":"Normal"},{"name":"TOC 3","type":"Paragraph","paragraphFormat":{"leftIndent":22,"afterSpacing":5,"listFormat":{}},"characterFormat":{},"basedOn":"Normal","next":"Normal"},{"name":"TOC 5","type":"Paragraph","paragraphFormat":{"leftIndent":44,"afterSpacing":5,"listFormat":{}},"characterFormat":{},"basedOn":"Normal","next":"Normal"}],"lists":[{"abstractListId":0,"levelOverrides":[],"listId":0},{"abstractListId":1,"levelOverrides":[],"listId":1},{"abstractListId":3,"levelOverrides":[],"listId":3},{"abstractListId":5,"levelOverrides":[],"listId":5},{"abstractListId":6,"levelOverrides":[],"listId":6},{"abstractListId":9,"levelOverrides":[],"listId":9},{"abstractListId":13,"levelOverrides":[{"levelNumber":0,"overrideListLevel":{"characterFormat":{},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":0,"startAt":1}},{"levelNumber":1,"overrideListLevel":{"characterFormat":{"bold":true,"italic":false,"fontColor":"#00000000"},"paragraphFormat":{"leftIndent":64.3499984741211,"firstLineIndent":-36,"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"%1.%2","restartLevel":1,"startAt":1}},{"levelNumber":2,"overrideListLevel":{"characterFormat":{},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":2,"startAt":1}},{"levelNumber":3,"overrideListLevel":{"characterFormat":{},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":3,"startAt":1}},{"levelNumber":4,"overrideListLevel":{"characterFormat":{},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":4,"startAt":1}},{"levelNumber":5,"overrideListLevel":{"characterFormat":{},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":5,"startAt":1}},{"levelNumber":6,"overrideListLevel":{"characterFormat":{},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":6,"startAt":1}}],"listId":14},{"abstractListId":13,"levelOverrides":[{"levelNumber":0,"overrideListLevel":{"characterFormat":{"bold":false,"italic":false,"strikethrough":"None","baselineAlignment":"Normal","boldBidi":false,"italicBidi":false},"paragraphFormat":{"leftIndent":36,"firstLineIndent":-36,"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"%1.","restartLevel":0,"startAt":1}},{"levelNumber":1,"overrideListLevel":{"characterFormat":{"bold":false,"italic":false,"strikethrough":"None","baselineAlignment":"Normal","boldBidi":false,"italicBidi":false},"paragraphFormat":{"leftIndent":36,"firstLineIndent":-36,"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"%1.%2","restartLevel":1,"startAt":1}}],"listId":15}],"abstractLists":[{"abstractListId":0,"levels":[{"characterFormat":{"bold":true,"italic":false,"fontSize":10,"fontFamily":"Arial Bold","strikethrough":"None","baselineAlignment":"Normal","boldBidi":false,"italicBidi":false,"fontFamilyBidi":"Times New Roman"},"paragraphFormat":{"leftIndent":36,"firstLineIndent":-18,"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"UpLetter","numberFormat":"(%1)","restartLevel":0,"startAt":1},{"characterFormat":{},"paragraphFormat":{"leftIndent":72,"firstLineIndent":-18,"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"LowLetter","numberFormat":"%2.","restartLevel":1,"startAt":1},{"characterFormat":{},"paragraphFormat":{"leftIndent":108,"firstLineIndent":-9,"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"LowRoman","numberFormat":"%3.","restartLevel":2,"startAt":1},{"characterFormat":{},"paragraphFormat":{"leftIndent":144,"firstLineIndent":-18,"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"%4.","restartLevel":3,"startAt":1},{"characterFormat":{},"paragraphFormat":{"leftIndent":180,"firstLineIndent":-18,"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"LowLetter","numberFormat":"%5.","restartLevel":4,"startAt":1},{"characterFormat":{},"paragraphFormat":{"leftIndent":216,"firstLineIndent":-9,"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"LowRoman","numberFormat":"%6.","restartLevel":5,"startAt":1},{"characterFormat":{},"paragraphFormat":{"leftIndent":252,"firstLineIndent":-18,"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"%7.","restartLevel":6,"startAt":1},{"characterFormat":{},"paragraphFormat":{"leftIndent":288,"firstLineIndent":-18,"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"LowLetter","numberFormat":"%8.","restartLevel":7,"startAt":1},{"characterFormat":{},"paragraphFormat":{"leftIndent":324,"firstLineIndent":-9,"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"LowRoman","numberFormat":"%9.","restartLevel":8,"startAt":1}]},{"abstractListId":1,"levels":[{"characterFormat":{"bold":true,"italic":false,"fontSize":10,"fontFamily":"Arial Bold"},"paragraphFormat":{"leftIndent":36,"firstLineIndent":-36,"listFormat":{},"tabs":[{"position":36,"deletePosition":0,"tabJustification":"List","tabLeader":"None"}]},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"(%1)","restartLevel":0,"startAt":1},{"characterFormat":{},"paragraphFormat":{"leftIndent":72,"firstLineIndent":-18,"listFormat":{},"tabs":[{"position":72,"deletePosition":0,"tabJustification":"List","tabLeader":"None"}]},"followCharacter":"Tab","listLevelPattern":"LowLetter","numberFormat":"%2.","restartLevel":1,"startAt":1},{"characterFormat":{},"paragraphFormat":{"leftIndent":108,"firstLineIndent":-9,"listFormat":{},"tabs":[{"position":108,"deletePosition":0,"tabJustification":"List","tabLeader":"None"}]},"followCharacter":"Tab","listLevelPattern":"LowRoman","numberFormat":"%3.","restartLevel":2,"startAt":1},{"characterFormat":{},"paragraphFormat":{"leftIndent":144,"firstLineIndent":-18,"listFormat":{},"tabs":[{"position":144,"deletePosition":0,"tabJustification":"List","tabLeader":"None"}]},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"%4.","restartLevel":3,"startAt":1},{"characterFormat":{},"paragraphFormat":{"leftIndent":180,"firstLineIndent":-18,"listFormat":{},"tabs":[{"position":180,"deletePosition":0,"tabJustification":"List","tabLeader":"None"}]},"followCharacter":"Tab","listLevelPattern":"LowLetter","numberFormat":"%5.","restartLevel":4,"startAt":1},{"characterFormat":{},"paragraphFormat":{"leftIndent":216,"firstLineIndent":-9,"listFormat":{},"tabs":[{"position":216,"deletePosition":0,"tabJustification":"List","tabLeader":"None"}]},"followCharacter":"Tab","listLevelPattern":"LowRoman","numberFormat":"%6.","restartLevel":5,"startAt":1},{"characterFormat":{},"paragraphFormat":{"leftIndent":252,"firstLineIndent":-18,"listFormat":{},"tabs":[{"position":252,"deletePosition":0,"tabJustification":"List","tabLeader":"None"}]},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"%7.","restartLevel":6,"startAt":1},{"characterFormat":{},"paragraphFormat":{"leftIndent":288,"firstLineIndent":-18,"listFormat":{},"tabs":[{"position":288,"deletePosition":0,"tabJustification":"List","tabLeader":"None"}]},"followCharacter":"Tab","listLevelPattern":"LowLetter","numberFormat":"%8.","restartLevel":7,"startAt":1},{"characterFormat":{},"paragraphFormat":{"leftIndent":324,"firstLineIndent":-9,"listFormat":{},"tabs":[{"position":324,"deletePosition":0,"tabJustification":"List","tabLeader":"None"}]},"followCharacter":"Tab","listLevelPattern":"LowRoman","numberFormat":"%9.","restartLevel":8,"startAt":1}]},{"abstractListId":3,"levels":[{"characterFormat":{"bold":false,"italic":false,"fontSize":8,"fontFamily":"Symbol","fontSizeBidi":8},"paragraphFormat":{"leftIndent":14.199999809265137,"firstLineIndent":-14.199999809265137,"listFormat":{},"tabs":[{"position":14.199999809265137,"deletePosition":0,"tabJustification":"List","tabLeader":"None"}]},"followCharacter":"Tab","listLevelPattern":"Bullet","numberFormat":"","restartLevel":0,"startAt":0},{"characterFormat":{},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":1,"startAt":0},{"characterFormat":{},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":2,"startAt":0},{"characterFormat":{},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":3,"startAt":0},{"characterFormat":{},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":4,"startAt":0},{"characterFormat":{},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":5,"startAt":0},{"characterFormat":{},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":6,"startAt":0},{"characterFormat":{},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":7,"startAt":0},{"characterFormat":{},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":8,"startAt":0}]},{"abstractListId":5,"levels":[{"characterFormat":{"bold":true,"italic":false,"fontSize":10,"fontFamily":"Arial Bold"},"paragraphFormat":{"leftIndent":36,"firstLineIndent":-36,"listFormat":{}},"followCharacter":"None","listLevelPattern":"Arabic","numberFormat":"Schedule %1","restartLevel":0,"startAt":1},{"characterFormat":{"bold":false,"italic":false,"fontSize":10,"fontFamily":"Arial"},"paragraphFormat":{"leftIndent":36,"firstLineIndent":-36,"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"UpLetter","numberFormat":"Part %2","restartLevel":1,"startAt":1},{"characterFormat":{"bold":false,"italic":false,"fontSize":10,"fontFamily":"Arial"},"paragraphFormat":{"leftIndent":36,"firstLineIndent":-36,"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"%3.","restartLevel":2,"startAt":1},{"characterFormat":{"bold":false,"italic":false,"fontSize":10,"fontFamily":"Arial"},"paragraphFormat":{"leftIndent":36,"firstLineIndent":-36,"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"%3.%4","restartLevel":3,"startAt":1},{"characterFormat":{},"paragraphFormat":{"leftIndent":72,"firstLineIndent":-36,"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"LowLetter","numberFormat":"(%5)","restartLevel":4,"startAt":1},{"characterFormat":{"bold":false,"italic":false,"fontSize":10,"fontFamily":"Arial"},"paragraphFormat":{"leftIndent":108,"firstLineIndent":-36,"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"LowRoman","numberFormat":"(%6)","restartLevel":5,"startAt":1},{"characterFormat":{},"paragraphFormat":{"leftIndent":0,"firstLineIndent":0,"listFormat":{}},"followCharacter":"None","listLevelPattern":"None","numberFormat":"","restartLevel":6,"startAt":1},{"characterFormat":{},"paragraphFormat":{"leftIndent":0,"firstLineIndent":0,"listFormat":{}},"followCharacter":"None","listLevelPattern":"None","numberFormat":"","restartLevel":7,"startAt":1},{"characterFormat":{},"paragraphFormat":{"leftIndent":0,"firstLineIndent":0,"listFormat":{}},"followCharacter":"None","listLevelPattern":"None","numberFormat":"","restartLevel":8,"startAt":1}]},{"abstractListId":6,"levels":[{"characterFormat":{"bold":true,"italic":false,"fontSize":10,"fontFamily":"Arial Bold","strikethrough":"None","baselineAlignment":"Normal","fontSizeBidi":11,"fontFamilyBidi":"Times New Roman"},"paragraphFormat":{"leftIndent":0,"firstLineIndent":0,"listFormat":{}},"followCharacter":"None","listLevelPattern":"UpLetter","numberFormat":"Appendix %1","restartLevel":0,"startAt":1},{"characterFormat":{"bold":false,"italic":false,"fontSize":10,"fontFamily":"Arial","strikethrough":"None","baselineAlignment":"Normal","fontSizeBidi":11,"fontFamilyBidi":"Times New Roman"},"paragraphFormat":{"leftIndent":36,"firstLineIndent":-36,"listFormat":{},"tabs":[{"position":36,"deletePosition":0,"tabJustification":"List","tabLeader":"None"}]},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"%2.","restartLevel":1,"startAt":1},{"characterFormat":{"bold":false,"italic":false,"fontSize":10,"fontFamily":"Arial","fontSizeBidi":11,"fontFamilyBidi":"Times New Roman"},"paragraphFormat":{"leftIndent":72,"firstLineIndent":-36,"listFormat":{},"tabs":[{"position":36,"deletePosition":0,"tabJustification":"List","tabLeader":"None"}]},"followCharacter":"Tab","listLevelPattern":"LowLetter","numberFormat":"(%3)","restartLevel":2,"startAt":1},{"characterFormat":{"bold":false,"italic":false,"fontSize":11,"fontFamily":"Times New Roman"},"paragraphFormat":{"leftIndent":108,"firstLineIndent":-36,"listFormat":{},"tabs":[{"position":72,"deletePosition":0,"tabJustification":"List","tabLeader":"None"}]},"followCharacter":"Tab","listLevelPattern":"None","numberFormat":"","restartLevel":3,"startAt":1},{"characterFormat":{},"paragraphFormat":{"leftIndent":144,"firstLineIndent":-36,"listFormat":{},"tabs":[{"position":108,"deletePosition":0,"tabJustification":"List","tabLeader":"None"}]},"followCharacter":"Tab","listLevelPattern":"None","numberFormat":"","restartLevel":4,"startAt":1},{"characterFormat":{},"paragraphFormat":{"leftIndent":180,"firstLineIndent":-36,"listFormat":{},"tabs":[{"position":144,"deletePosition":0,"tabJustification":"List","tabLeader":"None"}]},"followCharacter":"Tab","listLevelPattern":"None","numberFormat":"","restartLevel":5,"startAt":1},{"characterFormat":{},"paragraphFormat":{"leftIndent":216,"firstLineIndent":-36,"listFormat":{},"tabs":[{"position":180,"deletePosition":0,"tabJustification":"List","tabLeader":"None"}]},"followCharacter":"Tab","listLevelPattern":"None","numberFormat":"","restartLevel":6,"startAt":1},{"characterFormat":{},"paragraphFormat":{"leftIndent":252,"firstLineIndent":-36,"listFormat":{},"tabs":[{"position":216,"deletePosition":0,"tabJustification":"List","tabLeader":"None"}]},"followCharacter":"Tab","listLevelPattern":"None","numberFormat":"","restartLevel":7,"startAt":1},{"characterFormat":{},"paragraphFormat":{"leftIndent":288,"firstLineIndent":-36,"listFormat":{},"tabs":[{"position":252,"deletePosition":0,"tabJustification":"List","tabLeader":"None"}]},"followCharacter":"Tab","listLevelPattern":"None","numberFormat":"","restartLevel":8,"startAt":1}]},{"abstractListId":9,"levels":[{"characterFormat":{"bold":true,"italic":false,"strikethrough":"None","baselineAlignment":"Normal","boldBidi":false,"italicBidi":false},"paragraphFormat":{"leftIndent":36,"firstLineIndent":-36,"listFormat":{},"tabs":[{"position":36,"deletePosition":0,"tabJustification":"List","tabLeader":"None"}]},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"%1.","restartLevel":0,"startAt":1},{"characterFormat":{"bold":false,"italic":false,"strikethrough":"None","baselineAlignment":"Normal","boldBidi":false,"italicBidi":false},"paragraphFormat":{"leftIndent":36,"firstLineIndent":-36,"listFormat":{},"tabs":[{"position":36,"deletePosition":0,"tabJustification":"List","tabLeader":"None"}]},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"%1.%2","restartLevel":1,"startAt":1},{"characterFormat":{"bold":false,"italic":false,"strikethrough":"None","baselineAlignment":"Normal","boldBidi":false,"italicBidi":false},"paragraphFormat":{"leftIndent":72,"firstLineIndent":-36,"listFormat":{},"tabs":[{"position":72,"deletePosition":0,"tabJustification":"List","tabLeader":"None"}]},"followCharacter":"Tab","listLevelPattern":"LowLetter","numberFormat":"(%3)","restartLevel":2,"startAt":1},{"characterFormat":{"bold":false,"italic":false,"fontSize":10,"fontFamily":"Arial"},"paragraphFormat":{"leftIndent":108,"firstLineIndent":-36,"listFormat":{},"tabs":[{"position":108,"deletePosition":0,"tabJustification":"List","tabLeader":"None"}]},"followCharacter":"Tab","listLevelPattern":"LowRoman","numberFormat":"(%4)","restartLevel":3,"startAt":1},{"characterFormat":{"bold":false,"italic":false,"fontSize":10,"fontFamily":"Arial"},"paragraphFormat":{"leftIndent":144,"firstLineIndent":-36,"listFormat":{},"tabs":[{"position":144,"deletePosition":0,"tabJustification":"List","tabLeader":"None"}]},"followCharacter":"Tab","listLevelPattern":"UpLetter","numberFormat":"(%5)","restartLevel":4,"startAt":1},{"characterFormat":{"bold":false,"italic":false,"fontSize":10,"fontFamily":"Arial"},"paragraphFormat":{"leftIndent":180,"firstLineIndent":-36,"listFormat":{},"tabs":[{"position":180,"deletePosition":0,"tabJustification":"List","tabLeader":"None"}]},"followCharacter":"Tab","listLevelPattern":"UpRoman","numberFormat":"(%6)","restartLevel":5,"startAt":1},{"characterFormat":{},"paragraphFormat":{"leftIndent":216,"firstLineIndent":-36,"listFormat":{},"tabs":[{"position":216,"deletePosition":0,"tabJustification":"List","tabLeader":"None"}]},"followCharacter":"Tab","listLevelPattern":"None","numberFormat":"","restartLevel":6,"startAt":1},{"characterFormat":{},"paragraphFormat":{"leftIndent":252,"firstLineIndent":-36,"listFormat":{},"tabs":[{"position":216,"deletePosition":0,"tabJustification":"List","tabLeader":"None"}]},"followCharacter":"Tab","listLevelPattern":"None","numberFormat":"","restartLevel":7,"startAt":1},{"characterFormat":{},"paragraphFormat":{"leftIndent":288,"firstLineIndent":-36,"listFormat":{},"tabs":[{"position":252,"deletePosition":0,"tabJustification":"List","tabLeader":"None"}]},"followCharacter":"Tab","listLevelPattern":"None","numberFormat":"","restartLevel":8,"startAt":1}]},{"abstractListId":13,"levels":[{"characterFormat":{"bold":false,"italic":false,"strikethrough":"None","baselineAlignment":"Normal","boldBidi":false,"italicBidi":false,"fontFamilyBidi":"Times New Roman"},"paragraphFormat":{"leftIndent":36,"firstLineIndent":-36,"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"%1.","restartLevel":0,"startAt":1},{"characterFormat":{"bold":true,"fontColor":"#00000000"},"paragraphFormat":{"leftIndent":36,"firstLineIndent":-36,"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"%1.%2","restartLevel":1,"startAt":1},{"characterFormat":{},"paragraphFormat":{"leftIndent":72,"firstLineIndent":-36,"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"LowLetter","numberFormat":"(%3)","restartLevel":2,"startAt":1},{"characterFormat":{},"paragraphFormat":{"leftIndent":108,"firstLineIndent":-36,"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"LowRoman","numberFormat":"(%4)","restartLevel":3,"startAt":1},{"characterFormat":{},"paragraphFormat":{"leftIndent":108,"firstLineIndent":-36,"listFormat":{},"tabs":[{"position":108,"deletePosition":0,"tabJustification":"List","tabLeader":"None"}]},"followCharacter":"Tab","listLevelPattern":"UpLetter","numberFormat":"(%5)","restartLevel":4,"startAt":1},{"characterFormat":{},"paragraphFormat":{"leftIndent":180,"firstLineIndent":-36,"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"UpRoman","numberFormat":"(%6)","restartLevel":5,"startAt":1},{"characterFormat":{},"paragraphFormat":{"leftIndent":90,"firstLineIndent":-90,"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"%1.%2.%3.%4.%5.%6.%7","restartLevel":6,"startAt":1},{"characterFormat":{},"paragraphFormat":{"leftIndent":90,"firstLineIndent":-90,"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"%1.%2.%3.%4.%5.%6.%7.%8","restartLevel":7,"startAt":1},{"characterFormat":{},"paragraphFormat":{"leftIndent":108,"firstLineIndent":-108,"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"%1.%2.%3.%4.%5.%6.%7.%8.%9","restartLevel":8,"startAt":1}]}],"comments":[]}';



describe('Sfdt export level overrides', () => {
    let editor: DocumentEditor;
    let viewer: LayoutViewer;
    let exportData: any;
    beforeAll((): void => {
        let ele: HTMLElement = createElement('div', { id: 'container' });
        document.body.appendChild(ele);

        editor = new DocumentEditor({ isReadOnly: false });
        editor.enableAllModules();
        (editor.documentHelper as any).containerCanvasIn = TestHelper.containerCanvas;
        (editor.documentHelper as any).selectionCanvasIn = TestHelper.selectionCanvas;
        (editor.documentHelper.render as any).pageCanvasIn = TestHelper.pageCanvas;
        (editor.documentHelper.render as any).selectionCanvasIn = TestHelper.pageSelectionCanvas;
        editor.appendTo('#container');
        viewer = editor.viewer as PageLayoutViewer;
    });
    afterAll((done): void => {
        viewer.destroy();
        viewer = undefined;
        editor.destroy();
        document.body.removeChild(document.getElementById('container'));
        editor = undefined;
        document.body.innerHTML = '';
        setTimeout(function () {
            done();
        }, 1000);
    });
    it('document validation', () => {
        console.log('document validation');
        editor.open(levelOverrides);
        expect(() => { editor.save('levelOverrides', 'Sfdt') }).not.toThrowError();
    });
});

describe('FormField Validation', () => {
    let editor: DocumentEditor = undefined;
    let documentHelper: DocumentHelper;
    beforeAll(() => {
        let ele: HTMLElement = createElement('div', { id: 'container' });
        document.body.appendChild(ele);
        DocumentEditor.Inject(Editor, Selection, SfdtExport);
        editor = new DocumentEditor({ enableSfdtExport: true, enableEditor: true, enableSelection: true, isReadOnly: false });
        documentHelper = editor.documentHelper;
        (editor.documentHelper as any).containerCanvasIn = TestHelper.containerCanvas;
        (editor.documentHelper as any).selectionCanvasIn = TestHelper.selectionCanvas;
        (editor.documentHelper.render as any).pageCanvasIn = TestHelper.pageCanvas;
        (editor.documentHelper.render as any).selectionCanvasIn = TestHelper.pageSelectionCanvas;
        editor.appendTo('#container');
    });
    afterAll((done) => {
        document.body.removeChild(document.getElementById('container'));
        editor.destroy();
        editor = undefined;
        documentHelper = undefined;
        document.body.innerHTML = '';
        setTimeout(function () {
            done();
        }, 1000);
    });

    // it('FormField document validation', () => {
    //     console.log('FormField document validation');
    //     let formfielddoc: string = '{"sections":[{"blocks":[{"paragraphFormat":{"styleName":"Normal"},"inlines":[{"hasFieldEnd":true,"formFieldData":{"name":"Text1","enabled":true,"helpText":"","statusText":"","textInput":{"type":"Text","maxLength":0,"defaultValue":"REGULARTEXT","format":""}},"fieldType":0},{"name":"Text1","bookmarkType":0},{"text":" FORMTEXT "},{"fieldType":2},{"text":"REGULARTEXT"},{"fieldType":1},{"name":"Text1","bookmarkType":1}]},{"paragraphFormat":{"styleName":"Normal"},"inlines":[]},{"paragraphFormat":{"styleName":"Normal"},"inlines":[{"hasFieldEnd":true,"formFieldData":{"name":"Text2","enabled":true,"helpText":"","statusText":"","textInput":{"type":"Number","maxLength":0,"defaultValue":"500,000","format":"#,##0"}},"fieldType":0},{"name":"Text2","bookmarkType":0},{"text":" FORMTEXT "},{"fieldType":2},{"text":"500,000"},{"fieldType":1},{"name":"Text2","bookmarkType":1}]},{"paragraphFormat":{"styleName":"Normal"},"inlines":[]},{"paragraphFormat":{"styleName":"Normal"},"inlines":[{"hasFieldEnd":true,"formFieldData":{"name":"Text3","enabled":true,"helpText":"","statusText":"","textInput":{"type":"Date","maxLength":0,"defaultValue":"1/1/2020","format":"M/d/yyyy"}},"fieldType":0},{"name":"Text3","bookmarkType":0},{"text":" FORMTEXT "},{"fieldType":2},{"text":"1/1/2020"},{"fieldType":1},{"name":"_GoBack","bookmarkType":0},{"name":"Text3","bookmarkType":1},{"name":"_GoBack","bookmarkType":1}]}],"headersFooters":{},"sectionFormat":{"headerDistance":36.0,"footerDistance":36.0,"pageWidth":612.0,"pageHeight":792.0,"leftMargin":72.0,"rightMargin":72.0,"topMargin":72.0,"bottomMargin":72.0,"differentFirstPage":false,"differentOddAndEvenPages":false,"bidi":false,"restartPageNumbering":false,"pageStartingNumber":0}}],"characterFormat":{"fontSize":11.0,"fontFamily":"Calibri","fontSizeBidi":11.0,"fontFamilyBidi":"Arial"},"paragraphFormat":{"afterSpacing":8.0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple"},"background":{"color":"#FFFFFFFF"},"styles":[{"type":"Paragraph","name":"Normal","next":"Normal"},{"type":"Character","name":"Default Paragraph Font"},{"type":"Character","name":"Placeholder Text","basedOn":"Default Paragraph Font","characterFormat":{"fontColor":"#808080FF"}}],"defaultTabWidth":36.0,"formatting":false,"protectionType":"NoProtection","enforcement":false}';
    //     let expectdoc: string = '{"sections":[{"sectionFormat":{"pageWidth":612,"pageHeight":792,"leftMargin":72,"rightMargin":72,"topMargin":72,"bottomMargin":72,"differentFirstPage":false,"differentOddAndEvenPages":false,"headerDistance":36,"footerDistance":36,"bidi":false},"blocks":[{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[{"characterFormat":{},"fieldType":0,"hasFieldEnd":true,"formFieldData":{"name":"Text1","enabled":true,"helpText":"","statusText":"","textInput":{"type":"Text","maxLength":0,"defaultValue":"REGULARTEXT","format":""}}},{"characterFormat":{},"bookmarkType":0,"name":"Text1"},{"characterFormat":{},"text":" FORMTEXT "},{"characterFormat":{},"fieldType":2},{"characterFormat":{},"text":"REGULARTEXT"},{"characterFormat":{},"fieldType":1},{"characterFormat":{},"bookmarkType":1,"name":"Text1"}]},{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[]},{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[{"characterFormat":{},"fieldType":0,"hasFieldEnd":true,"formFieldData":{"name":"Text2","enabled":true,"helpText":"","statusText":"","textInput":{"type":"Number","maxLength":0,"defaultValue":"500,000","format":"#,##0"}}},{"characterFormat":{},"bookmarkType":0,"name":"Text2"},{"characterFormat":{},"text":" FORMTEXT "},{"characterFormat":{},"fieldType":2},{"characterFormat":{},"text":"500,000"},{"characterFormat":{},"fieldType":1},{"characterFormat":{},"bookmarkType":1,"name":"Text2"}]},{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[]},{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[{"characterFormat":{},"fieldType":0,"hasFieldEnd":true,"formFieldData":{"name":"Text3","enabled":true,"helpText":"","statusText":"","textInput":{"type":"Date","maxLength":0,"defaultValue":"1/1/2020","format":"M/d/yyyy"}}},{"characterFormat":{},"bookmarkType":0,"name":"Text3"},{"characterFormat":{},"text":" FORMTEXT "},{"characterFormat":{},"fieldType":2},{"characterFormat":{},"text":"1/1/2020"},{"characterFormat":{},"fieldType":1},{"characterFormat":{},"bookmarkType":0,"name":"_GoBack"},{"characterFormat":{},"bookmarkType":1,"name":"Text3"},{"characterFormat":{},"bookmarkType":1,"name":"_GoBack"}]}],"headersFooters":{}}],"characterFormat":{"bold":false,"italic":false,"fontSize":11,"fontFamily":"Calibri","underline":"None","strikethrough":"None","baselineAlignment":"Normal","highlightColor":"NoColor","fontColor":"empty","boldBidi":false,"italicBidi":false,"fontSizeBidi":11,"fontFamilyBidi":"Calibri","allCaps":false},"paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":0,"afterSpacing":8,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","listFormat":{},"bidi":false},"defaultTabWidth":36,"trackChanges":false,"enforcement":false,"hashValue":"","saltValue":"","formatting":false,"protectionType":"NoProtection","dontUseHTMLParagraphAutoSpacing":false,"formFieldShading":true,"styles":[{"name":"Normal","type":"Paragraph","paragraphFormat":{"listFormat":{}},"characterFormat":{},"next":"Normal"},{"name":"Default Paragraph Font","type":"Character","characterFormat":{}},{"name":"Placeholder Text","type":"Character","characterFormat":{"fontColor":"#808080FF"},"basedOn":"Default Paragraph Font"},{"name":"Heading 1","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":12,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level1","listFormat":{}},"characterFormat":{"fontSize":16,"fontFamily":"Calibri Light","fontColor":"#2F5496","fontSizeBidi":16,"fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 1 Char","next":"Normal"},{"name":"Heading 1 Char","type":"Character","characterFormat":{"fontSize":16,"fontFamily":"Calibri Light","fontColor":"#2F5496","fontSizeBidi":16,"fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Heading 2","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level2","listFormat":{}},"characterFormat":{"fontSize":13,"fontFamily":"Calibri Light","fontColor":"#2F5496","fontSizeBidi":13,"fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 2 Char","next":"Normal"},{"name":"Heading 2 Char","type":"Character","characterFormat":{"fontSize":13,"fontFamily":"Calibri Light","fontColor":"#2F5496","fontSizeBidi":13,"fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Heading 3","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level3","listFormat":{}},"characterFormat":{"fontSize":12,"fontFamily":"Calibri Light","fontColor":"#1F3763","fontSizeBidi":12,"fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 3 Char","next":"Normal"},{"name":"Heading 3 Char","type":"Character","characterFormat":{"fontSize":12,"fontFamily":"Calibri Light","fontColor":"#1F3763","fontSizeBidi":12,"fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Heading 4","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level4","listFormat":{}},"characterFormat":{"italic":true,"fontFamily":"Calibri Light","fontColor":"#2F5496","italicBidi":true,"fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 4 Char","next":"Normal"},{"name":"Heading 4 Char","type":"Character","characterFormat":{"italic":true,"fontFamily":"Calibri Light","fontColor":"#2F5496","italicBidi":true,"fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Heading 5","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level5","listFormat":{}},"characterFormat":{"fontFamily":"Calibri Light","fontColor":"#2F5496","fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 5 Char","next":"Normal"},{"name":"Heading 5 Char","type":"Character","characterFormat":{"fontFamily":"Calibri Light","fontColor":"#2F5496","fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Heading 6","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level6","listFormat":{}},"characterFormat":{"fontFamily":"Calibri Light","fontColor":"#1F3763","fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 6 Char","next":"Normal"},{"name":"Heading 6 Char","type":"Character","characterFormat":{"fontFamily":"Calibri Light","fontColor":"#1F3763","fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"}],"lists":[],"abstractLists":[],"comments":[],"revisions":[],"customXml":[]}';
    //     editor.open(formfielddoc);
    //     let json: string = editor.serialize();
    //     expect(json).toBe(expectdoc);
    // });

});

let shapeSfdt: any = {
    "sections": [
        {
            "blocks": [
                {
                    "characterFormat": {
                        "fontSize": 20.0,
                        "fontFamily": "Arial",
                        "fontSizeBidi": 20.0,
                        "fontFamilyBidi": "Arial"
                    },
                    "paragraphFormat": {
                        "afterSpacing": 0.0,
                        "lineSpacing": 1.0,
                        "lineSpacingType": "Multiple",
                        "styleName": "Normal"
                    },
                    "inlines": [
                        {
                            "shapeId": 1,
                            "name": "Text Box 2",
                            "alternativeText": null,
                            "title": null,
                            "visible": true,
                            "width": 185.9,
                            "height": 110.6,
                            "widthScale": 100.0,
                            "heightScale": 100.0,
                            "lineFormat": {
                                "lineFormatType": "Solid",
                                "color": "#FF0000FF",
                                "weight": 12.5,
                                "lineStyle": "Solid"
                            },
                            "verticalPosition": 29.88,
                            "verticalOrigin": "Paragraph",
                            "verticalAlignment": "None",
                            "horizontalPosition": 18.23,
                            "horizontalOrigin": "Column",
                            "horizontalAlignment": "None",
                            "zOrderPosition": 251660288,
                            "allowOverlap": true,
                            "layoutInCell": true,
                            "lockAnchor": false,
                            "autoShapeType": "Rectangle",
                            "textFrame": {
                                "textVerticalAlignment": "Top",
                                "leftMargin": 7.2,
                                "rightMargin": 7.2,
                                "topMargin": 3.6,
                                "bottomMargin": 3.6,
                                "blocks": [
                                    {
                                        "paragraphFormat": {
                                            "styleName": "Normal"
                                        },
                                        "inlines": [
                                            {
                                                "text": "[Grab your reader’s attention with a great quote from the document or use this space to emphasize a key point. To place this text box anywhere on the page, just drag it.]"
                                            }
                                        ]
                                    }
                                ]
                            }
                        },
                        {
                            "shapeId": 217,
                            "name": "Text Box 2",
                            "alternativeText": null,
                            "title": null,
                            "visible": true,
                            "width": 149.04,
                            "height": 46.8,
                            "widthScale": 100.0,
                            "heightScale": 100.0,
                            "lineFormat": {
                                "lineFormatType": "Solid",
                                "color": "#00B0F0FF",
                                "weight": 1.0,
                                "lineStyle": "Solid"
                            },
                            "verticalPosition": 12.07,
                            "verticalOrigin": "Margin",
                            "verticalAlignment": "None",
                            "horizontalPosition": 132.37,
                            "horizontalOrigin": "Margin",
                            "horizontalAlignment": "None",
                            "zOrderPosition": 251658240,
                            "allowOverlap": true,
                            "layoutInCell": true,
                            "lockAnchor": false,
                            "autoShapeType": "Rectangle",
                            "textFrame": {
                                "textVerticalAlignment": "Top",
                                "leftMargin": 0.0,
                                "rightMargin": 72.0,
                                "topMargin": 0.0,
                                "bottomMargin": 0.0,
                                "blocks": [
                                    {
                                        "characterFormat": {
                                            "fontSize": 10.0,
                                            "fontFamily": "Arial",
                                            "fontSizeBidi": 10.0,
                                            "fontFamilyBidi": "Arial"
                                        },
                                        "paragraphFormat": {
                                            "styleName": "Normal"
                                        },
                                        "inlines": [
                                            {
                                                "text": " ",
                                                "characterFormat": {
                                                    "fontSize": 10.0,
                                                    "fontFamily": "Arial",
                                                    "fontSizeBidi": 10.0,
                                                    "fontFamilyBidi": "Arial"
                                                }
                                            },
                                            {
                                                "text": "Syncfusion",
                                                "characterFormat": {
                                                    "fontSize": 10.0,
                                                    "fontFamily": "Arial",
                                                    "fontSizeBidi": 10.0,
                                                    "fontFamilyBidi": "Arial"
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }
                        },
                        {
                            "text": "Action is the foundational key to all success",
                            "characterFormat": {
                                "fontSize": 20.0,
                                "fontFamily": "Arial",
                                "fontSizeBidi": 20.0,
                                "fontFamilyBidi": "Arial"
                            }
                        },
                        {
                            "name": "_GoBack",
                            "bookmarkType": 0
                        },
                        {
                            "name": "_GoBack",
                            "bookmarkType": 1
                        }
                    ]
                }
            ],
            "headersFooters": {},
            "sectionFormat": {
                "headerDistance": 36.0,
                "footerDistance": 36.0,
                "pageWidth": 612.0,
                "pageHeight": 792.0,
                "leftMargin": 72.0,
                "rightMargin": 72.0,
                "topMargin": 72.0,
                "bottomMargin": 72.0,
                "differentFirstPage": false,
                "differentOddAndEvenPages": false,
                "bidi": false,
                "restartPageNumbering": false,
                "pageStartingNumber": 0
            }
        }
    ]
};
describe('Sfdt export for Shape', () => {
    let editor: DocumentEditor;
    let documentHelper: DocumentHelper;
    let exportData: any;
    beforeAll((): void => {
        let ele: HTMLElement = createElement('div', { id: 'container' });
        document.body.appendChild(ele);
        DocumentEditor.Inject(SfdtExport);
        editor = new DocumentEditor({ enableSfdtExport: true });
        (editor.documentHelper as any).containerCanvasIn = TestHelper.containerCanvas;
        (editor.documentHelper as any).selectionCanvasIn = TestHelper.selectionCanvas;
        (editor.documentHelper.render as any).pageCanvasIn = TestHelper.pageCanvas;
        (editor.documentHelper.render as any).selectionCanvasIn = TestHelper.pageSelectionCanvas;
        editor.appendTo('#container');
        documentHelper = editor.documentHelper;
        editor.open(JSON.stringify(shapeSfdt));
        exportData = JSON.parse(editor.sfdtExportModule.serialize());
    });
    afterAll((done): void => {
        documentHelper.destroy();
        documentHelper = undefined;
        editor.destroy();
        document.body.removeChild(document.getElementById('container'));
        editor = undefined;
        document.body.innerHTML = '';
        setTimeout(function () {
            done();
        }, 1000);
    });
    it('Shape sfdt', () => {
        let exportShape: any = exportData.sections[0].blocks[0].inlines[0];
        let sfdtShape: any = shapeSfdt.sections[0].blocks[0].inlines[0];
        expect(exportShape.allowOverlap).toBe(sfdtShape.allowOverlap);
        expect(exportShape.alternativeText).toBe(sfdtShape.alternativeText);
        expect(exportShape.autoShapeType).toBe(sfdtShape.autoShapeType);
        expect(exportShape.height).toBe(sfdtShape.height);
        expect(exportShape.heightScale).toBe(sfdtShape.heightScale);
        expect(exportShape.horizontalAlignment).toBe(sfdtShape.horizontalAlignment);
        expect(exportShape.horizontalOrigin).toBe(sfdtShape.horizontalOrigin);
        expect(exportShape.horizontalPosition.toFixed(2)).toBe(sfdtShape.horizontalPosition.toFixed(2));
        expect(exportShape.layoutInCell).toBe(sfdtShape.layoutInCell);
        expect(exportShape.lockAnchor).toBe(sfdtShape.lockAnchor);
        expect(exportShape.name).toBe(sfdtShape.name);
        expect(exportShape.shapeId).toBe(sfdtShape.shapeId);
        expect(exportShape.title).toBe(sfdtShape.title);
        expect(exportShape.width).toBe(sfdtShape.width);
        expect(exportShape.widthScale).toBe(sfdtShape.widthScale);
        expect(exportShape.verticalAlignment).toBe(sfdtShape.verticalAlignment);
        expect(exportShape.verticalOrigin).toBe(sfdtShape.verticalOrigin);
        expect(exportShape.verticalPosition.toFixed(2)).toBe(sfdtShape.verticalPosition.toFixed(2));
        expect(exportShape.zOrderPosition).toBe(sfdtShape.zOrderPosition);
    });
});

let shapeSquareSfdt: any = {
    "sections": [
        {
            "blocks": [
                {
                    "characterFormat": {
                        "fontColor": "empty"
                    },
                    "paragraphFormat": {
                        "styleName": "Normal"
                    },
                    "inlines": [
                        {
                            "shapeId": 1,
                            "name": "Text Box 1",
                            "alternativeText": null,
                            "title": null,
                            "visible": true,
                            "width": 60.92307,
                            "height": 33.7846451,
                            "widthScale": 100.0,
                            "heightScale": 100.0,
                            "lineFormat": {
                                "lineFormatType": "Solid",
                                "color": "#000000FF",
                                "weight": 0.5,
                                "lineStyle": "Solid"
                            },
                            "fillFormat": {
                                "color": "#FFFFFFFF",
                                "fill": true
                            },
                            "verticalPosition": 2.17,
                            "verticalOrigin": "Paragraph",
                            "verticalAlignment": "None",
                            "horizontalPosition": 36.51,
                            "horizontalOrigin": "Column",
                            "horizontalAlignment": "None",
                            "zOrderPosition": 251659264,
                            "allowOverlap": true,
                            "layoutInCell": true,
                            "lockAnchor": false,
                            "textWrappingStyle": "Square",
                            "textWrappingType": "Both",
                            "distanceBottom": 0.0,
                            "distanceLeft": 9.0,
                            "distanceRight": 9.0,
                            "distanceTop": 0.0,
                            "autoShapeType": "Rectangle",
                            "textFrame": {
                                "textVerticalAlignment": "Top",
                                "leftMargin": 7.2,
                                "rightMargin": 7.2,
                                "topMargin": 3.6,
                                "bottomMargin": 3.6,
                                "blocks": [
                                    {
                                        "characterFormat": {
                                            "fontColor": "empty"
                                        },
                                        "paragraphFormat": {
                                            "styleName": "Normal"
                                        },
                                        "inlines": [
                                            {
                                                "text": "Square",
                                                "characterFormat": {
                                                    "fontColor": "empty"
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }
                        },
                        {
                            "text": "Test Doc",
                            "characterFormat": {
                                "fontColor": "empty"
                            }
                        }
                    ]
                },
                {
                    "characterFormat": {
                        "fontColor": "empty"
                    },
                    "paragraphFormat": {
                        "styleName": "Normal"
                    },
                    "inlines": [
                        {
                            "shapeId": 2,
                            "name": "Text Box 2",
                            "alternativeText": null,
                            "title": null,
                            "visible": true,
                            "width": 91.38457,
                            "height": 43.7538567,
                            "widthScale": 100.0,
                            "heightScale": 100.0,
                            "lineFormat": {
                                "lineFormatType": "Solid",
                                "color": "#000000FF",
                                "weight": 0.5,
                                "lineStyle": "Solid"
                            },
                            "fillFormat": {
                                "color": "#FFFFFFFF",
                                "fill": true
                            },
                            "verticalPosition": 6.85,
                            "verticalOrigin": "Paragraph",
                            "verticalAlignment": "None",
                            "horizontalPosition": 156.18,
                            "horizontalOrigin": "Column",
                            "horizontalAlignment": "None",
                            "zOrderPosition": 251660288,
                            "allowOverlap": true,
                            "layoutInCell": true,
                            "lockAnchor": false,
                            "textWrappingStyle": "TopAndBottom",
                            "textWrappingType": "Both",
                            "distanceBottom": 0.0,
                            "distanceLeft": 9.0,
                            "distanceRight": 9.0,
                            "distanceTop": 0.0,
                            "autoShapeType": "Rectangle",
                            "textFrame": {
                                "textVerticalAlignment": "Top",
                                "leftMargin": 7.2,
                                "rightMargin": 7.2,
                                "topMargin": 3.6,
                                "bottomMargin": 3.6,
                                "blocks": [
                                    {
                                        "characterFormat": {
                                            "fontColor": "empty"
                                        },
                                        "paragraphFormat": {
                                            "styleName": "Normal"
                                        },
                                        "inlines": [
                                            {
                                                "text": "Top & bottom",
                                                "characterFormat": {
                                                    "fontColor": "empty"
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }
                        },
                        {
                            "text": "Test Top and Bottom",
                            "characterFormat": {
                                "fontColor": "empty"
                            }
                        }
                    ]
                },
                {
                    "characterFormat": {
                        "fontColor": "empty"
                    },
                    "paragraphFormat": {
                        "styleName": "Normal"
                    },
                    "inlines": [
                        {
                            "shapeId": 3,
                            "name": "Text Box 3",
                            "alternativeText": null,
                            "title": null,
                            "visible": true,
                            "width": 70.89228,
                            "height": 29.9077168,
                            "widthScale": 100.0,
                            "heightScale": 100.0,
                            "lineFormat": {
                                "lineFormatType": "Solid",
                                "color": "#000000FF",
                                "weight": 0.5,
                                "lineStyle": "Solid"
                            },
                            "fillFormat": {
                                "color": "#FFFFFFFF",
                                "fill": true
                            },
                            "verticalPosition": 7.8,
                            "verticalOrigin": "Paragraph",
                            "verticalAlignment": "None",
                            "horizontalPosition": 63.63,
                            "horizontalOrigin": "Column",
                            "horizontalAlignment": "None",
                            "zOrderPosition": 251661312,
                            "allowOverlap": true,
                            "layoutInCell": true,
                            "lockAnchor": false,
                            "textWrappingStyle": "Tight",
                            "textWrappingType": "Left",
                            "distanceBottom": 0.0,
                            "distanceLeft": 9.0,
                            "distanceRight": 9.0,
                            "distanceTop": 0.0,
                            "autoShapeType": "Rectangle",
                            "textFrame": {
                                "textVerticalAlignment": "Top",
                                "leftMargin": 7.2,
                                "rightMargin": 7.2,
                                "topMargin": 3.6,
                                "bottomMargin": 3.6,
                                "blocks": [
                                    {
                                        "characterFormat": {
                                            "fontColor": "empty"
                                        },
                                        "paragraphFormat": {
                                            "styleName": "Normal"
                                        },
                                        "inlines": [
                                            {
                                                "text": "Tight",
                                                "characterFormat": {
                                                    "fontColor": "empty"
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }
                        },
                        {
                            "text": "Tight",
                            "characterFormat": {
                                "fontColor": "empty"
                            }
                        }
                    ]
                }
            ],
            "headersFooters": {},
            "sectionFormat": {
                "headerDistance": 36.0,
                "footerDistance": 36.0,
                "pageWidth": 612.0,
                "pageHeight": 792.0,
                "leftMargin": 72.0,
                "rightMargin": 72.0,
                "topMargin": 72.0,
                "bottomMargin": 72.0,
                "differentFirstPage": false,
                "differentOddAndEvenPages": false,
                "bidi": false,
                "restartPageNumbering": false,
                "pageStartingNumber": 0,
                "endnoteNumberFormat": "LowerCaseRoman",
                "footNoteNumberFormat": "Arabic",
                "restartIndexForFootnotes": "DoNotRestart",
                "restartIndexForEndnotes": "DoNotRestart"
            }
        }
    ],
    "characterFormat": {
        "fontSize": 11.0,
        "fontFamily": "Calibri",
        "fontColor": "empty",
        "fontSizeBidi": 11.0,
        "fontFamilyBidi": "Arial"
    },
    "paragraphFormat": {
        "afterSpacing": 8.0,
        "lineSpacing": 1.0791666507720947,
        "lineSpacingType": "Multiple"
    },
    "background": {
        "color": "#FFFFFFFF"
    },
    "styles": [
        {
            "type": "Paragraph",
            "name": "Normal",
            "next": "Normal",
            "characterFormat": {
                "fontColor": "empty"
            }
        },
        {
            "type": "Character",
            "name": "Default Paragraph Font",
            "characterFormat": {
                "fontColor": "empty"
            }
        }
    ],
    "defaultTabWidth": 36.0,
    "formatting": false,
    "trackChanges": false,
    "protectionType": "NoProtection",
    "enforcement": false,
    "dontUseHTMLParagraphAutoSpacing": false,
    "alignTablesRowByRow": false,
    "formFieldShading": true,
    "footnotes": {
        "separator": [
            {
                "characterFormat": {
                    "fontColor": "empty"
                },
                "paragraphFormat": {
                    "styleName": "Normal"
                },
                "inlines": [
                    {
                        "text": "\u0003",
                        "characterFormat": {
                            "fontColor": "empty"
                        }
                    }
                ]
            }
        ],
        "continuationSeparator": [
            {
                "characterFormat": {
                    "fontColor": "empty"
                },
                "paragraphFormat": {
                    "styleName": "Normal"
                },
                "inlines": [
                    {
                        "text": "\u0004",
                        "characterFormat": {
                            "fontColor": "empty"
                        }
                    }
                ]
            }
        ]
    },
    "endnotes": {
        "separator": [
            {
                "characterFormat": {
                    "fontColor": "empty"
                },
                "paragraphFormat": {
                    "styleName": "Normal"
                },
                "inlines": [
                    {
                        "text": "\u0003",
                        "characterFormat": {
                            "fontColor": "empty"
                        }
                    }
                ]
            }
        ],
        "continuationSeparator": [
            {
                "characterFormat": {
                    "fontColor": "empty"
                },
                "paragraphFormat": {
                    "styleName": "Normal"
                },
                "inlines": [
                    {
                        "text": "\u0004",
                        "characterFormat": {
                            "fontColor": "empty"
                        }
                    }
                ]
            }
        ]
    }
};

describe('Sfdt export Shape', () => {
    let editor: DocumentEditor;
    let documentHelper: DocumentHelper;
    let exportData: any;
    beforeAll((): void => {
        let ele: HTMLElement = createElement('div', { id: 'container' });
        document.body.appendChild(ele);
        DocumentEditor.Inject(SfdtExport);
        editor = new DocumentEditor({ enableSfdtExport: true });
        (editor.documentHelper as any).containerCanvasIn = TestHelper.containerCanvas;
        (editor.documentHelper as any).selectionCanvasIn = TestHelper.selectionCanvas;
        (editor.documentHelper.render as any).pageCanvasIn = TestHelper.pageCanvas;
        (editor.documentHelper.render as any).selectionCanvasIn = TestHelper.pageSelectionCanvas;
        editor.appendTo('#container');
        documentHelper = editor.documentHelper;
        editor.open(JSON.stringify(shapeSquareSfdt));
        exportData = JSON.parse(editor.sfdtExportModule.serialize());
    });
    afterAll((done): void => {
        documentHelper.destroy();
        documentHelper = undefined;
        editor.destroy();
        document.body.removeChild(document.getElementById('container'));
        editor = undefined;
        document.body.innerHTML = '';
        setTimeout(function () {
            done();
        }, 1000);
    });
    it('Square, TopAndBottom Shape', () => {
        let exportSfdt: any = exportData.sections[0].blocks;
        let sfdtLoad: any = shapeSquareSfdt.sections[0].blocks;
        expect(exportSfdt[0].inlines[0].textWrappingStyle).toBe(sfdtLoad[0].inlines[0].textWrappingStyle);
        expect(exportSfdt[0].inlines[0].textWrappingType).toBe(sfdtLoad[0].inlines[0].textWrappingType);
        expect(exportSfdt[0].inlines[0].distanceBottom).toBe(sfdtLoad[0].inlines[0].distanceBottom);
        expect(exportSfdt[0].inlines[0].distanceLeft).toBe(sfdtLoad[0].inlines[0].distanceLeft);
        expect(exportSfdt[0].inlines[0].distanceRight).toBe(sfdtLoad[0].inlines[0].distanceRight);
        expect(exportSfdt[0].inlines[0].distanceTop).toBe(sfdtLoad[0].inlines[0].distanceTop);

        expect(exportSfdt[1].inlines[0].textWrappingStyle).toBe(sfdtLoad[1].inlines[0].textWrappingStyle);
        expect(exportSfdt[2].inlines[0].textWrappingStyle).toBe(sfdtLoad[2].inlines[0].textWrappingStyle);
    });
});

let allCapsSFDT: any = { "sections": [{ "sectionFormat": { "pageWidth": 612, "pageHeight": 792, "leftMargin": 72, "rightMargin": 72, "topMargin": 72, "bottomMargin": 72, "differentFirstPage": false, "differentOddAndEvenPages": false, "headerDistance": 36, "footerDistance": 36, "bidi": false }, "blocks": [{ "paragraphFormat": { "styleName": "Normal", "listFormat": {} }, "characterFormat": { "fontSize": "11", "fontFamily": "Calibri", "allCaps": true }, "inlines": [{ "characterFormat": { "fontSize": "11", "fontFamily": "Calibri", "bidi": false, "allCaps": true }, "text": "hello world" }] }], "headersFooters": { "header": { "blocks": [{ "paragraphFormat": { "listFormat": {} }, "characterFormat": {}, "inlines": [] }] }, "footer": { "blocks": [{ "paragraphFormat": { "listFormat": {} }, "characterFormat": {}, "inlines": [] }] }, "evenHeader": {}, "evenFooter": {}, "firstPageHeader": {}, "firstPageFooter": {} } }], "characterFormat": { "bold": false, "italic": false, "fontSize": 11, "fontFamily": "Calibri", "underline": "None", "strikethrough": "None", "baselineAlignment": "Normal", "highlightColor": "NoColor", "fontColor": "#000000", "fontSizeBidi": 11, "fontFamilyBidi": "Calibri", "allCaps": false }, "paragraphFormat": { "leftIndent": 0, "rightIndent": 0, "firstLineIndent": 0, "textAlignment": "Left", "beforeSpacing": 0, "afterSpacing": 0, "lineSpacing": 1, "lineSpacingType": "Multiple", "listFormat": {}, "bidi": false }, "defaultTabWidth": 36, "trackChanges": false, "enforcement": false, "hashValue": "", "saltValue": "", "formatting": false, "protectionType": "NoProtection", "dontUseHTMLParagraphAutoSpacing": false, "styles": [{ "name": "Normal", "type": "Paragraph", "paragraphFormat": { "listFormat": {} }, "characterFormat": {}, "next": "Normal" }, { "name": "Heading 1", "type": "Paragraph", "paragraphFormat": { "leftIndent": 0, "rightIndent": 0, "firstLineIndent": 0, "textAlignment": "Left", "beforeSpacing": 12, "afterSpacing": 0, "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple", "outlineLevel": "Level1", "listFormat": {} }, "characterFormat": { "fontSize": 16, "fontFamily": "Calibri Light", "fontColor": "#2F5496" }, "basedOn": "Normal", "link": "Heading 1 Char", "next": "Normal" }, { "name": "Heading 1 Char", "type": "Character", "characterFormat": { "fontSize": 16, "fontFamily": "Calibri Light", "fontColor": "#2F5496" }, "basedOn": "Default Paragraph Font" }, { "name": "Default Paragraph Font", "type": "Character", "characterFormat": {} }, { "name": "Heading 2", "type": "Paragraph", "paragraphFormat": { "leftIndent": 0, "rightIndent": 0, "firstLineIndent": 0, "textAlignment": "Left", "beforeSpacing": 2, "afterSpacing": 0, "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple", "outlineLevel": "Level2", "listFormat": {} }, "characterFormat": { "fontSize": 13, "fontFamily": "Calibri Light", "fontColor": "#2F5496" }, "basedOn": "Normal", "link": "Heading 2 Char", "next": "Normal" }, { "name": "Heading 2 Char", "type": "Character", "characterFormat": { "fontSize": 13, "fontFamily": "Calibri Light", "fontColor": "#2F5496" }, "basedOn": "Default Paragraph Font" }, { "name": "Heading 3", "type": "Paragraph", "paragraphFormat": { "leftIndent": 0, "rightIndent": 0, "firstLineIndent": 0, "textAlignment": "Left", "beforeSpacing": 2, "afterSpacing": 0, "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple", "outlineLevel": "Level3", "listFormat": {} }, "characterFormat": { "fontSize": 12, "fontFamily": "Calibri Light", "fontColor": "#1F3763" }, "basedOn": "Normal", "link": "Heading 3 Char", "next": "Normal" }, { "name": "Heading 3 Char", "type": "Character", "characterFormat": { "fontSize": 12, "fontFamily": "Calibri Light", "fontColor": "#1F3763" }, "basedOn": "Default Paragraph Font" }, { "name": "Heading 4", "type": "Paragraph", "paragraphFormat": { "leftIndent": 0, "rightIndent": 0, "firstLineIndent": 0, "textAlignment": "Left", "beforeSpacing": 2, "afterSpacing": 0, "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple", "outlineLevel": "Level4", "listFormat": {} }, "characterFormat": { "italic": true, "fontFamily": "Calibri Light", "fontColor": "#2F5496" }, "basedOn": "Normal", "link": "Heading 4 Char", "next": "Normal" }, { "name": "Heading 4 Char", "type": "Character", "characterFormat": { "italic": true, "fontFamily": "Calibri Light", "fontColor": "#2F5496" }, "basedOn": "Default Paragraph Font" }, { "name": "Heading 5", "type": "Paragraph", "paragraphFormat": { "leftIndent": 0, "rightIndent": 0, "firstLineIndent": 0, "textAlignment": "Left", "beforeSpacing": 2, "afterSpacing": 0, "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple", "outlineLevel": "Level5", "listFormat": {} }, "characterFormat": { "fontFamily": "Calibri Light", "fontColor": "#2F5496" }, "basedOn": "Normal", "link": "Heading 5 Char", "next": "Normal" }, { "name": "Heading 5 Char", "type": "Character", "characterFormat": { "fontFamily": "Calibri Light", "fontColor": "#2F5496" }, "basedOn": "Default Paragraph Font" }, { "name": "Heading 6", "type": "Paragraph", "paragraphFormat": { "leftIndent": 0, "rightIndent": 0, "firstLineIndent": 0, "textAlignment": "Left", "beforeSpacing": 2, "afterSpacing": 0, "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple", "outlineLevel": "Level6", "listFormat": {} }, "characterFormat": { "fontFamily": "Calibri Light", "fontColor": "#1F3763" }, "basedOn": "Normal", "link": "Heading 6 Char", "next": "Normal" }, { "name": "Heading 6 Char", "type": "Character", "characterFormat": { "fontFamily": "Calibri Light", "fontColor": "#1F3763" }, "basedOn": "Default Paragraph Font" }], "lists": [], "abstractLists": [], "comments": [], "revisions": [] }

describe('Sfdt export for allCaps property validation', () => {
    let editor: DocumentEditor;
    let documentHelper: DocumentHelper;
    let exportData: any;
    beforeAll((): void => {
        let ele: HTMLElement = createElement('div', { id: 'container' });
        document.body.appendChild(ele);
        DocumentEditor.Inject(SfdtExport);
        editor = new DocumentEditor({ enableSfdtExport: true });
        (editor.documentHelper as any).containerCanvasIn = TestHelper.containerCanvas;
        (editor.documentHelper as any).selectionCanvasIn = TestHelper.selectionCanvas;
        (editor.documentHelper.render as any).pageCanvasIn = TestHelper.pageCanvas;
        (editor.documentHelper.render as any).selectionCanvasIn = TestHelper.pageSelectionCanvas;
        editor.appendTo('#container');
        documentHelper = editor.documentHelper;
        editor.open(JSON.stringify(allCapsSFDT));
        exportData = JSON.parse(editor.sfdtExportModule.serialize());
    });
    afterAll((done): void => {
        documentHelper.destroy();
        documentHelper = undefined;
        editor.destroy();
        document.body.removeChild(document.getElementById('container'));
        editor = undefined;
        document.body.innerHTML = '';
        setTimeout(function () {
            done();
        }, 1000);
    });
    it('Character format in export allCaps validation', () => {
        console.log('Character format in export allCaps validation');
        expect(exportData.sections[0].blocks[0].characterFormat.allCaps).toBe(true);
    });
    it('Character format in export allCaps validation in inline', () => {
        console.log('Character format in export allCaps validation in inline');
        expect(exportData.sections[0].blocks[0].inlines[0].characterFormat.allCaps).toBe(true);
    });
});

describe('contentControl Validation', () => {
    let editor: DocumentEditor = undefined;
    let documentHelper: DocumentHelper;
    beforeAll(() => {
        let ele: HTMLElement = createElement('div', { id: 'container' });
        document.body.appendChild(ele);
        DocumentEditor.Inject(Editor, Selection, SfdtExport);
        editor = new DocumentEditor({ enableSfdtExport: true, enableEditor: true, enableSelection: true, isReadOnly: false });
        documentHelper = editor.documentHelper;
        (editor.documentHelper as any).containerCanvasIn = TestHelper.containerCanvas;
        (editor.documentHelper as any).selectionCanvasIn = TestHelper.selectionCanvas;
        (editor.documentHelper.render as any).pageCanvasIn = TestHelper.pageCanvas;
        (editor.documentHelper.render as any).selectionCanvasIn = TestHelper.pageSelectionCanvas;
        editor.appendTo('#container');
    });
    afterAll((done) => {
        document.body.removeChild(document.getElementById('container'));
        editor.destroy();
        editor = undefined;
        documentHelper = undefined;
        document.body.innerHTML = '';
        setTimeout(function () {
            done();
        }, 1000);
    });

    // it('Rich text validation', () => {
    //     console.log('Rich text validation');
    //     let richTextdoc: string = '{ "sections": [ { "blocks": [ { "blocks": [ { "paragraphFormat": { "styleName": "Normal" }, "inlines": [ { "text": "Text content control" } ] } ], "contentControlProperties": { "lockContentControl": false, "lockContents": false, "tag": "1", "color": "#003366FF", "title": "sample", "type": "RichText", "hasPlaceHolderText": false, "multiline": false, "isTemporary": true, "isChecked": false, "uncheckedState": { "font": null, "value": null }, "checkedState": { "font": null, "value": null }, "contentControlListItems": [] } } ], "headersFooters": {}, "sectionFormat": { "headerDistance": 36.0, "footerDistance": 36.0, "pageWidth": 612.0, "pageHeight": 792.0, "leftMargin": 72.0, "rightMargin": 72.0, "topMargin": 72.0, "bottomMargin": 72.0, "differentFirstPage": false, "differentOddAndEvenPages": false, "bidi": false, "restartPageNumbering": false, "pageStartingNumber": 0 } } ], "characterFormat": { "fontSize": 11.0, "fontFamily": "Calibri", "fontSizeBidi": 11.0, "fontFamilyBidi": "Arial" }, "paragraphFormat": { "afterSpacing": 8.0, "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple" }, "background": { "color": "#FFFFFFFF" }, "styles": [ { "type": "Paragraph", "name": "Normal", "next": "Normal" }, { "type": "Paragraph", "name": "Heading 1", "basedOn": "Normal", "next": "Normal", "link": "Heading 1 Char", "characterFormat": { "fontSize": 16.0, "fontFamily": "Calibri Light", "fontColor": "#2F5496FF", "fontSizeBidi": 16.0, "fontFamilyBidi": "Times New Roman" }, "paragraphFormat": { "beforeSpacing": 12.0, "afterSpacing": 0.0, "outlineLevel": "Level1" } }, { "type": "Character", "name": "Default Paragraph Font" }, { "type": "Character", "name": "Placeholder Text", "basedOn": "Default Paragraph Font", "characterFormat": { "fontColor": "#808080FF" } }, { "type": "Character", "name": "Heading 1 Char", "basedOn": "Default Paragraph Font", "characterFormat": { "fontSize": 16.0, "fontFamily": "Calibri Light", "fontColor": "#2F5496FF", "fontSizeBidi": 16.0, "fontFamilyBidi": "Times New Roman" } } ], "defaultTabWidth": 35.400001525878906, "formatting": false, "trackChanges": false, "protectionType": "NoProtection", "enforcement": false, "dontUseHTMLParagraphAutoSpacing": false }';
    //     let expectdoc: string = '{"sections":[{"sectionFormat":{"pageWidth":612,"pageHeight":792,"leftMargin":72,"rightMargin":72,"topMargin":72,"bottomMargin":72,"differentFirstPage":false,"differentOddAndEvenPages":false,"headerDistance":36,"footerDistance":36,"bidi":false},"blocks":[{"blocks":[{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[{"characterFormat":{},"text":"Text content control"}]}],"contentControlProperties":{"lockContentControl":false,"lockContents":false,"tag":"1","color":"#003366FF","title":"sample","type":"RichText","hasPlaceHolderText":false,"multiline":false,"isTemporary":true,"characterFormat":{},"contentControlListItems":[]}}],"headersFooters":{}}],"characterFormat":{"bold":false,"italic":false,"fontSize":11,"fontFamily":"Calibri","underline":"None","strikethrough":"None","baselineAlignment":"Normal","highlightColor":"NoColor","fontColor":"empty","boldBidi":false,"italicBidi":false,"fontSizeBidi":11,"fontFamilyBidi":"Calibri","allCaps":false},"paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":0,"afterSpacing":8,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","listFormat":{},"bidi":false},"defaultTabWidth":35.400001525878906,"trackChanges":false,"enforcement":false,"hashValue":"","saltValue":"","formatting":false,"protectionType":"NoProtection","dontUseHTMLParagraphAutoSpacing":false,"formFieldShading":true,"styles":[{"name":"Normal","type":"Paragraph","paragraphFormat":{"listFormat":{}},"characterFormat":{},"next":"Normal"},{"name":"Heading 1","type":"Paragraph","paragraphFormat":{"beforeSpacing":12,"afterSpacing":0,"outlineLevel":"Level1","listFormat":{}},"characterFormat":{"fontSize":16,"fontFamily":"Calibri Light","fontColor":"#2F5496FF","fontSizeBidi":16,"fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 1 Char","next":"Normal"},{"name":"Heading 1 Char","type":"Character","characterFormat":{"fontSize":16,"fontFamily":"Calibri Light","fontColor":"#2F5496FF","fontSizeBidi":16,"fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Default Paragraph Font","type":"Character","characterFormat":{}},{"name":"Placeholder Text","type":"Character","characterFormat":{"fontColor":"#808080FF"},"basedOn":"Default Paragraph Font"},{"name":"Heading 2","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level2","listFormat":{}},"characterFormat":{"fontSize":13,"fontFamily":"Calibri Light","fontColor":"#2F5496","fontSizeBidi":13,"fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 2 Char","next":"Normal"},{"name":"Heading 2 Char","type":"Character","characterFormat":{"fontSize":13,"fontFamily":"Calibri Light","fontColor":"#2F5496","fontSizeBidi":13,"fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Heading 3","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level3","listFormat":{}},"characterFormat":{"fontSize":12,"fontFamily":"Calibri Light","fontColor":"#1F3763","fontSizeBidi":12,"fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 3 Char","next":"Normal"},{"name":"Heading 3 Char","type":"Character","characterFormat":{"fontSize":12,"fontFamily":"Calibri Light","fontColor":"#1F3763","fontSizeBidi":12,"fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Heading 4","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level4","listFormat":{}},"characterFormat":{"italic":true,"fontFamily":"Calibri Light","fontColor":"#2F5496","italicBidi":true,"fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 4 Char","next":"Normal"},{"name":"Heading 4 Char","type":"Character","characterFormat":{"italic":true,"fontFamily":"Calibri Light","fontColor":"#2F5496","italicBidi":true,"fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Heading 5","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level5","listFormat":{}},"characterFormat":{"fontFamily":"Calibri Light","fontColor":"#2F5496","fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 5 Char","next":"Normal"},{"name":"Heading 5 Char","type":"Character","characterFormat":{"fontFamily":"Calibri Light","fontColor":"#2F5496","fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Heading 6","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level6","listFormat":{}},"characterFormat":{"fontFamily":"Calibri Light","fontColor":"#1F3763","fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 6 Char","next":"Normal"},{"name":"Heading 6 Char","type":"Character","characterFormat":{"fontFamily":"Calibri Light","fontColor":"#1F3763","fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"}],"lists":[],"abstractLists":[],"comments":[],"revisions":[],"customXml":[]}';
    //     editor.open(richTextdoc);
    //     let json: string = editor.serialize();
    //     expect(json).toBe(expectdoc);
    // });
    // it('Plain text validation in inlines method', () => {
    //     console.log('Plain text validation in inlines method');
    //     let plainTextdoc: string = '{ "sections": [ { "blocks": [ { "paragraphFormat": { "styleName": "Normal" }, "inlines": [ { "paragraphFormat": { "styleName": "Normal" }, "inlines": [ { "text": "Plain text content control" } ], "contentControlProperties": { "lockContentControl": true, "lockContents": false, "tag": "sample", "color": "#00000000", "title": "plain text", "appearance": "Tags", "type": "Text", "hasPlaceHolderText": false, "multiline": false, "isTemporary": false, "isChecked": false, "uncheckedState": { "font": null, "value": null }, "checkedState": { "font": null, "value": null }, "contentControlListItems": [] } }, { "text": " check box content control" } ] } ], "headersFooters": {}, "sectionFormat": { "headerDistance": 36.0, "footerDistance": 36.0, "pageWidth": 612.0, "pageHeight": 792.0, "leftMargin": 72.0, "rightMargin": 72.0, "topMargin": 72.0, "bottomMargin": 72.0, "differentFirstPage": false, "differentOddAndEvenPages": false, "bidi": false, "restartPageNumbering": false, "pageStartingNumber": 0 } } ], "characterFormat": { "fontSize": 11.0, "fontFamily": "Calibri", "fontSizeBidi": 11.0, "fontFamilyBidi": "Arial" }, "paragraphFormat": { "afterSpacing": 8.0, "lineSpacing": 1.0791666507720948, "lineSpacingType": "Multiple" }, "background": { "color": "#FFFFFFFF" }, "styles": [ { "type": "Paragraph", "name": "Normal", "next": "Normal" }, { "type": "Paragraph", "name": "Heading 1", "basedOn": "Normal", "next": "Normal", "link": "Heading 1 Char", "characterFormat": { "fontSize": 16.0, "fontFamily": "Calibri Light", "fontColor": "#2F5496FF", "fontSizeBidi": 16.0, "fontFamilyBidi": "Times New Roman" }, "paragraphFormat": { "beforeSpacing": 12.0, "afterSpacing": 0.0, "outlineLevel": "Level1" } }, { "type": "Character", "name": "Default Paragraph Font" }, { "type": "Character", "name": "Placeholder Text", "basedOn": "Default Paragraph Font", "characterFormat": { "fontColor": "#808080FF" } }, { "type": "Character", "name": "Heading 1 Char", "basedOn": "Default Paragraph Font", "characterFormat": { "fontSize": 16.0, "fontFamily": "Calibri Light", "fontColor": "#2F5496FF", "fontSizeBidi": 16.0, "fontFamilyBidi": "Times New Roman" } } ], "defaultTabWidth": 35.400001525878909, "formatting": false, "trackChanges": false, "protectionType": "NoProtection", "enforcement": false, "dontUseHTMLParagraphAutoSpacing": false }';
    //     let expectdoc: string = '{"sections":[{"sectionFormat":{"pageWidth":612,"pageHeight":792,"leftMargin":72,"rightMargin":72,"topMargin":72,"bottomMargin":72,"differentFirstPage":false,"differentOddAndEvenPages":false,"headerDistance":36,"footerDistance":36,"bidi":false},"blocks":[{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[{"inlines":[{"characterFormat":{},"text":"Plain text content control"}],"contentControlProperties":{"lockContentControl":true,"lockContents":false,"tag":"sample","color":"#00000000","title":"plain text","appearance":"Tags","type":"Text","hasPlaceHolderText":false,"multiline":false,"isTemporary":false,"characterFormat":{},"contentControlListItems":[]}},{"characterFormat":{},"text":" check box content control"}]}],"headersFooters":{}}],"characterFormat":{"bold":false,"italic":false,"fontSize":11,"fontFamily":"Calibri","underline":"None","strikethrough":"None","baselineAlignment":"Normal","highlightColor":"NoColor","fontColor":"empty","boldBidi":false,"italicBidi":false,"fontSizeBidi":11,"fontFamilyBidi":"Calibri","allCaps":false},"paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":0,"afterSpacing":8,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","listFormat":{},"bidi":false},"defaultTabWidth":35.400001525878906,"trackChanges":false,"enforcement":false,"hashValue":"","saltValue":"","formatting":false,"protectionType":"NoProtection","dontUseHTMLParagraphAutoSpacing":false,"formFieldShading":true,"styles":[{"name":"Normal","type":"Paragraph","paragraphFormat":{"listFormat":{}},"characterFormat":{},"next":"Normal"},{"name":"Heading 1","type":"Paragraph","paragraphFormat":{"beforeSpacing":12,"afterSpacing":0,"outlineLevel":"Level1","listFormat":{}},"characterFormat":{"fontSize":16,"fontFamily":"Calibri Light","fontColor":"#2F5496FF","fontSizeBidi":16,"fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 1 Char","next":"Normal"},{"name":"Heading 1 Char","type":"Character","characterFormat":{"fontSize":16,"fontFamily":"Calibri Light","fontColor":"#2F5496FF","fontSizeBidi":16,"fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Default Paragraph Font","type":"Character","characterFormat":{}},{"name":"Placeholder Text","type":"Character","characterFormat":{"fontColor":"#808080FF"},"basedOn":"Default Paragraph Font"},{"name":"Heading 2","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level2","listFormat":{}},"characterFormat":{"fontSize":13,"fontFamily":"Calibri Light","fontColor":"#2F5496","fontSizeBidi":13,"fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 2 Char","next":"Normal"},{"name":"Heading 2 Char","type":"Character","characterFormat":{"fontSize":13,"fontFamily":"Calibri Light","fontColor":"#2F5496","fontSizeBidi":13,"fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Heading 3","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level3","listFormat":{}},"characterFormat":{"fontSize":12,"fontFamily":"Calibri Light","fontColor":"#1F3763","fontSizeBidi":12,"fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 3 Char","next":"Normal"},{"name":"Heading 3 Char","type":"Character","characterFormat":{"fontSize":12,"fontFamily":"Calibri Light","fontColor":"#1F3763","fontSizeBidi":12,"fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Heading 4","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level4","listFormat":{}},"characterFormat":{"italic":true,"fontFamily":"Calibri Light","fontColor":"#2F5496","italicBidi":true,"fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 4 Char","next":"Normal"},{"name":"Heading 4 Char","type":"Character","characterFormat":{"italic":true,"fontFamily":"Calibri Light","fontColor":"#2F5496","italicBidi":true,"fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Heading 5","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level5","listFormat":{}},"characterFormat":{"fontFamily":"Calibri Light","fontColor":"#2F5496","fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 5 Char","next":"Normal"},{"name":"Heading 5 Char","type":"Character","characterFormat":{"fontFamily":"Calibri Light","fontColor":"#2F5496","fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Heading 6","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level6","listFormat":{}},"characterFormat":{"fontFamily":"Calibri Light","fontColor":"#1F3763","fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 6 Char","next":"Normal"},{"name":"Heading 6 Char","type":"Character","characterFormat":{"fontFamily":"Calibri Light","fontColor":"#1F3763","fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"}],"lists":[],"abstractLists":[],"comments":[],"revisions":[],"customXml":[]}';
    //     editor.open(plainTextdoc);
    //     let json: string = editor.serialize();
    //     expect(json).toBe(expectdoc);
    // });
    // it('Checkbox validation in inlines method', () => {
    //     console.log('Checkbox validation in inlines method');
    //     let checkboxdoc: string = '{ "sections": [ { "blocks": [ { "paragraphFormat": { "styleName": "Normal" }, "inlines": [ { "inlines": [ { "text": "☐", "characterFormat": { "fontFamily": "MS Gothic" } } ], "contentControlProperties": { "lockContentControl": false, "lockContents": false, "color": "#00000000", "title": "", "type": "CheckBox", "hasPlaceHolderText": false, "multiline": false, "isTemporary": false, "isChecked": false, "uncheckedState": { "font": "MS Gothic", "value": "☐" }, "checkedState": { "font": "MS Gothic", "value": "☒" }, "contentControlListItems": [] } }, { "text": " check box content control" } ] } ], "headersFooters": {}, "sectionFormat": { "headerDistance": 36.0, "footerDistance": 36.0, "pageWidth": 612.0, "pageHeight": 792.0, "leftMargin": 72.0, "rightMargin": 72.0, "topMargin": 72.0, "bottomMargin": 72.0, "differentFirstPage": false, "differentOddAndEvenPages": false, "bidi": false, "restartPageNumbering": false, "pageStartingNumber": 0 } } ], "characterFormat": { "fontSize": 11.0, "fontFamily": "Calibri", "fontSizeBidi": 11.0, "fontFamilyBidi": "Arial" }, "paragraphFormat": { "afterSpacing": 8.0, "lineSpacing": 1.0791666507720948, "lineSpacingType": "Multiple" }, "background": { "color": "#FFFFFFFF" }, "styles": [ { "type": "Paragraph", "name": "Normal", "next": "Normal" }, { "type": "Paragraph", "name": "Heading 1", "basedOn": "Normal", "next": "Normal", "link": "Heading 1 Char", "characterFormat": { "fontSize": 16.0, "fontFamily": "Calibri Light", "fontColor": "#2F5496FF", "fontSizeBidi": 16.0, "fontFamilyBidi": "Times New Roman" }, "paragraphFormat": { "beforeSpacing": 12.0, "afterSpacing": 0.0, "outlineLevel": "Level1" } }, { "type": "Character", "name": "Default Paragraph Font" }, { "type": "Character", "name": "Placeholder Text", "basedOn": "Default Paragraph Font", "characterFormat": { "fontColor": "#808080FF" } }, { "type": "Character", "name": "Heading 1 Char", "basedOn": "Default Paragraph Font", "characterFormat": { "fontSize": 16.0, "fontFamily": "Calibri Light", "fontColor": "#2F5496FF", "fontSizeBidi": 16.0, "fontFamilyBidi": "Times New Roman" } } ], "defaultTabWidth": 35.400001525878909, "formatting": false, "trackChanges": false, "protectionType": "NoProtection", "enforcement": false, "dontUseHTMLParagraphAutoSpacing": false }';
    //     let expectdoc: string = '{"sections":[{"sectionFormat":{"pageWidth":612,"pageHeight":792,"leftMargin":72,"rightMargin":72,"topMargin":72,"bottomMargin":72,"differentFirstPage":false,"differentOddAndEvenPages":false,"headerDistance":36,"footerDistance":36,"bidi":false},"blocks":[{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[{"inlines":[{"characterFormat":{"fontFamily":"MS Gothic","fontFamilyBidi":"MS Gothic"},"text":"☐"}],"contentControlProperties":{"lockContentControl":false,"lockContents":false,"color":"#00000000","title":"","type":"CheckBox","hasPlaceHolderText":false,"multiline":false,"isTemporary":false,"isChecked":false,"uncheckedState":{"font":"MS Gothic","value":"☐"},"checkedState":{"font":"MS Gothic","value":"☒"},"characterFormat":{},"contentControlListItems":[]}},{"characterFormat":{},"text":" check box content control"}]}],"headersFooters":{}}],"characterFormat":{"bold":false,"italic":false,"fontSize":11,"fontFamily":"Calibri","underline":"None","strikethrough":"None","baselineAlignment":"Normal","highlightColor":"NoColor","fontColor":"empty","boldBidi":false,"italicBidi":false,"fontSizeBidi":11,"fontFamilyBidi":"Calibri","allCaps":false},"paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":0,"afterSpacing":8,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","listFormat":{},"bidi":false},"defaultTabWidth":35.400001525878906,"trackChanges":false,"enforcement":false,"hashValue":"","saltValue":"","formatting":false,"protectionType":"NoProtection","dontUseHTMLParagraphAutoSpacing":false,"formFieldShading":true,"styles":[{"name":"Normal","type":"Paragraph","paragraphFormat":{"listFormat":{}},"characterFormat":{},"next":"Normal"},{"name":"Heading 1","type":"Paragraph","paragraphFormat":{"beforeSpacing":12,"afterSpacing":0,"outlineLevel":"Level1","listFormat":{}},"characterFormat":{"fontSize":16,"fontFamily":"Calibri Light","fontColor":"#2F5496FF","fontSizeBidi":16,"fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 1 Char","next":"Normal"},{"name":"Heading 1 Char","type":"Character","characterFormat":{"fontSize":16,"fontFamily":"Calibri Light","fontColor":"#2F5496FF","fontSizeBidi":16,"fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Default Paragraph Font","type":"Character","characterFormat":{}},{"name":"Placeholder Text","type":"Character","characterFormat":{"fontColor":"#808080FF"},"basedOn":"Default Paragraph Font"},{"name":"Heading 2","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level2","listFormat":{}},"characterFormat":{"fontSize":13,"fontFamily":"Calibri Light","fontColor":"#2F5496","fontSizeBidi":13,"fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 2 Char","next":"Normal"},{"name":"Heading 2 Char","type":"Character","characterFormat":{"fontSize":13,"fontFamily":"Calibri Light","fontColor":"#2F5496","fontSizeBidi":13,"fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Heading 3","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level3","listFormat":{}},"characterFormat":{"fontSize":12,"fontFamily":"Calibri Light","fontColor":"#1F3763","fontSizeBidi":12,"fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 3 Char","next":"Normal"},{"name":"Heading 3 Char","type":"Character","characterFormat":{"fontSize":12,"fontFamily":"Calibri Light","fontColor":"#1F3763","fontSizeBidi":12,"fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Heading 4","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level4","listFormat":{}},"characterFormat":{"italic":true,"fontFamily":"Calibri Light","fontColor":"#2F5496","italicBidi":true,"fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 4 Char","next":"Normal"},{"name":"Heading 4 Char","type":"Character","characterFormat":{"italic":true,"fontFamily":"Calibri Light","fontColor":"#2F5496","italicBidi":true,"fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Heading 5","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level5","listFormat":{}},"characterFormat":{"fontFamily":"Calibri Light","fontColor":"#2F5496","fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 5 Char","next":"Normal"},{"name":"Heading 5 Char","type":"Character","characterFormat":{"fontFamily":"Calibri Light","fontColor":"#2F5496","fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Heading 6","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level6","listFormat":{}},"characterFormat":{"fontFamily":"Calibri Light","fontColor":"#1F3763","fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 6 Char","next":"Normal"},{"name":"Heading 6 Char","type":"Character","characterFormat":{"fontFamily":"Calibri Light","fontColor":"#1F3763","fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"}],"lists":[],"abstractLists":[],"comments":[],"revisions":[],"customXml":[]}';
    //     editor.open(checkboxdoc);
    //     let json: string = editor.serialize();
    //     expect(json).toBe(expectdoc);
    // });
    // it('Dropdownlist validation in inlines method', () => {
    //     console.log('Dropdownlist validation in inlines method');
    //     let dropDownListdoc: string = '{ "sections": [ { "blocks": [ { "blocks": [ { "paragraphFormat": { "styleName": "Normal" }, "inlines": [ { "text": "Choose an item.", "characterFormat": { "styleName": "Placeholder Text" } } ] } ], "contentControlProperties": { "lockContentControl": false, "lockContents": false, "color": "#00000000", "title": "", "type": "DropDownList", "hasPlaceHolderText": true, "multiline": false, "isTemporary": false, "isChecked": false, "uncheckedState": { "font": null, "value": null }, "checkedState": { "font": null, "value": null }, "contentControlListItems": [ { "displayText": null, "value": "Choose an item." }, { "displayText": "sasa", "value": "sasa" } ] } } ], "headersFooters": {}, "sectionFormat": { "headerDistance": 36.0, "footerDistance": 36.0, "pageWidth": 612.0, "pageHeight": 792.0, "leftMargin": 72.0, "rightMargin": 72.0, "topMargin": 72.0, "bottomMargin": 72.0, "differentFirstPage": false, "differentOddAndEvenPages": false, "bidi": false, "restartPageNumbering": false, "pageStartingNumber": 0 } } ], "characterFormat": { "fontSize": 11.0, "fontFamily": "Calibri", "fontSizeBidi": 11.0, "fontFamilyBidi": "Arial" }, "paragraphFormat": { "afterSpacing": 8.0, "lineSpacing": 1.0791666507720948, "lineSpacingType": "Multiple" }, "background": { "color": "#FFFFFFFF" }, "styles": [ { "type": "Paragraph", "name": "Normal", "next": "Normal" }, { "type": "Paragraph", "name": "Heading 1", "basedOn": "Normal", "next": "Normal", "link": "Heading 1 Char", "characterFormat": { "fontSize": 16.0, "fontFamily": "Calibri Light", "fontColor": "#2F5496FF", "fontSizeBidi": 16.0, "fontFamilyBidi": "Times New Roman" }, "paragraphFormat": { "beforeSpacing": 12.0, "afterSpacing": 0.0, "outlineLevel": "Level1" } }, { "type": "Character", "name": "Default Paragraph Font" }, { "type": "Character", "name": "Placeholder Text", "basedOn": "Default Paragraph Font", "characterFormat": { "fontColor": "#808080FF" } }, { "type": "Character", "name": "Heading 1 Char", "basedOn": "Default Paragraph Font", "characterFormat": { "fontSize": 16.0, "fontFamily": "Calibri Light", "fontColor": "#2F5496FF", "fontSizeBidi": 16.0, "fontFamilyBidi": "Times New Roman" } } ], "defaultTabWidth": 35.400001525878909, "formatting": false, "trackChanges": false, "protectionType": "NoProtection", "enforcement": false, "dontUseHTMLParagraphAutoSpacing": false }';
    //     let expectdoc: string = '{"sections":[{"sectionFormat":{"pageWidth":612,"pageHeight":792,"leftMargin":72,"rightMargin":72,"topMargin":72,"bottomMargin":72,"differentFirstPage":false,"differentOddAndEvenPages":false,"headerDistance":36,"footerDistance":36,"bidi":false},"blocks":[{"blocks":[{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[{"characterFormat":{"styleName":"Placeholder Text"},"text":"Choose an item."}]}],"contentControlProperties":{"lockContentControl":false,"lockContents":false,"color":"#00000000","title":"","type":"DropDownList","hasPlaceHolderText":true,"multiline":false,"isTemporary":false,"characterFormat":{},"contentControlListItems":[{"displayText":null,"value":"Choose an item."},{"displayText":"sasa","value":"sasa"}]}}],"headersFooters":{}}],"characterFormat":{"bold":false,"italic":false,"fontSize":11,"fontFamily":"Calibri","underline":"None","strikethrough":"None","baselineAlignment":"Normal","highlightColor":"NoColor","fontColor":"empty","boldBidi":false,"italicBidi":false,"fontSizeBidi":11,"fontFamilyBidi":"Calibri","allCaps":false},"paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":0,"afterSpacing":8,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","listFormat":{},"bidi":false},"defaultTabWidth":35.400001525878906,"trackChanges":false,"enforcement":false,"hashValue":"","saltValue":"","formatting":false,"protectionType":"NoProtection","dontUseHTMLParagraphAutoSpacing":false,"formFieldShading":true,"styles":[{"name":"Normal","type":"Paragraph","paragraphFormat":{"listFormat":{}},"characterFormat":{},"next":"Normal"},{"name":"Heading 1","type":"Paragraph","paragraphFormat":{"beforeSpacing":12,"afterSpacing":0,"outlineLevel":"Level1","listFormat":{}},"characterFormat":{"fontSize":16,"fontFamily":"Calibri Light","fontColor":"#2F5496FF","fontSizeBidi":16,"fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 1 Char","next":"Normal"},{"name":"Heading 1 Char","type":"Character","characterFormat":{"fontSize":16,"fontFamily":"Calibri Light","fontColor":"#2F5496FF","fontSizeBidi":16,"fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Default Paragraph Font","type":"Character","characterFormat":{}},{"name":"Placeholder Text","type":"Character","characterFormat":{"fontColor":"#808080FF"},"basedOn":"Default Paragraph Font"},{"name":"Heading 2","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level2","listFormat":{}},"characterFormat":{"fontSize":13,"fontFamily":"Calibri Light","fontColor":"#2F5496","fontSizeBidi":13,"fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 2 Char","next":"Normal"},{"name":"Heading 2 Char","type":"Character","characterFormat":{"fontSize":13,"fontFamily":"Calibri Light","fontColor":"#2F5496","fontSizeBidi":13,"fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Heading 3","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level3","listFormat":{}},"characterFormat":{"fontSize":12,"fontFamily":"Calibri Light","fontColor":"#1F3763","fontSizeBidi":12,"fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 3 Char","next":"Normal"},{"name":"Heading 3 Char","type":"Character","characterFormat":{"fontSize":12,"fontFamily":"Calibri Light","fontColor":"#1F3763","fontSizeBidi":12,"fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Heading 4","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level4","listFormat":{}},"characterFormat":{"italic":true,"fontFamily":"Calibri Light","fontColor":"#2F5496","italicBidi":true,"fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 4 Char","next":"Normal"},{"name":"Heading 4 Char","type":"Character","characterFormat":{"italic":true,"fontFamily":"Calibri Light","fontColor":"#2F5496","italicBidi":true,"fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Heading 5","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level5","listFormat":{}},"characterFormat":{"fontFamily":"Calibri Light","fontColor":"#2F5496","fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 5 Char","next":"Normal"},{"name":"Heading 5 Char","type":"Character","characterFormat":{"fontFamily":"Calibri Light","fontColor":"#2F5496","fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Heading 6","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level6","listFormat":{}},"characterFormat":{"fontFamily":"Calibri Light","fontColor":"#1F3763","fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 6 Char","next":"Normal"},{"name":"Heading 6 Char","type":"Character","characterFormat":{"fontFamily":"Calibri Light","fontColor":"#1F3763","fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"}],"lists":[],"abstractLists":[],"comments":[],"revisions":[],"customXml":[]}';
    //     editor.open(dropDownListdoc);
    //     let json: string = editor.serialize();
    //     expect(json).toBe(expectdoc);
    // });
    // it('Combobox validation in inlines method', () => {
    //     console.log('Combobox validation in inlines method');
    //     let Comboboxdoc: string = '{ "sections": [ { "blocks": [ { "paragraphFormat": { "styleName": "Normal" }, "inlines": [ { "inlines": [ { "text": "Sample" } ], "contentControlProperties": { "lockContentControl": false, "lockContents": false, "color": "#00000000", "title": "", "type": "ComboBox", "hasPlaceHolderText": false, "multiline": false, "isTemporary": false, "isChecked": false, "uncheckedState": { "font": null, "value": null }, "checkedState": { "font": null, "value": null }, "contentControlListItems": [] } } ] } ], "headersFooters": {}, "sectionFormat": { "headerDistance": 36.0, "footerDistance": 36.0, "pageWidth": 612.0, "pageHeight": 792.0, "leftMargin": 72.0, "rightMargin": 72.0, "topMargin": 72.0, "bottomMargin": 72.0, "differentFirstPage": false, "differentOddAndEvenPages": false, "bidi": false, "restartPageNumbering": false, "pageStartingNumber": 0 } } ], "characterFormat": { "fontSize": 11.0, "fontFamily": "Calibri", "fontSizeBidi": 11.0, "fontFamilyBidi": "Arial" }, "paragraphFormat": { "afterSpacing": 8.0, "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple" }, "background": { "color": "#FFFFFFFF" }, "styles": [ { "type": "Paragraph", "name": "Normal", "next": "Normal" }, { "type": "Paragraph", "name": "Heading 1", "basedOn": "Normal", "next": "Normal", "link": "Heading 1 Char", "characterFormat": { "fontSize": 16.0, "fontFamily": "Calibri Light", "fontColor": "#2F5496FF", "fontSizeBidi": 16.0, "fontFamilyBidi": "Times New Roman" }, "paragraphFormat": { "beforeSpacing": 12.0, "afterSpacing": 0.0, "outlineLevel": "Level1" } }, { "type": "Character", "name": "Default Paragraph Font" }, { "type": "Character", "name": "Placeholder Text", "basedOn": "Default Paragraph Font", "characterFormat": { "fontColor": "#808080FF" } }, { "type": "Character", "name": "Heading 1 Char", "basedOn": "Default Paragraph Font", "characterFormat": { "fontSize": 16.0, "fontFamily": "Calibri Light", "fontColor": "#2F5496FF", "fontSizeBidi": 16.0, "fontFamilyBidi": "Times New Roman" } } ], "defaultTabWidth": 35.400001525878906, "formatting": false, "trackChanges": false, "protectionType": "NoProtection", "enforcement": false, "dontUseHTMLParagraphAutoSpacing": false }';
    //     let expectdoc: string = '{"sections":[{"sectionFormat":{"pageWidth":612,"pageHeight":792,"leftMargin":72,"rightMargin":72,"topMargin":72,"bottomMargin":72,"differentFirstPage":false,"differentOddAndEvenPages":false,"headerDistance":36,"footerDistance":36,"bidi":false},"blocks":[{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[{"inlines":[{"characterFormat":{},"text":"Sample"}],"contentControlProperties":{"lockContentControl":false,"lockContents":false,"color":"#00000000","title":"","type":"ComboBox","hasPlaceHolderText":false,"multiline":false,"isTemporary":false,"characterFormat":{},"contentControlListItems":[]}}]}],"headersFooters":{}}],"characterFormat":{"bold":false,"italic":false,"fontSize":11,"fontFamily":"Calibri","underline":"None","strikethrough":"None","baselineAlignment":"Normal","highlightColor":"NoColor","fontColor":"empty","boldBidi":false,"italicBidi":false,"fontSizeBidi":11,"fontFamilyBidi":"Calibri","allCaps":false},"paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":0,"afterSpacing":8,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","listFormat":{},"bidi":false},"defaultTabWidth":35.400001525878906,"trackChanges":false,"enforcement":false,"hashValue":"","saltValue":"","formatting":false,"protectionType":"NoProtection","dontUseHTMLParagraphAutoSpacing":false,"formFieldShading":true,"styles":[{"name":"Normal","type":"Paragraph","paragraphFormat":{"listFormat":{}},"characterFormat":{},"next":"Normal"},{"name":"Heading 1","type":"Paragraph","paragraphFormat":{"beforeSpacing":12,"afterSpacing":0,"outlineLevel":"Level1","listFormat":{}},"characterFormat":{"fontSize":16,"fontFamily":"Calibri Light","fontColor":"#2F5496FF","fontSizeBidi":16,"fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 1 Char","next":"Normal"},{"name":"Heading 1 Char","type":"Character","characterFormat":{"fontSize":16,"fontFamily":"Calibri Light","fontColor":"#2F5496FF","fontSizeBidi":16,"fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Default Paragraph Font","type":"Character","characterFormat":{}},{"name":"Placeholder Text","type":"Character","characterFormat":{"fontColor":"#808080FF"},"basedOn":"Default Paragraph Font"},{"name":"Heading 2","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level2","listFormat":{}},"characterFormat":{"fontSize":13,"fontFamily":"Calibri Light","fontColor":"#2F5496","fontSizeBidi":13,"fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 2 Char","next":"Normal"},{"name":"Heading 2 Char","type":"Character","characterFormat":{"fontSize":13,"fontFamily":"Calibri Light","fontColor":"#2F5496","fontSizeBidi":13,"fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Heading 3","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level3","listFormat":{}},"characterFormat":{"fontSize":12,"fontFamily":"Calibri Light","fontColor":"#1F3763","fontSizeBidi":12,"fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 3 Char","next":"Normal"},{"name":"Heading 3 Char","type":"Character","characterFormat":{"fontSize":12,"fontFamily":"Calibri Light","fontColor":"#1F3763","fontSizeBidi":12,"fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Heading 4","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level4","listFormat":{}},"characterFormat":{"italic":true,"fontFamily":"Calibri Light","fontColor":"#2F5496","italicBidi":true,"fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 4 Char","next":"Normal"},{"name":"Heading 4 Char","type":"Character","characterFormat":{"italic":true,"fontFamily":"Calibri Light","fontColor":"#2F5496","italicBidi":true,"fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Heading 5","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level5","listFormat":{}},"characterFormat":{"fontFamily":"Calibri Light","fontColor":"#2F5496","fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 5 Char","next":"Normal"},{"name":"Heading 5 Char","type":"Character","characterFormat":{"fontFamily":"Calibri Light","fontColor":"#2F5496","fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Heading 6","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level6","listFormat":{}},"characterFormat":{"fontFamily":"Calibri Light","fontColor":"#1F3763","fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 6 Char","next":"Normal"},{"name":"Heading 6 Char","type":"Character","characterFormat":{"fontFamily":"Calibri Light","fontColor":"#1F3763","fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"}],"lists":[],"abstractLists":[],"comments":[],"revisions":[],"customXml":[]}';
    //     editor.open(Comboboxdoc);
    //     let json: string = editor.serialize();
    //     expect(json).toBe(expectdoc);
    // });
    // it('date validation in inlines method', () => {
    //     console.log('date validation in inlines method');
    //     let dateboxdoc: string = '{ "sections": [ { "blocks": [ { "paragraphFormat": { "styleName": "Normal" }, "inlines": [ { "inlines": [ { "text": "7/30/2020" } ], "contentControlProperties": { "lockContentControl": false, "lockContents": false, "color": "#00000000", "title": "", "type": "Date", "hasPlaceHolderText": false, "multiline": false, "isTemporary": false, "isChecked": false, "dateCalendarType": "Gregorian", "dateStorageFormat": "DateStorageDateTime", "dateDisplayLocale": "en_US", "dateDisplayFormat": "M/d/yyyy", "uncheckedState": { "font": null, "value": null }, "checkedState": { "font": null, "value": null }, "contentControlListItems": [] } }, { "text": " asdasdsadsadsadasd asdaskldj sakdjaklsd" } ] } ], "headersFooters": {}, "sectionFormat": { "headerDistance": 36.0, "footerDistance": 36.0, "pageWidth": 612.0, "pageHeight": 792.0, "leftMargin": 72.0, "rightMargin": 72.0, "topMargin": 72.0, "bottomMargin": 72.0, "differentFirstPage": false, "differentOddAndEvenPages": false, "bidi": false, "restartPageNumbering": false, "pageStartingNumber": 0 } } ], "characterFormat": { "fontSize": 11.0, "fontFamily": "Calibri", "fontSizeBidi": 11.0, "fontFamilyBidi": "Arial" }, "paragraphFormat": { "afterSpacing": 8.0, "lineSpacing": 1.0791666507720948, "lineSpacingType": "Multiple" }, "background": { "color": "#FFFFFFFF" }, "styles": [ { "type": "Paragraph", "name": "Normal", "next": "Normal" }, { "type": "Paragraph", "name": "Heading 1", "basedOn": "Normal", "next": "Normal", "link": "Heading 1 Char", "characterFormat": { "fontSize": 16.0, "fontFamily": "Calibri Light", "fontColor": "#2F5496FF", "fontSizeBidi": 16.0, "fontFamilyBidi": "Times New Roman" }, "paragraphFormat": { "beforeSpacing": 12.0, "afterSpacing": 0.0, "outlineLevel": "Level1" } }, { "type": "Character", "name": "Default Paragraph Font" }, { "type": "Character", "name": "Placeholder Text", "basedOn": "Default Paragraph Font", "characterFormat": { "fontColor": "#808080FF" } }, { "type": "Character", "name": "Heading 1 Char", "basedOn": "Default Paragraph Font", "characterFormat": { "fontSize": 16.0, "fontFamily": "Calibri Light", "fontColor": "#2F5496FF", "fontSizeBidi": 16.0, "fontFamilyBidi": "Times New Roman" } } ], "defaultTabWidth": 35.400001525878909, "formatting": false, "trackChanges": false, "protectionType": "NoProtection", "enforcement": false, "dontUseHTMLParagraphAutoSpacing": false }';
    //     let expectdoc: string = '{"sections":[{"sectionFormat":{"pageWidth":612,"pageHeight":792,"leftMargin":72,"rightMargin":72,"topMargin":72,"bottomMargin":72,"differentFirstPage":false,"differentOddAndEvenPages":false,"headerDistance":36,"footerDistance":36,"bidi":false},"blocks":[{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[{"inlines":[{"characterFormat":{},"text":"7/30/2020"}],"contentControlProperties":{"lockContentControl":false,"lockContents":false,"color":"#00000000","title":"","type":"Date","hasPlaceHolderText":false,"multiline":false,"isTemporary":false,"dateCalendarType":"Gregorian","dateStorageFormat":"DateStorageDateTime","dateDisplayLocale":"en_US","dateDisplayFormat":"M/d/yyyy","characterFormat":{},"contentControlListItems":[]}},{"characterFormat":{},"text":" asdasdsadsadsadasd asdaskldj sakdjaklsd"}]}],"headersFooters":{}}],"characterFormat":{"bold":false,"italic":false,"fontSize":11,"fontFamily":"Calibri","underline":"None","strikethrough":"None","baselineAlignment":"Normal","highlightColor":"NoColor","fontColor":"empty","boldBidi":false,"italicBidi":false,"fontSizeBidi":11,"fontFamilyBidi":"Calibri","allCaps":false},"paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":0,"afterSpacing":8,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","listFormat":{},"bidi":false},"defaultTabWidth":35.400001525878906,"trackChanges":false,"enforcement":false,"hashValue":"","saltValue":"","formatting":false,"protectionType":"NoProtection","dontUseHTMLParagraphAutoSpacing":false,"formFieldShading":true,"styles":[{"name":"Normal","type":"Paragraph","paragraphFormat":{"listFormat":{}},"characterFormat":{},"next":"Normal"},{"name":"Heading 1","type":"Paragraph","paragraphFormat":{"beforeSpacing":12,"afterSpacing":0,"outlineLevel":"Level1","listFormat":{}},"characterFormat":{"fontSize":16,"fontFamily":"Calibri Light","fontColor":"#2F5496FF","fontSizeBidi":16,"fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 1 Char","next":"Normal"},{"name":"Heading 1 Char","type":"Character","characterFormat":{"fontSize":16,"fontFamily":"Calibri Light","fontColor":"#2F5496FF","fontSizeBidi":16,"fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Default Paragraph Font","type":"Character","characterFormat":{}},{"name":"Placeholder Text","type":"Character","characterFormat":{"fontColor":"#808080FF"},"basedOn":"Default Paragraph Font"},{"name":"Heading 2","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level2","listFormat":{}},"characterFormat":{"fontSize":13,"fontFamily":"Calibri Light","fontColor":"#2F5496","fontSizeBidi":13,"fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 2 Char","next":"Normal"},{"name":"Heading 2 Char","type":"Character","characterFormat":{"fontSize":13,"fontFamily":"Calibri Light","fontColor":"#2F5496","fontSizeBidi":13,"fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Heading 3","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level3","listFormat":{}},"characterFormat":{"fontSize":12,"fontFamily":"Calibri Light","fontColor":"#1F3763","fontSizeBidi":12,"fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 3 Char","next":"Normal"},{"name":"Heading 3 Char","type":"Character","characterFormat":{"fontSize":12,"fontFamily":"Calibri Light","fontColor":"#1F3763","fontSizeBidi":12,"fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Heading 4","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level4","listFormat":{}},"characterFormat":{"italic":true,"fontFamily":"Calibri Light","fontColor":"#2F5496","italicBidi":true,"fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 4 Char","next":"Normal"},{"name":"Heading 4 Char","type":"Character","characterFormat":{"italic":true,"fontFamily":"Calibri Light","fontColor":"#2F5496","italicBidi":true,"fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Heading 5","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level5","listFormat":{}},"characterFormat":{"fontFamily":"Calibri Light","fontColor":"#2F5496","fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 5 Char","next":"Normal"},{"name":"Heading 5 Char","type":"Character","characterFormat":{"fontFamily":"Calibri Light","fontColor":"#2F5496","fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Heading 6","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level6","listFormat":{}},"characterFormat":{"fontFamily":"Calibri Light","fontColor":"#1F3763","fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 6 Char","next":"Normal"},{"name":"Heading 6 Char","type":"Character","characterFormat":{"fontFamily":"Calibri Light","fontColor":"#1F3763","fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"}],"lists":[],"abstractLists":[],"comments":[],"revisions":[],"customXml":[]}';
    //     editor.open(dateboxdoc);
    //     let json: string = editor.serialize();
    //     expect(json).toBe(expectdoc);
    // });
    // it('richtext validation in table block', () => {
    //     console.log('richtext validation in table block');
    //     let dateboxdoc: string = '{ "sections": [ { "blocks": [ { "blocks": [ { "rows": [ { "rowFormat": { "allowBreakAcrossPages": true, "isHeader": false, "height": 0.0, "heightType": "AtLeast", "borders": { "left": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "right": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "top": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "bottom": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } } }, "cells": [ { "blocks": [ { "paragraphFormat": { "styleName": "Normal" }, "inlines": [] } ], "cellFormat": { "columnSpan": 1, "rowSpan": 1, "preferredWidth": 233.75, "preferredWidthType": "Point", "verticalAlignment": "Top", "isSamePaddingAsTable": true, "borders": { "left": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "right": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "top": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "bottom": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } }, "cellWidth": 233.75 } }, { "blocks": [ { "paragraphFormat": { "styleName": "Normal" }, "inlines": [] } ], "cellFormat": { "columnSpan": 1, "rowSpan": 1, "preferredWidth": 233.75, "preferredWidthType": "Point", "verticalAlignment": "Top", "isSamePaddingAsTable": true, "borders": { "left": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "right": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "top": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "bottom": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } }, "cellWidth": 233.75 } } ] }, { "rowFormat": { "allowBreakAcrossPages": true, "isHeader": false, "height": 0.0, "heightType": "AtLeast", "borders": { "left": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "right": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "top": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "bottom": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } } }, "cells": [ { "blocks": [ { "paragraphFormat": { "styleName": "Normal" }, "inlines": [] } ], "cellFormat": { "columnSpan": 1, "rowSpan": 1, "preferredWidth": 233.75, "preferredWidthType": "Point", "verticalAlignment": "Top", "isSamePaddingAsTable": true, "borders": { "left": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "right": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "top": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "bottom": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } }, "cellWidth": 233.75 } }, { "blocks": [ { "paragraphFormat": { "styleName": "Normal" }, "inlines": [] } ], "cellFormat": { "columnSpan": 1, "rowSpan": 1, "preferredWidth": 233.75, "preferredWidthType": "Point", "verticalAlignment": "Top", "isSamePaddingAsTable": true, "borders": { "left": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "right": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "top": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "bottom": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } }, "cellWidth": 233.75 } } ] } ], "title": null, "description": null, "tableFormat": { "allowAutoFit": true, "leftIndent": 0.0, "tableAlignment": "Left", "preferredWidthType": "Auto", "borders": { "left": { "lineStyle": "Single", "lineWidth": 0.5, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "right": { "lineStyle": "Single", "lineWidth": 0.5, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "top": { "lineStyle": "Single", "lineWidth": 0.5, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "bottom": { "lineStyle": "Single", "lineWidth": 0.5, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "vertical": { "lineStyle": "Single", "lineWidth": 0.5, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "Single", "lineWidth": 0.5, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } }, "bidi": false } } ], "contentControlProperties": { "lockContentControl": false, "lockContents": false, "color": "#00000000", "type": "RichText", "hasPlaceHolderText": false, "multiline": false, "isTemporary": false, "dateCalendarType": "Gregorian", "isChecked": false } } ], "headersFooters": {}, "sectionFormat": { "headerDistance": 36.0, "footerDistance": 36.0, "pageWidth": 612.0, "pageHeight": 792.0, "leftMargin": 72.0, "rightMargin": 72.0, "topMargin": 72.0, "bottomMargin": 72.0, "differentFirstPage": false, "differentOddAndEvenPages": false, "bidi": false, "restartPageNumbering": false, "pageStartingNumber": 0 } } ], "characterFormat": { "fontSize": 11.0, "fontFamily": "Calibri", "fontSizeBidi": 11.0, "fontFamilyBidi": "Arial" }, "paragraphFormat": { "afterSpacing": 8.0, "lineSpacing": 1.0791666507720948, "lineSpacingType": "Multiple" }, "background": { "color": "#FFFFFFFF" }, "styles": [ { "type": "Paragraph", "name": "Normal", "next": "Normal" }, { "type": "Character", "name": "Default Paragraph Font" }, { "type": "Character", "name": "Placeholder Text", "basedOn": "Default Paragraph Font", "characterFormat": { "fontColor": "#808080FF" } } ], "defaultTabWidth": 35.400001525878909, "formatting": false, "trackChanges": false, "protectionType": "NoProtection", "enforcement": false, "dontUseHTMLParagraphAutoSpacing": false }';
    //     let expectdoc: string = '{"sections":[{"sectionFormat":{"pageWidth":612,"pageHeight":792,"leftMargin":72,"rightMargin":72,"topMargin":72,"bottomMargin":72,"differentFirstPage":false,"differentOddAndEvenPages":false,"headerDistance":36,"footerDistance":36,"bidi":false},"blocks":[{"blocks":[{"rows":[{"cells":[{"blocks":[{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[]}],"cellFormat":{"borders":{"top":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"left":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"right":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"bottom":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"diagonalDown":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"diagonalUp":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"horizontal":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"vertical":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0}},"shading":{},"preferredWidth":233.75,"preferredWidthType":"Point","cellWidth":233.75,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":0},{"blocks":[{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[]}],"cellFormat":{"borders":{"top":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"left":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"right":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"bottom":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"diagonalDown":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"diagonalUp":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"horizontal":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"vertical":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0}},"shading":{},"preferredWidth":233.75,"preferredWidthType":"Point","cellWidth":233.75,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":1}],"rowFormat":{"height":1,"allowBreakAcrossPages":true,"heightType":"AtLeast","isHeader":false,"borders":{"top":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"left":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"right":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"bottom":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"diagonalDown":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"diagonalUp":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"horizontal":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"vertical":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0}},"gridBefore":0,"gridAfter":0}},{"cells":[{"blocks":[{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[]}],"cellFormat":{"borders":{"top":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"left":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"right":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"bottom":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"diagonalDown":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"diagonalUp":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"horizontal":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"vertical":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0}},"shading":{},"preferredWidth":233.75,"preferredWidthType":"Point","cellWidth":233.75,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":0},{"blocks":[{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[]}],"cellFormat":{"borders":{"top":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"left":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"right":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"bottom":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"diagonalDown":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"diagonalUp":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"horizontal":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"vertical":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0}},"shading":{},"preferredWidth":233.75,"preferredWidthType":"Point","cellWidth":233.75,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":1}],"rowFormat":{"height":1,"allowBreakAcrossPages":true,"heightType":"AtLeast","isHeader":false,"borders":{"top":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"left":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"right":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"bottom":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"diagonalDown":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"diagonalUp":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"horizontal":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"vertical":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0}},"gridBefore":0,"gridAfter":0}}],"grid":[233.75,233.75],"tableFormat":{"borders":{"top":{"hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5},"left":{"hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5},"right":{"hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5},"bottom":{"hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5},"diagonalDown":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"diagonalUp":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"horizontal":{"hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5},"vertical":{"hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5}},"shading":{},"leftIndent":0,"tableAlignment":"Left","topMargin":0,"rightMargin":5.4,"leftMargin":5.4,"bottomMargin":0,"preferredWidthType":"Auto","bidi":false,"allowAutoFit":true},"description":null,"title":null,"columnCount":2}],"contentControlProperties":{"lockContentControl":false,"lockContents":false,"color":"#00000000","type":"RichText","hasPlaceHolderText":false,"multiline":false,"isTemporary":false,"characterFormat":{},"contentControlListItems":[]}}],"headersFooters":{}}],"characterFormat":{"bold":false,"italic":false,"fontSize":11,"fontFamily":"Calibri","underline":"None","strikethrough":"None","baselineAlignment":"Normal","highlightColor":"NoColor","fontColor":"empty","boldBidi":false,"italicBidi":false,"fontSizeBidi":11,"fontFamilyBidi":"Calibri","allCaps":false},"paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":0,"afterSpacing":8,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","listFormat":{},"bidi":false},"defaultTabWidth":35.400001525878906,"trackChanges":false,"enforcement":false,"hashValue":"","saltValue":"","formatting":false,"protectionType":"NoProtection","dontUseHTMLParagraphAutoSpacing":false,"formFieldShading":true,"styles":[{"name":"Normal","type":"Paragraph","paragraphFormat":{"listFormat":{}},"characterFormat":{},"next":"Normal"},{"name":"Default Paragraph Font","type":"Character","characterFormat":{}},{"name":"Placeholder Text","type":"Character","characterFormat":{"fontColor":"#808080FF"},"basedOn":"Default Paragraph Font"},{"name":"Heading 1","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":12,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level1","listFormat":{}},"characterFormat":{"fontSize":16,"fontFamily":"Calibri Light","fontColor":"#2F5496","fontSizeBidi":16,"fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 1 Char","next":"Normal"},{"name":"Heading 1 Char","type":"Character","characterFormat":{"fontSize":16,"fontFamily":"Calibri Light","fontColor":"#2F5496","fontSizeBidi":16,"fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Heading 2","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level2","listFormat":{}},"characterFormat":{"fontSize":13,"fontFamily":"Calibri Light","fontColor":"#2F5496","fontSizeBidi":13,"fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 2 Char","next":"Normal"},{"name":"Heading 2 Char","type":"Character","characterFormat":{"fontSize":13,"fontFamily":"Calibri Light","fontColor":"#2F5496","fontSizeBidi":13,"fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Heading 3","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level3","listFormat":{}},"characterFormat":{"fontSize":12,"fontFamily":"Calibri Light","fontColor":"#1F3763","fontSizeBidi":12,"fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 3 Char","next":"Normal"},{"name":"Heading 3 Char","type":"Character","characterFormat":{"fontSize":12,"fontFamily":"Calibri Light","fontColor":"#1F3763","fontSizeBidi":12,"fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Heading 4","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level4","listFormat":{}},"characterFormat":{"italic":true,"fontFamily":"Calibri Light","fontColor":"#2F5496","italicBidi":true,"fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 4 Char","next":"Normal"},{"name":"Heading 4 Char","type":"Character","characterFormat":{"italic":true,"fontFamily":"Calibri Light","fontColor":"#2F5496","italicBidi":true,"fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Heading 5","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level5","listFormat":{}},"characterFormat":{"fontFamily":"Calibri Light","fontColor":"#2F5496","fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 5 Char","next":"Normal"},{"name":"Heading 5 Char","type":"Character","characterFormat":{"fontFamily":"Calibri Light","fontColor":"#2F5496","fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Heading 6","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level6","listFormat":{}},"characterFormat":{"fontFamily":"Calibri Light","fontColor":"#1F3763","fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 6 Char","next":"Normal"},{"name":"Heading 6 Char","type":"Character","characterFormat":{"fontFamily":"Calibri Light","fontColor":"#1F3763","fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"}],"lists":[],"abstractLists":[],"comments":[],"revisions":[],"customXml":[]}';
    //     editor.open(dateboxdoc);
    //     let json: string = editor.serialize();
    //     expect(json).toBe(expectdoc);
    // });
    // it('content control validation table row', () => {
    //     console.log('content control validation table row');
    //     let dateboxdoc: string = '{ "sections": [ { "blocks": [ { "paragraphFormat": { "styleName": "Normal", "listFormat":{} }, "inlines": [] }, { "rows": [ { "rowFormat": { "allowBreakAcrossPages": true, "isHeader": false, "height": 0.0, "heightType": "AtLeast", "borders": { "left": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "right": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "top": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "bottom": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } } }, "cells": [ { "blocks": [ { "paragraphFormat": { "styleName": "Normal", "listFormat":{} }, "inlines": [ { "text": "e" } ] } ], "cellFormat": { "columnSpan": 1, "rowSpan": 1, "preferredWidth": 233.75, "preferredWidthType": "Point", "verticalAlignment": "Top", "isSamePaddingAsTable": true, "shading": {}, "borders": { "left": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "right": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "top": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "bottom": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } }, "cellWidth": 233.75 }, "columnIndex": 0 }, { "blocks": [ { "paragraphFormat": { "styleName": "Normal", "listFormat":{} }, "inlines": [ { "text": "e" } ] } ], "cellFormat": { "columnSpan": 1, "rowSpan": 1, "preferredWidth": 233.75, "preferredWidthType": "Point", "verticalAlignment": "Top", "isSamePaddingAsTable": true, "shading": {}, "borders": { "left": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "right": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "top": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "bottom": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } }, "cellWidth": 233.75 }, "columnIndex": 1 } ], "contentControlProperties": { "lockContentControl": false, "lockContents": false, "color": "#00000000", "type": "RichText", "hasPlaceHolderText": false, "multiline": false, "isTemporary": false, "dateCalendarType": "Gregorian", "isChecked": false } }, { "rowFormat": { "allowBreakAcrossPages": true, "isHeader": false, "height": 0.0, "heightType": "AtLeast", "borders": { "left": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "right": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "top": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "bottom": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } } }, "cells": [ { "blocks": [ { "paragraphFormat": { "styleName": "Normal", "listFormat":{} }, "inlines": [] } ], "cellFormat": { "columnSpan": 1, "rowSpan": 1, "preferredWidth": 233.75, "preferredWidthType": "Point", "verticalAlignment": "Top", "isSamePaddingAsTable": true, "shading": {}, "borders": { "left": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "right": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "top": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "bottom": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } }, "cellWidth": 233.75 }, "columnIndex": 0 }, { "blocks": [ { "paragraphFormat": { "styleName": "Normal", "listFormat":{} }, "inlines": [] } ], "cellFormat": { "columnSpan": 1, "rowSpan": 1, "preferredWidth": 233.75, "preferredWidthType": "Point", "verticalAlignment": "Top", "isSamePaddingAsTable": true, "shading": {}, "borders": { "left": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "right": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "top": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "bottom": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } }, "cellWidth": 233.75 }, "columnIndex": 1 } ] } ], "title": null, "description": null, "grid": [ 233.75, 233.75 ], "tableFormat": { "allowAutoFit": true, "leftIndent": 0.0, "tableAlignment": "Left", "preferredWidthType": "Auto", "shading": {}, "borders": { "left": { "lineStyle": "Single", "lineWidth": 0.5, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "right": { "lineStyle": "Single", "lineWidth": 0.5, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "top": { "lineStyle": "Single", "lineWidth": 0.5, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "bottom": { "lineStyle": "Single", "lineWidth": 0.5, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "vertical": { "lineStyle": "Single", "lineWidth": 0.5, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "Single", "lineWidth": 0.5, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } }, "bidi": false } } ], "headersFooters": {}, "sectionFormat": { "headerDistance": 36.0, "footerDistance": 36.0, "pageWidth": 612.0, "pageHeight": 792.0, "leftMargin": 72.0, "rightMargin": 72.0, "topMargin": 72.0, "bottomMargin": 72.0, "differentFirstPage": false, "differentOddAndEvenPages": false, "bidi": false, "restartPageNumbering": false, "pageStartingNumber": 0 } } ], "characterFormat": { "fontSize": 11.0, "fontFamily": "Calibri", "fontSizeBidi": 11.0, "fontFamilyBidi": "Arial" }, "paragraphFormat": { "afterSpacing": 8.0, "lineSpacing": 1.0791666507720948, "lineSpacingType": "Multiple" }, "background": { "color": "#FFFFFFFF" }, "styles": [ { "type": "Paragraph", "name": "Normal", "next": "Normal" }, { "type": "Character", "name": "Default Paragraph Font" }, { "type": "Character", "name": "Placeholder Text", "basedOn": "Default Paragraph Font", "characterFormat": { "fontColor": "#808080FF" } } ], "defaultTabWidth": 35.400001525878909, "formatting": false, "trackChanges": false, "protectionType": "NoProtection", "enforcement": false, "dontUseHTMLParagraphAutoSpacing": false }';
    //     let expectdoc: string = '{"sections":[{"sectionFormat":{"pageWidth":612,"pageHeight":792,"leftMargin":72,"rightMargin":72,"topMargin":72,"bottomMargin":72,"differentFirstPage":false,"differentOddAndEvenPages":false,"headerDistance":36,"footerDistance":36,"bidi":false},"blocks":[{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[]},{"rows":[{"cells":[{"blocks":[{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[{"characterFormat":{},"text":"e"}]}],"cellFormat":{"borders":{"top":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"left":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"right":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"bottom":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"diagonalDown":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"diagonalUp":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"horizontal":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"vertical":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0}},"shading":{},"preferredWidth":233.75,"preferredWidthType":"Point","cellWidth":233.75,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":0},{"blocks":[{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[{"characterFormat":{},"text":"e"}]}],"cellFormat":{"borders":{"top":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"left":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"right":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"bottom":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"diagonalDown":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"diagonalUp":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"horizontal":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"vertical":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0}},"shading":{},"preferredWidth":233.75,"preferredWidthType":"Point","cellWidth":233.75,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":1}],"rowFormat":{"height":1,"allowBreakAcrossPages":true,"heightType":"AtLeast","isHeader":false,"borders":{"top":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"left":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"right":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"bottom":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"diagonalDown":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"diagonalUp":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"horizontal":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"vertical":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0}},"gridBefore":0,"gridAfter":0},"contentControlProperties":{"lockContentControl":false,"lockContents":false,"color":"#00000000","type":"RichText","hasPlaceHolderText":false,"multiline":false,"isTemporary":false,"characterFormat":{},"contentControlListItems":[]}},{"cells":[{"blocks":[{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[]}],"cellFormat":{"borders":{"top":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"left":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"right":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"bottom":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"diagonalDown":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"diagonalUp":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"horizontal":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"vertical":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0}},"shading":{},"preferredWidth":233.75,"preferredWidthType":"Point","cellWidth":233.75,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":0},{"blocks":[{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[]}],"cellFormat":{"borders":{"top":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"left":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"right":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"bottom":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"diagonalDown":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"diagonalUp":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"horizontal":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"vertical":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0}},"shading":{},"preferredWidth":233.75,"preferredWidthType":"Point","cellWidth":233.75,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":1}],"rowFormat":{"height":1,"allowBreakAcrossPages":true,"heightType":"AtLeast","isHeader":false,"borders":{"top":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"left":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"right":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"bottom":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"diagonalDown":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"diagonalUp":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"horizontal":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"vertical":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0}},"gridBefore":0,"gridAfter":0}}],"grid":[233.75,233.75],"tableFormat":{"borders":{"top":{"hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5},"left":{"hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5},"right":{"hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5},"bottom":{"hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5},"diagonalDown":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"diagonalUp":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"horizontal":{"hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5},"vertical":{"hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5}},"shading":{},"leftIndent":0,"tableAlignment":"Left","topMargin":0,"rightMargin":5.4,"leftMargin":5.4,"bottomMargin":0,"preferredWidthType":"Auto","bidi":false,"allowAutoFit":true},"description":null,"title":null,"columnCount":2}],"headersFooters":{}}],"characterFormat":{"bold":false,"italic":false,"fontSize":11,"fontFamily":"Calibri","underline":"None","strikethrough":"None","baselineAlignment":"Normal","highlightColor":"NoColor","fontColor":"empty","boldBidi":false,"italicBidi":false,"fontSizeBidi":11,"fontFamilyBidi":"Calibri","allCaps":false},"paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":0,"afterSpacing":8,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","listFormat":{},"bidi":false},"defaultTabWidth":35.400001525878906,"trackChanges":false,"enforcement":false,"hashValue":"","saltValue":"","formatting":false,"protectionType":"NoProtection","dontUseHTMLParagraphAutoSpacing":false,"formFieldShading":true,"styles":[{"name":"Normal","type":"Paragraph","paragraphFormat":{"listFormat":{}},"characterFormat":{},"next":"Normal"},{"name":"Default Paragraph Font","type":"Character","characterFormat":{}},{"name":"Placeholder Text","type":"Character","characterFormat":{"fontColor":"#808080FF"},"basedOn":"Default Paragraph Font"},{"name":"Heading 1","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":12,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level1","listFormat":{}},"characterFormat":{"fontSize":16,"fontFamily":"Calibri Light","fontColor":"#2F5496","fontSizeBidi":16,"fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 1 Char","next":"Normal"},{"name":"Heading 1 Char","type":"Character","characterFormat":{"fontSize":16,"fontFamily":"Calibri Light","fontColor":"#2F5496","fontSizeBidi":16,"fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Heading 2","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level2","listFormat":{}},"characterFormat":{"fontSize":13,"fontFamily":"Calibri Light","fontColor":"#2F5496","fontSizeBidi":13,"fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 2 Char","next":"Normal"},{"name":"Heading 2 Char","type":"Character","characterFormat":{"fontSize":13,"fontFamily":"Calibri Light","fontColor":"#2F5496","fontSizeBidi":13,"fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Heading 3","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level3","listFormat":{}},"characterFormat":{"fontSize":12,"fontFamily":"Calibri Light","fontColor":"#1F3763","fontSizeBidi":12,"fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 3 Char","next":"Normal"},{"name":"Heading 3 Char","type":"Character","characterFormat":{"fontSize":12,"fontFamily":"Calibri Light","fontColor":"#1F3763","fontSizeBidi":12,"fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Heading 4","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level4","listFormat":{}},"characterFormat":{"italic":true,"fontFamily":"Calibri Light","fontColor":"#2F5496","italicBidi":true,"fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 4 Char","next":"Normal"},{"name":"Heading 4 Char","type":"Character","characterFormat":{"italic":true,"fontFamily":"Calibri Light","fontColor":"#2F5496","italicBidi":true,"fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Heading 5","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level5","listFormat":{}},"characterFormat":{"fontFamily":"Calibri Light","fontColor":"#2F5496","fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 5 Char","next":"Normal"},{"name":"Heading 5 Char","type":"Character","characterFormat":{"fontFamily":"Calibri Light","fontColor":"#2F5496","fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Heading 6","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level6","listFormat":{}},"characterFormat":{"fontFamily":"Calibri Light","fontColor":"#1F3763","fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 6 Char","next":"Normal"},{"name":"Heading 6 Char","type":"Character","characterFormat":{"fontFamily":"Calibri Light","fontColor":"#1F3763","fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"}],"lists":[],"abstractLists":[],"comments":[],"revisions":[],"customXml":[]}';
    //     editor.open(dateboxdoc);
    //     let json: string = editor.serialize();
    //     expect(json).toBe(expectdoc);
    // });
    // it('table cell validation content control', () => {
    //     console.log('table cell validation content control');
    //     let dateboxdoc: string = '{ "sections": [ { "blocks": [ { "rows": [ { "rowFormat": { "allowBreakAcrossPages": true, "isHeader": false, "height": 0.0, "heightType": "AtLeast", "borders": { "left": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "right": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "top": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "bottom": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } } }, "cells": [ { "blocks": [ { "paragraphFormat": { "styleName": "Normal", "listFormat": {} }, "inlines": [ { "text": "a" } ] } ], "cellFormat": { "columnSpan": 1, "rowSpan": 1, "preferredWidth": 467.5, "preferredWidthType": "Point", "verticalAlignment": "Top", "isSamePaddingAsTable": true, "shading": {}, "borders": { "left": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "right": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "top": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "bottom": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } }, "cellWidth": 467.5 }, "columnIndex": 0, "contentControlProperties": { "lockContentControl": false, "lockContents": false, "color": "#00000000", "type": "RichText", "hasPlaceHolderText": false, "multiline": false, "isTemporary": false, "dateCalendarType": "Gregorian", "isChecked": false } } ] } ], "title": null, "description": null, "grid": [ 234, 234 ], "tableFormat": { "allowAutoFit": true, "leftIndent": 0.0, "tableAlignment": "Left", "preferredWidthType": "Auto", "shading": {}, "borders": { "left": { "lineStyle": "Single", "lineWidth": 0.5, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "right": { "lineStyle": "Single", "lineWidth": 0.5, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "top": { "lineStyle": "Single", "lineWidth": 0.5, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "bottom": { "lineStyle": "Single", "lineWidth": 0.5, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "vertical": { "lineStyle": "Single", "lineWidth": 0.5, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "Single", "lineWidth": 0.5, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } }, "bidi": false } } ] } ], "characterFormat": { "fontSize": 11.0, "fontFamily": "Calibri", "fontSizeBidi": 11.0, "fontFamilyBidi": "Arial" }, "paragraphFormat": { "afterSpacing": 8.0, "lineSpacing": 1.0791666507720948, "lineSpacingType": "Multiple" }, "background": { "color": "#FFFFFFFF" }, "styles": [ { "type": "Paragraph", "name": "Normal", "next": "Normal" }, { "type": "Character", "name": "Default Paragraph Font" }, { "type": "Character", "name": "Placeholder Text", "basedOn": "Default Paragraph Font", "characterFormat": { "fontColor": "#808080FF" } } ], "defaultTabWidth": 35.400001525878909, "formatting": false, "trackChanges": false, "protectionType": "NoProtection", "enforcement": false, "dontUseHTMLParagraphAutoSpacing": false }';
    //     let expectdoc: string = '{"sections":[{"sectionFormat":{"pageWidth":612,"pageHeight":792,"leftMargin":72,"rightMargin":72,"topMargin":72,"bottomMargin":72,"differentFirstPage":false,"differentOddAndEvenPages":false,"headerDistance":36,"footerDistance":36,"bidi":false},"blocks":[{"rows":[{"cells":[{"blocks":[{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[{"characterFormat":{},"text":"a"}]}],"cellFormat":{"borders":{"top":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"left":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"right":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"bottom":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"diagonalDown":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"diagonalUp":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"horizontal":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"vertical":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0}},"shading":{},"preferredWidth":467.5,"preferredWidthType":"Point","cellWidth":467.5,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":0,"contentControlProperties":{"lockContentControl":false,"lockContents":false,"color":"#00000000","type":"RichText","hasPlaceHolderText":false,"multiline":false,"isTemporary":false,"characterFormat":{},"contentControlListItems":[]}}],"rowFormat":{"height":1,"allowBreakAcrossPages":true,"heightType":"AtLeast","isHeader":false,"borders":{"top":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"left":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"right":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"bottom":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"diagonalDown":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"diagonalUp":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"horizontal":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"vertical":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0}},"gridBefore":0,"gridAfter":0}}],"grid":[467.5],"tableFormat":{"borders":{"top":{"hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5},"left":{"hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5},"right":{"hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5},"bottom":{"hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5},"diagonalDown":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"diagonalUp":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"horizontal":{"hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5},"vertical":{"hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5}},"shading":{},"leftIndent":0,"tableAlignment":"Left","topMargin":0,"rightMargin":5.4,"leftMargin":5.4,"bottomMargin":0,"preferredWidthType":"Auto","bidi":false,"allowAutoFit":true},"description":null,"title":null,"columnCount":1}],"headersFooters":{}}],"characterFormat":{"bold":false,"italic":false,"fontSize":11,"fontFamily":"Calibri","underline":"None","strikethrough":"None","baselineAlignment":"Normal","highlightColor":"NoColor","fontColor":"empty","boldBidi":false,"italicBidi":false,"fontSizeBidi":11,"fontFamilyBidi":"Calibri","allCaps":false},"paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":0,"afterSpacing":8,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","listFormat":{},"bidi":false},"defaultTabWidth":35.400001525878906,"trackChanges":false,"enforcement":false,"hashValue":"","saltValue":"","formatting":false,"protectionType":"NoProtection","dontUseHTMLParagraphAutoSpacing":false,"formFieldShading":true,"styles":[{"name":"Normal","type":"Paragraph","paragraphFormat":{"listFormat":{}},"characterFormat":{},"next":"Normal"},{"name":"Default Paragraph Font","type":"Character","characterFormat":{}},{"name":"Placeholder Text","type":"Character","characterFormat":{"fontColor":"#808080FF"},"basedOn":"Default Paragraph Font"},{"name":"Heading 1","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":12,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level1","listFormat":{}},"characterFormat":{"fontSize":16,"fontFamily":"Calibri Light","fontColor":"#2F5496","fontSizeBidi":16,"fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 1 Char","next":"Normal"},{"name":"Heading 1 Char","type":"Character","characterFormat":{"fontSize":16,"fontFamily":"Calibri Light","fontColor":"#2F5496","fontSizeBidi":16,"fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Heading 2","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level2","listFormat":{}},"characterFormat":{"fontSize":13,"fontFamily":"Calibri Light","fontColor":"#2F5496","fontSizeBidi":13,"fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 2 Char","next":"Normal"},{"name":"Heading 2 Char","type":"Character","characterFormat":{"fontSize":13,"fontFamily":"Calibri Light","fontColor":"#2F5496","fontSizeBidi":13,"fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Heading 3","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level3","listFormat":{}},"characterFormat":{"fontSize":12,"fontFamily":"Calibri Light","fontColor":"#1F3763","fontSizeBidi":12,"fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 3 Char","next":"Normal"},{"name":"Heading 3 Char","type":"Character","characterFormat":{"fontSize":12,"fontFamily":"Calibri Light","fontColor":"#1F3763","fontSizeBidi":12,"fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Heading 4","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level4","listFormat":{}},"characterFormat":{"italic":true,"fontFamily":"Calibri Light","fontColor":"#2F5496","italicBidi":true,"fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 4 Char","next":"Normal"},{"name":"Heading 4 Char","type":"Character","characterFormat":{"italic":true,"fontFamily":"Calibri Light","fontColor":"#2F5496","italicBidi":true,"fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Heading 5","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level5","listFormat":{}},"characterFormat":{"fontFamily":"Calibri Light","fontColor":"#2F5496","fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 5 Char","next":"Normal"},{"name":"Heading 5 Char","type":"Character","characterFormat":{"fontFamily":"Calibri Light","fontColor":"#2F5496","fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Heading 6","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level6","listFormat":{}},"characterFormat":{"fontFamily":"Calibri Light","fontColor":"#1F3763","fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 6 Char","next":"Normal"},{"name":"Heading 6 Char","type":"Character","characterFormat":{"fontFamily":"Calibri Light","fontColor":"#1F3763","fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"}],"lists":[],"abstractLists":[],"comments":[],"revisions":[],"customXml":[]}';
    //     editor.open(dateboxdoc);
    //     let json: string = editor.serialize();
    //     expect(json).toBe(expectdoc);
    // });
    it('Custom Xml content control validation', () => {
        console.log('Custom Xml content control validation');
        let customXML: any = {
            "sections": [
                {
                    "blocks": [
                        {
                            "characterFormat": {
                                "fontColor": "empty"
                            },
                            "paragraphFormat": {
                                "styleName": "Normal"
                            },
                            "inlines": [
                                {
                                    "text": "Book author name : ",
                                    "characterFormat": {
                                        "fontColor": "empty"
                                    }
                                },
                                {
                                    "inlines": [
                                        {
                                            "text": "Matt Hank",
                                            "characterFormat": {
                                                "fontColor": "empty"
                                            }
                                        }
                                    ],
                                    "contentControlProperties": {
                                        "lockContentControl": false,
                                        "lockContents": false,
                                        "color": "#00000000",
                                        "type": "Text",
                                        "hasPlaceHolderText": false,
                                        "multiline": false,
                                        "isTemporary": false,
                                        "dateCalendarType": "Gregorian",
                                        "isChecked": false,
                                        "xmlMapping": {
                                            "isMapped": true,
                                            "isWordMl": false,
                                            "xPath": "/books/book/author",
                                            "storeItemId": "2cb1cafd-a41c-4f50-af12-e35d762302f7"
                                        },
                                        "characterFormat": {
                                            "fontColor": "empty"
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            "characterFormat": {
                                "fontColor": "empty"
                            },
                            "paragraphFormat": {
                                "styleName": "Normal"
                            },
                            "inlines": [
                                {
                                    "text": "Book title: ",
                                    "characterFormat": {
                                        "fontColor": "empty"
                                    }
                                },
                                {
                                    "inlines": [
                                        {
                                            "text": "New Migration Paths of the Red Breasted Robin",
                                            "characterFormat": {
                                                "fontColor": "empty"
                                            }
                                        }
                                    ],
                                    "contentControlProperties": {
                                        "lockContentControl": false,
                                        "lockContents": false,
                                        "color": "#00000000",
                                        "type": "Text",
                                        "hasPlaceHolderText": false,
                                        "multiline": false,
                                        "isTemporary": false,
                                        "dateCalendarType": "Gregorian",
                                        "isChecked": false,
                                        "xmlMapping": {
                                            "isMapped": true,
                                            "isWordMl": false,
                                            "xPath": "/books/book/title",
                                            "storeItemId": "2cb1cafd-a41c-4f50-af12-e35d762302f7"
                                        },
                                        "characterFormat": {
                                            "fontColor": "empty"
                                        }
                                    }
                                }
                            ]
                        }
                    ],
                    "headersFooters": {},
                    "sectionFormat": {
                        "headerDistance": 36.0,
                        "footerDistance": 36.0,
                        "pageWidth": 595.29998779296875,
                        "pageHeight": 841.9000244140625,
                        "leftMargin": 50.0,
                        "rightMargin": 20.0,
                        "topMargin": 20.0,
                        "bottomMargin": 20.0,
                        "differentFirstPage": false,
                        "differentOddAndEvenPages": false,
                        "bidi": false,
                        "restartPageNumbering": false,
                        "pageStartingNumber": 0
                    }
                }
            ],
            "characterFormat": {
                "fontColor": "empty"
            },
            "background": {
                "color": "#FFFFFFFF"
            },
            "styles": [
                {
                    "type": "Paragraph",
                    "name": "Normal",
                    "next": "Normal",
                    "characterFormat": {
                        "fontSize": 12.0,
                        "fontFamily": "Times New Roman",
                        "fontColor": "empty",
                        "fontSizeBidi": 12.0
                    }
                },
                {
                    "type": "Character",
                    "name": "Default Paragraph Font",
                    "characterFormat": {
                        "fontColor": "empty"
                    }
                }
            ],
            "customXml": [
                {
                    "itemID": "2cb1cafd-a41c-4f50-af12-e35d762302f7",
                    "xml": "<books>\r\n  <book>\r\n    <author>Matt Hank</author>\r\n    <title>New Migration Paths of the Red Breasted Robin</title>\r\n    <genre>New non-fiction</genre>\r\n    <price>29.95</price>\r\n    <pub_datee>12/1/2007</pub_datee>\r\n    <abstract>New You see them in the spring outside your windows.</abstract>\r\n  </book>\r\n</books>"
                }
            ],
            "defaultTabWidth": 36.0,
            "formatting": false,
            "trackChanges": false,
            "protectionType": "NoProtection",
            "enforcement": false,
            "dontUseHTMLParagraphAutoSpacing": false,
            "alignTablesRowByRow": false,
            "formFieldShading": true
        };
        let expectdoc: any = '{"sections":[{"sectionFormat":{"pageWidth":595.2999877929688,"pageHeight":841.9000244140625,"leftMargin":50,"rightMargin":20,"topMargin":20,"bottomMargin":20,"differentFirstPage":false,"differentOddAndEvenPages":false,"headerDistance":36,"footerDistance":36,"bidi":false},"blocks":[{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{"fontColor":"empty"},"inlines":[{"characterFormat":{"fontColor":"empty"},"text":"Book author name : "},{"inlines":[{"characterFormat":{"fontColor":"empty"},"text":"Matt Hank"}],"contentControlProperties":{"lockContentControl":false,"lockContents":false,"color":"#00000000","type":"Text","hasPlaceHolderText":false,"multiline":false,"isTemporary":false,"xmlMapping":{"isMapped":true,"isWordMl":false,"xPath":"/books/book/author","storeItemId":"2cb1cafd-a41c-4f50-af12-e35d762302f7"},"characterFormat":{"fontColor":"empty"},"contentControlListItems":[]}}]},{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{"fontColor":"empty"},"inlines":[{"characterFormat":{"fontColor":"empty"},"text":"Book title: "},{"inlines":[{"characterFormat":{"fontColor":"empty"},"text":"New Migration Paths of the Red Breasted Robin"}],"contentControlProperties":{"lockContentControl":false,"lockContents":false,"color":"#00000000","type":"Text","hasPlaceHolderText":false,"multiline":false,"isTemporary":false,"xmlMapping":{"isMapped":true,"isWordMl":false,"xPath":"/books/book/title","storeItemId":"2cb1cafd-a41c-4f50-af12-e35d762302f7"},"characterFormat":{"fontColor":"empty"},"contentControlListItems":[]}}]}],"headersFooters":{}}],"characterFormat":{"bold":false,"italic":false,"fontSize":11,"fontFamily":"Calibri","underline":"None","strikethrough":"None","baselineAlignment":"Normal","highlightColor":"NoColor","fontColor":"empty","boldBidi":false,"italicBidi":false,"fontSizeBidi":11,"fontFamilyBidi":"Calibri","allCaps":false},"paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":0,"afterSpacing":0,"lineSpacing":1,"lineSpacingType":"Multiple","listFormat":{},"bidi":false},"defaultTabWidth":36,"trackChanges":false,"enforcement":false,"hashValue":"","saltValue":"","formatting":false,"protectionType":"NoProtection","dontUseHTMLParagraphAutoSpacing":false,"formFieldShading":true,"styles":[{"name":"Normal","type":"Paragraph","paragraphFormat":{"listFormat":{}},"characterFormat":{"fontSize":12,"fontFamily":"Times New Roman","fontColor":"empty","fontSizeBidi":12,"fontFamilyBidi":"Times New Roman"},"next":"Normal"},{"name":"Default Paragraph Font","type":"Character","characterFormat":{"fontColor":"empty"}},{"name":"Heading 1","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":12,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level1","listFormat":{}},"characterFormat":{"fontSize":16,"fontFamily":"Calibri Light","fontColor":"#2F5496","fontSizeBidi":16,"fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 1 Char","next":"Normal"},{"name":"Heading 1 Char","type":"Character","characterFormat":{"fontSize":16,"fontFamily":"Calibri Light","fontColor":"#2F5496","fontSizeBidi":16,"fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Heading 2","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level2","listFormat":{}},"characterFormat":{"fontSize":13,"fontFamily":"Calibri Light","fontColor":"#2F5496","fontSizeBidi":13,"fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 2 Char","next":"Normal"},{"name":"Heading 2 Char","type":"Character","characterFormat":{"fontSize":13,"fontFamily":"Calibri Light","fontColor":"#2F5496","fontSizeBidi":13,"fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Heading 3","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level3","listFormat":{}},"characterFormat":{"fontSize":12,"fontFamily":"Calibri Light","fontColor":"#1F3763","fontSizeBidi":12,"fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 3 Char","next":"Normal"},{"name":"Heading 3 Char","type":"Character","characterFormat":{"fontSize":12,"fontFamily":"Calibri Light","fontColor":"#1F3763","fontSizeBidi":12,"fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Heading 4","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level4","listFormat":{}},"characterFormat":{"italic":true,"fontFamily":"Calibri Light","fontColor":"#2F5496","italicBidi":true,"fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 4 Char","next":"Normal"},{"name":"Heading 4 Char","type":"Character","characterFormat":{"italic":true,"fontFamily":"Calibri Light","fontColor":"#2F5496","italicBidi":true,"fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Heading 5","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level5","listFormat":{}},"characterFormat":{"fontFamily":"Calibri Light","fontColor":"#2F5496","fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 5 Char","next":"Normal"},{"name":"Heading 5 Char","type":"Character","characterFormat":{"fontFamily":"Calibri Light","fontColor":"#2F5496","fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Heading 6","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level6","listFormat":{}},"characterFormat":{"fontFamily":"Calibri Light","fontColor":"#1F3763","fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 6 Char","next":"Normal"},{"name":"Heading 6 Char","type":"Character","characterFormat":{"fontFamily":"Calibri Light","fontColor":"#1F3763","fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"}],"lists":[],"abstractLists":[],"comments":[],"revisions":[],"customXml":[{"itemID":"2cb1cafd-a41c-4f50-af12-e35d762302f7","xml":"<books>\r\n  <book>\r\n    <author>Matt Hank</author>\r\n    <title>New Migration Paths of the Red Breasted Robin</title>\r\n    <genre>New non-fiction</genre>\r\n    <price>29.95</price>\r\n    <pub_datee>12/1/2007</pub_datee>\r\n    <abstract>New You see them in the spring outside your windows.</abstract>\r\n  </book>\r\n</books>"}]}';
        editor.open(JSON.stringify(customXML));
        let json: string = editor.serialize();
        expect(json).toBe(json);
    });
    // it('Block nested Content Control validation', () => {
    //     console.log('Block nested Content Control validation');
    //     let nestedContent: string = '{"sections":[{"blocks":[{"blocks":[{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"styleName":"Normal"},"inlines":[{"inlines":[{"text":"Participants are eligible to be included in the study only if all of the following criteria apply","characterFormat":{"fontColor":"empty"}}],"contentControlProperties":{"lockContentControl":false,"lockContents":true,"color":"#008000FF","type":"RichText","hasPlaceHolderText":false,"multiline":false,"isTemporary":false,"dateCalendarType":"Gregorian","isChecked":false}},{"text":":","characterFormat":{"fontColor":"empty"}}]}],"contentControlProperties":{"lockContentControl":false,"lockContents":false,"tag":"Inclusion Criteria","color":"#939393FF","title":"Inclusion Criteria","type":"RichText","hasPlaceHolderText":false,"multiline":false,"isTemporary":false,"dateCalendarType":"Gregorian","isChecked":false}},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"styleName":"Normal"},"inlines":[]},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"styleName":"Normal"},"inlines":[]}],"headersFooters":{"header":{"blocks":[{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"styleName":"Header","tabs":[{"tabJustification":"Left","position":0.0,"tabLeader":"None","deletePosition":234.0},{"tabJustification":"Left","position":0.0,"tabLeader":"None","deletePosition":468.0},{"tabJustification":"Left","position":135.5,"tabLeader":"None","deletePosition":0.0}]},"inlines":[]}]}},"sectionFormat":{"headerDistance":36.0,"footerDistance":36.0,"pageWidth":612.0,"pageHeight":792.0,"leftMargin":72.0,"rightMargin":72.0,"topMargin":72.0,"bottomMargin":72.0,"differentFirstPage":false,"differentOddAndEvenPages":false,"bidi":false,"restartPageNumbering":false,"pageStartingNumber":0}}],"characterFormat":{"fontSize":11.0,"fontFamily":"Calibri","fontColor":"empty","fontSizeBidi":11.0,"fontFamilyBidi":"Arial"},"paragraphFormat":{"afterSpacing":8.0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple"},"lists":[{"listId":2,"abstractListId":2}],"abstractLists":[{"abstractListId":2,"levels":[{"startAt":1,"restartLevel":0,"listLevelPattern":"Arabic","followCharacter":"Tab","numberFormat":"%1.","characterFormat":{"strikethrough":"None","fontColor":"#00000000"},"paragraphFormat":{"leftIndent":54.0,"firstLineIndent":-18.0,"tabs":[{"tabJustification":"List","position":54.0,"tabLeader":"None","deletePosition":0.0}]}},{"startAt":0,"restartLevel":1,"listLevelPattern":"Arabic","followCharacter":"Tab","characterFormat":{"fontColor":"#00000000"}},{"startAt":0,"restartLevel":2,"listLevelPattern":"Arabic","followCharacter":"Tab","characterFormat":{"fontColor":"#00000000"}},{"startAt":0,"restartLevel":3,"listLevelPattern":"Arabic","followCharacter":"Tab","characterFormat":{"fontColor":"#00000000"}},{"startAt":0,"restartLevel":4,"listLevelPattern":"Arabic","followCharacter":"Tab","characterFormat":{"fontColor":"#00000000"}},{"startAt":0,"restartLevel":5,"listLevelPattern":"Arabic","followCharacter":"Tab","characterFormat":{"fontColor":"#00000000"}},{"startAt":0,"restartLevel":6,"listLevelPattern":"Arabic","followCharacter":"Tab","characterFormat":{"fontColor":"#00000000"}},{"startAt":0,"restartLevel":7,"listLevelPattern":"Arabic","followCharacter":"Tab","characterFormat":{"fontColor":"#00000000"}},{"startAt":0,"restartLevel":8,"listLevelPattern":"Arabic","followCharacter":"Tab","characterFormat":{"fontColor":"#00000000"}}]}],"background":{"color":"#FFFFFFFF"},"styles":[{"type":"Paragraph","name":"Normal","next":"Normal","characterFormat":{"fontSize":12.0,"fontFamily":"Times New Roman","fontColor":"empty","fontSizeBidi":12.0,"fontFamilyBidi":"Times New Roman"},"paragraphFormat":{"afterSpacing":0.0,"lineSpacing":1.0,"lineSpacingType":"Multiple"}},{"type":"Paragraph","name":"Heading 1","basedOn":"Normal","next":"Normal","link":"Heading 1 Char","characterFormat":{"fontSize":16.0,"fontFamily":"Calibri Light","fontColor":"#2F5496FF","fontSizeBidi":16.0,"fontFamilyBidi":"Times New Roman"},"paragraphFormat":{"beforeSpacing":12.0,"outlineLevel":"Level1"}},{"type":"Paragraph","name":"Heading 2","basedOn":"Normal","next":"Normal","link":"Heading 2 Char","characterFormat":{"fontSize":13.0,"fontFamily":"Calibri Light","fontColor":"#2F5496FF","fontSizeBidi":13.0,"fontFamilyBidi":"Times New Roman"},"paragraphFormat":{"beforeSpacing":2.0,"outlineLevel":"Level2"}},{"type":"Character","name":"Default Paragraph Font","characterFormat":{"fontColor":"empty"}},{"type":"Character","name":"Placeholder Text","basedOn":"Default Paragraph Font","characterFormat":{"fontColor":"#808080FF"}},{"type":"Character","name":"Heading 1 Char","basedOn":"Default Paragraph Font","characterFormat":{"fontSize":16.0,"fontFamily":"Calibri Light","fontColor":"#2F5496FF","fontSizeBidi":16.0,"fontFamilyBidi":"Times New Roman"}},{"type":"Character","name":"Hyperlink","basedOn":"Default Paragraph Font","characterFormat":{"underline":"Single","fontColor":"#0563C1FF"}},{"type":"Character","name":"Unresolved Mention","basedOn":"Default Paragraph Font","characterFormat":{"fontColor":"#605E5CFF"}},{"type":"Paragraph","name":"List Paragraph","basedOn":"Normal","next":"List Paragraph","characterFormat":{"fontColor":"empty"},"paragraphFormat":{"leftIndent":36.0,"contextualSpacing":true}},{"type":"Paragraph","name":"Header","basedOn":"Normal","next":"Header","link":"Header Char","characterFormat":{"fontColor":"empty"},"paragraphFormat":{"tabs":[{"tabJustification":"Center","position":234.0,"tabLeader":"None","deletePosition":0.0},{"tabJustification":"Right","position":468.0,"tabLeader":"None","deletePosition":0.0}]}},{"type":"Character","name":"Header Char","basedOn":"Default Paragraph Font","characterFormat":{"fontColor":"empty"}},{"type":"Paragraph","name":"Footer","basedOn":"Normal","next":"Footer","link":"Footer Char","characterFormat":{"fontColor":"empty"},"paragraphFormat":{"tabs":[{"tabJustification":"Center","position":234.0,"tabLeader":"None","deletePosition":0.0},{"tabJustification":"Right","position":468.0,"tabLeader":"None","deletePosition":0.0}]}},{"type":"Character","name":"Footer Char","basedOn":"Default Paragraph Font","characterFormat":{"fontColor":"empty"}},{"type":"Paragraph","name":"Balloon Text","basedOn":"Normal","next":"Balloon Text","link":"Balloon Text Char","characterFormat":{"fontSize":9.0,"fontFamily":"Segoe UI","fontColor":"empty","fontSizeBidi":9.0,"fontFamilyBidi":"Segoe UI"}},{"type":"Character","name":"Balloon Text Char","basedOn":"Default Paragraph Font","characterFormat":{"fontSize":9.0,"fontFamily":"Segoe UI","fontColor":"empty","fontSizeBidi":9.0,"fontFamilyBidi":"Segoe UI"}},{"type":"Paragraph","name":"Paragraph","next":"Paragraph","link":"Paragraph Char","characterFormat":{"fontSize":12.0,"fontFamily":"Times New Roman","fontColor":"empty","fontSizeBidi":12.0,"fontFamilyBidi":"Times New Roman"},"paragraphFormat":{"afterSpacing":12.0,"lineSpacing":1.0,"lineSpacingType":"Multiple"}},{"type":"Character","name":"Paragraph Char","basedOn":"Default Paragraph Font","characterFormat":{"fontSize":12.0,"fontFamily":"Times New Roman","fontColor":"empty","fontSizeBidi":12.0,"fontFamilyBidi":"Times New Roman"}},{"type":"Character","name":"TableText 9","basedOn":"Default Paragraph Font","characterFormat":{"fontSize":9.0,"fontFamily":"Times New Roman","fontColor":"empty","fontFamilyBidi":"Times New Roman"}},{"type":"Character","name":"Heading 2 Char","basedOn":"Default Paragraph Font","characterFormat":{"fontSize":13.0,"fontFamily":"Calibri Light","fontColor":"#2F5496FF","fontSizeBidi":13.0,"fontFamilyBidi":"Times New Roman"}},{"type":"Paragraph","name":"TableText Footnote","next":"TableText Footnote","characterFormat":{"fontSize":10.0,"fontFamily":"Times New Roman","fontColor":"empty","fontSizeBidi":10.0,"fontFamilyBidi":"Times New Roman"},"paragraphFormat":{"afterSpacing":0.0,"lineSpacing":1.0,"lineSpacingType":"Multiple","tabs":[{"tabJustification":"Left","position":18.0,"tabLeader":"None","deletePosition":0.0}]}},{"type":"Character","name":"Instructions","basedOn":"Default Paragraph Font","characterFormat":{"italic":true,"fontColor":"#008000FF","italicBidi":true}},{"type":"Paragraph","name":"List Number 3","next":"List Number 3","characterFormat":{"fontSize":12.0,"fontFamily":"Times New Roman","fontColor":"empty","fontSizeBidi":12.0,"fontFamilyBidi":"Times New Roman"},"paragraphFormat":{"afterSpacing":12.0,"lineSpacing":1.0,"lineSpacingType":"Multiple","listFormat":{"listId":2}}}],"defaultTabWidth":36.0,"formatting":false,"trackChanges":false,"protectionType":"NoProtection","enforcement":false,"dontUseHTMLParagraphAutoSpacing":false,"alignTablesRowByRow":false}';
    //     let expectdoc: string = '{"sections":[{"sectionFormat":{"pageWidth":612,"pageHeight":792,"leftMargin":72,"rightMargin":72,"topMargin":72,"bottomMargin":72,"differentFirstPage":false,"differentOddAndEvenPages":false,"headerDistance":36,"footerDistance":36,"bidi":false},"blocks":[{"blocks":[{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{"fontColor":"empty"},"inlines":[{"inlines":[{"characterFormat":{"fontColor":"empty"},"text":"Participants are eligible to be included in the study only if all of the following criteria apply"}],"contentControlProperties":{"lockContentControl":false,"lockContents":true,"color":"#008000FF","type":"RichText","hasPlaceHolderText":false,"multiline":false,"isTemporary":false,"characterFormat":{},"contentControlListItems":[]}},{"characterFormat":{"fontColor":"empty"},"text":":"}]}],"contentControlProperties":{"lockContentControl":false,"lockContents":false,"tag":"Inclusion Criteria","color":"#939393FF","title":"Inclusion Criteria","type":"RichText","hasPlaceHolderText":false,"multiline":false,"isTemporary":false,"characterFormat":{},"contentControlListItems":[]}},{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{"fontColor":"empty"},"inlines":[]},{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{"fontColor":"empty"},"inlines":[]}],"headersFooters":{"header":{"blocks":[{"paragraphFormat":{"styleName":"Header","listFormat":{},"tabs":[{"position":0,"deletePosition":234,"tabJustification":"Left","tabLeader":"None"},{"position":0,"deletePosition":468,"tabJustification":"Left","tabLeader":"None"},{"position":135.5,"deletePosition":0,"tabJustification":"Left","tabLeader":"None"}]},"characterFormat":{"fontColor":"empty"},"inlines":[]}]}}}],"characterFormat":{"bold":false,"italic":false,"fontSize":11,"fontFamily":"Calibri","underline":"None","strikethrough":"None","baselineAlignment":"Normal","highlightColor":"NoColor","fontColor":"empty","boldBidi":false,"italicBidi":false,"fontSizeBidi":11,"fontFamilyBidi":"Calibri","allCaps":false},"paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":0,"afterSpacing":8,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","listFormat":{},"bidi":false},"defaultTabWidth":36,"trackChanges":false,"enforcement":false,"hashValue":"","saltValue":"","formatting":false,"protectionType":"NoProtection","dontUseHTMLParagraphAutoSpacing":false,"formFieldShading":true,"styles":[{"name":"Normal","type":"Paragraph","paragraphFormat":{"afterSpacing":0,"lineSpacing":1,"lineSpacingType":"Multiple","listFormat":{}},"characterFormat":{"fontSize":12,"fontFamily":"Times New Roman","fontColor":"empty","fontSizeBidi":12,"fontFamilyBidi":"Times New Roman"},"next":"Normal"},{"name":"Heading 1","type":"Paragraph","paragraphFormat":{"beforeSpacing":12,"outlineLevel":"Level1","listFormat":{}},"characterFormat":{"fontSize":16,"fontFamily":"Calibri Light","fontColor":"#2F5496FF","fontSizeBidi":16,"fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 1 Char","next":"Normal"},{"name":"Heading 1 Char","type":"Character","characterFormat":{"fontSize":16,"fontFamily":"Calibri Light","fontColor":"#2F5496FF","fontSizeBidi":16,"fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Default Paragraph Font","type":"Character","characterFormat":{"fontColor":"empty"}},{"name":"Heading 2","type":"Paragraph","paragraphFormat":{"beforeSpacing":2,"outlineLevel":"Level2","listFormat":{}},"characterFormat":{"fontSize":13,"fontFamily":"Calibri Light","fontColor":"#2F5496FF","fontSizeBidi":13,"fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 2 Char","next":"Normal"},{"name":"Heading 2 Char","type":"Character","characterFormat":{"fontSize":13,"fontFamily":"Calibri Light","fontColor":"#2F5496FF","fontSizeBidi":13,"fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Placeholder Text","type":"Character","characterFormat":{"fontColor":"#808080FF"},"basedOn":"Default Paragraph Font"},{"name":"Hyperlink","type":"Character","characterFormat":{"underline":"Single","fontColor":"#0563C1FF"},"basedOn":"Default Paragraph Font"},{"name":"Unresolved Mention","type":"Character","characterFormat":{"fontColor":"#605E5CFF"},"basedOn":"Default Paragraph Font"},{"name":"List Paragraph","type":"Paragraph","paragraphFormat":{"leftIndent":36,"listFormat":{},"contextualSpacing":true},"characterFormat":{"fontColor":"empty"},"basedOn":"Normal","next":"List Paragraph"},{"name":"Header","type":"Paragraph","paragraphFormat":{"listFormat":{},"tabs":[{"position":234,"deletePosition":0,"tabJustification":"Center","tabLeader":"None"},{"position":468,"deletePosition":0,"tabJustification":"Right","tabLeader":"None"}]},"characterFormat":{"fontColor":"empty"},"basedOn":"Normal","link":"Header Char","next":"Header"},{"name":"Header Char","type":"Character","characterFormat":{"fontColor":"empty"},"basedOn":"Default Paragraph Font"},{"name":"Footer","type":"Paragraph","paragraphFormat":{"listFormat":{},"tabs":[{"position":234,"deletePosition":0,"tabJustification":"Center","tabLeader":"None"},{"position":468,"deletePosition":0,"tabJustification":"Right","tabLeader":"None"}]},"characterFormat":{"fontColor":"empty"},"basedOn":"Normal","link":"Footer Char","next":"Footer"},{"name":"Footer Char","type":"Character","characterFormat":{"fontColor":"empty"},"basedOn":"Default Paragraph Font"},{"name":"Balloon Text","type":"Paragraph","paragraphFormat":{"listFormat":{}},"characterFormat":{"fontSize":9,"fontFamily":"Segoe UI","fontColor":"empty","fontSizeBidi":9,"fontFamilyBidi":"Segoe UI"},"basedOn":"Normal","link":"Balloon Text Char","next":"Balloon Text"},{"name":"Balloon Text Char","type":"Character","characterFormat":{"fontSize":9,"fontFamily":"Segoe UI","fontColor":"empty","fontSizeBidi":9,"fontFamilyBidi":"Segoe UI"},"basedOn":"Default Paragraph Font"},{"name":"Paragraph","type":"Paragraph","paragraphFormat":{"afterSpacing":12,"lineSpacing":1,"lineSpacingType":"Multiple","listFormat":{}},"characterFormat":{"fontSize":12,"fontFamily":"Times New Roman","fontColor":"empty","fontSizeBidi":12,"fontFamilyBidi":"Times New Roman"},"link":"Paragraph Char","next":"Paragraph"},{"name":"Paragraph Char","type":"Character","characterFormat":{"fontSize":12,"fontFamily":"Times New Roman","fontColor":"empty","fontSizeBidi":12,"fontFamilyBidi":"Times New Roman"},"basedOn":"Default Paragraph Font"},{"name":"TableText 9","type":"Character","characterFormat":{"fontSize":9,"fontFamily":"Times New Roman","fontColor":"empty","fontSizeBidi":9,"fontFamilyBidi":"Times New Roman"},"basedOn":"Default Paragraph Font"},{"name":"TableText Footnote","type":"Paragraph","paragraphFormat":{"afterSpacing":0,"lineSpacing":1,"lineSpacingType":"Multiple","listFormat":{},"tabs":[{"position":18,"deletePosition":0,"tabJustification":"Left","tabLeader":"None"}]},"characterFormat":{"fontSize":10,"fontFamily":"Times New Roman","fontColor":"empty","fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"next":"TableText Footnote"},{"name":"Instructions","type":"Character","characterFormat":{"italic":true,"fontColor":"#008000FF","italicBidi":true},"basedOn":"Default Paragraph Font"},{"name":"List Number 3","type":"Paragraph","paragraphFormat":{"afterSpacing":12,"lineSpacing":1,"lineSpacingType":"Multiple","listFormat":{"listId":2}},"characterFormat":{"fontSize":12,"fontFamily":"Times New Roman","fontColor":"empty","fontSizeBidi":12,"fontFamilyBidi":"Times New Roman"},"next":"List Number 3"},{"name":"Heading 3","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level3","listFormat":{}},"characterFormat":{"fontSize":12,"fontFamily":"Calibri Light","fontColor":"#1F3763","fontSizeBidi":12,"fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 3 Char","next":"Normal"},{"name":"Heading 3 Char","type":"Character","characterFormat":{"fontSize":12,"fontFamily":"Calibri Light","fontColor":"#1F3763","fontSizeBidi":12,"fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Heading 4","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level4","listFormat":{}},"characterFormat":{"italic":true,"fontFamily":"Calibri Light","fontColor":"#2F5496","italicBidi":true,"fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 4 Char","next":"Normal"},{"name":"Heading 4 Char","type":"Character","characterFormat":{"italic":true,"fontFamily":"Calibri Light","fontColor":"#2F5496","italicBidi":true,"fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Heading 5","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level5","listFormat":{}},"characterFormat":{"fontFamily":"Calibri Light","fontColor":"#2F5496","fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 5 Char","next":"Normal"},{"name":"Heading 5 Char","type":"Character","characterFormat":{"fontFamily":"Calibri Light","fontColor":"#2F5496","fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"},{"name":"Heading 6","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level6","listFormat":{}},"characterFormat":{"fontFamily":"Calibri Light","fontColor":"#1F3763","fontFamilyBidi":"Calibri Light"},"basedOn":"Normal","link":"Heading 6 Char","next":"Normal"},{"name":"Heading 6 Char","type":"Character","characterFormat":{"fontFamily":"Calibri Light","fontColor":"#1F3763","fontFamilyBidi":"Calibri Light"},"basedOn":"Default Paragraph Font"}],"lists":[{"abstractListId":2,"levelOverrides":[],"listId":2}],"abstractLists":[{"abstractListId":2,"levels":[{"characterFormat":{"strikethrough":"None","fontColor":"#00000000"},"paragraphFormat":{"leftIndent":54,"firstLineIndent":-18,"listFormat":{},"tabs":[{"position":54,"deletePosition":0,"tabJustification":"List","tabLeader":"None"}]},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"%1.","restartLevel":0,"startAt":1},{"characterFormat":{"fontColor":"#00000000"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":1,"startAt":0},{"characterFormat":{"fontColor":"#00000000"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":2,"startAt":0},{"characterFormat":{"fontColor":"#00000000"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":3,"startAt":0},{"characterFormat":{"fontColor":"#00000000"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":4,"startAt":0},{"characterFormat":{"fontColor":"#00000000"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":5,"startAt":0},{"characterFormat":{"fontColor":"#00000000"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":6,"startAt":0},{"characterFormat":{"fontColor":"#00000000"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":7,"startAt":0},{"characterFormat":{"fontColor":"#00000000"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":8,"startAt":0}]}],"comments":[],"revisions":[],"customXml":[]}';
    //     editor.open(nestedContent);
    //     let json: string = editor.serialize();
    //     expect(json).toBe(expectdoc);
    // });
    // it('inline nested Content Control validation', () => {
    //     console.log('inline nested Content Control validation');
    //     let nestedContent: any = {
    //         "sections": [
    //             {
    //                 "blocks": [
    //                     {
    //                         "blocks": [
    //                             {
    //                                 "characterFormat": {
    //                                     "italic": false,
    //                                     "styleName": "Instructions"
    //                                 },
    //                                 "paragraphFormat": {
    //                                     "styleName": "List Number 3"
    //                                 },
    //                                 "inlines": [
    //                                     {
    //                                         "inlines": [
    //                                             {
    //                                                 "text": "The investigator ",
    //                                                 "characterFormat": {
    //                                                     "fontColor": "empty"
    //                                                 }
    //                                             }
    //                                         ],
    //                                         "contentControlProperties": {
    //                                             "lockContentControl": false,
    //                                             "lockContents": false,
    //                                             "color": "#008000FF",
    //                                             "type": "RichText",
    //                                             "hasPlaceHolderText": false,
    //                                             "multiline": false,
    //                                             "isTemporary": false,
    //                                             "dateCalendarType": "Gregorian",
    //                                             "isChecked": false
    //                                         }
    //                                     }
    //                                 ]
    //                             },
    //                             {
    //                                 "rows": [
    //                                     {
    //                                         "rowFormat": {
    //                                             "allowBreakAcrossPages": true,
    //                                             "isHeader": false,
    //                                             "height": 0.0,
    //                                             "heightType": "AtLeast",
    //                                             "borders": {
    //                                                 "left": {
    //                                                     "lineStyle": "None",
    //                                                     "lineWidth": 0.0,
    //                                                     "shadow": false,
    //                                                     "space": 0.0,
    //                                                     "hasNoneStyle": false
    //                                                 },
    //                                                 "right": {
    //                                                     "lineStyle": "None",
    //                                                     "lineWidth": 0.0,
    //                                                     "shadow": false,
    //                                                     "space": 0.0,
    //                                                     "hasNoneStyle": false
    //                                                 },
    //                                                 "top": {
    //                                                     "lineStyle": "None",
    //                                                     "lineWidth": 0.0,
    //                                                     "shadow": false,
    //                                                     "space": 0.0,
    //                                                     "hasNoneStyle": false
    //                                                 },
    //                                                 "bottom": {
    //                                                     "lineStyle": "None",
    //                                                     "lineWidth": 0.0,
    //                                                     "shadow": false,
    //                                                     "space": 0.0,
    //                                                     "hasNoneStyle": false
    //                                                 },
    //                                                 "vertical": {
    //                                                     "lineStyle": "None",
    //                                                     "lineWidth": 0.0,
    //                                                     "shadow": false,
    //                                                     "space": 0.0,
    //                                                     "hasNoneStyle": false
    //                                                 },
    //                                                 "horizontal": {
    //                                                     "lineStyle": "None",
    //                                                     "lineWidth": 0.0,
    //                                                     "shadow": false,
    //                                                     "space": 0.0,
    //                                                     "hasNoneStyle": false
    //                                                 },
    //                                                 "diagonalDown": {
    //                                                     "lineStyle": "None",
    //                                                     "lineWidth": 0.0,
    //                                                     "shadow": false,
    //                                                     "space": 0.0,
    //                                                     "hasNoneStyle": false
    //                                                 },
    //                                                 "diagonalUp": {
    //                                                     "lineStyle": "None",
    //                                                     "lineWidth": 0.0,
    //                                                     "shadow": false,
    //                                                     "space": 0.0,
    //                                                     "hasNoneStyle": false
    //                                                 }
    //                                             }
    //                                         },
    //                                         "cells": [
    //                                             {
    //                                                 "blocks": [
    //                                                     {
    //                                                         "characterFormat": {
    //                                                             "fontColor": "empty"
    //                                                         },
    //                                                         "paragraphFormat": {
    //                                                             "styleName": "List Number 3",
    //                                                             "listFormat": {
    //                                                                 "listLevelNumber": 0,
    //                                                                 "listId": -1
    //                                                             }
    //                                                         },
    //                                                         "inlines": [
    //                                                             {
    //                                                                 "text": "Hello world.",
    //                                                                 "characterFormat": {
    //                                                                     "fontColor": "empty"
    //                                                                 }
    //                                                             }
    //                                                         ]
    //                                                     }
    //                                                 ],
    //                                                 "cellFormat": {
    //                                                     "columnSpan": 1,
    //                                                     "rowSpan": 1,
    //                                                     "preferredWidth": 233.75,
    //                                                     "preferredWidthType": "Point",
    //                                                     "verticalAlignment": "Top",
    //                                                     "isSamePaddingAsTable": true,
    //                                                     "borders": {
    //                                                         "left": {
    //                                                             "lineStyle": "None",
    //                                                             "lineWidth": 0.0,
    //                                                             "shadow": false,
    //                                                             "space": 0.0,
    //                                                             "hasNoneStyle": false
    //                                                         },
    //                                                         "right": {
    //                                                             "lineStyle": "None",
    //                                                             "lineWidth": 0.0,
    //                                                             "shadow": false,
    //                                                             "space": 0.0,
    //                                                             "hasNoneStyle": false
    //                                                         },
    //                                                         "top": {
    //                                                             "lineStyle": "None",
    //                                                             "lineWidth": 0.0,
    //                                                             "shadow": false,
    //                                                             "space": 0.0,
    //                                                             "hasNoneStyle": false
    //                                                         },
    //                                                         "bottom": {
    //                                                             "lineStyle": "None",
    //                                                             "lineWidth": 0.0,
    //                                                             "shadow": false,
    //                                                             "space": 0.0,
    //                                                             "hasNoneStyle": false
    //                                                         },
    //                                                         "vertical": {
    //                                                             "lineStyle": "None",
    //                                                             "lineWidth": 0.0,
    //                                                             "shadow": false,
    //                                                             "space": 0.0,
    //                                                             "hasNoneStyle": false
    //                                                         },
    //                                                         "horizontal": {
    //                                                             "lineStyle": "None",
    //                                                             "lineWidth": 0.0,
    //                                                             "shadow": false,
    //                                                             "space": 0.0,
    //                                                             "hasNoneStyle": false
    //                                                         },
    //                                                         "diagonalDown": {
    //                                                             "lineStyle": "None",
    //                                                             "lineWidth": 0.0,
    //                                                             "shadow": false,
    //                                                             "space": 0.0,
    //                                                             "hasNoneStyle": false
    //                                                         },
    //                                                         "diagonalUp": {
    //                                                             "lineStyle": "None",
    //                                                             "lineWidth": 0.0,
    //                                                             "shadow": false,
    //                                                             "space": 0.0,
    //                                                             "hasNoneStyle": false
    //                                                         }
    //                                                     },
    //                                                     "cellWidth": 233.75
    //                                                 }
    //                                             },
    //                                             {
    //                                                 "blocks": [
    //                                                     {
    //                                                         "characterFormat": {
    //                                                             "fontColor": "empty"
    //                                                         },
    //                                                         "paragraphFormat": {
    //                                                             "styleName": "List Number 3",
    //                                                             "listFormat": {
    //                                                                 "listLevelNumber": 0,
    //                                                                 "listId": -1
    //                                                             }
    //                                                         },
    //                                                         "inlines": []
    //                                                     }
    //                                                 ],
    //                                                 "cellFormat": {
    //                                                     "columnSpan": 1,
    //                                                     "rowSpan": 1,
    //                                                     "preferredWidth": 233.75,
    //                                                     "preferredWidthType": "Point",
    //                                                     "verticalAlignment": "Top",
    //                                                     "isSamePaddingAsTable": true,
    //                                                     "borders": {
    //                                                         "left": {
    //                                                             "lineStyle": "None",
    //                                                             "lineWidth": 0.0,
    //                                                             "shadow": false,
    //                                                             "space": 0.0,
    //                                                             "hasNoneStyle": false
    //                                                         },
    //                                                         "right": {
    //                                                             "lineStyle": "None",
    //                                                             "lineWidth": 0.0,
    //                                                             "shadow": false,
    //                                                             "space": 0.0,
    //                                                             "hasNoneStyle": false
    //                                                         },
    //                                                         "top": {
    //                                                             "lineStyle": "None",
    //                                                             "lineWidth": 0.0,
    //                                                             "shadow": false,
    //                                                             "space": 0.0,
    //                                                             "hasNoneStyle": false
    //                                                         },
    //                                                         "bottom": {
    //                                                             "lineStyle": "None",
    //                                                             "lineWidth": 0.0,
    //                                                             "shadow": false,
    //                                                             "space": 0.0,
    //                                                             "hasNoneStyle": false
    //                                                         },
    //                                                         "vertical": {
    //                                                             "lineStyle": "None",
    //                                                             "lineWidth": 0.0,
    //                                                             "shadow": false,
    //                                                             "space": 0.0,
    //                                                             "hasNoneStyle": false
    //                                                         },
    //                                                         "horizontal": {
    //                                                             "lineStyle": "None",
    //                                                             "lineWidth": 0.0,
    //                                                             "shadow": false,
    //                                                             "space": 0.0,
    //                                                             "hasNoneStyle": false
    //                                                         },
    //                                                         "diagonalDown": {
    //                                                             "lineStyle": "None",
    //                                                             "lineWidth": 0.0,
    //                                                             "shadow": false,
    //                                                             "space": 0.0,
    //                                                             "hasNoneStyle": false
    //                                                         },
    //                                                         "diagonalUp": {
    //                                                             "lineStyle": "None",
    //                                                             "lineWidth": 0.0,
    //                                                             "shadow": false,
    //                                                             "space": 0.0,
    //                                                             "hasNoneStyle": false
    //                                                         }
    //                                                     },
    //                                                     "cellWidth": 233.75
    //                                                 }
    //                                             }
    //                                         ]
    //                                     }
    //                                 ],
    //                                 "title": null,
    //                                 "description": null,
    //                                 "tableFormat": {
    //                                     "allowAutoFit": true,
    //                                     "leftIndent": 0.0,
    //                                     "tableAlignment": "Left",
    //                                     "preferredWidthType": "Auto",
    //                                     "borders": {
    //                                         "left": {
    //                                             "lineStyle": "Single",
    //                                             "lineWidth": 0.5,
    //                                             "shadow": false,
    //                                             "space": 0.0,
    //                                             "hasNoneStyle": false
    //                                         },
    //                                         "right": {
    //                                             "lineStyle": "Single",
    //                                             "lineWidth": 0.5,
    //                                             "shadow": false,
    //                                             "space": 0.0,
    //                                             "hasNoneStyle": false
    //                                         },
    //                                         "top": {
    //                                             "lineStyle": "Single",
    //                                             "lineWidth": 0.5,
    //                                             "shadow": false,
    //                                             "space": 0.0,
    //                                             "hasNoneStyle": false
    //                                         },
    //                                         "bottom": {
    //                                             "lineStyle": "Single",
    //                                             "lineWidth": 0.5,
    //                                             "shadow": false,
    //                                             "space": 0.0,
    //                                             "hasNoneStyle": false
    //                                         },
    //                                         "vertical": {
    //                                             "lineStyle": "Single",
    //                                             "lineWidth": 0.5,
    //                                             "shadow": false,
    //                                             "space": 0.0,
    //                                             "hasNoneStyle": false
    //                                         },
    //                                         "horizontal": {
    //                                             "lineStyle": "Single",
    //                                             "lineWidth": 0.5,
    //                                             "shadow": false,
    //                                             "space": 0.0,
    //                                             "hasNoneStyle": false
    //                                         },
    //                                         "diagonalDown": {
    //                                             "lineStyle": "None",
    //                                             "lineWidth": 0.0,
    //                                             "shadow": false,
    //                                             "space": 0.0,
    //                                             "hasNoneStyle": false
    //                                         },
    //                                         "diagonalUp": {
    //                                             "lineStyle": "None",
    //                                             "lineWidth": 0.0,
    //                                             "shadow": false,
    //                                             "space": 0.0,
    //                                             "hasNoneStyle": false
    //                                         }
    //                                     },
    //                                     "bidi": false,
    //                                     "horizontalPositionAbs": "Left",
    //                                     "horizontalPosition": 0.0
    //                                 }
    //                             },
    //                             {
    //                                 "characterFormat": {
    //                                     "fontColor": "empty"
    //                                 },
    //                                 "paragraphFormat": {
    //                                     "styleName": "List Number 3",
    //                                     "listFormat": {
    //                                         "listLevelNumber": 0,
    //                                         "listId": -1
    //                                     }
    //                                 },
    //                                 "inlines": []
    //                             }
    //                         ],
    //                         "contentControlProperties": {
    //                             "lockContentControl": false,
    //                             "lockContents": false,
    //                             "tag": "Preparation",
    //                             "color": "#939393FF",
    //                             "title": "Preparation",
    //                             "type": "RichText",
    //                             "hasPlaceHolderText": false,
    //                             "multiline": false,
    //                             "isTemporary": false,
    //                             "dateCalendarType": "Gregorian",
    //                             "isChecked": false
    //                         }
    //                     },
    //                     {
    //                         "characterFormat": {
    //                             "fontColor": "empty"
    //                         },
    //                         "paragraphFormat": {
    //                             "styleName": "Normal"
    //                         },
    //                         "inlines": []
    //                     }
    //                 ],
    //                 "headersFooters": {},
    //                 "sectionFormat": {
    //                     "headerDistance": 36.0,
    //                     "footerDistance": 36.0,
    //                     "pageWidth": 612.0,
    //                     "pageHeight": 792.0,
    //                     "leftMargin": 72.0,
    //                     "rightMargin": 72.0,
    //                     "topMargin": 72.0,
    //                     "bottomMargin": 72.0,
    //                     "differentFirstPage": false,
    //                     "differentOddAndEvenPages": false,
    //                     "bidi": false,
    //                     "restartPageNumbering": false,
    //                     "pageStartingNumber": 0
    //                 }
    //             }
    //         ],
    //         "characterFormat": {
    //             "fontSize": 11.0,
    //             "fontFamily": "Calibri",
    //             "fontColor": "empty",
    //             "fontSizeBidi": 11.0,
    //             "fontFamilyBidi": "Arial"
    //         },
    //         "paragraphFormat": {
    //             "afterSpacing": 8.0,
    //             "lineSpacing": 1.0791666507720947,
    //             "lineSpacingType": "Multiple"
    //         },
    //         "lists": [
    //             {
    //                 "listId": 1,
    //                 "abstractListId": 1
    //             },
    //             {
    //                 "listId": 7,
    //                 "abstractListId": 7
    //             },
    //             {
    //                 "listId": 10,
    //                 "abstractListId": 10
    //             },
    //             {
    //                 "listId": 11,
    //                 "abstractListId": 4,
    //                 "levelOverrides": [
    //                     {
    //                         "startAt": 1,
    //                         "levelNumber": 0
    //                     }
    //                 ]
    //             },
    //             {
    //                 "listId": 13,
    //                 "abstractListId": 0,
    //                 "levelOverrides": [
    //                     {
    //                         "startAt": 1,
    //                         "levelNumber": 0
    //                     }
    //                 ]
    //             }
    //         ],
    //         "abstractLists": [
    //             {
    //                 "abstractListId": 0,
    //                 "levels": [
    //                     {
    //                         "startAt": 1,
    //                         "restartLevel": 0,
    //                         "listLevelPattern": "Arabic",
    //                         "followCharacter": "Tab",
    //                         "numberFormat": "%1.",
    //                         "characterFormat": {
    //                             "strikethrough": "None",
    //                             "fontColor": "empty",
    //                             "allCaps": false
    //                         },
    //                         "paragraphFormat": {
    //                             "leftIndent": 54.0,
    //                             "firstLineIndent": -18.0,
    //                             "tabs": [
    //                                 {
    //                                     "tabJustification": "List",
    //                                     "position": 54.0,
    //                                     "tabLeader": "None",
    //                                     "deletePosition": 0.0
    //                                 }
    //                             ]
    //                         }
    //                     },
    //                     {
    //                         "startAt": 0,
    //                         "restartLevel": 1,
    //                         "listLevelPattern": "Arabic",
    //                         "followCharacter": "Tab",
    //                         "characterFormat": {
    //                             "fontColor": "empty"
    //                         }
    //                     },
    //                     {
    //                         "startAt": 0,
    //                         "restartLevel": 2,
    //                         "listLevelPattern": "Arabic",
    //                         "followCharacter": "Tab",
    //                         "characterFormat": {
    //                             "fontColor": "empty"
    //                         }
    //                     },
    //                     {
    //                         "startAt": 0,
    //                         "restartLevel": 3,
    //                         "listLevelPattern": "Arabic",
    //                         "followCharacter": "Tab",
    //                         "characterFormat": {
    //                             "fontColor": "empty"
    //                         }
    //                     },
    //                     {
    //                         "startAt": 0,
    //                         "restartLevel": 4,
    //                         "listLevelPattern": "Arabic",
    //                         "followCharacter": "Tab",
    //                         "characterFormat": {
    //                             "fontColor": "empty"
    //                         }
    //                     },
    //                     {
    //                         "startAt": 0,
    //                         "restartLevel": 5,
    //                         "listLevelPattern": "Arabic",
    //                         "followCharacter": "Tab",
    //                         "characterFormat": {
    //                             "fontColor": "empty"
    //                         }
    //                     },
    //                     {
    //                         "startAt": 0,
    //                         "restartLevel": 6,
    //                         "listLevelPattern": "Arabic",
    //                         "followCharacter": "Tab",
    //                         "characterFormat": {
    //                             "fontColor": "empty"
    //                         }
    //                     },
    //                     {
    //                         "startAt": 0,
    //                         "restartLevel": 7,
    //                         "listLevelPattern": "Arabic",
    //                         "followCharacter": "Tab",
    //                         "characterFormat": {
    //                             "fontColor": "empty"
    //                         }
    //                     },
    //                     {
    //                         "startAt": 0,
    //                         "restartLevel": 8,
    //                         "listLevelPattern": "Arabic",
    //                         "followCharacter": "Tab",
    //                         "characterFormat": {
    //                             "fontColor": "empty"
    //                         }
    //                     }
    //                 ]
    //             },
    //             {
    //                 "abstractListId": 1,
    //                 "levels": [
    //                     {
    //                         "listLevelPattern": "Bullet",
    //                         "followCharacter": "Tab",
    //                         "numberFormat": "",
    //                         "characterFormat": {
    //                             "strikethrough": "None",
    //                             "fontFamily": "Symbol",
    //                             "fontColor": "empty",
    //                             "allCaps": false
    //                         },
    //                         "paragraphFormat": {
    //                             "leftIndent": 18.0,
    //                             "firstLineIndent": -18.0,
    //                             "tabs": [
    //                                 {
    //                                     "tabJustification": "List",
    //                                     "position": 18.0,
    //                                     "tabLeader": "None",
    //                                     "deletePosition": 0.0
    //                                 }
    //                             ]
    //                         }
    //                     },
    //                     {
    //                         "startAt": 0,
    //                         "restartLevel": 1,
    //                         "listLevelPattern": "Arabic",
    //                         "followCharacter": "Tab",
    //                         "characterFormat": {
    //                             "fontColor": "empty"
    //                         }
    //                     },
    //                     {
    //                         "startAt": 0,
    //                         "restartLevel": 2,
    //                         "listLevelPattern": "Arabic",
    //                         "followCharacter": "Tab",
    //                         "characterFormat": {
    //                             "fontColor": "empty"
    //                         }
    //                     },
    //                     {
    //                         "startAt": 0,
    //                         "restartLevel": 3,
    //                         "listLevelPattern": "Arabic",
    //                         "followCharacter": "Tab",
    //                         "characterFormat": {
    //                             "fontColor": "empty"
    //                         }
    //                     },
    //                     {
    //                         "startAt": 0,
    //                         "restartLevel": 4,
    //                         "listLevelPattern": "Arabic",
    //                         "followCharacter": "Tab",
    //                         "characterFormat": {
    //                             "fontColor": "empty"
    //                         }
    //                     },
    //                     {
    //                         "startAt": 0,
    //                         "restartLevel": 5,
    //                         "listLevelPattern": "Arabic",
    //                         "followCharacter": "Tab",
    //                         "characterFormat": {
    //                             "fontColor": "empty"
    //                         }
    //                     },
    //                     {
    //                         "startAt": 0,
    //                         "restartLevel": 6,
    //                         "listLevelPattern": "Arabic",
    //                         "followCharacter": "Tab",
    //                         "characterFormat": {
    //                             "fontColor": "empty"
    //                         }
    //                     },
    //                     {
    //                         "startAt": 0,
    //                         "restartLevel": 7,
    //                         "listLevelPattern": "Arabic",
    //                         "followCharacter": "Tab",
    //                         "characterFormat": {
    //                             "fontColor": "empty"
    //                         }
    //                     },
    //                     {
    //                         "startAt": 0,
    //                         "restartLevel": 8,
    //                         "listLevelPattern": "Arabic",
    //                         "followCharacter": "Tab",
    //                         "characterFormat": {
    //                             "fontColor": "empty"
    //                         }
    //                     }
    //                 ]
    //             },
    //             {
    //                 "abstractListId": 4,
    //                 "levels": [
    //                     {
    //                         "startAt": 1,
    //                         "restartLevel": 0,
    //                         "listLevelPattern": "LowLetter",
    //                         "followCharacter": "Tab",
    //                         "numberFormat": "%1.",
    //                         "characterFormat": {
    //                             "strikethrough": "None",
    //                             "fontColor": "empty",
    //                             "allCaps": false
    //                         },
    //                         "paragraphFormat": {
    //                             "leftIndent": 18.0,
    //                             "firstLineIndent": -18.0,
    //                             "tabs": [
    //                                 {
    //                                     "tabJustification": "List",
    //                                     "position": 18.0,
    //                                     "tabLeader": "None",
    //                                     "deletePosition": 0.0
    //                                 }
    //                             ]
    //                         }
    //                     },
    //                     {
    //                         "startAt": 0,
    //                         "restartLevel": 1,
    //                         "listLevelPattern": "Arabic",
    //                         "followCharacter": "Tab",
    //                         "characterFormat": {
    //                             "fontColor": "empty"
    //                         }
    //                     },
    //                     {
    //                         "startAt": 0,
    //                         "restartLevel": 2,
    //                         "listLevelPattern": "Arabic",
    //                         "followCharacter": "Tab",
    //                         "characterFormat": {
    //                             "fontColor": "empty"
    //                         }
    //                     },
    //                     {
    //                         "startAt": 0,
    //                         "restartLevel": 3,
    //                         "listLevelPattern": "Arabic",
    //                         "followCharacter": "Tab",
    //                         "characterFormat": {
    //                             "fontColor": "empty"
    //                         }
    //                     },
    //                     {
    //                         "startAt": 0,
    //                         "restartLevel": 4,
    //                         "listLevelPattern": "Arabic",
    //                         "followCharacter": "Tab",
    //                         "characterFormat": {
    //                             "fontColor": "empty"
    //                         }
    //                     },
    //                     {
    //                         "startAt": 0,
    //                         "restartLevel": 5,
    //                         "listLevelPattern": "Arabic",
    //                         "followCharacter": "Tab",
    //                         "characterFormat": {
    //                             "fontColor": "empty"
    //                         }
    //                     },
    //                     {
    //                         "startAt": 0,
    //                         "restartLevel": 6,
    //                         "listLevelPattern": "Arabic",
    //                         "followCharacter": "Tab",
    //                         "characterFormat": {
    //                             "fontColor": "empty"
    //                         }
    //                     },
    //                     {
    //                         "startAt": 0,
    //                         "restartLevel": 7,
    //                         "listLevelPattern": "Arabic",
    //                         "followCharacter": "Tab",
    //                         "characterFormat": {
    //                             "fontColor": "empty"
    //                         }
    //                     },
    //                     {
    //                         "startAt": 0,
    //                         "restartLevel": 8,
    //                         "listLevelPattern": "Arabic",
    //                         "followCharacter": "Tab",
    //                         "characterFormat": {
    //                             "fontColor": "empty"
    //                         }
    //                     }
    //                 ]
    //             },
    //             {
    //                 "abstractListId": 7,
    //                 "levels": [
    //                     {
    //                         "startAt": 1,
    //                         "restartLevel": 0,
    //                         "listLevelPattern": "Arabic",
    //                         "followCharacter": "Space",
    //                         "numberFormat": "%1.",
    //                         "characterFormat": {
    //                             "bold": true,
    //                             "italic": false,
    //                             "strikethrough": "None",
    //                             "fontSize": 12.0,
    //                             "fontFamily": "Times New Roman",
    //                             "fontColor": "empty",
    //                             "fontFamilyBidi": "Times New Roman",
    //                             "allCaps": true
    //                         },
    //                         "paragraphFormat": {
    //                             "leftIndent": 0.0,
    //                             "firstLineIndent": 0.0,
    //                             "tabs": [
    //                                 {
    //                                     "tabJustification": "List",
    //                                     "position": 0.0,
    //                                     "tabLeader": "None",
    //                                     "deletePosition": 0.0
    //                                 }
    //                             ]
    //                         }
    //                     },
    //                     {
    //                         "startAt": 1,
    //                         "restartLevel": 1,
    //                         "listLevelPattern": "Arabic",
    //                         "followCharacter": "Space",
    //                         "numberFormat": "%1.%2.",
    //                         "characterFormat": {
    //                             "bold": true,
    //                             "italic": false,
    //                             "strikethrough": "None",
    //                             "fontSize": 12.0,
    //                             "fontFamily": "Times New Roman",
    //                             "fontColor": "#00000000",
    //                             "fontFamilyBidi": "Times New Roman",
    //                             "allCaps": false
    //                         },
    //                         "paragraphFormat": {
    //                             "leftIndent": 0.0,
    //                             "firstLineIndent": 0.0,
    //                             "tabs": [
    //                                 {
    //                                     "tabJustification": "List",
    //                                     "position": 0.0,
    //                                     "tabLeader": "None",
    //                                     "deletePosition": 0.0
    //                                 }
    //                             ]
    //                         }
    //                     },
    //                     {
    //                         "startAt": 1,
    //                         "restartLevel": 2,
    //                         "listLevelPattern": "Arabic",
    //                         "followCharacter": "Space",
    //                         "numberFormat": "%1.%2.%3.",
    //                         "characterFormat": {
    //                             "bold": true,
    //                             "italic": false,
    //                             "strikethrough": "None",
    //                             "fontSize": 12.0,
    //                             "fontFamily": "Times New Roman",
    //                             "fontColor": "empty",
    //                             "fontFamilyBidi": "Times New Roman",
    //                             "allCaps": false
    //                         },
    //                         "paragraphFormat": {
    //                             "leftIndent": 0.0,
    //                             "firstLineIndent": 0.0,
    //                             "tabs": [
    //                                 {
    //                                     "tabJustification": "List",
    //                                     "position": 0.0,
    //                                     "tabLeader": "None",
    //                                     "deletePosition": 0.0
    //                                 }
    //                             ]
    //                         }
    //                     },
    //                     {
    //                         "startAt": 1,
    //                         "restartLevel": 3,
    //                         "listLevelPattern": "Arabic",
    //                         "followCharacter": "Space",
    //                         "numberFormat": "%1.%2.%3.%4.",
    //                         "characterFormat": {
    //                             "bold": true,
    //                             "italic": false,
    //                             "strikethrough": "None",
    //                             "fontSize": 12.0,
    //                             "fontFamily": "Times New Roman",
    //                             "fontColor": "empty",
    //                             "fontFamilyBidi": "Times New Roman",
    //                             "allCaps": false
    //                         },
    //                         "paragraphFormat": {
    //                             "leftIndent": 0.0,
    //                             "firstLineIndent": 0.0,
    //                             "tabs": [
    //                                 {
    //                                     "tabJustification": "List",
    //                                     "position": 0.0,
    //                                     "tabLeader": "None",
    //                                     "deletePosition": 0.0
    //                                 }
    //                             ]
    //                         }
    //                     },
    //                     {
    //                         "startAt": 1,
    //                         "restartLevel": 4,
    //                         "listLevelPattern": "Arabic",
    //                         "followCharacter": "Space",
    //                         "numberFormat": "%1.%2.%3.%4.%5.",
    //                         "characterFormat": {
    //                             "bold": true,
    //                             "italic": false,
    //                             "strikethrough": "None",
    //                             "fontSize": 12.0,
    //                             "fontFamily": "Times New Roman",
    //                             "fontColor": "empty",
    //                             "fontFamilyBidi": "Times New Roman",
    //                             "allCaps": false
    //                         },
    //                         "paragraphFormat": {
    //                             "leftIndent": 0.0,
    //                             "firstLineIndent": 0.0,
    //                             "tabs": [
    //                                 {
    //                                     "tabJustification": "List",
    //                                     "position": 0.0,
    //                                     "tabLeader": "None",
    //                                     "deletePosition": 0.0
    //                                 }
    //                             ]
    //                         }
    //                     },
    //                     {
    //                         "startAt": 1,
    //                         "restartLevel": 5,
    //                         "listLevelPattern": "Arabic",
    //                         "followCharacter": "Space",
    //                         "numberFormat": "%1.%2.%3.%4.%5.%6.",
    //                         "characterFormat": {
    //                             "bold": true,
    //                             "italic": false,
    //                             "strikethrough": "None",
    //                             "fontSize": 12.0,
    //                             "fontFamily": "Times New Roman",
    //                             "fontColor": "empty",
    //                             "fontFamilyBidi": "Times New Roman",
    //                             "allCaps": false
    //                         },
    //                         "paragraphFormat": {
    //                             "leftIndent": 0.0,
    //                             "firstLineIndent": 0.0,
    //                             "tabs": [
    //                                 {
    //                                     "tabJustification": "List",
    //                                     "position": 0.0,
    //                                     "tabLeader": "None",
    //                                     "deletePosition": 0.0
    //                                 }
    //                             ]
    //                         }
    //                     },
    //                     {
    //                         "startAt": 1,
    //                         "restartLevel": 6,
    //                         "listLevelPattern": "Arabic",
    //                         "followCharacter": "Space",
    //                         "numberFormat": "%1.%2.%3.%4.%5.%6.%7.",
    //                         "characterFormat": {
    //                             "bold": true,
    //                             "italic": false,
    //                             "strikethrough": "None",
    //                             "fontSize": 12.0,
    //                             "fontFamily": "Times New Roman",
    //                             "fontColor": "empty",
    //                             "fontFamilyBidi": "Times New Roman",
    //                             "allCaps": false
    //                         },
    //                         "paragraphFormat": {
    //                             "leftIndent": 0.0,
    //                             "firstLineIndent": 0.0,
    //                             "tabs": [
    //                                 {
    //                                     "tabJustification": "List",
    //                                     "position": 0.0,
    //                                     "tabLeader": "None",
    //                                     "deletePosition": 0.0
    //                                 }
    //                             ]
    //                         }
    //                     },
    //                     {
    //                         "startAt": 1,
    //                         "restartLevel": 7,
    //                         "listLevelPattern": "Arabic",
    //                         "followCharacter": "Space",
    //                         "numberFormat": "%1.%2.%3.%4.%5.%6.%7.%8.",
    //                         "characterFormat": {
    //                             "bold": true,
    //                             "italic": false,
    //                             "strikethrough": "None",
    //                             "fontSize": 12.0,
    //                             "fontFamily": "Times New Roman",
    //                             "fontColor": "empty",
    //                             "fontFamilyBidi": "Times New Roman",
    //                             "allCaps": false
    //                         },
    //                         "paragraphFormat": {
    //                             "leftIndent": 0.0,
    //                             "firstLineIndent": 0.0,
    //                             "tabs": [
    //                                 {
    //                                     "tabJustification": "List",
    //                                     "position": 0.0,
    //                                     "tabLeader": "None",
    //                                     "deletePosition": 0.0
    //                                 }
    //                             ]
    //                         }
    //                     },
    //                     {
    //                         "startAt": 1,
    //                         "restartLevel": 8,
    //                         "listLevelPattern": "Arabic",
    //                         "followCharacter": "Space",
    //                         "numberFormat": "%1.%2.%3.%4.%5.%6.%7.%8.%9.",
    //                         "characterFormat": {
    //                             "bold": true,
    //                             "italic": false,
    //                             "strikethrough": "None",
    //                             "fontSize": 12.0,
    //                             "fontFamily": "Times New Roman",
    //                             "fontColor": "empty",
    //                             "fontFamilyBidi": "Times New Roman",
    //                             "allCaps": false
    //                         },
    //                         "paragraphFormat": {
    //                             "leftIndent": 0.0,
    //                             "firstLineIndent": 0.0,
    //                             "tabs": [
    //                                 {
    //                                     "tabJustification": "List",
    //                                     "position": 0.0,
    //                                     "tabLeader": "None",
    //                                     "deletePosition": 0.0
    //                                 }
    //                             ]
    //                         }
    //                     }
    //                 ]
    //             },
    //             {
    //                 "abstractListId": 10,
    //                 "levels": [
    //                     {
    //                         "listLevelPattern": "Bullet",
    //                         "followCharacter": "Tab",
    //                         "numberFormat": "",
    //                         "characterFormat": {
    //                             "strikethrough": "None",
    //                             "fontFamily": "Symbol",
    //                             "fontColor": "empty",
    //                             "allCaps": false
    //                         },
    //                         "paragraphFormat": {
    //                             "leftIndent": 54.0,
    //                             "firstLineIndent": -18.0,
    //                             "tabs": [
    //                                 {
    //                                     "tabJustification": "List",
    //                                     "position": 54.0,
    //                                     "tabLeader": "None",
    //                                     "deletePosition": 0.0
    //                                 }
    //                             ]
    //                         }
    //                     },
    //                     {
    //                         "startAt": 0,
    //                         "restartLevel": 1,
    //                         "listLevelPattern": "Arabic",
    //                         "followCharacter": "Tab",
    //                         "characterFormat": {
    //                             "fontColor": "empty"
    //                         }
    //                     },
    //                     {
    //                         "startAt": 0,
    //                         "restartLevel": 2,
    //                         "listLevelPattern": "Arabic",
    //                         "followCharacter": "Tab",
    //                         "characterFormat": {
    //                             "fontColor": "empty"
    //                         }
    //                     },
    //                     {
    //                         "startAt": 0,
    //                         "restartLevel": 3,
    //                         "listLevelPattern": "Arabic",
    //                         "followCharacter": "Tab",
    //                         "characterFormat": {
    //                             "fontColor": "empty"
    //                         }
    //                     },
    //                     {
    //                         "startAt": 0,
    //                         "restartLevel": 4,
    //                         "listLevelPattern": "Arabic",
    //                         "followCharacter": "Tab",
    //                         "characterFormat": {
    //                             "fontColor": "empty"
    //                         }
    //                     },
    //                     {
    //                         "startAt": 0,
    //                         "restartLevel": 5,
    //                         "listLevelPattern": "Arabic",
    //                         "followCharacter": "Tab",
    //                         "characterFormat": {
    //                             "fontColor": "empty"
    //                         }
    //                     },
    //                     {
    //                         "startAt": 0,
    //                         "restartLevel": 6,
    //                         "listLevelPattern": "Arabic",
    //                         "followCharacter": "Tab",
    //                         "characterFormat": {
    //                             "fontColor": "empty"
    //                         }
    //                     },
    //                     {
    //                         "startAt": 0,
    //                         "restartLevel": 7,
    //                         "listLevelPattern": "Arabic",
    //                         "followCharacter": "Tab",
    //                         "characterFormat": {
    //                             "fontColor": "empty"
    //                         }
    //                     },
    //                     {
    //                         "startAt": 0,
    //                         "restartLevel": 8,
    //                         "listLevelPattern": "Arabic",
    //                         "followCharacter": "Tab",
    //                         "characterFormat": {
    //                             "fontColor": "empty"
    //                         }
    //                     }
    //                 ]
    //             }
    //         ],
    //         "background": {
    //             "color": "#FFFFFFFF"
    //         },
    //         "styles": [
    //             {
    //                 "type": "Paragraph",
    //                 "name": "Normal",
    //                 "next": "Normal",
    //                 "characterFormat": {
    //                     "fontSize": 12.0,
    //                     "fontFamily": "Times New Roman",
    //                     "fontColor": "empty",
    //                     "fontSizeBidi": 12.0,
    //                     "fontFamilyBidi": "Times New Roman"
    //                 },
    //                 "paragraphFormat": {
    //                     "afterSpacing": 0.0,
    //                     "lineSpacing": 1.0,
    //                     "lineSpacingType": "Multiple"
    //                 }
    //             },
    //             {
    //                 "type": "Paragraph",
    //                 "name": "Heading 1",
    //                 "next": "Paragraph",
    //                 "link": "Heading 1 Char",
    //                 "characterFormat": {
    //                     "bold": true,
    //                     "fontSize": 12.0,
    //                     "fontFamily": "Times New Roman",
    //                     "fontColor": "empty",
    //                     "boldBidi": true,
    //                     "fontSizeBidi": 14.0,
    //                     "fontFamilyBidi": "Arial",
    //                     "allCaps": true
    //                 },
    //                 "paragraphFormat": {
    //                     "beforeSpacing": 6.0,
    //                     "afterSpacing": 6.0,
    //                     "lineSpacing": 1.0,
    //                     "lineSpacingType": "Multiple",
    //                     "outlineLevel": "Level1",
    //                     "listFormat": {
    //                         "listId": 7
    //                     }
    //                 }
    //             },
    //             {
    //                 "type": "Paragraph",
    //                 "name": "Heading 2",
    //                 "next": "Paragraph",
    //                 "link": "Heading 2 Char",
    //                 "characterFormat": {
    //                     "bold": true,
    //                     "fontSize": 12.0,
    //                     "fontFamily": "Times New Roman",
    //                     "fontColor": "empty",
    //                     "boldBidi": true,
    //                     "fontSizeBidi": 13.0,
    //                     "fontFamilyBidi": "Arial"
    //                 },
    //                 "paragraphFormat": {
    //                     "beforeSpacing": 6.0,
    //                     "afterSpacing": 6.0,
    //                     "lineSpacing": 1.0,
    //                     "lineSpacingType": "Multiple",
    //                     "outlineLevel": "Level2",
    //                     "listFormat": {
    //                         "listLevelNumber": 1,
    //                         "listId": 7
    //                     }
    //                 }
    //             },
    //             {
    //                 "type": "Paragraph",
    //                 "name": "Heading 3",
    //                 "next": "Paragraph",
    //                 "link": "Heading 3 Char",
    //                 "characterFormat": {
    //                     "bold": true,
    //                     "fontSize": 12.0,
    //                     "fontFamily": "Times New Roman",
    //                     "fontColor": "empty",
    //                     "fontSizeBidi": 13.0,
    //                     "fontFamilyBidi": "Arial"
    //                 },
    //                 "paragraphFormat": {
    //                     "beforeSpacing": 6.0,
    //                     "afterSpacing": 6.0,
    //                     "lineSpacing": 1.0,
    //                     "lineSpacingType": "Multiple",
    //                     "outlineLevel": "Level3",
    //                     "listFormat": {
    //                         "listLevelNumber": 2,
    //                         "listId": 7
    //                     }
    //                 }
    //             },
    //             {
    //                 "type": "Paragraph",
    //                 "name": "Heading 4",
    //                 "next": "Paragraph",
    //                 "link": "Heading 4 Char",
    //                 "characterFormat": {
    //                     "bold": true,
    //                     "fontSize": 12.0,
    //                     "fontFamily": "Times New Roman",
    //                     "fontColor": "empty",
    //                     "boldBidi": true,
    //                     "fontSizeBidi": 12.0,
    //                     "fontFamilyBidi": "Arial"
    //                 },
    //                 "paragraphFormat": {
    //                     "beforeSpacing": 6.0,
    //                     "afterSpacing": 6.0,
    //                     "lineSpacing": 1.0,
    //                     "lineSpacingType": "Multiple",
    //                     "outlineLevel": "Level4",
    //                     "listFormat": {
    //                         "listLevelNumber": 3,
    //                         "listId": 7
    //                     }
    //                 }
    //             },
    //             {
    //                 "type": "Paragraph",
    //                 "name": "Heading 5",
    //                 "next": "Paragraph",
    //                 "link": "Heading 5 Char",
    //                 "characterFormat": {
    //                     "bold": true,
    //                     "fontSize": 12.0,
    //                     "fontFamily": "Times New Roman",
    //                     "fontColor": "empty",
    //                     "italicBidi": true,
    //                     "fontSizeBidi": 12.0,
    //                     "fontFamilyBidi": "Arial"
    //                 },
    //                 "paragraphFormat": {
    //                     "leftIndent": 36.0,
    //                     "firstLineIndent": -18.0,
    //                     "beforeSpacing": 6.0,
    //                     "afterSpacing": 6.0,
    //                     "lineSpacing": 1.0,
    //                     "lineSpacingType": "Multiple",
    //                     "outlineLevel": "Level5",
    //                     "listFormat": {
    //                         "listLevelNumber": 4,
    //                         "listId": 7
    //                     },
    //                     "tabs": [
    //                         {
    //                             "tabJustification": "Left",
    //                             "position": 0.0,
    //                             "tabLeader": "None",
    //                             "deletePosition": 0.0
    //                         },
    //                         {
    //                             "tabJustification": "List",
    //                             "position": 36.0,
    //                             "tabLeader": "None",
    //                             "deletePosition": 0.0
    //                         }
    //                     ]
    //                 }
    //             },
    //             {
    //                 "type": "Paragraph",
    //                 "name": "Heading 6",
    //                 "next": "Paragraph",
    //                 "link": "Heading 6 Char",
    //                 "characterFormat": {
    //                     "bold": true,
    //                     "fontSize": 12.0,
    //                     "fontFamily": "Times New Roman",
    //                     "fontColor": "empty",
    //                     "italicBidi": true,
    //                     "fontSizeBidi": 12.0,
    //                     "fontFamilyBidi": "Arial"
    //                 },
    //                 "paragraphFormat": {
    //                     "leftIndent": 36.0,
    //                     "firstLineIndent": -18.0,
    //                     "beforeSpacing": 6.0,
    //                     "afterSpacing": 6.0,
    //                     "lineSpacing": 1.0,
    //                     "lineSpacingType": "Multiple",
    //                     "outlineLevel": "Level6",
    //                     "listFormat": {
    //                         "listLevelNumber": 5,
    //                         "listId": 7
    //                     },
    //                     "tabs": [
    //                         {
    //                             "tabJustification": "Left",
    //                             "position": 0.0,
    //                             "tabLeader": "None",
    //                             "deletePosition": 0.0
    //                         },
    //                         {
    //                             "tabJustification": "List",
    //                             "position": 36.0,
    //                             "tabLeader": "None",
    //                             "deletePosition": 0.0
    //                         }
    //                     ]
    //                 }
    //             },
    //             {
    //                 "type": "Paragraph",
    //                 "name": "Heading 7",
    //                 "next": "Paragraph",
    //                 "link": "Heading 7 Char",
    //                 "characterFormat": {
    //                     "bold": true,
    //                     "fontSize": 12.0,
    //                     "fontFamily": "Times New Roman",
    //                     "fontColor": "empty",
    //                     "italicBidi": true,
    //                     "fontSizeBidi": 12.0,
    //                     "fontFamilyBidi": "Arial"
    //                 },
    //                 "paragraphFormat": {
    //                     "leftIndent": 36.0,
    //                     "firstLineIndent": -18.0,
    //                     "beforeSpacing": 6.0,
    //                     "afterSpacing": 6.0,
    //                     "lineSpacing": 1.0,
    //                     "lineSpacingType": "Multiple",
    //                     "outlineLevel": "Level7",
    //                     "listFormat": {
    //                         "listLevelNumber": 6,
    //                         "listId": 7
    //                     },
    //                     "tabs": [
    //                         {
    //                             "tabJustification": "Left",
    //                             "position": 0.0,
    //                             "tabLeader": "None",
    //                             "deletePosition": 0.0
    //                         },
    //                         {
    //                             "tabJustification": "List",
    //                             "position": 36.0,
    //                             "tabLeader": "None",
    //                             "deletePosition": 0.0
    //                         }
    //                     ]
    //                 }
    //             },
    //             {
    //                 "type": "Paragraph",
    //                 "name": "Heading 8",
    //                 "next": "Paragraph",
    //                 "link": "Heading 8 Char",
    //                 "characterFormat": {
    //                     "bold": true,
    //                     "fontSize": 12.0,
    //                     "fontFamily": "Times New Roman",
    //                     "fontColor": "empty",
    //                     "italicBidi": true,
    //                     "fontSizeBidi": 12.0,
    //                     "fontFamilyBidi": "Arial"
    //                 },
    //                 "paragraphFormat": {
    //                     "leftIndent": 36.0,
    //                     "firstLineIndent": -18.0,
    //                     "beforeSpacing": 6.0,
    //                     "afterSpacing": 6.0,
    //                     "lineSpacing": 1.0,
    //                     "lineSpacingType": "Multiple",
    //                     "outlineLevel": "Level8",
    //                     "listFormat": {
    //                         "listLevelNumber": 7,
    //                         "listId": 7
    //                     },
    //                     "tabs": [
    //                         {
    //                             "tabJustification": "Left",
    //                             "position": 0.0,
    //                             "tabLeader": "None",
    //                             "deletePosition": 0.0
    //                         },
    //                         {
    //                             "tabJustification": "List",
    //                             "position": 36.0,
    //                             "tabLeader": "None",
    //                             "deletePosition": 0.0
    //                         }
    //                     ]
    //                 }
    //             },
    //             {
    //                 "type": "Paragraph",
    //                 "name": "Heading 9",
    //                 "next": "Paragraph",
    //                 "link": "Heading 9 Char",
    //                 "characterFormat": {
    //                     "bold": true,
    //                     "fontSize": 12.0,
    //                     "fontFamily": "Times New Roman",
    //                     "fontColor": "empty",
    //                     "italicBidi": true,
    //                     "fontSizeBidi": 12.0,
    //                     "fontFamilyBidi": "Arial"
    //                 },
    //                 "paragraphFormat": {
    //                     "leftIndent": 36.0,
    //                     "firstLineIndent": -18.0,
    //                     "beforeSpacing": 6.0,
    //                     "afterSpacing": 6.0,
    //                     "lineSpacing": 1.0,
    //                     "lineSpacingType": "Multiple",
    //                     "outlineLevel": "Level9",
    //                     "listFormat": {
    //                         "listLevelNumber": 8,
    //                         "listId": 7
    //                     },
    //                     "tabs": [
    //                         {
    //                             "tabJustification": "Left",
    //                             "position": 0.0,
    //                             "tabLeader": "None",
    //                             "deletePosition": 0.0
    //                         },
    //                         {
    //                             "tabJustification": "List",
    //                             "position": 36.0,
    //                             "tabLeader": "None",
    //                             "deletePosition": 0.0
    //                         }
    //                     ]
    //                 }
    //             },
    //             {
    //                 "type": "Character",
    //                 "name": "Default Paragraph Font",
    //                 "characterFormat": {
    //                     "fontColor": "empty"
    //                 }
    //             },
    //             {
    //                 "type": "Paragraph",
    //                 "name": "List Alpha Table",
    //                 "next": "List Alpha Table",
    //                 "characterFormat": {
    //                     "fontSize": 10.0,
    //                     "fontFamily": "Times New Roman",
    //                     "fontColor": "empty",
    //                     "fontSizeBidi": 10.0,
    //                     "fontFamilyBidi": "Times New Roman"
    //                 },
    //                 "paragraphFormat": {
    //                     "afterSpacing": 0.0,
    //                     "lineSpacing": 1.0,
    //                     "lineSpacingType": "Multiple",
    //                     "listFormat": {
    //                         "listId": 11
    //                     }
    //                 }
    //             },
    //             {
    //                 "type": "Character",
    //                 "name": "Placeholder Text",
    //                 "basedOn": "Default Paragraph Font",
    //                 "characterFormat": {
    //                     "fontColor": "#808080FF"
    //                 }
    //             },
    //             {
    //                 "type": "Character",
    //                 "name": "Heading 1 Char",
    //                 "basedOn": "Default Paragraph Font",
    //                 "characterFormat": {
    //                     "bold": true,
    //                     "fontSize": 12.0,
    //                     "fontFamily": "Times New Roman",
    //                     "fontColor": "empty",
    //                     "boldBidi": true,
    //                     "fontSizeBidi": 14.0,
    //                     "fontFamilyBidi": "Arial",
    //                     "allCaps": true
    //                 }
    //             },
    //             {
    //                 "type": "Character",
    //                 "name": "Heading 2 Char",
    //                 "basedOn": "Default Paragraph Font",
    //                 "characterFormat": {
    //                     "bold": true,
    //                     "fontSize": 12.0,
    //                     "fontFamily": "Times New Roman",
    //                     "fontColor": "empty",
    //                     "boldBidi": true,
    //                     "fontSizeBidi": 13.0,
    //                     "fontFamilyBidi": "Arial"
    //                 }
    //             },
    //             {
    //                 "type": "Character",
    //                 "name": "Heading 3 Char",
    //                 "basedOn": "Default Paragraph Font",
    //                 "characterFormat": {
    //                     "bold": true,
    //                     "fontSize": 12.0,
    //                     "fontFamily": "Times New Roman",
    //                     "fontColor": "empty",
    //                     "fontSizeBidi": 13.0,
    //                     "fontFamilyBidi": "Arial"
    //                 }
    //             },
    //             {
    //                 "type": "Character",
    //                 "name": "Heading 4 Char",
    //                 "basedOn": "Default Paragraph Font",
    //                 "characterFormat": {
    //                     "bold": true,
    //                     "fontSize": 12.0,
    //                     "fontFamily": "Times New Roman",
    //                     "fontColor": "empty",
    //                     "boldBidi": true,
    //                     "fontSizeBidi": 12.0,
    //                     "fontFamilyBidi": "Arial"
    //                 }
    //             },
    //             {
    //                 "type": "Character",
    //                 "name": "Heading 5 Char",
    //                 "basedOn": "Default Paragraph Font",
    //                 "characterFormat": {
    //                     "bold": true,
    //                     "fontSize": 12.0,
    //                     "fontFamily": "Times New Roman",
    //                     "fontColor": "empty",
    //                     "italicBidi": true,
    //                     "fontSizeBidi": 12.0,
    //                     "fontFamilyBidi": "Arial"
    //                 }
    //             },
    //             {
    //                 "type": "Character",
    //                 "name": "Heading 6 Char",
    //                 "basedOn": "Default Paragraph Font",
    //                 "characterFormat": {
    //                     "bold": true,
    //                     "fontSize": 12.0,
    //                     "fontFamily": "Times New Roman",
    //                     "fontColor": "empty",
    //                     "italicBidi": true,
    //                     "fontSizeBidi": 12.0,
    //                     "fontFamilyBidi": "Arial"
    //                 }
    //             },
    //             {
    //                 "type": "Character",
    //                 "name": "Heading 7 Char",
    //                 "basedOn": "Default Paragraph Font",
    //                 "characterFormat": {
    //                     "bold": true,
    //                     "fontSize": 12.0,
    //                     "fontFamily": "Times New Roman",
    //                     "fontColor": "empty",
    //                     "italicBidi": true,
    //                     "fontSizeBidi": 12.0,
    //                     "fontFamilyBidi": "Arial"
    //                 }
    //             },
    //             {
    //                 "type": "Character",
    //                 "name": "Heading 8 Char",
    //                 "basedOn": "Default Paragraph Font",
    //                 "characterFormat": {
    //                     "bold": true,
    //                     "fontSize": 12.0,
    //                     "fontFamily": "Times New Roman",
    //                     "fontColor": "empty",
    //                     "italicBidi": true,
    //                     "fontSizeBidi": 12.0,
    //                     "fontFamilyBidi": "Arial"
    //                 }
    //             },
    //             {
    //                 "type": "Character",
    //                 "name": "Heading 9 Char",
    //                 "basedOn": "Default Paragraph Font",
    //                 "characterFormat": {
    //                     "bold": true,
    //                     "fontSize": 12.0,
    //                     "fontFamily": "Times New Roman",
    //                     "fontColor": "empty",
    //                     "italicBidi": true,
    //                     "fontSizeBidi": 12.0,
    //                     "fontFamilyBidi": "Arial"
    //                 }
    //             },
    //             {
    //                 "type": "Paragraph",
    //                 "name": "Paragraph",
    //                 "next": "Paragraph",
    //                 "link": "Paragraph Char",
    //                 "characterFormat": {
    //                     "fontSize": 12.0,
    //                     "fontFamily": "Times New Roman",
    //                     "fontColor": "empty",
    //                     "fontSizeBidi": 12.0,
    //                     "fontFamilyBidi": "Times New Roman"
    //                 },
    //                 "paragraphFormat": {
    //                     "afterSpacing": 12.0,
    //                     "lineSpacing": 1.0,
    //                     "lineSpacingType": "Multiple"
    //                 }
    //             },
    //             {
    //                 "type": "Character",
    //                 "name": "Paragraph Char",
    //                 "basedOn": "Default Paragraph Font",
    //                 "characterFormat": {
    //                     "fontSize": 12.0,
    //                     "fontFamily": "Times New Roman",
    //                     "fontColor": "empty",
    //                     "fontSizeBidi": 12.0,
    //                     "fontFamilyBidi": "Times New Roman"
    //                 }
    //             },
    //             {
    //                 "type": "Paragraph",
    //                 "name": "List Bullet",
    //                 "next": "List Bullet",
    //                 "characterFormat": {
    //                     "fontSize": 12.0,
    //                     "fontFamily": "Times New Roman",
    //                     "fontColor": "empty",
    //                     "fontSizeBidi": 12.0,
    //                     "fontFamilyBidi": "Times New Roman"
    //                 },
    //                 "paragraphFormat": {
    //                     "afterSpacing": 12.0,
    //                     "lineSpacing": 1.0,
    //                     "lineSpacingType": "Multiple",
    //                     "listFormat": {
    //                         "listId": 1
    //                     }
    //                 }
    //             },
    //             {
    //                 "type": "Character",
    //                 "name": "List Bullet 3 Char",
    //                 "basedOn": "Default Paragraph Font",
    //                 "characterFormat": {
    //                     "fontSize": 12.0,
    //                     "fontColor": "empty",
    //                     "fontSizeBidi": 12.0
    //                 }
    //             },
    //             {
    //                 "type": "Paragraph",
    //                 "name": "List Bullet 3",
    //                 "next": "List Bullet 3",
    //                 "link": "List Bullet 3 Char",
    //                 "characterFormat": {
    //                     "fontSize": 12.0,
    //                     "fontColor": "empty",
    //                     "fontSizeBidi": 12.0
    //                 },
    //                 "paragraphFormat": {
    //                     "afterSpacing": 12.0,
    //                     "lineSpacing": 1.0,
    //                     "lineSpacingType": "Multiple",
    //                     "listFormat": {
    //                         "listId": 10
    //                     }
    //                 }
    //             },
    //             {
    //                 "type": "Character",
    //                 "name": "TableText Char",
    //                 "basedOn": "Default Paragraph Font",
    //                 "characterFormat": {
    //                     "fontFamily": "DengXian",
    //                     "fontColor": "empty",
    //                     "fontFamilyBidi": "Arial"
    //                 }
    //             },
    //             {
    //                 "type": "Paragraph",
    //                 "name": "TableText",
    //                 "next": "TableText",
    //                 "link": "TableText Char",
    //                 "characterFormat": {
    //                     "fontFamily": "DengXian",
    //                     "fontColor": "empty",
    //                     "fontFamilyBidi": "Arial"
    //                 },
    //                 "paragraphFormat": {
    //                     "afterSpacing": 0.0,
    //                     "lineSpacing": 1.0,
    //                     "lineSpacingType": "Multiple"
    //                 }
    //             },
    //             {
    //                 "type": "Paragraph",
    //                 "name": "TableText Footnote",
    //                 "next": "TableText Footnote",
    //                 "characterFormat": {
    //                     "fontSize": 10.0,
    //                     "fontFamily": "Times New Roman",
    //                     "fontColor": "empty",
    //                     "fontSizeBidi": 10.0,
    //                     "fontFamilyBidi": "Times New Roman"
    //                 },
    //                 "paragraphFormat": {
    //                     "afterSpacing": 0.0,
    //                     "lineSpacing": 1.0,
    //                     "lineSpacingType": "Multiple",
    //                     "tabs": [
    //                         {
    //                             "tabJustification": "Left",
    //                             "position": 18.0,
    //                             "tabLeader": "None",
    //                             "deletePosition": 0.0
    //                         }
    //                     ]
    //                 }
    //             },
    //             {
    //                 "type": "Character",
    //                 "name": "TableText 12",
    //                 "basedOn": "Default Paragraph Font",
    //                 "characterFormat": {
    //                     "fontSize": 12.0,
    //                     "fontFamily": "Times New Roman",
    //                     "fontColor": "empty",
    //                     "fontFamilyBidi": "Times New Roman"
    //                 }
    //             },
    //             {
    //                 "type": "Character",
    //                 "name": "Hyperlink",
    //                 "basedOn": "Default Paragraph Font",
    //                 "characterFormat": {
    //                     "strikethrough": "None",
    //                     "fontColor": "#0000FFFF"
    //                 }
    //             },
    //             {
    //                 "type": "Paragraph",
    //                 "name": "List Number 3",
    //                 "next": "List Number 3",
    //                 "characterFormat": {
    //                     "fontSize": 12.0,
    //                     "fontFamily": "Times New Roman",
    //                     "fontColor": "empty",
    //                     "fontSizeBidi": 12.0,
    //                     "fontFamilyBidi": "Times New Roman"
    //                 },
    //                 "paragraphFormat": {
    //                     "afterSpacing": 12.0,
    //                     "lineSpacing": 1.0,
    //                     "lineSpacingType": "Multiple",
    //                     "listFormat": {
    //                         "listId": 13
    //                     }
    //                 }
    //             },
    //             {
    //                 "type": "Character",
    //                 "name": "Instructions",
    //                 "basedOn": "Default Paragraph Font",
    //                 "characterFormat": {
    //                     "italic": true,
    //                     "fontColor": "#008000FF",
    //                     "italicBidi": true
    //                 }
    //             }
    //         ],
    //         "defaultTabWidth": 36.0,
    //         "formatting": false,
    //         "trackChanges": false,
    //         "protectionType": "NoProtection",
    //         "enforcement": false,
    //         "dontUseHTMLParagraphAutoSpacing": false,
    //         "alignTablesRowByRow": false
    //     };
    //     let expectdoc: any = '{"sections":[{"sectionFormat":{"pageWidth":612,"pageHeight":792,"leftMargin":72,"rightMargin":72,"topMargin":72,"bottomMargin":72,"differentFirstPage":false,"differentOddAndEvenPages":false,"headerDistance":36,"footerDistance":36,"bidi":false},"blocks":[{"blocks":[{"paragraphFormat":{"styleName":"List Number 3","listFormat":{}},"characterFormat":{"italic":false,"italicBidi":false},"inlines":[{"inlines":[{"characterFormat":{"fontColor":"empty"},"text":"The investigator "}],"contentControlProperties":{"lockContentControl":false,"lockContents":false,"color":"#008000FF","type":"RichText","hasPlaceHolderText":false,"multiline":false,"isTemporary":false,"characterFormat":{},"contentControlListItems":[]}}]},{"rows":[{"cells":[{"blocks":[{"paragraphFormat":{"styleName":"List Number 3","listFormat":{"listId":-1,"listLevelNumber":0}},"characterFormat":{"fontColor":"empty"},"inlines":[{"characterFormat":{"fontColor":"empty"},"text":"Hello world."}]}],"cellFormat":{"borders":{"top":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"left":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"right":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"bottom":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"diagonalDown":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"diagonalUp":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"horizontal":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"vertical":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0}},"shading":{},"preferredWidth":233.75,"preferredWidthType":"Point","cellWidth":233.75,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":0},{"blocks":[{"paragraphFormat":{"styleName":"List Number 3","listFormat":{"listId":-1,"listLevelNumber":0}},"characterFormat":{"fontColor":"empty"},"inlines":[]}],"cellFormat":{"borders":{"top":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"left":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"right":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"bottom":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"diagonalDown":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"diagonalUp":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"horizontal":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"vertical":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0}},"shading":{},"preferredWidth":233.75,"preferredWidthType":"Point","cellWidth":233.75,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":1}],"rowFormat":{"height":1,"allowBreakAcrossPages":true,"heightType":"AtLeast","isHeader":false,"borders":{"top":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"left":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"right":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"bottom":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"diagonalDown":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"diagonalUp":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"horizontal":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"vertical":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0}},"gridBefore":0,"gridAfter":0}}],"grid":[233.75,233.75],"tableFormat":{"borders":{"top":{"hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5},"left":{"hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5},"right":{"hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5},"bottom":{"hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5},"diagonalDown":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"diagonalUp":{"hasNoneStyle":false,"lineStyle":"None","lineWidth":0},"horizontal":{"hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5},"vertical":{"hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5}},"shading":{},"leftIndent":0,"tableAlignment":"Left","topMargin":0,"rightMargin":5.4,"leftMargin":5.4,"bottomMargin":0,"preferredWidthType":"Auto","bidi":false,"allowAutoFit":true},"description":null,"title":null,"columnCount":2},{"paragraphFormat":{"styleName":"List Number 3","listFormat":{"listId":-1,"listLevelNumber":0}},"characterFormat":{"fontColor":"empty"},"inlines":[]}],"contentControlProperties":{"lockContentControl":false,"lockContents":false,"tag":"Preparation","color":"#939393FF","title":"Preparation","type":"RichText","hasPlaceHolderText":false,"multiline":false,"isTemporary":false,"characterFormat":{},"contentControlListItems":[]}},{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{"fontColor":"empty"},"inlines":[]}],"headersFooters":{}}],"characterFormat":{"bold":false,"italic":false,"fontSize":11,"fontFamily":"Calibri","underline":"None","strikethrough":"None","baselineAlignment":"Normal","highlightColor":"NoColor","fontColor":"empty","boldBidi":false,"italicBidi":false,"fontSizeBidi":11,"fontFamilyBidi":"Calibri","allCaps":false},"paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":0,"afterSpacing":8,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","listFormat":{},"bidi":false},"defaultTabWidth":36,"trackChanges":false,"enforcement":false,"hashValue":"","saltValue":"","formatting":false,"protectionType":"NoProtection","dontUseHTMLParagraphAutoSpacing":false,"formFieldShading":true,"styles":[{"name":"Normal","type":"Paragraph","paragraphFormat":{"afterSpacing":0,"lineSpacing":1,"lineSpacingType":"Multiple","listFormat":{}},"characterFormat":{"fontSize":12,"fontFamily":"Times New Roman","fontColor":"empty","fontSizeBidi":12,"fontFamilyBidi":"Times New Roman"},"next":"Normal"},{"name":"Heading 1","type":"Paragraph","paragraphFormat":{"beforeSpacing":6,"afterSpacing":6,"lineSpacing":1,"lineSpacingType":"Multiple","outlineLevel":"Level1","listFormat":{"listId":7}},"characterFormat":{"bold":true,"fontSize":12,"fontFamily":"Times New Roman","fontColor":"empty","boldBidi":true,"fontSizeBidi":12,"fontFamilyBidi":"Times New Roman","allCaps":true},"link":"Heading 1 Char","next":"Paragraph"},{"name":"Heading 1 Char","type":"Character","characterFormat":{"bold":true,"fontSize":12,"fontFamily":"Times New Roman","fontColor":"empty","boldBidi":true,"fontSizeBidi":12,"fontFamilyBidi":"Times New Roman","allCaps":true},"basedOn":"Default Paragraph Font"},{"name":"Default Paragraph Font","type":"Character","characterFormat":{"fontColor":"empty"}},{"name":"Paragraph","type":"Paragraph","paragraphFormat":{"afterSpacing":12,"lineSpacing":1,"lineSpacingType":"Multiple","listFormat":{}},"characterFormat":{"fontSize":12,"fontFamily":"Times New Roman","fontColor":"empty","fontSizeBidi":12,"fontFamilyBidi":"Times New Roman"},"link":"Paragraph Char","next":"Paragraph"},{"name":"Paragraph Char","type":"Character","characterFormat":{"fontSize":12,"fontFamily":"Times New Roman","fontColor":"empty","fontSizeBidi":12,"fontFamilyBidi":"Times New Roman"},"basedOn":"Default Paragraph Font"},{"name":"Heading 2","type":"Paragraph","paragraphFormat":{"beforeSpacing":6,"afterSpacing":6,"lineSpacing":1,"lineSpacingType":"Multiple","outlineLevel":"Level2","listFormat":{"listId":7,"listLevelNumber":1}},"characterFormat":{"bold":true,"fontSize":12,"fontFamily":"Times New Roman","fontColor":"empty","boldBidi":true,"fontSizeBidi":12,"fontFamilyBidi":"Times New Roman"},"link":"Heading 2 Char","next":"Paragraph"},{"name":"Heading 2 Char","type":"Character","characterFormat":{"bold":true,"fontSize":12,"fontFamily":"Times New Roman","fontColor":"empty","boldBidi":true,"fontSizeBidi":12,"fontFamilyBidi":"Times New Roman"},"basedOn":"Default Paragraph Font"},{"name":"Heading 3","type":"Paragraph","paragraphFormat":{"beforeSpacing":6,"afterSpacing":6,"lineSpacing":1,"lineSpacingType":"Multiple","outlineLevel":"Level3","listFormat":{"listId":7,"listLevelNumber":2}},"characterFormat":{"bold":true,"fontSize":12,"fontFamily":"Times New Roman","fontColor":"empty","boldBidi":true,"fontSizeBidi":12,"fontFamilyBidi":"Times New Roman"},"link":"Heading 3 Char","next":"Paragraph"},{"name":"Heading 3 Char","type":"Character","characterFormat":{"bold":true,"fontSize":12,"fontFamily":"Times New Roman","fontColor":"empty","boldBidi":true,"fontSizeBidi":12,"fontFamilyBidi":"Times New Roman"},"basedOn":"Default Paragraph Font"},{"name":"Heading 4","type":"Paragraph","paragraphFormat":{"beforeSpacing":6,"afterSpacing":6,"lineSpacing":1,"lineSpacingType":"Multiple","outlineLevel":"Level4","listFormat":{"listId":7,"listLevelNumber":3}},"characterFormat":{"bold":true,"fontSize":12,"fontFamily":"Times New Roman","fontColor":"empty","boldBidi":true,"fontSizeBidi":12,"fontFamilyBidi":"Times New Roman"},"link":"Heading 4 Char","next":"Paragraph"},{"name":"Heading 4 Char","type":"Character","characterFormat":{"bold":true,"fontSize":12,"fontFamily":"Times New Roman","fontColor":"empty","boldBidi":true,"fontSizeBidi":12,"fontFamilyBidi":"Times New Roman"},"basedOn":"Default Paragraph Font"},{"name":"Heading 5","type":"Paragraph","paragraphFormat":{"leftIndent":36,"firstLineIndent":-18,"beforeSpacing":6,"afterSpacing":6,"lineSpacing":1,"lineSpacingType":"Multiple","outlineLevel":"Level5","listFormat":{"listId":7,"listLevelNumber":4},"tabs":[{"position":0,"deletePosition":0,"tabJustification":"Left","tabLeader":"None"},{"position":36,"deletePosition":0,"tabJustification":"List","tabLeader":"None"}]},"characterFormat":{"bold":true,"fontSize":12,"fontFamily":"Times New Roman","fontColor":"empty","boldBidi":true,"fontSizeBidi":12,"fontFamilyBidi":"Times New Roman"},"link":"Heading 5 Char","next":"Paragraph"},{"name":"Heading 5 Char","type":"Character","characterFormat":{"bold":true,"fontSize":12,"fontFamily":"Times New Roman","fontColor":"empty","boldBidi":true,"fontSizeBidi":12,"fontFamilyBidi":"Times New Roman"},"basedOn":"Default Paragraph Font"},{"name":"Heading 6","type":"Paragraph","paragraphFormat":{"leftIndent":36,"firstLineIndent":-18,"beforeSpacing":6,"afterSpacing":6,"lineSpacing":1,"lineSpacingType":"Multiple","outlineLevel":"Level6","listFormat":{"listId":7,"listLevelNumber":5},"tabs":[{"position":0,"deletePosition":0,"tabJustification":"Left","tabLeader":"None"},{"position":36,"deletePosition":0,"tabJustification":"List","tabLeader":"None"}]},"characterFormat":{"bold":true,"fontSize":12,"fontFamily":"Times New Roman","fontColor":"empty","boldBidi":true,"fontSizeBidi":12,"fontFamilyBidi":"Times New Roman"},"link":"Heading 6 Char","next":"Paragraph"},{"name":"Heading 6 Char","type":"Character","characterFormat":{"bold":true,"fontSize":12,"fontFamily":"Times New Roman","fontColor":"empty","boldBidi":true,"fontSizeBidi":12,"fontFamilyBidi":"Times New Roman"},"basedOn":"Default Paragraph Font"},{"name":"Heading 7","type":"Paragraph","paragraphFormat":{"leftIndent":36,"firstLineIndent":-18,"beforeSpacing":6,"afterSpacing":6,"lineSpacing":1,"lineSpacingType":"Multiple","outlineLevel":"Level7","listFormat":{"listId":7,"listLevelNumber":6},"tabs":[{"position":0,"deletePosition":0,"tabJustification":"Left","tabLeader":"None"},{"position":36,"deletePosition":0,"tabJustification":"List","tabLeader":"None"}]},"characterFormat":{"bold":true,"fontSize":12,"fontFamily":"Times New Roman","fontColor":"empty","boldBidi":true,"fontSizeBidi":12,"fontFamilyBidi":"Times New Roman"},"link":"Heading 7 Char","next":"Paragraph"},{"name":"Heading 7 Char","type":"Character","characterFormat":{"bold":true,"fontSize":12,"fontFamily":"Times New Roman","fontColor":"empty","boldBidi":true,"fontSizeBidi":12,"fontFamilyBidi":"Times New Roman"},"basedOn":"Default Paragraph Font"},{"name":"Heading 8","type":"Paragraph","paragraphFormat":{"leftIndent":36,"firstLineIndent":-18,"beforeSpacing":6,"afterSpacing":6,"lineSpacing":1,"lineSpacingType":"Multiple","outlineLevel":"Level8","listFormat":{"listId":7,"listLevelNumber":7},"tabs":[{"position":0,"deletePosition":0,"tabJustification":"Left","tabLeader":"None"},{"position":36,"deletePosition":0,"tabJustification":"List","tabLeader":"None"}]},"characterFormat":{"bold":true,"fontSize":12,"fontFamily":"Times New Roman","fontColor":"empty","boldBidi":true,"fontSizeBidi":12,"fontFamilyBidi":"Times New Roman"},"link":"Heading 8 Char","next":"Paragraph"},{"name":"Heading 8 Char","type":"Character","characterFormat":{"bold":true,"fontSize":12,"fontFamily":"Times New Roman","fontColor":"empty","boldBidi":true,"fontSizeBidi":12,"fontFamilyBidi":"Times New Roman"},"basedOn":"Default Paragraph Font"},{"name":"Heading 9","type":"Paragraph","paragraphFormat":{"leftIndent":36,"firstLineIndent":-18,"beforeSpacing":6,"afterSpacing":6,"lineSpacing":1,"lineSpacingType":"Multiple","outlineLevel":"Level9","listFormat":{"listId":7,"listLevelNumber":8},"tabs":[{"position":0,"deletePosition":0,"tabJustification":"Left","tabLeader":"None"},{"position":36,"deletePosition":0,"tabJustification":"List","tabLeader":"None"}]},"characterFormat":{"bold":true,"fontSize":12,"fontFamily":"Times New Roman","fontColor":"empty","boldBidi":true,"fontSizeBidi":12,"fontFamilyBidi":"Times New Roman"},"link":"Heading 9 Char","next":"Paragraph"},{"name":"Heading 9 Char","type":"Character","characterFormat":{"bold":true,"fontSize":12,"fontFamily":"Times New Roman","fontColor":"empty","boldBidi":true,"fontSizeBidi":12,"fontFamilyBidi":"Times New Roman"},"basedOn":"Default Paragraph Font"},{"name":"List Alpha Table","type":"Paragraph","paragraphFormat":{"afterSpacing":0,"lineSpacing":1,"lineSpacingType":"Multiple","listFormat":{"listId":11}},"characterFormat":{"fontSize":10,"fontFamily":"Times New Roman","fontColor":"empty","fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"next":"List Alpha Table"},{"name":"Placeholder Text","type":"Character","characterFormat":{"fontColor":"#808080FF"},"basedOn":"Default Paragraph Font"},{"name":"List Bullet","type":"Paragraph","paragraphFormat":{"afterSpacing":12,"lineSpacing":1,"lineSpacingType":"Multiple","listFormat":{"listId":1}},"characterFormat":{"fontSize":12,"fontFamily":"Times New Roman","fontColor":"empty","fontSizeBidi":12,"fontFamilyBidi":"Times New Roman"},"next":"List Bullet"},{"name":"List Bullet 3 Char","type":"Character","characterFormat":{"fontSize":12,"fontColor":"empty","fontSizeBidi":12},"basedOn":"Default Paragraph Font"},{"name":"List Bullet 3","type":"Paragraph","paragraphFormat":{"afterSpacing":12,"lineSpacing":1,"lineSpacingType":"Multiple","listFormat":{"listId":10}},"characterFormat":{"fontSize":12,"fontColor":"empty","fontSizeBidi":12},"link":"List Bullet 3 Char","next":"List Bullet 3"},{"name":"TableText Char","type":"Character","characterFormat":{"fontFamily":"DengXian","fontColor":"empty","fontFamilyBidi":"DengXian"},"basedOn":"Default Paragraph Font"},{"name":"TableText","type":"Paragraph","paragraphFormat":{"afterSpacing":0,"lineSpacing":1,"lineSpacingType":"Multiple","listFormat":{}},"characterFormat":{"fontFamily":"DengXian","fontColor":"empty","fontFamilyBidi":"DengXian"},"link":"TableText Char","next":"TableText"},{"name":"TableText Footnote","type":"Paragraph","paragraphFormat":{"afterSpacing":0,"lineSpacing":1,"lineSpacingType":"Multiple","listFormat":{},"tabs":[{"position":18,"deletePosition":0,"tabJustification":"Left","tabLeader":"None"}]},"characterFormat":{"fontSize":10,"fontFamily":"Times New Roman","fontColor":"empty","fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"next":"TableText Footnote"},{"name":"TableText 12","type":"Character","characterFormat":{"fontSize":12,"fontFamily":"Times New Roman","fontColor":"empty","fontSizeBidi":12,"fontFamilyBidi":"Times New Roman"},"basedOn":"Default Paragraph Font"},{"name":"Hyperlink","type":"Character","characterFormat":{"strikethrough":"None","fontColor":"#0000FFFF"},"basedOn":"Default Paragraph Font"},{"name":"List Number 3","type":"Paragraph","paragraphFormat":{"afterSpacing":12,"lineSpacing":1,"lineSpacingType":"Multiple","listFormat":{"listId":13}},"characterFormat":{"fontSize":12,"fontFamily":"Times New Roman","fontColor":"empty","fontSizeBidi":12,"fontFamilyBidi":"Times New Roman"},"next":"List Number 3"},{"name":"Instructions","type":"Character","characterFormat":{"italic":true,"fontColor":"#008000FF","italicBidi":true},"basedOn":"Default Paragraph Font"}],"lists":[{"abstractListId":1,"levelOverrides":[],"listId":1},{"abstractListId":7,"levelOverrides":[],"listId":7},{"abstractListId":10,"levelOverrides":[],"listId":10},{"abstractListId":4,"levelOverrides":[{"levelNumber":0,"startAt":1}],"listId":11},{"abstractListId":0,"levelOverrides":[{"levelNumber":0,"startAt":1}],"listId":13}],"abstractLists":[{"abstractListId":0,"levels":[{"characterFormat":{"strikethrough":"None","fontColor":"empty","allCaps":false},"paragraphFormat":{"leftIndent":54,"firstLineIndent":-18,"listFormat":{},"tabs":[{"position":54,"deletePosition":0,"tabJustification":"List","tabLeader":"None"}]},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"%1.","restartLevel":0,"startAt":1},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":1,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":2,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":3,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":4,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":5,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":6,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":7,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":8,"startAt":0}]},{"abstractListId":1,"levels":[{"characterFormat":{"fontFamily":"Symbol","strikethrough":"None","fontColor":"empty","fontFamilyBidi":"Symbol","allCaps":false},"paragraphFormat":{"leftIndent":18,"firstLineIndent":-18,"listFormat":{},"tabs":[{"position":18,"deletePosition":0,"tabJustification":"List","tabLeader":"None"}]},"followCharacter":"Tab","listLevelPattern":"Bullet","numberFormat":"","restartLevel":0,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":1,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":2,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":3,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":4,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":5,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":6,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":7,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":8,"startAt":0}]},{"abstractListId":4,"levels":[{"characterFormat":{"strikethrough":"None","fontColor":"empty","allCaps":false},"paragraphFormat":{"leftIndent":18,"firstLineIndent":-18,"listFormat":{},"tabs":[{"position":18,"deletePosition":0,"tabJustification":"List","tabLeader":"None"}]},"followCharacter":"Tab","listLevelPattern":"LowLetter","numberFormat":"%1.","restartLevel":0,"startAt":1},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":1,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":2,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":3,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":4,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":5,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":6,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":7,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":8,"startAt":0}]},{"abstractListId":7,"levels":[{"characterFormat":{"bold":true,"italic":false,"fontSize":12,"fontFamily":"Times New Roman","strikethrough":"None","fontColor":"empty","boldBidi":true,"italicBidi":false,"fontSizeBidi":12,"fontFamilyBidi":"Times New Roman","allCaps":true},"paragraphFormat":{"leftIndent":0,"firstLineIndent":0,"listFormat":{},"tabs":[{"position":0,"deletePosition":0,"tabJustification":"List","tabLeader":"None"}]},"followCharacter":"Space","listLevelPattern":"Arabic","numberFormat":"%1.","restartLevel":0,"startAt":1},{"characterFormat":{"bold":true,"italic":false,"fontSize":12,"fontFamily":"Times New Roman","strikethrough":"None","fontColor":"#00000000","boldBidi":true,"italicBidi":false,"fontSizeBidi":12,"fontFamilyBidi":"Times New Roman","allCaps":false},"paragraphFormat":{"leftIndent":0,"firstLineIndent":0,"listFormat":{},"tabs":[{"position":0,"deletePosition":0,"tabJustification":"List","tabLeader":"None"}]},"followCharacter":"Space","listLevelPattern":"Arabic","numberFormat":"%1.%2.","restartLevel":1,"startAt":1},{"characterFormat":{"bold":true,"italic":false,"fontSize":12,"fontFamily":"Times New Roman","strikethrough":"None","fontColor":"empty","boldBidi":true,"italicBidi":false,"fontSizeBidi":12,"fontFamilyBidi":"Times New Roman","allCaps":false},"paragraphFormat":{"leftIndent":0,"firstLineIndent":0,"listFormat":{},"tabs":[{"position":0,"deletePosition":0,"tabJustification":"List","tabLeader":"None"}]},"followCharacter":"Space","listLevelPattern":"Arabic","numberFormat":"%1.%2.%3.","restartLevel":2,"startAt":1},{"characterFormat":{"bold":true,"italic":false,"fontSize":12,"fontFamily":"Times New Roman","strikethrough":"None","fontColor":"empty","boldBidi":true,"italicBidi":false,"fontSizeBidi":12,"fontFamilyBidi":"Times New Roman","allCaps":false},"paragraphFormat":{"leftIndent":0,"firstLineIndent":0,"listFormat":{},"tabs":[{"position":0,"deletePosition":0,"tabJustification":"List","tabLeader":"None"}]},"followCharacter":"Space","listLevelPattern":"Arabic","numberFormat":"%1.%2.%3.%4.","restartLevel":3,"startAt":1},{"characterFormat":{"bold":true,"italic":false,"fontSize":12,"fontFamily":"Times New Roman","strikethrough":"None","fontColor":"empty","boldBidi":true,"italicBidi":false,"fontSizeBidi":12,"fontFamilyBidi":"Times New Roman","allCaps":false},"paragraphFormat":{"leftIndent":0,"firstLineIndent":0,"listFormat":{},"tabs":[{"position":0,"deletePosition":0,"tabJustification":"List","tabLeader":"None"}]},"followCharacter":"Space","listLevelPattern":"Arabic","numberFormat":"%1.%2.%3.%4.%5.","restartLevel":4,"startAt":1},{"characterFormat":{"bold":true,"italic":false,"fontSize":12,"fontFamily":"Times New Roman","strikethrough":"None","fontColor":"empty","boldBidi":true,"italicBidi":false,"fontSizeBidi":12,"fontFamilyBidi":"Times New Roman","allCaps":false},"paragraphFormat":{"leftIndent":0,"firstLineIndent":0,"listFormat":{},"tabs":[{"position":0,"deletePosition":0,"tabJustification":"List","tabLeader":"None"}]},"followCharacter":"Space","listLevelPattern":"Arabic","numberFormat":"%1.%2.%3.%4.%5.%6.","restartLevel":5,"startAt":1},{"characterFormat":{"bold":true,"italic":false,"fontSize":12,"fontFamily":"Times New Roman","strikethrough":"None","fontColor":"empty","boldBidi":true,"italicBidi":false,"fontSizeBidi":12,"fontFamilyBidi":"Times New Roman","allCaps":false},"paragraphFormat":{"leftIndent":0,"firstLineIndent":0,"listFormat":{},"tabs":[{"position":0,"deletePosition":0,"tabJustification":"List","tabLeader":"None"}]},"followCharacter":"Space","listLevelPattern":"Arabic","numberFormat":"%1.%2.%3.%4.%5.%6.%7.","restartLevel":6,"startAt":1},{"characterFormat":{"bold":true,"italic":false,"fontSize":12,"fontFamily":"Times New Roman","strikethrough":"None","fontColor":"empty","boldBidi":true,"italicBidi":false,"fontSizeBidi":12,"fontFamilyBidi":"Times New Roman","allCaps":false},"paragraphFormat":{"leftIndent":0,"firstLineIndent":0,"listFormat":{},"tabs":[{"position":0,"deletePosition":0,"tabJustification":"List","tabLeader":"None"}]},"followCharacter":"Space","listLevelPattern":"Arabic","numberFormat":"%1.%2.%3.%4.%5.%6.%7.%8.","restartLevel":7,"startAt":1},{"characterFormat":{"bold":true,"italic":false,"fontSize":12,"fontFamily":"Times New Roman","strikethrough":"None","fontColor":"empty","boldBidi":true,"italicBidi":false,"fontSizeBidi":12,"fontFamilyBidi":"Times New Roman","allCaps":false},"paragraphFormat":{"leftIndent":0,"firstLineIndent":0,"listFormat":{},"tabs":[{"position":0,"deletePosition":0,"tabJustification":"List","tabLeader":"None"}]},"followCharacter":"Space","listLevelPattern":"Arabic","numberFormat":"%1.%2.%3.%4.%5.%6.%7.%8.%9.","restartLevel":8,"startAt":1}]},{"abstractListId":10,"levels":[{"characterFormat":{"fontFamily":"Symbol","strikethrough":"None","fontColor":"empty","fontFamilyBidi":"Symbol","allCaps":false},"paragraphFormat":{"leftIndent":54,"firstLineIndent":-18,"listFormat":{},"tabs":[{"position":54,"deletePosition":0,"tabJustification":"List","tabLeader":"None"}]},"followCharacter":"Tab","listLevelPattern":"Bullet","numberFormat":"","restartLevel":0,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":1,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":2,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":3,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":4,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":5,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":6,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":7,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":8,"startAt":0}]}],"comments":[],"revisions":[],"customXml":[]}';
    //     editor.open(JSON.stringify(nestedContent));
    //     let json: string = editor.serialize();
    //     expect(json).toBe(expectdoc);
    // });
    /*it('Blocks with inline nested Content Control validation', () => {
        let blocksNestedContent: string = '{"sections":[{"blocks":[{"blocks":[{"characterFormat":{"fontSize":11.0,"fontFamily":"Calibri","fontColor":"empty","fontSizeBidi":11.0},"paragraphFormat":{"afterSpacing":12.0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","styleName":"Normal"},"inlines":[{"inlines":[{"inlines":[{"text":"The definitions y events (ADEs and SADEs) can be found in","characterFormat":{"fontSize":11.0,"fontFamily":"Calibri","fontColor":"empty","fontSizeBidi":11.0,"fontFamilyBidi":"Arial"}}],"contentControlProperties":{"lockContentControl":false,"lockContents":false,"color":"#000000FF","type":"RichText","hasPlaceHolderText":false,"multiline":false,"isTemporary":false,"dateCalendarType":"Gregorian","isChecked":false}}],"contentControlProperties":{"lockContentControl":false,"lockContents":false,"color":"#000000FF","type":"RichText","hasPlaceHolderText":false,"multiline":false,"isTemporary":false,"dateCalendarType":"Gregorian","isChecked":false}},{"text":" ","characterFormat":{"fontSize":11.0,"fontFamily":"Calibri","fontColor":"empty","fontSizeBidi":11.0,"fontFamilyBidi":"Arial"}},{"text":"Appendix 8","characterFormat":{"fontSize":11.0,"fontFamily":"Calibri","fontColor":"#0000FFFF","fontSizeBidi":11.0,"fontFamilyBidi":"Arial"}},{"text":". ","characterFormat":{"fontSize":11.0,"fontFamily":"Calibri","fontColor":"empty","fontSizeBidi":11.0,"fontFamilyBidi":"Arial"}},{"inlines":[{"inlines":[{"text":"Device deficiencies are covered in","characterFormat":{"fontSize":11.0,"fontFamily":"Calibri","fontColor":"empty","fontSizeBidi":11.0,"fontFamilyBidi":"Arial"}}],"contentControlProperties":{"lockContentControl":false,"lockContents":true,"color":"#000000FF","type":"RichText","hasPlaceHolderText":false,"multiline":false,"isTemporary":false,"dateCalendarType":"Gregorian","isChecked":false}}],"contentControlProperties":{"lockContentControl":false,"lockContents":false,"color":"#000000FF","type":"RichText","hasPlaceHolderText":false,"multiline":false,"isTemporary":false,"dateCalendarType":"Gregorian","isChecked":false}}]}],"contentControlProperties":{"lockContentControl":false,"lockContents":false,"tag":"IN:Device Studies","color":"#008000FF","title":"Device Studies","type":"RichText","hasPlaceHolderText":false,"multiline":false,"isTemporary":false,"dateCalendarType":"Gregorian","isChecked":false}}],"headersFooters":{},"sectionFormat":{"headerDistance":36.0,"footerDistance":36.0,"pageWidth":612.0,"pageHeight":792.0,"leftMargin":72.0,"rightMargin":72.0,"topMargin":72.0,"bottomMargin":72.0,"differentFirstPage":false,"differentOddAndEvenPages":false,"bidi":false,"restartPageNumbering":false,"pageStartingNumber":0}}],"characterFormat":{"fontSize":11.0,"fontFamily":"Calibri","fontColor":"empty","fontSizeBidi":11.0,"fontFamilyBidi":"Arial"},"paragraphFormat":{"afterSpacing":8.0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple"},"lists":[{"listId":0,"abstractListId":0},{"listId":2,"abstractListId":2},{"listId":13,"abstractListId":13},{"listId":17,"abstractListId":17},{"listId":18,"abstractListId":9,"levelOverrides":[{"startAt":1,"levelNumber":0}]},{"listId":20,"abstractListId":1,"levelOverrides":[{"startAt":1,"levelNumber":0}]}],"abstractLists":[{"abstractListId":0,"levels":[{"listLevelPattern":"Bullet","followCharacter":"Tab","numberFormat":"","characterFormat":{"fontFamily":"Symbol","fontColor":"empty"},"paragraphFormat":{"leftIndent":36.0,"firstLineIndent":-18.0,"tabs":[{"tabJustification":"List","position":36.0,"tabLeader":"None","deletePosition":0.0}]}},{"startAt":0,"restartLevel":1,"listLevelPattern":"Arabic","followCharacter":"Tab","characterFormat":{"fontColor":"empty"}},{"startAt":0,"restartLevel":2,"listLevelPattern":"Arabic","followCharacter":"Tab","characterFormat":{"fontColor":"empty"}},{"startAt":0,"restartLevel":3,"listLevelPattern":"Arabic","followCharacter":"Tab","characterFormat":{"fontColor":"empty"}},{"startAt":0,"restartLevel":4,"listLevelPattern":"Arabic","followCharacter":"Tab","characterFormat":{"fontColor":"empty"}},{"startAt":0,"restartLevel":5,"listLevelPattern":"Arabic","followCharacter":"Tab","characterFormat":{"fontColor":"empty"}},{"startAt":0,"restartLevel":6,"listLevelPattern":"Arabic","followCharacter":"Tab","characterFormat":{"fontColor":"empty"}},{"startAt":0,"restartLevel":7,"listLevelPattern":"Arabic","followCharacter":"Tab","characterFormat":{"fontColor":"empty"}},{"startAt":0,"restartLevel":8,"listLevelPattern":"Arabic","followCharacter":"Tab","characterFormat":{"fontColor":"empty"}}]},{"abstractListId":1,"levels":[{"startAt":1,"restartLevel":0,"listLevelPattern":"Arabic","followCharacter":"Tab","numberFormat":"%1.","characterFormat":{"strikethrough":"None","fontColor":"empty","allCaps":false},"paragraphFormat":{"leftIndent":54.0,"firstLineIndent":-18.0,"tabs":[{"tabJustification":"List","position":54.0,"tabLeader":"None","deletePosition":0.0}]}},{"startAt":0,"restartLevel":1,"listLevelPattern":"Arabic","followCharacter":"Tab","characterFormat":{"fontColor":"empty"}},{"startAt":0,"restartLevel":2,"listLevelPattern":"Arabic","followCharacter":"Tab","characterFormat":{"fontColor":"empty"}},{"startAt":0,"restartLevel":3,"listLevelPattern":"Arabic","followCharacter":"Tab","characterFormat":{"fontColor":"empty"}},{"startAt":0,"restartLevel":4,"listLevelPattern":"Arabic","followCharacter":"Tab","characterFormat":{"fontColor":"empty"}},{"startAt":0,"restartLevel":5,"listLevelPattern":"Arabic","followCharacter":"Tab","characterFormat":{"fontColor":"empty"}},{"startAt":0,"restartLevel":6,"listLevelPattern":"Arabic","followCharacter":"Tab","characterFormat":{"fontColor":"empty"}},{"startAt":0,"restartLevel":7,"listLevelPattern":"Arabic","followCharacter":"Tab","characterFormat":{"fontColor":"empty"}},{"startAt":0,"restartLevel":8,"listLevelPattern":"Arabic","followCharacter":"Tab","characterFormat":{"fontColor":"empty"}}]},{"abstractListId":2,"levels":[{"listLevelPattern":"Bullet","followCharacter":"Tab","numberFormat":"","characterFormat":{"strikethrough":"None","fontFamily":"Symbol","fontColor":"empty","allCaps":false},"paragraphFormat":{"leftIndent":18.0,"firstLineIndent":-18.0,"tabs":[{"tabJustification":"List","position":18.0,"tabLeader":"None","deletePosition":0.0}]}},{"startAt":0,"restartLevel":1,"listLevelPattern":"Arabic","followCharacter":"Tab","characterFormat":{"fontColor":"empty"}},{"startAt":0,"restartLevel":2,"listLevelPattern":"Arabic","followCharacter":"Tab","characterFormat":{"fontColor":"empty"}},{"startAt":0,"restartLevel":3,"listLevelPattern":"Arabic","followCharacter":"Tab","characterFormat":{"fontColor":"empty"}},{"startAt":0,"restartLevel":4,"listLevelPattern":"Arabic","followCharacter":"Tab","characterFormat":{"fontColor":"empty"}},{"startAt":0,"restartLevel":5,"listLevelPattern":"Arabic","followCharacter":"Tab","characterFormat":{"fontColor":"empty"}},{"startAt":0,"restartLevel":6,"listLevelPattern":"Arabic","followCharacter":"Tab","characterFormat":{"fontColor":"empty"}},{"startAt":0,"restartLevel":7,"listLevelPattern":"Arabic","followCharacter":"Tab","characterFormat":{"fontColor":"empty"}},{"startAt":0,"restartLevel":8,"listLevelPattern":"Arabic","followCharacter":"Tab","characterFormat":{"fontColor":"empty"}}]},{"abstractListId":9,"levels":[{"startAt":1,"restartLevel":0,"listLevelPattern":"LowLetter","followCharacter":"Tab","numberFormat":"%1.","characterFormat":{"strikethrough":"None","fontColor":"empty","allCaps":false},"paragraphFormat":{"leftIndent":18.0,"firstLineIndent":-18.0,"tabs":[{"tabJustification":"List","position":18.0,"tabLeader":"None","deletePosition":0.0}]}},{"startAt":0,"restartLevel":1,"listLevelPattern":"Arabic","followCharacter":"Tab","characterFormat":{"fontColor":"empty"}},{"startAt":0,"restartLevel":2,"listLevelPattern":"Arabic","followCharacter":"Tab","characterFormat":{"fontColor":"empty"}},{"startAt":0,"restartLevel":3,"listLevelPattern":"Arabic","followCharacter":"Tab","characterFormat":{"fontColor":"empty"}},{"startAt":0,"restartLevel":4,"listLevelPattern":"Arabic","followCharacter":"Tab","characterFormat":{"fontColor":"empty"}},{"startAt":0,"restartLevel":5,"listLevelPattern":"Arabic","followCharacter":"Tab","characterFormat":{"fontColor":"empty"}},{"startAt":0,"restartLevel":6,"listLevelPattern":"Arabic","followCharacter":"Tab","characterFormat":{"fontColor":"empty"}},{"startAt":0,"restartLevel":7,"listLevelPattern":"Arabic","followCharacter":"Tab","characterFormat":{"fontColor":"empty"}},{"startAt":0,"restartLevel":8,"listLevelPattern":"Arabic","followCharacter":"Tab","characterFormat":{"fontColor":"empty"}}]},{"abstractListId":13,"levels":[{"startAt":1,"restartLevel":0,"listLevelPattern":"Arabic","followCharacter":"Space","numberFormat":"%1.","characterFormat":{"bold":true,"italic":false,"strikethrough":"None","fontSize":12.0,"fontFamily":"Times New Roman","fontColor":"empty","fontFamilyBidi":"Times New Roman","allCaps":true},"paragraphFormat":{"leftIndent":0.0,"firstLineIndent":0.0,"tabs":[{"tabJustification":"List","position":0.0,"tabLeader":"None","deletePosition":0.0}]}},{"startAt":1,"restartLevel":1,"listLevelPattern":"Arabic","followCharacter":"Space","numberFormat":"%1.%2.","characterFormat":{"bold":true,"italic":false,"strikethrough":"None","fontSize":12.0,"fontFamily":"Times New Roman","fontColor":"#00000000","fontFamilyBidi":"Times New Roman","allCaps":false},"paragraphFormat":{"leftIndent":0.0,"firstLineIndent":0.0,"tabs":[{"tabJustification":"List","position":0.0,"tabLeader":"None","deletePosition":0.0}]}},{"startAt":1,"restartLevel":2,"listLevelPattern":"Arabic","followCharacter":"Space","numberFormat":"%1.%2.%3.","characterFormat":{"bold":true,"italic":false,"strikethrough":"None","fontSize":12.0,"fontFamily":"Times New Roman","fontColor":"empty","fontFamilyBidi":"Times New Roman","allCaps":false},"paragraphFormat":{"leftIndent":0.0,"firstLineIndent":0.0,"tabs":[{"tabJustification":"List","position":0.0,"tabLeader":"None","deletePosition":0.0}]}}'
        + ',{"startAt":1,"restartLevel":3,"listLevelPattern":"Arabic","followCharacter":"Space","numberFormat":"%1.%2.%3.%4.","characterFormat":{"bold":true,"italic":false,"strikethrough":"None","fontSize":12.0,"fontFamily":"Times New Roman","fontColor":"empty","fontFamilyBidi":"Times New Roman","allCaps":false},"paragraphFormat":{"leftIndent":0.0,"firstLineIndent":0.0,"tabs":[{"tabJustification":"List","position":0.0,"tabLeader":"None","deletePosition":0.0}]}},{"startAt":1,"restartLevel":4,"listLevelPattern":"Arabic","followCharacter":"Space","numberFormat":"%1.%2.%3.%4.%5.","characterFormat":{"bold":true,"italic":false,"strikethrough":"None","fontSize":12.0,"fontFamily":"Times New Roman","fontColor":"empty","fontFamilyBidi":"Times New Roman","allCaps":false},"paragraphFormat":{"leftIndent":0.0,"firstLineIndent":0.0,"tabs":[{"tabJustification":"List","position":0.0,"tabLeader":"None","deletePosition":0.0}]}},{"startAt":1,"restartLevel":5,"listLevelPattern":"Arabic","followCharacter":"Space","numberFormat":"%1.%2.%3.%4.%5.%6.","characterFormat":{"bold":true,"italic":false,"strikethrough":"None","fontSize":12.0,"fontFamily":"Times New Roman","fontColor":"empty","fontFamilyBidi":"Times New Roman","allCaps":false},"paragraphFormat":{"leftIndent":0.0,"firstLineIndent":0.0,"tabs":[{"tabJustification":"List","position":0.0,"tabLeader":"None","deletePosition":0.0}]}},{"startAt":1,"restartLevel":6,"listLevelPattern":"Arabic","followCharacter":"Space","numberFormat":"%1.%2.%3.%4.%5.%6.%7.","characterFormat":{"bold":true,"italic":false,"strikethrough":"None","fontSize":12.0,"fontFamily":"Times New Roman","fontColor":"empty","fontFamilyBidi":"Times New Roman","allCaps":false},"paragraphFormat":{"leftIndent":0.0,"firstLineIndent":0.0,"tabs":[{"tabJustification":"List","position":0.0,"tabLeader":"None","deletePosition":0.0}]}},{"startAt":1,"restartLevel":7,"listLevelPattern":"Arabic","followCharacter":"Space","numberFormat":"%1.%2.%3.%4.%5.%6.%7.%8.","characterFormat":{"bold":true,"italic":false,"strikethrough":"None","fontSize":12.0,"fontFamily":"Times New Roman","fontColor":"empty","fontFamilyBidi":"Times New Roman","allCaps":false},"paragraphFormat":{"leftIndent":0.0,"firstLineIndent":0.0,"tabs":[{"tabJustification":"List","position":0.0,"tabLeader":"None","deletePosition":0.0}]}},{"startAt":1,"restartLevel":8,"listLevelPattern":"Arabic","followCharacter":"Space","numberFormat":"%1.%2.%3.%4.%5.%6.%7.%8.%9.","characterFormat":{"bold":true,"italic":false,"strikethrough":"None","fontSize":12.0,"fontFamily":"Times New Roman","fontColor":"empty","fontFamilyBidi":"Times New Roman","allCaps":false},"paragraphFormat":{"leftIndent":0.0,"firstLineIndent":0.0,"tabs":[{"tabJustification":"List","position":0.0,"tabLeader":"None","deletePosition":0.0}]}}]},{"abstractListId":17,"levels":[{"listLevelPattern":"Bullet","followCharacter":"Tab","numberFormat":"","characterFormat":{"strikethrough":"None","fontFamily":"Symbol","fontColor":"empty","allCaps":false},"paragraphFormat":{"leftIndent":54.0,"firstLineIndent":-18.0,"tabs":[{"tabJustification":"List","position":54.0,"tabLeader":"None","deletePosition":0.0}]}},{"startAt":0,"restartLevel":1,"listLevelPattern":"Arabic","followCharacter":"Tab","characterFormat":{"fontColor":"empty"}},{"startAt":0,"restartLevel":2,"listLevelPattern":"Arabic","followCharacter":"Tab","characterFormat":{"fontColor":"empty"}},{"startAt":0,"restartLevel":3,"listLevelPattern":"Arabic","followCharacter":"Tab","characterFormat":{"fontColor":"empty"}},{"startAt":0,"restartLevel":4,"listLevelPattern":"Arabic","followCharacter":"Tab","characterFormat":{"fontColor":"empty"}},{"startAt":0,"restartLevel":5,"listLevelPattern":"Arabic","followCharacter":"Tab","characterFormat":{"fontColor":"empty"}},{"startAt":0,"restartLevel":6,"listLevelPattern":"Arabic","followCharacter":"Tab","characterFormat":{"fontColor":"empty"}},{"startAt":0,"restartLevel":7,"listLevelPattern":"Arabic","followCharacter":"Tab","characterFormat":{"fontColor":"empty"}},{"startAt":0,"restartLevel":8,"listLevelPattern":"Arabic","followCharacter":"Tab","characterFormat":{"fontColor":"empty"}}]}],"background":{"color":"#FFFFFFFF"},"styles":[{"type":"Paragraph","name":"Normal","next":"Normal","characterFormat":{"fontSize":12.0,"fontFamily":"Times New Roman","fontColor":"empty","fontSizeBidi":12.0,"fontFamilyBidi":"Times New Roman"},"paragraphFormat":{"afterSpacing":0.0,"lineSpacing":1.0,"lineSpacingType":"Multiple"}},{"type":"Paragraph","name":"Heading 1","next":"Paragraph","link":"Heading 1 Char","characterFormat":{"bold":true,"fontSize":12.0,"fontFamily":"Times New Roman","fontColor":"empty","boldBidi":true,"fontSizeBidi":14.0,"fontFamilyBidi":"Arial","allCaps":true},"paragraphFormat":{"beforeSpacing":6.0,"afterSpacing":6.0,"lineSpacing":1.0,"lineSpacingType":"Multiple","outlineLevel":"Level1","listFormat":{"listId":13}}},{"type":"Paragraph","name":"Heading 2","next":"Paragraph","link":"Heading 2 Char","characterFormat":{"bold":true,"fontSize":12.0,"fontFamily":"Times New Roman","fontColor":"empty","boldBidi":true,"fontSizeBidi":13.0,"fontFamilyBidi":"Arial"},"paragraphFormat":{"beforeSpacing":6.0,"afterSpacing":6.0,"lineSpacing":1.0,"lineSpacingType":"Multiple","outlineLevel":"Level2","listFormat":{"listLevelNumber":1,"listId":13}}},{"type":"Paragraph","name":"Heading 3","next":"Paragraph","link":"Heading 3 Char","characterFormat":{"bold":true,"fontSize":12.0,"fontFamily":"Times New Roman","fontColor":"empty","fontSizeBidi":13.0,"fontFamilyBidi":"Arial"},"paragraphFormat":{"beforeSpacing":6.0,"afterSpacing":6.0,"lineSpacing":1.0,"lineSpacingType":"Multiple","outlineLevel":"Level3","listFormat":{"listLevelNumber":2,"listId":13}}},{"type":"Paragraph","name":"Heading 4","next":"Paragraph","link":"Heading 4 Char","characterFormat":{"bold":true,"fontSize":12.0,"fontFamily":"Times New Roman","fontColor":"empty","boldBidi":true,"fontSizeBidi":12.0,"fontFamilyBidi":"Arial"},"paragraphFormat":{"beforeSpacing":6.0,"afterSpacing":6.0,"lineSpacing":1.0,"lineSpacingType":"Multiple","outlineLevel":"Level4","listFormat":{"listLevelNumber":3,"listId":13}}},{"type":"Paragraph","name":"Heading 5","next":"Paragraph","link":"Heading 5 Char","characterFormat":{"bold":true,"fontSize":12.0,"fontFamily":"Times New Roman","fontColor":"empty","italicBidi":true,"fontSizeBidi":12.0,"fontFamilyBidi":"Arial"},"paragraphFormat":{"leftIndent":36.0,"firstLineIndent":-18.0,"beforeSpacing":6.0,"afterSpacing":6.0,"lineSpacing":1.0,"lineSpacingType":"Multiple","outlineLevel":"Level5","listFormat":{"listLevelNumber":4,"listId":13},"tabs":[{"tabJustification":"Left","position":0.0,"tabLeader":"None","deletePosition":0.0},{"tabJustification":"List","position":36.0,"tabLeader":"None","deletePosition":0.0}]}},{"type":"Paragraph","name":"Heading 6","next":"Paragraph","link":"Heading 6 Char","characterFormat":{"bold":true,"fontSize":12.0,"fontFamily":"Times New Roman","fontColor":"empty","italicBidi":true,"fontSizeBidi":12.0,"fontFamilyBidi":"Arial"},"paragraphFormat":{"leftIndent":36.0,"firstLineIndent":-18.0,"beforeSpacing":6.0,"afterSpacing":6.0,"lineSpacing":1.0,"lineSpacingType":"Multiple","outlineLevel":"Level6","listFormat":{"listLevelNumber":5,"listId":13},"tabs":[{"tabJustification":"Left","position":0.0,"tabLeader":"None","deletePosition":0.0},{"tabJustification":"List","position":36.0,"tabLeader":"None","deletePosition":0.0}]}},{"type":"Paragraph","name":"Heading 7","next":"Paragraph","link":"Heading 7 Char","characterFormat":{"bold":true,"fontSize":12.0,"fontFamily":"Times New Roman","fontColor":"empty","italicBidi":true,"fontSizeBidi":12.0,"fontFamilyBidi":"Arial"},"paragraphFormat":{"leftIndent":36.0,"firstLineIndent":-18.0,"beforeSpacing":6.0,"afterSpacing":6.0,"lineSpacing":1.0,"lineSpacingType":"Multiple","outlineLevel":"Level7","listFormat":{"listLevelNumber":6,"listId":13},"tabs":[{"tabJustification":"Left","position":0.0,"tabLeader":"None","deletePosition":0.0},{"tabJustification":"List","position":36.0,"tabLeader":"None","deletePosition":0.0}]}},{"type":"Paragraph","name":"Heading 8","next":"Paragraph","link":"Heading 8 Char","characterFormat":{"bold":true,"fontSize":12.0,"fontFamily":"Times New Roman","fontColor":"empty","italicBidi":true,"fontSizeBidi":12.0,"fontFamilyBidi":"Arial"},"paragraphFormat":{"leftIndent":36.0,"firstLineIndent":-18.0,"beforeSpacing":6.0,"afterSpacing":6.0,"lineSpacing":1.0,"lineSpacingType":"Multiple","outlineLevel":"Level8","listFormat":{"listLevelNumber":7,"listId":13},"tabs":[{"tabJustification":"Left","position":0.0,"tabLeader":"None","deletePosition":0.0},{"tabJustification":"List","position":36.0,"tabLeader":"None","deletePosition":0.0}]}},{"type":"Paragraph","name":"Heading 9","next":"Paragraph","link":"Heading 9 Char","characterFormat":{"bold":true,"fontSize":12.0,"fontFamily":"Times New Roman","fontColor":"empty","italicBidi":true,"fontSizeBidi":12.0,"fontFamilyBidi":"Arial"},"paragraphFormat":{"leftIndent":36.0,"firstLineIndent":-18.0,"beforeSpacing":6.0,"afterSpacing":6.0,"lineSpacing":1.0,"lineSpacingType":"Multiple","outlineLevel":"Level9","listFormat":{"listLevelNumber":8,"listId":13},"tabs":[{"tabJustification":"Left","position":0.0,"tabLeader":"None","deletePosition":0.0},{"tabJustification":"List","position":36.0,"tabLeader":"None","deletePosition":0.0}]}},{"type":"Character","name":"Default Paragraph Font","characterFormat":{"fontColor":"empty"}},{"type":"Paragraph","name":"List Alpha Table","next":"List Alpha Table","characterFormat":{"fontSize":10.0,"fontFamily":"Times New Roman","fontColor":"empty","fontSizeBidi":10.0,"fontFamilyBidi":"Times New Roman"},"paragraphFormat":{"afterSpacing":0.0,"lineSpacing":1.0,"lineSpacingType":"Multiple","listFormat":{"listId":18}}},{"type":"Character","name":"Placeholder Text","basedOn":"Default Paragraph Font","characterFormat":{"fontColor":"#808080FF"}},{"type":"Character","name":"Heading 1 Char","basedOn":"Default Paragraph Font","characterFormat":{"bold":true,"fontSize":12.0,"fontFamily":"Times New Roman","fontColor":"empty","boldBidi":true,"fontSizeBidi":14.0,"fontFamilyBidi":"Arial","allCaps":true}},{"type":"Character","name":"Heading 2 Char","basedOn":"Default Paragraph Font","characterFormat":{"bold":true,"fontSize":12.0,"fontFamily":"Times New Roman","fontColor":"empty","boldBidi":true,"fontSizeBidi":13.0,"fontFamilyBidi":"Arial"}},{"type":"Character","name":"Heading 3 Char","basedOn":"Default Paragraph Font","characterFormat":{"bold":true,"fontSize":12.0,"fontFamily":"Times New Roman","fontColor":"empty","fontSizeBidi":13.0,"fontFamilyBidi":"Arial"}},{"type":"Character","name":"Heading 4 Char","basedOn":"Default Paragraph Font","characterFormat":{"bold":true,"fontSize":12.0,"fontFamily":"Times New Roman","fontColor":"empty","boldBidi":true,"fontSizeBidi":12.0,"fontFamilyBidi":"Arial"}},{"type":"Character","name":"Heading 5 Char","basedOn":"Default Paragraph Font","characterFormat":{"bold":true,"fontSize":12.0,"fontFamily":"Times New Roman","fontColor":"empty","italicBidi":true,"fontSizeBidi":12.0,"fontFamilyBidi":"Arial"}},{"type":"Character","name":"Heading 6 Char","basedOn":"Default Paragraph Font","characterFormat":{"bold":true,"fontSize":12.0,"fontFamily":"Times New Roman","fontColor":"empty","italicBidi":true,"fontSizeBidi":12.0,"fontFamilyBidi":"Arial"}},{"type":"Character","name":"Heading 7 Char","basedOn":"Default Paragraph Font","characterFormat":{"bold":true,"fontSize":12.0,"fontFamily":"Times New Roman","fontColor":"empty","italicBidi":true,"fontSizeBidi":12.0,"fontFamilyBidi":"Arial"}},{"type":"Character","name":"Heading 8 Char","basedOn":"Default Paragraph Font","characterFormat":{"bold":true,"fontSize":12.0,"fontFamily":"Times New Roman","fontColor":"empty","italicBidi":true,"fontSizeBidi":12.0,"fontFamilyBidi":"Arial"}},{"type":"Character","name":"Heading 9 Char","basedOn":"Default Paragraph Font","characterFormat":{"bold":true,"fontSize":12.0,"fontFamily":"Times New Roman","fontColor":"empty","italicBidi":true,"fontSizeBidi":12.0,"fontFamilyBidi":"Arial"}},{"type":"Paragraph","name":"Paragraph","next":"Paragraph","link":"Paragraph Char","characterFormat":{"fontSize":12.0,"fontFamily":"Times New Roman","fontColor":"empty","fontSizeBidi":12.0,"fontFamilyBidi":"Times New Roman"},"paragraphFormat":{"afterSpacing":12.0,"lineSpacing":1.0,"lineSpacingType":"Multiple"}},{"type":"Character","name":"Paragraph Char","basedOn":"Default Paragraph Font","characterFormat":{"fontSize":12.0,"fontFamily":"Times New Roman","fontColor":"empty","fontSizeBidi":12.0,"fontFamilyBidi":"Times New Roman"}},{"type":"Paragraph","name":"List Bullet","next":"List Bullet","characterFormat":{"fontSize":12.0,"fontFamily":"Times New Roman","fontColor":"empty","fontSizeBidi":12.0,"fontFamilyBidi":"Times New Roman"},"paragraphFormat":{"afterSpacing":12.0,"lineSpacing":1.0,"lineSpacingType":"Multiple","listFormat":{"listId":2}}},{"type":"Character","name":"List Bullet 3 Char","basedOn":"Default Paragraph Font","characterFormat":{"fontSize":12.0,"fontColor":"empty","fontSizeBidi":12.0}},{"type":"Paragraph","name":"List Bullet 3","next":"List Bullet 3","link":"List Bullet 3 Char","characterFormat":{"fontSize":12.0,"fontColor":"empty","fontSizeBidi":12.0},"paragraphFormat":{"afterSpacing":12.0,"lineSpacing":1.0,"lineSpacingType":"Multiple","listFormat":{"listId":17}}},{"type":"Character","name":"TableText Char","basedOn":"Default Paragraph Font","characterFormat":{"fontFamily":"DengXian","fontColor":"empty","fontFamilyBidi":"Arial"}},{"type":"Paragraph","name":"TableText","next":"TableText","link":"TableText Char","characterFormat":{"fontFamily":"DengXian","fontColor":"empty","fontFamilyBidi":"Arial"},"paragraphFormat":{"afterSpacing":0.0,"lineSpacing":1.0,"lineSpacingType":"Multiple"}},{"type":"Paragraph","name":"TableText Footnote","next":"TableText Footnote","characterFormat":{"fontSize":10.0,"fontFamily":"Times New Roman","fontColor":"empty","fontSizeBidi":10.0,"fontFamilyBidi":"Times New Roman"},"paragraphFormat":{"afterSpacing":0.0,"lineSpacing":1.0,"lineSpacingType":"Multiple","tabs":[{"tabJustification":"Left","position":18.0,"tabLeader":"None","deletePosition":0.0}]}},{"type":"Character","name":"TableText 12","basedOn":"Default Paragraph Font","characterFormat":{"fontSize":12.0,"fontFamily":"Times New Roman","fontColor":"empty","fontFamilyBidi":"Times New Roman"}},{"type":"Character","name":"Hyperlink","basedOn":"Default Paragraph Font","characterFormat":{"strikethrough":"None","fontColor":"#0000FFFF"}},{"type":"Paragraph","name":"List Number 3","next":"List Number 3","characterFormat":{"fontSize":12.0,"fontFamily":"Times New Roman","fontColor":"empty","fontSizeBidi":12.0,"fontFamilyBidi":"Times New Roman"},"paragraphFormat":{"afterSpacing":12.0,"lineSpacing":1.0,"lineSpacingType":"Multiple","listFormat":{"listId":20}}},{"type":"Character","name":"Instructions","basedOn":"Default Paragraph Font","characterFormat":{"italic":true,"fontColor":"#008000FF","italicBidi":true}},{"type":"Paragraph","name":"Balloon Text","basedOn":"Normal","next":"Balloon Text","link":"Balloon Text Char","characterFormat":{"fontSize":9.0,"fontFamily":"Segoe UI","fontColor":"empty","fontSizeBidi":9.0,"fontFamilyBidi":"Segoe UI"}},{"type":"Character","name":"Balloon Text Char","basedOn":"Default Paragraph Font","characterFormat":{"fontSize":9.0,"fontFamily":"Segoe UI","fontColor":"empty","fontSizeBidi":9.0,"fontFamilyBidi":"Segoe UI"}},{"type":"Paragraph","name":"Header","basedOn":"Normal","next":"Header","link":"Header Char","characterFormat":{"fontColor":"empty"},"paragraphFormat":{"tabs":[{"tabJustification":"Center","position":234.0,"tabLeader":"None","deletePosition":0.0},{"tabJustification":"Right","position":468.0,"tabLeader":"None","deletePosition":0.0}]}},{"type":"Character","name":"Header Char","basedOn":"Default Paragraph Font","characterFormat":{"fontSize":12.0,"fontFamily":"Times New Roman","fontColor":"empty","fontSizeBidi":12.0,"fontFamilyBidi":"Times New Roman"}},{"type":"Paragraph","name":"Footer","basedOn":"Normal","next":"Footer","link":"Footer Char","characterFormat":{"fontColor":"empty"},"paragraphFormat":{"tabs":[{"tabJustification":"Center","position":234.0,"tabLeader":"None","deletePosition":0.0},{"tabJustification":"Right","position":468.0,"tabLeader":"None","deletePosition":0.0}]}},{"type":"Character","name":"Footer Char","basedOn":"Default Paragraph Font","characterFormat":{"fontSize":12.0,"fontFamily":"Times New Roman","fontColor":"empty","fontSizeBidi":12.0,"fontFamilyBidi":"Times New Roman"}},{"type":"Character","name":"TableText 9","basedOn":"Default Paragraph Font","characterFormat":{"fontSize":9.0,"fontFamily":"Times New Roman","fontColor":"empty","fontFamilyBidi":"Times New Roman"}},{"type":"Paragraph","name":"List Bullet 2","basedOn":"Normal","next":"List Bullet 2","characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{"listId":0},"contextualSpacing":true}}],"defaultTabWidth":36.0,"formatting":false,"trackChanges":false,"protectionType":"NoProtection","enforcement":false,"dontUseHTMLParagraphAutoSpacing":false,"alignTablesRowByRow":false}';
        let expectdoc: string = '{"sections":[{"sectionFormat":{"pageWidth":612,"pageHeight":792,"leftMargin":72,"rightMargin":72,"topMargin":72,"bottomMargin":72,"differentFirstPage":false,"differentOddAndEvenPages":false,"headerDistance":36,"footerDistance":36,"bidi":false},"blocks":[{"blocks":[{"paragraphFormat":{"afterSpacing":12,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","styleName":"Normal","listFormat":{}},"characterFormat":{"fontSize":11,"fontFamily":"Calibri","fontColor":"empty","fontSizeBidi":11},"inlines":[{"inlines":[{"inlines":[{"characterFormat":{"fontSize":11,"fontFamily":"Calibri","fontColor":"empty","fontSizeBidi":11,"fontFamilyBidi":"Arial"},"text":"The definitions y events (ADEs and SADEs) can be found in"}],"contentControlProperties":{"lockContentControl":false,"lockContents":false,"color":"#000000FF","type":"RichText","hasPlaceHolderText":false,"multiline":false,"isTemporary":false,"contentControlListItems":[]}}],"contentControlProperties":{"lockContentControl":false,"lockContents":false,"color":"#000000FF","type":"RichText","hasPlaceHolderText":false,"multiline":false,"isTemporary":false,"contentControlListItems":[]}},{"characterFormat":{"fontSize":11,"fontFamily":"Calibri","fontColor":"empty","fontSizeBidi":11,"fontFamilyBidi":"Arial"},"text":" "},{"characterFormat":{"fontSize":11,"fontFamily":"Calibri","fontColor":"#0000FFFF","fontSizeBidi":11,"fontFamilyBidi":"Arial"},"text":"Appendix 8"},{"characterFormat":{"fontSize":11,"fontFamily":"Calibri","fontColor":"empty","fontSizeBidi":11,"fontFamilyBidi":"Arial"},"text":". "},{"inlines":[{"inlines":[{"characterFormat":{"fontSize":11,"fontFamily":"Calibri","fontColor":"empty","fontSizeBidi":11,"fontFamilyBidi":"Arial"},"text":"Device deficiencies are covered in"}],"contentControlProperties":{"lockContentControl":false,"lockContents":true,"color":"#000000FF","type":"RichText","hasPlaceHolderText":false,"multiline":false,"isTemporary":false,"contentControlListItems":[]}}],"contentControlProperties":{"lockContentControl":false,"lockContents":false,"color":"#000000FF","type":"RichText","hasPlaceHolderText":false,"multiline":false,"isTemporary":false,"contentControlListItems":[]}}]}],"contentControlProperties":{"lockContentControl":false,"lockContents":false,"tag":"IN:Device Studies","color":"#008000FF","title":"Device Studies","type":"RichText","hasPlaceHolderText":false,"multiline":false,"isTemporary":false,"contentControlListItems":[]}}],"headersFooters":{}}],"characterFormat":{"bold":false,"italic":false,"fontSize":11,"fontFamily":"Calibri","underline":"None","strikethrough":"None","baselineAlignment":"Normal","highlightColor":"NoColor","fontColor":"empty","fontSizeBidi":11,"fontFamilyBidi":"Arial","allCaps":false},"paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":0,"afterSpacing":8,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","listFormat":{},"bidi":false},"defaultTabWidth":36,"trackChanges":false,"enforcement":false,"hashValue":"","saltValue":"","formatting":false,"protectionType":"NoProtection","dontUseHTMLParagraphAutoSpacing":false,"formFieldShading":true,"styles":[{"name":"Normal","type":"Paragraph","paragraphFormat":{"afterSpacing":0,"lineSpacing":1,"lineSpacingType":"Multiple","listFormat":{}},"characterFormat":{"fontSize":12,"fontFamily":"Times New Roman","fontColor":"empty","fontSizeBidi":12,"fontFamilyBidi":"Times New Roman"},"next":"Normal"},{"name":"Heading 1","type":"Paragraph","paragraphFormat":{"beforeSpacing":6,"afterSpacing":6,"lineSpacing":1,"lineSpacingType":"Multiple","outlineLevel":"Level1","listFormat":{"listId":13}},"characterFormat":{"bold":true,"fontSize":12,"fontFamily":"Times New Roman","fontColor":"empty","boldBidi":true,"fontSizeBidi":14,"fontFamilyBidi":"Arial","allCaps":true},"link":"Heading 1 Char","next":"Paragraph"},{"name":"Heading 1 Char","type":"Character","characterFormat":{"bold":true,"fontSize":12,"fontFamily":"Times New Roman","fontColor":"empty","boldBidi":true,"fontSizeBidi":14,"fontFamilyBidi":"Arial","allCaps":true},"basedOn":"Default Paragraph Font"},{"name":"Default Paragraph Font","type":"Character","characterFormat":{"fontColor":"empty"}},{"name":"Paragraph","type":"Paragraph","paragraphFormat":{"afterSpacing":12,"lineSpacing":1,"lineSpacingType":"Multiple","listFormat":{}},"characterFormat":{"fontSize":12,"fontFamily":"Times New Roman","fontColor":"empty","fontSizeBidi":12,"fontFamilyBidi":"Times New Roman"},"link":"Paragraph Char","next":"Paragraph"},{"name":"Paragraph Char","type":"Character","characterFormat":{"fontSize":12,"fontFamily":"Times New Roman","fontColor":"empty","fontSizeBidi":12,"fontFamilyBidi":"Times New Roman"},"basedOn":"Default Paragraph Font"},{"name":"Heading 2","type":"Paragraph","paragraphFormat":{"beforeSpacing":6,"afterSpacing":6,"lineSpacing":1,"lineSpacingType":"Multiple","outlineLevel":"Level2","listFormat":{"listId":13,"listLevelNumber":1}},"characterFormat":{"bold":true,"fontSize":12,"fontFamily":"Times New Roman","fontColor":"empty","boldBidi":true,"fontSizeBidi":13,"fontFamilyBidi":"Arial"},"link":"Heading 2 Char","next":"Paragraph"},{"name":"Heading 2 Char","type":"Character","characterFormat":{"bold":true,"fontSize":12,"fontFamily":"Times New Roman","fontColor":"empty","boldBidi":true,"fontSizeBidi":13,"fontFamilyBidi":"Arial"},"basedOn":"Default Paragraph Font"},{"name":"Heading 3","type":"Paragraph","paragraphFormat":{"beforeSpacing":6,"afterSpacing":6,"lineSpacing":1,"lineSpacingType":"Multiple","outlineLevel":"Level3","listFormat":{"listId":13,"listLevelNumber":2}},"characterFormat":{"bold":true,"fontSize":12,"fontFamily":"Times New Roman","fontColor":"empty","fontSizeBidi":13,"fontFamilyBidi":"Arial"},"link":"Heading 3 Char","next":"Paragraph"},{"name":"Heading 3 Char","type":"Character","characterFormat":{"bold":true,"fontSize":12,"fontFamily":"Times New Roman","fontColor":"empty","fontSizeBidi":13,"fontFamilyBidi":"Arial"},"basedOn":"Default Paragraph Font"},{"name":"Heading 4","type":"Paragraph","paragraphFormat":{"beforeSpacing":6,"afterSpacing":6,"lineSpacing":1,"lineSpacingType":"Multiple","outlineLevel":"Level4","listFormat":{"listId":13,"listLevelNumber":3}},"characterFormat":{"bold":true,"fontSize":12,"fontFamily":"Times New Roman","fontColor":"empty","boldBidi":true,"fontSizeBidi":12,"fontFamilyBidi":"Arial"},"link":"Heading 4 Char","next":"Paragraph"},{"name":"Heading 4 Char","type":"Character","characterFormat":{"bold":true,"fontSize":12,"fontFamily":"Times New Roman","fontColor":"empty","boldBidi":true,"fontSizeBidi":12,"fontFamilyBidi":"Arial"},"basedOn":"Default Paragraph Font"},{"name":"Heading 5","type":"Paragraph","paragraphFormat":{"leftIndent":36,"firstLineIndent":-18,"beforeSpacing":6,"afterSpacing":6,"lineSpacing":1,"lineSpacingType":"Multiple","outlineLevel":"Level5","listFormat":{"listId":13,"listLevelNumber":4},"tabs":[{"position":0,"deletePosition":0,"tabJustification":"Left","tabLeader":"None"},{"position":36,"deletePosition":0,"tabJustification":"List","tabLeader":"None"}]},"characterFormat":{"bold":true,"fontSize":12,"fontFamily":"Times New Roman","fontColor":"empty","italicBidi":true,"fontSizeBidi":12,"fontFamilyBidi":"Arial"},"link":"Heading 5 Char","next":"Paragraph"},{"name":"Heading 5 Char","type":"Character","characterFormat":{"bold":true,"fontSize":12,"fontFamily":"Times New Roman","fontColor":"empty","italicBidi":true,"fontSizeBidi":12,"fontFamilyBidi":"Arial"},"basedOn":"Default Paragraph Font"},{"name":"Heading 6","type":"Paragraph","paragraphFormat":{"leftIndent":36,"firstLineIndent":-18,"beforeSpacing":6,"afterSpacing":6,"lineSpacing":1,"lineSpacingType":"Multiple","outlineLevel":"Level6","listFormat":{"listId":13,"listLevelNumber":5},"tabs":[{"position":0,"deletePosition":0,"tabJustification":"Left","tabLeader":"None"},{"position":36,"deletePosition":0,"tabJustification":"List","tabLeader":"None"}]},"characterFormat":{"bold":true,"fontSize":12,"fontFamily":"Times New Roman","fontColor":"empty","italicBidi":true,"fontSizeBidi":12,"fontFamilyBidi":"Arial"},"link":"Heading 6 Char","next":"Paragraph"},{"name":"Heading 6 Char","type":"Character","characterFormat":{"bold":true,"fontSize":12,"fontFamily":"Times New Roman","fontColor":"empty","italicBidi":true,"fontSizeBidi":12,"fontFamilyBidi":"Arial"},"basedOn":"Default Paragraph Font"},{"name":"Heading 7","type":"Paragraph","paragraphFormat":{"leftIndent":36,"firstLineIndent":-18,"beforeSpacing":6,"afterSpacing":6,"lineSpacing":1,"lineSpacingType":"Multiple","outlineLevel":"Level7","listFormat":{"listId":13,"listLevelNumber":6},"tabs":[{"position":0,"deletePosition":0,"tabJustification":"Left","tabLeader":"None"},{"position":36,"deletePosition":0,"tabJustification":"List","tabLeader":"None"}]},"characterFormat":{"bold":true,"fontSize":12,"fontFamily":"Times New Roman","fontColor":"empty","italicBidi":true,"fontSizeBidi":12,"fontFamilyBidi":"Arial"},"link":"Heading 7 Char","next":"Paragraph"},{"name":"Heading 7 Char","type":"Character","characterFormat":{"bold":true,"fontSize":12,"fontFamily":"Times New Roman","fontColor":"empty","italicBidi":true,"fontSizeBidi":12,"fontFamilyBidi":"Arial"},"basedOn":"Default Paragraph Font"},{"name":"Heading 8","type":"Paragraph","paragraphFormat":{"leftIndent":36,"firstLineIndent":-18,"beforeSpacing":6,"afterSpacing":6,"lineSpacing":1,"lineSpacingType":"Multiple","outlineLevel":"Level8","listFormat":{"listId":13,"listLevelNumber":7},"tabs":[{"position":0,"deletePosition":0,"tabJustification":"Left","tabLeader":"None"},{"position":36,"deletePosition":0,"tabJustification":"List","tabLeader":"None"}]},"characterFormat":{"bold":true,"fontSize":12,"fontFamily":"Times New Roman","fontColor":"empty","italicBidi":true,"fontSizeBidi":12,"fontFamilyBidi":"Arial"},"link":"Heading 8 Char","next":"Paragraph"}'
        + ',{"name":"Heading 8 Char","type":"Character","characterFormat":{"bold":true,"fontSize":12,"fontFamily":"Times New Roman","fontColor":"empty","italicBidi":true,"fontSizeBidi":12,"fontFamilyBidi":"Arial"},"basedOn":"Default Paragraph Font"},{"name":"Heading 9","type":"Paragraph","paragraphFormat":{"leftIndent":36,"firstLineIndent":-18,"beforeSpacing":6,"afterSpacing":6,"lineSpacing":1,"lineSpacingType":"Multiple","outlineLevel":"Level9","listFormat":{"listId":13,"listLevelNumber":8},"tabs":[{"position":0,"deletePosition":0,"tabJustification":"Left","tabLeader":"None"},{"position":36,"deletePosition":0,"tabJustification":"List","tabLeader":"None"}]},"characterFormat":{"bold":true,"fontSize":12,"fontFamily":"Times New Roman","fontColor":"empty","italicBidi":true,"fontSizeBidi":12,"fontFamilyBidi":"Arial"},"link":"Heading 9 Char","next":"Paragraph"},{"name":"Heading 9 Char","type":"Character","characterFormat":{"bold":true,"fontSize":12,"fontFamily":"Times New Roman","fontColor":"empty","italicBidi":true,"fontSizeBidi":12,"fontFamilyBidi":"Arial"},"basedOn":"Default Paragraph Font"},{"name":"List Alpha Table","type":"Paragraph","paragraphFormat":{"afterSpacing":0,"lineSpacing":1,"lineSpacingType":"Multiple","listFormat":{"listId":18}},"characterFormat":{"fontSize":10,"fontFamily":"Times New Roman","fontColor":"empty","fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"next":"List Alpha Table"},{"name":"Placeholder Text","type":"Character","characterFormat":{"fontColor":"#808080FF"},"basedOn":"Default Paragraph Font"},{"name":"List Bullet","type":"Paragraph","paragraphFormat":{"afterSpacing":12,"lineSpacing":1,"lineSpacingType":"Multiple","listFormat":{"listId":2}},"characterFormat":{"fontSize":12,"fontFamily":"Times New Roman","fontColor":"empty","fontSizeBidi":12,"fontFamilyBidi":"Times New Roman"},"next":"List Bullet"},{"name":"List Bullet 3 Char","type":"Character","characterFormat":{"fontSize":12,"fontColor":"empty","fontSizeBidi":12},"basedOn":"Default Paragraph Font"},{"name":"List Bullet 3","type":"Paragraph","paragraphFormat":{"afterSpacing":12,"lineSpacing":1,"lineSpacingType":"Multiple","listFormat":{"listId":17}},"characterFormat":{"fontSize":12,"fontColor":"empty","fontSizeBidi":12},"link":"List Bullet 3 Char","next":"List Bullet 3"},{"name":"TableText Char","type":"Character","characterFormat":{"fontFamily":"DengXian","fontColor":"empty","fontFamilyBidi":"Arial"},"basedOn":"Default Paragraph Font"},{"name":"TableText","type":"Paragraph","paragraphFormat":{"afterSpacing":0,"lineSpacing":1,"lineSpacingType":"Multiple","listFormat":{}},"characterFormat":{"fontFamily":"DengXian","fontColor":"empty","fontFamilyBidi":"Arial"},"link":"TableText Char","next":"TableText"},{"name":"TableText Footnote","type":"Paragraph","paragraphFormat":{"afterSpacing":0,"lineSpacing":1,"lineSpacingType":"Multiple","listFormat":{},"tabs":[{"position":18,"deletePosition":0,"tabJustification":"Left","tabLeader":"None"}]},"characterFormat":{"fontSize":10,"fontFamily":"Times New Roman","fontColor":"empty","fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"next":"TableText Footnote"},{"name":"TableText 12","type":"Character","characterFormat":{"fontSize":12,"fontFamily":"Times New Roman","fontColor":"empty","fontFamilyBidi":"Times New Roman"},"basedOn":"Default Paragraph Font"},{"name":"Hyperlink","type":"Character","characterFormat":{"strikethrough":"None","fontColor":"#0000FFFF"},"basedOn":"Default Paragraph Font"},{"name":"List Number 3","type":"Paragraph","paragraphFormat":{"afterSpacing":12,"lineSpacing":1,"lineSpacingType":"Multiple","listFormat":{"listId":20}},"characterFormat":{"fontSize":12,"fontFamily":"Times New Roman","fontColor":"empty","fontSizeBidi":12,"fontFamilyBidi":"Times New Roman"},"next":"List Number 3"},{"name":"Instructions","type":"Character","characterFormat":{"italic":true,"fontColor":"#008000FF","italicBidi":true},"basedOn":"Default Paragraph Font"},{"name":"Balloon Text","type":"Paragraph","paragraphFormat":{"listFormat":{}},"characterFormat":{"fontSize":9,"fontFamily":"Segoe UI","fontColor":"empty","fontSizeBidi":9,"fontFamilyBidi":"Segoe UI"},"basedOn":"Normal","link":"Balloon Text Char","next":"Balloon Text"},{"name":"Balloon Text Char","type":"Character","characterFormat":{"fontSize":9,"fontFamily":"Segoe UI","fontColor":"empty","fontSizeBidi":9,"fontFamilyBidi":"Segoe UI"},"basedOn":"Default Paragraph Font"},{"name":"Header","type":"Paragraph","paragraphFormat":{"listFormat":{},"tabs":[{"position":234,"deletePosition":0,"tabJustification":"Center","tabLeader":"None"},{"position":468,"deletePosition":0,"tabJustification":"Right","tabLeader":"None"}]},"characterFormat":{"fontColor":"empty"},"basedOn":"Normal","link":"Header Char","next":"Header"},{"name":"Header Char","type":"Character","characterFormat":{"fontSize":12,"fontFamily":"Times New Roman","fontColor":"empty","fontSizeBidi":12,"fontFamilyBidi":"Times New Roman"},"basedOn":"Default Paragraph Font"},{"name":"Footer","type":"Paragraph","paragraphFormat":{"listFormat":{},"tabs":[{"position":234,"deletePosition":0,"tabJustification":"Center","tabLeader":"None"},{"position":468,"deletePosition":0,"tabJustification":"Right","tabLeader":"None"}]},"characterFormat":{"fontColor":"empty"},"basedOn":"Normal","link":"Footer Char","next":"Footer"},{"name":"Footer Char","type":"Character","characterFormat":{"fontSize":12,"fontFamily":"Times New Roman","fontColor":"empty","fontSizeBidi":12,"fontFamilyBidi":"Times New Roman"},"basedOn":"Default Paragraph Font"},{"name":"TableText 9","type":"Character","characterFormat":{"fontSize":9,"fontFamily":"Times New Roman","fontColor":"empty","fontFamilyBidi":"Times New Roman"},"basedOn":"Default Paragraph Font"},{"name":"List Bullet 2","type":"Paragraph","paragraphFormat":{"listFormat":{"listId":0},"contextualSpacing":true},"characterFormat":{"fontColor":"empty"},"basedOn":"Normal","next":"List Bullet 2"}],"lists":[{"abstractListId":0,"levelOverrides":[],"listId":0},{"abstractListId":2,"levelOverrides":[],"listId":2},{"abstractListId":13,"levelOverrides":[],"listId":13},{"abstractListId":17,"levelOverrides":[],"listId":17},{"abstractListId":9,"levelOverrides":[{"levelNumber":0,"startAt":1}],"listId":18},{"abstractListId":1,"levelOverrides":[{"levelNumber":0,"startAt":1}],"listId":20}],"abstractLists":[{"abstractListId":0,"levels":[{"characterFormat":{"fontFamily":"Symbol","fontColor":"empty"},"paragraphFormat":{"leftIndent":36,"firstLineIndent":-18,"listFormat":{},"tabs":[{"position":36,"deletePosition":0,"tabJustification":"List","tabLeader":"None"}]},"followCharacter":"Tab","listLevelPattern":"Bullet","numberFormat":"","restartLevel":0,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":1,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":2,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":3,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":4,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":5,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":6,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":7,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":8,"startAt":0}]},{"abstractListId":1,"levels":[{"characterFormat":{"strikethrough":"None","fontColor":"empty","allCaps":false},"paragraphFormat":{"leftIndent":54,"firstLineIndent":-18,"listFormat":{},"tabs":[{"position":54,"deletePosition":0,"tabJustification":"List","tabLeader":"None"}]},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"%1.","restartLevel":0,"startAt":1},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":1,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":2,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":3,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":4,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":5,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":6,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":7,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":8,"startAt":0}]},{"abstractListId":2,"levels":[{"characterFormat":{"fontFamily":"Symbol","strikethrough":"None","fontColor":"empty","allCaps":false},"paragraphFormat":{"leftIndent":18,"firstLineIndent":-18,"listFormat":{},"tabs":[{"position":18,"deletePosition":0,"tabJustification":"List","tabLeader":"None"}]},"followCharacter":"Tab","listLevelPattern":"Bullet","numberFormat":"","restartLevel":0,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":1,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":2,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":3,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":4,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":5,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":6,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":7,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":8,"startAt":0}]},{"abstractListId":9,"levels":[{"characterFormat":{"strikethrough":"None","fontColor":"empty","allCaps":false},"paragraphFormat":{"leftIndent":18,"firstLineIndent":-18,"listFormat":{},"tabs":[{"position":18,"deletePosition":0,"tabJustification":"List","tabLeader":"None"}]},"followCharacter":"Tab","listLevelPattern":"LowLetter","numberFormat":"%1.","restartLevel":0,"startAt":1},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":1,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":2,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":3,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":4,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":5,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":6,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":7,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":8,"startAt":0}]},{"abstractListId":13,"levels":[{"characterFormat":{"bold":true,"italic":false,"fontSize":12,"fontFamily":"Times New Roman","strikethrough":"None","fontColor":"empty","fontFamilyBidi":"Times New Roman","allCaps":true},"paragraphFormat":{"leftIndent":0,"firstLineIndent":0,"listFormat":{},"tabs":[{"position":0,"deletePosition":0,"tabJustification":"List","tabLeader":"None"}]},"followCharacter":"Space","listLevelPattern":"Arabic","numberFormat":"%1.","restartLevel":0,"startAt":1},{"characterFormat":{"bold":true,"italic":false,"fontSize":12,"fontFamily":"Times New Roman","strikethrough":"None","fontColor":"#00000000","fontFamilyBidi":"Times New Roman","allCaps":false},"paragraphFormat":{"leftIndent":0,"firstLineIndent":0,"listFormat":{},"tabs":[{"position":0,"deletePosition":0,"tabJustification":"List","tabLeader":"None"}]},"followCharacter":"Space","listLevelPattern":"Arabic","numberFormat":"%1.%2.","restartLevel":1,"startAt":1},{"characterFormat":{"bold":true,"italic":false,"fontSize":12,"fontFamily":"Times New Roman","strikethrough":"None","fontColor":"empty","fontFamilyBidi":"Times New Roman","allCaps":false},"paragraphFormat":{"leftIndent":0,"firstLineIndent":0,"listFormat":{},"tabs":[{"position":0,"deletePosition":0,"tabJustification":"List","tabLeader":"None"}]},"followCharacter":"Space","listLevelPattern":"Arabic","numberFormat":"%1.%2.%3.","restartLevel":2,"startAt":1},{"characterFormat":{"bold":true,"italic":false,"fontSize":12,"fontFamily":"Times New Roman","strikethrough":"None","fontColor":"empty","fontFamilyBidi":"Times New Roman","allCaps":false},"paragraphFormat":{"leftIndent":0,"firstLineIndent":0,"listFormat":{},"tabs":[{"position":0,"deletePosition":0,"tabJustification":"List","tabLeader":"None"}]},"followCharacter":"Space","listLevelPattern":"Arabic","numberFormat":"%1.%2.%3.%4.","restartLevel":3,"startAt":1},{"characterFormat":{"bold":true,"italic":false,"fontSize":12,"fontFamily":"Times New Roman","strikethrough":"None","fontColor":"empty","fontFamilyBidi":"Times New Roman","allCaps":false},"paragraphFormat":{"leftIndent":0,"firstLineIndent":0,"listFormat":{},"tabs":[{"position":0,"deletePosition":0,"tabJustification":"List","tabLeader":"None"}]},"followCharacter":"Space","listLevelPattern":"Arabic","numberFormat":"%1.%2.%3.%4.%5.","restartLevel":4,"startAt":1},{"characterFormat":{"bold":true,"italic":false,"fontSize":12,"fontFamily":"Times New Roman","strikethrough":"None","fontColor":"empty","fontFamilyBidi":"Times New Roman","allCaps":false},"paragraphFormat":{"leftIndent":0,"firstLineIndent":0,"listFormat":{},"tabs":[{"position":0,"deletePosition":0,"tabJustification":"List","tabLeader":"None"}]},"followCharacter":"Space","listLevelPattern":"Arabic","numberFormat":"%1.%2.%3.%4.%5.%6.","restartLevel":5,"startAt":1},{"characterFormat":{"bold":true,"italic":false,"fontSize":12,"fontFamily":"Times New Roman","strikethrough":"None","fontColor":"empty","fontFamilyBidi":"Times New Roman","allCaps":false},"paragraphFormat":{"leftIndent":0,"firstLineIndent":0,"listFormat":{},"tabs":[{"position":0,"deletePosition":0,"tabJustification":"List","tabLeader":"None"}]},"followCharacter":"Space","listLevelPattern":"Arabic","numberFormat":"%1.%2.%3.%4.%5.%6.%7.","restartLevel":6,"startAt":1},{"characterFormat":{"bold":true,"italic":false,"fontSize":12,"fontFamily":"Times New Roman","strikethrough":"None","fontColor":"empty","fontFamilyBidi":"Times New Roman","allCaps":false},"paragraphFormat":{"leftIndent":0,"firstLineIndent":0,"listFormat":{},"tabs":[{"position":0,"deletePosition":0,"tabJustification":"List","tabLeader":"None"}]},"followCharacter":"Space","listLevelPattern":"Arabic","numberFormat":"%1.%2.%3.%4.%5.%6.%7.%8.","restartLevel":7,"startAt":1},{"characterFormat":{"bold":true,"italic":false,"fontSize":12,"fontFamily":"Times New Roman","strikethrough":"None","fontColor":"empty","fontFamilyBidi":"Times New Roman","allCaps":false},"paragraphFormat":{"leftIndent":0,"firstLineIndent":0,"listFormat":{},"tabs":[{"position":0,"deletePosition":0,"tabJustification":"List","tabLeader":"None"}]},"followCharacter":"Space","listLevelPattern":"Arabic","numberFormat":"%1.%2.%3.%4.%5.%6.%7.%8.%9.","restartLevel":8,"startAt":1}]},{"abstractListId":17,"levels":[{"characterFormat":{"fontFamily":"Symbol","strikethrough":"None","fontColor":"empty","allCaps":false},"paragraphFormat":{"leftIndent":54,"firstLineIndent":-18,"listFormat":{},"tabs":[{"position":54,"deletePosition":0,"tabJustification":"List","tabLeader":"None"}]},"followCharacter":"Tab","listLevelPattern":"Bullet","numberFormat":"","restartLevel":0,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":1,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":2,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":3,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":4,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":5,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":6,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":7,"startAt":0},{"characterFormat":{"fontColor":"empty"},"paragraphFormat":{"listFormat":{}},"followCharacter":"Tab","listLevelPattern":"Arabic","numberFormat":"","restartLevel":8,"startAt":0}]}],"comments":[],"revisions":[],"customXml":[]}';
        editor.open(blocksNestedContent);
        let json: string = editor.serialize();
        editor.save('Sample', 'Sfdt');
        expect(json).toBe(expectdoc);
    });*/
});

describe('FootnoteEndnote validation', () => {
    let editor: DocumentEditor = undefined;
    let documentHelper: DocumentHelper;
    beforeAll(() => {
        let ele: HTMLElement = createElement('div', { id: 'container' });
        document.body.appendChild(ele);
        DocumentEditor.Inject(Editor, Selection, SfdtExport);
        editor = new DocumentEditor({ enableSfdtExport: true, enableEditor: true, enableSelection: true, isReadOnly: false });
        documentHelper = editor.documentHelper;
        (editor.documentHelper as any).containerCanvasIn = TestHelper.containerCanvas;
        (editor.documentHelper as any).selectionCanvasIn = TestHelper.selectionCanvas;
        (editor.documentHelper.render as any).pageCanvasIn = TestHelper.pageCanvas;
        (editor.documentHelper.render as any).selectionCanvasIn = TestHelper.pageSelectionCanvas;
        editor.appendTo('#container');
    });
    afterAll((done) => {
        document.body.removeChild(document.getElementById('container'));
        editor.destroy();
        editor = undefined;
        documentHelper = undefined;
        document.body.innerHTML = '';
        setTimeout(function () {
            done();
        }, 1000);
    });

    // it('FootnoteEndnote document validation', () => {
    //     console.log('FootnoteEndnote document validation');
    //     let notedoc: any = {
    //         "sections": [
    //             {
    //                 "blocks": [
    //                     {
    //                         "characterFormat": {
    //                             "fontColor": "empty"
    //                         },
    //                         "paragraphFormat": {
    //                             "styleName": "Normal"
    //                         },
    //                         "inlines": [
    //                             {
    //                                 "text": "footnte",
    //                                 "characterFormat": {
    //                                     "fontColor": "empty"
    //                                 }
    //                             },
    //                             {
    //                                 "footnoteType": "Footnote",
    //                                 "characterFormat": {
    //                                     "fontColor": "empty",
    //                                     "styleName": "Footnote Reference"
    //                                 },
    //                                 "blocks": [
    //                                     {
    //                                         "characterFormat": {
    //                                             "fontColor": "empty"
    //                                         },
    //                                         "paragraphFormat": {
    //                                             "styleName": "Footnote Text"
    //                                         },
    //                                         "inlines": [
    //                                             {
    //                                                 "text": "\u0002",
    //                                                 "characterFormat": {
    //                                                     "fontColor": "empty",
    //                                                     "styleName": "Footnote Reference"
    //                                                 }
    //                                             },
    //                                             {
    //                                                 "text": " ",
    //                                                 "characterFormat": {
    //                                                     "fontColor": "empty"
    //                                                 }
    //                                             },
    //                                             {
    //                                                 "text": "H",
    //                                                 "characterFormat": {
    //                                                     "fontColor": "empty"
    //                                                 }
    //                                             },
    //                                             {
    //                                                 "text": "ello",
    //                                                 "characterFormat": {
    //                                                     "fontColor": "empty"
    //                                                 }
    //                                             },
    //                                             {
    //                                                 "text": " footnote",
    //                                                 "characterFormat": {
    //                                                     "fontColor": "empty"
    //                                                 }
    //                                             }
    //                                         ]
    //                                     }
    //                                 ],
    //                                 "symbolCode": 0,
    //                                 "symbolFontName": "Symbol"
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         "characterFormat": {
    //                             "fontColor": "empty"
    //                         },
    //                         "paragraphFormat": {
    //                             "styleName": "Normal"
    //                         },
    //                         "inlines": [
    //                             {
    //                                 "text": "Endnote",
    //                                 "characterFormat": {
    //                                     "fontColor": "empty"
    //                                 }
    //                             },
    //                             {
    //                                 "footnoteType": "Endnote",
    //                                 "characterFormat": {
    //                                     "fontColor": "empty",
    //                                     "styleName": "Endnote Reference"
    //                                 },
    //                                 "blocks": [
    //                                     {
    //                                         "characterFormat": {
    //                                             "fontColor": "empty"
    //                                         },
    //                                         "paragraphFormat": {
    //                                             "styleName": "Endnote Text"
    //                                         },
    //                                         "inlines": [
    //                                             {
    //                                                 "text": "\u0002",
    //                                                 "characterFormat": {
    //                                                     "fontColor": "empty",
    //                                                     "styleName": "Endnote Reference"
    //                                                 }
    //                                             },
    //                                             {
    //                                                 "text": " Hello ",
    //                                                 "characterFormat": {
    //                                                     "fontColor": "empty"
    //                                                 }
    //                                             },
    //                                             {
    //                                                 "text": "foot",
    //                                                 "characterFormat": {
    //                                                     "fontColor": "empty"
    //                                                 }
    //                                             },
    //                                             {
    //                                                 "text": "note",
    //                                                 "characterFormat": {
    //                                                     "fontColor": "empty"
    //                                                 }
    //                                             },
    //                                             {
    //                                                 "text": "s",
    //                                                 "characterFormat": {
    //                                                     "fontColor": "empty"
    //                                                 }
    //                                             }
    //                                         ]
    //                                     }
    //                                 ],
    //                                 "symbolCode": 0,
    //                                 "symbolFontName": "Symbol"
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         "characterFormat": {
    //                             "fontColor": "empty"
    //                         },
    //                         "paragraphFormat": {
    //                             "styleName": "Normal"
    //                         },
    //                         "inlines": []
    //                     },
    //                     {
    //                         "characterFormat": {
    //                             "fontColor": "empty"
    //                         },
    //                         "paragraphFormat": {
    //                             "styleName": "Normal"
    //                         },
    //                         "inlines": [
    //                             {
    //                                 "text": "Arunkumar",
    //                                 "characterFormat": {
    //                                     "fontColor": "empty"
    //                                 }
    //                             },
    //                             {
    //                                 "footnoteType": "Footnote",
    //                                 "characterFormat": {
    //                                     "fontColor": "empty",
    //                                     "styleName": "Footnote Reference"
    //                                 },
    //                                 "blocks": [
    //                                     {
    //                                         "characterFormat": {
    //                                             "fontColor": "empty"
    //                                         },
    //                                         "paragraphFormat": {
    //                                             "styleName": "Footnote Text"
    //                                         },
    //                                         "inlines": [
    //                                             {
    //                                                 "text": "\u0002",
    //                                                 "characterFormat": {
    //                                                     "fontColor": "empty",
    //                                                     "styleName": "Footnote Reference"
    //                                                 }
    //                                             },
    //                                             {
    //                                                 "text": " ",
    //                                                 "characterFormat": {
    //                                                     "fontColor": "empty"
    //                                                 }
    //                                             },
    //                                             {
    //                                                 "text": "sadasdas",
    //                                                 "characterFormat": {
    //                                                     "fontColor": "empty"
    //                                                 }
    //                                             }
    //                                         ]
    //                                     }
    //                                 ],
    //                                 "symbolCode": 0,
    //                                 "symbolFontName": "Symbol"
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         "characterFormat": {
    //                             "fontColor": "empty"
    //                         },
    //                         "paragraphFormat": {
    //                             "styleName": "Normal"
    //                         },
    //                         "inlines": [
    //                             {
    //                                 "text": "syncfusion",
    //                                 "characterFormat": {
    //                                     "fontColor": "empty"
    //                                 }
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         "characterFormat": {
    //                             "fontColor": "empty"
    //                         },
    //                         "paragraphFormat": {
    //                             "styleName": "Normal"
    //                         },
    //                         "inlines": [
    //                             {
    //                                 "text": " ",
    //                                 "characterFormat": {
    //                                     "fontColor": "empty"
    //                                 }
    //                             },
    //                             {
    //                                 "text": "Arun",
    //                                 "characterFormat": {
    //                                     "fontColor": "empty"
    //                                 }
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         "characterFormat": {
    //                             "fontColor": "empty"
    //                         },
    //                         "paragraphFormat": {
    //                             "styleName": "Normal"
    //                         },
    //                         "inlines": [
    //                             {
    //                                 "text": "kumar",
    //                                 "characterFormat": {
    //                                     "fontColor": "empty"
    //                                 }
    //                             }
    //                         ]
    //                     }
    //                 ],
    //                 "headersFooters": {},
    //                 "sectionFormat": {
    //                     "headerDistance": 36.0,
    //                     "footerDistance": 36.0,
    //                     "pageWidth": 612.0,
    //                     "pageHeight": 792.0,
    //                     "leftMargin": 72.0,
    //                     "rightMargin": 72.0,
    //                     "topMargin": 72.0,
    //                     "bottomMargin": 72.0,
    //                     "differentFirstPage": false,
    //                     "differentOddAndEvenPages": false,
    //                     "bidi": false,
    //                     "restartPageNumbering": false,
    //                     "pageStartingNumber": 0,
    //                     "footnotePosition": "PrintAtBottomOfPage",
    //                     "endnotePosition": "DisplayEndOfDocument",
    //                     "endnoteNumberFormat": "LowerCaseRoman",
    //                     "footNoteNumberFormat": "Arabic",
    //                     "restartIndexForFootnotes": "DoNotRestart",
    //                     "restartIndexForEndnotes": "DoNotRestart"
    //                 }
    //             }
    //         ],
    //         "characterFormat": {
    //             "fontSize": 11.0,
    //             "fontFamily": "Calibri",
    //             "fontColor": "empty",
    //             "fontSizeBidi": 11.0,
    //             "fontFamilyBidi": "Arial"
    //         },
    //         "paragraphFormat": {
    //             "afterSpacing": 8.0,
    //             "lineSpacing": 1.0791666507720948,
    //             "lineSpacingType": "Multiple"
    //         },
    //         "background": {
    //             "color": "#FFFFFFFF"
    //         },
    //         "styles": [
    //             {
    //                 "type": "Paragraph",
    //                 "name": "Normal",
    //                 "next": "Normal",
    //                 "characterFormat": {
    //                     "fontColor": "empty"
    //                 }
    //             },
    //             {
    //                 "type": "Character",
    //                 "name": "Default Paragraph Font",
    //                 "characterFormat": {
    //                     "fontColor": "empty"
    //                 }
    //             },
    //             {
    //                 "type": "Paragraph",
    //                 "name": "Footnote Text",
    //                 "basedOn": "Normal",
    //                 "next": "Footnote Text",
    //                 "link": "Footnote Text Char",
    //                 "characterFormat": {
    //                     "fontSize": 10.0,
    //                     "fontColor": "empty",
    //                     "fontSizeBidi": 10.0
    //                 },
    //                 "paragraphFormat": {
    //                     "afterSpacing": 0.0,
    //                     "lineSpacing": 1.0,
    //                     "lineSpacingType": "Multiple"
    //                 }
    //             },
    //             {
    //                 "type": "Character",
    //                 "name": "Footnote Text Char",
    //                 "basedOn": "Default Paragraph Font",
    //                 "characterFormat": {
    //                     "fontSize": 10.0,
    //                     "fontColor": "empty",
    //                     "fontSizeBidi": 10.0
    //                 }
    //             },
    //             {
    //                 "type": "Character",
    //                 "name": "Footnote Reference",
    //                 "basedOn": "Default Paragraph Font",
    //                 "characterFormat": {
    //                     "baselineAlignment": "Superscript",
    //                     "fontColor": "empty"
    //                 }
    //             },
    //             {
    //                 "type": "Paragraph",
    //                 "name": "Endnote Text",
    //                 "basedOn": "Normal",
    //                 "next": "Endnote Text",
    //                 "link": "Endnote Text Char",
    //                 "characterFormat": {
    //                     "fontSize": 10.0,
    //                     "fontColor": "empty",
    //                     "fontSizeBidi": 10.0
    //                 },
    //                 "paragraphFormat": {
    //                     "afterSpacing": 0.0,
    //                     "lineSpacing": 1.0,
    //                     "lineSpacingType": "Multiple"
    //                 }
    //             },
    //             {
    //                 "type": "Character",
    //                 "name": "Endnote Text Char",
    //                 "basedOn": "Default Paragraph Font",
    //                 "characterFormat": {
    //                     "fontSize": 10.0,
    //                     "fontColor": "empty",
    //                     "fontSizeBidi": 10.0
    //                 }
    //             },
    //             {
    //                 "type": "Character",
    //                 "name": "Endnote Reference",
    //                 "basedOn": "Default Paragraph Font",
    //                 "characterFormat": {
    //                     "baselineAlignment": "Superscript",
    //                     "fontColor": "empty"
    //                 }
    //             }
    //         ],
    //         "defaultTabWidth": 36.0,
    //         "formatting": false,
    //         "trackChanges": false,
    //         "protectionType": "NoProtection",
    //         "enforcement": false,
    //         "dontUseHTMLParagraphAutoSpacing": false,
    //         "alignTablesRowByRow": false,
    //         "formFieldShading": true,
    //         "footnotes": {
    //             "separator": [
    //                 {
    //                     "characterFormat": {
    //                         "fontColor": "empty"
    //                     },
    //                     "paragraphFormat": {
    //                         "afterSpacing": 0.0,
    //                         "lineSpacing": 1.0,
    //                         "lineSpacingType": "Multiple",
    //                         "styleName": "Normal"
    //                     },
    //                     "inlines": [
    //                         {
    //                             "text": "\u0003",
    //                             "characterFormat": {
    //                                 "fontColor": "empty"
    //                             }
    //                         }
    //                     ]
    //                 }
    //             ],
    //             "continuationSeparator": [
    //                 {
    //                     "characterFormat": {
    //                         "fontColor": "empty"
    //                     },
    //                     "paragraphFormat": {
    //                         "afterSpacing": 0.0,
    //                         "lineSpacing": 1.0,
    //                         "lineSpacingType": "Multiple",
    //                         "styleName": "Normal"
    //                     },
    //                     "inlines": [
    //                         {
    //                             "text": "\u0004",
    //                             "characterFormat": {
    //                                 "fontColor": "empty"
    //                             }
    //                         }
    //                     ]
    //                 }
    //             ],
    //             "continuationNotice": [
    //                 {
    //                     "characterFormat": {
    //                         "fontColor": "empty"
    //                     },
    //                     "paragraphFormat": {
    //                         "afterSpacing": 0.0,
    //                         "lineSpacing": 1.0,
    //                         "lineSpacingType": "Multiple",
    //                         "styleName": "Normal"
    //                     },
    //                     "inlines": [
    //                         {
    //                             "text": "Heloo",
    //                             "characterFormat": {
    //                                 "fontColor": "empty"
    //                             }
    //                         },
    //                         {
    //                             "text": " here",
    //                             "characterFormat": {
    //                                 "fontColor": "empty"
    //                             }
    //                         }
    //                     ]
    //                 }
    //             ]
    //         },
    //         "endnotes": {
    //             "separator": [
    //                 {
    //                     "characterFormat": {
    //                         "fontColor": "empty"
    //                     },
    //                     "paragraphFormat": {
    //                         "afterSpacing": 0.0,
    //                         "lineSpacing": 1.0,
    //                         "lineSpacingType": "Multiple",
    //                         "styleName": "Normal"
    //                     },
    //                     "inlines": [
    //                         {
    //                             "text": "\u0003",
    //                             "characterFormat": {
    //                                 "fontColor": "empty"
    //                             }
    //                         }
    //                     ]
    //                 }
    //             ],
    //             "continuationSeparator": [
    //                 {
    //                     "characterFormat": {
    //                         "fontColor": "empty"
    //                     },
    //                     "paragraphFormat": {
    //                         "afterSpacing": 0.0,
    //                         "lineSpacing": 1.0,
    //                         "lineSpacingType": "Multiple",
    //                         "styleName": "Normal"
    //                     },
    //                     "inlines": [
    //                         {
    //                             "text": "\u0004",
    //                             "characterFormat": {
    //                                 "fontColor": "empty"
    //                             }
    //                         }
    //                     ]
    //                 }
    //             ],
    //             "continuationNotice": [
    //                 {
    //                     "characterFormat": {
    //                         "fontColor": "empty"
    //                     },
    //                     "paragraphFormat": {
    //                         "afterSpacing": 0.0,
    //                         "lineSpacing": 1.0,
    //                         "lineSpacingType": "Multiple",
    //                         "styleName": "Normal"
    //                     },
    //                     "inlines": [
    //                         {
    //                             "text": "Heloo",
    //                             "characterFormat": {
    //                                 "fontColor": "empty"
    //                             }
    //                         },
    //                         {
    //                             "text": " here",
    //                             "characterFormat": {
    //                                 "fontColor": "empty"
    //                             }
    //                         }
    //                     ]
    //                 }
    //             ]
    //         }
    //     };
    //     let expectdoc: any = {
    //         "sections": [
    //             {
    //                 "blocks": [
    //                     {
    //                         "characterFormat": {
    //                             "fontColor": "empty"
    //                         },
    //                         "paragraphFormat": {
    //                             "styleName": "Normal"
    //                         },
    //                         "inlines": [
    //                             {
    //                                 "text": "footnte",
    //                                 "characterFormat": {
    //                                     "fontColor": "empty"
    //                                 }
    //                             },
    //                             {
    //                                 "footnoteType": "Footnote",
    //                                 "characterFormat": {
    //                                     "fontColor": "empty",
    //                                     "styleName": "Footnote Reference"
    //                                 },
    //                                 "blocks": [
    //                                     {
    //                                         "characterFormat": {
    //                                             "fontColor": "empty"
    //                                         },
    //                                         "paragraphFormat": {
    //                                             "styleName": "Footnote Text"
    //                                         },
    //                                         "inlines": [
    //                                             {
    //                                                 "text": "\u0002",
    //                                                 "characterFormat": {
    //                                                     "fontColor": "empty",
    //                                                     "styleName": "Footnote Reference"
    //                                                 }
    //                                             },
    //                                             {
    //                                                 "text": " ",
    //                                                 "characterFormat": {
    //                                                     "fontColor": "empty"
    //                                                 }
    //                                             },
    //                                             {
    //                                                 "text": "H",
    //                                                 "characterFormat": {
    //                                                     "fontColor": "empty"
    //                                                 }
    //                                             },
    //                                             {
    //                                                 "text": "ello",
    //                                                 "characterFormat": {
    //                                                     "fontColor": "empty"
    //                                                 }
    //                                             },
    //                                             {
    //                                                 "text": " footnote",
    //                                                 "characterFormat": {
    //                                                     "fontColor": "empty"
    //                                                 }
    //                                             }
    //                                         ]
    //                                     }
    //                                 ],
    //                                 "symbolCode": 0,
    //                                 "symbolFontName": "Symbol"
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         "characterFormat": {
    //                             "fontColor": "empty"
    //                         },
    //                         "paragraphFormat": {
    //                             "styleName": "Normal"
    //                         },
    //                         "inlines": [
    //                             {
    //                                 "text": "Endnote",
    //                                 "characterFormat": {
    //                                     "fontColor": "empty"
    //                                 }
    //                             },
    //                             {
    //                                 "footnoteType": "Endnote",
    //                                 "characterFormat": {
    //                                     "fontColor": "empty",
    //                                     "styleName": "Endnote Reference"
    //                                 },
    //                                 "blocks": [
    //                                     {
    //                                         "characterFormat": {
    //                                             "fontColor": "empty"
    //                                         },
    //                                         "paragraphFormat": {
    //                                             "styleName": "Endnote Text"
    //                                         },
    //                                         "inlines": [
    //                                             {
    //                                                 "text": "\u0002",
    //                                                 "characterFormat": {
    //                                                     "fontColor": "empty",
    //                                                     "styleName": "Endnote Reference"
    //                                                 }
    //                                             },
    //                                             {
    //                                                 "text": " Hello ",
    //                                                 "characterFormat": {
    //                                                     "fontColor": "empty"
    //                                                 }
    //                                             },
    //                                             {
    //                                                 "text": "foot",
    //                                                 "characterFormat": {
    //                                                     "fontColor": "empty"
    //                                                 }
    //                                             },
    //                                             {
    //                                                 "text": "note",
    //                                                 "characterFormat": {
    //                                                     "fontColor": "empty"
    //                                                 }
    //                                             },
    //                                             {
    //                                                 "text": "s",
    //                                                 "characterFormat": {
    //                                                     "fontColor": "empty"
    //                                                 }
    //                                             }
    //                                         ]
    //                                     }
    //                                 ],
    //                                 "symbolCode": 0,
    //                                 "symbolFontName": "Symbol"
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         "characterFormat": {
    //                             "fontColor": "empty"
    //                         },
    //                         "paragraphFormat": {
    //                             "styleName": "Normal"
    //                         },
    //                         "inlines": []
    //                     },
    //                     {
    //                         "characterFormat": {
    //                             "fontColor": "empty"
    //                         },
    //                         "paragraphFormat": {
    //                             "styleName": "Normal"
    //                         },
    //                         "inlines": [
    //                             {
    //                                 "text": "Arunkumar",
    //                                 "characterFormat": {
    //                                     "fontColor": "empty"
    //                                 }
    //                             },
    //                             {
    //                                 "footnoteType": "Footnote",
    //                                 "characterFormat": {
    //                                     "fontColor": "empty",
    //                                     "styleName": "Footnote Reference"
    //                                 },
    //                                 "blocks": [
    //                                     {
    //                                         "characterFormat": {
    //                                             "fontColor": "empty"
    //                                         },
    //                                         "paragraphFormat": {
    //                                             "styleName": "Footnote Text"
    //                                         },
    //                                         "inlines": [
    //                                             {
    //                                                 "text": "\u0002",
    //                                                 "characterFormat": {
    //                                                     "fontColor": "empty",
    //                                                     "styleName": "Footnote Reference"
    //                                                 }
    //                                             },
    //                                             {
    //                                                 "text": " ",
    //                                                 "characterFormat": {
    //                                                     "fontColor": "empty"
    //                                                 }
    //                                             },
    //                                             {
    //                                                 "text": "sadasdas",
    //                                                 "characterFormat": {
    //                                                     "fontColor": "empty"
    //                                                 }
    //                                             }
    //                                         ]
    //                                     }
    //                                 ],
    //                                 "symbolCode": 0,
    //                                 "symbolFontName": "Symbol"
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         "characterFormat": {
    //                             "fontColor": "empty"
    //                         },
    //                         "paragraphFormat": {
    //                             "styleName": "Normal"
    //                         },
    //                         "inlines": [
    //                             {
    //                                 "text": "syncfusion",
    //                                 "characterFormat": {
    //                                     "fontColor": "empty"
    //                                 }
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         "characterFormat": {
    //                             "fontColor": "empty"
    //                         },
    //                         "paragraphFormat": {
    //                             "styleName": "Normal"
    //                         },
    //                         "inlines": [
    //                             {
    //                                 "text": " ",
    //                                 "characterFormat": {
    //                                     "fontColor": "empty"
    //                                 }
    //                             },
    //                             {
    //                                 "text": "Arun",
    //                                 "characterFormat": {
    //                                     "fontColor": "empty"
    //                                 }
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         "characterFormat": {
    //                             "fontColor": "empty"
    //                         },
    //                         "paragraphFormat": {
    //                             "styleName": "Normal"
    //                         },
    //                         "inlines": [
    //                             {
    //                                 "text": "kumar",
    //                                 "characterFormat": {
    //                                     "fontColor": "empty"
    //                                 }
    //                             }
    //                         ]
    //                     }
    //                 ],
    //                 "headersFooters": {},
    //                 "sectionFormat": {
    //                     "headerDistance": 36.0,
    //                     "footerDistance": 36.0,
    //                     "pageWidth": 612.0,
    //                     "pageHeight": 792.0,
    //                     "leftMargin": 72.0,
    //                     "rightMargin": 72.0,
    //                     "topMargin": 72.0,
    //                     "bottomMargin": 72.0,
    //                     "differentFirstPage": false,
    //                     "differentOddAndEvenPages": false,
    //                     "bidi": false,
    //                     "restartPageNumbering": false,
    //                     "pageStartingNumber": 0,
    //                     "footnotePosition": "PrintAtBottomOfPage",
    //                     "endnotePosition": "DisplayEndOfDocument",
    //                     "endnoteNumberFormat": "LowerCaseRoman",
    //                     "footNoteNumberFormat": "Arabic",
    //                     "restartIndexForFootnotes": "DoNotRestart",
    //                     "restartIndexForEndnotes": "DoNotRestart"
    //                 }
    //             }
    //         ],
    //         "characterFormat": {
    //             "fontSize": 11.0,
    //             "fontFamily": "Calibri",
    //             "fontColor": "empty",
    //             "fontSizeBidi": 11.0,
    //             "fontFamilyBidi": "Arial"
    //         },
    //         "paragraphFormat": {
    //             "afterSpacing": 8.0,
    //             "lineSpacing": 1.0791666507720948,
    //             "lineSpacingType": "Multiple"
    //         },
    //         "background": {
    //             "color": "#FFFFFFFF"
    //         },
    //         "styles": [
    //             {
    //                 "type": "Paragraph",
    //                 "name": "Normal",
    //                 "next": "Normal",
    //                 "characterFormat": {
    //                     "fontColor": "empty"
    //                 }
    //             },
    //             {
    //                 "type": "Character",
    //                 "name": "Default Paragraph Font",
    //                 "characterFormat": {
    //                     "fontColor": "empty"
    //                 }
    //             },
    //             {
    //                 "type": "Paragraph",
    //                 "name": "Footnote Text",
    //                 "basedOn": "Normal",
    //                 "next": "Footnote Text",
    //                 "link": "Footnote Text Char",
    //                 "characterFormat": {
    //                     "fontSize": 10.0,
    //                     "fontColor": "empty",
    //                     "fontSizeBidi": 10.0
    //                 },
    //                 "paragraphFormat": {
    //                     "afterSpacing": 0.0,
    //                     "lineSpacing": 1.0,
    //                     "lineSpacingType": "Multiple"
    //                 }
    //             },
    //             {
    //                 "type": "Character",
    //                 "name": "Footnote Text Char",
    //                 "basedOn": "Default Paragraph Font",
    //                 "characterFormat": {
    //                     "fontSize": 10.0,
    //                     "fontColor": "empty",
    //                     "fontSizeBidi": 10.0
    //                 }
    //             },
    //             {
    //                 "type": "Character",
    //                 "name": "Footnote Reference",
    //                 "basedOn": "Default Paragraph Font",
    //                 "characterFormat": {
    //                     "baselineAlignment": "Superscript",
    //                     "fontColor": "empty"
    //                 }
    //             },
    //             {
    //                 "type": "Paragraph",
    //                 "name": "Endnote Text",
    //                 "basedOn": "Normal",
    //                 "next": "Endnote Text",
    //                 "link": "Endnote Text Char",
    //                 "characterFormat": {
    //                     "fontSize": 10.0,
    //                     "fontColor": "empty",
    //                     "fontSizeBidi": 10.0
    //                 },
    //                 "paragraphFormat": {
    //                     "afterSpacing": 0.0,
    //                     "lineSpacing": 1.0,
    //                     "lineSpacingType": "Multiple"
    //                 }
    //             },
    //             {
    //                 "type": "Character",
    //                 "name": "Endnote Text Char",
    //                 "basedOn": "Default Paragraph Font",
    //                 "characterFormat": {
    //                     "fontSize": 10.0,
    //                     "fontColor": "empty",
    //                     "fontSizeBidi": 10.0
    //                 }
    //             },
    //             {
    //                 "type": "Character",
    //                 "name": "Endnote Reference",
    //                 "basedOn": "Default Paragraph Font",
    //                 "characterFormat": {
    //                     "baselineAlignment": "Superscript",
    //                     "fontColor": "empty"
    //                 }
    //             }
    //         ],
    //         "defaultTabWidth": 36.0,
    //         "formatting": false,
    //         "trackChanges": false,
    //         "protectionType": "NoProtection",
    //         "enforcement": false,
    //         "dontUseHTMLParagraphAutoSpacing": false,
    //         "alignTablesRowByRow": false,
    //         "formFieldShading": true,
    //         "footnotes": {
    //             "separator": [
    //                 {
    //                     "characterFormat": {
    //                         "fontColor": "empty"
    //                     },
    //                     "paragraphFormat": {
    //                         "afterSpacing": 0.0,
    //                         "lineSpacing": 1.0,
    //                         "lineSpacingType": "Multiple",
    //                         "styleName": "Normal"
    //                     },
    //                     "inlines": [
    //                         {
    //                             "text": "\u0003",
    //                             "characterFormat": {
    //                                 "fontColor": "empty"
    //                             }
    //                         }
    //                     ]
    //                 }
    //             ],
    //             "continuationSeparator": [
    //                 {
    //                     "characterFormat": {
    //                         "fontColor": "empty"
    //                     },
    //                     "paragraphFormat": {
    //                         "afterSpacing": 0.0,
    //                         "lineSpacing": 1.0,
    //                         "lineSpacingType": "Multiple",
    //                         "styleName": "Normal"
    //                     },
    //                     "inlines": [
    //                         {
    //                             "text": "\u0004",
    //                             "characterFormat": {
    //                                 "fontColor": "empty"
    //                             }
    //                         }
    //                     ]
    //                 }
    //             ],
    //             "continuationNotice": [
    //                 {
    //                     "characterFormat": {
    //                         "fontColor": "empty"
    //                     },
    //                     "paragraphFormat": {
    //                         "afterSpacing": 0.0,
    //                         "lineSpacing": 1.0,
    //                         "lineSpacingType": "Multiple",
    //                         "styleName": "Normal"
    //                     },
    //                     "inlines": [
    //                         {
    //                             "text": "Heloo",
    //                             "characterFormat": {
    //                                 "fontColor": "empty"
    //                             }
    //                         },
    //                         {
    //                             "text": " here",
    //                             "characterFormat": {
    //                                 "fontColor": "empty"
    //                             }
    //                         }
    //                     ]
    //                 }
    //             ]
    //         },
    //         "endnotes": {
    //             "separator": [
    //                 {
    //                     "characterFormat": {
    //                         "fontColor": "empty"
    //                     },
    //                     "paragraphFormat": {
    //                         "afterSpacing": 0.0,
    //                         "lineSpacing": 1.0,
    //                         "lineSpacingType": "Multiple",
    //                         "styleName": "Normal"
    //                     },
    //                     "inlines": [
    //                         {
    //                             "text": "\u0003",
    //                             "characterFormat": {
    //                                 "fontColor": "empty"
    //                             }
    //                         }
    //                     ]
    //                 }
    //             ],
    //             "continuationSeparator": [
    //                 {
    //                     "characterFormat": {
    //                         "fontColor": "empty"
    //                     },
    //                     "paragraphFormat": {
    //                         "afterSpacing": 0.0,
    //                         "lineSpacing": 1.0,
    //                         "lineSpacingType": "Multiple",
    //                         "styleName": "Normal"
    //                     },
    //                     "inlines": [
    //                         {
    //                             "text": "\u0004",
    //                             "characterFormat": {
    //                                 "fontColor": "empty"
    //                             }
    //                         }
    //                     ]
    //                 }
    //             ],
    //             "continuationNotice": [
    //                 {
    //                     "characterFormat": {
    //                         "fontColor": "empty"
    //                     },
    //                     "paragraphFormat": {
    //                         "afterSpacing": 0.0,
    //                         "lineSpacing": 1.0,
    //                         "lineSpacingType": "Multiple",
    //                         "styleName": "Normal"
    //                     },
    //                     "inlines": [
    //                         {
    //                             "text": "Heloo",
    //                             "characterFormat": {
    //                                 "fontColor": "empty"
    //                             }
    //                         },
    //                         {
    //                             "text": " here",
    //                             "characterFormat": {
    //                                 "fontColor": "empty"
    //                             }
    //                         }
    //                     ]
    //                 }
    //             ]
    //         }
    //     };
    //     editor.open(notedoc);
    //     let json: string = editor.serialize();
    //     editor.open(expectdoc);
    //     let expected: string = editor.serialize();
    //     expect(json).toBe(expected);
    // });
});


let save: any = {
	"sections": [
		{
			"sectionFormat": {
				"pageWidth": 595.2999877929688,
				"pageHeight": 841.9000244140625,
				"leftMargin": 36,
				"rightMargin": 36,
				"topMargin": 36,
				"bottomMargin": 36,
				"differentFirstPage": false,
				"differentOddAndEvenPages": false,
				"headerDistance": 35.45000076293945,
				"footerDistance": 35.45000076293945,
				"bidi": false
			},
			"blocks": [
				{
					"paragraphFormat": {
						"styleName": "Normal",
						"listFormat": {}
					},
					"characterFormat": {
						"fontColor": "empty"
					},
					"inlines": [
						{
							"characterFormat": {},
							"bookmarkType": 0,
							"name": "_Hlk67572716"
						},
						{
							"characterFormat": {},
							"shapeId": 6,
							"name": "Rectangle 6",
							"visible": true,
							"width": 152.35,
							"height": 801.6,
							"widthScale": 100,
							"heightScale": 100,
							"verticalPosition": -13.8,
							"verticalOrigin": "Paragraph",
							"verticalAlignment": "None",
							"verticalRelativePercent": -3.4028235e38,
							"horizontalPosition": -19.8,
							"horizontalOrigin": "Column",
							"horizontalAlignment": "None",
							"horizontalRelativePercent": -3.4028235e38,
							"zOrderPosition": 251664384,
							"allowOverlap": true,
							"textWrappingStyle": "Behind",
							"textWrappingType": "Both",
							"distanceBottom": 0,
							"distanceLeft": 9,
							"distanceRight": 9,
							"distanceTop": 0,
							"layoutInCell": true,
							"lockAnchor": false,
							"autoShapeType": "Rectangle",
							"fillFormat": {
								"color": "#DCE6F2FF",
								"fill": true
							},
							"lineFormat": {
								"lineFormatType": "None",
								"color": "#385D8AFF",
								"weight": 2,
								"lineStyle": "Solid",
								"line": false
							},
							"textFrame": {
								"textVerticalAlignment": "Middle",
								"leftMargin": 5.4,
								"rightMargin": 5.4,
								"topMargin": 2.7,
								"bottomMargin": 2.7,
								"blocks": [
									{
										"paragraphFormat": {
											"textAlignment": "Justify",
											"styleName": "No Spacing",
											"listFormat": {}
										},
										"characterFormat": {
											"fontColor": "empty"
										},
										"inlines": []
									},
									{
										"paragraphFormat": {
											"textAlignment": "Justify",
											"styleName": "No Spacing",
											"listFormat": {}
										},
										"characterFormat": {
											"fontColor": "empty"
										},
										"inlines": []
									},
									{
										"paragraphFormat": {
											"textAlignment": "Justify",
											"styleName": "No Spacing",
											"listFormat": {}
										},
										"characterFormat": {
											"fontColor": "empty"
										},
										"inlines": []
									},
									{
										"paragraphFormat": {
											"textAlignment": "Justify",
											"styleName": "No Spacing",
											"listFormat": {}
										},
										"characterFormat": {
											"fontColor": "empty"
										},
										"inlines": []
									},
									{
										"paragraphFormat": {
											"textAlignment": "Justify",
											"styleName": "No Spacing",
											"listFormat": {}
										},
										"characterFormat": {
											"fontColor": "empty"
										},
										"inlines": []
									}
								]
							}
						},
						{
							"characterFormat": {},
							"shapeId": 5,
							"name": "Text Box 5",
							"visible": true,
							"width": 152.35,
							"height": 176.72724999999998,
							"widthScale": 100,
							"heightScale": 100,
							"verticalPosition": -6.7,
							"verticalOrigin": "Paragraph",
							"verticalAlignment": "None",
							"verticalRelativePercent": -3.4028235e38,
							"horizontalPosition": -20.09,
							"horizontalOrigin": "Column",
							"horizontalAlignment": "None",
							"horizontalRelativePercent": -3.4028235e38,
							"zOrderPosition": 251686912,
							"allowOverlap": true,
							"textWrappingStyle": "InFrontOfText",
							"textWrappingType": "Both",
							"distanceBottom": 0,
							"distanceLeft": 9,
							"distanceRight": 9,
							"distanceTop": 0,
							"layoutInCell": true,
							"lockAnchor": false,
							"autoShapeType": "Rectangle",
							"fillFormat": {
								"color": "#DCE6F2FF",
								"fill": true
							},
							"lineFormat": {
								"lineFormatType": "None",
								"color": "#000000FF",
								"weight": 0.5,
								"lineStyle": "Solid",
								"line": false
							},
							"textFrame": {
								"textVerticalAlignment": "Top",
								"leftMargin": 5.4,
								"rightMargin": 5.4,
								"topMargin": 2.7,
								"bottomMargin": 2.7,
								"blocks": [
									{
										"paragraphFormat": {
											"textAlignment": "Center",
											"styleName": "Normal",
											"listFormat": {}
										},
										"characterFormat": {
											"fontColor": "empty"
										},
										"inlines": [
											{
												"characterFormat": {},
												"imageString": "data:image/jpeg;base64,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",
												"isMetaFile": false,
												"width": 124.2,
												"height": 186.49294000000004,
												"iscrop": false,
												"name": "Picture 8",
												"visible": true,
												"widthScale": 31.069418,
												"heightScale": 31.082155,
												"verticalPosition": 0,
												"verticalOrigin": "Margin",
												"verticalAlignment": "None",
												"horizontalPosition": 0,
												"horizontalOrigin": "Margin",
												"horizontalAlignment": "None",
												"allowOverlap": true,
												"textWrappingStyle": "Inline",
												"textWrappingType": "Both",
												"layoutInCell": true,
												"zOrderPosition": 2147483647
											}
										]
									}
								]
							}
						},
						{
							"characterFormat": {},
							"shapeId": 1,
							"name": "Rectangle 1",
							"visible": true,
							"width": 406.8,
							"height": 82.85,
							"widthScale": 100,
							"heightScale": 100,
							"verticalPosition": -14.25,
							"verticalOrigin": "Paragraph",
							"verticalAlignment": "None",
							"verticalRelativePercent": -3.4028235e38,
							"horizontalPosition": 138.95,
							"horizontalOrigin": "Column",
							"horizontalAlignment": "None",
							"horizontalRelativePercent": -3.4028235e38,
							"zOrderPosition": 251660288,
							"allowOverlap": true,
							"textWrappingStyle": "InFrontOfText",
							"textWrappingType": "Both",
							"distanceBottom": 0,
							"distanceLeft": 9,
							"distanceRight": 9,
							"distanceTop": 0,
							"layoutInCell": true,
							"lockAnchor": false,
							"autoShapeType": "Rectangle",
							"fillFormat": {
								"color": "#17375EFF",
								"fill": true
							},
							"lineFormat": {
								"lineFormatType": "Solid",
								"color": "#FFFFFFFF",
								"weight": 2,
								"lineStyle": "Solid",
								"line": true
							},
							"textFrame": {
								"textVerticalAlignment": "Middle",
								"leftMargin": 5.4,
								"rightMargin": 5.4,
								"topMargin": 2.7,
								"bottomMargin": 2.7,
								"blocks": [
									{
										"paragraphFormat": {
											"textAlignment": "Center",
											"lineSpacing": 1,
											"lineSpacingType": "Multiple",
											"styleName": "Normal",
											"listFormat": {}
										},
										"characterFormat": {
											"bold": true,
											"fontSize": 1,
											"fontFamily": "MV Boli",
											"fontColor": "empty",
											"boldBidi": true,
											"fontSizeBidi": 1,
											"fontFamilyBidi": "MV Boli"
										},
										"inlines": []
									},
									{
										"paragraphFormat": {
											"textAlignment": "Center",
											"lineSpacing": 1,
											"lineSpacingType": "Multiple",
											"styleName": "Normal",
											"listFormat": {}
										},
										"characterFormat": {
											"bold": true,
											"fontSize": 26,
											"fontFamily": "MV Boli",
											"fontColor": "empty",
											"boldBidi": true,
											"fontSizeBidi": 26,
											"fontFamilyBidi": "MV Boli"
										},
										"inlines": [
											{
												"characterFormat": {
													"bold": true,
													"fontSize": 26,
													"fontFamily": "MV Boli",
													"fontColor": "empty",
													"boldBidi": true,
													"fontSizeBidi": 26,
													"fontFamilyBidi": "MV Boli"
												},
												"text": "LIM "
											},
											{
												"characterFormat": {
													"bold": true,
													"fontSize": 26,
													"fontFamily": "MV Boli",
													"fontColor": "empty",
													"boldBidi": true,
													"fontSizeBidi": 26,
													"fontFamilyBidi": "MV Boli"
												},
												"text": "ZE Dong"
											}
										]
									},
									{
										"paragraphFormat": {
											"textAlignment": "Center",
											"lineSpacing": 1,
											"lineSpacingType": "Multiple",
											"styleName": "Normal",
											"listFormat": {}
										},
										"characterFormat": {
											"bold": true,
											"fontFamily": "Times New Roman",
											"fontColor": "empty",
											"boldBidi": true,
											"fontFamilyBidi": "Times New Roman"
										},
										"inlines": []
									}
								]
							}
						}
					]
				},
				{
					"paragraphFormat": {
						"styleName": "Normal",
						"listFormat": {}
					},
					"characterFormat": {
						"fontColor": "empty"
					},
					"inlines": []
				},
				{
					"paragraphFormat": {
						"styleName": "Normal",
						"listFormat": {}
					},
					"characterFormat": {
						"fontColor": "empty"
					},
					"inlines": [
						{
							"characterFormat": {},
							"shapeId": 2,
							"name": "Straight Connector 2",
							"visible": true,
							"width": 46.04654000000001,
							"height": 0,
							"widthScale": 100,
							"heightScale": 100,
							"verticalPosition": 7.7,
							"verticalOrigin": "Paragraph",
							"verticalAlignment": "None",
							"verticalRelativePercent": -3.4028235e38,
							"horizontalPosition": 315.63,
							"horizontalOrigin": "Column",
							"horizontalAlignment": "None",
							"horizontalRelativePercent": -3.4028235e38,
							"zOrderPosition": 251661312,
							"allowOverlap": true,
							"textWrappingStyle": "InFrontOfText",
							"textWrappingType": "Both",
							"distanceBottom": 0,
							"distanceLeft": 9,
							"distanceRight": 9,
							"distanceTop": 0,
							"layoutInCell": true,
							"lockAnchor": false,
							"autoShapeType": "StraightConnector",
							"fillFormat": {
								"color": "#FFFFFFFF",
								"fill": true
							},
							"lineFormat": {
								"lineFormatType": "Solid",
								"color": "#FFFFFFFF",
								"weight": 1,
								"lineStyle": "Solid",
								"line": true
							},
							"textFrame": {
								"textVerticalAlignment": "Top",
								"leftMargin": 5.31525,
								"rightMargin": 5.31525,
								"topMargin": 2.76375,
								"bottomMargin": 2.76375,
								"blocks": [
									{
										"paragraphFormat": {
											"listFormat": {}
										},
										"characterFormat": {},
										"inlines": []
									}
								]
							}
						}
					]
				},
				{
					"paragraphFormat": {
						"styleName": "Normal",
						"listFormat": {}
					},
					"characterFormat": {
						"fontColor": "empty"
					},
					"inlines": [
						{
							"characterFormat": {},
							"shapeId": 3,
							"name": "Rectangle 3",
							"visible": true,
							"width": 406.83599999999998,
							"height": 22.6,
							"widthScale": 100,
							"heightScale": 100,
							"verticalPosition": 0.67,
							"verticalOrigin": "Paragraph",
							"verticalAlignment": "None",
							"verticalRelativePercent": -3.4028235e38,
							"horizontalPosition": 138.98,
							"horizontalOrigin": "Column",
							"horizontalAlignment": "None",
							"horizontalRelativePercent": -3.4028235e38,
							"zOrderPosition": 251662336,
							"allowOverlap": true,
							"textWrappingStyle": "InFrontOfText",
							"textWrappingType": "Both",
							"distanceBottom": 0,
							"distanceLeft": 9,
							"distanceRight": 9,
							"distanceTop": 0,
							"layoutInCell": true,
							"lockAnchor": false,
							"autoShapeType": "Rectangle",
							"fillFormat": {
								"color": "#17375EFF",
								"fill": true
							},
							"lineFormat": {
								"lineFormatType": "Solid",
								"color": "#FFFFFFFF",
								"weight": 2,
								"lineStyle": "Solid",
								"line": true
							},
							"textFrame": {
								"textVerticalAlignment": "Middle",
								"leftMargin": 5.4,
								"rightMargin": 5.4,
								"topMargin": 2.7,
								"bottomMargin": 2.7,
								"blocks": [
									{
										"paragraphFormat": {
											"textAlignment": "Center",
											"styleName": "Normal",
											"listFormat": {}
										},
										"characterFormat": {
											"bold": true,
											"fontSize": 12,
											"fontFamily": "Times New Roman",
											"fontColor": "empty",
											"boldBidi": true,
											"fontSizeBidi": 12,
											"fontFamilyBidi": "Times New Roman"
										},
										"inlines": [
											{
												"characterFormat": {
													"bold": true,
													"fontSize": 12,
													"fontFamily": "Times New Roman",
													"fontColor": "empty",
													"boldBidi": true,
													"fontSizeBidi": 12,
													"fontFamilyBidi": "Times New Roman"
												},
												"text": "OBJECTIVE"
											}
										]
									}
								]
							}
						}
					]
				},
				{
					"paragraphFormat": {
						"styleName": "Normal",
						"listFormat": {}
					},
					"characterFormat": {
						"fontColor": "empty"
					},
					"inlines": [
						{
							"characterFormat": {},
							"shapeId": 7,
							"name": "Text Box 7",
							"visible": true,
							"width": 407.85,
							"height": 85.8,
							"widthScale": 100,
							"heightScale": 100,
							"verticalPosition": 2.05,
							"verticalOrigin": "Paragraph",
							"verticalAlignment": "None",
							"verticalRelativePercent": -3.4028235e38,
							"horizontalPosition": 139.2,
							"horizontalOrigin": "Column",
							"horizontalAlignment": "None",
							"horizontalRelativePercent": -3.4028235e38,
							"zOrderPosition": 251674112,
							"allowOverlap": true,
							"textWrappingStyle": "InFrontOfText",
							"textWrappingType": "Both",
							"distanceBottom": 0,
							"distanceLeft": 9,
							"distanceRight": 9,
							"distanceTop": 0,
							"layoutInCell": true,
							"lockAnchor": false,
							"autoShapeType": "Rectangle",
							"fillFormat": {
								"color": "#FFFFFFFF",
								"fill": true
							},
							"lineFormat": {
								"lineFormatType": "None",
								"color": "#000000FF",
								"weight": 0.5,
								"lineStyle": "Solid",
								"line": false
							},
							"textFrame": {
								"textVerticalAlignment": "Top",
								"leftMargin": 5.4,
								"rightMargin": 5.4,
								"topMargin": 2.7,
								"bottomMargin": 2.7,
								"blocks": [
									{
										"paragraphFormat": {
											"firstLineIndent": -10.899999618530274,
											"textAlignment": "Justify",
											"styleName": "List Paragraph",
											"listFormat": {
												"listId": 0,
												"listLevelNumber": 0
											}
										},
										"characterFormat": {
											"fontSize": 11.5,
											"fontFamily": "Cambria",
											"fontColor": "empty",
											"fontSizeBidi": 11.5,
											"fontFamilyBidi": "Cambria"
										},
										"inlines": [
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "An "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "adaptable "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "and "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "responsible "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "fresh "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "graduate "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "seeking "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "an "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "entry-level "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "position "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "as "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "a"
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": " "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "Software "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "Engineer "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "or"
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": " "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "Data "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "Scientist"
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "."
											}
										]
									},
									{
										"paragraphFormat": {
											"firstLineIndent": -10.899999618530274,
											"textAlignment": "Justify",
											"styleName": "List Paragraph",
											"listFormat": {
												"listId": 0,
												"listLevelNumber": 0
											}
										},
										"characterFormat": {
											"fontSize": 11.5,
											"fontFamily": "Cambria",
											"fontColor": "empty",
											"fontSizeBidi": 11.5,
											"fontFamilyBidi": "Cambria"
										},
										"inlines": [
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "Enthusiastic"
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": " and"
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": " "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "highly "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "motivated"
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": " "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "Computer "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "Science"
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": " student "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "with "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "proven "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "leadership "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "capabilities, "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "who "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "likes "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "to "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "take "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "initiative "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "and "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "seek "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "out "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "new "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "challenges."
											}
										]
									}
								]
							}
						}
					]
				},
				{
					"paragraphFormat": {
						"styleName": "Normal",
						"listFormat": {}
					},
					"characterFormat": {
						"fontColor": "empty"
					},
					"inlines": []
				},
				{
					"paragraphFormat": {
						"styleName": "Normal",
						"listFormat": {}
					},
					"characterFormat": {
						"fontColor": "empty"
					},
					"inlines": []
				},
				{
					"paragraphFormat": {
						"styleName": "Normal",
						"listFormat": {}
					},
					"characterFormat": {
						"fontColor": "empty"
					},
					"inlines": [
						{
							"characterFormat": {},
							"shapeId": 432,
							"name": "Rectangle 432",
							"visible": true,
							"width": 402.65,
							"height": 22.6,
							"widthScale": 100,
							"heightScale": 100,
							"verticalPosition": 13.3,
							"verticalOrigin": "Paragraph",
							"verticalAlignment": "None",
							"verticalRelativePercent": -3.4028235e38,
							"horizontalPosition": 143.95,
							"horizontalOrigin": "Column",
							"horizontalAlignment": "None",
							"horizontalRelativePercent": -3.4028235e38,
							"zOrderPosition": 251649536,
							"allowOverlap": true,
							"textWrappingStyle": "InFrontOfText",
							"textWrappingType": "Both",
							"distanceBottom": 0,
							"distanceLeft": 9,
							"distanceRight": 9,
							"distanceTop": 0,
							"layoutInCell": true,
							"lockAnchor": false,
							"autoShapeType": "Rectangle",
							"fillFormat": {
								"color": "#17375EFF",
								"fill": true
							},
							"lineFormat": {
								"lineFormatType": "Solid",
								"color": "#FFFFFFFF",
								"weight": 2,
								"lineStyle": "Solid",
								"line": true
							},
							"textFrame": {
								"textVerticalAlignment": "Middle",
								"leftMargin": 5.4,
								"rightMargin": 5.4,
								"topMargin": 2.7,
								"bottomMargin": 2.7,
								"blocks": [
									{
										"paragraphFormat": {
											"textAlignment": "Center",
											"styleName": "Normal",
											"listFormat": {}
										},
										"characterFormat": {
											"bold": true,
											"fontSize": 12,
											"fontFamily": "Times New Roman",
											"fontColor": "empty",
											"boldBidi": true,
											"fontSizeBidi": 12,
											"fontFamilyBidi": "Times New Roman"
										},
										"inlines": [
											{
												"characterFormat": {
													"bold": true,
													"fontSize": 12,
													"fontFamily": "Times New Roman",
													"fontColor": "empty",
													"boldBidi": true,
													"fontSizeBidi": 12,
													"fontFamilyBidi": "Times New Roman"
												},
												"text": "QUALIFICATIONS"
											}
										]
									}
								]
							}
						},
						{
							"characterFormat": {},
							"shapeId": 4,
							"name": "Rectangle 4",
							"visible": true,
							"width": 138.1,
							"height": 29.14544,
							"widthScale": 100,
							"heightScale": 100,
							"verticalPosition": 13.12,
							"verticalOrigin": "Paragraph",
							"verticalAlignment": "None",
							"verticalRelativePercent": -3.4028235e38,
							"horizontalPosition": -12.620000000000001,
							"horizontalOrigin": "Column",
							"horizontalAlignment": "None",
							"horizontalRelativePercent": -3.4028235e38,
							"zOrderPosition": 251646463,
							"allowOverlap": true,
							"textWrappingStyle": "InFrontOfText",
							"textWrappingType": "Both",
							"distanceBottom": 0,
							"distanceLeft": 9,
							"distanceRight": 9,
							"distanceTop": 0,
							"layoutInCell": true,
							"lockAnchor": false,
							"autoShapeType": "Rectangle",
							"fillFormat": {
								"color": "#17375EFF",
								"fill": true
							},
							"lineFormat": {
								"lineFormatType": "Solid",
								"color": "#17375EFF",
								"weight": 2,
								"lineStyle": "Solid",
								"line": true
							},
							"textFrame": {
								"textVerticalAlignment": "Middle",
								"leftMargin": 5.4,
								"rightMargin": 5.4,
								"topMargin": 2.7,
								"bottomMargin": 2.7,
								"blocks": [
									{
										"paragraphFormat": {
											"textAlignment": "Center",
											"styleName": "Normal",
											"listFormat": {}
										},
										"characterFormat": {
											"bold": true,
											"fontFamily": "Times New Roman",
											"fontColor": "empty",
											"boldBidi": true,
											"fontFamilyBidi": "Times New Roman"
										},
										"inlines": [
											{
												"characterFormat": {
													"bold": true,
													"fontFamily": "Times New Roman",
													"fontColor": "empty",
													"boldBidi": true,
													"fontFamilyBidi": "Times New Roman"
												},
												"text": "CONTACT DETAILS"
											}
										]
									}
								]
							}
						}
					]
				},
				{
					"paragraphFormat": {
						"styleName": "Normal",
						"listFormat": {}
					},
					"characterFormat": {
						"fontColor": "empty"
					},
					"inlines": [
						{
							"characterFormat": {},
							"shapeId": 9,
							"name": "Text Box 9",
							"visible": true,
							"width": 151.6,
							"height": 127.2,
							"widthScale": 100,
							"heightScale": 100,
							"verticalPosition": 28.65,
							"verticalOrigin": "Paragraph",
							"verticalAlignment": "None",
							"verticalRelativePercent": -3.4028235e38,
							"horizontalPosition": -19.2,
							"horizontalOrigin": "Column",
							"horizontalAlignment": "None",
							"horizontalRelativePercent": -3.4028235e38,
							"zOrderPosition": 251647487,
							"allowOverlap": true,
							"textWrappingStyle": "InFrontOfText",
							"textWrappingType": "Both",
							"distanceBottom": 0,
							"distanceLeft": 9,
							"distanceRight": 9,
							"distanceTop": 0,
							"layoutInCell": true,
							"lockAnchor": false,
							"autoShapeType": "Rectangle",
							"fillFormat": {
								"color": "#DCE6F2FF",
								"fill": true
							},
							"lineFormat": {
								"lineFormatType": "None",
								"color": "#000000FF",
								"weight": 0.5,
								"lineStyle": "Solid",
								"line": false
							},
							"textFrame": {
								"textVerticalAlignment": "Top",
								"leftMargin": 5.4,
								"rightMargin": 5.4,
								"topMargin": 2.7,
								"bottomMargin": 2.7,
								"blocks": [
									{
										"rows": [
											{
												"cells": [
													{
														"blocks": [
															{
																"paragraphFormat": {
																	"textAlignment": "Justify",
																	"styleName": "Normal",
																	"listFormat": {}
																},
																"characterFormat": {
																	"fontColor": "empty"
																},
																"inlines": [
																	{
																		"characterFormat": {},
																		"imageString": "data:image/png;base64,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",
																		"isMetaFile": false,
																		"width": 20.660950000000005,
																		"height": 16.744170000000005,
																		"iscrop": true,
																		"bottom": 12.663999557495118,
																		"right": 2.183000087738037,
																		"left": 5.677000045776367,
																		"top": 12.663999557495118,
																		"getimagewidth": 256,
																		"getimageheight": 256,
																		"name": "Picture 22",
																		"alternativeText": "Related image",
																		"visible": true,
																		"widthScale": 10.760909,
																		"heightScale": 8.720923,
																		"verticalPosition": 0,
																		"verticalOrigin": "Margin",
																		"verticalAlignment": "None",
																		"horizontalPosition": 0,
																		"horizontalOrigin": "Margin",
																		"horizontalAlignment": "None",
																		"allowOverlap": true,
																		"textWrappingStyle": "Inline",
																		"textWrappingType": "Both",
																		"layoutInCell": true,
																		"zOrderPosition": 2147483647
																	}
																]
															}
														],
														"cellFormat": {
															"borders": {
																"top": {
																	"lineStyle": "None",
																	"lineWidth": 0
																},
																"left": {
																	"lineStyle": "None",
																	"lineWidth": 0
																},
																"right": {
																	"lineStyle": "None",
																	"lineWidth": 0
																},
																"bottom": {
																	"lineStyle": "None",
																	"lineWidth": 0
																},
																"diagonalDown": {
																	"lineStyle": "None",
																	"lineWidth": 0
																},
																"diagonalUp": {
																	"lineStyle": "None",
																	"lineWidth": 0
																},
																"horizontal": {
																	"lineStyle": "None",
																	"lineWidth": 0
																},
																"vertical": {
																	"lineStyle": "None",
																	"lineWidth": 0
																}
															},
															"shading": {},
															"preferredWidth": 28.350000381469728,
															"preferredWidthType": "Point",
															"cellWidth": 28.35000152346203,
															"columnSpan": 1,
															"rowSpan": 1,
															"verticalAlignment": "Top"
														},
														"columnIndex": 0
													},
													{
														"blocks": [
															{
																"paragraphFormat": {
																	"textAlignment": "Justify",
																	"styleName": "Normal",
																	"listFormat": {}
																},
																"characterFormat": {
																	"fontFamily": "Cambria",
																	"fontColor": "empty",
																	"fontFamilyBidi": "Cambria"
																},
																"inlines": [
																	{
																		"characterFormat": {
																			"fontFamily": "Cambria",
																			"fontColor": "empty",
																			"fontFamilyBidi": "Cambria"
																		},
																		"text": "6B-1 "
																	},
																	{
																		"characterFormat": {
																			"fontFamily": "Cambria",
																			"fontColor": "empty",
																			"fontFamilyBidi": "Cambria"
																		},
																		"text": "Jalan "
																	},
																	{
																		"characterFormat": {
																			"fontFamily": "Cambria",
																			"fontColor": "empty",
																			"fontFamilyBidi": "Cambria"
																		},
																		"text": "Bakar     "
																	},
																	{
																		"characterFormat": {
																			"fontFamily": "Cambria",
																			"fontColor": "empty",
																			"fontFamilyBidi": "Cambria"
																		},
																		"text": "Sampah, "
																	},
																	{
																		"characterFormat": {
																			"fontFamily": "Cambria",
																			"fontColor": "empty",
																			"fontFamilyBidi": "Cambria"
																		},
																		"text": "Pekan "
																	},
																	{
																		"characterFormat": {
																			"fontFamily": "Cambria",
																			"fontColor": "empty",
																			"fontFamilyBidi": "Cambria"
																		},
																		"text": "Lama, "
																	},
																	{
																		"characterFormat": {
																			"fontFamily": "Cambria",
																			"fontColor": "empty",
																			"fontFamilyBidi": "Cambria"
																		},
																		"text": "08000 "
																	},
																	{
																		"characterFormat": {
																			"fontFamily": "Cambria",
																			"fontColor": "empty",
																			"fontFamilyBidi": "Cambria"
																		},
																		"text": "Sungai "
																	},
																	{
																		"characterFormat": {
																			"fontFamily": "Cambria",
																			"fontColor": "empty",
																			"fontFamilyBidi": "Cambria"
																		},
																		"text": "Petani, "
																	},
																	{
																		"characterFormat": {
																			"fontFamily": "Cambria",
																			"fontColor": "empty",
																			"fontFamilyBidi": "Cambria"
																		},
																		"text": "Kedah."
																	}
																]
															},
															{
																"paragraphFormat": {
																	"textAlignment": "Justify",
																	"styleName": "Normal",
																	"listFormat": {}
																},
																"characterFormat": {
																	"fontSize": 9,
																	"fontFamily": "Cambria",
																	"fontColor": "empty",
																	"fontSizeBidi": 9,
																	"fontFamilyBidi": "Cambria"
																},
																"inlines": []
															}
														],
														"cellFormat": {
															"borders": {
																"top": {
																	"lineStyle": "None",
																	"lineWidth": 0
																},
																"left": {
																	"lineStyle": "None",
																	"lineWidth": 0
																},
																"right": {
																	"lineStyle": "None",
																	"lineWidth": 0
																},
																"bottom": {
																	"lineStyle": "None",
																	"lineWidth": 0
																},
																"diagonalDown": {
																	"lineStyle": "None",
																	"lineWidth": 0
																},
																"diagonalUp": {
																	"lineStyle": "None",
																	"lineWidth": 0
																},
																"horizontal": {
																	"lineStyle": "None",
																	"lineWidth": 0
																},
																"vertical": {
																	"lineStyle": "None",
																	"lineWidth": 0
																}
															},
															"shading": {},
															"preferredWidth": 113.69999694824219,
															"preferredWidthType": "Point",
															"cellWidth": 113.70000152829579,
															"columnSpan": 1,
															"rowSpan": 1,
															"verticalAlignment": "Top"
														},
														"columnIndex": 1
													}
												],
												"rowFormat": {
													"height": 1,
													"allowBreakAcrossPages": true,
													"heightType": "AtLeast",
													"isHeader": false,
													"borders": {
														"top": {
															"lineStyle": "None",
															"lineWidth": 0
														},
														"left": {
															"lineStyle": "None",
															"lineWidth": 0
														},
														"right": {
															"lineStyle": "None",
															"lineWidth": 0
														},
														"bottom": {
															"lineStyle": "None",
															"lineWidth": 0
														},
														"diagonalDown": {
															"lineStyle": "None",
															"lineWidth": 0
														},
														"diagonalUp": {
															"lineStyle": "None",
															"lineWidth": 0
														},
														"horizontal": {
															"lineStyle": "None",
															"lineWidth": 0
														},
														"vertical": {
															"lineStyle": "None",
															"lineWidth": 0
														}
													},
													"gridBefore": 0,
													"gridBeforeWidth": 0,
													"gridBeforeWidthType": "Point",
													"gridAfter": 0,
													"gridAfterWidth": 0,
													"gridAfterWidthType": "Point",
													"leftIndent": 0
												}
											},
											{
												"cells": [
													{
														"blocks": [
															{
																"paragraphFormat": {
																	"textAlignment": "Justify",
																	"styleName": "Normal",
																	"listFormat": {}
																},
																"characterFormat": {
																	"fontFamily": "Cambria",
																	"fontColor": "empty",
																	"fontFamilyBidi": "Cambria"
																},
																"inlines": [
																	{
																		"characterFormat": {},
																		"imageString": "data:image/png;base64,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",
																		"isMetaFile": false,
																		"width": 20.092989999999998,
																		"height": 20.092989999999998,
																		"iscrop": false,
																		"name": "Picture 23",
																		"alternativeText": "Related image",
																		"visible": true,
																		"widthScale": 5.23255,
																		"heightScale": 5.23255,
																		"verticalPosition": 0,
																		"verticalOrigin": "Margin",
																		"verticalAlignment": "None",
																		"horizontalPosition": 0,
																		"horizontalOrigin": "Margin",
																		"horizontalAlignment": "None",
																		"allowOverlap": true,
																		"textWrappingStyle": "Inline",
																		"textWrappingType": "Both",
																		"layoutInCell": true,
																		"zOrderPosition": 2147483647
																	}
																]
															}
														],
														"cellFormat": {
															"borders": {
																"top": {
																	"lineStyle": "None",
																	"lineWidth": 0
																},
																"left": {
																	"lineStyle": "None",
																	"lineWidth": 0
																},
																"right": {
																	"lineStyle": "None",
																	"lineWidth": 0
																},
																"bottom": {
																	"lineStyle": "None",
																	"lineWidth": 0
																},
																"diagonalDown": {
																	"lineStyle": "None",
																	"lineWidth": 0
																},
																"diagonalUp": {
																	"lineStyle": "None",
																	"lineWidth": 0
																},
																"horizontal": {
																	"lineStyle": "None",
																	"lineWidth": 0
																},
																"vertical": {
																	"lineStyle": "None",
																	"lineWidth": 0
																}
															},
															"shading": {},
															"preferredWidth": 28.350000381469728,
															"preferredWidthType": "Point",
															"cellWidth": 28.35000152346203,
															"columnSpan": 1,
															"rowSpan": 1,
															"verticalAlignment": "Top"
														},
														"columnIndex": 0
													},
													{
														"blocks": [
															{
																"paragraphFormat": {
																	"textAlignment": "Justify",
																	"styleName": "Normal",
																	"listFormat": {}
																},
																"characterFormat": {
																	"fontFamily": "Cambria",
																	"fontColor": "empty",
																	"fontFamilyBidi": "Cambria"
																},
																"inlines": [
																	{
																		"characterFormat": {
																			"fontFamily": "Cambria",
																			"fontColor": "empty",
																			"fontFamilyBidi": "Cambria"
																		},
																		"text": "012-"
																	},
																	{
																		"characterFormat": {
																			"fontFamily": "Cambria",
																			"fontColor": "empty",
																			"fontFamilyBidi": "Cambria"
																		},
																		"text": "4090566"
																	}
																]
															},
															{
																"paragraphFormat": {
																	"textAlignment": "Justify",
																	"styleName": "Normal",
																	"listFormat": {}
																},
																"characterFormat": {
																	"fontSize": 12,
																	"fontFamily": "Cambria",
																	"fontColor": "empty",
																	"fontSizeBidi": 12,
																	"fontFamilyBidi": "Cambria"
																},
																"inlines": []
															}
														],
														"cellFormat": {
															"borders": {
																"top": {
																	"lineStyle": "None",
																	"lineWidth": 0
																},
																"left": {
																	"lineStyle": "None",
																	"lineWidth": 0
																},
																"right": {
																	"lineStyle": "None",
																	"lineWidth": 0
																},
																"bottom": {
																	"lineStyle": "None",
																	"lineWidth": 0
																},
																"diagonalDown": {
																	"lineStyle": "None",
																	"lineWidth": 0
																},
																"diagonalUp": {
																	"lineStyle": "None",
																	"lineWidth": 0
																},
																"horizontal": {
																	"lineStyle": "None",
																	"lineWidth": 0
																},
																"vertical": {
																	"lineStyle": "None",
																	"lineWidth": 0
																}
															},
															"shading": {},
															"preferredWidth": 113.69999694824219,
															"preferredWidthType": "Point",
															"cellWidth": 113.70000152829579,
															"columnSpan": 1,
															"rowSpan": 1,
															"verticalAlignment": "Top"
														},
														"columnIndex": 1
													}
												],
												"rowFormat": {
													"height": 1,
													"allowBreakAcrossPages": true,
													"heightType": "AtLeast",
													"isHeader": false,
													"borders": {
														"top": {
															"lineStyle": "None",
															"lineWidth": 0
														},
														"left": {
															"lineStyle": "None",
															"lineWidth": 0
														},
														"right": {
															"lineStyle": "None",
															"lineWidth": 0
														},
														"bottom": {
															"lineStyle": "None",
															"lineWidth": 0
														},
														"diagonalDown": {
															"lineStyle": "None",
															"lineWidth": 0
														},
														"diagonalUp": {
															"lineStyle": "None",
															"lineWidth": 0
														},
														"horizontal": {
															"lineStyle": "None",
															"lineWidth": 0
														},
														"vertical": {
															"lineStyle": "None",
															"lineWidth": 0
														}
													},
													"gridBefore": 0,
													"gridBeforeWidth": 0,
													"gridBeforeWidthType": "Point",
													"gridAfter": 0,
													"gridAfterWidth": 0,
													"gridAfterWidthType": "Point",
													"leftIndent": 0
												}
											},
											{
												"cells": [
													{
														"blocks": [
															{
																"paragraphFormat": {
																	"textAlignment": "Justify",
																	"styleName": "Normal",
																	"listFormat": {}
																},
																"characterFormat": {
																	"fontColor": "empty"
																},
																"inlines": [
																	{
																		"characterFormat": {},
																		"imageString": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEX///8AAADgAADY2Njl5eVcXFxjY2NZWVl/f3+wsLCmpqb4+PiioqKpqam7u7vV1dX2uLj2wsLhFRXzpKT3vb30sbHhCwv74+P40dH+9vbkIyO2trbBwcHLy8tsbGycnJz529v4zMzrbGzlLS3qZmblNzfrdXXoRkbvi4vvgYHlHh7CZsBOAAADpUlEQVR4nO3da1faQBSF4ekAUQlUEFs14AXxVv7/D6yaQiZx5mSEYXF2ut+PNKzyyK5diYDmR9czx34AB49C/CjE759w3jvvWr15Tdgz3atXE54f++EcIArxoxA/CvGjED8K8aMQPwrxoxA/CvGLEeZ9jPJdhfk4GyCUjb3ECGE/Q6m/q3DwfudjP0ERZYN9hKdn2hvd3+0jHJz5/kBVuTk96bbQUEjhYR9ckiikUH8UUqg/CinUH4UU6o9CCvVHIYX6o5BC/VFIof4opFB/FFKoPwop1B+FFOqPQgrjyxfjVC38Lxk9tnAxGqZqdKtSOE4GHA5/fuNJpDCtcNHbv4VqYYqPLjgfUViPQgrjozA2CptRSGF8/59w+Wrt+rr1btNna1cPzg0wwuXavncxabnX7PfHYYXzlYARvlobQZyUR9mXm+1NMEK7SSLONgcVV9vb8IQXv4J3KSeKKlxXxNCzONkeYp8AV3p9UT1+P3FWHVAsq5thhGZSEb1DrSZq7dS5HUdoLiuBZ6jORG3tCwAkNJfCUJ2Jrqe1P0ESCkMNTdSACYNDDU7UoAkDQw1P1MAJvUMVJmrwhJ6hShM1gMIvQxUnahCFjaHKEzWQQneoxR95ogZTWBuqPFEDKnSHKk/UoArdoYoTNbDC5lBDEzW4QjMpYiZqgIXG/S76JhwHK5zVVipcnkIVuv/RW/HyFKhwYhuFr6NiCmdNoDBUSGFjovJQEYXuRN9ahwoorJ8uSZenPsMTNk+X2q6jwgm/ntHL11HhhL4zenmoYEL/Gb04VCxh6KKTNFQoYfiikzBUJKF00Sk8VCChfF00OFQcYdt10dBQYYRT5xn0n9G7Q0X8GfCzNNEyZ6iPgD/HlydaVg11DfhajJaJlm2HugIUrlomWrYZKuJKHz6vHhbSM/hROdRnxNe1meuXYvW0DB6+aflYrB7dlzDiCM3N1dVN6GDhMCDhjlHYjEIK46MwNgqbUUhhfJ/vA07wO8N1vw94ONo/3e/lTpVOYfc/UyG//ZmqW52fi/FuTNW3/lZ+eguF+qOQQv1RSKH+KKRQfxRSqD8KKdQfhRTqj0IK9UchhfqjkEL9UUih/iikUH8UUqg/CmXh6Hsv3jlK+wnvD/vgkrSHMMuyu1P9ZdmuwnycDQYn+svG3n9KEUKT9zHyf6+IEWJHIX4U4kchfhTiRyF+FOJHIX4U4kchfnVhijeZa6sunCf4ZdPamteEHY5C/CjEr/vCv0ec0g+AtS1QAAAAAElFTkSuQmCC",
																		"isMetaFile": true,
																		"width": 19.024639999999999,
																		"height": 12.558110000000003,
																		"iscrop": false,
																		"name": "Picture 24",
																		"visible": true,
																		"widthScale": 72.47484,
																		"heightScale": 49.24749,
																		"verticalPosition": 0,
																		"verticalOrigin": "Margin",
																		"verticalAlignment": "None",
																		"horizontalPosition": 0,
																		"horizontalOrigin": "Margin",
																		"horizontalAlignment": "None",
																		"allowOverlap": true,
																		"textWrappingStyle": "Inline",
																		"textWrappingType": "Both",
																		"layoutInCell": true,
																		"zOrderPosition": 2147483647
																	}
																]
															}
														],
														"cellFormat": {
															"borders": {
																"top": {
																	"lineStyle": "None",
																	"lineWidth": 0
																},
																"left": {
																	"lineStyle": "None",
																	"lineWidth": 0
																},
																"right": {
																	"lineStyle": "None",
																	"lineWidth": 0
																},
																"bottom": {
																	"lineStyle": "None",
																	"lineWidth": 0
																},
																"diagonalDown": {
																	"lineStyle": "None",
																	"lineWidth": 0
																},
																"diagonalUp": {
																	"lineStyle": "None",
																	"lineWidth": 0
																},
																"horizontal": {
																	"lineStyle": "None",
																	"lineWidth": 0
																},
																"vertical": {
																	"lineStyle": "None",
																	"lineWidth": 0
																}
															},
															"shading": {},
															"preferredWidth": 28.350000381469728,
															"preferredWidthType": "Point",
															"cellWidth": 28.35000152346203,
															"columnSpan": 1,
															"rowSpan": 1,
															"verticalAlignment": "Top"
														},
														"columnIndex": 0
													},
													{
														"blocks": [
															{
																"paragraphFormat": {
																	"textAlignment": "Justify",
																	"styleName": "Normal",
																	"listFormat": {}
																},
																"characterFormat": {
																	"fontSize": 10,
																	"fontFamily": "Cambria",
																	"fontColor": "empty",
																	"fontSizeBidi": 10,
																	"fontFamilyBidi": "Cambria"
																},
																"inlines": [
																	{
																		"characterFormat": {
																			"fontSize": 10,
																			"fontFamily": "Cambria",
																			"fontColor": "empty",
																			"fontSizeBidi": 10,
																			"fontFamilyBidi": "Cambria"
																		},
																		"text": "crashlim97"
																	},
																	{
																		"characterFormat": {
																			"fontSize": 10,
																			"fontFamily": "Cambria",
																			"fontColor": "empty",
																			"fontSizeBidi": 10,
																			"fontFamilyBidi": "Cambria"
																		},
																		"text": "@gmail.com"
																	}
																]
															},
															{
																"paragraphFormat": {
																	"textAlignment": "Justify",
																	"styleName": "Normal",
																	"listFormat": {}
																},
																"characterFormat": {
																	"fontSize": 10,
																	"fontFamily": "Cambria",
																	"fontColor": "empty",
																	"fontSizeBidi": 10,
																	"fontFamilyBidi": "Cambria"
																},
																"inlines": []
															},
															{
																"paragraphFormat": {
																	"textAlignment": "Justify",
																	"styleName": "Normal",
																	"listFormat": {}
																},
																"characterFormat": {
																	"fontFamily": "Cambria",
																	"fontColor": "empty",
																	"fontFamilyBidi": "Cambria"
																},
																"inlines": []
															},
															{
																"paragraphFormat": {
																	"textAlignment": "Justify",
																	"styleName": "Normal",
																	"listFormat": {}
																},
																"characterFormat": {
																	"fontFamily": "Cambria",
																	"fontColor": "empty",
																	"fontFamilyBidi": "Cambria"
																},
																"inlines": []
															},
															{
																"paragraphFormat": {
																	"textAlignment": "Justify",
																	"styleName": "Normal",
																	"listFormat": {}
																},
																"characterFormat": {
																	"fontFamily": "Cambria",
																	"fontColor": "empty",
																	"fontFamilyBidi": "Cambria"
																},
																"inlines": []
															},
															{
																"paragraphFormat": {
																	"textAlignment": "Justify",
																	"styleName": "Normal",
																	"listFormat": {}
																},
																"characterFormat": {
																	"fontFamily": "Cambria",
																	"fontColor": "empty",
																	"fontFamilyBidi": "Cambria"
																},
																"inlines": []
															}
														],
														"cellFormat": {
															"borders": {
																"top": {
																	"lineStyle": "None",
																	"lineWidth": 0
																},
																"left": {
																	"lineStyle": "None",
																	"lineWidth": 0
																},
																"right": {
																	"lineStyle": "None",
																	"lineWidth": 0
																},
																"bottom": {
																	"lineStyle": "None",
																	"lineWidth": 0
																},
																"diagonalDown": {
																	"lineStyle": "None",
																	"lineWidth": 0
																},
																"diagonalUp": {
																	"lineStyle": "None",
																	"lineWidth": 0
																},
																"horizontal": {
																	"lineStyle": "None",
																	"lineWidth": 0
																},
																"vertical": {
																	"lineStyle": "None",
																	"lineWidth": 0
																}
															},
															"shading": {},
															"preferredWidth": 113.69999694824219,
															"preferredWidthType": "Point",
															"cellWidth": 113.70000152829579,
															"columnSpan": 1,
															"rowSpan": 1,
															"verticalAlignment": "Top"
														},
														"columnIndex": 1
													}
												],
												"rowFormat": {
													"height": 1,
													"allowBreakAcrossPages": true,
													"heightType": "AtLeast",
													"isHeader": false,
													"borders": {
														"top": {
															"lineStyle": "None",
															"lineWidth": 0
														},
														"left": {
															"lineStyle": "None",
															"lineWidth": 0
														},
														"right": {
															"lineStyle": "None",
															"lineWidth": 0
														},
														"bottom": {
															"lineStyle": "None",
															"lineWidth": 0
														},
														"diagonalDown": {
															"lineStyle": "None",
															"lineWidth": 0
														},
														"diagonalUp": {
															"lineStyle": "None",
															"lineWidth": 0
														},
														"horizontal": {
															"lineStyle": "None",
															"lineWidth": 0
														},
														"vertical": {
															"lineStyle": "None",
															"lineWidth": 0
														}
													},
													"gridBefore": 0,
													"gridBeforeWidth": 0,
													"gridBeforeWidthType": "Point",
													"gridAfter": 0,
													"gridAfterWidth": 0,
													"gridAfterWidthType": "Point",
													"leftIndent": 0
												}
											}
										],
										"grid": [
											28.35000152346203,
											113.70000152829579
										],
										"tableFormat": {
											"borders": {
												"top": {
													"lineStyle": "None",
													"lineWidth": 0
												},
												"left": {
													"lineStyle": "None",
													"lineWidth": 0
												},
												"right": {
													"lineStyle": "None",
													"lineWidth": 0
												},
												"bottom": {
													"lineStyle": "None",
													"lineWidth": 0
												},
												"diagonalDown": {
													"lineStyle": "None",
													"lineWidth": 0
												},
												"diagonalUp": {
													"lineStyle": "None",
													"lineWidth": 0
												},
												"horizontal": {
													"lineStyle": "None",
													"lineWidth": 0
												},
												"vertical": {
													"lineStyle": "None",
													"lineWidth": 0
												}
											},
											"shading": {},
											"cellSpacing": 0,
											"leftIndent": 0,
											"tableAlignment": "Left",
											"topMargin": 0,
											"rightMargin": 5.4,
											"leftMargin": 5.4,
											"bottomMargin": 0,
											"preferredWidth": 142.0500030517578,
											"preferredWidthType": "Point",
											"bidi": false,
											"allowAutoFit": false
										},
										"columnCount": 2
									},
									{
										"paragraphFormat": {
											"textAlignment": "Justify",
											"lineSpacing": 1,
											"lineSpacingType": "Multiple",
											"styleName": "Normal",
											"listFormat": {}
										},
										"characterFormat": {
											"fontFamily": "Cambria",
											"fontColor": "empty",
											"fontFamilyBidi": "Cambria"
										},
										"inlines": []
									},
									{
										"paragraphFormat": {
											"textAlignment": "Justify",
											"lineSpacing": 1,
											"lineSpacingType": "Multiple",
											"styleName": "Normal",
											"listFormat": {}
										},
										"characterFormat": {
											"fontFamily": "Cambria",
											"fontColor": "empty",
											"fontFamilyBidi": "Cambria"
										},
										"inlines": [
											{
												"characterFormat": {
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontFamilyBidi": "Cambria"
												},
												"text": " "
											}
										]
									},
									{
										"paragraphFormat": {
											"textAlignment": "Justify",
											"lineSpacing": 1,
											"lineSpacingType": "Multiple",
											"styleName": "Normal",
											"listFormat": {}
										},
										"characterFormat": {
											"fontFamily": "Cambria",
											"fontColor": "empty",
											"fontFamilyBidi": "Cambria"
										},
										"inlines": []
									}
								]
							}
						},
						{
							"characterFormat": {},
							"shapeId": 433,
							"name": "Text Box 433",
							"visible": true,
							"width": 402.55,
							"height": 115.8,
							"widthScale": 100,
							"heightScale": 100,
							"verticalPosition": 18.45,
							"verticalOrigin": "Paragraph",
							"verticalAlignment": "None",
							"verticalRelativePercent": -3.4028235e38,
							"horizontalPosition": 148.8,
							"horizontalOrigin": "Column",
							"horizontalAlignment": "None",
							"horizontalRelativePercent": -3.4028235e38,
							"zOrderPosition": 251651584,
							"allowOverlap": true,
							"textWrappingStyle": "InFrontOfText",
							"textWrappingType": "Both",
							"distanceBottom": 0,
							"distanceLeft": 9,
							"distanceRight": 9,
							"distanceTop": 0,
							"layoutInCell": true,
							"lockAnchor": false,
							"autoShapeType": "Rectangle",
							"fillFormat": {
								"color": "#FFFFFFFF",
								"fill": true
							},
							"lineFormat": {
								"lineFormatType": "None",
								"color": "#000000FF",
								"weight": 0.5,
								"lineStyle": "Solid",
								"line": false
							},
							"textFrame": {
								"textVerticalAlignment": "Top",
								"leftMargin": 5.4,
								"rightMargin": 5.4,
								"topMargin": 2.7,
								"bottomMargin": 2.7,
								"blocks": [
									{
										"paragraphFormat": {
											"textAlignment": "Justify",
											"styleName": "No Spacing",
											"listFormat": {}
										},
										"characterFormat": {
											"bold": true,
											"fontSize": 11.5,
											"fontFamily": "Cambria",
											"fontColor": "empty",
											"boldBidi": true,
											"fontSizeBidi": 11.5,
											"fontFamilyBidi": "Cambria"
										},
										"inlines": [
											{
												"characterFormat": {
													"bold": true,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "#000000FF",
													"boldBidi": true,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "Bachelor "
											},
											{
												"characterFormat": {
													"bold": true,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "#000000FF",
													"boldBidi": true,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "of "
											},
											{
												"characterFormat": {
													"bold": true,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "#000000FF",
													"boldBidi": true,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "Computer "
											},
											{
												"characterFormat": {
													"bold": true,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "#000000FF",
													"boldBidi": true,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "Science "
											},
											{
												"characterFormat": {
													"bold": true,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "#000000FF",
													"boldBidi": true,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "(Information "
											},
											{
												"characterFormat": {
													"bold": true,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "#000000FF",
													"boldBidi": true,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "System)"
											},
											{
												"characterFormat": {
													"bold": true,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "#000000FF",
													"boldBidi": true,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "\t"
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "201"
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "7"
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": " – "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "20"
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "21"
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "#000000FF",
													"styleName": "Location Char Char",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "         "
											}
										]
									},
									{
										"paragraphFormat": {
											"styleName": "No Spacing",
											"listFormat": {}
										},
										"characterFormat": {
											"italic": false,
											"fontSize": 11.5,
											"fontFamily": "Times New Roman",
											"fontColor": "#000000FF",
											"italicBidi": false,
											"fontSizeBidi": 11.5,
											"fontFamilyBidi": "Times New Roman"
										},
										"inlines": [
											{
												"characterFormat": {
													"bold": false,
													"italic": false,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "#000000FF",
													"styleName": "College Char Char",
													"boldBidi": false,
													"italicBidi": false,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "University of Malaya, "
											},
											{
												"characterFormat": {
													"italic": false,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "#000000FF",
													"styleName": "Location Char Char",
													"italicBidi": false,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "Kuala Lumpur"
											},
											{
												"characterFormat": {
													"bold": true,
													"italic": false,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "#000000FF",
													"styleName": "Location Char Char",
													"boldBidi": true,
													"italicBidi": false,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "\t"
											},
											{
												"characterFormat": {
													"italic": false,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "#000000FF",
													"styleName": "Location Char Char",
													"italicBidi": false,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "         "
											},
											{
												"characterFormat": {
													"italic": false,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "#000000FF",
													"styleName": "Location Char Char",
													"italicBidi": false,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "\t"
											},
											{
												"characterFormat": {
													"bold": true,
													"italic": false,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "#000000FF",
													"styleName": "Location Char Char",
													"boldBidi": true,
													"italicBidi": false,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "\t"
											},
											{
												"characterFormat": {
													"bold": true,
													"italic": false,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "#000000FF",
													"styleName": "Location Char Char",
													"boldBidi": true,
													"italicBidi": false,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "\t"
											},
											{
												"characterFormat": {
													"bold": true,
													"italic": false,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "#000000FF",
													"styleName": "Location Char Char",
													"boldBidi": true,
													"italicBidi": false,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "            "
											}
										]
									},
									{
										"paragraphFormat": {
											"textAlignment": "Justify",
											"styleName": "No Spacing",
											"listFormat": {}
										},
										"characterFormat": {
											"italic": false,
											"fontSize": 11.5,
											"fontFamily": "Cambria",
											"fontColor": "empty",
											"italicBidi": false,
											"fontSizeBidi": 11.5,
											"fontFamilyBidi": "Cambria"
										},
										"inlines": [
											{
												"characterFormat": {
													"italic": false,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "#000000FF",
													"styleName": "Location Char Char",
													"italicBidi": false,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "CGPA"
											},
											{
												"characterFormat": {
													"italic": false,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "#000000FF",
													"styleName": "Location Char Char",
													"italicBidi": false,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "\t"
											},
											{
												"characterFormat": {
													"italic": false,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "#000000FF",
													"styleName": "Location Char Char",
													"italicBidi": false,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "\t"
											},
											{
												"characterFormat": {
													"italic": false,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "#000000FF",
													"styleName": "Location Char Char",
													"italicBidi": false,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": ": "
											},
											{
												"characterFormat": {
													"italic": false,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "#000000FF",
													"styleName": "Location Char Char",
													"italicBidi": false,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "3."
											},
											{
												"characterFormat": {
													"italic": false,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "#000000FF",
													"styleName": "Location Char Char",
													"italicBidi": false,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "70 "
											},
											{
												"characterFormat": {
													"italic": false,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "#000000FF",
													"styleName": "Location Char Char",
													"italicBidi": false,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "("
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "#000000FF",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "P"
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "#000000FF",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "ass "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "#000000FF",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "with "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "#000000FF",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "H"
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "#000000FF",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "onours"
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "#000000FF",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": " with "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "#000000FF",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "D"
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "#000000FF",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "istinction)"
											}
										]
									},
									{
										"paragraphFormat": {
											"textAlignment": "Justify",
											"lineSpacing": 1.149999976158142,
											"lineSpacingType": "Multiple",
											"styleName": "No Spacing",
											"listFormat": {}
										},
										"characterFormat": {
											"italic": false,
											"fontSize": 11.5,
											"fontFamily": "Cambria",
											"fontColor": "empty",
											"italicBidi": false,
											"fontSizeBidi": 11.5,
											"fontFamilyBidi": "Cambria"
										},
										"inlines": []
									},
									{
										"paragraphFormat": {
											"textAlignment": "Justify",
											"lineSpacing": 1.149999976158142,
											"lineSpacingType": "Multiple",
											"styleName": "No Spacing",
											"listFormat": {}
										},
										"characterFormat": {
											"bold": true,
											"fontSize": 11.5,
											"fontFamily": "Cambria",
											"fontColor": "#000000FF",
											"boldBidi": true,
											"fontSizeBidi": 11.5,
											"fontFamilyBidi": "Cambria"
										},
										"inlines": [
											{
												"characterFormat": {
													"italic": false,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "#000000FF",
													"styleName": "College Char Char",
													"italicBidi": false,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "Sijil"
											},
											{
												"characterFormat": {
													"italic": false,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "#000000FF",
													"styleName": "College Char Char",
													"italicBidi": false,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": " Tinggi "
											},
											{
												"characterFormat": {
													"italic": false,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "#000000FF",
													"styleName": "College Char Char",
													"italicBidi": false,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "Persekolahan"
											},
											{
												"characterFormat": {
													"italic": false,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "#000000FF",
													"styleName": "College Char Char",
													"italicBidi": false,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": " Malaysia "
											},
											{
												"characterFormat": {
													"italic": false,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "#000000FF",
													"styleName": "College Char Char",
													"italicBidi": false,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "(STPM)"
											},
											{
												"characterFormat": {
													"bold": true,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "#000000FF",
													"styleName": "Location Char Char",
													"boldBidi": true,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "\t"
											},
											{
												"characterFormat": {
													"bold": true,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "#000000FF",
													"styleName": "Location Char Char",
													"boldBidi": true,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "\t"
											},
											{
												"characterFormat": {
													"bold": true,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "#000000FF",
													"styleName": "Location Char Char",
													"boldBidi": true,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "\t"
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "20"
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "15"
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": " – "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "201"
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "6"
											},
											{
												"characterFormat": {
													"bold": true,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "#000000FF",
													"styleName": "Location Char Char",
													"boldBidi": true,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "    "
											}
										]
									},
									{
										"paragraphFormat": {
											"textAlignment": "Justify",
											"lineSpacing": 1.149999976158142,
											"lineSpacingType": "Multiple",
											"styleName": "No Spacing",
											"listFormat": {}
										},
										"characterFormat": {
											"bold": true,
											"fontSize": 11.5,
											"fontFamily": "Cambria",
											"fontColor": "empty",
											"boldBidi": true,
											"fontSizeBidi": 11.5,
											"fontFamilyBidi": "Cambria"
										},
										"inlines": [
											{
												"characterFormat": {
													"bold": false,
													"italic": false,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "#000000FF",
													"styleName": "College Char Char",
													"boldBidi": false,
													"italicBidi": false,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "SMK "
											},
											{
												"characterFormat": {
													"bold": false,
													"italic": false,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "#000000FF",
													"styleName": "College Char Char",
													"boldBidi": false,
													"italicBidi": false,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "Ibrahim,"
											},
											{
												"characterFormat": {
													"bold": true,
													"italic": false,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "#000000FF",
													"styleName": "Location Char Char",
													"boldBidi": true,
													"italicBidi": false,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": " "
											},
											{
												"characterFormat": {
													"italic": false,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "#000000FF",
													"styleName": "Location Char Char",
													"italicBidi": false,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "Sungai "
											},
											{
												"characterFormat": {
													"italic": false,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "#000000FF",
													"styleName": "Location Char Char",
													"italicBidi": false,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "Petani"
											},
											{
												"characterFormat": {
													"bold": true,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"boldBidi": true,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": " "
											}
										]
									},
									{
										"paragraphFormat": {
											"textAlignment": "Justify",
											"lineSpacing": 1.149999976158142,
											"lineSpacingType": "Multiple",
											"styleName": "No Spacing",
											"listFormat": {}
										},
										"characterFormat": {
											"fontSize": 11.5,
											"fontFamily": "Cambria",
											"fontColor": "empty",
											"fontSizeBidi": 11.5,
											"fontFamilyBidi": "Cambria"
										},
										"inlines": [
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "CGPA"
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "\t"
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "\t"
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": ": "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "3"
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "."
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "34"
											}
										]
									},
									{
										"paragraphFormat": {
											"styleName": "Normal",
											"listFormat": {}
										},
										"characterFormat": {
											"fontColor": "empty"
										},
										"inlines": []
									}
								]
							}
						}
					]
				},
				{
					"paragraphFormat": {
						"styleName": "Normal",
						"listFormat": {}
					},
					"characterFormat": {
						"fontColor": "empty"
					},
					"inlines": []
				},
				{
					"paragraphFormat": {
						"styleName": "Normal",
						"listFormat": {}
					},
					"characterFormat": {
						"fontColor": "empty"
					},
					"inlines": []
				},
				{
					"paragraphFormat": {
						"styleName": "Normal",
						"listFormat": {}
					},
					"characterFormat": {
						"fontColor": "empty"
					},
					"inlines": []
				},
				{
					"paragraphFormat": {
						"styleName": "Normal",
						"listFormat": {}
					},
					"characterFormat": {
						"fontColor": "empty"
					},
					"inlines": []
				},
				{
					"paragraphFormat": {
						"styleName": "Normal",
						"listFormat": {}
					},
					"characterFormat": {
						"fontColor": "empty"
					},
					"inlines": [
						{
							"characterFormat": {},
							"shapeId": 434,
							"name": "Rectangle 434",
							"visible": true,
							"width": 403.5,
							"height": 21,
							"widthScale": 100,
							"heightScale": 100,
							"verticalPosition": 15.15,
							"verticalOrigin": "Paragraph",
							"verticalAlignment": "None",
							"verticalRelativePercent": -3.4028235e38,
							"horizontalPosition": 146.1,
							"horizontalOrigin": "Column",
							"horizontalAlignment": "None",
							"horizontalRelativePercent": -3.4028235e38,
							"zOrderPosition": 251658752,
							"allowOverlap": true,
							"textWrappingStyle": "InFrontOfText",
							"textWrappingType": "Both",
							"distanceBottom": 0,
							"distanceLeft": 9,
							"distanceRight": 9,
							"distanceTop": 0,
							"layoutInCell": true,
							"lockAnchor": false,
							"autoShapeType": "Rectangle",
							"fillFormat": {
								"color": "#17375EFF",
								"fill": true
							},
							"lineFormat": {
								"lineFormatType": "Solid",
								"color": "#FFFFFFFF",
								"weight": 2,
								"lineStyle": "Solid",
								"line": true
							},
							"textFrame": {
								"textVerticalAlignment": "Middle",
								"leftMargin": 5.4,
								"rightMargin": 5.4,
								"topMargin": 2.7,
								"bottomMargin": 2.7,
								"blocks": [
									{
										"paragraphFormat": {
											"textAlignment": "Center",
											"styleName": "Normal",
											"listFormat": {}
										},
										"characterFormat": {
											"bold": true,
											"fontSize": 12,
											"fontFamily": "Times New Roman",
											"fontColor": "empty",
											"boldBidi": true,
											"fontSizeBidi": 12,
											"fontFamilyBidi": "Times New Roman"
										},
										"inlines": [
											{
												"characterFormat": {
													"bold": true,
													"fontSize": 12,
													"fontFamily": "Times New Roman",
													"fontColor": "empty",
													"boldBidi": true,
													"fontSizeBidi": 12,
													"fontFamilyBidi": "Times New Roman"
												},
												"text": "INTERNSHIP"
											},
											{
												"characterFormat": {
													"bold": true,
													"fontSize": 12,
													"fontFamily": "Times New Roman",
													"fontColor": "empty",
													"boldBidi": true,
													"fontSizeBidi": 12,
													"fontFamilyBidi": "Times New Roman"
												},
												"text": " EXPERIENCE"
											}
										]
									}
								]
							}
						}
					]
				},
				{
					"paragraphFormat": {
						"styleName": "Normal",
						"listFormat": {}
					},
					"characterFormat": {
						"fontColor": "empty"
					},
					"inlines": [
						{
							"characterFormat": {},
							"shapeId": 435,
							"name": "Text Box 435",
							"visible": true,
							"width": 394.75,
							"height": 190.8,
							"widthScale": 100,
							"heightScale": 100,
							"verticalPosition": 21.2,
							"verticalOrigin": "Paragraph",
							"verticalAlignment": "None",
							"verticalRelativePercent": -3.4028235e38,
							"horizontalPosition": 150,
							"horizontalOrigin": "Column",
							"horizontalAlignment": "None",
							"horizontalRelativePercent": -3.4028235e38,
							"zOrderPosition": 251659776,
							"allowOverlap": true,
							"textWrappingStyle": "InFrontOfText",
							"textWrappingType": "Both",
							"distanceBottom": 0,
							"distanceLeft": 9,
							"distanceRight": 9,
							"distanceTop": 0,
							"layoutInCell": true,
							"lockAnchor": false,
							"autoShapeType": "Rectangle",
							"fillFormat": {
								"color": "#FFFFFFFF",
								"fill": true
							},
							"lineFormat": {
								"lineFormatType": "None",
								"color": "#000000FF",
								"weight": 0.5,
								"lineStyle": "Solid",
								"line": false
							},
							"textFrame": {
								"textVerticalAlignment": "Top",
								"leftMargin": 5.4,
								"rightMargin": 5.4,
								"topMargin": 2.7,
								"bottomMargin": 2.7,
								"blocks": [
									{
										"paragraphFormat": {
											"styleName": "No Spacing",
											"listFormat": {}
										},
										"characterFormat": {
											"fontSize": 11.5,
											"fontFamily": "Cambria",
											"fontColor": "empty",
											"fontSizeBidi": 11.5,
											"fontFamilyBidi": "Cambria"
										},
										"inlines": [
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"styleName": "Strong",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "Business Consultant"
											},
											{
												"characterFormat": {
													"bold": false,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"styleName": "Strong",
													"boldBidi": false,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "\t"
											},
											{
												"characterFormat": {
													"bold": false,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"styleName": "Strong",
													"boldBidi": false,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "\t"
											},
											{
												"characterFormat": {
													"bold": false,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"styleName": "Strong",
													"boldBidi": false,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "\t"
											},
											{
												"characterFormat": {
													"bold": false,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"styleName": "Strong",
													"boldBidi": false,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "\t"
											},
											{
												"characterFormat": {
													"bold": false,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"styleName": "Strong",
													"boldBidi": false,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "      "
											},
											{
												"characterFormat": {
													"bold": false,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"styleName": "Strong",
													"boldBidi": false,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "   "
											},
											{
												"characterFormat": {
													"bold": false,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"styleName": "Strong",
													"boldBidi": false,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "August"
											},
											{
												"characterFormat": {
													"bold": false,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"styleName": "Strong",
													"boldBidi": false,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": " 2019 – "
											},
											{
												"characterFormat": {
													"bold": false,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"styleName": "Strong",
													"boldBidi": false,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "January "
											},
											{
												"characterFormat": {
													"bold": false,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"styleName": "Strong",
													"boldBidi": false,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "20"
											},
											{
												"characterFormat": {
													"bold": false,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"styleName": "Strong",
													"boldBidi": false,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "20"
											}
										]
									},
									{
										"paragraphFormat": {
											"styleName": "No Spacing",
											"listFormat": {}
										},
										"characterFormat": {
											"bold": false,
											"italic": true,
											"fontSize": 11.5,
											"fontFamily": "Cambria",
											"fontColor": "empty",
											"boldBidi": false,
											"italicBidi": true,
											"fontSizeBidi": 11.5,
											"fontFamilyBidi": "Cambria"
										},
										"inlines": [
											{
												"characterFormat": {
													"bold": false,
													"italic": true,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"styleName": "Strong",
													"boldBidi": false,
													"italicBidi": true,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "Hitachi "
											},
											{
												"characterFormat": {
													"bold": false,
													"italic": true,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"styleName": "Strong",
													"boldBidi": false,
													"italicBidi": true,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "eBworx"
											},
											{
												"characterFormat": {
													"bold": false,
													"italic": true,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"styleName": "Strong",
													"boldBidi": false,
													"italicBidi": true,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": " "
											},
											{
												"characterFormat": {
													"bold": false,
													"italic": true,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"styleName": "Strong",
													"boldBidi": false,
													"italicBidi": true,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "Sdn"
											},
											{
												"characterFormat": {
													"bold": false,
													"italic": true,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"styleName": "Strong",
													"boldBidi": false,
													"italicBidi": true,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": ". Bhd., Selangor."
											}
										]
									},
									{
										"paragraphFormat": {
											"styleName": "No Spacing",
											"listFormat": {}
										},
										"characterFormat": {
											"bold": true,
											"italic": true,
											"fontSize": 11.5,
											"fontFamily": "Cambria",
											"fontColor": "empty",
											"boldBidi": true,
											"italicBidi": true,
											"fontSizeBidi": 11.5,
											"fontFamilyBidi": "Cambria"
										},
										"inlines": []
									},
									{
										"paragraphFormat": {
											"leftIndent": 14.199999809265137,
											"rightIndent": -3.25,
											"firstLineIndent": -14.199999809265137,
											"textAlignment": "Justify",
											"styleName": "No Spacing",
											"listFormat": {
												"listId": 5,
												"listLevelNumber": 0
											}
										},
										"characterFormat": {
											"fontSize": 11.5,
											"fontFamily": "Cambria",
											"fontColor": "empty",
											"fontSizeBidi": 11.5,
											"fontFamilyBidi": "Cambria"
										},
										"inlines": [
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "Assist "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "in "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "coding, "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "implementation, "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "and "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "support "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "of "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "custom "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "banking "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "solutions, "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "which "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "includes "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "features "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "enhancements, "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "new "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "functionalities, "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "and "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "back-end "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "systems "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "integration."
											}
										]
									},
									{
										"paragraphFormat": {
											"leftIndent": 14.199999809265137,
											"rightIndent": -3.25,
											"firstLineIndent": -14.199999809265137,
											"textAlignment": "Justify",
											"styleName": "No Spacing",
											"listFormat": {
												"listId": 5,
												"listLevelNumber": 0
											}
										},
										"characterFormat": {
											"fontSize": 11.5,
											"fontFamily": "Cambria",
											"fontColor": "empty",
											"fontSizeBidi": 11.5,
											"fontFamilyBidi": "Cambria"
										},
										"inlines": [
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "Assist "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "in "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "the "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "preparation "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "/ "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "updates "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "of "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "technical "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "specifications."
											}
										]
									},
									{
										"paragraphFormat": {
											"leftIndent": 14.199999809265137,
											"rightIndent": -3.25,
											"firstLineIndent": -14.199999809265137,
											"textAlignment": "Justify",
											"styleName": "No Spacing",
											"listFormat": {
												"listId": 5,
												"listLevelNumber": 0
											}
										},
										"characterFormat": {
											"fontSize": 11.5,
											"fontFamily": "Cambria",
											"fontColor": "empty",
											"fontSizeBidi": 11.5,
											"fontFamilyBidi": "Cambria"
										},
										"inlines": [
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "Assist "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "in "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "developing "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "test "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "script."
											}
										]
									},
									{
										"paragraphFormat": {
											"leftIndent": 14.199999809265137,
											"rightIndent": -3.25,
											"firstLineIndent": -14.199999809265137,
											"textAlignment": "Justify",
											"styleName": "No Spacing",
											"listFormat": {
												"listId": 5,
												"listLevelNumber": 0
											}
										},
										"characterFormat": {
											"fontSize": 11.5,
											"fontFamily": "Cambria",
											"fontColor": "empty",
											"fontSizeBidi": 11.5,
											"fontFamilyBidi": "Cambria"
										},
										"inlines": [
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "To "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "identify "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "testable "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "requirements, "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "create "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "test "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "cases, "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "and "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "validate "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "them "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "against "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "the "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "application."
											}
										]
									},
									{
										"paragraphFormat": {
											"leftIndent": 14.199999809265137,
											"rightIndent": -3.25,
											"firstLineIndent": -14.199999809265137,
											"textAlignment": "Justify",
											"styleName": "No Spacing",
											"listFormat": {
												"listId": 5,
												"listLevelNumber": 0
											}
										},
										"characterFormat": {
											"fontSize": 11.5,
											"fontFamily": "Cambria",
											"fontColor": "empty",
											"fontSizeBidi": 11.5,
											"fontFamilyBidi": "Cambria"
										},
										"inlines": [
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "To "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "develop "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "test "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "plans, "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "testability "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "matrix "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "and "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "tractability "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "matrixes."
											}
										]
									},
									{
										"paragraphFormat": {
											"leftIndent": 14.199999809265137,
											"rightIndent": -3.25,
											"firstLineIndent": -14.199999809265137,
											"textAlignment": "Justify",
											"styleName": "No Spacing",
											"listFormat": {
												"listId": 5,
												"listLevelNumber": 0
											}
										},
										"characterFormat": {
											"fontSize": 11.5,
											"fontFamily": "Cambria",
											"fontColor": "empty",
											"fontSizeBidi": 11.5,
											"fontFamilyBidi": "Cambria"
										},
										"inlines": [
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "To "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "design, "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "execute "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "and "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "maintain "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "a "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "set "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "of "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "test "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "cases "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "that "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "is "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "used "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "to "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "validate "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "software "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "systems "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "to "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "meet "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "requirements "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "agreed "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "with "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "the "
											},
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "customer."
											}
										]
									},
									{
										"paragraphFormat": {
											"styleName": "Normal",
											"listFormat": {}
										},
										"characterFormat": {
											"fontColor": "empty"
										},
										"inlines": []
									},
									{
										"paragraphFormat": {
											"styleName": "Normal",
											"listFormat": {}
										},
										"characterFormat": {
											"fontColor": "empty"
										},
										"inlines": []
									},
									{
										"paragraphFormat": {
											"styleName": "Normal",
											"listFormat": {}
										},
										"characterFormat": {
											"fontColor": "empty"
										},
										"inlines": []
									},
									{
										"paragraphFormat": {
											"styleName": "Normal",
											"listFormat": {}
										},
										"characterFormat": {
											"fontColor": "empty"
										},
										"inlines": []
									},
									{
										"paragraphFormat": {
											"styleName": "Normal",
											"listFormat": {}
										},
										"characterFormat": {
											"fontColor": "empty"
										},
										"inlines": []
									},
									{
										"paragraphFormat": {
											"styleName": "Normal",
											"listFormat": {}
										},
										"characterFormat": {
											"fontColor": "empty"
										},
										"inlines": []
									}
								]
							}
						},
						{
							"characterFormat": {},
							"shapeId": 454,
							"name": "Rectangle 454",
							"visible": true,
							"width": 152.35,
							"height": 37.67441,
							"widthScale": 100,
							"heightScale": 100,
							"verticalPosition": 9.7,
							"verticalOrigin": "Paragraph",
							"verticalAlignment": "None",
							"verticalRelativePercent": -3.4028235e38,
							"horizontalPosition": -19.8,
							"horizontalOrigin": "Margin",
							"horizontalAlignment": "None",
							"horizontalRelativePercent": -3.4028235e38,
							"zOrderPosition": 251683840,
							"allowOverlap": true,
							"textWrappingStyle": "InFrontOfText",
							"textWrappingType": "Both",
							"distanceBottom": 0,
							"distanceLeft": 9,
							"distanceRight": 9,
							"distanceTop": 0,
							"layoutInCell": true,
							"lockAnchor": false,
							"autoShapeType": "Rectangle",
							"fillFormat": {
								"color": "#17375EFF",
								"fill": true
							},
							"lineFormat": {
								"lineFormatType": "None",
								"color": "#385D8AFF",
								"weight": 2,
								"lineStyle": "Solid",
								"line": false
							},
							"textFrame": {
								"textVerticalAlignment": "Middle",
								"leftMargin": 5.4,
								"rightMargin": 5.4,
								"topMargin": 2.7,
								"bottomMargin": 2.7,
								"blocks": [
									{
										"paragraphFormat": {
											"textAlignment": "Center",
											"lineSpacing": 1,
											"lineSpacingType": "Multiple",
											"styleName": "Normal",
											"listFormat": {}
										},
										"characterFormat": {
											"bold": true,
											"fontFamily": "Times New Roman",
											"fontColor": "empty",
											"boldBidi": true,
											"fontFamilyBidi": "Times New Roman"
										},
										"inlines": [
											{
												"characterFormat": {
													"bold": true,
													"fontFamily": "Times New Roman",
													"fontColor": "empty",
													"boldBidi": true,
													"fontFamilyBidi": "Times New Roman"
												},
												"text": "LANGUAGE "
											},
											{
												"characterFormat": {
													"bold": true,
													"fontFamily": "Times New Roman",
													"fontColor": "empty",
													"boldBidi": true,
													"fontFamilyBidi": "Times New Roman"
												},
												"text": "PROFICIENCY"
											}
										]
									}
								]
							}
						}
					]
				},
				{
					"paragraphFormat": {
						"styleName": "Normal",
						"listFormat": {}
					},
					"characterFormat": {
						"fontColor": "empty"
					},
					"inlines": []
				},
				{
					"paragraphFormat": {
						"textAlignment": "Center",
						"styleName": "Normal",
						"listFormat": {}
					},
					"characterFormat": {
						"fontColor": "empty"
					},
					"inlines": [
						{
							"characterFormat": {},
							"shapeId": 456,
							"name": "Text Box 456",
							"visible": true,
							"width": 152.35,
							"height": 123,
							"widthScale": 100,
							"heightScale": 100,
							"verticalPosition": 5.9,
							"verticalOrigin": "Paragraph",
							"verticalAlignment": "None",
							"verticalRelativePercent": -3.4028235e38,
							"horizontalPosition": -20.1,
							"horizontalOrigin": "Column",
							"horizontalAlignment": "None",
							"horizontalRelativePercent": -3.4028235e38,
							"zOrderPosition": 251684864,
							"allowOverlap": true,
							"textWrappingStyle": "InFrontOfText",
							"textWrappingType": "Both",
							"distanceBottom": 0,
							"distanceLeft": 9,
							"distanceRight": 9,
							"distanceTop": 0,
							"layoutInCell": true,
							"lockAnchor": false,
							"autoShapeType": "Rectangle",
							"fillFormat": {
								"color": "#DCE6F2FF",
								"fill": true
							},
							"lineFormat": {
								"lineFormatType": "None",
								"color": "#000000FF",
								"weight": 0.5,
								"lineStyle": "Solid",
								"line": false
							},
							"textFrame": {
								"textVerticalAlignment": "Top",
								"leftMargin": 5.4,
								"rightMargin": 5.4,
								"topMargin": 2.7,
								"bottomMargin": 2.7,
								"blocks": [
									{
										"paragraphFormat": {
											"textAlignment": "Justify",
											"afterSpacing": 0,
											"lineSpacing": 1,
											"lineSpacingType": "Multiple",
											"styleName": "List Paragraph",
											"listFormat": {
												"listId": 15,
												"listLevelNumber": 0
											}
										},
										"characterFormat": {
											"fontFamily": "Cambria",
											"fontColor": "#000000FF",
											"fontFamilyBidi": "Cambria"
										},
										"inlines": [
											{
												"characterFormat": {
													"fontFamily": "Cambria",
													"fontColor": "#000000FF",
													"fontFamilyBidi": "Cambria"
												},
												"text": "Able "
											},
											{
												"characterFormat": {
													"fontFamily": "Cambria",
													"fontColor": "#000000FF",
													"fontFamilyBidi": "Cambria"
												},
												"text": "to "
											},
											{
												"characterFormat": {
													"fontFamily": "Cambria",
													"fontColor": "#000000FF",
													"fontFamilyBidi": "Cambria"
												},
												"text": "speak, "
											},
											{
												"characterFormat": {
													"fontFamily": "Cambria",
													"fontColor": "#000000FF",
													"fontFamilyBidi": "Cambria"
												},
												"text": "read "
											},
											{
												"characterFormat": {
													"fontFamily": "Cambria",
													"fontColor": "#000000FF",
													"fontFamilyBidi": "Cambria"
												},
												"text": "and "
											},
											{
												"characterFormat": {
													"fontFamily": "Cambria",
													"fontColor": "#000000FF",
													"fontFamilyBidi": "Cambria"
												},
												"text": "write "
											},
											{
												"characterFormat": {
													"fontFamily": "Cambria",
													"fontColor": "#000000FF",
													"fontFamilyBidi": "Cambria"
												},
												"text": "fluent "
											},
											{
												"characterFormat": {
													"fontFamily": "Cambria",
													"fontColor": "#000000FF",
													"fontFamilyBidi": "Cambria"
												},
												"text": "in "
											},
											{
												"characterFormat": {
													"fontFamily": "Cambria",
													"fontColor": "#000000FF",
													"fontFamilyBidi": "Cambria"
												},
												"text": "English, "
											},
											{
												"characterFormat": {
													"fontFamily": "Cambria",
													"fontColor": "#000000FF",
													"fontFamilyBidi": "Cambria"
												},
												"text": "Bahasa "
											},
											{
												"characterFormat": {
													"fontFamily": "Cambria",
													"fontColor": "#000000FF",
													"fontFamilyBidi": "Cambria"
												},
												"text": "Malaysia,"
											},
											{
												"characterFormat": {
													"fontFamily": "Cambria",
													"fontColor": "#000000FF",
													"fontFamilyBidi": "Cambria"
												},
												"text": " and "
											},
											{
												"characterFormat": {
													"fontFamily": "Cambria",
													"fontColor": "#000000FF",
													"fontFamilyBidi": "Cambria"
												},
												"text": "Mandarin."
											}
										]
									},
									{
										"paragraphFormat": {
											"leftIndent": 8.5,
											"textAlignment": "Justify",
											"afterSpacing": 0,
											"lineSpacing": 1,
											"lineSpacingType": "Multiple",
											"styleName": "List Paragraph",
											"listFormat": {}
										},
										"characterFormat": {
											"fontSize": 9,
											"fontFamily": "Cambria",
											"fontColor": "#000000FF",
											"fontSizeBidi": 9,
											"fontFamilyBidi": "Cambria"
										},
										"inlines": []
									},
									{
										"paragraphFormat": {
											"textAlignment": "Justify",
											"afterSpacing": 0,
											"lineSpacing": 1,
											"lineSpacingType": "Multiple",
											"styleName": "List Paragraph",
											"listFormat": {
												"listId": 15,
												"listLevelNumber": 0
											}
										},
										"characterFormat": {
											"italic": false,
											"fontSize": 11,
											"fontFamily": "Cambria",
											"fontColor": "#000000FF",
											"italicBidi": false,
											"fontSizeBidi": 11,
											"fontFamilyBidi": "Cambria"
										},
										"inlines": [
											{
												"characterFormat": {
													"fontFamily": "Cambria",
													"fontColor": "#000000FF",
													"fontFamilyBidi": "Cambria"
												},
												"text": "Able "
											},
											{
												"characterFormat": {
													"fontFamily": "Cambria",
													"fontColor": "#000000FF",
													"fontFamilyBidi": "Cambria"
												},
												"text": "to "
											},
											{
												"characterFormat": {
													"fontFamily": "Cambria",
													"fontColor": "#000000FF",
													"fontFamilyBidi": "Cambria"
												},
												"text": "speak "
											},
											{
												"characterFormat": {
													"fontFamily": "Cambria",
													"fontColor": "#000000FF",
													"fontFamilyBidi": "Cambria"
												},
												"text": "passable "
											},
											{
												"characterFormat": {
													"fontFamily": "Cambria",
													"fontColor": "#000000FF",
													"fontFamilyBidi": "Cambria"
												},
												"text": "Cantonese, "
											},
											{
												"characterFormat": {
													"fontFamily": "Cambria",
													"fontColor": "#000000FF",
													"fontFamilyBidi": "Cambria"
												},
												"text": "Hokkien "
											},
											{
												"characterFormat": {
													"fontFamily": "Cambria",
													"fontColor": "#000000FF",
													"fontFamilyBidi": "Cambria"
												},
												"text": "and "
											},
											{
												"characterFormat": {
													"fontFamily": "Cambria",
													"fontColor": "#000000FF",
													"fontFamilyBidi": "Cambria"
												},
												"text": "Teochew "
											},
											{
												"characterFormat": {
													"fontFamily": "Cambria",
													"fontColor": "#000000FF",
													"fontFamilyBidi": "Cambria"
												},
												"text": "dialect."
											}
										]
									},
									{
										"paragraphFormat": {
											"leftIndent": 8.5,
											"styleName": "List Paragraph",
											"listFormat": {}
										},
										"characterFormat": {
											"fontColor": "empty"
										},
										"inlines": []
									}
								]
							}
						}
					]
				},
				{
					"paragraphFormat": {
						"styleName": "Normal",
						"listFormat": {}
					},
					"characterFormat": {
						"fontColor": "empty"
					},
					"inlines": []
				},
				{
					"paragraphFormat": {
						"styleName": "Normal",
						"listFormat": {}
					},
					"characterFormat": {
						"fontColor": "empty"
					},
					"inlines": []
				},
				{
					"paragraphFormat": {
						"styleName": "Normal",
						"listFormat": {}
					},
					"characterFormat": {
						"fontColor": "empty"
					},
					"inlines": []
				},
				{
					"paragraphFormat": {
						"styleName": "Normal",
						"listFormat": {}
					},
					"characterFormat": {
						"fontColor": "empty"
					},
					"inlines": []
				},
				{
					"paragraphFormat": {
						"styleName": "Normal",
						"listFormat": {}
					},
					"characterFormat": {
						"fontColor": "empty"
					},
					"inlines": []
				},
				{
					"paragraphFormat": {
						"styleName": "Normal",
						"listFormat": {}
					},
					"characterFormat": {
						"fontColor": "empty"
					},
					"inlines": [
						{
							"characterFormat": {},
							"shapeId": 13,
							"name": "Rectangle 13",
							"visible": true,
							"width": 403.5,
							"height": 21,
							"widthScale": 100,
							"heightScale": 100,
							"verticalPosition": 11.5,
							"verticalOrigin": "Paragraph",
							"verticalAlignment": "None",
							"verticalRelativePercent": -3.4028235e38,
							"horizontalPosition": 147,
							"horizontalOrigin": "Column",
							"horizontalAlignment": "None",
							"horizontalRelativePercent": -3.4028235e38,
							"zOrderPosition": 251688960,
							"allowOverlap": true,
							"textWrappingStyle": "InFrontOfText",
							"textWrappingType": "Both",
							"distanceBottom": 0,
							"distanceLeft": 9,
							"distanceRight": 9,
							"distanceTop": 0,
							"layoutInCell": true,
							"lockAnchor": false,
							"autoShapeType": "Rectangle",
							"fillFormat": {
								"color": "#17375EFF",
								"fill": true
							},
							"lineFormat": {
								"lineFormatType": "Solid",
								"color": "#FFFFFFFF",
								"weight": 2,
								"lineStyle": "Solid",
								"line": true
							},
							"textFrame": {
								"textVerticalAlignment": "Middle",
								"leftMargin": 5.4,
								"rightMargin": 5.4,
								"topMargin": 2.7,
								"bottomMargin": 2.7,
								"blocks": [
									{
										"paragraphFormat": {
											"textAlignment": "Center",
											"styleName": "Normal",
											"listFormat": {}
										},
										"characterFormat": {
											"bold": true,
											"fontSize": 12,
											"fontFamily": "Times New Roman",
											"fontColor": "empty",
											"boldBidi": true,
											"fontSizeBidi": 12,
											"fontFamilyBidi": "Times New Roman"
										},
										"inlines": [
											{
												"characterFormat": {
													"bold": true,
													"fontSize": 12,
													"fontFamily": "Times New Roman",
													"fontColor": "empty",
													"boldBidi": true,
													"fontSizeBidi": 12,
													"fontFamilyBidi": "Times New Roman"
												},
												"text": "SKILLS"
											}
										]
									}
								]
							}
						}
					]
				},
				{
					"paragraphFormat": {
						"styleName": "Normal",
						"listFormat": {}
					},
					"characterFormat": {
						"fontColor": "empty"
					},
					"inlines": [
						{
							"characterFormat": {},
							"shapeId": 15,
							"name": "Text Box 15",
							"visible": true,
							"width": 394.75,
							"height": 190.8,
							"widthScale": 100,
							"heightScale": 100,
							"verticalPosition": 13.65,
							"verticalOrigin": "Paragraph",
							"verticalAlignment": "None",
							"verticalRelativePercent": -3.4028235e38,
							"horizontalPosition": 150,
							"horizontalOrigin": "Column",
							"horizontalAlignment": "None",
							"horizontalRelativePercent": -3.4028235e38,
							"zOrderPosition": 251691008,
							"allowOverlap": true,
							"textWrappingStyle": "InFrontOfText",
							"textWrappingType": "Both",
							"distanceBottom": 0,
							"distanceLeft": 9,
							"distanceRight": 9,
							"distanceTop": 0,
							"layoutInCell": true,
							"lockAnchor": false,
							"autoShapeType": "Rectangle",
							"fillFormat": {
								"color": "#FFFFFFFF",
								"fill": true
							},
							"lineFormat": {
								"lineFormatType": "None",
								"color": "#000000FF",
								"weight": 0.5,
								"lineStyle": "Solid",
								"line": false
							},
							"textFrame": {
								"textVerticalAlignment": "Top",
								"leftMargin": 5.4,
								"rightMargin": 5.4,
								"topMargin": 2.7,
								"bottomMargin": 2.7,
								"blocks": [
									{
										"paragraphFormat": {
											"styleName": "No Spacing",
											"listFormat": {}
										},
										"characterFormat": {
											"fontSize": 11.5,
											"fontFamily": "Cambria",
											"fontColor": "empty",
											"fontSizeBidi": 11.5,
											"fontFamilyBidi": "Cambria"
										},
										"inlines": [
											{
												"characterFormat": {
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"styleName": "Strong",
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "Programming Languages:"
											}
										]
									},
									{
										"paragraphFormat": {
											"leftIndent": 14.199999809265137,
											"rightIndent": -3.25,
											"firstLineIndent": -14.199999809265137,
											"textAlignment": "Justify",
											"styleName": "No Spacing",
											"listFormat": {
												"listId": 5,
												"listLevelNumber": 0
											}
										},
										"characterFormat": {
											"fontFamily": "Cambria",
											"fontColor": "empty",
											"fontFamilyBidi": "Cambria"
										},
										"inlines": [
											{
												"characterFormat": {
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontFamilyBidi": "Cambria"
												},
												"text": "Java, "
											},
											{
												"characterFormat": {
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontFamilyBidi": "Cambria"
												},
												"text": "Python, "
											},
											{
												"characterFormat": {
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontFamilyBidi": "Cambria"
												},
												"text": "R, "
											},
											{
												"characterFormat": {
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontFamilyBidi": "Cambria"
												},
												"text": "C,"
											},
											{
												"characterFormat": {
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontFamilyBidi": "Cambria"
												},
												"text": " "
											},
											{
												"characterFormat": {
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontFamilyBidi": "Cambria"
												},
												"text": "HTML, "
											},
											{
												"characterFormat": {
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontFamilyBidi": "Cambria"
												},
												"text": "JavaScript, "
											},
											{
												"characterFormat": {
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontFamilyBidi": "Cambria"
												},
												"text": "CSS,"
											},
											{
												"characterFormat": {
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontFamilyBidi": "Cambria"
												},
												"text": " "
											},
											{
												"characterFormat": {
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"fontFamilyBidi": "Cambria"
												},
												"text": "PHP"
											}
										]
									},
									{
										"paragraphFormat": {
											"rightIndent": -3.25,
											"textAlignment": "Justify",
											"styleName": "No Spacing",
											"listFormat": {}
										},
										"characterFormat": {
											"fontFamily": "Cambria",
											"fontColor": "empty",
											"fontFamilyBidi": "Cambria"
										},
										"inlines": []
									},
									{
										"paragraphFormat": {
											"rightIndent": -3.25,
											"textAlignment": "Justify",
											"styleName": "No Spacing",
											"listFormat": {}
										},
										"characterFormat": {
											"bold": true,
											"fontSize": 11.5,
											"fontFamily": "Cambria",
											"fontColor": "empty",
											"boldBidi": true,
											"fontSizeBidi": 11.5,
											"fontFamilyBidi": "Cambria"
										},
										"inlines": [
											{
												"characterFormat": {
													"bold": true,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"boldBidi": true,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "Basic"
											},
											{
												"characterFormat": {
													"bold": true,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"boldBidi": true,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": " configuration "
											},
											{
												"characterFormat": {
													"bold": true,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"boldBidi": true,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "of "
											},
											{
												"characterFormat": {
													"bold": true,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"boldBidi": true,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "Cisco "
											},
											{
												"characterFormat": {
													"bold": true,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"boldBidi": true,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "environment "
											},
											{
												"characterFormat": {
													"bold": true,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"boldBidi": true,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "network"
											},
											{
												"characterFormat": {
													"bold": true,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"boldBidi": true,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "."
											}
										]
									},
									{
										"paragraphFormat": {
											"rightIndent": -3.25,
											"textAlignment": "Justify",
											"styleName": "No Spacing",
											"listFormat": {}
										},
										"characterFormat": {
											"bold": true,
											"fontSize": 11.5,
											"fontFamily": "Cambria",
											"fontColor": "empty",
											"boldBidi": true,
											"fontSizeBidi": 11.5,
											"fontFamilyBidi": "Cambria"
										},
										"inlines": []
									},
									{
										"paragraphFormat": {
											"rightIndent": -3.25,
											"textAlignment": "Justify",
											"styleName": "No Spacing",
											"listFormat": {}
										},
										"characterFormat": {
											"bold": true,
											"fontSize": 11.5,
											"fontFamily": "Cambria",
											"fontColor": "empty",
											"boldBidi": true,
											"fontSizeBidi": 11.5,
											"fontFamilyBidi": "Cambria"
										},
										"inlines": [
											{
												"characterFormat": {
													"bold": true,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"boldBidi": true,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "Knowledge "
											},
											{
												"characterFormat": {
													"bold": true,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"boldBidi": true,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "in "
											},
											{
												"characterFormat": {
													"bold": true,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"boldBidi": true,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "using "
											},
											{
												"characterFormat": {
													"bold": true,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"boldBidi": true,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "database "
											},
											{
												"characterFormat": {
													"bold": true,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"boldBidi": true,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "such "
											},
											{
												"characterFormat": {
													"bold": true,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"boldBidi": true,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "as "
											},
											{
												"characterFormat": {
													"bold": true,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"boldBidi": true,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "MySQL, "
											},
											{
												"characterFormat": {
													"bold": true,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"boldBidi": true,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "Oracle,"
											},
											{
												"characterFormat": {
													"bold": true,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"boldBidi": true,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": " "
											},
											{
												"characterFormat": {
													"bold": true,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"boldBidi": true,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "SQLite"
											},
											{
												"characterFormat": {
													"bold": true,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"boldBidi": true,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": " & "
											},
											{
												"characterFormat": {
													"bold": true,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"boldBidi": true,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "Firebase"
											},
											{
												"characterFormat": {
													"bold": true,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"boldBidi": true,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "."
											}
										]
									},
									{
										"paragraphFormat": {
											"rightIndent": -3.25,
											"textAlignment": "Justify",
											"styleName": "No Spacing",
											"listFormat": {}
										},
										"characterFormat": {
											"bold": true,
											"fontSize": 11.5,
											"fontFamily": "Cambria",
											"fontColor": "empty",
											"boldBidi": true,
											"fontSizeBidi": 11.5,
											"fontFamilyBidi": "Cambria"
										},
										"inlines": []
									},
									{
										"paragraphFormat": {
											"rightIndent": -3.25,
											"textAlignment": "Justify",
											"styleName": "No Spacing",
											"listFormat": {}
										},
										"characterFormat": {
											"fontSize": 11.5,
											"fontFamily": "Cambria",
											"fontColor": "empty",
											"fontSizeBidi": 11.5,
											"fontFamilyBidi": "Cambria"
										},
										"inlines": [
											{
												"characterFormat": {
													"bold": true,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"boldBidi": true,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "Experience "
											},
											{
												"characterFormat": {
													"bold": true,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"boldBidi": true,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "in "
											},
											{
												"characterFormat": {
													"bold": true,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"boldBidi": true,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "m"
											},
											{
												"characterFormat": {
													"bold": true,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"boldBidi": true,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "obile "
											},
											{
												"characterFormat": {
													"bold": true,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"boldBidi": true,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "applications "
											},
											{
												"characterFormat": {
													"bold": true,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"boldBidi": true,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "development "
											},
											{
												"characterFormat": {
													"bold": true,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"boldBidi": true,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "for "
											},
											{
												"characterFormat": {
													"bold": true,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"boldBidi": true,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "Android"
											},
											{
												"characterFormat": {
													"bold": true,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"boldBidi": true,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": " using "
											},
											{
												"characterFormat": {
													"bold": true,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"boldBidi": true,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "Android "
											},
											{
												"characterFormat": {
													"bold": true,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"boldBidi": true,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "Studio"
											},
											{
												"characterFormat": {
													"bold": true,
													"fontSize": 11.5,
													"fontFamily": "Cambria",
													"fontColor": "empty",
													"boldBidi": true,
													"fontSizeBidi": 11.5,
													"fontFamilyBidi": "Cambria"
												},
												"text": "."
											}
										]
									}
								]
							}
						}
					]
				},
				{
					"paragraphFormat": {
						"styleName": "Normal",
						"listFormat": {}
					},
					"characterFormat": {
						"fontColor": "empty"
					},
					"inlines": []
				},
				{
					"paragraphFormat": {
						"styleName": "Normal",
						"listFormat": {}
					},
					"characterFormat": {
						"fontColor": "empty"
					},
					"inlines": []
				},
				{
					"paragraphFormat": {
						"styleName": "Normal",
						"listFormat": {}
					},
					"characterFormat": {
						"fontColor": "empty"
					},
					"inlines": []
				},
				{
					"paragraphFormat": {
						"styleName": "Normal",
						"listFormat": {}
					},
					"characterFormat": {
						"fontColor": "empty"
					},
					"inlines": []
				},
				{
					"paragraphFormat": {
						"styleName": "Normal",
						"listFormat": {}
					},
					"characterFormat": {
						"fontColor": "empty"
					},
					"inlines": [
						{
							"characterFormat": {},
							"bookmarkType": 1,
							"name": "_Hlk67572716"
						}
					]
				},
				{
					"paragraphFormat": {
						"styleName": "Normal",
						"listFormat": {}
					},
					"characterFormat": {
						"fontColor": "empty"
					},
					"inlines": []
				}
			],
			"headersFooters": {
				"header": {
					"blocks": [
						{
							"paragraphFormat": {
								"listFormat": {}
							},
							"characterFormat": {},
							"inlines": []
						}
					]
				},
				"footer": {
					"blocks": [
						{
							"paragraphFormat": {
								"listFormat": {}
							},
							"characterFormat": {},
							"inlines": []
						}
					]
				},
				"evenHeader": {
					"blocks": [
						{
							"paragraphFormat": {
								"listFormat": {}
							},
							"characterFormat": {},
							"inlines": []
						}
					]
				},
				"evenFooter": {
					"blocks": [
						{
							"paragraphFormat": {
								"listFormat": {}
							},
							"characterFormat": {},
							"inlines": []
						}
					]
				},
				"firstPageHeader": {
					"blocks": [
						{
							"paragraphFormat": {
								"listFormat": {}
							},
							"characterFormat": {},
							"inlines": []
						}
					]
				},
				"firstPageFooter": {
					"blocks": [
						{
							"paragraphFormat": {
								"listFormat": {}
							},
							"characterFormat": {},
							"inlines": []
						}
					]
				}
			}
		}
	],
	"characterFormat": {
		"bold": false,
		"italic": false,
		"fontSize": 11,
		"fontFamily": "Calibri",
		"underline": "None",
		"strikethrough": "None",
		"baselineAlignment": "Normal",
		"highlightColor": "NoColor",
		"fontColor": "empty",
		"boldBidi": false,
		"italicBidi": false,
		"fontSizeBidi": 11,
		"fontFamilyBidi": "Calibri",
		"allCaps": false
	},
	"paragraphFormat": {
		"leftIndent": 0,
		"rightIndent": 0,
		"firstLineIndent": 0,
		"textAlignment": "Left",
		"beforeSpacing": 0,
		"afterSpacing": 10,
		"lineSpacing": 1.149999976158142,
		"lineSpacingType": "Multiple",
		"listFormat": {},
		"bidi": false,
		"keepLinesTogether": false,
		"keepWithNext": false
	},
	"defaultTabWidth": 36,
	"trackChanges": false,
	"enforcement": false,
	"hashValue": "",
	"saltValue": "",
	"formatting": false,
	"protectionType": "NoProtection",
	"dontUseHTMLParagraphAutoSpacing": false,
	"formFieldShading": true,
	"compatibilityMode": 3,
	"styles": [
		{
			"name": "Normal",
			"type": "Paragraph",
			"paragraphFormat": {
				"listFormat": {}
			},
			"characterFormat": {
				"fontColor": "empty"
			},
			"next": "Normal"
		},
		{
			"name": "Default Paragraph Font",
			"type": "Character",
			"characterFormat": {
				"fontColor": "empty"
			}
		},
		{
			"name": "No Spacing",
			"type": "Paragraph",
			"paragraphFormat": {
				"afterSpacing": 0,
				"lineSpacing": 1,
				"lineSpacingType": "Multiple",
				"listFormat": {}
			},
			"characterFormat": {
				"fontColor": "empty"
			},
			"next": "No Spacing"
		},
		{
			"name": "Balloon Text",
			"type": "Paragraph",
			"paragraphFormat": {
				"afterSpacing": 0,
				"lineSpacing": 1,
				"lineSpacingType": "Multiple",
				"listFormat": {}
			},
			"characterFormat": {
				"fontSize": 8,
				"fontFamily": "Tahoma",
				"fontColor": "empty",
				"fontSizeBidi": 8,
				"fontFamilyBidi": "Tahoma"
			},
			"basedOn": "Normal",
			"link": "Balloon Text Char",
			"next": "Balloon Text"
		},
		{
			"name": "Balloon Text Char",
			"type": "Character",
			"characterFormat": {
				"fontSize": 8,
				"fontFamily": "Tahoma",
				"fontColor": "empty",
				"fontSizeBidi": 8,
				"fontFamilyBidi": "Tahoma"
			},
			"basedOn": "Default Paragraph Font"
		},
		{
			"name": "List Paragraph",
			"type": "Paragraph",
			"paragraphFormat": {
				"leftIndent": 36,
				"listFormat": {},
				"contextualSpacing": true
			},
			"characterFormat": {
				"fontColor": "empty"
			},
			"basedOn": "Normal",
			"next": "List Paragraph"
		},
		{
			"name": "Location Char Char",
			"type": "Character",
			"characterFormat": {
				"italic": true,
				"fontSize": 10,
				"fontFamily": "Garamond",
				"fontColor": "empty",
				"italicBidi": true,
				"fontSizeBidi": 10,
				"fontFamilyBidi": "Garamond"
			},
			"basedOn": "Default Paragraph Font"
		},
		{
			"name": "Location",
			"type": "Paragraph",
			"paragraphFormat": {
				"beforeSpacing": 1,
				"afterSpacing": 0,
				"lineSpacing": 1,
				"lineSpacingType": "Multiple",
				"listFormat": {},
				"tabs": [
					{
						"position": 324,
						"deletePosition": 0,
						"tabJustification": "Right",
						"tabLeader": "None"
					}
				]
			},
			"characterFormat": {
				"italic": true,
				"fontSize": 10,
				"fontFamily": "Garamond",
				"fontColor": "empty",
				"italicBidi": true,
				"fontSizeBidi": 10,
				"fontFamilyBidi": "Garamond"
			},
			"basedOn": "Normal",
			"link": "Location Char Char",
			"next": "Location"
		},
		{
			"name": "College Char Char",
			"type": "Character",
			"characterFormat": {
				"bold": true,
				"italic": true,
				"fontSize": 10,
				"fontFamily": "Garamond",
				"fontColor": "empty",
				"boldBidi": true,
				"italicBidi": true,
				"fontSizeBidi": 10,
				"fontFamilyBidi": "Garamond"
			},
			"basedOn": "Default Paragraph Font"
		},
		{
			"name": "College",
			"type": "Paragraph",
			"paragraphFormat": {
				"afterSpacing": 0,
				"lineSpacing": 1,
				"lineSpacingType": "Multiple",
				"listFormat": {}
			},
			"characterFormat": {
				"bold": true,
				"italic": true,
				"fontSize": 10,
				"fontFamily": "Garamond",
				"fontColor": "empty",
				"boldBidi": true,
				"italicBidi": true,
				"fontSizeBidi": 10,
				"fontFamilyBidi": "Garamond"
			},
			"basedOn": "Normal",
			"link": "College Char Char",
			"next": "College"
		},
		{
			"name": "Strong",
			"type": "Character",
			"characterFormat": {
				"bold": true,
				"fontColor": "empty",
				"boldBidi": true
			},
			"basedOn": "Default Paragraph Font"
		},
		{
			"name": "lt-line-clamp__line",
			"type": "Character",
			"characterFormat": {
				"fontColor": "empty"
			},
			"basedOn": "Default Paragraph Font"
		},
		{
			"name": "apple-converted-space",
			"type": "Character",
			"characterFormat": {
				"fontColor": "empty"
			},
			"basedOn": "Default Paragraph Font"
		},
		{
			"name": "Default",
			"type": "Paragraph",
			"paragraphFormat": {
				"afterSpacing": 0,
				"lineSpacing": 1,
				"lineSpacingType": "Multiple",
				"listFormat": {}
			},
			"characterFormat": {
				"fontSize": 12,
				"fontFamily": "Times New Roman",
				"fontColor": "#000000FF",
				"fontSizeBidi": 12,
				"fontFamilyBidi": "Times New Roman"
			},
			"next": "Default"
		},
		{
			"name": "Hyperlink",
			"type": "Character",
			"characterFormat": {
				"underline": "Single",
				"fontColor": "#0000FFFF"
			},
			"basedOn": "Default Paragraph Font"
		},
		{
			"name": "Unresolved Mention",
			"type": "Character",
			"characterFormat": {
				"fontColor": "#605E5CFF"
			},
			"basedOn": "Default Paragraph Font"
		},
		{
			"name": "Heading 1",
			"type": "Paragraph",
			"paragraphFormat": {
				"leftIndent": 0,
				"rightIndent": 0,
				"firstLineIndent": 0,
				"textAlignment": "Left",
				"beforeSpacing": 12,
				"afterSpacing": 0,
				"lineSpacing": 1.0791666507720948,
				"lineSpacingType": "Multiple",
				"outlineLevel": "Level1",
				"listFormat": {}
			},
			"characterFormat": {
				"fontSize": 16,
				"fontFamily": "Calibri Light",
				"fontColor": "#2F5496",
				"fontSizeBidi": 16,
				"fontFamilyBidi": "Calibri Light"
			},
			"basedOn": "Normal",
			"link": "Heading 1 Char",
			"next": "Normal"
		},
		{
			"name": "Heading 1 Char",
			"type": "Character",
			"characterFormat": {
				"fontSize": 16,
				"fontFamily": "Calibri Light",
				"fontColor": "#2F5496",
				"fontSizeBidi": 16,
				"fontFamilyBidi": "Calibri Light"
			},
			"basedOn": "Default Paragraph Font"
		},
		{
			"name": "Heading 2",
			"type": "Paragraph",
			"paragraphFormat": {
				"leftIndent": 0,
				"rightIndent": 0,
				"firstLineIndent": 0,
				"textAlignment": "Left",
				"beforeSpacing": 2,
				"afterSpacing": 0,
				"lineSpacing": 1.0791666507720948,
				"lineSpacingType": "Multiple",
				"outlineLevel": "Level2",
				"listFormat": {}
			},
			"characterFormat": {
				"fontSize": 13,
				"fontFamily": "Calibri Light",
				"fontColor": "#2F5496",
				"fontSizeBidi": 13,
				"fontFamilyBidi": "Calibri Light"
			},
			"basedOn": "Normal",
			"link": "Heading 2 Char",
			"next": "Normal"
		},
		{
			"name": "Heading 2 Char",
			"type": "Character",
			"characterFormat": {
				"fontSize": 13,
				"fontFamily": "Calibri Light",
				"fontColor": "#2F5496",
				"fontSizeBidi": 13,
				"fontFamilyBidi": "Calibri Light"
			},
			"basedOn": "Default Paragraph Font"
		},
		{
			"name": "Heading 3",
			"type": "Paragraph",
			"paragraphFormat": {
				"leftIndent": 0,
				"rightIndent": 0,
				"firstLineIndent": 0,
				"textAlignment": "Left",
				"beforeSpacing": 2,
				"afterSpacing": 0,
				"lineSpacing": 1.0791666507720948,
				"lineSpacingType": "Multiple",
				"outlineLevel": "Level3",
				"listFormat": {}
			},
			"characterFormat": {
				"fontSize": 12,
				"fontFamily": "Calibri Light",
				"fontColor": "#1F3763",
				"fontSizeBidi": 12,
				"fontFamilyBidi": "Calibri Light"
			},
			"basedOn": "Normal",
			"link": "Heading 3 Char",
			"next": "Normal"
		},
		{
			"name": "Heading 3 Char",
			"type": "Character",
			"characterFormat": {
				"fontSize": 12,
				"fontFamily": "Calibri Light",
				"fontColor": "#1F3763",
				"fontSizeBidi": 12,
				"fontFamilyBidi": "Calibri Light"
			},
			"basedOn": "Default Paragraph Font"
		},
		{
			"name": "Heading 4",
			"type": "Paragraph",
			"paragraphFormat": {
				"leftIndent": 0,
				"rightIndent": 0,
				"firstLineIndent": 0,
				"textAlignment": "Left",
				"beforeSpacing": 2,
				"afterSpacing": 0,
				"lineSpacing": 1.0791666507720948,
				"lineSpacingType": "Multiple",
				"outlineLevel": "Level4",
				"listFormat": {}
			},
			"characterFormat": {
				"italic": true,
				"fontFamily": "Calibri Light",
				"fontColor": "#2F5496",
				"italicBidi": true,
				"fontFamilyBidi": "Calibri Light"
			},
			"basedOn": "Normal",
			"link": "Heading 4 Char",
			"next": "Normal"
		},
		{
			"name": "Heading 4 Char",
			"type": "Character",
			"characterFormat": {
				"italic": true,
				"fontFamily": "Calibri Light",
				"fontColor": "#2F5496",
				"italicBidi": true,
				"fontFamilyBidi": "Calibri Light"
			},
			"basedOn": "Default Paragraph Font"
		},
		{
			"name": "Heading 5",
			"type": "Paragraph",
			"paragraphFormat": {
				"leftIndent": 0,
				"rightIndent": 0,
				"firstLineIndent": 0,
				"textAlignment": "Left",
				"beforeSpacing": 2,
				"afterSpacing": 0,
				"lineSpacing": 1.0791666507720948,
				"lineSpacingType": "Multiple",
				"outlineLevel": "Level5",
				"listFormat": {}
			},
			"characterFormat": {
				"fontFamily": "Calibri Light",
				"fontColor": "#2F5496",
				"fontFamilyBidi": "Calibri Light"
			},
			"basedOn": "Normal",
			"link": "Heading 5 Char",
			"next": "Normal"
		},
		{
			"name": "Heading 5 Char",
			"type": "Character",
			"characterFormat": {
				"fontFamily": "Calibri Light",
				"fontColor": "#2F5496",
				"fontFamilyBidi": "Calibri Light"
			},
			"basedOn": "Default Paragraph Font"
		},
		{
			"name": "Heading 6",
			"type": "Paragraph",
			"paragraphFormat": {
				"leftIndent": 0,
				"rightIndent": 0,
				"firstLineIndent": 0,
				"textAlignment": "Left",
				"beforeSpacing": 2,
				"afterSpacing": 0,
				"lineSpacing": 1.0791666507720948,
				"lineSpacingType": "Multiple",
				"outlineLevel": "Level6",
				"listFormat": {}
			},
			"characterFormat": {
				"fontFamily": "Calibri Light",
				"fontColor": "#1F3763",
				"fontFamilyBidi": "Calibri Light"
			},
			"basedOn": "Normal",
			"link": "Heading 6 Char",
			"next": "Normal"
		},
		{
			"name": "Heading 6 Char",
			"type": "Character",
			"characterFormat": {
				"fontFamily": "Calibri Light",
				"fontColor": "#1F3763",
				"fontFamilyBidi": "Calibri Light"
			},
			"basedOn": "Default Paragraph Font"
		}
	],
	"lists": [
		{
			"abstractListId": 0,
			"levelOverrides": [],
			"listId": 0
		},
		{
			"abstractListId": 5,
			"levelOverrides": [],
			"listId": 5
		},
		{
			"abstractListId": 15,
			"levelOverrides": [],
			"listId": 15
		}
	],
	"abstractLists": [
		{
			"abstractListId": 0,
			"levels": [
				{
					"characterFormat": {
						"fontFamily": "Symbol",
						"fontColor": "empty",
						"fontFamilyBidi": "Symbol"
					},
					"paragraphFormat": {
						"leftIndent": 10.899999618530274,
						"firstLineIndent": -18,
						"listFormat": {}
					},
					"followCharacter": "Tab",
					"listLevelPattern": "Bullet",
					"numberFormat": "",
					"restartLevel": 0,
					"startAt": 0
				},
				{
					"characterFormat": {
						"fontFamily": "Courier New",
						"fontColor": "empty",
						"fontFamilyBidi": "Courier New"
					},
					"paragraphFormat": {
						"leftIndent": 46.900001525878909,
						"firstLineIndent": -18,
						"listFormat": {}
					},
					"followCharacter": "Tab",
					"listLevelPattern": "Bullet",
					"numberFormat": "o",
					"restartLevel": 0,
					"startAt": 0
				},
				{
					"characterFormat": {
						"fontFamily": "Wingdings",
						"fontColor": "empty",
						"fontFamilyBidi": "Wingdings"
					},
					"paragraphFormat": {
						"leftIndent": 82.9000015258789,
						"firstLineIndent": -18,
						"listFormat": {}
					},
					"followCharacter": "Tab",
					"listLevelPattern": "Bullet",
					"numberFormat": "",
					"restartLevel": 0,
					"startAt": 0
				},
				{
					"characterFormat": {
						"fontFamily": "Symbol",
						"fontColor": "empty",
						"fontFamilyBidi": "Symbol"
					},
					"paragraphFormat": {
						"leftIndent": 118.9000015258789,
						"firstLineIndent": -18,
						"listFormat": {}
					},
					"followCharacter": "Tab",
					"listLevelPattern": "Bullet",
					"numberFormat": "",
					"restartLevel": 0,
					"startAt": 0
				},
				{
					"characterFormat": {
						"fontFamily": "Courier New",
						"fontColor": "empty",
						"fontFamilyBidi": "Courier New"
					},
					"paragraphFormat": {
						"leftIndent": 154.89999389648438,
						"firstLineIndent": -18,
						"listFormat": {}
					},
					"followCharacter": "Tab",
					"listLevelPattern": "Bullet",
					"numberFormat": "o",
					"restartLevel": 0,
					"startAt": 0
				},
				{
					"characterFormat": {
						"fontFamily": "Wingdings",
						"fontColor": "empty",
						"fontFamilyBidi": "Wingdings"
					},
					"paragraphFormat": {
						"leftIndent": 190.89999389648438,
						"firstLineIndent": -18,
						"listFormat": {}
					},
					"followCharacter": "Tab",
					"listLevelPattern": "Bullet",
					"numberFormat": "",
					"restartLevel": 0,
					"startAt": 0
				},
				{
					"characterFormat": {
						"fontFamily": "Symbol",
						"fontColor": "empty",
						"fontFamilyBidi": "Symbol"
					},
					"paragraphFormat": {
						"leftIndent": 226.89999389648438,
						"firstLineIndent": -18,
						"listFormat": {}
					},
					"followCharacter": "Tab",
					"listLevelPattern": "Bullet",
					"numberFormat": "",
					"restartLevel": 0,
					"startAt": 0
				},
				{
					"characterFormat": {
						"fontFamily": "Courier New",
						"fontColor": "empty",
						"fontFamilyBidi": "Courier New"
					},
					"paragraphFormat": {
						"leftIndent": 262.8999938964844,
						"firstLineIndent": -18,
						"listFormat": {}
					},
					"followCharacter": "Tab",
					"listLevelPattern": "Bullet",
					"numberFormat": "o",
					"restartLevel": 0,
					"startAt": 0
				},
				{
					"characterFormat": {
						"fontFamily": "Wingdings",
						"fontColor": "empty",
						"fontFamilyBidi": "Wingdings"
					},
					"paragraphFormat": {
						"leftIndent": 298.8999938964844,
						"firstLineIndent": -18,
						"listFormat": {}
					},
					"followCharacter": "Tab",
					"listLevelPattern": "Bullet",
					"numberFormat": "",
					"restartLevel": 0,
					"startAt": 0
				}
			]
		},
		{
			"abstractListId": 5,
			"levels": [
				{
					"characterFormat": {
						"italic": false,
						"fontFamily": "Symbol",
						"fontColor": "empty",
						"italicBidi": false,
						"fontFamilyBidi": "Symbol"
					},
					"paragraphFormat": {
						"leftIndent": 25.100000381469728,
						"firstLineIndent": -18,
						"listFormat": {}
					},
					"followCharacter": "Tab",
					"listLevelPattern": "Bullet",
					"numberFormat": "",
					"restartLevel": 0,
					"startAt": 0
				},
				{
					"characterFormat": {
						"fontFamily": "Courier New",
						"fontColor": "empty",
						"fontFamilyBidi": "Courier New"
					},
					"paragraphFormat": {
						"leftIndent": 72,
						"firstLineIndent": -18,
						"listFormat": {}
					},
					"followCharacter": "Tab",
					"listLevelPattern": "Bullet",
					"numberFormat": "o",
					"restartLevel": 0,
					"startAt": 0
				},
				{
					"characterFormat": {
						"fontFamily": "Wingdings",
						"fontColor": "empty",
						"fontFamilyBidi": "Wingdings"
					},
					"paragraphFormat": {
						"leftIndent": 108,
						"firstLineIndent": -18,
						"listFormat": {}
					},
					"followCharacter": "Tab",
					"listLevelPattern": "Bullet",
					"numberFormat": "",
					"restartLevel": 0,
					"startAt": 0
				},
				{
					"characterFormat": {
						"fontFamily": "Symbol",
						"fontColor": "empty",
						"fontFamilyBidi": "Symbol"
					},
					"paragraphFormat": {
						"leftIndent": 144,
						"firstLineIndent": -18,
						"listFormat": {}
					},
					"followCharacter": "Tab",
					"listLevelPattern": "Bullet",
					"numberFormat": "",
					"restartLevel": 0,
					"startAt": 0
				},
				{
					"characterFormat": {
						"fontFamily": "Courier New",
						"fontColor": "empty",
						"fontFamilyBidi": "Courier New"
					},
					"paragraphFormat": {
						"leftIndent": 180,
						"firstLineIndent": -18,
						"listFormat": {}
					},
					"followCharacter": "Tab",
					"listLevelPattern": "Bullet",
					"numberFormat": "o",
					"restartLevel": 0,
					"startAt": 0
				},
				{
					"characterFormat": {
						"fontFamily": "Wingdings",
						"fontColor": "empty",
						"fontFamilyBidi": "Wingdings"
					},
					"paragraphFormat": {
						"leftIndent": 216,
						"firstLineIndent": -18,
						"listFormat": {}
					},
					"followCharacter": "Tab",
					"listLevelPattern": "Bullet",
					"numberFormat": "",
					"restartLevel": 0,
					"startAt": 0
				},
				{
					"characterFormat": {
						"fontFamily": "Symbol",
						"fontColor": "empty",
						"fontFamilyBidi": "Symbol"
					},
					"paragraphFormat": {
						"leftIndent": 252,
						"firstLineIndent": -18,
						"listFormat": {}
					},
					"followCharacter": "Tab",
					"listLevelPattern": "Bullet",
					"numberFormat": "",
					"restartLevel": 0,
					"startAt": 0
				},
				{
					"characterFormat": {
						"fontFamily": "Courier New",
						"fontColor": "empty",
						"fontFamilyBidi": "Courier New"
					},
					"paragraphFormat": {
						"leftIndent": 288,
						"firstLineIndent": -18,
						"listFormat": {}
					},
					"followCharacter": "Tab",
					"listLevelPattern": "Bullet",
					"numberFormat": "o",
					"restartLevel": 0,
					"startAt": 0
				},
				{
					"characterFormat": {
						"fontFamily": "Wingdings",
						"fontColor": "empty",
						"fontFamilyBidi": "Wingdings"
					},
					"paragraphFormat": {
						"leftIndent": 324,
						"firstLineIndent": -18,
						"listFormat": {}
					},
					"followCharacter": "Tab",
					"listLevelPattern": "Bullet",
					"numberFormat": "",
					"restartLevel": 0,
					"startAt": 0
				}
			]
		},
		{
			"abstractListId": 15,
			"levels": [
				{
					"characterFormat": {
						"bold": false,
						"fontSize": 12,
						"fontFamily": "Symbol",
						"fontColor": "empty",
						"boldBidi": false,
						"fontSizeBidi": 12,
						"fontFamilyBidi": "Symbol"
					},
					"paragraphFormat": {
						"leftIndent": 8.5,
						"firstLineIndent": -8.5,
						"listFormat": {}
					},
					"followCharacter": "Tab",
					"listLevelPattern": "Bullet",
					"numberFormat": "",
					"restartLevel": 0,
					"startAt": 0
				},
				{
					"characterFormat": {
						"fontFamily": "Courier New",
						"fontColor": "empty",
						"fontFamilyBidi": "Courier New"
					},
					"paragraphFormat": {
						"leftIndent": 50.70000076293945,
						"firstLineIndent": -18,
						"listFormat": {}
					},
					"followCharacter": "Tab",
					"listLevelPattern": "Bullet",
					"numberFormat": "o",
					"restartLevel": 0,
					"startAt": 0
				},
				{
					"characterFormat": {
						"fontFamily": "Wingdings",
						"fontColor": "empty",
						"fontFamilyBidi": "Wingdings"
					},
					"paragraphFormat": {
						"leftIndent": 86.69999694824219,
						"firstLineIndent": -18,
						"listFormat": {}
					},
					"followCharacter": "Tab",
					"listLevelPattern": "Bullet",
					"numberFormat": "",
					"restartLevel": 0,
					"startAt": 0
				},
				{
					"characterFormat": {
						"fontFamily": "Symbol",
						"fontColor": "empty",
						"fontFamilyBidi": "Symbol"
					},
					"paragraphFormat": {
						"leftIndent": 122.69999694824219,
						"firstLineIndent": -18,
						"listFormat": {}
					},
					"followCharacter": "Tab",
					"listLevelPattern": "Bullet",
					"numberFormat": "",
					"restartLevel": 0,
					"startAt": 0
				},
				{
					"characterFormat": {
						"fontFamily": "Courier New",
						"fontColor": "empty",
						"fontFamilyBidi": "Courier New"
					},
					"paragraphFormat": {
						"leftIndent": 158.6999969482422,
						"firstLineIndent": -18,
						"listFormat": {}
					},
					"followCharacter": "Tab",
					"listLevelPattern": "Bullet",
					"numberFormat": "o",
					"restartLevel": 0,
					"startAt": 0
				},
				{
					"characterFormat": {
						"fontFamily": "Wingdings",
						"fontColor": "empty",
						"fontFamilyBidi": "Wingdings"
					},
					"paragraphFormat": {
						"leftIndent": 194.6999969482422,
						"firstLineIndent": -18,
						"listFormat": {}
					},
					"followCharacter": "Tab",
					"listLevelPattern": "Bullet",
					"numberFormat": "",
					"restartLevel": 0,
					"startAt": 0
				},
				{
					"characterFormat": {
						"fontFamily": "Symbol",
						"fontColor": "empty",
						"fontFamilyBidi": "Symbol"
					},
					"paragraphFormat": {
						"leftIndent": 230.6999969482422,
						"firstLineIndent": -18,
						"listFormat": {}
					},
					"followCharacter": "Tab",
					"listLevelPattern": "Bullet",
					"numberFormat": "",
					"restartLevel": 0,
					"startAt": 0
				},
				{
					"characterFormat": {
						"fontFamily": "Courier New",
						"fontColor": "empty",
						"fontFamilyBidi": "Courier New"
					},
					"paragraphFormat": {
						"leftIndent": 266.70001220703127,
						"firstLineIndent": -18,
						"listFormat": {}
					},
					"followCharacter": "Tab",
					"listLevelPattern": "Bullet",
					"numberFormat": "o",
					"restartLevel": 0,
					"startAt": 0
				},
				{
					"characterFormat": {
						"fontFamily": "Wingdings",
						"fontColor": "empty",
						"fontFamilyBidi": "Wingdings"
					},
					"paragraphFormat": {
						"leftIndent": 302.70001220703127,
						"firstLineIndent": -18,
						"listFormat": {}
					},
					"followCharacter": "Tab",
					"listLevelPattern": "Bullet",
					"numberFormat": "",
					"restartLevel": 0,
					"startAt": 0
				}
			]
		}
	],
	"comments": [],
	"revisions": [],
	"customXml": [],
	"footnotes": {
		"separator": [
			{
				"paragraphFormat": {
					"styleName": "Normal",
					"listFormat": {}
				},
				"characterFormat": {
					"fontColor": "empty"
				},
				"inlines": [
					{
						"characterFormat": {
							"fontColor": "empty"
						},
						"text": "\u0003"
					}
				]
			}
		],
		"continuationSeparator": [
			{
				"paragraphFormat": {
					"styleName": "Normal",
					"listFormat": {}
				},
				"characterFormat": {
					"fontColor": "empty"
				},
				"inlines": [
					{
						"characterFormat": {
							"fontColor": "empty"
						},
						"text": "\u0004"
					}
				]
			}
		],
		"continuationNotice": [
			{
				"paragraphFormat": {
					"listFormat": {}
				},
				"characterFormat": {},
				"inlines": []
			}
		]
	},
	"endnotes": {
		"separator": [
			{
				"paragraphFormat": {
					"styleName": "Normal",
					"listFormat": {}
				},
				"characterFormat": {
					"fontColor": "empty"
				},
				"inlines": [
					{
						"characterFormat": {
							"fontColor": "empty"
						},
						"text": "\u0003"
					}
				]
			}
		],
		"continuationSeparator": [
			{
				"paragraphFormat": {
					"styleName": "Normal",
					"listFormat": {}
				},
				"characterFormat": {
					"fontColor": "empty"
				},
				"inlines": [
					{
						"characterFormat": {
							"fontColor": "empty"
						},
						"text": "\u0004"
					}
				]
			}
		],
		"continuationNotice": [
			{
				"paragraphFormat": {
					"listFormat": {}
				},
				"characterFormat": {},
				"inlines": []
			}
		]
	}
}

describe('Shape validation', () => {
    let editor: DocumentEditor = undefined;
    let documentHelper: DocumentHelper;
    beforeAll(() => {
        let ele: HTMLElement = createElement('div', { id: 'container' });
        document.body.appendChild(ele);
        DocumentEditor.Inject(Editor, Selection, SfdtExport);
        editor = new DocumentEditor({ enableSfdtExport: true, enableEditor: true, enableSelection: true, isReadOnly: false });
        documentHelper = editor.documentHelper;
        (editor.documentHelper as any).containerCanvasIn = TestHelper.containerCanvas;
        (editor.documentHelper as any).selectionCanvasIn = TestHelper.selectionCanvas;
        (editor.documentHelper.render as any).pageCanvasIn = TestHelper.pageCanvas;
        (editor.documentHelper.render as any).selectionCanvasIn = TestHelper.pageSelectionCanvas;
        editor.appendTo('#container');
    });
    afterAll((done) => {
        document.body.removeChild(document.getElementById('container'));
        editor.destroy();
        editor = undefined;
        documentHelper = undefined;
        document.body.innerHTML = '';
        setTimeout(function () {
            done();
        }, 1000);
    });
    it('Shape with table validation', () => {
        console.log('Shapewith Table validation');
        editor.open(JSON.stringify(save));
        let val: any = ((documentHelper.pages[0].bodyWidgets[0].floatingElements[1] as ShapeElementBox).textFrame.childWidgets[0] as TableWidget).bodyWidget;
        let tab: boolean = isNullOrUndefined(val);
        expect(tab).not.toBe(true);
    });
});

describe('Sfdt export for Empty Para tracking', () => {
    let editor: DocumentEditor;
    let documentHelper: DocumentHelper;
    let exportData: any;
    beforeAll((): void => {
        let ele: HTMLElement = createElement('div', { id: 'container' });
        document.body.appendChild(ele);
        DocumentEditor.Inject(SfdtExport, Editor, Selection);
        editor = new DocumentEditor({ enableSfdtExport: true, enableEditor: true, enableSelection: true, });
        (editor.documentHelper as any).containerCanvasIn = TestHelper.containerCanvas;
        (editor.documentHelper as any).selectionCanvasIn = TestHelper.selectionCanvas;
        (editor.documentHelper.render as any).pageCanvasIn = TestHelper.pageCanvas;
        (editor.documentHelper.render as any).selectionCanvasIn = TestHelper.pageSelectionCanvas;
        editor.appendTo('#container');
        documentHelper = editor.documentHelper;
    });
    afterAll((done): void => {
        documentHelper.destroy();
        documentHelper = undefined;
        editor.destroy();
        document.body.removeChild(document.getElementById('container'));
        editor = undefined;
        document.body.innerHTML = '';
        setTimeout(function () {
            done();
        }, 1000);
    });
    it('Empty Para tracking', () => {
        editor.openBlank();
        editor.enableTrackChanges = true;
        editor.editor.onEnter();
        exportData = JSON.parse(editor.sfdtExportModule.serialize());
        expect(exportData.sections[0].blocks[0].characterFormat.revisionIds.length).toBe(1);
    });
});
let contentControl: any = {
	"sections": [
		{
			"sectionFormat": {
				"pageWidth": 595.2999877929688,
				"pageHeight": 841.9000244140625,
				"leftMargin": 72,
				"rightMargin": 72,
				"topMargin": 72,
				"bottomMargin": 72,
				"differentFirstPage": false,
				"differentOddAndEvenPages": false,
				"headerDistance": 35.400001525878909,
				"footerDistance": 35.400001525878909,
				"bidi": false,
				"pageNumberStyle": "Arabic"
			},
			"blocks": [
				{
					"paragraphFormat": {
						"borders": {
							"top": {},
							"left": {},
							"right": {},
							"bottom": {},
							"horizontal": {},
							"vertical": {}
						},
						"styleName": "Normal",
						"listFormat": {}
					},
					"characterFormat": {},
					"inlines": []
				},
				{
					"paragraphFormat": {
						"borders": {
							"top": {},
							"left": {},
							"right": {},
							"bottom": {},
							"horizontal": {},
							"vertical": {}
						},
						"styleName": "Normal",
						"listFormat": {}
					},
					"characterFormat": {},
					"inlines": [
						{
							"characterFormat": {},
							"text": "Table:"
						}
					]
				},
				{
					"blocks": [
						{
							"rows": [
								{
									"cells": [
										{
											"blocks": [
												{
													"paragraphFormat": {
														"borders": {
															"top": {},
															"left": {},
															"right": {},
															"bottom": {},
															"horizontal": {},
															"vertical": {}
														},
														"styleName": "Normal",
														"listFormat": {}
													},
													"characterFormat": {},
													"inlines": [
														{
															"characterFormat": {},
															"text": "name"
														}
													]
												}
											],
											"cellFormat": {
												"borders": {
													"top": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"left": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"right": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"bottom": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"diagonalDown": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"diagonalUp": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"horizontal": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"vertical": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													}
												},
												"shading": {},
												"preferredWidthType": "Auto",
												"cellWidth": 84.07808999999999,
												"columnSpan": 1,
												"rowSpan": 1,
												"verticalAlignment": "Top"
											},
											"columnIndex": 0
										},
										{
											"blocks": [
												{
													"paragraphFormat": {
														"borders": {
															"top": {},
															"left": {},
															"right": {},
															"bottom": {},
															"horizontal": {},
															"vertical": {}
														},
														"styleName": "Normal",
														"listFormat": {}
													},
													"characterFormat": {},
													"inlines": [
														{
															"characterFormat": {},
															"text": "name"
														}
													]
												}
											],
											"cellFormat": {
												"borders": {
													"top": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"left": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"right": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"bottom": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"diagonalDown": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"diagonalUp": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"horizontal": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"vertical": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													}
												},
												"shading": {},
												"preferredWidthType": "Auto",
												"cellWidth": 97.73056,
												"columnSpan": 1,
												"rowSpan": 1,
												"verticalAlignment": "Top"
											},
											"columnIndex": 1
										}
									],
									"rowFormat": {
										"height": 1,
										"allowBreakAcrossPages": true,
										"heightType": "AtLeast",
										"isHeader": true,
										"borders": {
											"top": {
												"hasNoneStyle": false,
												"lineStyle": "None",
												"lineWidth": 0,
												"shadow": false,
												"space": 0
											},
											"left": {
												"hasNoneStyle": false,
												"lineStyle": "None",
												"lineWidth": 0,
												"shadow": false,
												"space": 0
											},
											"right": {
												"hasNoneStyle": false,
												"lineStyle": "None",
												"lineWidth": 0,
												"shadow": false,
												"space": 0
											},
											"bottom": {
												"hasNoneStyle": false,
												"lineStyle": "None",
												"lineWidth": 0,
												"shadow": false,
												"space": 0
											},
											"diagonalDown": {
												"hasNoneStyle": false,
												"lineStyle": "None",
												"lineWidth": 0,
												"shadow": false,
												"space": 0
											},
											"diagonalUp": {
												"hasNoneStyle": false,
												"lineStyle": "None",
												"lineWidth": 0,
												"shadow": false,
												"space": 0
											},
											"horizontal": {
												"hasNoneStyle": false,
												"lineStyle": "None",
												"lineWidth": 0,
												"shadow": false,
												"space": 0
											},
											"vertical": {
												"hasNoneStyle": false,
												"lineStyle": "None",
												"lineWidth": 0,
												"shadow": false,
												"space": 0
											}
										},
										"gridBefore": 0,
										"gridAfter": 0
									}
								},
								{
									"cells": [
										{
											"blocks": [
												{
													"blocks": [
														{
															"paragraphFormat": {
																"borders": {
																	"top": {},
																	"left": {},
																	"right": {},
																	"bottom": {},
																	"horizontal": {},
																	"vertical": {}
																},
																"textAlignment": "Justify",
																"lineSpacing": 1.5,
																"lineSpacingType": "Multiple",
																"styleName": "Normal",
																"listFormat": {}
															},
															"characterFormat": {},
															"inlines": [
																{
																	"characterFormat": {},
																	"text": "Jen "
																},
																{
																	"characterFormat": {},
																	"text": "Bofield"
																}
															]
														}
													],
													"contentControlProperties": {
														"lockContentControl": false,
														"lockContents": false,
														"tag": "eyJ0eXBlIjoic2FsZXNmb3JjZSIsInZhbHVlIjp7InJlcG9ydCI6bnVsbCwic291cmNlVHlwZSI6Im9iamVjdCIsInVpZCI6Ik9iamVjdDMyMGU4NDQ3MDI0MDRjMTRhZTkwMjZmYzU1YzM4YjMzIiwib2JqZWN0IjoiQ29udGFjdCIsImNvbW1lbnQiOiJsb2FkIGMzICIsImlzRm9ybXVsYSI6ZmFsc2UsImZpZWxkIjoiZnRDb2wwIiwiZmllbGRUeXBlIjoic3RyaW5nIiwic29hcFR5cGUiOiJ4c2Q6c3RyaW5nIiwiZm9ybWF0IjpudWxsLCJpblNlY3Rpb24iOmZhbHNlLCJyZWZzIjp7IjAiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn0sIjEiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn0sIjIiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn19LCJjb2xDb25kaXRpb24iOlt7ImxlZnRUeXBlIjoib2JqZWN0IiwibGVmdFZhbHVlIjoiIiwib2JqZWN0IjoiIiwiZmllbGQiOiJJZCIsImNvbmRpdGlvbiI6ImVxdWFscyIsInZhbHVlIjoiIiwiYnJhY2tldCI6IiIsInBvc3RDb25kaXRpb24iOiIiLCJtZXRhIjpudWxsLCJ2YWx1ZVR5cGUiOiJzdGF0aWMiLCJ0cnVlVmFsdWUiOnsidHlwZSI6ImZpZWxkIiwidmFsdWUiOiIiLCJmaWVsZCI6e30sInJlZnMiOnsiMCI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifSwiMSI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifSwiMiI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifX19LCJmYWxzZVZhbHVlIjp7InR5cGUiOiJvdGhlciIsInZhbHVlIjoiIiwiZmllbGQiOnt9LCJyZWZzIjp7IjAiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn0sIjEiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn0sIjIiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn19fX1dLCJjZWxsQ29uZGl0aW9uIjpbeyJsZWZ0VHlwZSI6Im9iamVjdCIsImxlZnRWYWx1ZSI6IiIsIm9iamVjdCI6IiIsImZpZWxkIjoiSWQiLCJjb25kaXRpb24iOiJlcXVhbHMiLCJ2YWx1ZSI6IiIsImJyYWNrZXQiOiIiLCJwb3N0Q29uZGl0aW9uIjoiIiwibWV0YSI6bnVsbCwidmFsdWVUeXBlIjoic3RhdGljIiwidHJ1ZVZhbHVlIjp7InR5cGUiOiJmaWVsZCIsInZhbHVlIjoiIiwiZmllbGQiOnt9LCJyZWZzIjp7IjAiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn0sIjEiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn0sIjIiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn19fSwiZmFsc2VWYWx1ZSI6eyJ0eXBlIjoib3RoZXIiLCJ2YWx1ZSI6IiIsImZpZWxkIjp7fSwicmVmcyI6eyIwIjp7Im9iamVjdCI6bnVsbCwiZmllbGQiOnsia2V5IjpudWxsfSwicG9seW1vcnBoaWMiOmZhbHNlLCJyZWxhdGlvbnNoaXBOYW1lIjoiIiwidHlwZSI6IiJ9LCIxIjp7Im9iamVjdCI6bnVsbCwiZmllbGQiOnsia2V5IjpudWxsfSwicG9seW1vcnBoaWMiOmZhbHNlLCJyZWxhdGlvbnNoaXBOYW1lIjoiIiwidHlwZSI6IiJ9LCIyIjp7Im9iamVjdCI6bnVsbCwiZmllbGQiOnsia2V5IjpudWxsfSwicG9seW1vcnBoaWMiOmZhbHNlLCJyZWxhdGlvbnNoaXBOYW1lIjoiIiwidHlwZSI6IiJ9fX19XSwicm93VUlEIjoiRmllbGQyNzMyMmIxMjM1M2I0MzU1OGUzZDMzYzZjN2RiMTU2YSIsInRydWVWYWx1ZSI6eyJ0eXBlIjoiZmllbGQiLCJ2YWx1ZSI6IiJ9LCJmYWxzZVZhbHVlIjp7InR5cGUiOiJvdGhlciIsInZhbHVlIjoiIn0sIm11bHRpQ2VsbENvbmQiOltdLCJwYXJlbnRTZWN0aW9uVUlEIjpudWxsLCJjbGFzc05hbWUiOiIifSwiaXNBcnJheSI6dHJ1ZSwicm93RmllbGRzIjoyLCJjZWxsSW5kZXgiOjAsImltYWdlIjp7fX0=",
														"color": "#008000FF",
														"title": "SF:R",
														"appearance": "Hidden",
														"type": "RichText",
														"hasPlaceHolderText": false,
														"multiline": false,
														"isTemporary": false,
														"characterFormat": {},
														"contentControlListItems": []
													}
												}
											],
											"cellFormat": {
												"borders": {
													"top": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"left": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"right": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"bottom": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"diagonalDown": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"diagonalUp": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"horizontal": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"vertical": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													}
												},
												"shading": {},
												"preferredWidthType": "Auto",
												"cellWidth": 84.07808999999999,
												"columnSpan": 1,
												"rowSpan": 1,
												"verticalAlignment": "Top"
											},
											"columnIndex": 0
										},
										{
											"blocks": [
												{
													"blocks": [
														{
															"paragraphFormat": {
																"borders": {
																	"top": {},
																	"left": {},
																	"right": {},
																	"bottom": {},
																	"horizontal": {},
																	"vertical": {}
																},
																"textAlignment": "Justify",
																"lineSpacing": 1.5,
																"lineSpacingType": "Multiple",
																"styleName": "Normal",
																"listFormat": {}
															},
															"characterFormat": {},
															"inlines": [
																{
																	"characterFormat": {},
																	"text": "Trish "
																},
																{
																	"characterFormat": {},
																	"text": "McGruar"
																}
															]
														}
													],
													"contentControlProperties": {
														"lockContentControl": false,
														"lockContents": false,
														"tag": "eyJ0eXBlIjoic2FsZXNmb3JjZSIsInZhbHVlIjp7InJlcG9ydCI6bnVsbCwic291cmNlVHlwZSI6Im9iamVjdCIsInVpZCI6Ik9iamVjdDMyMGU4NDQ3MDI0MDRjMTRhZTkwMjZmYzU1YzM4YjMzIiwib2JqZWN0IjoiQ29udGFjdCIsImNvbW1lbnQiOiJsb2FkIGMzICIsImlzRm9ybXVsYSI6ZmFsc2UsImZpZWxkIjoiZnRDb2wxIiwiZmllbGRUeXBlIjoic3RyaW5nIiwic29hcFR5cGUiOiJ4c2Q6c3RyaW5nIiwiZm9ybWF0IjpudWxsLCJpblNlY3Rpb24iOmZhbHNlLCJyZWZzIjp7IjAiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn0sIjEiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn0sIjIiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn19LCJjb2xDb25kaXRpb24iOlt7ImxlZnRUeXBlIjoib2JqZWN0IiwibGVmdFZhbHVlIjoiIiwib2JqZWN0IjoiIiwiZmllbGQiOiJJZCIsImNvbmRpdGlvbiI6ImVxdWFscyIsInZhbHVlIjoiIiwiYnJhY2tldCI6IiIsInBvc3RDb25kaXRpb24iOiIiLCJtZXRhIjpudWxsLCJ2YWx1ZVR5cGUiOiJzdGF0aWMiLCJ0cnVlVmFsdWUiOnsidHlwZSI6ImZpZWxkIiwidmFsdWUiOiIiLCJmaWVsZCI6e30sInJlZnMiOnsiMCI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifSwiMSI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifSwiMiI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifX19LCJmYWxzZVZhbHVlIjp7InR5cGUiOiJvdGhlciIsInZhbHVlIjoiIiwiZmllbGQiOnt9LCJyZWZzIjp7IjAiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn0sIjEiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn0sIjIiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn19fX1dLCJjZWxsQ29uZGl0aW9uIjpbeyJsZWZ0VHlwZSI6Im9iamVjdCIsImxlZnRWYWx1ZSI6IiIsIm9iamVjdCI6IiIsImZpZWxkIjoiSWQiLCJjb25kaXRpb24iOiJlcXVhbHMiLCJ2YWx1ZSI6IiIsImJyYWNrZXQiOiIiLCJwb3N0Q29uZGl0aW9uIjoiIiwibWV0YSI6bnVsbCwidmFsdWVUeXBlIjoic3RhdGljIiwidHJ1ZVZhbHVlIjp7InR5cGUiOiJmaWVsZCIsInZhbHVlIjoiIiwiZmllbGQiOnt9LCJyZWZzIjp7IjAiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn0sIjEiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn0sIjIiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn19fSwiZmFsc2VWYWx1ZSI6eyJ0eXBlIjoib3RoZXIiLCJ2YWx1ZSI6IiIsImZpZWxkIjp7fSwicmVmcyI6eyIwIjp7Im9iamVjdCI6bnVsbCwiZmllbGQiOnsia2V5IjpudWxsfSwicG9seW1vcnBoaWMiOmZhbHNlLCJyZWxhdGlvbnNoaXBOYW1lIjoiIiwidHlwZSI6IiJ9LCIxIjp7Im9iamVjdCI6bnVsbCwiZmllbGQiOnsia2V5IjpudWxsfSwicG9seW1vcnBoaWMiOmZhbHNlLCJyZWxhdGlvbnNoaXBOYW1lIjoiIiwidHlwZSI6IiJ9LCIyIjp7Im9iamVjdCI6bnVsbCwiZmllbGQiOnsia2V5IjpudWxsfSwicG9seW1vcnBoaWMiOmZhbHNlLCJyZWxhdGlvbnNoaXBOYW1lIjoiIiwidHlwZSI6IiJ9fX19XSwicm93VUlEIjoiRmllbGRjZDk3MjhkZWM2ZDA0OTIyYjhmNWU5MjUwMWI2NjE4YSIsInRydWVWYWx1ZSI6eyJ0eXBlIjoiZmllbGQiLCJ2YWx1ZSI6IiJ9LCJmYWxzZVZhbHVlIjp7InR5cGUiOiJvdGhlciIsInZhbHVlIjoiIn0sIm11bHRpQ2VsbENvbmQiOltdLCJwYXJlbnRTZWN0aW9uVUlEIjpudWxsLCJjbGFzc05hbWUiOiIifSwiaXNBcnJheSI6dHJ1ZSwicm93RmllbGRzIjoyLCJjZWxsSW5kZXgiOjEsImltYWdlIjp7fX0=",
														"color": "#008000FF",
														"title": "SF:R",
														"appearance": "Hidden",
														"type": "RichText",
														"hasPlaceHolderText": false,
														"multiline": false,
														"isTemporary": false,
														"characterFormat": {},
														"contentControlListItems": []
													}
												}
											],
											"cellFormat": {
												"borders": {
													"top": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"left": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"right": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"bottom": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"diagonalDown": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"diagonalUp": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"horizontal": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"vertical": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													}
												},
												"shading": {},
												"preferredWidthType": "Auto",
												"cellWidth": 97.73056,
												"columnSpan": 1,
												"rowSpan": 1,
												"verticalAlignment": "Top"
											},
											"columnIndex": 1
										}
									],
									"rowFormat": {
										"height": 1,
										"allowBreakAcrossPages": true,
										"heightType": "AtLeast",
										"isHeader": false,
										"borders": {
											"top": {
												"hasNoneStyle": false,
												"lineStyle": "None",
												"lineWidth": 0,
												"shadow": false,
												"space": 0
											},
											"left": {
												"hasNoneStyle": false,
												"lineStyle": "None",
												"lineWidth": 0,
												"shadow": false,
												"space": 0
											},
											"right": {
												"hasNoneStyle": false,
												"lineStyle": "None",
												"lineWidth": 0,
												"shadow": false,
												"space": 0
											},
											"bottom": {
												"hasNoneStyle": false,
												"lineStyle": "None",
												"lineWidth": 0,
												"shadow": false,
												"space": 0
											},
											"diagonalDown": {
												"hasNoneStyle": false,
												"lineStyle": "None",
												"lineWidth": 0,
												"shadow": false,
												"space": 0
											},
											"diagonalUp": {
												"hasNoneStyle": false,
												"lineStyle": "None",
												"lineWidth": 0,
												"shadow": false,
												"space": 0
											},
											"horizontal": {
												"hasNoneStyle": false,
												"lineStyle": "None",
												"lineWidth": 0,
												"shadow": false,
												"space": 0
											},
											"vertical": {
												"hasNoneStyle": false,
												"lineStyle": "None",
												"lineWidth": 0,
												"shadow": false,
												"space": 0
											}
										},
										"gridBefore": 0,
										"gridAfter": 0
									}
								},
								{
									"cells": [
										{
											"blocks": [
												{
													"blocks": [
														{
															"paragraphFormat": {
																"borders": {
																	"top": {},
																	"left": {},
																	"right": {},
																	"bottom": {},
																	"horizontal": {},
																	"vertical": {}
																},
																"textAlignment": "Justify",
																"lineSpacing": 1.5,
																"lineSpacingType": "Multiple",
																"styleName": "Normal",
																"listFormat": {}
															},
															"characterFormat": {},
															"inlines": [
																{
																	"characterFormat": {},
																	"text": "Sherilyn "
																},
																{
																	"characterFormat": {},
																	"text": "O' "
																},
																{
																	"characterFormat": {},
																	"text": "Lone"
																}
															]
														}
													],
													"contentControlProperties": {
														"lockContentControl": false,
														"lockContents": false,
														"tag": "eyJ0eXBlIjoic2FsZXNmb3JjZSIsInZhbHVlIjp7InJlcG9ydCI6bnVsbCwic291cmNlVHlwZSI6Im9iamVjdCIsInVpZCI6Ik9iamVjdDMyMGU4NDQ3MDI0MDRjMTRhZTkwMjZmYzU1YzM4YjMzIiwib2JqZWN0IjoiQ29udGFjdCIsImNvbW1lbnQiOiJsb2FkIGMzICIsImlzRm9ybXVsYSI6ZmFsc2UsImZpZWxkIjoiZnRDb2wwIiwiZmllbGRUeXBlIjoic3RyaW5nIiwic29hcFR5cGUiOiJ4c2Q6c3RyaW5nIiwiZm9ybWF0IjpudWxsLCJpblNlY3Rpb24iOmZhbHNlLCJyZWZzIjp7IjAiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn0sIjEiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn0sIjIiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn19LCJjb2xDb25kaXRpb24iOlt7ImxlZnRUeXBlIjoib2JqZWN0IiwibGVmdFZhbHVlIjoiIiwib2JqZWN0IjoiIiwiZmllbGQiOiJJZCIsImNvbmRpdGlvbiI6ImVxdWFscyIsInZhbHVlIjoiIiwiYnJhY2tldCI6IiIsInBvc3RDb25kaXRpb24iOiIiLCJtZXRhIjpudWxsLCJ2YWx1ZVR5cGUiOiJzdGF0aWMiLCJ0cnVlVmFsdWUiOnsidHlwZSI6ImZpZWxkIiwidmFsdWUiOiIiLCJmaWVsZCI6e30sInJlZnMiOnsiMCI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifSwiMSI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifSwiMiI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifX19LCJmYWxzZVZhbHVlIjp7InR5cGUiOiJvdGhlciIsInZhbHVlIjoiIiwiZmllbGQiOnt9LCJyZWZzIjp7IjAiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn0sIjEiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn0sIjIiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn19fX1dLCJjZWxsQ29uZGl0aW9uIjpbeyJsZWZ0VHlwZSI6Im9iamVjdCIsImxlZnRWYWx1ZSI6IiIsIm9iamVjdCI6IiIsImZpZWxkIjoiSWQiLCJjb25kaXRpb24iOiJlcXVhbHMiLCJ2YWx1ZSI6IiIsImJyYWNrZXQiOiIiLCJwb3N0Q29uZGl0aW9uIjoiIiwibWV0YSI6bnVsbCwidmFsdWVUeXBlIjoic3RhdGljIiwidHJ1ZVZhbHVlIjp7InR5cGUiOiJmaWVsZCIsInZhbHVlIjoiIiwiZmllbGQiOnt9LCJyZWZzIjp7IjAiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn0sIjEiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn0sIjIiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn19fSwiZmFsc2VWYWx1ZSI6eyJ0eXBlIjoib3RoZXIiLCJ2YWx1ZSI6IiIsImZpZWxkIjp7fSwicmVmcyI6eyIwIjp7Im9iamVjdCI6bnVsbCwiZmllbGQiOnsia2V5IjpudWxsfSwicG9seW1vcnBoaWMiOmZhbHNlLCJyZWxhdGlvbnNoaXBOYW1lIjoiIiwidHlwZSI6IiJ9LCIxIjp7Im9iamVjdCI6bnVsbCwiZmllbGQiOnsia2V5IjpudWxsfSwicG9seW1vcnBoaWMiOmZhbHNlLCJyZWxhdGlvbnNoaXBOYW1lIjoiIiwidHlwZSI6IiJ9LCIyIjp7Im9iamVjdCI6bnVsbCwiZmllbGQiOnsia2V5IjpudWxsfSwicG9seW1vcnBoaWMiOmZhbHNlLCJyZWxhdGlvbnNoaXBOYW1lIjoiIiwidHlwZSI6IiJ9fX19XSwicm93VUlEIjoiRmllbGQyNzMyMmIxMjM1M2I0MzU1OGUzZDMzYzZjN2RiMTU2YSIsInRydWVWYWx1ZSI6eyJ0eXBlIjoiZmllbGQiLCJ2YWx1ZSI6IiJ9LCJmYWxzZVZhbHVlIjp7InR5cGUiOiJvdGhlciIsInZhbHVlIjoiIn0sIm11bHRpQ2VsbENvbmQiOltdLCJwYXJlbnRTZWN0aW9uVUlEIjpudWxsLCJjbGFzc05hbWUiOiIifSwiaXNBcnJheSI6dHJ1ZSwicm93RmllbGRzIjoyLCJjZWxsSW5kZXgiOjAsImltYWdlIjp7fX0=",
														"color": "#008000FF",
														"title": "SF:R",
														"appearance": "Hidden",
														"type": "RichText",
														"hasPlaceHolderText": false,
														"multiline": false,
														"isTemporary": false,
														"characterFormat": {},
														"contentControlListItems": []
													}
												}
											],
											"cellFormat": {
												"borders": {
													"top": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"left": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"right": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"bottom": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"diagonalDown": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"diagonalUp": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"horizontal": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"vertical": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													}
												},
												"shading": {},
												"preferredWidthType": "Auto",
												"cellWidth": 84.07808999999999,
												"columnSpan": 1,
												"rowSpan": 1,
												"verticalAlignment": "Top"
											},
											"columnIndex": 0
										},
										{
											"blocks": [
												{
													"blocks": [
														{
															"paragraphFormat": {
																"borders": {
																	"top": {},
																	"left": {},
																	"right": {},
																	"bottom": {},
																	"horizontal": {},
																	"vertical": {}
																},
																"textAlignment": "Justify",
																"lineSpacing": 1.5,
																"lineSpacingType": "Multiple",
																"styleName": "Normal",
																"listFormat": {}
															},
															"characterFormat": {},
															"inlines": [
																{
																	"characterFormat": {},
																	"text": "Natividad "
																},
																{
																	"characterFormat": {},
																	"text": "Buckland"
																}
															]
														}
													],
													"contentControlProperties": {
														"lockContentControl": false,
														"lockContents": false,
														"tag": "eyJ0eXBlIjoic2FsZXNmb3JjZSIsInZhbHVlIjp7InJlcG9ydCI6bnVsbCwic291cmNlVHlwZSI6Im9iamVjdCIsInVpZCI6Ik9iamVjdDMyMGU4NDQ3MDI0MDRjMTRhZTkwMjZmYzU1YzM4YjMzIiwib2JqZWN0IjoiQ29udGFjdCIsImNvbW1lbnQiOiJsb2FkIGMzICIsImlzRm9ybXVsYSI6ZmFsc2UsImZpZWxkIjoiZnRDb2wxIiwiZmllbGRUeXBlIjoic3RyaW5nIiwic29hcFR5cGUiOiJ4c2Q6c3RyaW5nIiwiZm9ybWF0IjpudWxsLCJpblNlY3Rpb24iOmZhbHNlLCJyZWZzIjp7IjAiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn0sIjEiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn0sIjIiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn19LCJjb2xDb25kaXRpb24iOlt7ImxlZnRUeXBlIjoib2JqZWN0IiwibGVmdFZhbHVlIjoiIiwib2JqZWN0IjoiIiwiZmllbGQiOiJJZCIsImNvbmRpdGlvbiI6ImVxdWFscyIsInZhbHVlIjoiIiwiYnJhY2tldCI6IiIsInBvc3RDb25kaXRpb24iOiIiLCJtZXRhIjpudWxsLCJ2YWx1ZVR5cGUiOiJzdGF0aWMiLCJ0cnVlVmFsdWUiOnsidHlwZSI6ImZpZWxkIiwidmFsdWUiOiIiLCJmaWVsZCI6e30sInJlZnMiOnsiMCI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifSwiMSI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifSwiMiI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifX19LCJmYWxzZVZhbHVlIjp7InR5cGUiOiJvdGhlciIsInZhbHVlIjoiIiwiZmllbGQiOnt9LCJyZWZzIjp7IjAiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn0sIjEiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn0sIjIiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn19fX1dLCJjZWxsQ29uZGl0aW9uIjpbeyJsZWZ0VHlwZSI6Im9iamVjdCIsImxlZnRWYWx1ZSI6IiIsIm9iamVjdCI6IiIsImZpZWxkIjoiSWQiLCJjb25kaXRpb24iOiJlcXVhbHMiLCJ2YWx1ZSI6IiIsImJyYWNrZXQiOiIiLCJwb3N0Q29uZGl0aW9uIjoiIiwibWV0YSI6bnVsbCwidmFsdWVUeXBlIjoic3RhdGljIiwidHJ1ZVZhbHVlIjp7InR5cGUiOiJmaWVsZCIsInZhbHVlIjoiIiwiZmllbGQiOnt9LCJyZWZzIjp7IjAiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn0sIjEiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn0sIjIiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn19fSwiZmFsc2VWYWx1ZSI6eyJ0eXBlIjoib3RoZXIiLCJ2YWx1ZSI6IiIsImZpZWxkIjp7fSwicmVmcyI6eyIwIjp7Im9iamVjdCI6bnVsbCwiZmllbGQiOnsia2V5IjpudWxsfSwicG9seW1vcnBoaWMiOmZhbHNlLCJyZWxhdGlvbnNoaXBOYW1lIjoiIiwidHlwZSI6IiJ9LCIxIjp7Im9iamVjdCI6bnVsbCwiZmllbGQiOnsia2V5IjpudWxsfSwicG9seW1vcnBoaWMiOmZhbHNlLCJyZWxhdGlvbnNoaXBOYW1lIjoiIiwidHlwZSI6IiJ9LCIyIjp7Im9iamVjdCI6bnVsbCwiZmllbGQiOnsia2V5IjpudWxsfSwicG9seW1vcnBoaWMiOmZhbHNlLCJyZWxhdGlvbnNoaXBOYW1lIjoiIiwidHlwZSI6IiJ9fX19XSwicm93VUlEIjoiRmllbGRjZDk3MjhkZWM2ZDA0OTIyYjhmNWU5MjUwMWI2NjE4YSIsInRydWVWYWx1ZSI6eyJ0eXBlIjoiZmllbGQiLCJ2YWx1ZSI6IiJ9LCJmYWxzZVZhbHVlIjp7InR5cGUiOiJvdGhlciIsInZhbHVlIjoiIn0sIm11bHRpQ2VsbENvbmQiOltdLCJwYXJlbnRTZWN0aW9uVUlEIjpudWxsLCJjbGFzc05hbWUiOiIifSwiaXNBcnJheSI6dHJ1ZSwicm93RmllbGRzIjoyLCJjZWxsSW5kZXgiOjEsImltYWdlIjp7fX0=",
														"color": "#008000FF",
														"title": "SF:R",
														"appearance": "Hidden",
														"type": "RichText",
														"hasPlaceHolderText": false,
														"multiline": false,
														"isTemporary": false,
														"characterFormat": {},
														"contentControlListItems": []
													}
												}
											],
											"cellFormat": {
												"borders": {
													"top": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"left": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"right": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"bottom": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"diagonalDown": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"diagonalUp": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"horizontal": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"vertical": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													}
												},
												"shading": {},
												"preferredWidthType": "Auto",
												"cellWidth": 97.73056,
												"columnSpan": 1,
												"rowSpan": 1,
												"verticalAlignment": "Top"
											},
											"columnIndex": 1
										}
									],
									"rowFormat": {
										"height": 1,
										"allowBreakAcrossPages": true,
										"heightType": "AtLeast",
										"isHeader": false,
										"borders": {
											"top": {
												"hasNoneStyle": false,
												"lineStyle": "None",
												"lineWidth": 0,
												"shadow": false,
												"space": 0
											},
											"left": {
												"hasNoneStyle": false,
												"lineStyle": "None",
												"lineWidth": 0,
												"shadow": false,
												"space": 0
											},
											"right": {
												"hasNoneStyle": false,
												"lineStyle": "None",
												"lineWidth": 0,
												"shadow": false,
												"space": 0
											},
											"bottom": {
												"hasNoneStyle": false,
												"lineStyle": "None",
												"lineWidth": 0,
												"shadow": false,
												"space": 0
											},
											"diagonalDown": {
												"hasNoneStyle": false,
												"lineStyle": "None",
												"lineWidth": 0,
												"shadow": false,
												"space": 0
											},
											"diagonalUp": {
												"hasNoneStyle": false,
												"lineStyle": "None",
												"lineWidth": 0,
												"shadow": false,
												"space": 0
											},
											"horizontal": {
												"hasNoneStyle": false,
												"lineStyle": "None",
												"lineWidth": 0,
												"shadow": false,
												"space": 0
											},
											"vertical": {
												"hasNoneStyle": false,
												"lineStyle": "None",
												"lineWidth": 0,
												"shadow": false,
												"space": 0
											}
										},
										"gridBefore": 0,
										"gridAfter": 0
									}
								}
							],
							"grid": [
								84.07808999999999,
								97.73056
							],
							"tableFormat": {
								"borders": {
									"top": {
										"color": "#000000FF",
										"hasNoneStyle": false,
										"lineStyle": "Single",
										"lineWidth": 0.5,
										"shadow": false,
										"space": 0
									},
									"left": {
										"color": "#000000FF",
										"hasNoneStyle": false,
										"lineStyle": "Single",
										"lineWidth": 0.5,
										"shadow": false,
										"space": 0
									},
									"right": {
										"color": "#000000FF",
										"hasNoneStyle": false,
										"lineStyle": "Single",
										"lineWidth": 0.5,
										"shadow": false,
										"space": 0
									},
									"bottom": {
										"color": "#000000FF",
										"hasNoneStyle": false,
										"lineStyle": "Single",
										"lineWidth": 0.5,
										"shadow": false,
										"space": 0
									},
									"diagonalDown": {
										"hasNoneStyle": false,
										"lineStyle": "None",
										"lineWidth": 0,
										"shadow": false,
										"space": 0
									},
									"diagonalUp": {
										"hasNoneStyle": false,
										"lineStyle": "None",
										"lineWidth": 0,
										"shadow": false,
										"space": 0
									},
									"horizontal": {
										"color": "#000000FF",
										"hasNoneStyle": false,
										"lineStyle": "Single",
										"lineWidth": 0.5,
										"shadow": false,
										"space": 0
									},
									"vertical": {
										"color": "#000000FF",
										"hasNoneStyle": false,
										"lineStyle": "Single",
										"lineWidth": 0.5,
										"shadow": false,
										"space": 0
									}
								},
								"shading": {},
								"leftIndent": 0,
								"tableAlignment": "Left",
								"topMargin": 0,
								"rightMargin": 5.4,
								"leftMargin": 5.4,
								"bottomMargin": 0,
								"preferredWidthType": "Auto",
								"bidi": false,
								"allowAutoFit": true
							},
							"description": null,
							"title": null,
							"columnCount": 2
						},
						{
							"paragraphFormat": {
								"borders": {
									"top": {},
									"left": {},
									"right": {},
									"bottom": {},
									"horizontal": {},
									"vertical": {}
								},
								"styleName": "Normal",
								"listFormat": {}
							},
							"characterFormat": {},
							"inlines": []
						}
					],
					"contentControlProperties": {
						"lockContentControl": false,
						"lockContents": false,
						"tag": "eyJhY3Rpb24iOiJpbnNlcnRUYWJsZSIsIm9wZXJhdGlvbiI6Imluc2VydCIsInJlcG9ydCI6bnVsbCwic291cmNlVHlwZSI6Im9iamVjdCIsInJvd3MiOltbeyJ0eXBlIjoic3RhdGljIiwidmFsdWUiOiJuYW1lIiwiZmllbGQiOnt9LCJ1aWQiOiJGaWVsZDZlMTlmZmVjMzllZDQ0MDVhOWEyYTJhNTU1NTBiOGM3In0seyJ0eXBlIjoic3RhdGljIiwidmFsdWUiOiJuYW1lIiwiZmllbGQiOnt9LCJ1aWQiOiJGaWVsZDZhOTEyZWE0MGIyMzQ2ZWRhZTE2Y2I1ODcxZDA3M2QyIn1dLFt7InVpZCI6IkZpZWxkMjczMjJiMTIzNTNiNDM1NThlM2QzM2M2YzdkYjE1NmEiLCJ0eXBlIjoiZmllbGQiLCJ2YWx1ZSI6eyJrZXkiOiJmdENvbDAiLCJ0ZXh0IjoiQ29sdW1uIDEiLCJzb2FwVHlwZSI6InhzZDpzdHJpbmciLCJ0eXBlIjoic3RyaW5nIn0sImZvcm1hdCI6bnVsbCwicmVmcyI6eyIwIjp7Im9iamVjdCI6bnVsbCwiZmllbGQiOnsia2V5IjpudWxsfSwicG9seW1vcnBoaWMiOmZhbHNlLCJyZWxhdGlvbnNoaXBOYW1lIjoiIiwidHlwZSI6IiJ9LCIxIjp7Im9iamVjdCI6bnVsbCwiZmllbGQiOnsia2V5IjpudWxsfSwicG9seW1vcnBoaWMiOmZhbHNlLCJyZWxhdGlvbnNoaXBOYW1lIjoiIiwidHlwZSI6IiJ9LCIyIjp7Im9iamVjdCI6bnVsbCwiZmllbGQiOnsia2V5IjpudWxsfSwicG9seW1vcnBoaWMiOmZhbHNlLCJyZWxhdGlvbnNoaXBOYW1lIjoiIiwidHlwZSI6IiJ9fSwidHJ1ZVZhbHVlIjp7InR5cGUiOiJmaWVsZCIsInZhbHVlIjoiIn0sImZhbHNlVmFsdWUiOnsidHlwZSI6Im90aGVyIiwidmFsdWUiOiIifSwibXVsdGlDZWxsQ29uZCI6W10sImNvbmRpdGlvbmFsRGF0YSI6W119LHsidWlkIjoiRmllbGRjZDk3MjhkZWM2ZDA0OTIyYjhmNWU5MjUwMWI2NjE4YSIsInR5cGUiOiJmaWVsZCIsInZhbHVlIjp7ImtleSI6ImZ0Q29sMSIsInRleHQiOiJDb2x1bW4gMiIsInNvYXBUeXBlIjoieHNkOnN0cmluZyIsInR5cGUiOiJzdHJpbmcifSwiZm9ybWF0IjpudWxsLCJyZWZzIjp7IjAiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn0sIjEiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn0sIjIiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn19LCJ0cnVlVmFsdWUiOnsidHlwZSI6ImZpZWxkIiwidmFsdWUiOiIifSwiZmFsc2VWYWx1ZSI6eyJ0eXBlIjoib3RoZXIiLCJ2YWx1ZSI6IiJ9LCJtdWx0aUNlbGxDb25kIjpbXSwiY29uZGl0aW9uYWxEYXRhIjpbXX1dXSwib2JqZWN0Ijp7ImtleSI6IkNvbnRhY3QiLCJ0ZXh0IjoiQ29udGFjdCAtIGxvYWQgYzMgIiwidWlkIjoiT2JqZWN0MzIwZTg0NDcwMjQwNGMxNGFlOTAyNmZjNTVjMzhiMzMiLCJvYmplY3RLZXkiOiJDb250YWN0IiwiY29tbWVudCI6ImxvYWQgYzMgIn0sImltYWdlIjp7fSwicmVwZWF0SGVhZGVyUm93cyI6dHJ1ZSwiaXNEaXN0aW5jdCI6ZmFsc2UsImRpc3RpbmN0QnkiOnt9LCJoYXNTdW1tYXJ5Um93IjpmYWxzZSwic3VtbWFyeSI6W10sInJvd0NvbmRpdGlvbnMiOlt7ImxlZnRUeXBlIjoib2JqZWN0IiwibGVmdFZhbHVlIjoiIiwib2JqZWN0IjoiIiwiZmllbGQiOiJJZCIsImNvbmRpdGlvbiI6ImVxdWFscyIsInZhbHVlIjoiIiwiYnJhY2tldCI6IiIsInBvc3RDb25kaXRpb24iOiIiLCJtZXRhIjpudWxsLCJ2YWx1ZVR5cGUiOiJzdGF0aWMiLCJ0cnVlVmFsdWUiOnsidHlwZSI6ImZpZWxkIiwidmFsdWUiOiIiLCJmaWVsZCI6e30sInJlZnMiOnsiMCI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifSwiMSI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifSwiMiI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifX19LCJmYWxzZVZhbHVlIjp7InR5cGUiOiJvdGhlciIsInZhbHVlIjoiIiwiZmllbGQiOnt9LCJyZWZzIjp7IjAiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn0sIjEiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn0sIjIiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn19fX1dLCJjb2xDb25kaXRpb25zIjpbW3sibGVmdFR5cGUiOiJvYmplY3QiLCJsZWZ0VmFsdWUiOiIiLCJvYmplY3QiOiIiLCJmaWVsZCI6IklkIiwiY29uZGl0aW9uIjoiZXF1YWxzIiwidmFsdWUiOiIiLCJicmFja2V0IjoiIiwicG9zdENvbmRpdGlvbiI6IiIsIm1ldGEiOm51bGwsInZhbHVlVHlwZSI6InN0YXRpYyIsInRydWVWYWx1ZSI6eyJ0eXBlIjoiZmllbGQiLCJ2YWx1ZSI6IiIsImZpZWxkIjp7fSwicmVmcyI6eyIwIjp7Im9iamVjdCI6bnVsbCwiZmllbGQiOnsia2V5IjpudWxsfSwicG9seW1vcnBoaWMiOmZhbHNlLCJyZWxhdGlvbnNoaXBOYW1lIjoiIiwidHlwZSI6IiJ9LCIxIjp7Im9iamVjdCI6bnVsbCwiZmllbGQiOnsia2V5IjpudWxsfSwicG9seW1vcnBoaWMiOmZhbHNlLCJyZWxhdGlvbnNoaXBOYW1lIjoiIiwidHlwZSI6IiJ9LCIyIjp7Im9iamVjdCI6bnVsbCwiZmllbGQiOnsia2V5IjpudWxsfSwicG9seW1vcnBoaWMiOmZhbHNlLCJyZWxhdGlvbnNoaXBOYW1lIjoiIiwidHlwZSI6IiJ9fX0sImZhbHNlVmFsdWUiOnsidHlwZSI6Im90aGVyIiwidmFsdWUiOiIiLCJmaWVsZCI6e30sInJlZnMiOnsiMCI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifSwiMSI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifSwiMiI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifX19fV0sW3sibGVmdFR5cGUiOiJvYmplY3QiLCJsZWZ0VmFsdWUiOiIiLCJvYmplY3QiOiIiLCJmaWVsZCI6IklkIiwiY29uZGl0aW9uIjoiZXF1YWxzIiwidmFsdWUiOiIiLCJicmFja2V0IjoiIiwicG9zdENvbmRpdGlvbiI6IiIsIm1ldGEiOm51bGwsInZhbHVlVHlwZSI6InN0YXRpYyIsInRydWVWYWx1ZSI6eyJ0eXBlIjoiZmllbGQiLCJ2YWx1ZSI6IiIsImZpZWxkIjp7fSwicmVmcyI6eyIwIjp7Im9iamVjdCI6bnVsbCwiZmllbGQiOnsia2V5IjpudWxsfSwicG9seW1vcnBoaWMiOmZhbHNlLCJyZWxhdGlvbnNoaXBOYW1lIjoiIiwidHlwZSI6IiJ9LCIxIjp7Im9iamVjdCI6bnVsbCwiZmllbGQiOnsia2V5IjpudWxsfSwicG9seW1vcnBoaWMiOmZhbHNlLCJyZWxhdGlvbnNoaXBOYW1lIjoiIiwidHlwZSI6IiJ9LCIyIjp7Im9iamVjdCI6bnVsbCwiZmllbGQiOnsia2V5IjpudWxsfSwicG9seW1vcnBoaWMiOmZhbHNlLCJyZWxhdGlvbnNoaXBOYW1lIjoiIiwidHlwZSI6IiJ9fX0sImZhbHNlVmFsdWUiOnsidHlwZSI6Im90aGVyIiwidmFsdWUiOiIiLCJmaWVsZCI6e30sInJlZnMiOnsiMCI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifSwiMSI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifSwiMiI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifX19fV0sW3sibGVmdFR5cGUiOiJvYmplY3QiLCJsZWZ0VmFsdWUiOiIiLCJvYmplY3QiOiIiLCJmaWVsZCI6IklkIiwiY29uZGl0aW9uIjoiZXF1YWxzIiwidmFsdWUiOiIiLCJicmFja2V0IjoiIiwicG9zdENvbmRpdGlvbiI6IiIsIm1ldGEiOm51bGwsInZhbHVlVHlwZSI6InN0YXRpYyIsInRydWVWYWx1ZSI6eyJ0eXBlIjoiZmllbGQiLCJ2YWx1ZSI6IiIsImZpZWxkIjp7fSwicmVmcyI6eyIwIjp7Im9iamVjdCI6bnVsbCwiZmllbGQiOnsia2V5IjpudWxsfSwicG9seW1vcnBoaWMiOmZhbHNlLCJyZWxhdGlvbnNoaXBOYW1lIjoiIiwidHlwZSI6IiJ9LCIxIjp7Im9iamVjdCI6bnVsbCwiZmllbGQiOnsia2V5IjpudWxsfSwicG9seW1vcnBoaWMiOmZhbHNlLCJyZWxhdGlvbnNoaXBOYW1lIjoiIiwidHlwZSI6IiJ9LCIyIjp7Im9iamVjdCI6bnVsbCwiZmllbGQiOnsia2V5IjpudWxsfSwicG9seW1vcnBoaWMiOmZhbHNlLCJyZWxhdGlvbnNoaXBOYW1lIjoiIiwidHlwZSI6IiJ9fX0sImZhbHNlVmFsdWUiOnsidHlwZSI6Im90aGVyIiwidmFsdWUiOiIiLCJmaWVsZCI6e30sInJlZnMiOnsiMCI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifSwiMSI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifSwiMiI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifX19fV1dLCJjZWxsQ29uZGl0aW9ucyI6W1t7ImxlZnRUeXBlIjoib2JqZWN0IiwibGVmdFZhbHVlIjoiIiwib2JqZWN0IjoiIiwiZmllbGQiOiJJZCIsImNvbmRpdGlvbiI6ImVxdWFscyIsInZhbHVlIjoiIiwiYnJhY2tldCI6IiIsInBvc3RDb25kaXRpb24iOiIiLCJtZXRhIjpudWxsLCJ2YWx1ZVR5cGUiOiJzdGF0aWMiLCJ0cnVlVmFsdWUiOnsidHlwZSI6ImZpZWxkIiwidmFsdWUiOiIiLCJmaWVsZCI6e30sInJlZnMiOnsiMCI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifSwiMSI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifSwiMiI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifX19LCJmYWxzZVZhbHVlIjp7InR5cGUiOiJvdGhlciIsInZhbHVlIjoiIiwiZmllbGQiOnt9LCJyZWZzIjp7IjAiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn0sIjEiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn0sIjIiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn19fX1dLFt7ImxlZnRUeXBlIjoib2JqZWN0IiwibGVmdFZhbHVlIjoiIiwib2JqZWN0IjoiIiwiZmllbGQiOiJJZCIsImNvbmRpdGlvbiI6ImVxdWFscyIsInZhbHVlIjoiIiwiYnJhY2tldCI6IiIsInBvc3RDb25kaXRpb24iOiIiLCJtZXRhIjpudWxsLCJ2YWx1ZVR5cGUiOiJzdGF0aWMiLCJ0cnVlVmFsdWUiOnsidHlwZSI6ImZpZWxkIiwidmFsdWUiOiIiLCJmaWVsZCI6e30sInJlZnMiOnsiMCI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifSwiMSI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifSwiMiI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifX19LCJmYWxzZVZhbHVlIjp7InR5cGUiOiJvdGhlciIsInZhbHVlIjoiIiwiZmllbGQiOnt9LCJyZWZzIjp7IjAiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn0sIjEiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn0sIjIiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn19fX1dLFt7ImxlZnRUeXBlIjoib2JqZWN0IiwibGVmdFZhbHVlIjoiIiwib2JqZWN0IjoiIiwiZmllbGQiOiJJZCIsImNvbmRpdGlvbiI6ImVxdWFscyIsInZhbHVlIjoiIiwiYnJhY2tldCI6IiIsInBvc3RDb25kaXRpb24iOiIiLCJtZXRhIjpudWxsLCJ2YWx1ZVR5cGUiOiJzdGF0aWMiLCJ0cnVlVmFsdWUiOnsidHlwZSI6ImZpZWxkIiwidmFsdWUiOiIiLCJmaWVsZCI6e30sInJlZnMiOnsiMCI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifSwiMSI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifSwiMiI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifX19LCJmYWxzZVZhbHVlIjp7InR5cGUiOiJvdGhlciIsInZhbHVlIjoiIiwiZmllbGQiOnt9LCJyZWZzIjp7IjAiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn0sIjEiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn0sIjIiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn19fX1dXSwibmVlZFJlbW92ZVN1bW1hcnkiOmZhbHNlLCJjYW5SZW1vdmVTdW1tYXJ5IjpmYWxzZSwiY2FuSW5zZXJ0U3VtbWFyeSI6dHJ1ZSwibmVlZEluc2VydFN1bW1hcnkiOmZhbHNlLCJkYXRhUm93SW5kZXgiOjIsImhlYWRlclJvd0luZGV4IjoxLCJzdW1tYXJ5Um93SW5kZXgiOjMsInNwbGl0QnkiOnt9LCJpc1NwbGl0QnkiOmZhbHNlLCJpc1NwbGl0VGFibGVIZWFkZXIiOmZhbHNlLCJpc1NwbGl0VGFibGVIZWFkZXJIVE1MIjpmYWxzZSwiaXNTcGxpdFRhYmxlRm9vdGVyIjpmYWxzZSwiZm9vdGVyRmllbGQiOm51bGwsImRpc2FibGVIZWFkZXJSb3dzIjpmYWxzZSwiaGlkZUVtcHR5VGFibGUiOmZhbHNlLCJjbGFzc05hbWUiOiIiLCJzZWxlY3RlZFNBUCI6bnVsbCwic2FwT2JqZWN0IjpudWxsLCJzYXBUaXRhbk1ldGhvZCI6IiIsImNvbW1lbnQiOiJsb2FkIGMzICIsInVpZCI6Ik9iamVjdDMyMGU4NDQ3MDI0MDRjMTRhZTkwMjZmYzU1YzM4YjMzIiwic2VjdGlvblVJRCI6Ik9iamVjdGQwYjE2M2JmMTFiMTQyZGQ4NDBlMTczY2FjYjU5ZjVlIiwidHdvQ29sTW9kZSI6dHJ1ZSwidHdvU2lkZUZpZWxkIjp7InZhbHVlIjp7ImtleSI6Ik5hbWUiLCJ0ZXh0IjoiRnVsbCBOYW1lIiwic29hcFR5cGUiOiJ4c2Q6c3RyaW5nIiwidHlwZSI6InN0cmluZyIsInBpY2tsaXN0VmFsdWVzIjpbXSwicmVmZXJlbmNlVGFyZ2V0RmllbGQiOm51bGwsInJlZmVyZW5jZVRvIjpbXSwibWFzayI6bnVsbCwibWFza1R5cGUiOm51bGwsInJlbGF0aW9uc2hpcE5hbWUiOm51bGwsImN1c3RvbSI6ZmFsc2V9LCJyZWZzIjp7IjAiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn0sIjEiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn0sIjIiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn19fX0=",
						"color": "#008000FF",
						"title": "SF:Table",
						"appearance": "Hidden",
						"type": "RichText",
						"hasPlaceHolderText": false,
						"multiline": false,
						"isTemporary": false,
						"characterFormat": {},
						"contentControlListItems": []
					}
				},
				{
					"paragraphFormat": {
						"borders": {
							"top": {},
							"left": {},
							"right": {},
							"bottom": {},
							"horizontal": {},
							"vertical": {}
						},
						"styleName": "Normal",
						"listFormat": {}
					},
					"characterFormat": {},
					"inlines": []
				},
				{
					"paragraphFormat": {
						"borders": {
							"top": {},
							"left": {},
							"right": {},
							"bottom": {},
							"horizontal": {},
							"vertical": {}
						},
						"styleName": "Normal",
						"listFormat": {}
					},
					"characterFormat": {},
					"inlines": [
						{
							"characterFormat": {},
							"text": "Table 2:"
						}
					]
				},
				{
					"blocks": [
						{
							"rows": [
								{
									"cells": [
										{
											"blocks": [
												{
													"paragraphFormat": {
														"borders": {
															"top": {},
															"left": {},
															"right": {},
															"bottom": {},
															"horizontal": {},
															"vertical": {}
														},
														"styleName": "Normal",
														"listFormat": {}
													},
													"characterFormat": {},
													"inlines": [
														{
															"characterFormat": {},
															"text": "cur"
														}
													]
												}
											],
											"cellFormat": {
												"borders": {
													"top": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"left": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"right": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"bottom": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"diagonalDown": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"diagonalUp": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"horizontal": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"vertical": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													}
												},
												"shading": {},
												"preferredWidthType": "Auto",
												"cellWidth": 67.37087,
												"columnSpan": 1,
												"rowSpan": 1,
												"verticalAlignment": "Top"
											},
											"columnIndex": 0
										},
										{
											"blocks": [
												{
													"paragraphFormat": {
														"borders": {
															"top": {},
															"left": {},
															"right": {},
															"bottom": {},
															"horizontal": {},
															"vertical": {}
														},
														"styleName": "Normal",
														"listFormat": {}
													},
													"characterFormat": {},
													"inlines": [
														{
															"characterFormat": {},
															"text": "name"
														}
													]
												}
											],
											"cellFormat": {
												"borders": {
													"top": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"left": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"right": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"bottom": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"diagonalDown": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"diagonalUp": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"horizontal": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"vertical": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													}
												},
												"shading": {},
												"preferredWidthType": "Auto",
												"cellWidth": 112.693,
												"columnSpan": 1,
												"rowSpan": 1,
												"verticalAlignment": "Top"
											},
											"columnIndex": 1
										},
										{
											"blocks": [
												{
													"paragraphFormat": {
														"borders": {
															"top": {},
															"left": {},
															"right": {},
															"bottom": {},
															"horizontal": {},
															"vertical": {}
														},
														"styleName": "Normal",
														"listFormat": {}
													},
													"characterFormat": {},
													"inlines": [
														{
															"characterFormat": {},
															"text": "number"
														}
													]
												}
											],
											"cellFormat": {
												"borders": {
													"top": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"left": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"right": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"bottom": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"diagonalDown": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"diagonalUp": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"horizontal": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"vertical": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													}
												},
												"shading": {},
												"preferredWidthType": "Auto",
												"cellWidth": 47.21697999999999,
												"columnSpan": 1,
												"rowSpan": 1,
												"verticalAlignment": "Top"
											},
											"columnIndex": 2
										}
									],
									"rowFormat": {
										"height": 1,
										"allowBreakAcrossPages": true,
										"heightType": "AtLeast",
										"isHeader": true,
										"borders": {
											"top": {
												"hasNoneStyle": false,
												"lineStyle": "None",
												"lineWidth": 0,
												"shadow": false,
												"space": 0
											},
											"left": {
												"hasNoneStyle": false,
												"lineStyle": "None",
												"lineWidth": 0,
												"shadow": false,
												"space": 0
											},
											"right": {
												"hasNoneStyle": false,
												"lineStyle": "None",
												"lineWidth": 0,
												"shadow": false,
												"space": 0
											},
											"bottom": {
												"hasNoneStyle": false,
												"lineStyle": "None",
												"lineWidth": 0,
												"shadow": false,
												"space": 0
											},
											"diagonalDown": {
												"hasNoneStyle": false,
												"lineStyle": "None",
												"lineWidth": 0,
												"shadow": false,
												"space": 0
											},
											"diagonalUp": {
												"hasNoneStyle": false,
												"lineStyle": "None",
												"lineWidth": 0,
												"shadow": false,
												"space": 0
											},
											"horizontal": {
												"hasNoneStyle": false,
												"lineStyle": "None",
												"lineWidth": 0,
												"shadow": false,
												"space": 0
											},
											"vertical": {
												"hasNoneStyle": false,
												"lineStyle": "None",
												"lineWidth": 0,
												"shadow": false,
												"space": 0
											}
										},
										"gridBefore": 0,
										"gridAfter": 0
									}
								},
								{
									"cells": [
										{
											"blocks": [
												{
													"blocks": [
														{
															"paragraphFormat": {
																"borders": {
																	"top": {},
																	"left": {},
																	"right": {},
																	"bottom": {},
																	"horizontal": {},
																	"vertical": {}
																},
																"textAlignment": "Justify",
																"lineSpacing": 1.5,
																"lineSpacingType": "Multiple",
																"styleName": "Normal",
																"listFormat": {}
															},
															"characterFormat": {},
															"inlines": [
																{
																	"characterFormat": {},
																	"text": "U.S. "
																},
																{
																	"characterFormat": {},
																	"text": "DOLLAR"
																}
															]
														}
													],
													"contentControlProperties": {
														"lockContentControl": false,
														"lockContents": false,
														"tag": "eyJ0eXBlIjoic2FsZXNmb3JjZSIsInZhbHVlIjp7InJlcG9ydCI6bnVsbCwic291cmNlVHlwZSI6Im9iamVjdCIsInVpZCI6Ik9iamVjdGFiMWEzOGI5NzlmNzQ2MzU4ZjAxNDRkMmZmMjA0OWMwIiwib2JqZWN0IjoiQWNjb3VudCIsImNvbW1lbnQiOiJsb2FkIGFjYzEiLCJpc0Zvcm11bGEiOmZhbHNlLCJmaWVsZCI6IkN1cnJlbmN5SXNvQ29kZSIsImZpZWxkVHlwZSI6InBpY2tsaXN0Iiwic29hcFR5cGUiOiJ4c2Q6c3RyaW5nIiwiZm9ybWF0IjoidXBwZXJjYXNlIiwiY3VzdG9tRm9ybWF0Ijp7fSwiaW5TZWN0aW9uIjpmYWxzZSwicmVmcyI6eyIwIjp7Im9iamVjdCI6bnVsbCwiZmllbGQiOnsia2V5IjpudWxsfSwicG9seW1vcnBoaWMiOmZhbHNlLCJyZWxhdGlvbnNoaXBOYW1lIjoiIiwidHlwZSI6IiJ9LCIxIjp7Im9iamVjdCI6bnVsbCwiZmllbGQiOnsia2V5IjpudWxsfSwicG9seW1vcnBoaWMiOmZhbHNlLCJyZWxhdGlvbnNoaXBOYW1lIjoiIiwidHlwZSI6IiJ9LCIyIjp7Im9iamVjdCI6bnVsbCwiZmllbGQiOnsia2V5IjpudWxsfSwicG9seW1vcnBoaWMiOmZhbHNlLCJyZWxhdGlvbnNoaXBOYW1lIjoiIiwidHlwZSI6IiJ9fSwiY29sQ29uZGl0aW9uIjpbeyJsZWZ0VHlwZSI6Im9iamVjdCIsImxlZnRWYWx1ZSI6IiIsIm9iamVjdCI6IiIsImZpZWxkIjoiSWQiLCJjb25kaXRpb24iOiJlcXVhbHMiLCJ2YWx1ZSI6IiIsImJyYWNrZXQiOiIiLCJwb3N0Q29uZGl0aW9uIjoiIiwibWV0YSI6bnVsbCwidmFsdWVUeXBlIjoic3RhdGljIiwidHJ1ZVZhbHVlIjp7InR5cGUiOiJmaWVsZCIsInZhbHVlIjoiIiwiZmllbGQiOnt9LCJyZWZzIjp7IjAiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn0sIjEiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn0sIjIiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn19fSwiZmFsc2VWYWx1ZSI6eyJ0eXBlIjoib3RoZXIiLCJ2YWx1ZSI6IiIsImZpZWxkIjp7fSwicmVmcyI6eyIwIjp7Im9iamVjdCI6bnVsbCwiZmllbGQiOnsia2V5IjpudWxsfSwicG9seW1vcnBoaWMiOmZhbHNlLCJyZWxhdGlvbnNoaXBOYW1lIjoiIiwidHlwZSI6IiJ9LCIxIjp7Im9iamVjdCI6bnVsbCwiZmllbGQiOnsia2V5IjpudWxsfSwicG9seW1vcnBoaWMiOmZhbHNlLCJyZWxhdGlvbnNoaXBOYW1lIjoiIiwidHlwZSI6IiJ9LCIyIjp7Im9iamVjdCI6bnVsbCwiZmllbGQiOnsia2V5IjpudWxsfSwicG9seW1vcnBoaWMiOmZhbHNlLCJyZWxhdGlvbnNoaXBOYW1lIjoiIiwidHlwZSI6IiJ9fX19XSwiY2VsbENvbmRpdGlvbiI6W3sibGVmdFR5cGUiOiJvYmplY3QiLCJsZWZ0VmFsdWUiOiIiLCJvYmplY3QiOiIiLCJmaWVsZCI6IklkIiwiY29uZGl0aW9uIjoiZXF1YWxzIiwidmFsdWUiOiIiLCJicmFja2V0IjoiIiwicG9zdENvbmRpdGlvbiI6IiIsIm1ldGEiOm51bGwsInZhbHVlVHlwZSI6InN0YXRpYyIsInRydWVWYWx1ZSI6eyJ0eXBlIjoiZmllbGQiLCJ2YWx1ZSI6IiIsImZpZWxkIjp7fSwicmVmcyI6eyIwIjp7Im9iamVjdCI6bnVsbCwiZmllbGQiOnsia2V5IjpudWxsfSwicG9seW1vcnBoaWMiOmZhbHNlLCJyZWxhdGlvbnNoaXBOYW1lIjoiIiwidHlwZSI6IiJ9LCIxIjp7Im9iamVjdCI6bnVsbCwiZmllbGQiOnsia2V5IjpudWxsfSwicG9seW1vcnBoaWMiOmZhbHNlLCJyZWxhdGlvbnNoaXBOYW1lIjoiIiwidHlwZSI6IiJ9LCIyIjp7Im9iamVjdCI6bnVsbCwiZmllbGQiOnsia2V5IjpudWxsfSwicG9seW1vcnBoaWMiOmZhbHNlLCJyZWxhdGlvbnNoaXBOYW1lIjoiIiwidHlwZSI6IiJ9fX0sImZhbHNlVmFsdWUiOnsidHlwZSI6Im90aGVyIiwidmFsdWUiOiIiLCJmaWVsZCI6e30sInJlZnMiOnsiMCI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifSwiMSI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifSwiMiI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifX19fV0sInJvd1VJRCI6IkZpZWxkYjcyYzUyYjcyYjYyNGQ0YmJhNGFhYWNmODM2MzllNTAiLCJ0cnVlVmFsdWUiOnsidHlwZSI6ImZpZWxkIiwidmFsdWUiOiIifSwiZmFsc2VWYWx1ZSI6eyJ0eXBlIjoib3RoZXIiLCJ2YWx1ZSI6IiJ9LCJjbGFzc05hbWUiOiIifSwiaXNBcnJheSI6dHJ1ZSwicm93RmllbGRzIjozLCJjZWxsSW5kZXgiOjAsImltYWdlIjp7fX0=",
														"color": "#008000FF",
														"title": "SF:R",
														"appearance": "Hidden",
														"type": "RichText",
														"hasPlaceHolderText": false,
														"multiline": false,
														"isTemporary": false,
														"characterFormat": {},
														"contentControlListItems": []
													}
												}
											],
											"cellFormat": {
												"borders": {
													"top": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"left": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"right": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"bottom": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"diagonalDown": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"diagonalUp": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"horizontal": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"vertical": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													}
												},
												"shading": {},
												"preferredWidthType": "Auto",
												"cellWidth": 67.37087,
												"columnSpan": 1,
												"rowSpan": 1,
												"verticalAlignment": "Top"
											},
											"columnIndex": 0
										},
										{
											"blocks": [
												{
													"blocks": [
														{
															"paragraphFormat": {
																"borders": {
																	"top": {},
																	"left": {},
																	"right": {},
																	"bottom": {},
																	"horizontal": {},
																	"vertical": {}
																},
																"textAlignment": "Justify",
																"lineSpacing": 1.5,
																"lineSpacingType": "Multiple",
																"styleName": "Normal",
																"listFormat": {}
															},
															"characterFormat": {},
															"inlines": [
																{
																	"characterFormat": {},
																	"text": "MOCK "
																},
																{
																	"characterFormat": {},
																	"text": "DATA "
																},
																{
																	"characterFormat": {},
																	"text": "ACCOUNT"
																}
															]
														}
													],
													"contentControlProperties": {
														"lockContentControl": false,
														"lockContents": false,
														"tag": "eyJ0eXBlIjoic2FsZXNmb3JjZSIsInZhbHVlIjp7InJlcG9ydCI6bnVsbCwic291cmNlVHlwZSI6Im9iamVjdCIsInVpZCI6Ik9iamVjdGFiMWEzOGI5NzlmNzQ2MzU4ZjAxNDRkMmZmMjA0OWMwIiwib2JqZWN0IjoiQWNjb3VudCIsImNvbW1lbnQiOiJsb2FkIGFjYzEiLCJpc0Zvcm11bGEiOmZhbHNlLCJmaWVsZCI6Ik5hbWUiLCJmaWVsZFR5cGUiOiJzdHJpbmciLCJzb2FwVHlwZSI6InhzZDpzdHJpbmciLCJmb3JtYXQiOm51bGwsImluU2VjdGlvbiI6ZmFsc2UsInJlZnMiOnsiMCI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifSwiMSI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifSwiMiI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifX0sImNvbENvbmRpdGlvbiI6W3sibGVmdFR5cGUiOiJvYmplY3QiLCJsZWZ0VmFsdWUiOiIiLCJvYmplY3QiOiIiLCJmaWVsZCI6IklkIiwiY29uZGl0aW9uIjoiZXF1YWxzIiwidmFsdWUiOiIiLCJicmFja2V0IjoiIiwicG9zdENvbmRpdGlvbiI6IiIsIm1ldGEiOm51bGwsInZhbHVlVHlwZSI6InN0YXRpYyIsInRydWVWYWx1ZSI6eyJ0eXBlIjoiZmllbGQiLCJ2YWx1ZSI6IiIsImZpZWxkIjp7fSwicmVmcyI6eyIwIjp7Im9iamVjdCI6bnVsbCwiZmllbGQiOnsia2V5IjpudWxsfSwicG9seW1vcnBoaWMiOmZhbHNlLCJyZWxhdGlvbnNoaXBOYW1lIjoiIiwidHlwZSI6IiJ9LCIxIjp7Im9iamVjdCI6bnVsbCwiZmllbGQiOnsia2V5IjpudWxsfSwicG9seW1vcnBoaWMiOmZhbHNlLCJyZWxhdGlvbnNoaXBOYW1lIjoiIiwidHlwZSI6IiJ9LCIyIjp7Im9iamVjdCI6bnVsbCwiZmllbGQiOnsia2V5IjpudWxsfSwicG9seW1vcnBoaWMiOmZhbHNlLCJyZWxhdGlvbnNoaXBOYW1lIjoiIiwidHlwZSI6IiJ9fX0sImZhbHNlVmFsdWUiOnsidHlwZSI6Im90aGVyIiwidmFsdWUiOiIiLCJmaWVsZCI6e30sInJlZnMiOnsiMCI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifSwiMSI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifSwiMiI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifX19fV0sImNlbGxDb25kaXRpb24iOlt7ImxlZnRUeXBlIjoib2JqZWN0IiwibGVmdFZhbHVlIjoiIiwib2JqZWN0IjoiIiwiZmllbGQiOiJJZCIsImNvbmRpdGlvbiI6ImVxdWFscyIsInZhbHVlIjoiIiwiYnJhY2tldCI6IiIsInBvc3RDb25kaXRpb24iOiIiLCJtZXRhIjpudWxsLCJ2YWx1ZVR5cGUiOiJzdGF0aWMiLCJ0cnVlVmFsdWUiOnsidHlwZSI6ImZpZWxkIiwidmFsdWUiOiIiLCJmaWVsZCI6e30sInJlZnMiOnsiMCI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifSwiMSI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifSwiMiI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifX19LCJmYWxzZVZhbHVlIjp7InR5cGUiOiJvdGhlciIsInZhbHVlIjoiIiwiZmllbGQiOnt9LCJyZWZzIjp7IjAiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn0sIjEiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn0sIjIiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn19fX1dLCJyb3dVSUQiOiJGaWVsZDM2OWVhMjIxOWE2MTRkNzM5NjZlNmUxMzZkZDNlNDM5IiwidHJ1ZVZhbHVlIjp7InR5cGUiOiJmaWVsZCIsInZhbHVlIjoiIn0sImZhbHNlVmFsdWUiOnsidHlwZSI6Im90aGVyIiwidmFsdWUiOiIifSwiY2xhc3NOYW1lIjoiIn0sImlzQXJyYXkiOnRydWUsInJvd0ZpZWxkcyI6MywiY2VsbEluZGV4IjoxLCJpbWFnZSI6e319",
														"color": "#008000FF",
														"title": "SF:R",
														"appearance": "Hidden",
														"type": "RichText",
														"hasPlaceHolderText": false,
														"multiline": false,
														"isTemporary": false,
														"characterFormat": {},
														"contentControlListItems": []
													}
												}
											],
											"cellFormat": {
												"borders": {
													"top": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"left": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"right": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"bottom": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"diagonalDown": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"diagonalUp": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"horizontal": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"vertical": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													}
												},
												"shading": {},
												"preferredWidthType": "Auto",
												"cellWidth": 112.693,
												"columnSpan": 1,
												"rowSpan": 1,
												"verticalAlignment": "Top"
											},
											"columnIndex": 1
										},
										{
											"blocks": [
												{
													"blocks": [
														{
															"paragraphFormat": {
																"borders": {
																	"top": {},
																	"left": {},
																	"right": {},
																	"bottom": {},
																	"horizontal": {},
																	"vertical": {}
																},
																"textAlignment": "Justify",
																"lineSpacing": 1.5,
																"lineSpacingType": "Multiple",
																"styleName": "Normal",
																"listFormat": {}
															},
															"characterFormat": {},
															"inlines": [
																{
																	"characterFormat": {},
																	"text": "41909"
																}
															]
														}
													],
													"contentControlProperties": {
														"lockContentControl": false,
														"lockContents": false,
														"tag": "eyJ0eXBlIjoic2FsZXNmb3JjZSIsInZhbHVlIjp7InJlcG9ydCI6bnVsbCwic291cmNlVHlwZSI6Im9iamVjdCIsInVpZCI6Ik9iamVjdGFiMWEzOGI5NzlmNzQ2MzU4ZjAxNDRkMmZmMjA0OWMwIiwib2JqZWN0IjoiQWNjb3VudCIsImNvbW1lbnQiOiJsb2FkIGFjYzEiLCJpc0Zvcm11bGEiOmZhbHNlLCJmaWVsZCI6IkFjY291bnROdW1iZXIiLCJmaWVsZFR5cGUiOiJzdHJpbmciLCJzb2FwVHlwZSI6InhzZDpzdHJpbmciLCJmb3JtYXQiOm51bGwsImluU2VjdGlvbiI6ZmFsc2UsInJlZnMiOnsiMCI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifSwiMSI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifSwiMiI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifX0sImNvbENvbmRpdGlvbiI6W3sibGVmdFR5cGUiOiJvYmplY3QiLCJsZWZ0VmFsdWUiOiIiLCJvYmplY3QiOiIiLCJmaWVsZCI6IklkIiwiY29uZGl0aW9uIjoiZXF1YWxzIiwidmFsdWUiOiIiLCJicmFja2V0IjoiIiwicG9zdENvbmRpdGlvbiI6IiIsIm1ldGEiOm51bGwsInZhbHVlVHlwZSI6InN0YXRpYyIsInRydWVWYWx1ZSI6eyJ0eXBlIjoiZmllbGQiLCJ2YWx1ZSI6IiIsImZpZWxkIjp7fSwicmVmcyI6eyIwIjp7Im9iamVjdCI6bnVsbCwiZmllbGQiOnsia2V5IjpudWxsfSwicG9seW1vcnBoaWMiOmZhbHNlLCJyZWxhdGlvbnNoaXBOYW1lIjoiIiwidHlwZSI6IiJ9LCIxIjp7Im9iamVjdCI6bnVsbCwiZmllbGQiOnsia2V5IjpudWxsfSwicG9seW1vcnBoaWMiOmZhbHNlLCJyZWxhdGlvbnNoaXBOYW1lIjoiIiwidHlwZSI6IiJ9LCIyIjp7Im9iamVjdCI6bnVsbCwiZmllbGQiOnsia2V5IjpudWxsfSwicG9seW1vcnBoaWMiOmZhbHNlLCJyZWxhdGlvbnNoaXBOYW1lIjoiIiwidHlwZSI6IiJ9fX0sImZhbHNlVmFsdWUiOnsidHlwZSI6Im90aGVyIiwidmFsdWUiOiIiLCJmaWVsZCI6e30sInJlZnMiOnsiMCI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifSwiMSI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifSwiMiI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifX19fV0sImNlbGxDb25kaXRpb24iOlt7ImxlZnRUeXBlIjoib2JqZWN0IiwibGVmdFZhbHVlIjoiIiwib2JqZWN0IjoiIiwiZmllbGQiOiJJZCIsImNvbmRpdGlvbiI6ImVxdWFscyIsInZhbHVlIjoiIiwiYnJhY2tldCI6IiIsInBvc3RDb25kaXRpb24iOiIiLCJtZXRhIjpudWxsLCJ2YWx1ZVR5cGUiOiJzdGF0aWMiLCJ0cnVlVmFsdWUiOnsidHlwZSI6ImZpZWxkIiwidmFsdWUiOiIiLCJmaWVsZCI6e30sInJlZnMiOnsiMCI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifSwiMSI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifSwiMiI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifX19LCJmYWxzZVZhbHVlIjp7InR5cGUiOiJvdGhlciIsInZhbHVlIjoiIiwiZmllbGQiOnt9LCJyZWZzIjp7IjAiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn0sIjEiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn0sIjIiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn19fX1dLCJyb3dVSUQiOiJGaWVsZDlhMjZhODJmMDQyODQyMTdiNDFmNzBlZWRmZDUwNjc0IiwidHJ1ZVZhbHVlIjp7InR5cGUiOiJmaWVsZCIsInZhbHVlIjoiIn0sImZhbHNlVmFsdWUiOnsidHlwZSI6Im90aGVyIiwidmFsdWUiOiIifSwiY2xhc3NOYW1lIjoiIn0sImlzQXJyYXkiOnRydWUsInJvd0ZpZWxkcyI6MywiY2VsbEluZGV4IjoyLCJpbWFnZSI6e319",
														"color": "#008000FF",
														"title": "SF:R",
														"appearance": "Hidden",
														"type": "RichText",
														"hasPlaceHolderText": false,
														"multiline": false,
														"isTemporary": false,
														"characterFormat": {},
														"contentControlListItems": []
													}
												}
											],
											"cellFormat": {
												"borders": {
													"top": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"left": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"right": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"bottom": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"diagonalDown": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"diagonalUp": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"horizontal": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													},
													"vertical": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0,
														"shadow": false,
														"space": 0
													}
												},
												"shading": {},
												"preferredWidthType": "Auto",
												"cellWidth": 47.21697999999999,
												"columnSpan": 1,
												"rowSpan": 1,
												"verticalAlignment": "Top"
											},
											"columnIndex": 2
										}
									],
									"rowFormat": {
										"height": 1,
										"allowBreakAcrossPages": true,
										"heightType": "AtLeast",
										"isHeader": false,
										"borders": {
											"top": {
												"hasNoneStyle": false,
												"lineStyle": "None",
												"lineWidth": 0,
												"shadow": false,
												"space": 0
											},
											"left": {
												"hasNoneStyle": false,
												"lineStyle": "None",
												"lineWidth": 0,
												"shadow": false,
												"space": 0
											},
											"right": {
												"hasNoneStyle": false,
												"lineStyle": "None",
												"lineWidth": 0,
												"shadow": false,
												"space": 0
											},
											"bottom": {
												"hasNoneStyle": false,
												"lineStyle": "None",
												"lineWidth": 0,
												"shadow": false,
												"space": 0
											},
											"diagonalDown": {
												"hasNoneStyle": false,
												"lineStyle": "None",
												"lineWidth": 0,
												"shadow": false,
												"space": 0
											},
											"diagonalUp": {
												"hasNoneStyle": false,
												"lineStyle": "None",
												"lineWidth": 0,
												"shadow": false,
												"space": 0
											},
											"horizontal": {
												"hasNoneStyle": false,
												"lineStyle": "None",
												"lineWidth": 0,
												"shadow": false,
												"space": 0
											},
											"vertical": {
												"hasNoneStyle": false,
												"lineStyle": "None",
												"lineWidth": 0,
												"shadow": false,
												"space": 0
											}
										},
										"gridBefore": 0,
										"gridAfter": 0
									}
								}
							],
							"grid": [
								67.37087,
								112.693,
								47.21697999999999
							],
							"tableFormat": {
								"borders": {
									"top": {
										"color": "#000000FF",
										"hasNoneStyle": false,
										"lineStyle": "Single",
										"lineWidth": 0.5,
										"shadow": false,
										"space": 0
									},
									"left": {
										"color": "#000000FF",
										"hasNoneStyle": false,
										"lineStyle": "Single",
										"lineWidth": 0.5,
										"shadow": false,
										"space": 0
									},
									"right": {
										"color": "#000000FF",
										"hasNoneStyle": false,
										"lineStyle": "Single",
										"lineWidth": 0.5,
										"shadow": false,
										"space": 0
									},
									"bottom": {
										"color": "#000000FF",
										"hasNoneStyle": false,
										"lineStyle": "Single",
										"lineWidth": 0.5,
										"shadow": false,
										"space": 0
									},
									"diagonalDown": {
										"hasNoneStyle": false,
										"lineStyle": "None",
										"lineWidth": 0,
										"shadow": false,
										"space": 0
									},
									"diagonalUp": {
										"hasNoneStyle": false,
										"lineStyle": "None",
										"lineWidth": 0,
										"shadow": false,
										"space": 0
									},
									"horizontal": {
										"color": "#000000FF",
										"hasNoneStyle": false,
										"lineStyle": "Single",
										"lineWidth": 0.5,
										"shadow": false,
										"space": 0
									},
									"vertical": {
										"color": "#000000FF",
										"hasNoneStyle": false,
										"lineStyle": "Single",
										"lineWidth": 0.5,
										"shadow": false,
										"space": 0
									}
								},
								"shading": {},
								"leftIndent": 0,
								"tableAlignment": "Left",
								"topMargin": 0,
								"rightMargin": 5.4,
								"leftMargin": 5.4,
								"bottomMargin": 0,
								"preferredWidthType": "Auto",
								"bidi": false,
								"allowAutoFit": true
							},
							"description": null,
							"title": null,
							"columnCount": 3
						},
						{
							"paragraphFormat": {
								"borders": {
									"top": {},
									"left": {},
									"right": {},
									"bottom": {},
									"horizontal": {},
									"vertical": {}
								},
								"styleName": "Normal",
								"listFormat": {}
							},
							"characterFormat": {},
							"inlines": []
						}
					],
					"contentControlProperties": {
						"lockContentControl": false,
						"lockContents": false,
						"tag": "eyJhY3Rpb24iOiJpbnNlcnRUYWJsZSIsIm9wZXJhdGlvbiI6InVwZGF0ZSIsInJlcG9ydCI6bnVsbCwic291cmNlVHlwZSI6Im9iamVjdCIsInJvd3MiOltbeyJ0eXBlIjoic3RhdGljIiwidmFsdWUiOiJjdXIiLCJmaWVsZCI6e30sInVpZCI6IkZpZWxkOTBjYzFkODkwZTJmNGZjZGJjZWMxYjQzNzU2ODYyNWQifSx7InR5cGUiOiJzdGF0aWMiLCJ2YWx1ZSI6Im5hbWUiLCJmaWVsZCI6e30sInVpZCI6IkZpZWxkNmEwNjIxY2ZlN2I2NDMyZmE4Y2RkMWI4YzVmMDhjNDYifSx7InR5cGUiOiJzdGF0aWMiLCJ2YWx1ZSI6Im51bWJlciIsImZpZWxkIjp7fSwidWlkIjoiRmllbGRmZmFmYTQ0ZmQ4ZDY0ODM3OWJhMDlhNTdhM2EwMGI0ZiJ9XSxbeyJ1aWQiOiJGaWVsZGI3MmM1MmI3MmI2MjRkNGJiYTRhYWFjZjgzNjM5ZTUwIiwidHlwZSI6ImZpZWxkIiwidmFsdWUiOnsia2V5IjoiQ3VycmVuY3lJc29Db2RlIiwidGV4dCI6IkFjY291bnQgQ3VycmVuY3kiLCJzb2FwVHlwZSI6InhzZDpzdHJpbmciLCJ0eXBlIjoicGlja2xpc3QiLCJwaWNrbGlzdFZhbHVlcyI6W3siYWN0aXZlIjp0cnVlLCJkZWZhdWx0VmFsdWUiOmZhbHNlLCJsYWJlbCI6IkV1cm8iLCJ2YWxpZEZvciI6bnVsbCwidmFsdWUiOiJFVVIifSx7ImFjdGl2ZSI6dHJ1ZSwiZGVmYXVsdFZhbHVlIjpmYWxzZSwibGFiZWwiOiJJc3JhZWxpIFNoZWtlbCIsInZhbGlkRm9yIjpudWxsLCJ2YWx1ZSI6IklMUyJ9LHsiYWN0aXZlIjp0cnVlLCJkZWZhdWx0VmFsdWUiOnRydWUsImxhYmVsIjoiVS5TLiBEb2xsYXIiLCJ2YWxpZEZvciI6bnVsbCwidmFsdWUiOiJVU0QifV0sInJlZmVyZW5jZVRhcmdldEZpZWxkIjpudWxsLCJyZWZlcmVuY2VUbyI6W10sIm1hc2siOm51bGwsIm1hc2tUeXBlIjpudWxsLCJyZWxhdGlvbnNoaXBOYW1lIjpudWxsLCJjdXN0b20iOmZhbHNlfSwiZm9ybWF0IjoidXBwZXJjYXNlIiwicmVmcyI6eyIwIjp7Im9iamVjdCI6bnVsbCwiZmllbGQiOnsia2V5IjpudWxsfSwicG9seW1vcnBoaWMiOmZhbHNlLCJyZWxhdGlvbnNoaXBOYW1lIjoiIiwidHlwZSI6IiJ9LCIxIjp7Im9iamVjdCI6bnVsbCwiZmllbGQiOnsia2V5IjpudWxsfSwicG9seW1vcnBoaWMiOmZhbHNlLCJyZWxhdGlvbnNoaXBOYW1lIjoiIiwidHlwZSI6IiJ9LCIyIjp7Im9iamVjdCI6bnVsbCwiZmllbGQiOnsia2V5IjpudWxsfSwicG9seW1vcnBoaWMiOmZhbHNlLCJyZWxhdGlvbnNoaXBOYW1lIjoiIiwidHlwZSI6IiJ9fSwidHJ1ZVZhbHVlIjp7InR5cGUiOiJmaWVsZCIsInZhbHVlIjoiIn0sImZhbHNlVmFsdWUiOnsidHlwZSI6Im90aGVyIiwidmFsdWUiOiIifSwibXVsdGlDZWxsQ29uZCI6W10sImNvbmRpdGlvbmFsRGF0YSI6W10sImN1c3RvbUZvcm1hdCI6e319LHsidWlkIjoiRmllbGQzNjllYTIyMTlhNjE0ZDczOTY2ZTZlMTM2ZGQzZTQzOSIsInR5cGUiOiJmaWVsZCIsInZhbHVlIjp7ImtleSI6Ik5hbWUiLCJ0ZXh0IjoiQWNjb3VudCBOYW1lIiwic29hcFR5cGUiOiJ4c2Q6c3RyaW5nIiwidHlwZSI6InN0cmluZyIsInBpY2tsaXN0VmFsdWVzIjpbXSwicmVmZXJlbmNlVGFyZ2V0RmllbGQiOm51bGwsInJlZmVyZW5jZVRvIjpbXSwibWFzayI6bnVsbCwibWFza1R5cGUiOm51bGwsInJlbGF0aW9uc2hpcE5hbWUiOm51bGwsImN1c3RvbSI6ZmFsc2V9LCJmb3JtYXQiOm51bGwsInJlZnMiOnsiMCI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifSwiMSI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifSwiMiI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifX0sInRydWVWYWx1ZSI6eyJ0eXBlIjoiZmllbGQiLCJ2YWx1ZSI6IiJ9LCJmYWxzZVZhbHVlIjp7InR5cGUiOiJvdGhlciIsInZhbHVlIjoiIn0sIm11bHRpQ2VsbENvbmQiOltdLCJjb25kaXRpb25hbERhdGEiOltdfSx7InVpZCI6IkZpZWxkOWEyNmE4MmYwNDI4NDIxN2I0MWY3MGVlZGZkNTA2NzQiLCJ0eXBlIjoiZmllbGQiLCJ2YWx1ZSI6eyJrZXkiOiJBY2NvdW50TnVtYmVyIiwidGV4dCI6IkFjY291bnQgTnVtYmVyIiwic29hcFR5cGUiOiJ4c2Q6c3RyaW5nIiwidHlwZSI6InN0cmluZyIsInBpY2tsaXN0VmFsdWVzIjpbXSwicmVmZXJlbmNlVGFyZ2V0RmllbGQiOm51bGwsInJlZmVyZW5jZVRvIjpbXSwibWFzayI6bnVsbCwibWFza1R5cGUiOm51bGwsInJlbGF0aW9uc2hpcE5hbWUiOm51bGwsImN1c3RvbSI6ZmFsc2V9LCJmb3JtYXQiOm51bGwsInJlZnMiOnsiMCI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifSwiMSI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifSwiMiI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifX0sInRydWVWYWx1ZSI6eyJ0eXBlIjoiZmllbGQiLCJ2YWx1ZSI6IiJ9LCJmYWxzZVZhbHVlIjp7InR5cGUiOiJvdGhlciIsInZhbHVlIjoiIn0sIm11bHRpQ2VsbENvbmQiOltdLCJjb25kaXRpb25hbERhdGEiOltdfV1dLCJvYmplY3QiOnsia2V5IjoiQWNjb3VudCIsInRleHQiOiJBY2NvdW50IC0gbG9hZCBhY2MxIiwidWlkIjoiT2JqZWN0YWIxYTM4Yjk3OWY3NDYzNThmMDE0NGQyZmYyMDQ5YzAiLCJvYmplY3RLZXkiOiJBY2NvdW50IiwiY29tbWVudCI6ImxvYWQgYWNjMSJ9LCJpbWFnZSI6e30sInJlcGVhdEhlYWRlclJvd3MiOnRydWUsImlzRGlzdGluY3QiOmZhbHNlLCJkaXN0aW5jdEJ5Ijp7fSwiaGFzU3VtbWFyeVJvdyI6ZmFsc2UsInN1bW1hcnkiOltdLCJyb3dDb25kaXRpb25zIjpbeyJsZWZ0VHlwZSI6Im9iamVjdCIsImxlZnRWYWx1ZSI6IiIsIm9iamVjdCI6IiIsImZpZWxkIjoiSWQiLCJjb25kaXRpb24iOiJlcXVhbHMiLCJ2YWx1ZSI6IiIsImJyYWNrZXQiOiIiLCJwb3N0Q29uZGl0aW9uIjoiIiwibWV0YSI6bnVsbCwidmFsdWVUeXBlIjoic3RhdGljIiwidHJ1ZVZhbHVlIjp7InR5cGUiOiJmaWVsZCIsInZhbHVlIjoiIiwiZmllbGQiOnt9LCJyZWZzIjp7IjAiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn0sIjEiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn0sIjIiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn19fSwiZmFsc2VWYWx1ZSI6eyJ0eXBlIjoib3RoZXIiLCJ2YWx1ZSI6IiIsImZpZWxkIjp7fSwicmVmcyI6eyIwIjp7Im9iamVjdCI6bnVsbCwiZmllbGQiOnsia2V5IjpudWxsfSwicG9seW1vcnBoaWMiOmZhbHNlLCJyZWxhdGlvbnNoaXBOYW1lIjoiIiwidHlwZSI6IiJ9LCIxIjp7Im9iamVjdCI6bnVsbCwiZmllbGQiOnsia2V5IjpudWxsfSwicG9seW1vcnBoaWMiOmZhbHNlLCJyZWxhdGlvbnNoaXBOYW1lIjoiIiwidHlwZSI6IiJ9LCIyIjp7Im9iamVjdCI6bnVsbCwiZmllbGQiOnsia2V5IjpudWxsfSwicG9seW1vcnBoaWMiOmZhbHNlLCJyZWxhdGlvbnNoaXBOYW1lIjoiIiwidHlwZSI6IiJ9fX19XSwiY29sQ29uZGl0aW9ucyI6W1t7ImxlZnRUeXBlIjoib2JqZWN0IiwibGVmdFZhbHVlIjoiIiwib2JqZWN0IjoiIiwiZmllbGQiOiJJZCIsImNvbmRpdGlvbiI6ImVxdWFscyIsInZhbHVlIjoiIiwiYnJhY2tldCI6IiIsInBvc3RDb25kaXRpb24iOiIiLCJtZXRhIjpudWxsLCJ2YWx1ZVR5cGUiOiJzdGF0aWMiLCJ0cnVlVmFsdWUiOnsidHlwZSI6ImZpZWxkIiwidmFsdWUiOiIiLCJmaWVsZCI6e30sInJlZnMiOnsiMCI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifSwiMSI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifSwiMiI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifX19LCJmYWxzZVZhbHVlIjp7InR5cGUiOiJvdGhlciIsInZhbHVlIjoiIiwiZmllbGQiOnt9LCJyZWZzIjp7IjAiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn0sIjEiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn0sIjIiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn19fX1dLFt7ImxlZnRUeXBlIjoib2JqZWN0IiwibGVmdFZhbHVlIjoiIiwib2JqZWN0IjoiIiwiZmllbGQiOiJJZCIsImNvbmRpdGlvbiI6ImVxdWFscyIsInZhbHVlIjoiIiwiYnJhY2tldCI6IiIsInBvc3RDb25kaXRpb24iOiIiLCJtZXRhIjpudWxsLCJ2YWx1ZVR5cGUiOiJzdGF0aWMiLCJ0cnVlVmFsdWUiOnsidHlwZSI6ImZpZWxkIiwidmFsdWUiOiIiLCJmaWVsZCI6e30sInJlZnMiOnsiMCI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifSwiMSI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifSwiMiI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifX19LCJmYWxzZVZhbHVlIjp7InR5cGUiOiJvdGhlciIsInZhbHVlIjoiIiwiZmllbGQiOnt9LCJyZWZzIjp7IjAiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn0sIjEiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn0sIjIiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn19fX1dLFt7ImxlZnRUeXBlIjoib2JqZWN0IiwibGVmdFZhbHVlIjoiIiwib2JqZWN0IjoiIiwiZmllbGQiOiJJZCIsImNvbmRpdGlvbiI6ImVxdWFscyIsInZhbHVlIjoiIiwiYnJhY2tldCI6IiIsInBvc3RDb25kaXRpb24iOiIiLCJtZXRhIjpudWxsLCJ2YWx1ZVR5cGUiOiJzdGF0aWMiLCJ0cnVlVmFsdWUiOnsidHlwZSI6ImZpZWxkIiwidmFsdWUiOiIiLCJmaWVsZCI6e30sInJlZnMiOnsiMCI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifSwiMSI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifSwiMiI6eyJvYmplY3QiOm51bGwsImZpZWxkIjp7ImtleSI6bnVsbH0sInBvbHltb3JwaGljIjpmYWxzZSwicmVsYXRpb25zaGlwTmFtZSI6IiIsInR5cGUiOiIifX19LCJmYWxzZVZhbHVlIjp7InR5cGUiOiJvdGhlciIsInZhbHVlIjoiIiwiZmllbGQiOnt9LCJyZWZzIjp7IjAiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn0sIjEiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn0sIjIiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn19fX1dXSwiY2VsbENvbmRpdGlvbnMiOltbeyJsZWZ0VHlwZSI6Im9iamVjdCIsImxlZnRWYWx1ZSI6IiIsIm9iamVjdCI6IiIsImZpZWxkIjoiSWQiLCJjb25kaXRpb24iOiJlcXVhbHMiLCJ2YWx1ZSI6IiIsImJyYWNrZXQiOiIiLCJwb3N0Q29uZGl0aW9uIjoiIiwibWV0YSI6bnVsbCwidmFsdWVUeXBlIjoic3RhdGljIiwidHJ1ZVZhbHVlIjp7InR5cGUiOiJmaWVsZCIsInZhbHVlIjoiIiwiZmllbGQiOnt9LCJyZWZzIjp7IjAiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn0sIjEiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn0sIjIiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn19fSwiZmFsc2VWYWx1ZSI6eyJ0eXBlIjoib3RoZXIiLCJ2YWx1ZSI6IiIsImZpZWxkIjp7fSwicmVmcyI6eyIwIjp7Im9iamVjdCI6bnVsbCwiZmllbGQiOnsia2V5IjpudWxsfSwicG9seW1vcnBoaWMiOmZhbHNlLCJyZWxhdGlvbnNoaXBOYW1lIjoiIiwidHlwZSI6IiJ9LCIxIjp7Im9iamVjdCI6bnVsbCwiZmllbGQiOnsia2V5IjpudWxsfSwicG9seW1vcnBoaWMiOmZhbHNlLCJyZWxhdGlvbnNoaXBOYW1lIjoiIiwidHlwZSI6IiJ9LCIyIjp7Im9iamVjdCI6bnVsbCwiZmllbGQiOnsia2V5IjpudWxsfSwicG9seW1vcnBoaWMiOmZhbHNlLCJyZWxhdGlvbnNoaXBOYW1lIjoiIiwidHlwZSI6IiJ9fX19XSxbeyJsZWZ0VHlwZSI6Im9iamVjdCIsImxlZnRWYWx1ZSI6IiIsIm9iamVjdCI6IiIsImZpZWxkIjoiSWQiLCJjb25kaXRpb24iOiJlcXVhbHMiLCJ2YWx1ZSI6IiIsImJyYWNrZXQiOiIiLCJwb3N0Q29uZGl0aW9uIjoiIiwibWV0YSI6bnVsbCwidmFsdWVUeXBlIjoic3RhdGljIiwidHJ1ZVZhbHVlIjp7InR5cGUiOiJmaWVsZCIsInZhbHVlIjoiIiwiZmllbGQiOnt9LCJyZWZzIjp7IjAiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn0sIjEiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn0sIjIiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn19fSwiZmFsc2VWYWx1ZSI6eyJ0eXBlIjoib3RoZXIiLCJ2YWx1ZSI6IiIsImZpZWxkIjp7fSwicmVmcyI6eyIwIjp7Im9iamVjdCI6bnVsbCwiZmllbGQiOnsia2V5IjpudWxsfSwicG9seW1vcnBoaWMiOmZhbHNlLCJyZWxhdGlvbnNoaXBOYW1lIjoiIiwidHlwZSI6IiJ9LCIxIjp7Im9iamVjdCI6bnVsbCwiZmllbGQiOnsia2V5IjpudWxsfSwicG9seW1vcnBoaWMiOmZhbHNlLCJyZWxhdGlvbnNoaXBOYW1lIjoiIiwidHlwZSI6IiJ9LCIyIjp7Im9iamVjdCI6bnVsbCwiZmllbGQiOnsia2V5IjpudWxsfSwicG9seW1vcnBoaWMiOmZhbHNlLCJyZWxhdGlvbnNoaXBOYW1lIjoiIiwidHlwZSI6IiJ9fX19XSxbeyJsZWZ0VHlwZSI6Im9iamVjdCIsImxlZnRWYWx1ZSI6IiIsIm9iamVjdCI6IiIsImZpZWxkIjoiSWQiLCJjb25kaXRpb24iOiJlcXVhbHMiLCJ2YWx1ZSI6IiIsImJyYWNrZXQiOiIiLCJwb3N0Q29uZGl0aW9uIjoiIiwibWV0YSI6bnVsbCwidmFsdWVUeXBlIjoic3RhdGljIiwidHJ1ZVZhbHVlIjp7InR5cGUiOiJmaWVsZCIsInZhbHVlIjoiIiwiZmllbGQiOnt9LCJyZWZzIjp7IjAiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn0sIjEiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn0sIjIiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn19fSwiZmFsc2VWYWx1ZSI6eyJ0eXBlIjoib3RoZXIiLCJ2YWx1ZSI6IiIsImZpZWxkIjp7fSwicmVmcyI6eyIwIjp7Im9iamVjdCI6bnVsbCwiZmllbGQiOnsia2V5IjpudWxsfSwicG9seW1vcnBoaWMiOmZhbHNlLCJyZWxhdGlvbnNoaXBOYW1lIjoiIiwidHlwZSI6IiJ9LCIxIjp7Im9iamVjdCI6bnVsbCwiZmllbGQiOnsia2V5IjpudWxsfSwicG9seW1vcnBoaWMiOmZhbHNlLCJyZWxhdGlvbnNoaXBOYW1lIjoiIiwidHlwZSI6IiJ9LCIyIjp7Im9iamVjdCI6bnVsbCwiZmllbGQiOnsia2V5IjpudWxsfSwicG9seW1vcnBoaWMiOmZhbHNlLCJyZWxhdGlvbnNoaXBOYW1lIjoiIiwidHlwZSI6IiJ9fX19XV0sIm5lZWRSZW1vdmVTdW1tYXJ5IjpmYWxzZSwiY2FuUmVtb3ZlU3VtbWFyeSI6ZmFsc2UsImNhbkluc2VydFN1bW1hcnkiOnRydWUsIm5lZWRJbnNlcnRTdW1tYXJ5IjpmYWxzZSwiZGF0YVJvd0luZGV4IjoyLCJoZWFkZXJSb3dJbmRleCI6MSwic3VtbWFyeVJvd0luZGV4IjozLCJzcGxpdEJ5Ijp7fSwiaXNTcGxpdEJ5IjpmYWxzZSwiaXNTcGxpdFRhYmxlSGVhZGVyIjpmYWxzZSwiaXNTcGxpdFRhYmxlSGVhZGVySFRNTCI6ZmFsc2UsImlzU3BsaXRUYWJsZUZvb3RlciI6ZmFsc2UsImZvb3RlckZpZWxkIjpudWxsLCJkaXNhYmxlSGVhZGVyUm93cyI6ZmFsc2UsImhpZGVFbXB0eVRhYmxlIjpmYWxzZSwiY2xhc3NOYW1lIjoiIiwic2VsZWN0ZWRTQVAiOm51bGwsInNhcE9iamVjdCI6bnVsbCwic2FwVGl0YW5NZXRob2QiOiIiLCJjb21tZW50IjoibG9hZCBhY2MxIiwidWlkIjoiT2JqZWN0MDU1ZDZkZGQ3YjUxNDdmYzg3ZDk2ZmFhNjZkMzQzZGUiLCJzZWN0aW9uVUlEIjoiT2JqZWN0MTQzYzBiNDhmYWZmNDA3MzlmNTY3ZTRkZmY0MmRmMjMiLCJ0d29TaWRlRmllbGQiOnsidmFsdWUiOnsia2V5IjoiIiwidGV4dCI6IiJ9LCJyZWZzIjp7IjAiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn0sIjEiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn0sIjIiOnsib2JqZWN0IjpudWxsLCJmaWVsZCI6eyJrZXkiOm51bGx9LCJwb2x5bW9ycGhpYyI6ZmFsc2UsInJlbGF0aW9uc2hpcE5hbWUiOiIiLCJ0eXBlIjoiIn19fSwiaGVhZGVySW5kZXgiOjF9",
						"color": "#008000FF",
						"title": "SF:Table",
						"appearance": "Hidden",
						"type": "RichText",
						"hasPlaceHolderText": false,
						"multiline": false,
						"isTemporary": false,
						"characterFormat": {},
						"contentControlListItems": []
					}
				},
				{
					"paragraphFormat": {
						"borders": {
							"top": {},
							"left": {},
							"right": {},
							"bottom": {},
							"horizontal": {},
							"vertical": {}
						},
						"styleName": "Normal",
						"listFormat": {}
					},
					"characterFormat": {},
					"inlines": []
				}
			],
			"headersFooters": {}
		}
	],
	"characterFormat": {
		"bold": false,
		"italic": false,
		"fontSize": 11,
		"fontFamily": "Calibri",
		"underline": "None",
		"strikethrough": "None",
		"baselineAlignment": "Normal",
		"highlightColor": "NoColor",
		"fontColor": "#00000000",
		"boldBidi": false,
		"italicBidi": false,
		"fontSizeBidi": 11,
		"fontFamilyBidi": "Calibri",
		"allCaps": false
	},
	"paragraphFormat": {
		"borders": {
			"top": {},
			"left": {},
			"right": {},
			"bottom": {},
			"horizontal": {},
			"vertical": {}
		},
		"leftIndent": 0,
		"rightIndent": 0,
		"firstLineIndent": 0,
		"textAlignment": "Left",
		"beforeSpacing": 0,
		"afterSpacing": 8,
		"lineSpacing": 1.0791666507720948,
		"lineSpacingType": "Multiple",
		"listFormat": {},
		"bidi": false,
		"keepLinesTogether": false,
		"keepWithNext": false,
		"widowControl": true
	},
	"defaultTabWidth": 36,
	"trackChanges": false,
	"enforcement": false,
	"hashValue": "",
	"saltValue": "",
	"formatting": false,
	"protectionType": "NoProtection",
	"dontUseHTMLParagraphAutoSpacing": false,
	"formFieldShading": true,
	"compatibilityMode": "Word2013",
	"styles": [
		{
			"name": "Normal",
			"type": "Paragraph",
			"paragraphFormat": {
				"borders": {
					"top": {},
					"left": {},
					"right": {},
					"bottom": {},
					"horizontal": {},
					"vertical": {}
				},
				"listFormat": {}
			},
			"characterFormat": {},
			"next": "Normal"
		},
		{
			"name": "Heading 1",
			"type": "Paragraph",
			"paragraphFormat": {
				"borders": {
					"top": {},
					"left": {},
					"right": {},
					"bottom": {},
					"horizontal": {},
					"vertical": {}
				},
				"beforeSpacing": 12,
				"afterSpacing": 0,
				"outlineLevel": "Level1",
				"listFormat": {},
				"keepLinesTogether": true,
				"keepWithNext": true
			},
			"characterFormat": {
				"fontSize": 16,
				"fontFamily": "Calibri Light",
				"fontColor": "#2F5496FF",
				"fontSizeBidi": 16,
				"fontFamilyBidi": "Calibri Light"
			},
			"basedOn": "Normal",
			"link": "Heading 1 Char",
			"next": "Normal"
		},
		{
			"name": "Heading 1 Char",
			"type": "Character",
			"characterFormat": {
				"fontSize": 16,
				"fontFamily": "Calibri Light",
				"fontColor": "#2F5496FF",
				"fontSizeBidi": 16,
				"fontFamilyBidi": "Calibri Light"
			},
			"basedOn": "Default Paragraph Font"
		},
		{
			"name": "Default Paragraph Font",
			"type": "Character",
			"characterFormat": {}
		},
		{
			"name": "Heading 2",
			"type": "Paragraph",
			"paragraphFormat": {
				"borders": {
					"top": {},
					"left": {},
					"right": {},
					"bottom": {},
					"horizontal": {},
					"vertical": {}
				},
				"beforeSpacing": 2,
				"afterSpacing": 0,
				"outlineLevel": "Level2",
				"listFormat": {},
				"keepLinesTogether": true,
				"keepWithNext": true
			},
			"characterFormat": {
				"fontSize": 13,
				"fontFamily": "Calibri Light",
				"fontColor": "#2F5496FF",
				"fontSizeBidi": 13,
				"fontFamilyBidi": "Calibri Light"
			},
			"basedOn": "Normal",
			"link": "Heading 2 Char",
			"next": "Normal"
		},
		{
			"name": "Heading 2 Char",
			"type": "Character",
			"characterFormat": {
				"fontSize": 13,
				"fontFamily": "Calibri Light",
				"fontColor": "#2F5496FF",
				"fontSizeBidi": 13,
				"fontFamilyBidi": "Calibri Light"
			},
			"basedOn": "Default Paragraph Font"
		},
		{
			"name": "Heading 3",
			"type": "Paragraph",
			"paragraphFormat": {
				"borders": {
					"top": {},
					"left": {},
					"right": {},
					"bottom": {},
					"horizontal": {},
					"vertical": {}
				},
				"beforeSpacing": 2,
				"afterSpacing": 0,
				"outlineLevel": "Level3",
				"listFormat": {},
				"keepLinesTogether": true,
				"keepWithNext": true
			},
			"characterFormat": {
				"fontSize": 12,
				"fontFamily": "Calibri Light",
				"fontColor": "#1F3763FF",
				"fontSizeBidi": 12,
				"fontFamilyBidi": "Calibri Light"
			},
			"basedOn": "Normal",
			"link": "Heading 3 Char",
			"next": "Normal"
		},
		{
			"name": "Heading 3 Char",
			"type": "Character",
			"characterFormat": {
				"fontSize": 12,
				"fontFamily": "Calibri Light",
				"fontColor": "#1F3763FF",
				"fontSizeBidi": 12,
				"fontFamilyBidi": "Calibri Light"
			},
			"basedOn": "Default Paragraph Font"
		},
		{
			"name": "Heading 4",
			"type": "Paragraph",
			"paragraphFormat": {
				"borders": {
					"top": {},
					"left": {},
					"right": {},
					"bottom": {},
					"horizontal": {},
					"vertical": {}
				},
				"beforeSpacing": 2,
				"afterSpacing": 0,
				"outlineLevel": "Level4",
				"listFormat": {},
				"keepLinesTogether": true,
				"keepWithNext": true
			},
			"characterFormat": {
				"italic": true,
				"fontFamily": "Calibri Light",
				"fontColor": "#2F5496FF",
				"italicBidi": true,
				"fontFamilyBidi": "Calibri Light"
			},
			"basedOn": "Normal",
			"link": "Heading 4 Char",
			"next": "Normal"
		},
		{
			"name": "Heading 4 Char",
			"type": "Character",
			"characterFormat": {
				"italic": true,
				"fontSize": 12,
				"fontFamily": "Calibri Light",
				"fontColor": "#2F5496FF",
				"italicBidi": true,
				"fontSizeBidi": 12,
				"fontFamilyBidi": "Calibri Light"
			},
			"basedOn": "Default Paragraph Font"
		},
		{
			"name": "Heading 5",
			"type": "Paragraph",
			"paragraphFormat": {
				"borders": {
					"top": {},
					"left": {},
					"right": {},
					"bottom": {},
					"horizontal": {},
					"vertical": {}
				},
				"beforeSpacing": 2,
				"afterSpacing": 0,
				"outlineLevel": "Level5",
				"listFormat": {},
				"keepLinesTogether": true,
				"keepWithNext": true
			},
			"characterFormat": {
				"fontFamily": "Calibri Light",
				"fontColor": "#2F5496FF",
				"fontFamilyBidi": "Calibri Light"
			},
			"basedOn": "Normal",
			"link": "Heading 5 Char",
			"next": "Normal"
		},
		{
			"name": "Heading 5 Char",
			"type": "Character",
			"characterFormat": {
				"fontFamily": "Calibri Light",
				"fontColor": "#2F5496FF",
				"fontFamilyBidi": "Calibri Light"
			},
			"basedOn": "Default Paragraph Font"
		},
		{
			"name": "Placeholder Text",
			"type": "Character",
			"characterFormat": {
				"fontColor": "#808080FF"
			},
			"basedOn": "Default Paragraph Font"
		},
		{
			"name": "Caption",
			"type": "Paragraph",
			"paragraphFormat": {
				"borders": {
					"top": {},
					"left": {},
					"right": {},
					"bottom": {},
					"horizontal": {},
					"vertical": {}
				},
				"beforeSpacing": 6,
				"afterSpacing": 6,
				"listFormat": {}
			},
			"characterFormat": {
				"italic": true,
				"fontSize": 12,
				"italicBidi": true,
				"fontSizeBidi": 12
			},
			"basedOn": "Normal",
			"next": "Caption"
		},
		{
			"name": "Quote",
			"type": "Paragraph",
			"paragraphFormat": {
				"borders": {
					"top": {},
					"left": {},
					"right": {},
					"bottom": {},
					"horizontal": {},
					"vertical": {}
				},
				"leftIndent": 43.20000076293945,
				"rightIndent": 43.20000076293945,
				"textAlignment": "Center",
				"beforeSpacing": 10,
				"listFormat": {}
			},
			"characterFormat": {
				"italic": true,
				"fontColor": "#404040FF",
				"italicBidi": true
			},
			"basedOn": "Normal",
			"link": "Quote Char",
			"next": "Normal"
		},
		{
			"name": "Quote Char",
			"type": "Character",
			"characterFormat": {
				"italic": true,
				"fontColor": "#404040FF",
				"italicBidi": true
			},
			"basedOn": "Default Paragraph Font"
		},
		{
			"name": "code",
			"type": "Paragraph",
			"paragraphFormat": {
				"borders": {
					"top": {},
					"left": {},
					"right": {},
					"bottom": {},
					"horizontal": {},
					"vertical": {}
				},
				"listFormat": {}
			},
			"characterFormat": {
				"fontFamily": "Courier New",
				"highlightColor": "Gray25",
				"fontFamilyBidi": "Courier New"
			},
			"basedOn": "Normal",
			"next": "code"
		},
		{
			"name": "Subtle Emphasis",
			"type": "Character",
			"characterFormat": {
				"italic": true,
				"fontColor": "#404040FF",
				"italicBidi": true
			},
			"basedOn": "Default Paragraph Font"
		},
		{
			"name": "Heading",
			"type": "Paragraph",
			"paragraphFormat": {
				"borders": {
					"top": {},
					"left": {},
					"right": {},
					"bottom": {},
					"horizontal": {},
					"vertical": {}
				},
				"afterSpacing": 0,
				"lineSpacing": 1,
				"lineSpacingType": "Multiple",
				"listFormat": {},
				"contextualSpacing": true
			},
			"characterFormat": {
				"fontSize": 28,
				"fontFamily": "Calibri Light",
				"fontSizeBidi": 28,
				"fontFamilyBidi": "Calibri Light"
			},
			"basedOn": "Normal",
			"link": "Heading Car",
			"next": "Normal"
		},
		{
			"name": "Heading Car",
			"type": "Character",
			"characterFormat": {
				"fontSize": 28,
				"fontFamily": "Calibri Light",
				"fontSizeBidi": 28,
				"fontFamilyBidi": "Calibri Light"
			},
			"basedOn": "Default Paragraph Font"
		},
		{
			"name": "Hyperlink",
			"type": "Character",
			"characterFormat": {
				"underline": "Single",
				"fontColor": "#0563C1FF"
			},
			"basedOn": "Default Paragraph Font"
		},
		{
			"name": "Index",
			"type": "Paragraph",
			"paragraphFormat": {
				"borders": {
					"top": {},
					"left": {},
					"right": {},
					"bottom": {},
					"horizontal": {},
					"vertical": {}
				},
				"listFormat": {}
			},
			"characterFormat": {},
			"basedOn": "Normal",
			"next": "Index"
		},
		{
			"name": "Body Text",
			"type": "Paragraph",
			"paragraphFormat": {
				"borders": {
					"top": {},
					"left": {},
					"right": {},
					"bottom": {},
					"horizontal": {},
					"vertical": {}
				},
				"afterSpacing": 7,
				"lineSpacing": 1.1999999284744263,
				"lineSpacingType": "Multiple",
				"listFormat": {}
			},
			"characterFormat": {},
			"basedOn": "Normal",
			"next": "Body Text"
		},
		{
			"name": "List",
			"type": "Paragraph",
			"paragraphFormat": {
				"borders": {
					"top": {},
					"left": {},
					"right": {},
					"bottom": {},
					"horizontal": {},
					"vertical": {}
				},
				"listFormat": {}
			},
			"characterFormat": {},
			"basedOn": "Body Text",
			"next": "List"
		},
		{
			"name": "Numbering Symbols",
			"type": "Character",
			"characterFormat": {},
			"basedOn": "Default Paragraph Font"
		},
		{
			"name": "List Paragraph",
			"type": "Paragraph",
			"paragraphFormat": {
				"borders": {
					"top": {},
					"left": {},
					"right": {},
					"bottom": {},
					"horizontal": {},
					"vertical": {}
				},
				"leftIndent": 36,
				"listFormat": {},
				"contextualSpacing": true
			},
			"characterFormat": {},
			"basedOn": "Normal",
			"next": "List Paragraph"
		},
		{
			"name": "Title",
			"type": "Paragraph",
			"paragraphFormat": {
				"borders": {
					"top": {},
					"left": {},
					"right": {},
					"bottom": {},
					"horizontal": {},
					"vertical": {}
				},
				"textAlignment": "Center",
				"listFormat": {}
			},
			"characterFormat": {
				"bold": true,
				"boldBidi": true
			},
			"basedOn": "Heading",
			"next": "Body Text"
		},
		{
			"name": "Heading 6",
			"type": "Paragraph",
			"paragraphFormat": {
				"borders": {
					"top": {},
					"left": {},
					"right": {},
					"bottom": {},
					"horizontal": {},
					"vertical": {}
				},
				"leftIndent": 0,
				"rightIndent": 0,
				"firstLineIndent": 0,
				"textAlignment": "Left",
				"beforeSpacing": 2,
				"afterSpacing": 0,
				"lineSpacing": 1.0791666507720948,
				"lineSpacingType": "Multiple",
				"outlineLevel": "Level6",
				"listFormat": {}
			},
			"characterFormat": {
				"fontFamily": "Calibri Light",
				"fontColor": "#1F3763",
				"fontFamilyBidi": "Calibri Light"
			},
			"basedOn": "Normal",
			"link": "Heading 6 Char",
			"next": "Normal"
		},
		{
			"name": "Heading 6 Char",
			"type": "Character",
			"characterFormat": {
				"fontFamily": "Calibri Light",
				"fontColor": "#1F3763",
				"fontFamilyBidi": "Calibri Light"
			},
			"basedOn": "Default Paragraph Font"
		}
	],
	"lists": [],
	"abstractLists": [],
	"comments": [],
	"revisions": [],
	"customXml": [],
	"footnotes": {
		"separator": [
			{
				"paragraphFormat": {
					"borders": {
						"top": {},
						"left": {},
						"right": {},
						"bottom": {},
						"horizontal": {},
						"vertical": {}
					},
					"styleName": "Normal",
					"listFormat": {}
				},
				"characterFormat": {},
				"inlines": [
					{
						"characterFormat": {},
						"text": "\u0003"
					}
				]
			}
		],
		"continuationSeparator": [
			{
				"paragraphFormat": {
					"borders": {
						"top": {},
						"left": {},
						"right": {},
						"bottom": {},
						"horizontal": {},
						"vertical": {}
					},
					"styleName": "Normal",
					"listFormat": {}
				},
				"characterFormat": {},
				"inlines": [
					{
						"characterFormat": {},
						"text": "\u0004"
					}
				]
			}
		],
		"continuationNotice": [
			{
				"paragraphFormat": {
					"borders": {
						"top": {},
						"left": {},
						"right": {},
						"bottom": {},
						"horizontal": {},
						"vertical": {}
					},
					"styleName": "Normal",
					"listFormat": {}
				},
				"characterFormat": {},
				"inlines": []
			}
		]
	},
	"endnotes": {
		"separator": [
			{
				"paragraphFormat": {
					"borders": {
						"top": {},
						"left": {},
						"right": {},
						"bottom": {},
						"horizontal": {},
						"vertical": {}
					},
					"styleName": "Normal",
					"listFormat": {}
				},
				"characterFormat": {},
				"inlines": [
					{
						"characterFormat": {},
						"text": "\u0003"
					}
				]
			}
		],
		"continuationSeparator": [
			{
				"paragraphFormat": {
					"borders": {
						"top": {},
						"left": {},
						"right": {},
						"bottom": {},
						"horizontal": {},
						"vertical": {}
					},
					"styleName": "Normal",
					"listFormat": {}
				},
				"characterFormat": {},
				"inlines": [
					{
						"characterFormat": {},
						"text": "\u0004"
					}
				]
			}
		],
		"continuationNotice": [
			{
				"paragraphFormat": {
					"borders": {
						"top": {},
						"left": {},
						"right": {},
						"bottom": {},
						"horizontal": {},
						"vertical": {}
					},
					"styleName": "Normal",
					"listFormat": {}
				},
				"characterFormat": {},
				"inlines": []
			}
		]
	}
};
describe("Facing script error when exporting attached document",()=>{
    let editor: DocumentEditor;
    let documentHelper: DocumentHelper;
    beforeAll(():void =>{
        let element: HTMLElement = createElement('div', { id: 'container' });
        document.body.appendChild(element);
        DocumentEditor.Inject(SfdtExport, Editor, Selection);
        editor = new DocumentEditor({ enableSfdtExport: true, enableEditor: true, enableSelection: true});
        (editor.documentHelper as any).containerCanvasIn = TestHelper.containerCanvas;
        (editor.documentHelper as any).selectionCanvasIn = TestHelper.selectionCanvas;
        (editor.documentHelper.render as any).pageCanvasIn = TestHelper.pageCanvas;
        (editor.documentHelper.render as any).selectionCanvasIn = TestHelper.pageSelectionCanvas;
        editor.appendTo('#container');
        documentHelper = editor.documentHelper;
    });
    afterAll((done): void => {
        documentHelper.destroy();
        documentHelper = undefined;
        editor.destroy();
        document.body.removeChild(document.getElementById('container'));
        editor = undefined;
        document.body.innerHTML = '';
        setTimeout(function () {
            done();
        }, 1000);
    });
    it("Facing script error when exporting attached document",()=>{
        console.log("Facing script error when exporting attached document");
        editor.openBlank();
        editor.open(JSON.stringify(contentControl));
        expect(()=>{ editor.save("ContentControl",'Sfdt')}).not.toThrowError();
    });
});
let nestedTable : any = {
	"sections": [
		{
			"sectionFormat": {
				"pageWidth": 612,
				"pageHeight": 792,
				"leftMargin": 72,
				"rightMargin": 72,
				"topMargin": 72,
				"bottomMargin": 72,
				"differentFirstPage": false,
				"differentOddAndEvenPages": false,
				"headerDistance": 36,
				"footerDistance": 36,
				"bidi": false,
				"pageNumberStyle": "Arabic"
			},
			"blocks": [
				{
					"rows": [
						{
							"cells": [
								{
									"blocks": [
										{
											"paragraphFormat": {
												"leftIndent": 0,
												"rightIndent": 0,
												"firstLineIndent": 0,
												"textAlignment": "Left",
												"beforeSpacing": 14,
												"afterSpacing": 0,
												"spaceBeforeAuto": false,
												"spaceAfterAuto": false,
												"lineSpacing": 1,
												"lineSpacingType": "Multiple",
												"styleName": "Normal",
												"outlineLevel": "BodyText",
												"listFormat": {},
												"bidi": false,
												"keepLinesTogether": false,
												"keepWithNext": false,
												"contextualSpacing": false,
												"widowControl": true
											},
											"characterFormat": {
												"bold": false,
												"italic": false,
												"fontSize": 10,
												"fontFamily": "Times New Roman",
												"underline": "None",
												"strikethrough": "None",
												"fontColor": "#00000000",
												"bidi": false,
												"boldBidi": false,
												"italicBidi": false,
												"fontSizeBidi": 10,
												"fontFamilyBidi": "Times New Roman",
												"allCaps": false
											},
											"inlines": [
												{
													"characterFormat": {},
													"bookmarkType": 0,
													"name": "__FINDING_PLACEHOLDER_BOOKMARK_358"
												}
											]
										}
									],
									"cellFormat": {
										"borders": {
											"top": {
												"color": "#9EB722FF",
												"hasNoneStyle": false,
												"lineStyle": "Single",
												"lineWidth": 1
											},
											"left": {
												"color": "#9EB722FF",
												"hasNoneStyle": false,
												"lineStyle": "Single",
												"lineWidth": 1
											},
											"right": {
												"hasNoneStyle": false,
												"lineStyle": "Cleared",
												"lineWidth": 0
											},
											"bottom": {
												"color": "#9EB722FF",
												"hasNoneStyle": false,
												"lineStyle": "Single",
												"lineWidth": 1
											},
											"diagonalDown": {
												"hasNoneStyle": true,
												"lineStyle": "None",
												"lineWidth": 0
											},
											"diagonalUp": {
												"hasNoneStyle": true,
												"lineStyle": "None",
												"lineWidth": 0
											},
											"horizontal": {
												"hasNoneStyle": false,
												"lineStyle": "None",
												"lineWidth": 0
											},
											"vertical": {
												"hasNoneStyle": false,
												"lineStyle": "None",
												"lineWidth": 0
											}
										},
										"shading": {
											"backgroundColor": "empty",
											"foregroundColor": "empty",
											"textureStyle": "TextureNone"
										},
										"topMargin": 0,
										"rightMargin": 0,
										"leftMargin": 0,
										"bottomMargin": 0,
										"preferredWidth": 1,
										"preferredWidthType": "Point",
										"cellWidth": 1,
										"columnSpan": 1,
										"rowSpan": 1,
										"verticalAlignment": "Top"
									},
									"columnIndex": 0
								},
								{
									"blocks": [
										{
											"paragraphFormat": {
												"leftIndent": 0,
												"rightIndent": 0,
												"firstLineIndent": 0,
												"textAlignment": "Left",
												"beforeSpacing": 14,
												"afterSpacing": 0,
												"spaceBeforeAuto": false,
												"spaceAfterAuto": false,
												"lineSpacing": 1,
												"lineSpacingType": "Multiple",
												"styleName": "Normal",
												"outlineLevel": "BodyText",
												"listFormat": {},
												"bidi": false,
												"keepLinesTogether": false,
												"keepWithNext": false,
												"contextualSpacing": false,
												"widowControl": true
											},
											"characterFormat": {
												"bold": false,
												"italic": false,
												"fontSize": 10,
												"fontFamily": "Times New Roman",
												"underline": "None",
												"strikethrough": "None",
												"fontColor": "#00000000",
												"bidi": false,
												"boldBidi": false,
												"italicBidi": false,
												"fontSizeBidi": 10,
												"fontFamilyBidi": "Times New Roman",
												"allCaps": false
											},
											"inlines": [
												{
													"characterFormat": {},
													"bookmarkType": 0,
													"name": "_FINDING_ID_1655900633275392"
												}
											]
										},
										{
											"rows": [
												{
													"cells": [
														{
															"blocks": [
																{
																	"paragraphFormat": {
																		"leftIndent": 0,
																		"rightIndent": 0,
																		"firstLineIndent": 0,
																		"textAlignment": "Left",
																		"beforeSpacing": 14,
																		"afterSpacing": 0,
																		"spaceBeforeAuto": false,
																		"spaceAfterAuto": false,
																		"lineSpacing": 1,
																		"lineSpacingType": "Multiple",
																		"styleName": "Normal",
																		"outlineLevel": "BodyText",
																		"listFormat": {},
																		"bidi": false,
																		"keepLinesTogether": false,
																		"keepWithNext": false,
																		"contextualSpacing": false,
																		"widowControl": true
																	},
																	"characterFormat": {
																		"bold": false,
																		"italic": false,
																		"fontSize": 10,
																		"fontFamily": "Times New Roman",
																		"underline": "None",
																		"strikethrough": "None",
																		"fontColor": "#00000000",
																		"bidi": false,
																		"boldBidi": false,
																		"italicBidi": false,
																		"fontSizeBidi": 10,
																		"fontFamilyBidi": "Times New Roman",
																		"allCaps": false
																	},
																	"inlines": [
																		{
																			"characterFormat": {
																				"bold": false,
																				"italic": false,
																				"fontSize": 10,
																				"fontFamily": "Segoe UI",
																				"underline": "None",
																				"strikethrough": "None",
																				"fontColor": "#00000000",
																				"bidi": false,
																				"boldBidi": false,
																				"italicBidi": false,
																				"fontSizeBidi": 10,
																				"fontFamilyBidi": "Segoe UI",
																				"allCaps": false
																			},
																			"fieldType": 0,
																			"hasFieldEnd": true
																		},
																		{
																			"characterFormat": {
																				"bold": false,
																				"italic": false,
																				"fontSize": 10,
																				"fontFamily": "Segoe UI",
																				"underline": "None",
																				"strikethrough": "None",
																				"fontColor": "#00000000",
																				"bidi": false,
																				"boldBidi": false,
																				"italicBidi": false,
																				"fontSizeBidi": 10,
																				"fontFamilyBidi": "Segoe UI",
																				"allCaps": false
																			},
																			"text": "ref _FIELD_FINDING_ID_1655900633275392 \\* MERGEFORMAT"
																		},
																		{
																			"characterFormat": {},
																			"fieldType": 2
																		},
																		{
																			"characterFormat": {
																				"bold": false,
																				"italic": false,
																				"fontSize": 10,
																				"fontFamily": "Segoe UI",
																				"underline": "None",
																				"strikethrough": "None",
																				"fontColor": "#00000000",
																				"bidi": false,
																				"boldBidi": false,
																				"italicBidi": false,
																				"fontSizeBidi": 10,
																				"fontFamilyBidi": "Segoe UI",
																				"allCaps": false
																			},
																			"text": "[1] "
																		},
																		{
																			"characterFormat": {},
																			"fieldType": 1
																		}
																	]
																}
															],
															"cellFormat": {
																"borders": {
																	"top": {
																		"color": "#000000",
																		"hasNoneStyle": false,
																		"lineStyle": "Single",
																		"lineWidth": 1
																	},
																	"left": {
																		"color": "#000000",
																		"hasNoneStyle": false,
																		"lineStyle": "Single",
																		"lineWidth": 1
																	},
																	"right": {
																		"color": "#000000",
																		"hasNoneStyle": false,
																		"lineStyle": "Single",
																		"lineWidth": 1
																	},
																	"bottom": {
																		"color": "#000000",
																		"hasNoneStyle": false,
																		"lineStyle": "Single",
																		"lineWidth": 1
																	},
																	"diagonalDown": {
																		"hasNoneStyle": true,
																		"lineStyle": "None",
																		"lineWidth": 0
																	},
																	"diagonalUp": {
																		"hasNoneStyle": true,
																		"lineStyle": "None",
																		"lineWidth": 0
																	},
																	"horizontal": {
																		"hasNoneStyle": false,
																		"lineStyle": "None",
																		"lineWidth": 0
																	},
																	"vertical": {
																		"hasNoneStyle": false,
																		"lineStyle": "None",
																		"lineWidth": 0
																	}
																},
																"shading": {
																	"backgroundColor": "empty",
																	"foregroundColor": "empty",
																	"textureStyle": "TextureNone"
																},
																"topMargin": 0,
																"rightMargin": 5.400000095367432,
																"leftMargin": 5.400000095367432,
																"bottomMargin": 0,
																"preferredWidth": 30,
																"preferredWidthType": "Point",
																"cellWidth": 39.11521064863841,
																"columnSpan": 1,
																"rowSpan": 1,
																"verticalAlignment": "Top"
															},
															"columnIndex": 0
														},
														{
															"blocks": [
																{
																	"paragraphFormat": {
																		"leftIndent": 0,
																		"rightIndent": 0,
																		"firstLineIndent": 0,
																		"textAlignment": "Left",
																		"beforeSpacing": 14,
																		"afterSpacing": 0,
																		"spaceBeforeAuto": false,
																		"spaceAfterAuto": false,
																		"lineSpacing": 1,
																		"lineSpacingType": "Multiple",
																		"styleName": "Normal",
																		"outlineLevel": "BodyText",
																		"listFormat": {},
																		"bidi": false,
																		"keepLinesTogether": false,
																		"keepWithNext": false,
																		"contextualSpacing": false,
																		"widowControl": true
																	},
																	"characterFormat": {
																		"bold": false,
																		"italic": false,
																		"fontSize": 10,
																		"fontFamily": "Segoe UI",
																		"underline": "None",
																		"strikethrough": "None",
																		"fontColor": "#00000000",
																		"bidi": false,
																		"boldBidi": false,
																		"italicBidi": false,
																		"fontSizeBidi": 10,
																		"fontFamilyBidi": "Segoe UI",
																		"allCaps": false
																	},
																	"inlines": [
																		{
																			"characterFormat": {
																				"bold": false,
																				"italic": false,
																				"fontSize": 10,
																				"fontFamily": "Segoe UI",
																				"underline": "None",
																				"strikethrough": "None",
																				"fontColor": "#00000000",
																				"bidi": false,
																				"boldBidi": false,
																				"italicBidi": false,
																				"fontSizeBidi": 10,
																				"fontFamilyBidi": "Segoe UI",
																				"allCaps": false
																			},
																			"text": "Abc"
																		}
																	]
																}
															],
															"cellFormat": {
																"borders": {
																	"top": {
																		"color": "#000000",
																		"hasNoneStyle": false,
																		"lineStyle": "Single",
																		"lineWidth": 1
																	},
																	"left": {
																		"color": "#000000",
																		"hasNoneStyle": false,
																		"lineStyle": "Single",
																		"lineWidth": 1
																	},
																	"right": {
																		"color": "#000000",
																		"hasNoneStyle": false,
																		"lineStyle": "Single",
																		"lineWidth": 1
																	},
																	"bottom": {
																		"color": "#000000",
																		"hasNoneStyle": false,
																		"lineStyle": "Single",
																		"lineWidth": 1
																	},
																	"diagonalDown": {
																		"hasNoneStyle": true,
																		"lineStyle": "None",
																		"lineWidth": 0
																	},
																	"diagonalUp": {
																		"hasNoneStyle": true,
																		"lineStyle": "None",
																		"lineWidth": 0
																	},
																	"horizontal": {
																		"hasNoneStyle": false,
																		"lineStyle": "None",
																		"lineWidth": 0
																	},
																	"vertical": {
																		"hasNoneStyle": false,
																		"lineStyle": "None",
																		"lineWidth": 0
																	}
																},
																"shading": {
																	"backgroundColor": "empty",
																	"foregroundColor": "empty",
																	"textureStyle": "TextureNone"
																},
																"topMargin": 0,
																"rightMargin": 5.400000095367432,
																"leftMargin": 5.400000095367432,
																"bottomMargin": 0,
																"preferredWidth": 70,
																"preferredWidthType": "Percent",
																"cellWidth": 408.8795891625341,
																"columnSpan": 1,
																"rowSpan": 1,
																"verticalAlignment": "Top"
															},
															"columnIndex": 1
														}
													],
													"rowFormat": {
														"height": 1,
														"allowBreakAcrossPages": false,
														"heightType": "AtLeast",
														"isHeader": false,
														"borders": {
															"top": {
																"color": "#FFFFFFFF",
																"hasNoneStyle": false,
																"lineStyle": "Single",
																"lineWidth": 0.5
															},
															"left": {
																"color": "#FFFFFFFF",
																"hasNoneStyle": false,
																"lineStyle": "Single",
																"lineWidth": 0.5
															},
															"right": {
																"color": "#FFFFFFFF",
																"hasNoneStyle": false,
																"lineStyle": "Single",
																"lineWidth": 0.5
															},
															"bottom": {
																"color": "#FFFFFFFF",
																"hasNoneStyle": false,
																"lineStyle": "Single",
																"lineWidth": 0.5
															},
															"diagonalDown": {
																"hasNoneStyle": false,
																"lineStyle": "None",
																"lineWidth": 0
															},
															"diagonalUp": {
																"hasNoneStyle": false,
																"lineStyle": "None",
																"lineWidth": 0
															},
															"horizontal": {
																"color": "#FFFFFFFF",
																"hasNoneStyle": false,
																"lineStyle": "Single",
																"lineWidth": 0.5
															},
															"vertical": {
																"color": "#FFFFFFFF",
																"hasNoneStyle": false,
																"lineStyle": "Single",
																"lineWidth": 0.5
															}
														},
														"gridBefore": 0,
														"gridAfter": 0,
														"leftMargin": 5.4,
														"topMargin": 0,
														"rightMargin": 5.4,
														"bottomMargin": 0
													}
												}
											],
											"grid": [
												39.11521064863841,
												408.8795891625341
											],
											"tableFormat": {
												"borders": {
													"top": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0
													},
													"left": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0
													},
													"right": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0
													},
													"bottom": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0
													},
													"diagonalDown": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0
													},
													"diagonalUp": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0
													},
													"horizontal": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0
													},
													"vertical": {
														"hasNoneStyle": false,
														"lineStyle": "None",
														"lineWidth": 0
													}
												},
												"shading": {},
												"leftIndent": 0,
												"tableAlignment": "Left",
												"topMargin": 0,
												"rightMargin": 5.400000095367432,
												"leftMargin": 5.400000095367432,
												"bottomMargin": 0,
												"preferredWidth": 99,
												"preferredWidthType": "Percent",
												"bidi": false,
												"allowAutoFit": false
											},
											"description": null,
											"title": null,
											"columnCount": 2
										},
										{
											"paragraphFormat": {
												"leftIndent": 0,
												"rightIndent": 0,
												"firstLineIndent": 0,
												"textAlignment": "Left",
												"beforeSpacing": 14,
												"afterSpacing": 0,
												"spaceBeforeAuto": false,
												"spaceAfterAuto": false,
												"lineSpacing": 1,
												"lineSpacingType": "Multiple",
												"styleName": "Normal",
												"outlineLevel": "BodyText",
												"listFormat": {},
												"bidi": false,
												"keepLinesTogether": false,
												"keepWithNext": false,
												"contextualSpacing": false,
												"widowControl": true
											},
											"characterFormat": {
												"bold": false,
												"italic": false,
												"fontSize": 10,
												"fontFamily": "Times New Roman",
												"underline": "None",
												"strikethrough": "None",
												"fontColor": "#00000000",
												"bidi": false,
												"boldBidi": false,
												"italicBidi": false,
												"fontSizeBidi": 10,
												"fontFamilyBidi": "Times New Roman",
												"allCaps": false
											},
											"inlines": [
												{
													"characterFormat": {},
													"bookmarkType": 1,
													"name": "_FINDING_ID_1655900633275392"
												}
											]
										}
									],
									"cellFormat": {
										"borders": {
											"top": {
												"color": "#000000",
												"hasNoneStyle": false,
												"lineStyle": "Single",
												"lineWidth": 1
											},
											"left": {
												"color": "#000000",
												"hasNoneStyle": false,
												"lineStyle": "Single",
												"lineWidth": 1
											},
											"right": {
												"color": "#000000",
												"hasNoneStyle": false,
												"lineStyle": "Single",
												"lineWidth": 1
											},
											"bottom": {
												"color": "#000000",
												"hasNoneStyle": false,
												"lineStyle": "Single",
												"lineWidth": 1
											},
											"diagonalDown": {
												"hasNoneStyle": true,
												"lineStyle": "None",
												"lineWidth": 0
											},
											"diagonalUp": {
												"hasNoneStyle": true,
												"lineStyle": "None",
												"lineWidth": 0
											},
											"horizontal": {
												"hasNoneStyle": false,
												"lineStyle": "None",
												"lineWidth": 0
											},
											"vertical": {
												"hasNoneStyle": false,
												"lineStyle": "None",
												"lineWidth": 0
											}
										},
										"shading": {
											"backgroundColor": "empty",
											"foregroundColor": "empty",
											"textureStyle": "TextureNone"
										},
										"topMargin": 0,
										"rightMargin": 5.400000095367432,
										"leftMargin": 5.400000095367432,
										"bottomMargin": 0,
										"preferredWidth": 99,
										"preferredWidthType": "Percent",
										"cellWidth": 463.32,
										"columnSpan": 1,
										"rowSpan": 1,
										"verticalAlignment": "Top"
									},
									"columnIndex": 1
								},
								{
									"blocks": [
										{
											"paragraphFormat": {
												"leftIndent": 0,
												"rightIndent": 0,
												"firstLineIndent": 0,
												"textAlignment": "Left",
												"beforeSpacing": 14,
												"afterSpacing": 0,
												"spaceBeforeAuto": false,
												"spaceAfterAuto": false,
												"lineSpacing": 1,
												"lineSpacingType": "Multiple",
												"styleName": "Normal",
												"outlineLevel": "BodyText",
												"listFormat": {},
												"bidi": false,
												"keepLinesTogether": false,
												"keepWithNext": false,
												"contextualSpacing": false,
												"widowControl": true
											},
											"characterFormat": {
												"bold": false,
												"italic": false,
												"fontSize": 10,
												"fontFamily": "Times New Roman",
												"underline": "None",
												"strikethrough": "None",
												"fontColor": "#00000000",
												"bidi": false,
												"boldBidi": false,
												"italicBidi": false,
												"fontSizeBidi": 10,
												"fontFamilyBidi": "Times New Roman",
												"allCaps": false
											},
											"inlines": [
												{
													"characterFormat": {},
													"bookmarkType": 1,
													"name": "__FINDING_PLACEHOLDER_BOOKMARK_358"
												}
											]
										}
									],
									"cellFormat": {
										"borders": {
											"top": {
												"color": "#9EB722FF",
												"hasNoneStyle": false,
												"lineStyle": "Single",
												"lineWidth": 1
											},
											"left": {
												"color": "#000000",
												"hasNoneStyle": false,
												"lineStyle": "Single",
												"lineWidth": 1
											},
											"right": {
												"color": "#9EB722FF",
												"hasNoneStyle": false,
												"lineStyle": "Single",
												"lineWidth": 1
											},
											"bottom": {
												"color": "#9EB722FF",
												"hasNoneStyle": false,
												"lineStyle": "Single",
												"lineWidth": 1
											},
											"diagonalDown": {
												"hasNoneStyle": true,
												"lineStyle": "None",
												"lineWidth": 0
											},
											"diagonalUp": {
												"hasNoneStyle": true,
												"lineStyle": "None",
												"lineWidth": 0
											},
											"horizontal": {
												"hasNoneStyle": false,
												"lineStyle": "None",
												"lineWidth": 0
											},
											"vertical": {
												"hasNoneStyle": false,
												"lineStyle": "None",
												"lineWidth": 0
											}
										},
										"shading": {
											"backgroundColor": "empty",
											"foregroundColor": "empty",
											"textureStyle": "TextureNone"
										},
										"topMargin": 0,
										"rightMargin": 0,
										"leftMargin": 0,
										"bottomMargin": 0,
										"preferredWidth": 1,
										"preferredWidthType": "Point",
										"cellWidth": 1,
										"columnSpan": 1,
										"rowSpan": 1,
										"verticalAlignment": "Top"
									},
									"columnIndex": 2
								}
							],
							"rowFormat": {
								"height": 1,
								"allowBreakAcrossPages": false,
								"heightType": "AtLeast",
								"isHeader": false,
								"borders": {
									"top": {
										"color": "#000000FF",
										"hasNoneStyle": false,
										"lineStyle": "Single",
										"lineWidth": 0.5
									},
									"left": {
										"color": "#000000FF",
										"hasNoneStyle": false,
										"lineStyle": "Single",
										"lineWidth": 0.5
									},
									"right": {
										"color": "#000000FF",
										"hasNoneStyle": false,
										"lineStyle": "Single",
										"lineWidth": 0.5
									},
									"bottom": {
										"color": "#000000FF",
										"hasNoneStyle": false,
										"lineStyle": "Single",
										"lineWidth": 0.5
									},
									"diagonalDown": {
										"hasNoneStyle": false,
										"lineStyle": "None",
										"lineWidth": 0
									},
									"diagonalUp": {
										"hasNoneStyle": false,
										"lineStyle": "None",
										"lineWidth": 0
									},
									"horizontal": {
										"color": "#000000FF",
										"hasNoneStyle": false,
										"lineStyle": "Single",
										"lineWidth": 0.5
									},
									"vertical": {
										"color": "#9EB722FF",
										"hasNoneStyle": false,
										"lineStyle": "Single",
										"lineWidth": 1
									}
								},
								"gridBefore": 0,
								"gridBeforeWidth": 0,
								"gridBeforeWidthType": "Point",
								"gridAfter": 0,
								"gridAfterWidth": 0,
								"gridAfterWidthType": "Point",
								"leftMargin": 5.4,
								"topMargin": 0,
								"rightMargin": 5.4,
								"bottomMargin": 0
							}
						}
					],
					"grid": [
						1,
						463.32,
						1
					],
					"tableFormat": {
						"borders": {
							"top": {
								"hasNoneStyle": false,
								"lineStyle": "None",
								"lineWidth": 0
							},
							"left": {
								"hasNoneStyle": false,
								"lineStyle": "None",
								"lineWidth": 0
							},
							"right": {
								"hasNoneStyle": false,
								"lineStyle": "None",
								"lineWidth": 0
							},
							"bottom": {
								"hasNoneStyle": false,
								"lineStyle": "None",
								"lineWidth": 0
							},
							"diagonalDown": {
								"hasNoneStyle": false,
								"lineStyle": "None",
								"lineWidth": 0
							},
							"diagonalUp": {
								"hasNoneStyle": false,
								"lineStyle": "None",
								"lineWidth": 0
							},
							"horizontal": {
								"hasNoneStyle": false,
								"lineStyle": "None",
								"lineWidth": 0
							},
							"vertical": {
								"hasNoneStyle": false,
								"lineStyle": "None",
								"lineWidth": 0
							}
						},
						"shading": {},
						"leftIndent": 0,
						"tableAlignment": "Left",
						"topMargin": 0,
						"rightMargin": 5.4,
						"leftMargin": 5.4,
						"bottomMargin": 0,
						"preferredWidth": 0,
						"preferredWidthType": "Auto",
						"bidi": false,
						"allowAutoFit": false
					},
					"description": null,
					"title": null,
					"columnCount": 3
				},
				{
					"paragraphFormat": {
						"styleName": "Normal",
						"listFormat": {}
					},
					"characterFormat": {},
					"inlines": []
				}
			],
			"headersFooters": {
				"header": {
					"blocks": [
						{
							"paragraphFormat": {
								"listFormat": {}
							},
							"characterFormat": {},
							"inlines": []
						}
					]
				},
				"footer": {
					"blocks": [
						{
							"paragraphFormat": {
								"listFormat": {}
							},
							"characterFormat": {},
							"inlines": []
						}
					]
				},
				"evenHeader": {},
				"evenFooter": {},
				"firstPageHeader": {},
				"firstPageFooter": {}
			}
		}
	],
	"characterFormat": {
		"bold": false,
		"italic": false,
		"fontSize": 11,
		"fontFamily": "Calibri",
		"underline": "None",
		"strikethrough": "None",
		"baselineAlignment": "Normal",
		"highlightColor": "NoColor",
		"fontColor": "#00000000",
		"boldBidi": false,
		"italicBidi": false,
		"fontSizeBidi": 11,
		"fontFamilyBidi": "Calibri",
		"allCaps": false
	},
	"paragraphFormat": {
		"leftIndent": 0,
		"rightIndent": 0,
		"firstLineIndent": 0,
		"textAlignment": "Left",
		"beforeSpacing": 0,
		"afterSpacing": 0,
		"lineSpacing": 1,
		"lineSpacingType": "Multiple",
		"listFormat": {},
		"bidi": false,
		"keepLinesTogether": false,
		"keepWithNext": false,
		"widowControl": true
	},
	"defaultTabWidth": 36,
	"trackChanges": false,
	"enforcement": false,
	"hashValue": "",
	"saltValue": "",
	"formatting": false,
	"protectionType": "NoProtection",
	"dontUseHTMLParagraphAutoSpacing": false,
	"formFieldShading": true,
	"compatibilityMode": "Word2013",
	"styles": [
		{
			"name": "Normal",
			"type": "Paragraph",
			"paragraphFormat": {
				"listFormat": {}
			},
			"characterFormat": {},
			"next": "Normal"
		},
		{
			"name": "Heading 1",
			"type": "Paragraph",
			"paragraphFormat": {
				"leftIndent": 0,
				"rightIndent": 0,
				"firstLineIndent": 0,
				"textAlignment": "Left",
				"beforeSpacing": 12,
				"afterSpacing": 0,
				"lineSpacing": 1.0791666507720948,
				"lineSpacingType": "Multiple",
				"outlineLevel": "Level1",
				"listFormat": {}
			},
			"characterFormat": {
				"fontSize": 16,
				"fontFamily": "Calibri Light",
				"fontColor": "#2F5496",
				"fontSizeBidi": 16,
				"fontFamilyBidi": "Calibri Light"
			},
			"basedOn": "Normal",
			"link": "Heading 1 Char",
			"next": "Normal"
		},
		{
			"name": "Heading 1 Char",
			"type": "Character",
			"characterFormat": {
				"fontSize": 16,
				"fontFamily": "Calibri Light",
				"fontColor": "#2F5496",
				"fontSizeBidi": 16,
				"fontFamilyBidi": "Calibri Light"
			},
			"basedOn": "Default Paragraph Font"
		},
		{
			"name": "Default Paragraph Font",
			"type": "Character",
			"characterFormat": {}
		},
		{
			"name": "Heading 2",
			"type": "Paragraph",
			"paragraphFormat": {
				"leftIndent": 0,
				"rightIndent": 0,
				"firstLineIndent": 0,
				"textAlignment": "Left",
				"beforeSpacing": 2,
				"afterSpacing": 0,
				"lineSpacing": 1.0791666507720948,
				"lineSpacingType": "Multiple",
				"outlineLevel": "Level2",
				"listFormat": {}
			},
			"characterFormat": {
				"fontSize": 13,
				"fontFamily": "Calibri Light",
				"fontColor": "#2F5496",
				"fontSizeBidi": 13,
				"fontFamilyBidi": "Calibri Light"
			},
			"basedOn": "Normal",
			"link": "Heading 2 Char",
			"next": "Normal"
		},
		{
			"name": "Heading 2 Char",
			"type": "Character",
			"characterFormat": {
				"fontSize": 13,
				"fontFamily": "Calibri Light",
				"fontColor": "#2F5496",
				"fontSizeBidi": 13,
				"fontFamilyBidi": "Calibri Light"
			},
			"basedOn": "Default Paragraph Font"
		},
		{
			"name": "Heading 3",
			"type": "Paragraph",
			"paragraphFormat": {
				"leftIndent": 0,
				"rightIndent": 0,
				"firstLineIndent": 0,
				"textAlignment": "Left",
				"beforeSpacing": 2,
				"afterSpacing": 0,
				"lineSpacing": 1.0791666507720948,
				"lineSpacingType": "Multiple",
				"outlineLevel": "Level3",
				"listFormat": {}
			},
			"characterFormat": {
				"fontSize": 12,
				"fontFamily": "Calibri Light",
				"fontColor": "#1F3763",
				"fontSizeBidi": 12,
				"fontFamilyBidi": "Calibri Light"
			},
			"basedOn": "Normal",
			"link": "Heading 3 Char",
			"next": "Normal"
		},
		{
			"name": "Heading 3 Char",
			"type": "Character",
			"characterFormat": {
				"fontSize": 12,
				"fontFamily": "Calibri Light",
				"fontColor": "#1F3763",
				"fontSizeBidi": 12,
				"fontFamilyBidi": "Calibri Light"
			},
			"basedOn": "Default Paragraph Font"
		},
		{
			"name": "Heading 4",
			"type": "Paragraph",
			"paragraphFormat": {
				"leftIndent": 0,
				"rightIndent": 0,
				"firstLineIndent": 0,
				"textAlignment": "Left",
				"beforeSpacing": 2,
				"afterSpacing": 0,
				"lineSpacing": 1.0791666507720948,
				"lineSpacingType": "Multiple",
				"outlineLevel": "Level4",
				"listFormat": {}
			},
			"characterFormat": {
				"italic": true,
				"fontFamily": "Calibri Light",
				"fontColor": "#2F5496",
				"italicBidi": true,
				"fontFamilyBidi": "Calibri Light"
			},
			"basedOn": "Normal",
			"link": "Heading 4 Char",
			"next": "Normal"
		},
		{
			"name": "Heading 4 Char",
			"type": "Character",
			"characterFormat": {
				"italic": true,
				"fontFamily": "Calibri Light",
				"fontColor": "#2F5496",
				"italicBidi": true,
				"fontFamilyBidi": "Calibri Light"
			},
			"basedOn": "Default Paragraph Font"
		},
		{
			"name": "Heading 5",
			"type": "Paragraph",
			"paragraphFormat": {
				"leftIndent": 0,
				"rightIndent": 0,
				"firstLineIndent": 0,
				"textAlignment": "Left",
				"beforeSpacing": 2,
				"afterSpacing": 0,
				"lineSpacing": 1.0791666507720948,
				"lineSpacingType": "Multiple",
				"outlineLevel": "Level5",
				"listFormat": {}
			},
			"characterFormat": {
				"fontFamily": "Calibri Light",
				"fontColor": "#2F5496",
				"fontFamilyBidi": "Calibri Light"
			},
			"basedOn": "Normal",
			"link": "Heading 5 Char",
			"next": "Normal"
		},
		{
			"name": "Heading 5 Char",
			"type": "Character",
			"characterFormat": {
				"fontFamily": "Calibri Light",
				"fontColor": "#2F5496",
				"fontFamilyBidi": "Calibri Light"
			},
			"basedOn": "Default Paragraph Font"
		},
		{
			"name": "Heading 6",
			"type": "Paragraph",
			"paragraphFormat": {
				"leftIndent": 0,
				"rightIndent": 0,
				"firstLineIndent": 0,
				"textAlignment": "Left",
				"beforeSpacing": 2,
				"afterSpacing": 0,
				"lineSpacing": 1.0791666507720948,
				"lineSpacingType": "Multiple",
				"outlineLevel": "Level6",
				"listFormat": {}
			},
			"characterFormat": {
				"fontFamily": "Calibri Light",
				"fontColor": "#1F3763",
				"fontFamilyBidi": "Calibri Light"
			},
			"basedOn": "Normal",
			"link": "Heading 6 Char",
			"next": "Normal"
		},
		{
			"name": "Heading 6 Char",
			"type": "Character",
			"characterFormat": {
				"fontFamily": "Calibri Light",
				"fontColor": "#1F3763",
				"fontFamilyBidi": "Calibri Light"
			},
			"basedOn": "Default Paragraph Font"
		}
	],
	"lists": [],
	"abstractLists": [],
	"comments": [],
	"revisions": [],
	"customXml": []
};
describe('Nested table and word export issue', () => {
    let editor: DocumentEditor;
    let documentHelper: DocumentHelper;
    beforeAll((): void => {
        let ele: HTMLElement = createElement('div', { id: 'container' });
        document.body.appendChild(ele);
        DocumentEditor.Inject(SfdtExport,Editor,Selection);
        editor = new DocumentEditor({ enableSfdtExport: true ,enableEditor: true, enableSelection: true});
        (editor.documentHelper as any).containerCanvasIn = TestHelper.containerCanvas;
        (editor.documentHelper as any).selectionCanvasIn = TestHelper.selectionCanvas;
        (editor.documentHelper.render as any).pageCanvasIn = TestHelper.pageCanvas;
        (editor.documentHelper.render as any).selectionCanvasIn = TestHelper.pageSelectionCanvas;
        editor.appendTo('#container');
        documentHelper = editor.documentHelper;
    });
    afterAll((done): void => {
        documentHelper.destroy();
        documentHelper = undefined;
        editor.destroy();
        document.body.removeChild(document.getElementById('container'));
        editor = undefined;
        document.body.innerHTML = '';
        setTimeout(function () {
            done();
        }, 1000);
    });
    it('Nested table adjacent paragraph height issue',() => {
        editor.open(JSON.stringify(nestedTable));
        expect(((((((editor.documentHelper.pages[0].bodyWidgets[0] as BodyWidget).childWidgets[0] as TableWidget).childWidgets[0] as TableRowWidget).childWidgets[1] as TableCellWidget).childWidgets[2] as ParagraphWidget).childWidgets[0] as LineWidget).height).toBe(0);
    });
    it('Word export issue', ()=>{
        console.log('Word export issue');
        let table: TableWidget = (editor.documentHelper.pages[0].bodyWidgets[0] as BodyWidget).childWidgets[0] as TableWidget;
        let tableCell: TableCellWidget = (table.childWidgets[0] as TableRowWidget).childWidgets[1] as TableCellWidget;

        expect(tableCell.cellFormat.preferredWidthType).toBe('Percent');
        expect(tableCell.cellFormat.preferredWidth).toBe(99);

        let nestedTableCellOne : TableCellWidget = ((tableCell.childWidgets[1] as TableWidget).childWidgets[0] as TableRowWidget).childWidgets[0] as TableCellWidget;
        let nestedTableCellTwo : TableCellWidget = nestedTableCellOne.nextRenderedWidget as TableCellWidget;

        expect(nestedTableCellOne.cellFormat.preferredWidthType).toBe('Point');
        expect(nestedTableCellOne.cellFormat.preferredWidth).toBe(30);
        expect(nestedTableCellTwo.cellFormat.preferredWidthType).toBe('Percent');
        expect(nestedTableCellTwo.cellFormat.preferredWidth).toBe(70);

        // after sfdt export, table cell different width unit values changed into unique values(Point) 
        let exportNestedTableSfdt: any = editor.serialize();
        editor.openBlank();
        editor.open(exportNestedTableSfdt);
        table = (editor.documentHelper.pages[0].bodyWidgets[0] as BodyWidget).childWidgets[0] as TableWidget;
        tableCell = (table.childWidgets[0] as TableRowWidget).childWidgets[1] as TableCellWidget;

        nestedTableCellOne = ((tableCell.childWidgets[1] as TableWidget).childWidgets[0] as TableRowWidget).childWidgets[0] as TableCellWidget;
        nestedTableCellTwo = nestedTableCellOne.nextRenderedWidget as TableCellWidget;

        expect(tableCell.cellFormat.preferredWidthType).toBe('Point');
        expect(tableCell.cellFormat.preferredWidth).toBe(463.32);

        expect(nestedTableCellOne.cellFormat.preferredWidthType).toBe('Point');
        expect(nestedTableCellOne.cellFormat.preferredWidth).toBe(39.11521064863841);
        expect(nestedTableCellTwo.cellFormat.preferredWidthType).toBe('Point');
        expect(nestedTableCellTwo.cellFormat.preferredWidth).toBe(408.8795891625341);

    });
});