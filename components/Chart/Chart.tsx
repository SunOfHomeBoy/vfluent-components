import Vue, { CreateElement } from 'vue'
import { Chart } from 'chart.js'
import { Component, Prop, Provide } from 'vue-property-decorator'
import { vfluents } from '../vfluents'
import * as utils from '../utils'

export interface IChart {
        label: string
        type?: string
        fill?: boolean | number | string
        stack?: string
}

@Component
export class ChartComponent extends vfluents {
        @Prop() type: string // 圖表類型 非空 其中: Area | Bar | HorizontalBar | StackedBar | Line
        @Prop() labels: string[] // 標籤名數組 非空 默認值: 空數組
        @Prop() config: IChart[] // 數據集配置項 非空 默認值: 空數組
        @Prop() data: number[][] // 數據集數據組 非空 默認值: 空數組
        @Prop() width: number // 相對可視寬度 可空 默認值: 1000
        @Prop() height: number // 相對可視高度 可空 默認值: 618
        @Prop() title: string // 圖表標題 可空 默認值：空字符串
        @Prop() options: any // 其他配置 可空 默認值： 空值
        @Provide() id: string
        @Provide() chart: any
        @Provide() allColors: any[] = [
                [0x34, 0x98, 0xdb, 1],
                [0x27, 0xae, 0x60, 1],
                [0xf1, 0xc4, 0x0f, 1],
                [0xd3, 0x54, 0x00, 1],
                [0xe7, 0x4c, 0x3c, 1],
                [0x8e, 0x44, 0xad, 1],
                [0x34, 0x49, 0x5e, 1],
                [0x7f, 0x8c, 0x8d, 1],
                [0x29, 0x80, 0xb9, 1],
                [0x2e, 0xcc, 0x71, 1],
                [0x16, 0xa0, 0x85, 1],
                [0x9b, 0x59, 0xb6, 1],
                [0xe6, 0x7e, 0x22, 1],
                [0x1a, 0xbc, 0x9c, 1],
                [0xf3, 0x9c, 0x12, 1],
                [0xc0, 0x39, 0x2b, 1]
        ]

        public component(h: CreateElement) {
                if (this.chart) {
                        if (this.data instanceof Array && this.data[0] instanceof Array) {
                                for (let i = 0; i < this.data.length; i++) {
                                        if (utils.empty(this.data[i]) === false) {
                                                //this.chart.data.datasets[i].data = this.data[i]
                                        }
                                }
                        }
                        this.chart.update()
                }
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
                let configures: any = {
                        data: {
                                labels: this.labels || [],
                                datasets: []
                        },
                        options: Object.assign({}, this.options || {})
                }

                switch (this.type) {
                        case 'Bar':
                                configures.type = 'bar'
                                break

                        case 'HorizontalBar':
                                configures.type = 'horizontalBar'
                                break

                        case 'StackedBar':
                                configures.type = 'bar'
                                configures.options.scales = { xAxes: [{ stacked: true }], yAxes: [{ stacked: true }] }
                                break
                }

                for (let i = 0; i < this.config.length; i++) {
                        let buf: any = Object.assign({}, this.config[i] || {})

                        buf.code = this.allColors[i % this.allColors.length]
                        buf.code[3] = 1 - 0.1 * (Math.floor(i / this.allColors.length) % 9)

                        buf.data = this.data[i] || (new Array(this.labels.length + 1).join('0').split(''))
                        buf.type = buf.type || configures.type
                        buf.borderWidth = buf.borderWidth || 1
                        buf.borderColor = `rgba(${buf.code.join(',')})`

                        switch (buf.type) {
                                case 'area':
                                case 'bar':
                                case 'horizontalBar':
                                        buf.backgroundColor = buf.borderColor
                                        break

                                case 'line':
                                        buf.backgroundColor = 'rgba(0, 0, 0, 0)'

                                        if (buf.fill && ['boolean', 'number'].indexOf(typeof (buf.fill)) !== -1) {
                                                if (typeof (buf.fill) === 'number' && buf.fill <= 1) {
                                                        buf.code[3] = buf.fill
                                                }

                                                buf.backgroundColor = `rgba(${buf.code.join(',')})`
                                                buf.fill = true
                                        }
                                        break
                        }

                        configures.data.datasets.push(buf)
                }

                if (utils.empty(this.title) === false) {
                        configures.options.title = configures.options.title || {}
                        configures.options.title.display = true
                        configures.options.title.text = this.title
                }

                this.chart = new Chart(this.id, configures)
        }
}