import Vue, { CreateElement } from 'vue'
import { Component, Prop, Provide } from 'vue-property-decorator'
import { vfluents, Button, Chart, TextBlock } from '../../components'
import { ViewCommon } from '../components'
import { theme } from '../config'
import * as utils from '../../components/utils'
const dataChartTimeSize: number = 256

@Component
export default class ViewIcon extends ViewCommon {
        @Provide() name: string = 'Chart'
        @Provide() description: string = '基於Chart.js封裝的常用圖表'
        @Provide() dataChartLabels: string[] = ['1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992']
        @Provide() dataChartConfig: any[] = [{ label: '國內生產總值' }, { label: '第一產業' }, { label: '第二產業' }, { label: '第三產業' }]
        @Provide() dataChartConfigStacked: any[] = [{ label: '國內生產總值', stack: '0' }, { label: '第一產業', stack: '1' }, { label: '第二產業', 'stack': '1' }, { label: '第三產業', stack: '1' }]
        @Provide() dataChartConfigStepped: any[] = [{ label: '國內生產總值', type: 'SteppedLine' }, { label: '第一產業' }, { label: '第二產業' }, { label: '第三產業' }]
        @Provide() dataChartConfigCubic: any[] = [{ label: '國內生產總值', type: 'CubicLine' }, { label: '第一產業' }, { label: '第二產業' }, { label: '第三產業' }]
        @Provide() dataChartConfigDash: any[] = [{ label: '國內生產總值', type: 'DashedLine' }, { label: '第一產業' }, { label: '第二產業' }, { label: '第三產業' }]
        @Provide() dataChartConfigFill: any[] = [{ label: '國內生產總值', fill: 'end' }, { label: '第一產業', fill: 'start' }, { label: '第二產業', fill: 0.5 }, { label: '第三產業', fill: 'origin' }]
        @Provide() dataChartConfigMixed: any[] = [{ label: '國內生產總值', type: 'Line', fill: 0.2 }, { label: '第一產業' }, { label: '第二產業' }, { label: '第三產業' }]
        @Provide() dataChartData: number[][] = [
                [5323.4, 5962.7, 7208.1, 9016.0, 10275.2, 12058.6, 15042.8, 16992.3, 18667.8, 21781.5, 26923.5],
                [1777.4, 1978.4, 2316.1, 2564.4, 2788.7, 3233.0, 3865.4, 4265.9, 5062.0, 5342.2, 5866.6],
                [2383.0, 2646.2, 3105.7, 3866.6, 4492.7, 5251.6, 6587.2, 7278.0, 7717.4, 9102.2, 11699.5],
                [1163.0, 1338.1, 1786.3, 2585.0, 2993.8, 3574.0, 4590.3, 5448.4, 5888.4, 7337.1, 9357.4]
        ]
        @Provide() dataChartLabelsBegin: string[] = ['第一產業', '第二產業', '第三產業']
        @Provide() dataChartDataBegin: number[][] = [[1777.4, 2383.0, 1163.0]]

        @Provide() dataChartConfigTime: any[] = [{ label: '時序一', fill: 0.2 }, { label: '時序二', fill: 0.2 }, { label: '時序三', fill: 0.2 }]
        @Provide() dataChartLabelsTime: string[] = new Array<string>(dataChartTimeSize)
        @Provide() dataChartDataTime: number[][] = [
                new Array<number>(dataChartTimeSize),
                new Array<number>(dataChartTimeSize),
                new Array<number>(dataChartTimeSize)
        ]

        public componentView(h: CreateElement) {
                return (
                        <article class="container-fluid">
                                <h5>Bar型圖表</h5>
                                <section class="row">
                                        <div class="col-12 col-xl-6">
                                                <Chart type="Bar" labels={this.dataChartLabels} config={this.dataChartConfig} data={this.dataChartData} title="垂直型" />
                                        </div>
                                        <div class="col-12 col-xl-6">
                                                <Chart type="HorizontalBar" labels={this.dataChartLabels} config={this.dataChartConfig} data={this.dataChartData} title="水平型" />
                                        </div>
                                        <div class="col-12 col-xl-6">
                                                <Chart type="StackedBar" labels={this.dataChartLabels} config={this.dataChartConfig} data={this.dataChartData} title="堆疊型" />
                                        </div>
                                        <div class="col-12 col-xl-6">
                                                <Chart type="StackedBar" labels={this.dataChartLabels} config={this.dataChartConfigStacked} data={this.dataChartData} title="堆疊組" />
                                        </div>
                                </section>
                                <code class="language-html">
                                </code>
                                <h5>Line型圖表</h5>
                                <section class="row">
                                        <div class="col-12 col-xl-6">
                                                <Chart type="Line" labels={this.dataChartLabels} config={this.dataChartConfig} data={this.dataChartData} title="通用型" />
                                        </div>
                                        <div class="col-12 col-xl-6">
                                                <Chart type="Line" labels={this.dataChartLabels} config={this.dataChartConfigStepped} data={this.dataChartData} title="折線型" />
                                        </div>
                                        <div class="col-12 col-xl-6">
                                                <Chart type="Line" labels={this.dataChartLabels} config={this.dataChartConfigCubic} data={this.dataChartData} title="曲線型" />
                                        </div>
                                        <div class="col-12 col-xl-6">
                                                <Chart type="Line" labels={this.dataChartLabels} config={this.dataChartConfigDash} data={this.dataChartData} title="虛線型" />
                                        </div>
                                        <div class="col-12 col-xl-6">
                                                <Chart type="Line" labels={this.dataChartLabels} config={this.dataChartConfigFill} data={this.dataChartData} title="區域型" />
                                        </div>
                                        <div class="col-12 col-xl-6">
                                                <Chart type="StackedLine" labels={this.dataChartLabels} config={this.dataChartConfig} data={this.dataChartData} title="堆疊型" />
                                        </div>
                                </section>
                                <code class="language-html">
                                </code>
                                <h5>Point型圖表</h5>
                                <section class="row">
                                        <div class="col-12 col-xl-6">
                                                <Chart type="Point" labels={this.dataChartLabels} config={this.dataChartConfig} data={this.dataChartData} title="圓點型" />
                                        </div>
                                        <div class="col-12 col-xl-6">
                                                <Chart type="RectPoint" labels={this.dataChartLabels} config={this.dataChartConfig} data={this.dataChartData} title="方塊型" />
                                        </div>
                                        <div class="col-12 col-xl-6">
                                                <Chart type="RotPoint" labels={this.dataChartLabels} config={this.dataChartConfig} data={this.dataChartData} title="菱形型" />
                                        </div>
                                </section>
                                <code class="language-html"></code>
                                <h5>其他類型</h5>
                                <section class="row">
                                        <div class="col-12 col-xl-6">
                                                <Chart type="Doughnut" labels={this.dataChartLabelsBegin} data={this.dataChartDataBegin} title="同心環" />
                                        </div>
                                        <div class="col-12 col-xl-6">
                                                <Chart type="Pie" labels={this.dataChartLabelsBegin} data={this.dataChartDataBegin} title="同心園" />
                                        </div>
                                        <div class="col-12 col-xl-6">
                                                <Chart type="Radar" labels={this.dataChartLabels} config={this.dataChartConfig} data={this.dataChartData} title="多邊形"
                                                />
                                        </div>
                                        <div class="col-12 col-xl-6">
                                                <Chart type="Bar" labels={this.dataChartLabels} config={this.dataChartConfigMixed} data={this.dataChartData} title="混合型"
                                                />
                                        </div>
                                </section>
                                <h5>時序圖表</h5>
                                <section class="row">
                                        <div class="col-12">
                                                <Chart
                                                        type="CubicLine"
                                                        labels={this.dataChartLabelsTime}
                                                        config={this.dataChartConfigTime}
                                                        data={this.dataChartDataTime}
                                                        title="動態時序圖表"
                                                />
                                        </div>
                                </section>
                                <code class="language-html">
                                </code>
                        </article>
                )
        }

        public created() {
                let ntime = new Date().getTime()
                for (let i = 0; i < dataChartTimeSize; i++) {
                        this.dataChartLabelsTime[i] = this.formatDate(ntime, i)
                        this.dataChartDataTime[0][i] = Math.random() - 0.5
                        this.dataChartDataTime[1][i] = Math.random() - 0.5
                        this.dataChartDataTime[2][i] = Math.random() - 0.5
                }
        }

        public mounted() {
                window.setInterval(() => {
                        let ntime = new Date().getTime()
                        let buf0 = new Array<number>(this.dataChartDataTime[0].length)
                        let buf1 = new Array<number>(this.dataChartDataTime[1].length)
                        let buf2 = new Array<number>(this.dataChartDataTime[2].length)

                        for (let i = 0; i < this.dataChartLabelsTime.length; i++) {
                                this.$set(this.dataChartLabelsTime, i, this.formatDate(ntime, i))
                                buf0[i] = Math.random() - 0.5
                                buf1[i] = Math.random() - 0.5
                                buf2[i] = Math.random() - 0.5
                        }

                        this.$set(this.dataChartDataTime, 0, buf0)
                        this.$set(this.dataChartDataTime, 1, buf1)
                        this.$set(this.dataChartDataTime, 2, buf2)
                }, 1000)
        }

        private formatDate(ntime: number, i: number): string {
                return String(new Date(ntime - (8 - i) * 1000).toISOString()).split('T')[1].split('.')[0]
        }
}