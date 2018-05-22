import Vue, { CreateElement } from 'vue'
import { Component, Prop, Provide } from 'vue-property-decorator'
import { vfluents } from '../vfluents'
import { Icon } from '../icon'

@Component
export class Button extends vfluents {
        @Prop() size: string // 按鈕尺寸 可空 默認值：default 可選值：default | small | large | huge
        @Prop() text: string // 按鈕文本 可空 默認值：空字符串
        @Prop() icon: string // 按鈕圖標 可空 默認值：空字符串
        @Prop() type: string // 按鈕類型 可空 默認值：default 可選值：default | primary | secondary | success | danger | warning | info | light | dark |  link
        @Prop() active: boolean // 激活狀態 可空 默認值：FALSE
        @Prop() disabled: boolean // 禁用狀態 可空 默認值：FALSE
        @Prop() eventClick: any // 單擊事件 可空 默認值：空值

        private static allTypes: string[] = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link']

        public component(h: CreateElement) {
                let elementIcon: any
                if (this.icon) {
                        elementIcon = (
                                <Icon name={this.icon} />
                        )
                }

                let clsSize = ''
                switch (this.size) {

                }

                return (
                        <button
                                type="button"
                                class={vfluents.cls([
                                        'btn',
                                        vfluents.themePrefix + 'button',
                                        this.icon && !this.text
                                                ? `${vfluents.themePrefix}button-icon`
                                                : '',
                                        this.className
                                ])}
                                onClick={vfluents.eventSafe(this.eventClick)}
                        >{elementIcon}<span>{this.text}</span></button>
                )
        }
}