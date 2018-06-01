import Vue, { CreateElement } from 'vue'
import { Chart } from 'chart.js'
import { Component, Prop, Provide } from 'vue-property-decorator'
import { vfluents } from '../vfluents'
import * as utils from '../utils'

@Component
export class ChartBase extends vfluents {

        @Prop() data: any[] // 圖表數據 可空 默認值: 空數組
        @Provide() id: string
        @Provide() type: string
        @Prop() width: number
        @Prop() height: number
        @Provide() chart: any
        protected initConfigures(): any { }

        public component(h: CreateElement) {
                return (
                        <canvas
                                id={this.id}
                                width={this.width || 1000}
                                height={this.height || 618}
                                class={vfluents.cls([
                                        vfluents.themePrefix + 'chart',
                                        vfluents.themePrefix + 'chart-' + String(this.type).toLowerCase()
                                ])}
                        ></canvas>
                )
        }

        public created() {
                this.id = this.id || utils.guid('chart-')
        }

        public mounted() {
                this.chart = new Chart(this.id, Object.assign(this.initConfigures() || {}, {
                        type: String(this.type).toLowerCase()
                }))
        }
}