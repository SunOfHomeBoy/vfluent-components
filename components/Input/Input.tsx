import Vue, { CreateElement } from 'vue'
import { Component, Prop, Provide, Watch, Model } from 'vue-property-decorator'
import { vfluents } from '../vfluents'
import * as utils from '../utils'

@Component
export class Input extends vfluents {
        @Prop() type: string // 輸入框類型 可空 默認值：Text 可選值：Text | Password | Email | URL | Number | Search | Tel
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
        @Prop() eventSearch: any // 搜索事件 可空 默認值:空值 註釋: 僅對type=Search有效
        @Provide() dataModel: string = ''
        @Provide() invalidStatus: boolean = false
        @Provide() invalidMessage: string = ''
        public readonly allTypes: string[] = ['Text', 'Password', 'Email', 'URL', 'Number', 'Search', 'Tel']

        public component(h: CreateElement) {
                let inputType = 'text'
                if (this.allTypes.indexOf(this.type) !== -1 && this.type !== 'Number') {
                        inputType = this.type === 'DateTime'
                                ? 'datetime-local'
                                : this.type.toLowerCase()
                }

                return (
                        <div class={vfluents.cls([
                                'input-group',

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
                                <div class={vfluents.cls([
                                        vfluents.themePrefix + 'input-inner',
                                        this.labelWidth >= 0
                                                ? 'd-flex'
                                                : '',
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
                                                        this.invalidStatus
                                                                ? vfluents.themePrefix + 'input-invalid'
                                                                : ''
                                                ])}
                                                type={inputType}
                                                value={this.dataModel}
                                                name={this.name}
                                                placeholder={this.placeholder}
                                                onInput={this.eventPreInput}
                                                onChange={vfluents.eventSafe(this.eventChange)}
                                                onSearch={this.eventPreSearch}
                                        />
                                </div>
                                <div
                                        class="invalid-feedback"
                                        v-show={this.invalidStatus}
                                >{this.invalidMessage}</div>
                        </div >
                )
        }

        public created() {
                this.dataModel = this.dataModel || this.data || ''
        }

        public eventPreInput(e: any) {
                this.dataModel = e.target.value

                if (this.filter instanceof RegExp || typeof (this.filter) === 'string') {
                        this.invalidStatus = new RegExp(this.filter).test(this.dataModel) === false
                        this.invalidMessage = this.invalidStatus
                                ? this.errmsg
                                : ''
                } else if (typeof (this.filter) === 'function') {
                        let r = this.filter(this.dataModel)

                        switch (typeof (r)) {
                                case 'boolean':
                                        this.invalidStatus = r === false
                                        this.invalidMessage = this.invalidStatus
                                                ? this.errmsg
                                                : ''
                                        break

                                case 'string':
                                case 'undefined':
                                        this.invalidMessage = String(r || '')
                                        this.invalidStatus = utils.empty(this.invalidMessage) === false
                                        break
                        }
                } else {
                        let r: any = ''

                        switch (this.type) {
                                case 'Password':
                                        r = /^[A-Za-z0-9_]{6,20}$/
                                        break

                                case 'Email':
                                        r = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/i
                                        break

                                case 'URL':
                                        r = /(https?|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/i
                                        break

                                case 'Number':
                                        let buf = this.dataModel.split('')

                                        for (let i = 0; i < this.dataModel.length; i++) {
                                                if ('1234567890'.indexOf(buf[i]) === -1) {
                                                        buf[i] = null
                                                }
                                        }

                                        this.dataModel = utils.removeEmpty(buf).join('')
                                        break
                        }

                        if (utils.empty(this.dataModel) === false) {
                                this.invalidStatus = new RegExp(r).test(this.dataModel) === false
                                this.invalidMessage = this.invalidStatus
                                        ? this.errmsg
                                        : ''
                        } else {
                                this.invalidStatus = false
                                this.invalidMessage = ''
                        }
                }

                if (typeof (this.eventInput) === 'function') {
                        this.eventInput(e, this.dataModel)
                }
        }

        public eventPreSearch(e: any) {
                if (typeof (this.eventSearch) === 'function') {
                        this.eventSearch(e, e.target.value)
                }
        }
}