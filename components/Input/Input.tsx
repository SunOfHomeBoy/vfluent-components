import Vue, { CreateElement } from 'vue'
import { Component, Prop, Provide, Watch } from 'vue-property-decorator'
import { vfluents } from '../vfluents'
import * as utils from '../utils'

@Component
export class Input extends vfluents {
        @Prop() type: string // 輸入框類型 可空 默認值：Text 可選值：Text | Password
        @Prop() name: string // 字段名稱 可空 默認值：空字符串
        @Prop() label: string // 名稱文本 可空 默認值：空字符串
        @Prop() labelWidth: number // 名稱寬度 可空 默認值：0
        @Prop() prepend: any[] // 前置子元素 可空 默認值：空數組
        @Prop() append: any[] // 後置子元素 可空 默認值：空數組

        public component(h: CreateElement) {

        }
        public componen(h: CreateElement) {

                return (
                        <div class={vfluents.cls([
                                'input-group',
                                vfluents.themePrefix + 'input',
                                ['Password'].indexOf(this.type) !== -1
                                        ? vfluents.themePrefix + 'input-' + this.type.toLowerCase()
                                        : vfluents.themePrefix + 'input-text',
                                this.className
                        ])}>
                        </div>
                )
        }
}