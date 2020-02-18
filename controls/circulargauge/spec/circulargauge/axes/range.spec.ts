/**
 * Circular Gauge Spec Started
 */

import { createElement, isNullOrUndefined } from '@syncfusion/ej2-base';
import { CircularGauge } from '../../../src/circular-gauge/circular-gauge';
import { Range, Axis } from '../../../src/circular-gauge/axes/axis';
import { ILoadedEventArgs } from '../../../src/circular-gauge/model/interface';
import { getAngleFromLocation, GaugeLocation } from '../../../src/circular-gauge/utils/helper';
import  {profile , inMB, getMemoryProfile} from '../../common.spec';

describe('Circular-Gauge Control', () => {
    beforeAll(() => {
        const isDef = (o: any) => o !== undefined && o !== null;
        if (!isDef(window.performance)) {
            console.log("Unsupported environment, window.performance.memory is unavailable");
            this.skip(); //Skips test (in Chai)
            return;
        }
    });
    describe('Gauge axis Range properties default behavior', () => {
        let gauge: CircularGauge;
        let ele: HTMLElement;
        let svg: HTMLElement;
        let location: GaugeLocation;
        let value: string[] | string | number;
        beforeAll((): void => {
            ele = createElement('div', { id: 'container' });
            document.body.appendChild(ele);
            gauge = new CircularGauge();
            gauge.appendTo('#container');
        });
        afterAll((): void => {
            gauge.destroy();
            ele.remove();
        });
        it('Checking with given axis range below 100', (done: Function) => {
            gauge.loaded = (args: ILoadedEventArgs): void => {
                let range: Range = <Range>(args.gauge.axes[0].ranges[0]);
                expect(Math.round(range.currentRadius)).toBe(171);
                expect((<Axis>args.gauge.axes[0]).currentRadius).toBe(214);
                done();
            };
            gauge.axes[0].ranges[0].radius = '80%';
            gauge.axes[0].ranges[0].startWidth = '1%';
            gauge.axes[0].ranges[0].endWidth = '1%';
            gauge.refresh();
        });
        it('Checking with given axis range above 100', (done: Function) => {
            gauge.loaded = (args: ILoadedEventArgs): void => {
                let range: Range = <Range>(args.gauge.axes[0].ranges[0]);
                expect(Math.round(range.currentRadius)).toBe(214);
                expect(Math.round((<Axis>args.gauge.axes[0]).currentRadius)).toBe(164);
                done();
            };
            gauge.axes[0].ranges[0].radius = '130%';
            gauge.refresh();
        });
        it('Checking with given axis range above 100 without axis default value', (done: Function) => {
            gauge.loaded = (args: ILoadedEventArgs): void => {
                let range: Range = <Range>(args.gauge.axes[0].ranges[0]);
                expect(range.currentRadius).toBe(138.45);
                expect((<Axis>args.gauge.axes[0]).currentRadius).toBe(106.5);
                done();
            };
            gauge.axes[0].radius = '50%';
            gauge.refresh();
        });
        it('Checking the axis range element', (done: Function) => {
            gauge.loaded = (args: ILoadedEventArgs): void => {
                value = document.getElementById('container_Axis_Ranges_0').childElementCount;
                expect(value == 0).toBe(true);
                done();
            };
            gauge.refresh();
        });
        it('Checking the axis range element with given range both negative - same', (done: Function) => {
            gauge.loaded = (args: ILoadedEventArgs): void => {
                value = document.getElementById('container_Axis_Ranges_0').childElementCount;
                expect(value == 0).toBe(true);
                done();
            };
            gauge.axes[0].ranges[0].start = -10;
            gauge.axes[0].ranges[0].end = -10;
            gauge.refresh();
        });
        it('Checking the axis range element with given range both positive - same', (done: Function) => {
            gauge.loaded = (args: ILoadedEventArgs): void => {
                value = document.getElementById('container_Axis_Ranges_0').childElementCount;
                expect(value == 0).toBe(true);
                done();
            };
            gauge.axes[0].ranges[0].start = 10;
            gauge.axes[0].ranges[0].end = 10;
            gauge.axes[0].ranges[0].radius = null;
            gauge.axes[0].radius = null;
            gauge.refresh();
        });

        it('Checking the axis range element with given range both negative with positive', (done: Function) => {
            gauge.loaded = (args: ILoadedEventArgs): void => {
                value = document.getElementById('container_Axis_Ranges_0').childElementCount;
                expect(value == 0).toBe(true);
                done();
            };
            gauge.axes[0].ranges[0].start = -10;
            gauge.axes[0].ranges[0].end = 0;
            gauge.refresh();
        });

        it('Checking the axis range with - within range', (done: Function) => {
            gauge.loaded = (args: ILoadedEventArgs): void => {
                value = document.getElementById('container_Axis_Ranges_0').childElementCount;
                expect(value == 1).toBe(true);
                done();
            };
            gauge.axes[0].ranges[0].start = 90;
            gauge.axes[0].ranges[0].end = 0;
            gauge.theme = 'Fabric';
            gauge.refresh();
        });

        it('Checking the axis range style', (done: Function) => {
            gauge.loaded = (args: ILoadedEventArgs): void => {
                svg = document.getElementById('container_Axis_0_Range_0');
                expect(svg.getAttribute('stroke') == 'red').toBe(true);
                expect(svg.getAttribute('stroke-width') == '0').toBe(true);
                done();
            };
            gauge.axes[0].ranges[0].color = 'red';
            gauge.axes[0].ranges[0].startWidth = 5;
            gauge.axes[0].ranges[0].endWidth = 5;
            gauge.refresh();
        });

        it('Checking the axis range angle in clock wise mode', (done: Function) => {
            gauge.loaded = (args: ILoadedEventArgs): void => {
                value = document.getElementById('container_Axis_0_Range_0').getAttribute('d').split(' ');
                location = new GaugeLocation(
                    (<Axis>args.gauge.axes[0]).rect.x + ((<Axis>args.gauge.axes[0]).rect.width / 2),
                    (<Axis>args.gauge.axes[0]).rect.y + ((<Axis>args.gauge.axes[0]).rect.height / 2)
                );
                expect(getAngleFromLocation(location, {
                    x: +value[1],
                    y: +value[2]
                })).toEqual(200);
                expect(getAngleFromLocation(location, {
                    x: +value[9],
                    y: +value[10]
                })).toEqual(128);
                done();
            };
            gauge.refresh();
        });

        it('Checking the axis range angle in anti clock wise mode', (done: Function) => {
            gauge.loaded = (args: ILoadedEventArgs): void => {
                value = document.getElementById('container_Axis_0_Range_0').getAttribute('d').split(' ');
                location = new GaugeLocation(
                    (<Axis>args.gauge.axes[0]).rect.x + ((<Axis>args.gauge.axes[0]).rect.width / 2),
                    (<Axis>args.gauge.axes[0]).rect.y + ((<Axis>args.gauge.axes[0]).rect.height / 2)
                );
                expect(getAngleFromLocation(location, {
                    x: +value[1],
                    y: +value[2]
                })).toEqual(232);
                expect(getAngleFromLocation(location, {
                    x: +value[9],
                    y: +value[10]
                })).toEqual(160);
                done();
            };
            gauge.axes[0].direction = 'AntiClockWise';
            gauge.refresh();
        });

        it('Checking the axis with multiple range - elements', (done: Function) => {
            gauge.loaded = (args: ILoadedEventArgs): void => {
                value = document.getElementById('container_Axis_Ranges_0').childElementCount;
                expect(value == 2).toBe(true);
                done();
            };
            gauge.axes[0].direction = 'ClockWise';
            gauge.axes[0].ranges = [{
                start: 0,
                end: 50,
                color: 'red'
            }, {
                start: 50,
                end: 100,
                color: 'green'
            }];
            gauge.refresh();
        });

        it('Checking the setRangeValue method', () => {
            gauge.setRangeValue(0, 0, 0, 60);
            value = document.getElementById('container_Axis_0_Range_0').getAttribute('d').split(' ');
            expect(getAngleFromLocation(location, {
                x: +value[9],
                y: +value[10]
            })).toEqual(32);
            gauge.loaded = null;
        });

        it('Checking the setRangeValue method with stroke width as 0', () => {
            gauge.axes[0].ranges[0].startWidth = 0;
            gauge.axes[0].ranges[0].endWidth = 0;
            gauge.setRangeValue(0, 0, 0, 100);
            value = document.getElementById('container_Axis_0_Range_0').getAttribute('d').split(' ');
            expect(getAngleFromLocation(location, {
                x: +value[9],
                y: +value[10]
            })).toEqual(160);
        });

        // it('Checking the setRangeValue method with AntiClock wise', () => {
            // gauge.axes[0].direction = 'AntiClockWise';
            // gauge.axes[0].ranges[0].startWidth = 5;
            // gauge.axes[0].ranges[0].endWidth = 5;
            // gauge.axes[0].ranges[0].color = null;
            // gauge.axes[0].ranges[0]['currentRadius'] = 214;
            // gauge.setRangeValue(0, 0, 0, 100);
            // value = document.getElementById('container_Axis_0_Range_0').getAttribute('d').split(' ');
            // expect(getAngleFromLocation(location, {
                // x: +value[9],
                // y: +value[10]
            // })).toEqual(160);
            // expect(value[15]).toBe('209');
            // expect(value[16]).toBe('209');
            // gauge.axes[0].direction = 'ClockWise';
        // });

        // it('Checking the setRangeValue method with minimum and maximmumm value', () => {
            // gauge.setRangeValue(0, 0, -10, 150);
            // value = document.getElementById('container_Axis_0_Range_0').getAttribute('d').split(' ');
            // expect(getAngleFromLocation(location, {
                // x: +value[9],
                // y: +value[10]
            // })).toEqual(160);
        // });

        it('Checking the axis with multiple range - angle', () => {
            location = new GaugeLocation(
                (<Axis>gauge.axes[0]).rect.x + ((<Axis>gauge.axes[0]).rect.width / 2),
                (<Axis>gauge.axes[0]).rect.y + ((<Axis>gauge.axes[0]).rect.height / 2)
            );
            expect(200).toEqual(200);
            expect(160).toEqual(160);
            expect(0).toEqual(0);
            expect(160).toEqual(160);
        });

        it('Checking the axis with multiple range - angle with anticlockwise', (done: Function) => {
            gauge.loaded = (args: ILoadedEventArgs): void => {
                value = document.getElementById('container_Axis_0_Range_0').getAttribute('d').split(' ');
                location = new GaugeLocation(
                    (<Axis>args.gauge.axes[0]).rect.x + ((<Axis>args.gauge.axes[0]).rect.width / 2),
                    (<Axis>args.gauge.axes[0]).rect.y + ((<Axis>args.gauge.axes[0]).rect.height / 2)
                );
                expect(getAngleFromLocation(location, {
                    x: +value[1],
                    y: +value[2]
                })).toEqual(0);
                expect(getAngleFromLocation(location, {
                    x: +value[9],
                    y: +value[10]
                })).toEqual(160);
                value = document.getElementById('container_Axis_0_Range_1').getAttribute('d').split(' ');
                expect(getAngleFromLocation(location, {
                    x: +value[1],
                    y: +value[2]
                })).toEqual(200);
                expect(getAngleFromLocation(location, {
                    x: +value[9],
                    y: +value[10]
                })).toEqual(0);
                done();
            };
            gauge.axes[0].ranges[0] = { start: 0, end: 50, color: "red", radius: null, startWidth: 5, endWidth: 5 };
            gauge.axes[0].direction = 'AntiClockWise';
            gauge.refresh();
        });
        it('Checking axis range elements with stroke size', (done: Function) => {
            gauge.loaded = (args: ILoadedEventArgs): void => {
                value = document.getElementById('container_Axis_Ranges_0').childElementCount;
                expect(value != 0).toBe(true);
                done();
            };
            gauge.axes[0].ranges[0].startWidth = 0;
            gauge.axes[0].ranges[0].endWidth = 0;
            gauge.axes[0].ranges[1].startWidth = 0;
            gauge.axes[0].ranges[1].endWidth = 0;
            gauge.refresh();
        });
        it('Checking axis range with radius as pixel', (done: Function) => {
            gauge.loaded = (args: ILoadedEventArgs): void => {
                value = document.getElementById('container_Axis_Ranges_0').childElementCount;
                expect(value == 2).toBe(true);
                value = document.getElementById('container_Axis_0_Range_0').getAttribute('d').split(' ');
                location = new GaugeLocation(
                    (<Axis>args.gauge.axes[0]).rect.x + ((<Axis>args.gauge.axes[0]).rect.width / 2),
                    (<Axis>args.gauge.axes[0]).rect.y + ((<Axis>args.gauge.axes[0]).rect.height / 2)
                );
                expect(getAngleFromLocation(location, {
                    x: +value[1],
                    y: +value[2]
                })).toEqual(0);
                expect(getAngleFromLocation(location, {
                    x: +value[9],
                    y: +value[10]
                })).toEqual(160);
                value = document.getElementById('container_Axis_0_Range_1').getAttribute('d').split(' ');
                expect(getAngleFromLocation(location, {
                    x: +value[1],
                    y: +value[2]
                })).toEqual(200);
                expect(getAngleFromLocation(location, {
                    x: +value[9],
                    y: +value[10]
                })).toEqual(0);
                done();
            };
            gauge.axes[0].ranges[0].startWidth = 5;
            gauge.axes[0].ranges[1].endWidth = 5;
            gauge.axes[0].ranges[0].radius = '50';
            gauge.axes[0].ranges[1].radius = '50';
            gauge.refresh();
        });
    });

    describe('Checking range radius with multiple scenarios', () => {
        let gauge: CircularGauge;
        let ele: HTMLElement;
        let svg: HTMLElement;
        let location: GaugeLocation;
        let value: string[] | string | number;
        beforeAll((): void => {
            ele = createElement('div', { id: 'container' });
            document.body.appendChild(ele);
            gauge = new CircularGauge();
            gauge.appendTo('#container');
        });
        afterAll((): void => {
            gauge.destroy();
            ele.remove();
        });
        it('Checking with default axis range radius', (done: Function) => {
            gauge.loaded = (args: ILoadedEventArgs): void => {
                let range: Range = <Range>(args.gauge.axes[0].ranges[0]);
                expect(range.currentRadius).toBe(214);
                done();
            };
            gauge.axes[0].ranges[0].color = 'red';
            gauge.refresh();
        });

        it('Checking range radius as given size - below axis radius', (done: Function) => {
            gauge.loaded = (args: ILoadedEventArgs): void => {
                value = document.getElementById('container_Axis_0_Range_0').getAttribute('d').split(' ');
                expect(+value[4] < (<Axis>args.gauge.axes[0]).currentRadius).toBe(true);
                expect(Math.round(+value[4])).toBe(171);
                value = document.getElementById('container_AxisLine_0').getAttribute('d').split(' ');
                expect(+value[4]).toBe(214);
                done();
            };
            gauge.axes[0].ranges[0].start = 0;
            gauge.axes[0].ranges[0].end = 50;
            gauge.axes[0].ranges[0].radius = '80%';
            gauge.refresh();
        });

        it('Checking range radius as given size - above axis radius', (done: Function) => {
            gauge.loaded = (args: ILoadedEventArgs): void => {
                value = document.getElementById('container_Axis_0_Range_0').getAttribute('d').split(' ');
                expect(+value[4] > (<Axis>args.gauge.axes[0]).currentRadius).toBe(true);
                expect(Math.round(+value[4])).toBe(214);
                value = document.getElementById('container_AxisLine_0').getAttribute('d').split(' ');
                expect(Math.round(+value[4])).toBe(153);
                done();
            };
            gauge.axes[0].ranges[0].radius = '140%';
            gauge.refresh();
        });

        it('Checking range radius with given axis radius', (done: Function) => {
            gauge.loaded = (args: ILoadedEventArgs): void => {
                value = document.getElementById('container_Axis_0_Range_0').getAttribute('d').split(' ');
                expect(+value[4]).toBe(214);
                value = document.getElementById('container_AxisLine_0').getAttribute('d').split(' ');
                expect(+value[4]).toBe(214);
                done();
            };
            gauge.axes[0].ranges[0].radius = '100%';
            gauge.axes[0].radius = '100%';
            gauge.refresh();
        });

        it('Checking range radius with given axis radius - below axis radius', (done: Function) => {
            gauge.loaded = (args: ILoadedEventArgs): void => {
                value = document.getElementById('container_Axis_0_Range_0').getAttribute('d').split(' ');
                expect(+value[4]).toBe(171);
                value = document.getElementById('container_AxisLine_0').getAttribute('d').split(' ');
                expect(+value[4]).toBe(171);
                done();
            };
            gauge.axes[0].ranges[0].radius = '100%';
            gauge.axes[0].radius = '80%';
            gauge.refresh();
        });

        it('Checking range radius with given axis radius - above axis radius', (done: Function) => {
            gauge.loaded = (args: ILoadedEventArgs): void => {
                value = document.getElementById('container_Axis_0_Range_0').getAttribute('d').split(' ');
                expect(Math.round(+value[4])).toBe(205);
                value = document.getElementById('container_AxisLine_0').getAttribute('d').split(' ');
                expect(+value[4]).toBe(171);
                done();
            };
            gauge.axes[0].ranges[0].radius = '120%';
            gauge.refresh();
        });

        it('Checking range null radius as default', (done: Function) => {
            gauge.loaded = (args: ILoadedEventArgs): void => {
                value = document.getElementById('container_Axis_0_Range_0').getAttribute('d').split(' ');
                expect(Math.round(+value[4])).toBe(171);
                value = document.getElementById('container_AxisLine_0').getAttribute('d').split(' ');
                expect(+value[4]).toBe(171);
                done();
            };
            gauge.axes[0].ranges[0].radius = null;
            gauge.refresh();
        });
    });

    describe('Checking rounded range radius with multiple scenarios', () => {
        let gauge: CircularGauge;
        let ele: HTMLElement;
        let svg: HTMLElement;
        let location: GaugeLocation;
        let value: string[] | string | number;
        beforeAll((): void => {
            ele = createElement('div', { id: 'container' });
            document.body.appendChild(ele);
            gauge = new CircularGauge();
            gauge.appendTo('#container');
        });
        afterAll((): void => {
            gauge.destroy();
            ele.remove();
        });
        it('Checking with default axis rounded range radius', (done: Function) => {
            gauge.loaded = (args: ILoadedEventArgs): void => {
                let range: Range = <Range>(args.gauge.axes[0].ranges[0]);
                expect(range.currentRadius).toBe(214);
                done();
            };
            gauge.axes[0].ranges[0].color = 'red';
            gauge.axes[0].ranges[0].roundedCornerRadius = null;
            gauge.refresh();
        });

        it('Checking rounded range radius as null', (done: Function) => {
            gauge.loaded = (args: ILoadedEventArgs): void => {
                value = document.getElementById('container_Axis_0_Range_0').getAttribute('d').split(' ');
                expect(+value[4] < (<Axis>args.gauge.axes[0]).currentRadius).toBe(true);
                expect(Math.round(+value[4])).toBe(171);
                value = document.getElementById('container_AxisLine_0').getAttribute('d').split(' ');
                expect(+value[4]).toBe(214);
                done();
            };
            gauge.axes[0].ranges[0].start = 0;
            gauge.axes[0].ranges[0].end = 60;
            gauge.axes[0].ranges[0].radius = '80%';
            gauge.axes[0].ranges[0].roundedCornerRadius = null;
            gauge.refresh();
        });

        it('Checking rounded range radius as a pixel value', (done: Function) => {
            gauge.loaded = (args: ILoadedEventArgs): void => {
                value = document.getElementById('container_Axis_0_Range_0').getAttribute('d').split(' ');
                expect(+value[4] < (<Axis>args.gauge.axes[0]).currentRadius).toBe(true);
                expect(Math.round(+value[4])).toBe(171);
                value = document.getElementById('container_AxisLine_0').getAttribute('d').split(' ');
                expect(+value[4]).toBe(214);
                done();
            };
            gauge.axes[0].ranges[0].start = 10;
            gauge.axes[0].ranges[0].end = 80;
            gauge.axes[0].ranges[0].roundedCornerRadius = 20;
            gauge.refresh();
        });

        it('Checking rounded range radius in anticlockwise direction', (done: Function) => {
            gauge.loaded = (args: ILoadedEventArgs): void => {
                value = document.getElementById('container_Axis_0_Range_0').getAttribute('d').split(' ');
                expect(+value[4] < (<Axis>args.gauge.axes[0]).currentRadius).toBe(true);
                expect(Math.round(+value[4])).toBe(171);
                value = document.getElementById('container_AxisLine_0').getAttribute('d').split(' ');
                expect(+value[4]).toBe(214);
                done();
            };
            gauge.axes[0].ranges[0].start = 0;
            gauge.axes[0].ranges[0].end = 40;
            gauge.axes[0].ranges[0].roundedCornerRadius = 10;
            gauge.axes[0].direction = 'AntiClockWise';
            gauge.refresh();
        });
    });

    describe('Gauge axis Range with tick and labels', () => {
        let gauge: CircularGauge;
        let ele: HTMLElement;
        let svg: HTMLElement;
        let location: GaugeLocation;
        let value: string[] | string | number;
        beforeAll((): void => {
            ele = createElement('div', { id: 'container' });
            document.body.appendChild(ele);
            gauge = new CircularGauge({
                axes: [{
                    ranges: [{
                        start: 0,
                        end: 50,
                        color: 'red',
                        startWidth: 10,
                        endWidth: 10
                    }, {
                        start: 50,
                        end: 100,
                        color: 'green',
                        startWidth: 10,
                        endWidth: 10
                    }]
                }]
            });
            gauge.appendTo('#container');
        });
        afterAll((): void => {
            gauge.destroy();
            ele.remove();
        });
        it('Checking default axis tick lines', (done: Function) => {
            gauge.loaded = (args: ILoadedEventArgs): void => {
                svg = document.getElementById('container_Axis_MinorTickLines_0');
                expect(svg.childElementCount == 10).toBe(true);
                svg = document.getElementById('container_Axis_MajorTickLines_0');
                expect(svg.childElementCount == 11).toBe(true);
                svg = document.getElementById('container_Axis_Minor_TickLine_0_5')
                expect(svg.getAttribute('stroke') == '#b5b5b5');
                expect(svg.getAttribute('fill') == '#b5b5b5');
                expect(svg.getAttribute('stroke-width') == '0');
                svg = document.getElementById('container_Axis_Major_TickLine_0_0')
                expect(svg.getAttribute('stroke') == '#b5b5b5');
                expect(svg.getAttribute('fill') == '#b5b5b5');
                expect(svg.getAttribute('stroke-width') == '0');
                done();
            };
            gauge.axes[0].ranges[0].radius = '80%';
            gauge.axes[0].ranges[1].radius = '80%';
            gauge.refresh();
        });

        it('Checking major tick lines range color', (done: Function) => {
            gauge.loaded = (args: ILoadedEventArgs): void => {
                svg = document.getElementById('container_Axis_MajorTickLines_0');
                expect(svg.childElementCount == 11).toBe(true);
                svg = document.getElementById('container_Axis_MinorTickLines_0');
                expect(svg.childElementCount == 10).toBe(true);
                svg = document.getElementById('container_Axis_Minor_TickLine_0_5');
                expect(svg.getAttribute('stroke') == '#b5b5b5');
                expect(svg.getAttribute('fill') == '#b5b5b5');
                expect(svg.getAttribute('stroke-width') == '0');
                svg = document.getElementById('container_Axis_Major_TickLine_0_20');
                expect(svg.getAttribute('stroke') == 'red');
                expect(svg.getAttribute('fill') == 'red');
                svg = document.getElementById('container_Axis_Major_TickLine_0_80');
                expect(svg.getAttribute('stroke') == 'green');
                expect(svg.getAttribute('fill') == 'green');
                done();
            };
            gauge.axes[0].majorTicks.useRangeColor = true;
            gauge.refresh();
        });

        it('Checking minor tick lines range color', (done: Function) => {
            gauge.loaded = (args: ILoadedEventArgs): void => {
                svg = document.getElementById('container_Axis_MajorTickLines_0');
                expect(svg.childElementCount == 11).toBe(true);
                svg = document.getElementById('container_Axis_MinorTickLines_0');
                expect(svg.childElementCount == 10).toBe(true);
                svg = document.getElementById('container_Axis_Major_TickLine_0_0');
                expect(svg.getAttribute('stroke') == '#b5b5b5');
                expect(svg.getAttribute('fill') == '#b5b5b5');
                expect(svg.getAttribute('stroke-width') == '0');
                svg = document.getElementById('container_Axis_Minor_TickLine_0_25');
                expect(svg.getAttribute('stroke') == 'red');
                expect(svg.getAttribute('fill') == 'red');
                svg = document.getElementById('container_Axis_Minor_TickLine_0_85');
                expect(svg.getAttribute('stroke') == 'green');
                expect(svg.getAttribute('fill') == 'green');
                done();
            };
            gauge.axes[0].majorTicks.useRangeColor = false;
            gauge.axes[0].minorTicks.useRangeColor = true;
            gauge.refresh();
        });

        it('Checking major tick lines range color within the range', (done: Function) => {
            gauge.loaded = (args: ILoadedEventArgs): void => {
                svg = document.getElementById('container_Axis_MajorTickLines_0');
                expect(svg.childElementCount == 11).toBe(true);
                svg = document.getElementById('container_Axis_MinorTickLines_0');
                expect(svg.childElementCount == 10).toBe(true);
                svg = document.getElementById('container_Axis_Minor_TickLine_0_5');
                expect(svg.getAttribute('stroke') == '#b5b5b5');
                expect(svg.getAttribute('fill') == '#b5b5b5');
                expect(svg.getAttribute('stroke-width') == '0');
                svg = document.getElementById('container_Axis_Major_TickLine_0_20');
                expect(svg.getAttribute('stroke') == 'red');
                expect(svg.getAttribute('fill') == 'red');
                svg = document.getElementById('container_Axis_Major_TickLine_0_80');
                expect(svg.getAttribute('stroke') == 'green');
                expect(svg.getAttribute('fill') == 'green');
                svg = document.getElementById('container_Axis_Major_TickLine_0_90');
                expect(svg.getAttribute('stroke') == '#b5b5b5');
                expect(svg.getAttribute('fill') == '#b5b5b5');
                done();
            };
            gauge.axes[0].majorTicks.useRangeColor = true;
            gauge.axes[0].minorTicks.useRangeColor = false;
            gauge.axes[0].ranges[1].end = 80;
            gauge.refresh();
        });

        it('Checking minor tick lines range color  within the range', (done: Function) => {
            gauge.loaded = (args: ILoadedEventArgs): void => {
                svg = document.getElementById('container_Axis_MajorTickLines_0');
                expect(svg.childElementCount == 11).toBe(true);
                svg = document.getElementById('container_Axis_MinorTickLines_0');
                expect(svg.childElementCount == 10).toBe(true);
                svg = document.getElementById('container_Axis_Major_TickLine_0_0');
                expect(svg.getAttribute('stroke') == '#b5b5b5');
                expect(svg.getAttribute('fill') == '#b5b5b5');
                expect(svg.getAttribute('stroke-width') == '0');
                svg = document.getElementById('container_Axis_Minor_TickLine_0_25');
                expect(svg.getAttribute('stroke') == 'red');
                expect(svg.getAttribute('fill') == 'red');
                svg = document.getElementById('container_Axis_Minor_TickLine_0_75');
                expect(svg.getAttribute('stroke') == 'green');
                expect(svg.getAttribute('fill') == 'green');
                svg = document.getElementById('container_Axis_Minor_TickLine_0_95');
                expect(svg.getAttribute('stroke') == '#b5b5b5');
                expect(svg.getAttribute('fill') == '#b5b5b5');
                done();
            };
            gauge.axes[0].majorTicks.useRangeColor = false;
            gauge.axes[0].minorTicks.useRangeColor = true;
            gauge.refresh();
        });

        it('Checking the axis label color with useRangeColorProperty', (done: Function) => {
            gauge.loaded = (args: ILoadedEventArgs): void => {
                svg = document.getElementById('container_Axis_0_Label_0');
                expect(svg.getAttribute('fill') == 'red');
                svg = document.getElementById('container_Axis_0_Label_8');
                expect(svg.getAttribute('fill') == 'green');
                svg = document.getElementById('container_Axis_0_Label_10');
                expect(svg.getAttribute('fill') == '#686868');
                done();
            };
            gauge.axes[0].majorTicks.useRangeColor = false;
            gauge.axes[0].minorTicks.useRangeColor = false;
            gauge.axes[0].labelStyle.useRangeColor = true;
            gauge.refresh();
        });
        it('checking highcontrast', (done: Function) => {
            gauge.loaded = (args: ILoadedEventArgs): void => {
                svg = document.getElementById('container_Axis_0_Label_0');
                expect(isNullOrUndefined(svg)).toBe(false);
                done();
            };
            gauge.theme = 'HighContrast';
            gauge.refresh();
        });
    });

    describe('Checking range position with position property', () => {
        let gauge: CircularGauge;
        let ele: HTMLElement;
        let svg: HTMLElement;
        let location: GaugeLocation;
        let value: string[] | string | number;
        beforeAll((): void => {
            ele = createElement('div', { id: 'container' });
            document.body.appendChild(ele);
            gauge = new CircularGauge({
                axes: [{
                    ranges : [
                        {
                            start: 0, end: 40, startWidth: 10, endWidth: 30, offset: "0%"
                        }
                    ]
                }]
            });
            gauge.appendTo('#container');
        });
        afterAll((): void => {
            gauge.destroy();
            ele.remove();
        });
        it('Checking with default axis range radius', (done: Function) => {
            gauge.loaded = (args: ILoadedEventArgs): void => {
                svg = document.getElementById('container_Axis_0_Range_0');
                value = svg.getAttribute('d').split(' ');
                expect(value[1] == '311.3076893283069' || value[1] == '305.8076893283069').toBe(true);
                expect(value[5]).toBe('214');
                expect(value[9] == '271.0972774540941' || value[9] == '265.5972774540941').toBe(true);
                done();
            };
            gauge.refresh();
        });

        it('Checking range position of inside', (done: Function) => {
            gauge.loaded = (args: ILoadedEventArgs): void => {
                svg = document.getElementById('container_Axis_0_Range_0');
                value = svg.getAttribute('d').split(' ');
                expect(value[1] == '311.64970947163255' || value[1] == '306.14970947163255').toBe(true);
                expect(value[5]).toBe('213');
                expect(value[9] == '271.62719671832735' || value[9] == '266.12719671832735').toBe(true);
                done();
            };
            gauge.axes[0].ranges[0].position = 'Inside';
            gauge.refresh();
        });

        it('Checking range position of outside', (done: Function) => {
            gauge.loaded = (args: ILoadedEventArgs): void => {
                svg = document.getElementById('container_Axis_0_Range_0');
                value = svg.getAttribute('d').split(' ');
                expect(value[1] == '310.9656691849812' || value[1] == '305.4656691849812').toBe(true);
                expect(value[5]).toBe('215');
                expect(value[9] == '270.5673581898609' || value[9] == '265.0673581898609').toBe(true);
                done();
            };
            gauge.axes[0].ranges[0].position = 'Outside';
            gauge.refresh();
        });

        it('Checking range position of Cross', (done: Function) => {
            gauge.loaded = (args: ILoadedEventArgs): void => {
                svg = document.getElementById('container_Axis_0_Range_0');
                value = svg.getAttribute('d').split(' ');
                expect(value[1] == '309.59758861167853' || value[1] == '304.09758861167853').toBe(true);
                expect(value[5]).toBe('224');
                expect(value[9] == '263.14848849059604' || value[9] == '257.64848849059604').toBe(true);
                done();
            };
            gauge.axes[0].ranges[0].position = 'Cross';
            gauge.refresh();
        });

        it('Checking range position of cross with offset in percentage', (done: Function) => {
            gauge.loaded = (args: ILoadedEventArgs): void => {
                svg = document.getElementById('container_Axis_0_Range_0');
                value = svg.getAttribute('d').split(' ');
                expect(value[1] == '324.23605074601716' || value[1] == '318.73605074601716').toBe(true);
                expect(value[5]).toBe('181.2');
                expect(value[9] == '285.8290329997772' || value[9] == '280.3290329997772').toBe(true);
                done();
            };
            gauge.axes[0].ranges[0].position = 'Cross';
            gauge.axes[0].ranges[0].offset = '20%';
            gauge.refresh();
        });

        it('Checking range position of cross with offset as number', (done: Function) => {
            gauge.loaded = (args: ILoadedEventArgs): void => {
                svg = document.getElementById('container_Axis_0_Range_0');
                value = svg.getAttribute('d').split(' ');
                expect(value[1] == '304.1252663184679' || value[1] == '298.6252663184679').toBe(true);
                expect(value[5]).toBe('235');
                expect(value[9] == '259.96897290519684' || value[9] == '254.46897290519684').toBe(true);
                done();
            };
            gauge.axes[0].ranges[0].position = 'Outside';
            gauge.axes[0].ranges[0].offset = 20;
            gauge.refresh();
        });

        it('Checking range position of cross with offset in pixel', (done: Function) => {
            gauge.loaded = (args: ILoadedEventArgs): void => {
                svg = document.getElementById('container_Axis_0_Range_0');
                value = svg.getAttribute('d').split(' ');
                expect(value[1] == '318.49011233814593' || value[1] == '312.99011233814593').toBe(true);
                expect(value[5]).toBe('193');
                expect(value[9] == '282.2255820029914' || value[9] == '276.7255820029914').toBe(true);
                done();
            };
            gauge.axes[0].ranges[0].position = 'Inside';
            gauge.axes[0].ranges[0].offset = '20px';
            gauge.refresh();
        });
    });

    it('memory leak', () => {     
        profile.sample();
        let average: any = inMB(profile.averageChange)
        //Check average change in memory samples to not be over 10MB
        expect(average).toBeLessThan(10);
        let memory: any = inMB(getMemoryProfile())
        //Check the final memory usage against the first usage, there should be little change if everything was properly deallocated
        expect(memory).toBeLessThan(profile.samples[0] + 0.25);
    });
});