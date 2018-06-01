import Vue, { CreateElement } from 'vue'
import { Component, Prop, Provide } from 'vue-property-decorator'
import { vfluents, ChartArea, ChartBar, ChartLine, TextBlock } from '../../components'
import { ViewCommon } from '../components'
import { theme } from '../config'

@Component
export default class ViewIcon extends ViewCommon {
        @Provide() name: string = 'Chart'
        @Provide() description: string = '基於Chart.js封裝的常用圖表'

        public componentView(h: CreateElement) {
                return (
                        <article>
                                <h5>按鈕類型</h5>
                                <section>
                                        <ChartArea />
                                </section>
                        </article>
                )
        }
}