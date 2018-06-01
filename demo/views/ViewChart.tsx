import Vue, { CreateElement } from 'vue'
import { Component, Prop, Provide } from 'vue-property-decorator'
import { vfluents, Button, ChartArea, ChartBar, ChartLine, TextBlock } from '../../components'
import { ViewCommon } from '../components'
import { theme } from '../config'

@Component
export default class ViewIcon extends ViewCommon {
        @Provide() name: string = 'Chart'
        @Provide() description: string = '基於Chart.js封裝的常用圖表'
        @Provide() dataChartArea: number[] = [12, 16, 18, 17, 15]

        public componentView(h: CreateElement) {
                return (
                        <article>
                                <h5>Area型圖表</h5>
                                <section>
                                        <ChartArea data={this.dataChartArea} />
                                        <Button text="Change" eventClick={() => {
                                                //this.$set(this.dataChartArea, 1, 1)
                                                //this.$set(this.dataChartArea, 0, 1)
                                                this.dataChartArea = [0, 1, 2, 3, 4, 5]
                                        }} />
                                </section>
                        </article>
                )
        }
}