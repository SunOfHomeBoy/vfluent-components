import Vue, { CreateElement } from 'vue'
import { Component, Prop, Provide, Watch, Model } from 'vue-property-decorator'
import { vfluents } from '../vfluents'
import * as utils from '../utils'

@Component
export class Input extends vfluents {
        @Prop() type: string // 輸入框類型 可空 默認值：Text 可選值：Text | Password | Email | URL | Number | Range | Search | Color
        @Prop() name: string // 輸入框名稱 可空 默認值：空字符串
        @Prop() label: string // 輸入框標籤 可空 默認值：空字符串
        @Prop() labelWidth: number // 標籤寬度 可空 默認值：空值 註釋：空值即獨佔一行
        @Prop() labelAlign: string // 標籤對齊 可空 默認值：Left 可選值：Left | Right | Middle
        @Prop() placeholder: string // 提示語 可空 默認值：空字符串
        @Prop() data: string // 初始化數據 可空 默認值： 空字符串
        @Prop() filter: string | RegExp | Function // 數據檢測法則 可空 默認值：空值
        @Prop() errmsg: string // 錯誤提示 可空 默認值：空字符串
        @Prop() prepend: any[] // 前置子元素 可空 默認值：空數組
        @Prop() append: any[] // 後置子元素 可空 默認值：空數組
        @Prop() eventChange: any // 修改事件 可空 默認值：空值
        @Prop() eventInput: any // 輸入事件 可空 默認值：空值

        @Provide() stateData: string
        public readonly allTypes: string[] = ['Password', 'Email', 'URL', 'Number', 'Range', 'Search', 'Color', 'Date', 'Time', 'Tel']

        public component(h: CreateElement) {
                return (
                        <div class={vfluents.cls([
                                'input-group',
                                this.labelWidth >= 0
                                        ? 'd-flex'
                                        : '',
                                vfluents.themePrefix + 'input',
                                this.allTypes.indexOf(this.type) !== -1
                                        ? vfluents.themePrefix + 'input-' + this.type.toLowerCase()
                                        : vfluents.themePrefix + 'input-text',
                                this.className
                        ])}>
                                <label
                                        for={this.name}
                                        style={{
                                                width: this.labelWidth > 0
                                                        ? `${this.labelWidth}em`
                                                        : null,
                                                textAlign: Object({
                                                        Left: 'left',
                                                        Middle: 'center',
                                                        Right: 'right'
                                                })[this.labelAlign]
                                        }}
                                >{this.label}</label>
                                <input
                                        class="form-control"
                                        type={this.allTypes.indexOf(this.type) !== -1 ? this.type.toLowerCase() : 'text'}
                                        name={this.name}
                                        placeholder={this.placeholder}
                                        value={this.stateData}
                                        onInput={this.eventPreInput}
                                />
                        </div >
                )
        }

        public created() {
                this.stateData = this.stateData || this.data || ''
        }

        public eventPreInput(e: any) {
                this.stateData = e.target.value
        }
}