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
        @Provide() dataChartConfigMixed: any[] = [{ label: '國內生產總值', type: 'line', fill: 0.2 }, { label: '第一產業' }, { label: '第二產業' }, { label: '第三產業' }]
        @Provide() dataChartConfigStacked: any[] = [{ label: '國內生產總值', stack: '0' }, { label: '第一產業', stack: '1' }, { label: '第二產業', 'stack': '1' }, { label: '第三產業', stack: '1' }]
        @Provide() dataChartData: number[][] = [
                [5323.4, 5962.7, 7208.1, 9016.0, 10275.2, 12058.6, 15042.8, 16992.3, 18667.8, 21781.5, 26923.5],
                [1777.4, 1978.4, 2316.1, 2564.4, 2788.7, 3233.0, 3865.4, 4265.9, 5062.0, 5342.2, 5866.6],
                [2383.0, 2646.2, 3105.7, 3866.6, 4492.7, 5251.6, 6587.2, 7278.0, 7717.4, 9102.2, 11699.5],
                [1163.0, 1338.1, 1786.3, 2585.0, 2993.8, 3574.0, 4590.3, 5448.4, 5888.4, 7337.1, 9357.4]
        ]

        public componentView(h: CreateElement) {
                return (
                        <article class="container-fluid">
                                <h5>Bar型圖表</h5>
                                <section class="row">
                                        <div class="col-12 col-md-6">
                                                <Chart
                                                        type="Bar"
                                                        labels={this.dataChartLabels}
                                                        config={this.dataChartConfig}
                                                        data={this.dataChartData}
                                                        title="垂直型"
                                                />
                                        </div>
                                        <div class="col-12 col-md-6">
                                                <Chart
                                                        type="HorizontalBar"
                                                        labels={this.dataChartLabels}
                                                        config={this.dataChartConfig}
                                                        data={this.dataChartData}
                                                        title="水平型"
                                                />
                                        </div>
                                        <div class="col-12 col-md-6">
                                                <Chart
                                                        type="StackedBar"
                                                        labels={this.dataChartLabels}
                                                        config={this.dataChartConfig}
                                                        data={this.dataChartData}
                                                        title="堆疊型"
                                                />
                                        </div>
                                        <div class="col-12 col-md-6">
                                                <Chart
                                                        type="StackedBar"
                                                        labels={this.dataChartLabels}
                                                        config={this.dataChartConfigStacked}
                                                        data={this.dataChartData}
                                                        title="堆疊群型"
                                                />
                                        </div>
                                </section>
                        </article>
                )
        }
}