import { createElement } from '@syncfusion/ej2-base';
import { Diagram } from '../../../src/diagram/diagram';
import { ConnectorModel } from '../../../src/diagram/objects/connector-model';
import { NodeModel, PathModel, FlowShapeModel, TextModel } from '../../../src/diagram/objects/node-model';
import { TextStyle } from '../../../src/diagram/core/appearance';
import { PointModel } from '../../../src/diagram/primitives/point-model';
import { Rect } from '../../../src/diagram/primitives/rect';
import { Matrix, transformPointByMatrix, identityMatrix, rotateMatrix } from '../../../src/diagram/primitives/matrix';
import { rotatePoint, cloneObject } from '../../../src/diagram/utility/base-util';
import { MouseEvents } from '../interaction/mouseevents.spec';
import { Node } from '../../../src/diagram/objects/node';
import { Connector } from '../../../src/diagram/objects/connector';
import { UndoRedo } from '../../../src/diagram/objects/undo-redo';
import { HistoryEntry, History } from '../../../src/diagram/diagram/history';
import { SnapConstraints, PointPortModel, AnnotationModel } from '../../../src/diagram/index';
import { PortConstraints, PortVisibility, ConnectorConstraints, NodeConstraints, DecoratorShapes } from '../../../src/diagram/enum/enum';
import { profile, inMB, getMemoryProfile } from '../../../spec/common.spec';
Diagram.Inject(UndoRedo);
/**
 * Interaction Specification Document
 */
describe('Diagram Control', () => {

    describe('Undo Redo for node and connector drag', () => {
        let diagram: Diagram;
        let ele: HTMLElement;

        let mouseEvents: MouseEvents = new MouseEvents();

        beforeAll((): void => {
            const isDef = (o: any) => o !== undefined && o !== null;
            if (!isDef(window.performance)) {
                console.log("Unsupported environment, window.performance.memory is unavailable");
                this.skip(); //Skips test (in Chai)
                return;
            }
            ele = createElement('div', { id: 'diagram12' });
            document.body.appendChild(ele);
            let selArray: (NodeModel | ConnectorModel)[] = [];
            let node: NodeModel = { id: 'node1', width: 100, height: 100, offsetX: 100, offsetY: 100 };

            let connector: ConnectorModel = { id: 'connector1', sourcePoint: { x: 200, y: 200 }, targetPoint: { x: 300, y: 300 } };

            diagram = new Diagram({
                width: '600', height: '530px', nodes: [node],
                connectors: [connector], snapSettings: { constraints: SnapConstraints.ShowLines }
            });

            diagram.appendTo('#diagram12');

        });

        afterAll((): void => {
            diagram.destroy();
            ele.remove();
        });


        it('Checking undo for node and connector  select the rubber band selection', (done: Function) => {

            let diagramCanvas: HTMLElement = document.getElementById(diagram.element.id + 'content');
            mouseEvents.dragAndDropEvent(diagramCanvas, 30, 30, 400, 400);

            expect(diagram.selectedItems.connectors.length === 1 && diagram.selectedItems.connectors[0].id === 'connector1' &&
                diagram.selectedItems.nodes.length === 1 && diagram.selectedItems.nodes[0].id === 'node1').toBe(true);
            mouseEvents.dragAndDropEvent(diagramCanvas, 150, 150, 100, 100);
            diagram.undo();
            expect(diagram.selectedItems.nodes[0].offsetX === 100 && diagram.selectedItems.nodes[0].offsetY === 100 &&
                diagram.selectedItems.connectors[0].wrapper.offsetX === 250 && diagram.selectedItems.connectors[0].wrapper.offsetY === 250).toBe(true);
            done();

        });

        it('Checking redo for node and connector  select the rubber band selection', (done: Function) => {
            diagram.redo();
            expect(diagram.selectedItems.nodes[0].offsetX == 50 && diagram.selectedItems.nodes[0].offsetY == 50 &&
                diagram.selectedItems.connectors[0].wrapper.offsetX === 200 && diagram.selectedItems.connectors[0].wrapper.offsetY === 200).toBe(true);
            done();
        });

        it('Checking undo, after redo function for node and connector  drag', (done: Function) => {
            let diagramCanvas: HTMLElement = document.getElementById(diagram.element.id + 'content');

            mouseEvents.dragAndDropEvent(diagramCanvas, 50, 50, 400, 400);
            diagram.undo();
            expect(diagram.selectedItems.nodes[0].offsetX == 50 && diagram.selectedItems.nodes[0].offsetY == 50 &&
                diagram.selectedItems.connectors[0].wrapper.offsetX === 200 && diagram.selectedItems.connectors[0].wrapper.offsetY === 200).toBe(true);
            done();
        });


        it('Checking undo for single node dragging', (done: Function) => {

            let diagramCanvas: HTMLElement = document.getElementById(diagram.element.id + 'content');

            mouseEvents.clickEvent(diagramCanvas, 250, 250, true);

            expect(diagram.selectedItems.connectors.length === 0 &&
                diagram.selectedItems.nodes.length === 1 && diagram.selectedItems.nodes[0].id === 'node1').toBe(true);
            mouseEvents.dragAndDropEvent(diagramCanvas, 50, 50, 400, 400);

            diagram.undo();
            expect(diagram.selectedItems.nodes[0].offsetX === 50 && diagram.selectedItems.nodes[0].offsetY === 50).toBe(true);
            done();

        });
        it('Checking redo for single node dragging', (done: Function) => {
            diagram.redo();
            expect(diagram.selectedItems.nodes[0].offsetX === 400 && diagram.selectedItems.nodes[0].offsetY === 400).toBe(true);
            done();
        });
    });

    describe('Testing Undo Redo for Resizing', () => {
        let diagram: Diagram;
        let ele: HTMLElement;

        let mouseEvents: MouseEvents = new MouseEvents();

        beforeAll((): void => {
            const isDef = (o: any) => o !== undefined && o !== null;
            if (!isDef(window.performance)) {
                console.log("Unsupported environment, window.performance.memory is unavailable");
                this.skip(); //Skips test (in Chai)
                return;
            }
            ele = createElement('div', { id: 'diagram4' });
            document.body.appendChild(ele);
            let selArray: (NodeModel | ConnectorModel)[] = [];
            let redoTopLeft1: PointModel
            let node: NodeModel = {
                id: 'node1', width: 100, height: 100, offsetX: 300, offsetY: 300,
                minWidth: 40, maxWidth: 500, minHeight: 40, maxHeight: 500
            };

            let node2: NodeModel = { id: 'node2', width: 100, height: 100, offsetX: 300, offsetY: 500 };


            diagram = new Diagram({
                width: 600, height: '530px', nodes: [node, node2], snapSettings: { constraints: SnapConstraints.ShowLines }

            });

            diagram.appendTo('#diagram4');
            selArray.push(diagram.nodes[0]);
            diagram.select(selArray);
        });

        afterAll((): void => {
            diagram.destroy();
            ele.remove();
        });

        it('Checking undo after single node resizing', (done: Function) => {

            let diagramCanvas: HTMLElement = document.getElementById(diagram.element.id + 'content');

            let offsetLeft: number = diagram.element.offsetLeft;
            let offsetTop: number = diagram.element.offsetTop;

            //increasing size
            let undoTopLeft1: PointModel = (diagram.nodes[0] as NodeModel).wrapper.bounds.topLeft;
            mouseEvents.clickEvent(diagramCanvas, 300, 300);

            mouseEvents.dragAndDropEvent(diagramCanvas, undoTopLeft1.x, undoTopLeft1.y, undoTopLeft1.x - 10, undoTopLeft1.y - 10);
            let redoTopLeft1: PointModel = (diagram.nodes[0] as NodeModel).wrapper.bounds.topLeft;

            diagram.undo();
            expect((diagram.nodes[0] as NodeModel).wrapper.bounds.topLeft.x === undoTopLeft1.x &&
                (diagram.nodes[0] as NodeModel).wrapper.bounds.topLeft.y === undoTopLeft1.y).toBe(true);
            done();
        });

        it('Checking redo  after undo single node resizing', (done: Function) => {
            diagram.redo();
            expect((diagram.nodes[0] as NodeModel).wrapper.bounds.topLeft.x === 250 &&
                (diagram.nodes[0] as NodeModel).wrapper.bounds.topLeft.y === 250).toBe(true);
            done();
        });
    });

    describe('Testing undo Redo Rotation - Multiple selection', () => {
        let diagram: Diagram;
        let ele: HTMLElement;

        let mouseEvents: MouseEvents = new MouseEvents();

        beforeAll((): void => {
            const isDef = (o: any) => o !== undefined && o !== null;
            if (!isDef(window.performance)) {
                console.log("Unsupported environment, window.performance.memory is unavailable");
                this.skip(); //Skips test (in Chai)
                return;
            }
            ele = createElement('div', { id: 'diagram10' });
            document.body.appendChild(ele);
            let selArray: (NodeModel | ConnectorModel)[] = [];
            let node: NodeModel = { id: 'node1', width: 100, height: 100, offsetX: 300, offsetY: 300 };

            let node2: NodeModel = { id: 'node2', width: 100, height: 100, offsetX: 300, offsetY: 500 };

            let connector: ConnectorModel = { id: 'connector1', sourcePoint: { x: 400, y: 400 }, targetPoint: { x: 500, y: 500 } };


            diagram = new Diagram({
                width: 600, height: '530px', nodes: [node, node2],
                connectors: [connector], snapSettings: { constraints: SnapConstraints.ShowLines }
            });

            diagram.appendTo('#diagram10');
        });

        afterAll((): void => {
            diagram.destroy();
            ele.remove();
        });

        it('Checking undo after rotation - multiple selection', (done: Function) => {

            let diagramCanvas: HTMLElement = document.getElementById(diagram.element.id + 'content');

            mouseEvents.clickEvent(diagramCanvas, 300, 300, true);

            mouseEvents.clickEvent(diagramCanvas, 300, 500, true);

            mouseEvents.clickEvent(diagramCanvas, 400 + 8, 400 + 8, true);

            let bounds: Rect = diagram.selectedItems.wrapper.bounds;
            let rotator: PointModel = { x: bounds.center.x, y: bounds.y - 30 };

            let matrix: Matrix = identityMatrix();
            rotateMatrix(matrix, 320, bounds.center.x, bounds.center.y);

            let endPoint: PointModel = transformPointByMatrix(matrix, rotator);

            mouseEvents.dragAndDropEvent(diagramCanvas, rotator.x + 8, rotator.y + 8, endPoint.x + 8, endPoint.y + 8);

            diagram.undo();
            expect(diagram.nodes[0].rotateAngle == 0).toBe(true);
            done();
        });
        it('Checking redo after undo rotation - multiple selection', (done: Function) => {
            diagram.redo();
            console.log("rotate angle",diagram.nodes[0].rotateAngle);
            expect(diagram.nodes[0].rotateAngle == 319.9502722342918).toBe(true);
            done();
        });
    });

    describe('Testing undo redo after resizing - Multiple selection', () => {
        let diagram: Diagram;
        let ele: HTMLElement;

        let mouseEvents: MouseEvents = new MouseEvents();

        beforeAll((): void => {
            const isDef = (o: any) => o !== undefined && o !== null;
            if (!isDef(window.performance)) {
                console.log("Unsupported environment, window.performance.memory is unavailable");
                this.skip(); //Skips test (in Chai)
                return;
            }
            ele = createElement('div', { id: 'diagram11' });
            document.body.appendChild(ele);
            let selArray: (NodeModel | ConnectorModel)[] = [];
            let node: NodeModel = { id: 'node1', width: 100, height: 100, offsetX: 300, offsetY: 300 };

            let node2: NodeModel = { id: 'node2', width: 100, height: 100, offsetX: 300, offsetY: 500 };


            diagram = new Diagram({
                width: '600px', height: '530px', nodes: [node, node2],
                connectors: [{ id: 'connector1', sourcePoint: { x: 400, y: 400 }, targetPoint: { x: 500, y: 500 } }],
                snapSettings: { constraints: SnapConstraints.ShowLines }
            });

            diagram.appendTo('#diagram11');
        });

        afterAll((): void => {
            diagram.destroy();
            ele.remove();
        });

        it('Checking undo after resizing - multiple selection', (done: Function) => {

            let diagramCanvas: HTMLElement = document.getElementById(diagram.element.id + 'content');
            mouseEvents.clickEvent(diagramCanvas, 300, 300);
            mouseEvents.clickEvent(diagramCanvas, 300, 500, true);
            mouseEvents.clickEvent(diagramCanvas, 400 + 8, 400 + 8, true);
            let topLeft: PointModel = diagram.selectedItems.wrapper.bounds.bottomRight;
            let width: number = diagram.selectedItems.width;
            let height: number = diagram.selectedItems.height;
            let offsetX: number = diagram.selectedItems.offsetX;
            let offsetY: number = diagram.selectedItems.offsetY;
            mouseEvents.dragAndDropEvent(diagramCanvas, topLeft.x+diagram.element.offsetLeft, topLeft.y+diagram.element.offsetTop, topLeft.x + 20, topLeft.y + 20);
            let topLeft1: PointModel = (diagram.nodes[0] as NodeModel).wrapper.bounds.middleRight;
            diagram.undo();
            diagram.selectAll();
            expect(diagram.selectedItems.width == width && diagram.selectedItems.height == height &&
                diagram.selectedItems.offsetX == offsetX && diagram.selectedItems.offsetY == offsetY).toBe(true);
            done();
        });
        it('Checking redo after undo resizing - multiple selection', (done: Function) => {

            diagram.redo();
            console.log("SelectedItems",diagram.selectedItems.width,diagram.selectedItems.height,diagram.selectedItems.offsetX,diagram.selectedItems.offsetY  )
            expect(diagram.selectedItems.width == 262 && diagram.selectedItems.height == 312 &&
                diagram.selectedItems.offsetX == 381 && diagram.selectedItems.offsetY == 406).toBe(true);
            done();
        });
    });


    describe('Undo Redo for Connector End Dragging - source point', () => {
        let diagram: Diagram;
        let ele: HTMLElement;

        let mouseEvents: MouseEvents = new MouseEvents();

        beforeAll((): void => {
            const isDef = (o: any) => o !== undefined && o !== null;
            if (!isDef(window.performance)) {
                console.log("Unsupported environment, window.performance.memory is unavailable");
                this.skip(); //Skips test (in Chai)
                return;
            }
            ele = createElement('div', { id: 'diagrambab' });
            document.body.appendChild(ele);
            let selArray: (NodeModel | ConnectorModel)[] = [];

            let connector: ConnectorModel = { id: 'connector1', sourcePoint: { x: 200, y: 200 }, targetPoint: { x: 300, y: 300 } };

            diagram = new Diagram({
                width: '600px', height: '530px',
                connectors: [connector], snapSettings: { constraints: SnapConstraints.ShowLines }
            });

            diagram.appendTo('#diagrambab');
            selArray.push(diagram.connectors[0]);
            diagram.select(selArray);
        });

        afterAll((): void => {
            diagram.destroy();
            ele.remove();
        });

        it('Checking undo after sourcePoint dragging', (done: Function) => {

            let diagramCanvas: HTMLElement = document.getElementById(diagram.element.id + 'content');
            let sPointX = diagram.selectedItems.connectors[0].sourcePoint.x;
            let sPointY = diagram.selectedItems.connectors[0].sourcePoint.y;
            let tPointX = diagram.selectedItems.connectors[0].targetPoint.x;
            let tPointY = diagram.selectedItems.connectors[0].targetPoint.y;
            mouseEvents.dragAndDropEvent(diagramCanvas, 200, 200, 180, 180);
            diagram.undo();
            expect(diagram.selectedItems.connectors.length === 1 && diagram.selectedItems.connectors[0].sourcePoint.x === sPointX &&
                diagram.selectedItems.connectors[0].sourcePoint.y === sPointY && diagram.selectedItems.connectors[0].targetPoint.x === tPointX
                && diagram.selectedItems.connectors[0].targetPoint.y === tPointY).toBe(true);
            done();
        });

        it('Checking redo after undo sourcePoint dragging', (done: Function) => {
            diagram.redo();
            expect(diagram.selectedItems.connectors.length === 1 && diagram.selectedItems.connectors[0].sourcePoint.x === 180 &&
                diagram.selectedItems.connectors[0].sourcePoint.y === 180 && diagram.selectedItems.connectors[0].targetPoint.x === 280
                && diagram.selectedItems.connectors[0].targetPoint.y === 280).toBe(true);
            done();
        });
    });

    describe('Undo Redo for Connector End Dragging - target point', () => {
        let diagram: Diagram;
        let ele: HTMLElement;

        let mouseEvents: MouseEvents = new MouseEvents();

        beforeAll((): void => {
            const isDef = (o: any) => o !== undefined && o !== null;
            if (!isDef(window.performance)) {
                console.log("Unsupported environment, window.performance.memory is unavailable");
                this.skip(); //Skips test (in Chai)
                return;
            }
            ele = createElement('div', { id: 'diagrambac' });
            document.body.appendChild(ele);
            let selArray: (NodeModel | ConnectorModel)[] = [];

            let connector: ConnectorModel = { id: 'connector1', sourcePoint: { x: 200, y: 200 }, targetPoint: { x: 300, y: 300 } };

            diagram = new Diagram({
                width: '600px', height: '530px',
                connectors: [connector], snapSettings: { constraints: SnapConstraints.ShowLines }
            });

            diagram.appendTo('#diagrambac');
            selArray.push(diagram.connectors[0]);
            diagram.select(selArray);
        });

        afterAll((): void => {
            diagram.destroy();
            ele.remove();
        });

        it('Checking undo after targetPoint dragging', (done: Function) => {

            let diagramCanvas: HTMLElement = document.getElementById(diagram.element.id + 'content');
            let sPointX = diagram.selectedItems.connectors[0].sourcePoint.x;
            let sPointY = diagram.selectedItems.connectors[0].sourcePoint.y;
            let tPointX = diagram.selectedItems.connectors[0].targetPoint.x;
            let tPointY = diagram.selectedItems.connectors[0].targetPoint.y;
            mouseEvents.dragAndDropEvent(diagramCanvas, 300, 300, 320, 320);
            diagram.undo();
            expect(diagram.selectedItems.connectors.length === 1 && diagram.selectedItems.connectors[0].sourcePoint.x === sPointX &&
                diagram.selectedItems.connectors[0].sourcePoint.y === sPointY && diagram.selectedItems.connectors[0].targetPoint.x === tPointX
                && diagram.selectedItems.connectors[0].targetPoint.y === tPointY).toBe(true);
            done();
        });

        it('Checking redo after undo the targetPoint dragging', (done: Function) => {
            diagram.redo();
            expect(diagram.selectedItems.connectors.length === 1 && diagram.selectedItems.connectors[0].sourcePoint.x === 220 &&
                diagram.selectedItems.connectors[0].sourcePoint.y === 220 &&
                diagram.selectedItems.connectors[0].targetPoint.x === 320
                && diagram.selectedItems.connectors[0].targetPoint.y === 320).toBe(true);
            done();
        });
    });

    describe('Undo Redo for node dragging - multiple undo', () => {
        let diagram: Diagram;
        let ele: HTMLElement;

        let mouseEvents: MouseEvents = new MouseEvents();

        beforeAll((): void => {
            const isDef = (o: any) => o !== undefined && o !== null;
            if (!isDef(window.performance)) {
                console.log("Unsupported environment, window.performance.memory is unavailable");
                this.skip(); //Skips test (in Chai)
                return;
            }
            ele = createElement('div', { id: 'diagrambab' });
            document.body.appendChild(ele);
            let selArray: (NodeModel | ConnectorModel)[] = [];
            let node: NodeModel = { id: 'node1', width: 100, height: 100, offsetX: 100, offsetY: 100 };

            diagram = new Diagram({
                width: 1500, height: 600, nodes: [node], snapSettings: { constraints: SnapConstraints.ShowLines }
            });
            diagram.appendTo('#diagrambab');
        });

        afterAll((): void => {
            diagram.destroy();
            ele.remove();
        });

        it('Checking undo after undo and node dragging', (done: Function) => {
            let diagramCanvas: HTMLElement = document.getElementById(diagram.element.id + 'content');
            mouseEvents.dragAndDropEvent(diagramCanvas, 100, 100, 200, 100);
            mouseEvents.dragAndDropEvent(diagramCanvas, 200, 100, 300, 100);
            mouseEvents.dragAndDropEvent(diagramCanvas, 300, 100, 400, 100);
            diagram.undo();
            mouseEvents.dragAndDropEvent(diagramCanvas, 300, 100, 300, 200);
            diagram.undo();
            expect(diagram.selectedItems.nodes[0].offsetX == 300 && diagram.selectedItems.nodes[0].offsetY == 100).toBe(true);
            done();
        });
    });
    describe('Undo Redo - Nodes with alignment left', () => {
        let diagram: Diagram;
        let ele: HTMLElement;

        beforeAll((): void => {
            const isDef = (o: any) => o !== undefined && o !== null;
            if (!isDef(window.performance)) {
                console.log("Unsupported environment, window.performance.memory is unavailable");
                this.skip(); //Skips test (in Chai)
                return;
            }
            ele = createElement('div', { id: 'diagram' });
            document.body.appendChild(ele);
            let connector: ConnectorModel = {
                id: 'connector1', sourcePoint: { x: 400, y: 500 }, targetPoint: { x: 600, y: 500 }
            };
            let node: NodeModel = {
                id: 'node1', width: 130, height: 100, offsetX: 100, offsetY: 100,
                annotations: [{ content: 'Node1', style: { strokeColor: 'black', opacity: 1 } }]
            };
            let node2: NodeModel = {
                id: 'node2', width: 100, height: 100, offsetX: 300, offsetY: 200,
                annotations: [{ content: 'Node2', style: { strokeColor: 'black', opacity: 1 } }]
            };
            let node3: NodeModel = {
                id: 'node3', width: 80, height: 100, offsetX: 200, offsetY: 450,
                annotations: [{ content: 'Node3', style: { strokeColor: 'black', opacity: 1 } }]
            };
            let node4: NodeModel = {
                id: 'node4', width: 150, height: 70, offsetX: 400, offsetY: 350,
                annotations: [{ content: 'Node4', style: { strokeColor: 'black', opacity: 1 } }]
            };
            diagram = new Diagram({
                width: '1000px', height: '530px', nodes: [node, node2, node3, node4],
                connectors: [connector], snapSettings: { constraints: SnapConstraints.ShowLines }
            });
            diagram.appendTo('#diagram');
            let objects: (NodeModel | ConnectorModel)[] = [];
            objects.push(diagram.nodes[0], diagram.nodes[1], diagram.nodes[2], diagram.nodes[3], diagram.connectors[0]);
            diagram.align('Left', objects);
            diagram.dataBind();
        });

        afterAll((): void => {
            diagram.destroy();
            ele.remove();
        });

        it('Checking Undo - Nodes with alignment left', (done: Function) => {
            diagram.undo();
            expect((diagram.nodes[0].offsetX === 100 && diagram.nodes[0].offsetY === 100) &&
                (diagram.nodes[1].offsetX === 300 && diagram.nodes[1].offsetY === 200) &&
                (diagram.nodes[2].offsetX === 200 && diagram.nodes[2].offsetY === 450) &&
                (diagram.nodes[3].offsetX === 400 && diagram.nodes[3].offsetY === 350) &&
                (diagram.connectors[0].sourcePoint.x === 400 && diagram.connectors[0].sourcePoint.y === 500) &&
                (diagram.connectors[0].targetPoint.x === 600 && diagram.connectors[0].targetPoint.y === 500)).toBe(true);
            done();
        });
        it('Checking Redo - Nodes with alignment left', (done: Function) => {
            diagram.redo();
            expect((diagram.nodes[0].offsetX === 100 && diagram.nodes[0].offsetY === 100) &&
                (diagram.nodes[1].offsetX === 85 && diagram.nodes[1].offsetY === 200) &&
                (diagram.nodes[2].offsetX === 75 && diagram.nodes[2].offsetY === 450) &&
                (diagram.nodes[3].offsetX === 110 && diagram.nodes[3].offsetY === 350) &&
                (diagram.connectors[0].sourcePoint.x === 35 && diagram.connectors[0].sourcePoint.y === 500) &&
                (diagram.connectors[0].targetPoint.x === 235 && diagram.connectors[0].targetPoint.y === 500)).toBe(true);
            done();
        });
    });
    describe('Undo Redo - Nodes with alignment Right', () => {
        let diagram: Diagram;
        let ele: HTMLElement;

        beforeAll((): void => {
            const isDef = (o: any) => o !== undefined && o !== null;
            if (!isDef(window.performance)) {
                console.log("Unsupported environment, window.performance.memory is unavailable");
                this.skip(); //Skips test (in Chai)
                return;
            }
            ele = createElement('div', { id: 'diagram1' });
            document.body.appendChild(ele);
            let selArray: (NodeModel | ConnectorModel)[] = [];
            let connector: ConnectorModel = {
                id: 'connector1', sourcePoint: { x: 400, y: 500 }, targetPoint: { x: 600, y: 500 }
            };
            let node: NodeModel = {
                id: 'node1', width: 130, height: 100, offsetX: 100, offsetY: 100,
                annotations: [{ content: 'Node1', style: { strokeColor: 'black', opacity: 1 } }]
            };
            let node2: NodeModel = {
                id: 'node2', width: 100, height: 100, offsetX: 300, offsetY: 200,
                annotations: [{ content: 'Node2', style: { strokeColor: 'black', opacity: 1 } }]
            };
            let node3: NodeModel = {
                id: 'node3', width: 80, height: 100, offsetX: 200, offsetY: 450,
                annotations: [{ content: 'Node3', style: { strokeColor: 'black', opacity: 1 } }]
            };
            let node4: NodeModel = {
                id: 'node4', width: 150, height: 70, offsetX: 400, offsetY: 350,
                annotations: [{ content: 'Node4', style: { strokeColor: 'black', opacity: 1 } }]
            };
            diagram = new Diagram({
                width: '1000px', height: '530px', nodes: [node, node2, node3, node4],
                connectors: [connector], snapSettings: { constraints: SnapConstraints.ShowLines }
            });
            diagram.appendTo('#diagram1');
            let objects: (NodeModel | ConnectorModel)[] = [];
            objects.push(diagram.nodes[0], diagram.nodes[1], diagram.nodes[2], diagram.nodes[3], diagram.connectors[0]);
            diagram.align('Right', objects);
            diagram.dataBind();
        });

        afterAll((): void => {
            diagram.destroy();
            ele.remove();
        });

        it('Checking Undo - Nodes with alignment Right', (done: Function) => {
            diagram.undo();
            expect((diagram.nodes[0].offsetX === 100 && diagram.nodes[0].offsetY === 100) &&
                (diagram.nodes[1].offsetX === 300 && diagram.nodes[1].offsetY === 200) &&
                (diagram.nodes[2].offsetX === 200 && diagram.nodes[2].offsetY === 450) &&
                (diagram.nodes[3].offsetX === 400 && diagram.nodes[3].offsetY === 350)).toBe(true);
            done();
        });
        it('Checking Redo - Nodes with alignment Right', (done: Function) => {
            diagram.redo();
            expect((diagram.nodes[0].offsetX === 100 && diagram.nodes[0].offsetY === 100) &&
                (diagram.nodes[1].offsetX === 115 && diagram.nodes[1].offsetY === 200) &&
                (diagram.nodes[2].offsetX === 125 && diagram.nodes[2].offsetY === 450) &&
                (diagram.nodes[3].offsetX === 90 && diagram.nodes[3].offsetY === 350)).toBe(true);
            done();
        });
    });
    describe('Undo Redo - Nodes with alignment Top', () => {
        let diagram: Diagram;
        let ele: HTMLElement;

        beforeAll((): void => {
            const isDef = (o: any) => o !== undefined && o !== null;
            if (!isDef(window.performance)) {
                console.log("Unsupported environment, window.performance.memory is unavailable");
                this.skip(); //Skips test (in Chai)
                return;
            }
            ele = createElement('div', { id: 'diagram3' });
            document.body.appendChild(ele);
            let connector: ConnectorModel = {
                id: 'connector1', sourcePoint: { x: 400, y: 500 }, targetPoint: { x: 600, y: 500 }
            };
            let node: NodeModel = {
                id: 'node1', width: 130, height: 100, offsetX: 100, offsetY: 100,
                annotations: [{ content: 'Node1', style: { strokeColor: 'black', opacity: 1 } }]
            };
            let node2: NodeModel = {
                id: 'node2', width: 100, height: 120, offsetX: 300, offsetY: 200,
                annotations: [{ content: 'Node2', style: { strokeColor: 'black', opacity: 1 } }]
            };
            let node3: NodeModel = {
                id: 'node3', width: 80, height: 100, offsetX: 200, offsetY: 450,
                annotations: [{ content: 'Node3', style: { strokeColor: 'black', opacity: 1 } }]
            };
            let node4: NodeModel = {
                id: 'node4', width: 150, height: 70, offsetX: 400, offsetY: 350,
                annotations: [{ content: 'Node4', style: { strokeColor: 'black', opacity: 1 } }]
            };
            diagram = new Diagram({
                width: '1000px', height: '530px', nodes: [node, node2, node3, node4],
                connectors: [connector], snapSettings: { constraints: SnapConstraints.ShowLines }
            });
            diagram.appendTo('#diagram3');
            let objects: (NodeModel | ConnectorModel)[] = [];
            objects.push(diagram.nodes[0], diagram.nodes[1], diagram.nodes[2], diagram.nodes[3], diagram.connectors[0]);
            diagram.align('Top', objects);
            diagram.dataBind();

        });

        afterAll((): void => {
            diagram.destroy();
            ele.remove();
        });

        it('Checking Undo Redo - Nodes with alignment Top', (done: Function) => {
            diagram.undo();
            expect((diagram.nodes[0].offsetX === 100 && diagram.nodes[0].offsetY === 100) &&
                (diagram.nodes[1].offsetX === 300 && diagram.nodes[1].offsetY === 200) &&
                (diagram.nodes[2].offsetX === 200 && diagram.nodes[2].offsetY === 450) &&
                (diagram.nodes[3].offsetX === 400 && diagram.nodes[3].offsetY === 350) &&
                (diagram.connectors[0].sourcePoint.x === 400 && diagram.connectors[0].sourcePoint.y === 500) &&
                (diagram.connectors[0].targetPoint.x === 600 && diagram.connectors[0].targetPoint.y === 500)).toBe(true);

            diagram.redo();
            expect((diagram.nodes[0].offsetX === 100 && diagram.nodes[0].offsetY === 100) &&
                (diagram.nodes[1].offsetX === 300 && diagram.nodes[1].offsetY === 110) &&
                (diagram.nodes[2].offsetX === 200 && diagram.nodes[2].offsetY === 100) &&
                (diagram.nodes[3].offsetX === 400 && diagram.nodes[3].offsetY === 85) &&
                (diagram.connectors[0].sourcePoint.x === 400 && diagram.connectors[0].sourcePoint.y === 50) &&
                (diagram.connectors[0].targetPoint.x === 600 && diagram.connectors[0].targetPoint.y === 50)).toBe(true);
            done();
        });
    });
    describe('Undo Redo - Nodes with alignment Bottom', () => {
        let diagram: Diagram;
        let ele: HTMLElement;

        beforeAll((): void => {
            const isDef = (o: any) => o !== undefined && o !== null;
            if (!isDef(window.performance)) {
                console.log("Unsupported environment, window.performance.memory is unavailable");
                this.skip(); //Skips test (in Chai)
                return;
            }
            ele = createElement('div', { id: 'diagram4' });
            document.body.appendChild(ele);
            let connector: ConnectorModel = {
                id: 'connector1', sourcePoint: { x: 400, y: 500 }, targetPoint: { x: 600, y: 500 }
            };
            let node: NodeModel = {
                id: 'node1', width: 130, height: 100, offsetX: 100, offsetY: 100,
                annotations: [{ content: 'Node1', style: { strokeColor: 'black', opacity: 1 } }]
            };
            let node2: NodeModel = {
                id: 'node2', width: 100, height: 120, offsetX: 300, offsetY: 200,
                annotations: [{ content: 'Node2', style: { strokeColor: 'black', opacity: 1 } }]
            };
            let node3: NodeModel = {
                id: 'node3', width: 80, height: 100, offsetX: 200, offsetY: 450,
                annotations: [{ content: 'Node3', style: { strokeColor: 'black', opacity: 1 } }]
            };
            let node4: NodeModel = {
                id: 'node4', width: 150, height: 70, offsetX: 400, offsetY: 350,
                annotations: [{ content: 'Node4', style: { strokeColor: 'black', opacity: 1 } }]
            };
            diagram = new Diagram({
                width: '1000px', height: '530px', nodes: [node, node2, node3, node4],
                connectors: [connector], snapSettings: { constraints: SnapConstraints.ShowLines }
            });
            diagram.appendTo('#diagram4');
            let objects: (NodeModel | ConnectorModel)[] = [];
            objects.push(diagram.nodes[0], diagram.nodes[1], diagram.nodes[2], diagram.nodes[3], diagram.connectors[0]);
            diagram.align('Bottom', objects);
            diagram.dataBind();
        });

        afterAll((): void => {
            diagram.destroy();
            ele.remove();
        });

        it('Checking Undo Redo - Nodes with alignment Bottom', (done: Function) => {
            diagram.undo();
            expect((diagram.nodes[0].offsetX === 100 && diagram.nodes[0].offsetY === 100) &&
                (diagram.nodes[1].offsetX === 300 && diagram.nodes[1].offsetY === 200) &&
                (diagram.nodes[2].offsetX === 200 && diagram.nodes[2].offsetY === 450) &&
                (diagram.nodes[3].offsetX === 400 && diagram.nodes[3].offsetY === 350) &&
                (diagram.connectors[0].sourcePoint.x === 400 && diagram.connectors[0].sourcePoint.y === 500) &&
                (diagram.connectors[0].targetPoint.x === 600 && diagram.connectors[0].targetPoint.y === 500)).toBe(true);
            diagram.redo();
            expect((diagram.nodes[0].offsetX === 100 && diagram.nodes[0].offsetY === 100) &&
                (diagram.nodes[1].offsetX === 300 && diagram.nodes[1].offsetY === 90) &&
                (diagram.nodes[2].offsetX === 200 && diagram.nodes[2].offsetY === 100) &&
                (diagram.nodes[3].offsetX === 400 && diagram.nodes[3].offsetY === 115) &&
                (diagram.connectors[0].sourcePoint.x === 400 && diagram.connectors[0].sourcePoint.y === 150) &&
                (diagram.connectors[0].targetPoint.x === 600 && diagram.connectors[0].targetPoint.y === 150)).toBe(true);
            done();
        });
    });
    describe('Undo Redo - Nodes with alignment Center', () => {
        let diagram: Diagram;
        let ele: HTMLElement;

        beforeAll((): void => {
            const isDef = (o: any) => o !== undefined && o !== null;
            if (!isDef(window.performance)) {
                console.log("Unsupported environment, window.performance.memory is unavailable");
                this.skip(); //Skips test (in Chai)
                return;
            }
            ele = createElement('div', { id: 'diagram5' });
            document.body.appendChild(ele);
            let connector: ConnectorModel = {
                id: 'connector1', sourcePoint: { x: 400, y: 500 }, targetPoint: { x: 600, y: 500 }
            };
            let node: NodeModel = {
                id: 'node1', width: 130, height: 100, offsetX: 100, offsetY: 100,
                annotations: [{ content: 'Node1', style: { strokeColor: 'black', opacity: 1 } }]
            };
            let node2: NodeModel = {
                id: 'node2', width: 100, height: 100, offsetX: 300, offsetY: 200,
                annotations: [{ content: 'Node2', style: { strokeColor: 'black', opacity: 1 } }]
            };
            let node3: NodeModel = {
                id: 'node3', width: 80, height: 100, offsetX: 200, offsetY: 450,
                annotations: [{ content: 'Node3', style: { strokeColor: 'black', opacity: 1 } }]
            };
            let node4: NodeModel = {
                id: 'node4', width: 150, height: 70, offsetX: 400, offsetY: 350,
                annotations: [{ content: 'Node4', style: { strokeColor: 'black', opacity: 1 } }]
            };
            diagram = new Diagram({
                width: '1000px', height: '530px', nodes: [node, node2, node3, node4],
                connectors: [connector], snapSettings: { constraints: SnapConstraints.ShowLines }
            });
            diagram.appendTo('#diagram5');
            let objects: (NodeModel | ConnectorModel)[] = [];
            objects.push(diagram.nodes[0], diagram.nodes[1], diagram.nodes[2], diagram.nodes[3], diagram.connectors[0]);
            diagram.align('Center', objects);
            diagram.dataBind();
        });

        afterAll((): void => {
            diagram.destroy();
            ele.remove();
        });

        it('Checking Undo Redo - Nodes with alignment Center', (done: Function) => {
            diagram.undo();
            expect((diagram.nodes[0].offsetX === 100 && diagram.nodes[0].offsetY === 100) &&
                (diagram.nodes[1].offsetX === 300 && diagram.nodes[1].offsetY === 200) &&
                (diagram.nodes[2].offsetX === 200 && diagram.nodes[2].offsetY === 450) &&
                (diagram.nodes[3].offsetX === 400 && diagram.nodes[3].offsetY === 350) &&
                (diagram.connectors[0].sourcePoint.x === 400 && diagram.connectors[0].sourcePoint.y === 500) &&
                (diagram.connectors[0].targetPoint.x === 600 && diagram.connectors[0].targetPoint.y === 500)).toBe(true);
            diagram.redo();
            expect((diagram.nodes[0].offsetX === 100 && diagram.nodes[0].offsetY === 100) &&
                (diagram.nodes[1].offsetX === 100 && diagram.nodes[1].offsetY === 200) &&
                (diagram.nodes[2].offsetX === 100 && diagram.nodes[2].offsetY === 450) &&
                (diagram.nodes[3].offsetX === 100 && diagram.nodes[3].offsetY === 350) &&
                (diagram.connectors[0].sourcePoint.x === 0 && diagram.connectors[0].sourcePoint.y === 500) &&
                (diagram.connectors[0].targetPoint.x === 200 && diagram.connectors[0].targetPoint.y === 500)).toBe(true);
            done();
        });
    });
    describe('Undo Redo - Nodes with alignment Middle ', () => {
        let diagram: Diagram;
        let ele: HTMLElement;

        beforeAll((): void => {
            const isDef = (o: any) => o !== undefined && o !== null;
            if (!isDef(window.performance)) {
                console.log("Unsupported environment, window.performance.memory is unavailable");
                this.skip(); //Skips test (in Chai)
                return;
            }
            ele = createElement('div', { id: 'diagram6' });
            document.body.appendChild(ele);
            let connector: ConnectorModel = {
                id: 'connector1', sourcePoint: { x: 400, y: 500 }, targetPoint: { x: 600, y: 500 }
            };
            let node: NodeModel = {
                id: 'node1', width: 130, height: 100, offsetX: 100, offsetY: 100,
                annotations: [{ content: 'Node1', style: { strokeColor: 'black', opacity: 1 } }]
            };
            let node2: NodeModel = {
                id: 'node2', width: 100, height: 100, offsetX: 300, offsetY: 200,
                annotations: [{ content: 'Node2', style: { strokeColor: 'black', opacity: 1 } }]
            };
            let node3: NodeModel = {
                id: 'node3', width: 80, height: 100, offsetX: 200, offsetY: 450,
                annotations: [{ content: 'Node3', style: { strokeColor: 'black', opacity: 1 } }]
            };
            let node4: NodeModel = {
                id: 'node4', width: 150, height: 70, offsetX: 400, offsetY: 350,
                annotations: [{ content: 'Node4', style: { strokeColor: 'black', opacity: 1 } }]
            };
            diagram = new Diagram({
                width: '1000px', height: '530px', nodes: [node, node2, node3, node4],
                connectors: [connector], snapSettings: { constraints: SnapConstraints.ShowLines }
            });
            diagram.appendTo('#diagram6');
            let objects: (NodeModel | ConnectorModel)[] = [];
            objects.push(diagram.nodes[0], diagram.nodes[1], diagram.nodes[2], diagram.nodes[3], diagram.connectors[0]);
            diagram.align('Middle', objects);
            diagram.dataBind();
        });

        afterAll((): void => {
            diagram.destroy();
            ele.remove();
        });

        it('Checking Undo Redo - Nodes with alignment Middle', (done: Function) => {
            diagram.undo();
            expect((diagram.nodes[0].offsetX === 100 && diagram.nodes[0].offsetY === 100) &&
                (diagram.nodes[1].offsetX === 300 && diagram.nodes[1].offsetY === 200) &&
                (diagram.nodes[2].offsetX === 200 && diagram.nodes[2].offsetY === 450) &&
                (diagram.nodes[3].offsetX === 400 && diagram.nodes[3].offsetY === 350) &&
                (diagram.connectors[0].sourcePoint.x === 400 && diagram.connectors[0].sourcePoint.y === 500) &&
                (diagram.connectors[0].targetPoint.x === 600 && diagram.connectors[0].targetPoint.y === 500)).toBe(true);
            diagram.redo();
            expect((diagram.nodes[0].offsetX === 100 && diagram.nodes[0].offsetY === 100) &&
                (diagram.nodes[1].offsetX === 300 && diagram.nodes[1].offsetY === 100) &&
                (diagram.nodes[2].offsetX === 200 && diagram.nodes[2].offsetY === 100) &&
                (diagram.nodes[3].offsetX === 400 && diagram.nodes[3].offsetY === 100) &&
                (diagram.connectors[0].sourcePoint.x === 400 && diagram.connectors[0].sourcePoint.y === 100) &&
                (diagram.connectors[0].targetPoint.x === 600 && diagram.connectors[0].targetPoint.y === 100)).toBe(true);
            done();
        });
    });
    describe('Undo Redo - Connectors with alignment Left', () => {
        let diagram: Diagram;
        let ele: HTMLElement;

        beforeAll((): void => {
            const isDef = (o: any) => o !== undefined && o !== null;
            if (!isDef(window.performance)) {
                console.log("Unsupported environment, window.performance.memory is unavailable");
                this.skip(); //Skips test (in Chai)
                return;
            }
            ele = createElement('div', { id: 'diagram7' });
            document.body.appendChild(ele);
            let selArray: (NodeModel | ConnectorModel)[] = [];
            let connector: ConnectorModel = {
                id: 'connector1', sourcePoint: { x: 400, y: 500 }, targetPoint: { x: 600, y: 500 }
            };
            let node: NodeModel = {
                id: 'node1', width: 130, height: 100, offsetX: 100, offsetY: 100,
                annotations: [{ content: 'Node1', style: { strokeColor: 'black', opacity: 1 } }]
            };
            diagram = new Diagram({
                width: '1000px', height: '530px', nodes: [node],
                connectors: [connector], snapSettings: { constraints: SnapConstraints.ShowLines }
            });
            diagram.appendTo('#diagram7');
            let objects: (NodeModel | ConnectorModel)[] = [];
            objects.push(diagram.connectors[0], diagram.nodes[0]);
            diagram.align('Left', objects);
            diagram.dataBind();
        });

        afterAll((): void => {
            diagram.destroy();
            ele.remove();
        });

        it('Checking Undo Redo - Connectors with alignment Left', (done: Function) => {
            diagram.undo();
            expect((diagram.nodes[0].offsetX === 100 && diagram.nodes[0].offsetY === 100) &&
                (diagram.connectors[0].sourcePoint.x === 400 && diagram.connectors[0].sourcePoint.y === 500) &&
                (diagram.connectors[0].targetPoint.x === 600 && diagram.connectors[0].targetPoint.y === 500)).toBe(true);
            diagram.redo();
            expect((diagram.nodes[0].offsetX === 465 && diagram.nodes[0].offsetY === 100) &&
                (diagram.connectors[0].sourcePoint.x === 400 && diagram.connectors[0].sourcePoint.y === 500) &&
                (diagram.connectors[0].targetPoint.x === 600 && diagram.connectors[0].targetPoint.y === 500)).toBe(true);
            done();
        });
    });
    describe('Undo Redo - Connectors with alignment Right', () => {
        let diagram: Diagram;
        let ele: HTMLElement;

        beforeAll((): void => {
            const isDef = (o: any) => o !== undefined && o !== null;
            if (!isDef(window.performance)) {
                console.log("Unsupported environment, window.performance.memory is unavailable");
                this.skip(); //Skips test (in Chai)
                return;
            }
            ele = createElement('div', { id: 'diagram8' });
            document.body.appendChild(ele);
            let connector: ConnectorModel = {
                id: 'connector1', sourcePoint: { x: 400, y: 500 }, targetPoint: { x: 600, y: 500 }
            };
            let node: NodeModel = {
                id: 'node1', width: 130, height: 100, offsetX: 100, offsetY: 100,
                annotations: [{ content: 'Node1', style: { strokeColor: 'black', opacity: 1 } }]
            };
            diagram = new Diagram({
                width: '1000px', height: '530px', nodes: [node],
                connectors: [connector], snapSettings: { constraints: SnapConstraints.ShowLines }
            });
            diagram.appendTo('#diagram8');
            let objects: (NodeModel | ConnectorModel)[] = [];
            objects.push(diagram.connectors[0], diagram.nodes[0]);
            diagram.align('Right', objects);
            diagram.dataBind();
        });

        afterAll((): void => {
            diagram.destroy();
            ele.remove();
        });

        it('Checking Undo Redo - Connectors with alignment Right', (done: Function) => {
            diagram.undo();
            expect((diagram.nodes[0].offsetX === 100 && diagram.nodes[0].offsetY === 100) &&
                (diagram.connectors[0].sourcePoint.x === 400 && diagram.connectors[0].sourcePoint.y === 500) &&
                (diagram.connectors[0].targetPoint.x === 600 && diagram.connectors[0].targetPoint.y === 500)).toBe(true);
            diagram.redo();
            expect((diagram.nodes[0].offsetX === 535 && diagram.nodes[0].offsetY === 100) &&
                (diagram.connectors[0].sourcePoint.x === 400 && diagram.connectors[0].sourcePoint.y === 500) &&
                (diagram.connectors[0].targetPoint.x === 600 && diagram.connectors[0].targetPoint.y === 500)).toBe(true);
            done();
        });
    });
    describe('Undo Redo - Connectors with alignment Top', () => {
        let diagram: Diagram;
        let ele: HTMLElement;

        beforeAll((): void => {
            const isDef = (o: any) => o !== undefined && o !== null;
            if (!isDef(window.performance)) {
                console.log("Unsupported environment, window.performance.memory is unavailable");
                this.skip(); //Skips test (in Chai)
                return;
            }
            ele = createElement('div', { id: 'diagram9' });
            document.body.appendChild(ele);
            let connector: ConnectorModel = {
                id: 'connector1', sourcePoint: { x: 400, y: 500 }, targetPoint: { x: 600, y: 500 }
            };
            let node: NodeModel = {
                id: 'node1', width: 130, height: 100, offsetX: 100, offsetY: 100,
                annotations: [{ content: 'Node1', style: { strokeColor: 'black', opacity: 1 } }]
            };
            diagram = new Diagram({
                width: '1000px', height: '530px', nodes: [node],
                connectors: [connector], snapSettings: { constraints: SnapConstraints.ShowLines }
            });
            diagram.appendTo('#diagram9');
            let objects: (NodeModel | ConnectorModel)[] = [];
            objects.push(diagram.connectors[0], diagram.nodes[0]);
            diagram.align('Top', objects);
            diagram.dataBind();
        });

        afterAll((): void => {
            diagram.destroy();
            ele.remove();
        });

        it('Checking Undo Redo - Connectors with alignment Top', (done: Function) => {
            diagram.undo();
            expect((diagram.nodes[0].offsetX === 100 && diagram.nodes[0].offsetY === 100) &&
                (diagram.connectors[0].sourcePoint.x === 400 && diagram.connectors[0].sourcePoint.y === 500) &&
                (diagram.connectors[0].targetPoint.x === 600 && diagram.connectors[0].targetPoint.y === 500)).toBe(true);
            diagram.redo();
            expect((diagram.nodes[0].offsetX === 100 && diagram.nodes[0].offsetY === 550) &&
                (diagram.connectors[0].sourcePoint.x === 400 && diagram.connectors[0].sourcePoint.y === 500) &&
                (diagram.connectors[0].targetPoint.x === 600 && diagram.connectors[0].targetPoint.y === 500)).toBe(true);
            done();
        });
    });
    describe('Undo Redo - Connectors with alignment Bottom', () => {
        let diagram: Diagram;
        let ele: HTMLElement;

        beforeAll((): void => {
            const isDef = (o: any) => o !== undefined && o !== null;
            if (!isDef(window.performance)) {
                console.log("Unsupported environment, window.performance.memory is unavailable");
                this.skip(); //Skips test (in Chai)
                return;
            }
            ele = createElement('div', { id: 'diagram10' });
            document.body.appendChild(ele);
            let connector: ConnectorModel = {
                id: 'connector1', sourcePoint: { x: 400, y: 500 }, targetPoint: { x: 600, y: 500 }
            };
            let node: NodeModel = {
                id: 'node1', width: 130, height: 100, offsetX: 100, offsetY: 100,
                annotations: [{ content: 'Node1', style: { strokeColor: 'black', opacity: 1 } }]
            };
            diagram = new Diagram({
                width: '1000px', height: '530px', nodes: [node],
                connectors: [connector], snapSettings: { constraints: SnapConstraints.ShowLines }
            });
            diagram.appendTo('#diagram10');
            let objects: (NodeModel | ConnectorModel)[] = [];
            objects.push(diagram.connectors[0], diagram.nodes[0]);
            diagram.align('Bottom', objects);
            diagram.dataBind();
        });

        afterAll((): void => {
            diagram.destroy();
            ele.remove();
        });

        it('Checking Undo Redo - Connectors with alignment Bottom', (done: Function) => {
            diagram.undo();
            expect((diagram.nodes[0].offsetX === 100 && diagram.nodes[0].offsetY === 100) &&
                (diagram.connectors[0].sourcePoint.x === 400 && diagram.connectors[0].sourcePoint.y === 500) &&
                (diagram.connectors[0].targetPoint.x === 600 && diagram.connectors[0].targetPoint.y === 500)).toBe(true);
            diagram.redo();
            expect((diagram.nodes[0].offsetX === 100 && diagram.nodes[0].offsetY === 450) &&
                (diagram.connectors[0].sourcePoint.x === 400 && diagram.connectors[0].sourcePoint.y === 500) &&
                (diagram.connectors[0].targetPoint.x === 600 && diagram.connectors[0].targetPoint.y === 500)).toBe(true);
            done();
        });
    });
    describe('Undo Redo - Connectors with alignment Center', () => {
        let diagram: Diagram;
        let ele: HTMLElement;

        beforeAll((): void => {
            const isDef = (o: any) => o !== undefined && o !== null;
            if (!isDef(window.performance)) {
                console.log("Unsupported environment, window.performance.memory is unavailable");
                this.skip(); //Skips test (in Chai)
                return;
            }
            ele = createElement('div', { id: 'diagram11' });
            document.body.appendChild(ele);
            let selArray: (NodeModel | ConnectorModel)[] = [];
            let connector: ConnectorModel = {
                id: 'connector1', sourcePoint: { x: 400, y: 500 }, targetPoint: { x: 600, y: 500 }
            };
            let node: NodeModel = {
                id: 'node1', width: 130, height: 100, offsetX: 100, offsetY: 100,
                annotations: [{ content: 'Node1', style: { strokeColor: 'black', opacity: 1 } }]
            };
            diagram = new Diagram({
                width: '1000px', height: '530px',
                nodes: [node], connectors: [connector], snapSettings: { constraints: SnapConstraints.ShowLines }
            });
            diagram.appendTo('#diagram11');
            let objects: (NodeModel | ConnectorModel)[] = [];
            objects.push(diagram.connectors[0], diagram.nodes[0]);
            diagram.align('Center', objects);
            diagram.dataBind();
        });

        afterAll((): void => {
            diagram.destroy();
            ele.remove();
        });

        it('Checking Undo Redo - Connectors with alignment Center', (done: Function) => {
            diagram.undo();
            expect((diagram.nodes[0].offsetX === 100 && diagram.nodes[0].offsetY === 100) &&
                (diagram.connectors[0].sourcePoint.x === 400 && diagram.connectors[0].sourcePoint.y === 500) &&
                (diagram.connectors[0].targetPoint.x === 600 && diagram.connectors[0].targetPoint.y === 500)).toBe(true);
            diagram.redo();
            expect((diagram.nodes[0].offsetX === 500 && diagram.nodes[0].offsetY === 100) &&
                (diagram.connectors[0].sourcePoint.x === 400 && diagram.connectors[0].sourcePoint.y === 500) &&
                (diagram.connectors[0].targetPoint.x === 600 && diagram.connectors[0].targetPoint.y === 500)).toBe(true);
            done();
        });
    });
    describe('Undo Redo - Connectors with alignment Middle', () => {
        let diagram: Diagram;
        let ele: HTMLElement;

        beforeAll((): void => {
            const isDef = (o: any) => o !== undefined && o !== null;
            if (!isDef(window.performance)) {
                console.log("Unsupported environment, window.performance.memory is unavailable");
                this.skip(); //Skips test (in Chai)
                return;
            }
            ele = createElement('div', { id: 'diagram12' });
            document.body.appendChild(ele);
            let connector: ConnectorModel = {
                id: 'connector1', sourcePoint: { x: 400, y: 500 }, targetPoint: { x: 600, y: 500 }
            };
            let node: NodeModel = {
                id: 'node1', width: 130, height: 100, offsetX: 100, offsetY: 100,
                annotations: [{ content: 'Node1', style: { strokeColor: 'black', opacity: 1 } }]
            };
            diagram = new Diagram({
                width: '1000px', height: '530px', nodes: [node],
                connectors: [connector], snapSettings: { constraints: SnapConstraints.ShowLines }
            });
            diagram.appendTo('#diagram12');
            let objects: (NodeModel | ConnectorModel)[] = [];
            objects.push(diagram.connectors[0], diagram.nodes[0]);
            diagram.align('Middle', objects);
            diagram.dataBind();
        });

        afterAll((): void => {
            diagram.destroy();
            ele.remove();
        });

        it('Checking Undo Redo - Connectors with alignment Middle', (done: Function) => {
            diagram.undo();
            expect((diagram.nodes[0].offsetX === 100 && diagram.nodes[0].offsetY === 100) &&
                (diagram.connectors[0].sourcePoint.x === 400 && diagram.connectors[0].sourcePoint.y === 500) &&
                (diagram.connectors[0].targetPoint.x === 600 && diagram.connectors[0].targetPoint.y === 500)).toBe(true);
            diagram.redo();
            expect((diagram.nodes[0].offsetX === 100 && diagram.nodes[0].offsetY === 500) &&
                (diagram.connectors[0].sourcePoint.x === 400 && diagram.connectors[0].sourcePoint.y === 500) &&
                (diagram.connectors[0].targetPoint.x === 600 && diagram.connectors[0].targetPoint.y === 500)).toBe(true);
            done();
        });
    });
    describe('Undo Redo - Nodes with SizingOptions Width', () => {
        let diagram: Diagram;
        let ele: HTMLElement;

        beforeAll((): void => {
            const isDef = (o: any) => o !== undefined && o !== null;
            if (!isDef(window.performance)) {
                console.log("Unsupported environment, window.performance.memory is unavailable");
                this.skip(); //Skips test (in Chai)
                return;
            }
            ele = createElement('div', { id: 'diagram' });
            document.body.appendChild(ele);
            let connector: ConnectorModel = {
                id: 'connector1', sourcePoint: { x: 350, y: 200 }, targetPoint: { x: 450, y: 200 }
            };
            let node: NodeModel = {
                id: 'node1', width: 150, height: 100, offsetX: 200, offsetY: 100,
            };
            let node2: NodeModel = {
                id: 'node2', width: 80, height: 130, offsetX: 200, offsetY: 250,
            };
            let node3: NodeModel = {
                id: 'node3', width: 200, height: 75, offsetX: 200, offsetY: 400,
            };
            diagram = new Diagram({
                width: '1000px', height: '530px', nodes: [node, node2, node3],
                connectors: [connector], snapSettings: { constraints: SnapConstraints.ShowLines }
            });
            diagram.appendTo('#diagram');
            let objects: (NodeModel | ConnectorModel)[] = [];
            objects.push(diagram.nodes[0], diagram.nodes[1], diagram.nodes[2], diagram.connectors[0]);
            diagram.sameSize('Width', objects);

        });

        afterAll((): void => {
            diagram.destroy();
            ele.remove();
        });

        it('Checking Undo Redo - Nodes with SizingOptions Width', (done: Function) => {
            diagram.undo();
            expect((diagram.nodes[0].width === 150 && diagram.nodes[0].height === 100) &&
                (diagram.nodes[1].width === 80 && diagram.nodes[1].height === 130) &&
                (diagram.nodes[2].width === 200 && diagram.nodes[2].height === 75) &&
                (diagram.connectors[0].wrapper.bounds.width === 100)).toBe(true);
            diagram.redo();
            expect((diagram.nodes[0].width === 150 && diagram.nodes[0].height === 100) &&
                (diagram.nodes[1].width === 150 && diagram.nodes[1].height === 130) &&
                (diagram.nodes[2].width === 150 && diagram.nodes[2].height === 75) &&
                (diagram.connectors[0].wrapper.bounds.width === 150)).toBe(true);
            done();
        });
        it('Checking same width, height, size - code coverage', (done: Function) => {
            let objects: (NodeModel | ConnectorModel)[] = [];
            diagram.sameSize('Width', objects);
            diagram.sameSize('Height', objects);
            diagram.sameSize('Size', objects);
            done();
        });
    });
    describe('Undo Redo - Nodes with SizingOptions Height', () => {
        let diagram: Diagram;
        let ele: HTMLElement;

        beforeAll((): void => {
            const isDef = (o: any) => o !== undefined && o !== null;
            if (!isDef(window.performance)) {
                console.log("Unsupported environment, window.performance.memory is unavailable");
                this.skip(); //Skips test (in Chai)
                return;
            }
            ele = createElement('div', { id: 'diagram1' });
            document.body.appendChild(ele);
            let connector: ConnectorModel = {
                id: 'connector1', sourcePoint: { x: 300, y: 400 }, targetPoint: { x: 500, y: 500 }
            };
            let node: NodeModel = {
                id: 'node1', width: 200, height: 150, offsetX: 200, offsetY: 200
            };
            let node2: NodeModel = {
                id: 'node2', width: 150, height: 180, offsetX: 400, offsetY: 200
            };
            let node3: NodeModel = {
                id: 'node3', width: 80, height: 70, offsetX: 600, offsetY: 200
            };
            diagram = new Diagram({
                width: '1000px', height: '530px', nodes: [node, node2, node3],
                connectors: [connector], snapSettings: { constraints: SnapConstraints.ShowLines }
            });
            diagram.appendTo('#diagram1');
            let objects: (NodeModel | ConnectorModel)[] = [];
            objects.push(diagram.nodes[0], diagram.nodes[1], diagram.nodes[2], diagram.connectors[0]);
            diagram.sameSize('Height', objects);

        });

        afterAll((): void => {
            diagram.destroy();
            ele.remove();
        });

        it('Checking Undo Redo - Nodes with SizingOptions Height', (done: Function) => {
            diagram.undo();
            expect((diagram.nodes[0].width === 200 && diagram.nodes[0].height === 150) &&
                (diagram.nodes[1].width === 150 && diagram.nodes[1].height === 180) &&
                (diagram.nodes[2].width === 80 && diagram.nodes[2].height === 70) &&
                (diagram.connectors[0].wrapper.bounds.height === 100)).toBe(true);
            diagram.redo();
            expect((diagram.nodes[0].width === 200 && diagram.nodes[0].height === 150) &&
                (diagram.nodes[1].width === 150 && diagram.nodes[1].height === 150) &&
                (diagram.nodes[2].width === 80 && diagram.nodes[2].height === 150) &&
                (diagram.connectors[0].wrapper.bounds.height === 150)).toBe(true);
            done();
        });
    });
    describe('Undo Redo - Nodes with SizingOptions size', () => {
        let diagram: Diagram;
        let ele: HTMLElement;

        beforeAll((): void => {
            const isDef = (o: any) => o !== undefined && o !== null;
            if (!isDef(window.performance)) {
                console.log("Unsupported environment, window.performance.memory is unavailable");
                this.skip(); //Skips test (in Chai)
                return;
            }
            ele = createElement('div', { id: 'diagram2' });
            document.body.appendChild(ele);
            let connector: ConnectorModel = {
                id: 'connector1', sourcePoint: { x: 400, y: 200 }, targetPoint: { x: 600, y: 300 }
            };
            let node: NodeModel = {
                id: 'node1', width: 150, height: 100, offsetX: 200, offsetY: 200
            };
            let node2: NodeModel = {
                id: 'node2', width: 100, height: 170, offsetX: 200, offsetY: 350
            };
            let node3: NodeModel = {
                id: 'node3', width: 200, height: 80, offsetX: 200, offsetY: 500
            };
            diagram = new Diagram({
                width: '1000px', height: '530px', nodes: [node, node2, node3],
                connectors: [connector], snapSettings: { constraints: SnapConstraints.ShowLines }
            });
            diagram.appendTo('#diagram2');
            let objects: (NodeModel | ConnectorModel)[] = [];
            objects.push(diagram.nodes[0], diagram.nodes[1], diagram.nodes[2], diagram.connectors[0]);
            diagram.sameSize('Size', objects);

        });

        afterAll((): void => {
            diagram.destroy();
            ele.remove();
        });

        it('Checking Undo Redo - Nodes with SizingOptions size', (done: Function) => {
            diagram.undo();
            expect((diagram.nodes[0].width === 150 && diagram.nodes[0].height === 100) &&
                (diagram.nodes[1].width === 100 && diagram.nodes[1].height === 170) &&
                (diagram.nodes[2].width === 200 && diagram.nodes[2].height === 80) &&
                (diagram.connectors[0].wrapper.bounds.width === 200 && diagram.connectors[0].wrapper.bounds.height === 100)).toBe(true);

            diagram.redo();
            expect((diagram.nodes[0].width === 150 && diagram.nodes[0].height === 100) &&
                (diagram.nodes[1].width === 150 && diagram.nodes[1].height === 100) &&
                (diagram.nodes[2].width === 150 && diagram.nodes[2].height === 100) &&
                (diagram.connectors[0].wrapper.bounds.width === 150 && diagram.connectors[0].wrapper.bounds.height === 100)).toBe(true);
            done();
        });
    });
    describe('Undo Redo - Nodes with SpacingOptions RightToLeft', () => {
        let diagram: Diagram;
        let ele: HTMLElement;

        beforeAll((): void => {
            const isDef = (o: any) => o !== undefined && o !== null;
            if (!isDef(window.performance)) {
                console.log("Unsupported environment, window.performance.memory is unavailable");
                this.skip(); //Skips test (in Chai)
                return;
            }
            ele = createElement('div', { id: 'diagram' });
            document.body.appendChild(ele);
            let connector: ConnectorModel = {
                id: 'connector1', sourcePoint: { x: 600, y: 100 }, targetPoint: { x: 800, y: 100 }
            };
            let node: NodeModel = {
                id: 'node1', width: 200, height: 100, offsetX: 200, offsetY: 200,
                annotations: [{ content: 'Node1', style: { strokeColor: 'black', opacity: 1 } }]
            };
            let node2: NodeModel = {
                id: 'node2', width: 100, height: 100, offsetX: 100, offsetY: 100,
                annotations: [{ content: 'Node2', style: { strokeColor: 'black', opacity: 1 } }]
            };
            let node3: NodeModel = {
                id: 'node3', width: 100, height: 100, offsetX: 500, offsetY: 100,
                annotations: [{ content: 'Node3', style: { strokeColor: 'black', opacity: 1 } }]
            };
            diagram = new Diagram({
                width: '1000px', height: '530px', nodes: [node, node2, node3],
                connectors: [connector], snapSettings: { constraints: SnapConstraints.ShowLines }
            });
            diagram.appendTo('#diagram');
            let objects: (NodeModel | ConnectorModel)[] = [];
            objects.push(diagram.nodes[0], diagram.nodes[1], diagram.nodes[2], diagram.connectors[0]);
            diagram.distribute('RightToLeft', objects);

        });

        afterAll((): void => {
            diagram.destroy();
            ele.remove();
        });

        it('Checking Undo Redo - Nodes with SpacingOptions RightToLeft', (done: Function) => {
            diagram.undo();
            expect((diagram.nodes[0].offsetX === 200 && diagram.nodes[0].offsetY === 200) &&
                (diagram.nodes[1].offsetX === 100 && diagram.nodes[1].offsetY === 100) &&
                (diagram.nodes[2].offsetX === 500 && diagram.nodes[2].offsetY === 100) &&
                (diagram.connectors[0].sourcePoint.x === 600 && diagram.connectors[0].sourcePoint.y === 100) &&
                (diagram.connectors[0].targetPoint.x === 800 && diagram.connectors[0].targetPoint.y === 100)).toBe(true);
            diagram.redo();
            expect((diagram.nodes[0].offsetX === 300 && diagram.nodes[0].offsetY === 200) &&
                (diagram.nodes[1].offsetX === 100 && diagram.nodes[1].offsetY === 100) &&
                (diagram.nodes[2].offsetX === 500 && diagram.nodes[2].offsetY === 100) &&
                (diagram.connectors[0].sourcePoint.x === 600 && diagram.connectors[0].sourcePoint.y === 100) &&
                (diagram.connectors[0].targetPoint.x === 800 && diagram.connectors[0].targetPoint.y === 100)).toBe(true);
            done();
        });
    });
    describe('Undo Redo - Nodes with SpacingOptions Right', () => {
        let diagram: Diagram;
        let ele: HTMLElement;

        beforeAll((): void => {
            const isDef = (o: any) => o !== undefined && o !== null;
            if (!isDef(window.performance)) {
                console.log("Unsupported environment, window.performance.memory is unavailable");
                this.skip(); //Skips test (in Chai)
                return;
            }
            ele = createElement('div', { id: 'diagram1' });
            document.body.appendChild(ele);
            let node: NodeModel = {
                id: 'node1', width: 200, height: 100, offsetX: 200, offsetY: 200,
                annotations: [{ content: 'Node1', style: { strokeColor: 'black', opacity: 1 } }]
            };
            let node2: NodeModel = {
                id: 'node2', width: 100, height: 100, offsetX: 100, offsetY: 100,
                annotations: [{ content: 'Node2', style: { strokeColor: 'black', opacity: 1 } }]
            };
            let node3: NodeModel = {
                id: 'node3', width: 100, height: 100, offsetX: 500, offsetY: 100,
                annotations: [{ content: 'Node3', style: { strokeColor: 'black', opacity: 1 } }]
            };
            diagram = new Diagram({
                width: '1000px', height: '530px', nodes: [node, node2, node3], snapSettings: { constraints: SnapConstraints.ShowLines }
            });
            diagram.appendTo('#diagram1');
            let objects: (NodeModel | ConnectorModel)[] = [];
            objects.push(diagram.nodes[0], diagram.nodes[1], diagram.nodes[2]);

            diagram.distribute('Right', objects);

        });

        afterAll((): void => {
            diagram.destroy();
            ele.remove();
        });

        it('Checking Undo Redo - Nodes with SpacingOptions Right', (done: Function) => {
            diagram.undo();
            expect((diagram.nodes[0].offsetX === 200 && diagram.nodes[0].offsetY === 200) &&
                (diagram.nodes[1].offsetX === 100 && diagram.nodes[1].offsetY === 100) &&
                (diagram.nodes[2].offsetX === 500 && diagram.nodes[2].offsetY === 100)).toBe(true);
            diagram.redo();
            expect((diagram.nodes[0].offsetX === 250 && diagram.nodes[0].offsetY === 200) &&
                (diagram.nodes[1].offsetX === 100 && diagram.nodes[1].offsetY === 100) &&
                (diagram.nodes[2].offsetX === 500 && diagram.nodes[2].offsetY === 100)).toBe(true);
            done();
        });
    });
    describe('Undo Redo - Nodes with SpacingOptions Left', () => {
        let diagram: Diagram;
        let ele: HTMLElement;

        beforeAll((): void => {
            const isDef = (o: any) => o !== undefined && o !== null;
            if (!isDef(window.performance)) {
                console.log("Unsupported environment, window.performance.memory is unavailable");
                this.skip(); //Skips test (in Chai)
                return;
            }
            ele = createElement('div', { id: 'diagram2' });
            document.body.appendChild(ele);
            let node: NodeModel = {
                id: 'node1', width: 200, height: 100, offsetX: 300, offsetY: 200,
                annotations: [{ content: 'Node1', style: { strokeColor: 'black', opacity: 1 } }]
            };
            let node2: NodeModel = {
                id: 'node2', width: 100, height: 100, offsetX: 100, offsetY: 100,
                annotations: [{ content: 'Node2', style: { strokeColor: 'black', opacity: 1 } }]
            };
            let node3: NodeModel = {
                id: 'node3', width: 100, height: 100, offsetX: 500, offsetY: 100,
                annotations: [{ content: 'Node3', style: { strokeColor: 'black', opacity: 1 } }]
            };
            diagram = new Diagram({
                width: '1000px', height: '530px', nodes: [node, node2, node3], snapSettings: { constraints: SnapConstraints.ShowLines }
            });
            diagram.appendTo('#diagram2');
            let objects: (NodeModel | ConnectorModel)[] = [];
            objects.push(diagram.nodes[0], diagram.nodes[1], diagram.nodes[2]);

            diagram.distribute('Left', objects);

        });

        afterAll((): void => {
            diagram.destroy();
            ele.remove();
        });

        it('Checking Undo Redo - Nodes with SpacingOptions Left', (done: Function) => {
            diagram.undo();
            expect((diagram.nodes[0].offsetX === 300 && diagram.nodes[0].offsetY === 200) &&
                (diagram.nodes[1].offsetX === 100 && diagram.nodes[1].offsetY === 100) &&
                (diagram.nodes[2].offsetX === 500 && diagram.nodes[2].offsetY === 100)).toBe(true);
            diagram.redo();
            expect((diagram.nodes[0].offsetX === 350 && diagram.nodes[0].offsetY === 200) &&
                (diagram.nodes[1].offsetX === 100 && diagram.nodes[1].offsetY === 100) &&
                (diagram.nodes[2].offsetX === 500 && diagram.nodes[2].offsetY === 100)).toBe(true);
            done();
        });
    });
    describe('Undo Redo - Nodes with SpacingOptions Center', () => {
        let diagram: Diagram;
        let ele: HTMLElement;

        beforeAll((): void => {
            const isDef = (o: any) => o !== undefined && o !== null;
            if (!isDef(window.performance)) {
                console.log("Unsupported environment, window.performance.memory is unavailable");
                this.skip(); //Skips test (in Chai)
                return;
            }
            ele = createElement('div', { id: 'diagram3' });
            document.body.appendChild(ele);
            let node: NodeModel = {
                id: 'node1', width: 200, height: 100, offsetX: 200, offsetY: 200,
                annotations: [{ content: 'Node1', style: { strokeColor: 'black', opacity: 1 } }]
            };
            let node2: NodeModel = {
                id: 'node2', width: 100, height: 100, offsetX: 100, offsetY: 100,
                annotations: [{ content: 'Node2', style: { strokeColor: 'black', opacity: 1 } }]
            };
            let node3: NodeModel = {
                id: 'node3', width: 100, height: 100, offsetX: 500, offsetY: 100,
                annotations: [{ content: 'Node3', style: { strokeColor: 'black', opacity: 1 } }]
            };
            diagram = new Diagram({
                width: '1000px', height: '530px', nodes: [node, node2, node3], snapSettings: { constraints: SnapConstraints.ShowLines }
            });
            diagram.appendTo('#diagram3');
            let objects: (NodeModel | ConnectorModel)[] = [];
            objects.push(diagram.nodes[0], diagram.nodes[1], diagram.nodes[2]);

            diagram.distribute('Center', objects);

        });

        afterAll((): void => {
            diagram.destroy();
            ele.remove();
        });

        it('Checking Undo Redo - Nodes with SpacingOptions Center', (done: Function) => {
            diagram.undo();
            expect((diagram.nodes[0].offsetX === 200 && diagram.nodes[0].offsetY === 200) &&
                (diagram.nodes[1].offsetX === 100 && diagram.nodes[1].offsetY === 100) &&
                (diagram.nodes[2].offsetX === 500 && diagram.nodes[2].offsetY === 100)).toBe(true);
            diagram.redo();
            expect((diagram.nodes[0].offsetX === 300 && diagram.nodes[0].offsetY === 200) &&
                (diagram.nodes[1].offsetX === 100 && diagram.nodes[1].offsetY === 100) &&
                (diagram.nodes[2].offsetX === 500 && diagram.nodes[2].offsetY === 100)).toBe(true);
            done();
        });
    });
    describe('Undo Redo - Nodes with SpacingOptions BottomToTop', () => {
        let diagram: Diagram;
        let ele: HTMLElement;

        beforeAll((): void => {
            const isDef = (o: any) => o !== undefined && o !== null;
            if (!isDef(window.performance)) {
                console.log("Unsupported environment, window.performance.memory is unavailable");
                this.skip(); //Skips test (in Chai)
                return;
            }
            ele = createElement('div', { id: 'diagram4' });
            document.body.appendChild(ele);
            let node: NodeModel = {
                id: 'node1', width: 200, height: 100, offsetX: 200, offsetY: 200,
                annotations: [{ content: 'Node1', style: { strokeColor: 'black', opacity: 1 } }]
            };
            let node2: NodeModel = {
                id: 'node2', width: 100, height: 100, offsetX: 100, offsetY: 100,
                annotations: [{ content: 'Node2', style: { strokeColor: 'black', opacity: 1 } }]
            };
            let connector: ConnectorModel = {
                id: 'connector1', sourcePoint: { x: 250, y: 300 }, targetPoint: { x: 400, y: 300 }
            };
            let node3: NodeModel = {
                id: 'node3', width: 100, height: 100, offsetX: 500, offsetY: 500,
                annotations: [{ content: 'Node3', style: { strokeColor: 'black', opacity: 1 } }]
            };
            diagram = new Diagram({
                width: '1000px', height: '530px', nodes: [node, node2, node3], connectors: [connector], snapSettings: { constraints: SnapConstraints.ShowLines }
            });
            diagram.appendTo('#diagram4');
            let objects: (NodeModel | ConnectorModel)[] = [];
            objects.push(diagram.nodes[0], diagram.nodes[1], diagram.nodes[2], diagram.connectors[0]);

            diagram.distribute('Middle', objects);

        });

        afterAll((): void => {
            diagram.destroy();
            ele.remove();
        });

        it('Checking Undo Redo - Nodes with SpacingOptions BottomToTop', (done: Function) => {
            diagram.undo();
            expect((diagram.nodes[1].offsetX === 100 && diagram.nodes[1].offsetY === 100) &&
                (diagram.nodes[2].offsetX === 500 && diagram.nodes[2].offsetY === 500) &&
                (diagram.nodes[0].offsetX === 200 && diagram.nodes[0].offsetY === 200) &&
                (diagram.connectors[0].sourcePoint.x === 250 && diagram.connectors[0].sourcePoint.y) === 300 &&
                (diagram.connectors[0].targetPoint.x === 400 && diagram.connectors[0].targetPoint.y) === 300).toBe(true);
            diagram.redo();
            expect((diagram.nodes[1].offsetX === 100 && diagram.nodes[1].offsetY === 100) &&
                (diagram.nodes[2].offsetX === 500 && diagram.nodes[2].offsetY === 500) &&
                (Math.round(diagram.nodes[0].offsetX) === 200 && Math.round(diagram.nodes[0].offsetY) === 233) &&
                (diagram.connectors[0].sourcePoint.x === 250 && Math.round(diagram.connectors[0].sourcePoint.y) === 367) &&
                (diagram.connectors[0].targetPoint.x === 400 && Math.round(diagram.connectors[0].targetPoint.y) === 367)).toBe(true);
            done();
        });
    });
    describe('884946-Undo redo not working for swimlane child nodes label edit', () => {
        let diagram: Diagram;
        let ele: HTMLElement;
        let mouseEvents: MouseEvents = new MouseEvents();
        beforeAll((): void => {
            const isDef = (o: any) => o !== undefined && o !== null;
            if (!isDef(window.performance)) {
                console.log("Unsupported environment, window.performance.memory is unavailable");
                this.skip(); //Skips test (in Chai)
                return;
            }
            ele = createElement('div', { id: 'diagramSwimUndo' });
            document.body.appendChild(ele);
            let nodes: NodeModel[] = [
                {
                    id: 'swimlane',
                    shape: {
                        type: 'SwimLane',
                        header: {
                            annotation: { content: 'ONLINE PURCHASE STATUS', style: { fill: '#111111' } },
                            height: 50, style: { fontSize: 11 },
                            orientation: 'Horizontal',
                        },
                        lanes: [
                            {
                                id: 'stackCanvas1',
                                header: {
                                    annotation: { content: 'CUSTOMER' }, width: 50,
                                    style: { fontSize: 11 }
                                },
                                height: 100,
                                children: [
                                    {
                                        id: 'Order',
                                        annotations: [
                                            {
                                                content: 'ORDER',
                                                style: { fontSize: 11 }
                                            }
                                        ],
                                        margin: { left: 60, top: 20 },
                                        height: 40, width: 100
                                    }
                                ],
                            },
                        ],
                        phases: [
                            {
                                id: 'phase1', offset: 170,
                                header: { content: { content: 'Phase' } }
                            },
                        ],
                        phaseSize: 20,
                    },
                    offsetX: 420, offsetY: 270,
                    height: 100,
                    width: 650
                },
            ];
            diagram = new Diagram({
                width: '1000px', height: '530px', nodes: nodes,
            });
            diagram.appendTo('#diagramSwimUndo');

        });

        afterAll((): void => {
            diagram.destroy();
            ele.remove();
        });

        it('Checking Undo Redo - After editing swimlane child node label', (done: Function) => {
            let child:NodeModel = diagram.getObject('Order');
            let diagramCanvas: HTMLElement = document.getElementById(diagram.element.id + 'content');
            let x = child.offsetX;
            let y = child.offsetY;
            mouseEvents.clickEvent(diagramCanvas, x, y);
            mouseEvents.dblclickEvent(diagramCanvas, x + 20, y);
            let textBox = document.getElementById(diagram.element.id + '_editBox');
            (textBox as HTMLInputElement).value = 'Order1';
            mouseEvents.clickEvent(diagramCanvas, x + 300, y);
            let annotation = child.annotations[0].content;
            diagram.undo();
            let annotation2 = child.annotations[0].content;
            diagram.redo();
            let annotation3 = child.annotations[0].content;
            expect(annotation2 === 'ORDER' && annotation === 'Order1' && annotation3 === 'Order1').toBe(true);
            done();
        });
    });
});