/**
 * Resize spec
 */
import { Browser } from "@syncfusion/ej2-base";
import { CLS_RTE_RES_HANDLE } from "../../../src/rich-text-editor/base/classes";
import { renderRTE, destroy } from "./../render.spec";
import { ToolbarType } from "../../../src/rich-text-editor/index";

describe("Resize - Actions Module", () => {

    describe("Rendering Resizable RTE with Div element", () => {
        let rteEle: HTMLElement;
        let rteObj: any;
        let clickEvent: any;
        let resizeStartSpy: jasmine.Spy = jasmine.createSpy('onresizeStart');
        let resizingSpy: jasmine.Spy = jasmine.createSpy('onresizing');
        let resizeStopSpy: jasmine.Spy = jasmine.createSpy('onresizeStop');

        beforeEach((done: Function) => {
            rteObj = renderRTE({
                enableResize: true,
                resizeStart: resizeStartSpy,
                resizing: resizingSpy,
                resizeStop: resizeStopSpy
            });
            rteEle = rteObj.element;
            done();
        });

        afterEach((done: Function) => {
            destroy(rteObj);
            done();
        });

        it("Element availability testing", () => {
            expect(rteEle.querySelector('.' + CLS_RTE_RES_HANDLE) != null).toBe(true);
        });

        it('resize start', (done) => {
            let trg = (rteEle.querySelector('.' + CLS_RTE_RES_HANDLE) as HTMLElement);
            clickEvent = document.createEvent("MouseEvents");
            clickEvent.initEvent("mousedown", false, true);
            trg.dispatchEvent(clickEvent);
            (rteObj.resizeModule as any).resizeStart(clickEvent);
            setTimeout(() => {
                expect(resizeStartSpy).toHaveBeenCalled();
                done();
            }, 400);
        });

        it('resize end', (done) => {
            let trg = (rteEle.querySelector('.' + CLS_RTE_RES_HANDLE) as HTMLElement);
            clickEvent = document.createEvent("MouseEvents");
            clickEvent.initEvent("mousedown", false, true);
            trg.dispatchEvent(clickEvent);
            (rteObj.resizeModule as any).resizeStart(clickEvent);
            setTimeout(() => {
                clickEvent = document.createEvent("MouseEvents");
                clickEvent.initEvent("mouseup", false, true);
                trg.dispatchEvent(clickEvent);
                (rteObj.resizeModule as any).stopResize(clickEvent);
                setTimeout(() => {
                    expect(resizeStopSpy).toHaveBeenCalled();
                    done();
                }, 400);
            }, 400);
        });

        it('resizing - mousemove', (done) => {
            let trg = (rteObj.element.querySelector('.' + CLS_RTE_RES_HANDLE) as HTMLElement);
            clickEvent = document.createEvent("MouseEvents");
            clickEvent.initEvent("mousedown", false, true);
            trg.dispatchEvent(clickEvent);
            (rteObj.resizeModule as any).resizeStart(clickEvent);
            setTimeout(() => {
                clickEvent = document.createEvent("MouseEvents");
                clickEvent.initEvent("mousemove", false, true);
                trg.dispatchEvent(clickEvent);
                (rteObj.resizeModule as any).performResize(clickEvent);
                setTimeout(() => {
                    expect(resizingSpy).toHaveBeenCalled();
                    done();
                }, 400);
            }, 400);
        });
    });


    describe("Rendering Resizable RTE with Iframe element", () => {
        let rteEle: HTMLElement;
        let rteObj: any;
        let clickEvent: any;
        function callbackfunction(args: any){
            args.cancel = true;
        }
        beforeEach((done: Function) => {
            rteObj = renderRTE({
                enableResize: true,
                iframeSettings: {
                    enable: true
                },
                resizeStart: callbackfunction,
                resizing: callbackfunction
            });
            rteEle = rteObj.element;
            done();
        });

        afterEach((done: Function) => {
            destroy(rteObj);
            done();
        });

        it("Element availability testing", () => {
            expect(rteEle.querySelector('.' + CLS_RTE_RES_HANDLE) != null).toBe(true);
        });

        it('resize event - cancel', (done) => {
            let trg = (rteEle.querySelector('.' + CLS_RTE_RES_HANDLE) as HTMLElement);
            clickEvent = document.createEvent("UIEvent");
            clickEvent.initUIEvent("touchstart", false, true);
            trg.dispatchEvent(clickEvent);
            (rteObj.resizeModule as any).resizeStart(clickEvent);
            setTimeout(() => {
                clickEvent = document.createEvent("UIEvent");
                clickEvent.initUIEvent("touchmove", false, true);
                clickEvent.pointerType = 'touch';
                clickEvent.touches = [{
                    pageX: 100,
                    pageY: 100,
                }]
                trg.dispatchEvent(clickEvent);
                (rteObj.resizeModule as any).performResize(clickEvent);
                done();
            }, 400);
        });
    });

    describe('Resize for blazor and IE coverage', () => {
        let rteEle: HTMLElement;
        let rteObj: any;
        let clickEvent: any;
        let browseinfo: any;

        beforeAll((done: Function) => {
            browseinfo = Browser.info.name;
            Browser.info.name = 'msie';
            (window as any).sfBlazor={ renderComplete:()=> {return true;}};
            (window as any).Blazor = null;
            rteObj = renderRTE({
                enableResize: true
            });
            rteEle = rteObj.element;
            done();
        });

        afterAll((done: Function) => {
            Browser.info.name = browseinfo;
            delete (window as any).Blazor;
            delete (window as any).sfBlazor;
            destroy(rteObj);
            done();
        });

        it('resize event - mouse', (done) => {
            let trg = (rteEle.querySelector('.' + CLS_RTE_RES_HANDLE) as HTMLElement);
            clickEvent = document.createEvent("MouseEvents");
            clickEvent.initEvent("mousedown", false, true);
            trg.dispatchEvent(clickEvent);
            (rteObj.resizeModule as any).resizeStart(clickEvent);
            setTimeout(() => {
                clickEvent = document.createEvent("MouseEvents");
                clickEvent.initEvent("mousemove", false, true);
                trg.dispatchEvent(clickEvent);
                (rteObj.resizeModule as any).performResize(clickEvent);
                setTimeout(() => {
                    clickEvent = document.createEvent("MouseEvents");
                    clickEvent.initEvent("mouseup", false, true);
                    trg.dispatchEvent(clickEvent);
                    (rteObj.resizeModule as any).stopResize(clickEvent);
                    expect(Object.keys(window).indexOf('Blazor') >= 0).toBe(true);
                    done();
                }, 400);
            }, 400);
        });

        it('resize event - touch', (done) => {
            let trg = (rteEle.querySelector('.' + CLS_RTE_RES_HANDLE) as HTMLElement);
            clickEvent = document.createEvent("UIEvent");
            clickEvent.initUIEvent("touchstart", false, true);
            trg.dispatchEvent(clickEvent);
            (rteObj.resizeModule as any).resizeStart(clickEvent);
            setTimeout(() => {
                clickEvent = document.createEvent("UIEvent");
                clickEvent.initUIEvent("touchmove", false, true);
                clickEvent.pointerType = 'touch';
                clickEvent.touches = [{
                    pageX: 100,
                    pageY: 100,
                }]
                trg.dispatchEvent(clickEvent);
                (rteObj.resizeModule as any).performResize(clickEvent);
                done();
            }, 400);
        });
    });

    describe('EJ2-49434 - Resize icon on RTL mode', () => {
        let rteEle: HTMLElement;
        let rteObj: any;
        beforeEach((done: Function) => {
            rteObj = renderRTE({
                enableRtl:true,
                enableResize:true
            });
            rteEle = rteObj.element;
            done();
        });
        afterEach((done: Function) => {
            destroy(rteObj);
            done();
        });

        it("class availability testing", () => {
            let trg = (rteEle.querySelector('.' + CLS_RTE_RES_HANDLE) as HTMLElement);
            expect(trg.classList.contains('e-south-west')).toBe(true);
        });
    });

    describe('EJ2-53245 - Resize RTE content not working properly when floating toolbar shown', () => {
        let rteObj: any;
        let clickEvent: any;
        beforeEach((done: Function) => {
            document.body.style.height = '2000px';
            rteObj = renderRTE({
                enableResize: true,
                toolbarSettings: {
                    enableFloating: true,
                    type: ToolbarType.Expand
                },
                height: '800px'
            });
            done();
        });
        afterEach(() => {
            document.body.style.height = '';
            destroy(rteObj);
        });
        it('Call perform resize', (done: Function) => {
            expect(document.querySelector('.e-richtexteditor .e-toolbar').classList.contains('e-rte-tb-float')).toBe(false);
            window.scrollTo(0, 200);
            const trg : HTMLElement = (rteObj.element.querySelector('.' + CLS_RTE_RES_HANDLE) as HTMLElement);
            clickEvent = document.createEvent('MouseEvents');
            clickEvent.initEvent('mousemove', false, true);
            trg.dispatchEvent(clickEvent);
            setTimeout(() => {
                expect(document.querySelector('.e-richtexteditor .e-toolbar').classList.contains('e-rte-tb-float')).toBe(true);
                (rteObj.resizeModule as any).performResize(clickEvent);
                window.scrollTo(0, 0);
                done();
            }, 500);
        });
    });
});
