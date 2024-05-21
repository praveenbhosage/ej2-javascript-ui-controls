/**
 * Indents plugin spec
 */
import { createElement, detach, isNullOrUndefined } from '@syncfusion/ej2-base';
import { EditorManager } from '../../../src/editor-manager/index';

describe('Indents plugin', () => {

    describe(' apply Indents testing', () => {
        let editorObj: EditorManager;

        let elem: HTMLElement = createElement('div', {
            id: 'dom-node', innerHTML: `
        <div style="color:red;" id="content-edit" contenteditable="true" class="e-node-deletable e-node-inner">
          <p class='first-p-node'>dom node
           <a href="https://www.google.com" tabindex="1">Google</a>
           <label>First label Node</label>
           </p>
           <p class='last-p-node'>
             <label>Last Label Node</label>
           </p>
         </div>
         ` });
        beforeAll(() => {
            document.body.appendChild(elem);
            editorObj = new EditorManager({ document: document, editableElement: document.getElementById("content-edit") });
        });

        it(' increase indents format', () => {
            let elem: HTMLElement = editorObj.editableElement as HTMLElement;
            let start: HTMLElement = elem.querySelector('p');
            let end: HTMLElement = elem.querySelector('label');
            editorObj.nodeSelection.setSelectionText(document, start.childNodes[0], end, 0, 0);
            editorObj.execCommand("Indents", 'Indent', null);
            expect(start.style.marginLeft === '20px').toBe(true);
            editorObj.execCommand("Indents", 'Indent', null);
            expect(start.style.marginLeft === '40px').toBe(true);
            start.style.marginLeft = '';
            editorObj.nodeSelection.Clear(document);

            start = elem.querySelector('.first-p-node');
            end = elem.querySelector('.last-p-node');
            editorObj.nodeSelection.setSelectionText(document, start.childNodes[0], end, 0, 0);
            editorObj.execCommand("Indents", 'Indent', null);
            expect(start.style.marginLeft === '20px').toBe(true);
            expect(end.style.marginLeft === '20px').toBe(true);

            editorObj.execCommand("Indents", 'Indent', null);
            expect(start.style.marginLeft === '40px').toBe(true);
            expect(end.style.marginLeft === '40px').toBe(true);
            start.style.marginLeft = '';
            end.style.marginLeft = '';
            editorObj.nodeSelection.Clear(document);
        });

        it(' Outdent format', () => {
            let elem: HTMLElement = editorObj.editableElement as HTMLElement;
            let start: HTMLElement = elem.querySelector('p');
            let end: HTMLElement = elem.querySelector('label');
            editorObj.nodeSelection.setSelectionText(document, start.childNodes[0], end, 0, 0);
            editorObj.execCommand("Indents", 'Indent', null);
            expect(start.style.marginLeft === '20px').toBe(true);
            editorObj.execCommand("Indents", 'Indent', null);
            expect(start.style.marginLeft === '40px').toBe(true);

            editorObj.execCommand("Indents", 'Outdent', null);
            expect(start.style.marginLeft === '20px').toBe(true);
            editorObj.execCommand("Indents", 'Outdent', null);
            expect(start.style.marginLeft === '0px').toBe(true);

            editorObj.execCommand("Indents", 'Outdent', null);
            expect(start.style.marginLeft === '').toBe(true);

            start.style.marginLeft = '';
            editorObj.nodeSelection.Clear(document);

            start = elem.querySelector('.first-p-node');
            end = elem.querySelector('.last-p-node');
            editorObj.nodeSelection.setSelectionText(document, start.childNodes[0], end, 0, 0);
            editorObj.execCommand("Indents", 'Indent', null);
            expect(start.style.marginLeft === '20px').toBe(true);
            expect(end.style.marginLeft === '20px').toBe(true);

            editorObj.execCommand("Indents", 'Outdent', null);
            expect(start.style.marginLeft === '0px').toBe(true);
            expect(end.style.marginLeft === '0px').toBe(true);

            editorObj.execCommand("Indents", 'Outdent', null);
            expect(start.style.marginLeft === '').toBe(true);
            expect(end.style.marginLeft === '').toBe(true);

            start.style.marginLeft = '';
            end.style.marginLeft = '';
            editorObj.nodeSelection.Clear(document);
        });
        afterAll(() => {
            detach(elem);
        });
    });

    describe(' RTL - apply Indents testing', () => {
        let editorObj: EditorManager;

        let elem: HTMLElement = createElement('div', {
            id: 'dom-node', innerHTML: `
        <div style="color:red;" id="content-edit" contenteditable="true" class="e-node-deletable e-node-inner e-rtl">
          <p class='first-p-node'>dom node
           <a href="https://www.google.com" tabindex="1">Google</a>
           <label>First label Node</label>
           </p>
           <p class='last-p-node'>
             <label>Last Label Node</label>
           </p>
         </div>
         ` });
        beforeAll(() => {
            document.body.appendChild(elem);
            editorObj = new EditorManager({ document: document, editableElement: document.getElementById("content-edit") });
        });

        it(' increase indents format', () => {
            let elem: HTMLElement = editorObj.editableElement as HTMLElement;
            let start: HTMLElement = elem.querySelector('p');
            let end: HTMLElement = elem.querySelector('label');
            editorObj.nodeSelection.setSelectionText(document, start.childNodes[0], end, 0, 0);
            editorObj.execCommand("Indents", 'Indent', null);
            expect(start.style.marginRight === '20px').toBe(true);
            editorObj.execCommand("Indents", 'Indent', null);
            expect(start.style.marginRight === '40px').toBe(true);
            start.style.marginRight = '';
            editorObj.nodeSelection.Clear(document);

            start = elem.querySelector('.first-p-node');
            end = elem.querySelector('.last-p-node');
            editorObj.nodeSelection.setSelectionText(document, start.childNodes[0], end, 0, 0);
            editorObj.execCommand("Indents", 'Indent', null);
            expect(start.style.marginRight === '20px').toBe(true);
            expect(end.style.marginRight === '20px').toBe(true);

            editorObj.execCommand("Indents", 'Indent', null);
            expect(start.style.marginRight === '40px').toBe(true);
            expect(end.style.marginRight === '40px').toBe(true);
            start.style.marginRight = '';
            end.style.marginRight = '';
            editorObj.nodeSelection.Clear(document);
        });

        it(' Outdent format', () => {
            let elem: HTMLElement = editorObj.editableElement as HTMLElement;
            let start: HTMLElement = elem.querySelector('p');
            let end: HTMLElement = elem.querySelector('label');
            editorObj.nodeSelection.setSelectionText(document, start.childNodes[0], end, 0, 0);
            editorObj.execCommand("Indents", 'Indent', null);
            expect(start.style.marginRight === '20px').toBe(true);
            editorObj.execCommand("Indents", 'Indent', null);
            expect(start.style.marginRight === '40px').toBe(true);

            editorObj.execCommand("Indents", 'Outdent', null);
            expect(start.style.marginRight === '20px').toBe(true);
            editorObj.execCommand("Indents", 'Outdent', null);
            expect(start.style.marginRight === '0px').toBe(true);

            editorObj.execCommand("Indents", 'Outdent', null);
            expect(start.style.marginRight === '').toBe(true);

            start.style.marginRight = '';
            editorObj.nodeSelection.Clear(document);

            start = elem.querySelector('.first-p-node');
            end = elem.querySelector('.last-p-node');
            editorObj.nodeSelection.setSelectionText(document, start.childNodes[0], end, 0, 0);
            editorObj.execCommand("Indents", 'Indent', null);
            expect(start.style.marginRight === '20px').toBe(true);
            expect(end.style.marginRight === '20px').toBe(true);

            editorObj.execCommand("Indents", 'Outdent', null);
            expect(start.style.marginRight === '0px').toBe(true);
            expect(end.style.marginRight === '0px').toBe(true);

            editorObj.execCommand("Indents", 'Outdent', null);
            expect(start.style.marginRight === '').toBe(true);
            expect(end.style.marginRight === '').toBe(true);

            start.style.marginRight = '';
            end.style.marginRight = '';
            editorObj.nodeSelection.Clear(document);
        });
        afterAll(() => {
            detach(elem);
        });
    });

    describe(' apply Indents to List element testing', () => {
        let editorObj: EditorManager;

        let elem: HTMLElement = createElement('div', {
            id: 'dom-node', innerHTML: `
            <div style="color:red;" id="content-edit" contenteditable="true" class="e-node-deletable e-node-inner">
            <ul class='ul-first-node'><li><p class='first-p-node'>one-node</p></li><li><p class='second-p-node'>two-node</p></li><li><p class='third-p-node'>third-node</p></li><li>fifth-node</li></ul><p class='fourth-p-node'>fourth node</p>
         </div>
            ` });
        beforeAll(() => {
            document.body.appendChild(elem);
            editorObj = new EditorManager({ document: document, editableElement: document.getElementById("content-edit") });
        });

        it(' increase indents format to list', () => {
            let elem: HTMLElement = editorObj.editableElement as HTMLElement;
            let start: HTMLElement = elem.querySelector('.second-p-node');
            let end: HTMLElement = elem.querySelector('.fourth-p-node');
            editorObj.nodeSelection.setSelectionText(document, start.childNodes[0], end.childNodes[0], 0, 3);
            editorObj.execCommand("Indents", 'Indent', null);
            let ulList: HTMLElement = elem.querySelector('ul');
            expect(!isNullOrUndefined(ulList.querySelector('ul'))).toBe(true);
            let lastNode: HTMLElement = elem.querySelector('.fourth-p-node');
            expect(lastNode.style.marginLeft === '20px').toBe(true);
            editorObj.nodeSelection.Clear(document);
        });

        it(' Outdent format to list', () => {
            let elem: HTMLElement = editorObj.editableElement as HTMLElement;
            let start: HTMLElement = elem.querySelector('.second-p-node');
            let end: HTMLElement = start;
            editorObj.nodeSelection.setSelectionText(document, start.childNodes[0], end.childNodes[0], 0, 0);
            start = elem.querySelector('.second-p-node');
            expect(!isNullOrUndefined(start.parentElement.querySelector('ul'))).toBe(false);
            editorObj.execCommand("Indents", 'Outdent', null);
            start = elem.querySelector('.second-p-node');
            expect(!isNullOrUndefined(start.parentElement.querySelector('ul'))).toBe(true);
            editorObj.nodeSelection.Clear(document);
        });
        afterAll(() => {
            detach(elem);
        });
    });

    describe('RTL - apply Indents testing for RTL Mode', () => {
        let editorObj: EditorManager;
        let elem: HTMLElement = createElement('div', {
            id: 'dom-node', innerHTML: `
        <div style="color:red;" id="content-edit" contenteditable="true" class="e-node-deletable e-node-inner e-rtl">
          <p class='first-p-node'>dom node
           <a href="https://www.google.com" tabindex="1">Google</a>
           <label>First label Node</label>
           </p>
           <p class='last-p-node'>
             <label>Last Label Node</label>
           </p>
         </div>
         ` });
        beforeAll(() => {
            document.body.appendChild(elem);
            editorObj = new EditorManager({ document: document, editableElement: document.getElementById("content-edit") });
        });

        it('increase indents for RTL Mode', () => {
            let elem: HTMLElement = editorObj.editableElement as HTMLElement;
            let start: HTMLElement = elem.querySelector('p');
            let end: HTMLElement = elem.querySelector('label');
            editorObj.nodeSelection.setSelectionText(document, start.childNodes[0], end, 0, 0);
            editorObj.execCommand("Indents", 'Indent', null);
            expect(start.style.marginRight === '20px').toBe(true);
        });
        afterAll(() => {
            detach(elem);
        });
    });

    describe('873565 - Indent not working when enter key is configured as BR', () => {
        let editorObj: EditorManager;
        let editNode: HTMLElement;
        let startNode: HTMLElement;
        let endNode: HTMLElement;
        let elem: HTMLElement = createElement('div', {
            id: 'dom-node', innerHTML: `<div id="content-edit" contenteditable="true">Content 1&nbsp;<strong>line</strong><br><strong class="startFocus">Content 2 line</strong><br><strong class="endFocus">Content 3&nbsp;</strong>line<br>Content 4&nbsp;<strong>line</strong></div>`
        });
        beforeAll(() => {
            document.body.appendChild(elem);
            editorObj = new EditorManager({ document: document, editableElement: document.getElementById("content-edit") });
            editNode = editorObj.editableElement as HTMLElement;
        });
        it('Checking the indent when BR configured', () => {
            startNode = editNode.querySelector('.startFocus');
            endNode = editNode.querySelector('.endFocus').nextSibling as HTMLElement;
            editorObj.nodeSelection.setSelectionText(document, startNode.childNodes[0], endNode, 3, 3);
            editorObj.execCommand("Indents", 'Indent', null, null, null, null, null, 'BR');
            expect(editNode.innerHTML === `Content 1&nbsp;<strong>line</strong><br><div style="margin-left: 20px;"><strong class="startFocus">Content 2 line</strong></div><div style="margin-left: 20px;"><strong class="endFocus">Content 3&nbsp;</strong>line</div>Content 4&nbsp;<strong>line</strong>`).toBe(true);
        });

        it('Checking the indent with bold in the content ', () => {
            editNode.innerHTML = `Content 1 line<br>Content 2&nbsp;<strong class="startFocus">line&nbsp;</strong>extended<br>Content 3 line<br class="endFocus">Content 4 line`;
            startNode = editNode.querySelector('.startFocus').nextSibling as HTMLElement;
            endNode = editNode.querySelector('.endFocus').nextSibling as HTMLElement;
            editorObj.nodeSelection.setSelectionText(document, startNode, endNode, 3, 3);
            editorObj.execCommand("Indents", 'Indent', null, null, null, null, null, 'BR');
            expect(editNode.innerHTML === `Content 1 line<br><div style="margin-left: 20px;">Content 2&nbsp;<strong class="startFocus">line&nbsp;</strong>extended</div><div style="margin-left: 20px;">Content 3 line</div><div style="margin-left: 20px;">Content 4 line</div>`).toBe(true);
        });
        afterAll(() => {
            detach(elem);
        });
    });
});