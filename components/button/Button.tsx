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
        @Prop() align: string // 圖標對齊 可空 默認值：Default 可選值：Default | Top | Right | Bottom | Left
        @Prop() block: boolean // 水平擴展 可空 默認值：FALSE
        @Prop() round: boolean // 邊框圓角 可空 默認值：FALSE
        @Prop() circle: boolean // 圓形按鈕 可空 默認值：FALSE
        @Prop() outline: boolean // 邊框模式 可空 默認值：FALSE
        @Prop() active: boolean // 激活狀態 可空 默認值：FALSE
        @Prop() disabled: boolean // 禁用狀態 可空 默認值：FALSE
        @Prop() eventClick: any // 單擊事件 可空 默認值：空值

        public component(h: CreateElement) {
                console.log('eventClick', this.eventClick)
                let innerElement: any = (<span class={vfluents.themePrefix + 'btn-text'}>{this.text}</span>)

                if (this.icon) {
                        let iconElement = (<Icon name={this.icon} size={this.size === 'Small' ? 'Mini' : 'Small'} />)
                        let textElement = (<span class={vfluents.themePrefix + 'btn-text'}>{this.text}</span>)

                        innerElement = this.align === 'Bottom' || this.align === 'Right'
                                ? [textElement, iconElement]
                                : [iconElement, textElement]
                }

                return (
                        <button
                                type="button"
                                class={vfluents.cls([
                                        'btn',
                                        ['Primary', 'Secondary', 'Success', 'Danger', 'Warning', 'Info', 'Light', 'Dark', 'Link'].indexOf(this.type) !== -1
                                                ? `btn-${this.outline ? 'outline-' : ''}${this.type.toLowerCase()}`
                                                : `btn-${this.outline ? 'outline-' : ''}default`,
                                        this.block
                                                ? 'btn-block'
                                                : '',
                                        this.active && !this.disabled
                                                ? 'active'
                                                : '',
                                        vfluents.themePrefix + 'btn',
                                        ['Small', 'Large', 'Huge'].indexOf(this.size) !== -1
                                                ? vfluents.themePrefix + 'btn-' + this.size.toLowerCase()
                                                : '',
                                        this.text && ['Top', 'Right', 'Bottom', 'Left'].indexOf(this.align) !== -1
                                                ? vfluents.themePrefix + 'btn-' + this.align.toLowerCase()
                                                : '',
                                        this.circle && !this.round
                                                ? vfluents.themePrefix + 'btn-circle'
                                                : '',
                                        this.round && !this.circle
                                                ? vfluents.themePrefix + 'btn-round'
                                                : '',
                                        this.icon
                                                ? vfluents.themePrefix + 'btn-icon'
                                                : '',
                                        this.icon && !this.text
                                                ? vfluents.themePrefix + 'btn-icon-only'
                                                : '',
                                        this.className
                                ])}
                                disabled={this.disabled && !this.active}
                                onClick={vfluents.eventSafe(() => { console.log(this.eventClick); this.eventClick() })}
                        >{innerElement}</button>
                )
        }
}