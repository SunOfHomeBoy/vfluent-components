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
        @Prop() border: boolean // 顯示邊框 可空 默認值：TRUE
        @Prop() monospace: boolean // 等寬字體 可空 默認值：FALSE
        @Prop() eventChange: any // 修改事件 可空 默認值：空值
        @Prop() eventInput: any // 輸入事件 可空 默認值：空值
        @Provide() dataModel: string
        @Provide() dataViews: string
        @Provide() invalidMessage: string
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
                                this.border === false
                                        ? vfluents.themePrefix + 'input-plain'
                                        : '',
                                this.monospace
                                        ? vfluents.themePrefix + 'input-monospace'
                                        : '',
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
                                        class={vfluents.cls([
                                                'form-control',
                                                utils.empty(this.invalidMessage) === false
                                                        ? 'is-invalid'
                                                        : ''
                                        ])}
                                        type={
                                                this.allTypes.indexOf(this.type) !== -1
                                                        ? this.type.toLowerCase()
                                                        : 'text'
                                        }
                                        value={this.dataViews}
                                        name={this.name}
                                        placeholder={this.placeholder}
                                        onInput={this.eventPreInput}
                                        onChange={vfluents.eventSafe(this.eventChange)}
                                />
                                <div
                                        class="invalid-feedback"
                                        v-show={utils.empty(this.invalidMessage) === false}
                                >{this.invalidMessage}</div>
                        </div >
                )
        }

        public created() {
                this.dataModel = this.dataModel || this.data || ''
                this.dataViews = this.formatData(this.dataModel)
        }

        public eventPreInput(e: any) {
                let dataModel = e.target.value
                console.log(dataModel)

                if (this.filter instanceof RegExp || typeof (this.filter) === 'string') {
                        this.invalidMessage = new RegExp(this.filter).test(dataModel) === false
                                ? this.errmsg
                                : ''
                } else if (typeof (this.filter) === 'function') {
                        let r = this.filter(dataModel)

                        switch (typeof (r)) {
                                case 'boolean':
                                        this.invalidMessage = r === false
                                                ? this.errmsg
                                                : ''
                                        break

                                case 'string':
                                        this.invalidMessage = r
                                        break

                                case 'undefined':
                                        this.invalidMessage = ''
                                        break
                        }
                } else if (utils.empty(dataModel) === false) {

                }

                this.dataViews = this.formatData(this.dataModel)
                if (typeof (this.eventInput) === 'function') {
                        this.eventInput(e, this.dataModel)
                }
        }

        private formatData(data: string): string {
                switch (this.type) {
                        case 'Password':
                                return data.replace(/./g, vfluents.signCrypto)
                }

                return data
        }
}