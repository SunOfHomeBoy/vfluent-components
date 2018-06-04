import Vue, { CreateElement } from 'vue'
import { Component, Prop, Provide } from 'vue-property-decorator'
import { vfluents, Button, Chart, TextBlock } from '../../components'
import { ViewCommon } from '../components'
import { theme } from '../config'
import * as utils from '../../components/utils'

@Component
export default class ViewIcon extends ViewCommon {
        @Provide() name: string = 'Chart'
        @Provide() description: string = '基於Chart.js封裝的常用圖表'
        @Provide() dataChartLabels: string[] = ['1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992']
        @Provide() dataChartConfig: any[] = [{ label: '國內生產總值' }, { label: '第一產業' }, { label: '第二產業' }, { label: '第三產業' }]
        @Provide() dataChartConfigStacked: any[] = [{ label: '國內生產總值', stack: '0' }, { label: '第一產業', stack: '1' }, { label: '第二產業', 'stack': '1' }, { label: '第三產業', stack: '1' }]
        @Provide() dataChartConfigStepped: any[] = [{ label: '國內生產總值', type: 'LineStep' }, { label: '第一產業' }, { label: '第二產業' }, { label: '第三產業' }]
        @Provide() dataChartConfigCubic: any[] = [{ label: '國內生產總值', type: 'LineCubic' }, { label: '第一產業' }, { label: '第二產業' }, { label: '第三產業' }]
        @Provide() dataChartConfigDash: any[] = [{ label: '國內生產總值', type: 'LineDash' }, { label: '第一產業' }, { label: '第二產業' }, { label: '第三產業' }]
        @Provide() dataChartConfigFill: any[] = [{ label: '國內生產總值', fill: 'end' }, { label: '第一產業', fill: 'start' }, { label: '第二產業', fill: 0.5 }, { label: '第三產業', fill: 'origin' }]
        @Provide() dataChartConfigMixed: any[] = [{ label: '國內生產總值', type: 'Line', fill: 0.6 }, { label: '第一產業' }, { label: '第二產業' }, { label: '第三產業' }]

        @Provide() dataChartData: number[][] = [
                [5323.4, 5962.7, 7208.1, 9016.0, 10275.2, 12058.6, 15042.8, 16992.3, 18667.8, 21781.5, 26923.5],
                [1777.4, 1978.4, 2316.1, 2564.4, 2788.7, 3233.0, 3865.4, 4265.9, 5062.0, 5342.2, 5866.6],
                [2383.0, 2646.2, 3105.7, 3866.6, 4492.7, 5251.6, 6587.2, 7278.0, 7717.4, 9102.2, 11699.5],
                [1163.0, 1338.1, 1786.3, 2585.0, 2993.8, 3574.0, 4590.3, 5448.4, 5888.4, 7337.1, 9357.4]
        ]
        @Provide() dataChartConfigTime: any[] = [{ label: '隨機時序數', fill: true }]
        @Provide() dataChartLabelsTime: string[] = new Array<string>(8)
        @Provide() dataChartDataTime: number[][] = [[Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random()]]

        public componentView(h: CreateElement) {
                return (
                        <article class="container-fluid">
                                <h5>Area型圖表</h5>
                                <section class="row">
                                        <div class="col-12 col-xl-6">
                                        </div>
                                </section>
                                <code class="language-html">
                                </code>
                                <h5>Bar型圖表</h5>
                                <section class="row">
                                        <div class="col-12 col-xl-6">
                                                <Chart
                                                        type="Bar"
                                                        labels={this.dataChartLabels}
                                                        config={this.dataChartConfig}
                                                        data={this.dataChartData}
                                                        title="垂直型"
                                                />
                                        </div>
                                        <div class="col-12 col-xl-6">
                                                <Chart
                                                        type="HorizontalBar"
                                                        labels={this.dataChartLabels}
                                                        config={this.dataChartConfig}
                                                        data={this.dataChartData}
                                                        title="水平型"
                                                />
                                        </div>
                                        <div class="col-12 col-xl-6">
                                                <Chart
                                                        type="StackedBar"
                                                        labels={this.dataChartLabels}
                                                        config={this.dataChartConfig}
                                                        data={this.dataChartData}
                                                        title="堆疊型"
                                                />
                                        </div>
                                        <div class="col-12 col-xl-6">
                                                <Chart
                                                        type="StackedBar"
                                                        labels={this.dataChartLabels}
                                                        config={this.dataChartConfigStacked}
                                                        data={this.dataChartData}
                                                        title="堆疊組"
                                                />
                                        </div>
                                </section>
                                <code class="language-html">
                                </code>
                                <h5>Line型圖表</h5>
                                <section class="row">
                                        <div class="col-12 col-xl-6">
                                                <Chart
                                                        type="Line"
                                                        labels={this.dataChartLabels}
                                                        config={this.dataChartConfig}
                                                        data={this.dataChartData}
                                                        title="通用型"
                                                />
                                        </div>
                                        <div class="col-12 col-xl-6">
                                                <Chart
                                                        type="Line"
                                                        labels={this.dataChartLabels}
                                                        config={this.dataChartConfigStepped}
                                                        data={this.dataChartData}
                                                        title="折線型"
                                                />
                                        </div>
                                        <div class="col-12 col-xl-6">
                                                <Chart
                                                        type="Line"
                                                        labels={this.dataChartLabels}
                                                        config={this.dataChartConfigCubic}
                                                        data={this.dataChartData}
                                                        title="曲線型"
                                                />
                                        </div>
                                        <div class="col-12 col-xl-6">
                                                <Chart
                                                        type="Line"
                                                        labels={this.dataChartLabels}
                                                        config={this.dataChartConfigDash}
                                                        data={this.dataChartData}
                                                        title="虛線型"
                                                />
                                        </div>
                                        <div class="col-12 col-xl-6">
                                                <Chart
                                                        type="Line"
                                                        labels={this.dataChartLabels}
                                                        config={this.dataChartConfigFill}
                                                        data={this.dataChartData}
                                                        title="區域型"
                                                />
                                        </div>
                                </section>
                                <code class="language-html">
                                </code>
                                <h5>Point型圖表</h5>
                                <section class="row">
                                        <div class="col-12 col-xl-6">
                                                <Chart
                                                        type="Point"
                                                        labels={this.dataChartLabels}
                                                        config={this.dataChartConfig}
                                                        data={this.dataChartData}
                                                        title="圓點型"
                                                />
                                        </div>
                                        <div class="col-12 col-xl-6">
                                                <Chart
                                                        type="PointRect"
                                                        labels={this.dataChartLabels}
                                                        config={this.dataChartConfig}
                                                        data={this.dataChartData}
                                                        title="方塊型"
                                                />
                                        </div>
                                        <div class="col-12 col-xl-6">
                                                <Chart
                                                        type="PointRot"
                                                        labels={this.dataChartLabels}
                                                        config={this.dataChartConfig}
                                                        data={this.dataChartData}
                                                        title="菱形型"
                                                />
                                        </div>
                                </section>
                                <code class="language-html"></code>
                                <h5>時序圖表</h5>
                                <section class="row">
                                        <div class="col-12">
                                                <Chart
                                                        type="LineCubic"
                                                        labels={this.dataChartLabelsTime}
                                                        config={this.dataChartConfigTime}
                                                        data={this.dataChartDataTime}
                                                        title="動態時序圖表"
                                                />
                                        </div>
                                </section>
                                <code class="language-html">
                                        <Button eventClick={this.click} text="OK" />
                                </code>
                        </article>
                )
        }

        public created() {
                let ntime = new Date().getTime()
                for (let i = 0; i < 8; i++) {
                        this.dataChartLabelsTime[i] = this.formatDate(ntime, i)
                }
        }

        public click() {
                //window.setInterval(() => {
                let ntime = new Date().getTime()

                for (let i = 0; i < 8; i++) {
                        //this.$set(this.dataChartLabelsTime, i, this.formatDate(ntime, 1))
                }
                console.log('clicked')
                this.dataChartDataTime = [[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8]]
                this.$set(this.dataChartDataTime, 0, [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8])
                //}, 1000)
        }

        private formatDate(ntime: number, i: number): string {
                return String(new Date(ntime - (8 - i) * 1000).toISOString()).split('T')[1].split('.')[0]
        }
}