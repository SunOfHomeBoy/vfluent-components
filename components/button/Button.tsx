import Vue, { CreateElement } from 'vue'
import { Component, Prop, Provide } from 'vue-property-decorator'
import { vfluents } from '../vfluents'
import { Icon } from '../icon'

@Component
export class Button extends vfluents {
        @Prop() size: string // 按鈕尺寸 可空 默認值：Default 可選值：Default | Small | Large | Huge
        @Prop() text: string // 按鈕文本 可空 默認值：空字符串
        @Prop() icon: string // 按鈕圖標 可空 默認值：空字符串
        @Prop() type: string // 按鈕類型 可空 默認值：Default 可選值：Default | Primary | Secondary | Success | Danger | Warning | Info | Light | Dark |  Link
        @Prop() align: string // 對齊方向 可空 默認值：Default 可選值：Default | Top | Right | Bottom | Left
        @Prop() active: boolean // 激活狀態 可空 默認值：FALSE
        @Prop() disabled: boolean // 禁用狀態 可空 默認值：FALSE
        @Prop() eventClick: any // 單擊事件 可空 默認值：空值

        public component(h: CreateElement) {
                let cls = [
                        'btn',
                        'btn-%TYPE%',
                        `${vfluents.themePrefix}button`
                ]

                if (['Primary', 'Secondary', 'Success', 'Danger', 'Warning', 'Info', 'Light', 'Dark', 'Link'].indexOf(this.type) !== -1) {
                        cls[1] = cls[1].replace('%TYPE%', this.type.toLowerCase())
                }

                if (['Small', 'Large', 'Huge'].indexOf(this.size) !== -1) {
                        cls.push(`${vfluents.themePrefix}button-${this.size.toLowerCase()}`)
                }

                this.innerHTML = this.componentText(h)
                if (this.icon) {
                        this.innerHTML = this.align === 'Top' || this.align === 'Right'
                                ? [this.componentText(h), this.componentIcon(h)]
                                : [this.componentIcon(h), this.componentText(h)]
                }

                return (
                        <button
                                type="button"
                                class={vfluents.cls(cls)}
                        >{this.innerHTML}</button>
                )
        }

        private componentIcon(h: CreateElement) {
                return (
                        <Icon name={this.icon} size={this.size === 'Small' ? 'Mini' : 'Small'} />
                )
        }

        private componentText(h: CreateElement) {
                return (
                        <span class={vfluents.cls([
                                vfluents.themePrefix + 'button-text'
                        ])}>{this.text}</span>
                )
        }

        public component0(h: CreateElement) {
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