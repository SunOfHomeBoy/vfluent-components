import { Component, CreateElement, Props } from 'vue-component-decorator'
import { vfluents } from './vfluents'
import { Badge } from './Badge'
import { Icon } from './Icon'
import './styles/Button.scss'

@Component
export class Button extends vfluents {
        @Props() public readonly props: {
                id?: string // 組件ID 可空 默認值：空字符串
                className?: string // 附加樣式 可空 默認值：空字符串
                type?: string // 按鈕類型 可空 默認值：Default 可選值：Default | Primary | Secondary | Success | Danger | Warning | Info | Link
                size?: string // 按鈕尺寸 可空 默認值：Default 可選值：Default | Small | Large | Huge
                text?: string // 按鈕文本 可空 默認值：空字符串
                icon?: string // 按鈕圖標 可空 默認值：空字符串
                align?: string // 圖標對齊 可空 默認值：Default 可選值：Default | Top | Right | Bottom | Left
                badge?: string // 按鈕徽章 可空 默認值：空字符串
                width?: string // 按鈕寬度 可空 默認值：空字符串
                block?: boolean // 100%寬度 可空 默認值：FALSE
                radius?: boolean // 圓角邊框 可空 默認值：FALSE
                circle?: boolean // 圓形按鈕 可空 默認值：FALSE
                outline?: boolean // 邊框樣式 可空 默認值：FALSE
                active?: boolean // 激活按钮 可空 默認值：FALSE
                disabled?: boolean // 禁用按钮 可空 默認值：FALSE
                eventClick?: any // 單擊事件 可空 默認值：FALSE
        } = {
                        id: null,
                        className: null,
                        type: 'Default',
                        size: 'Default',
                        text: '',
                        icon: null,
                        align: 'Default',
                        badge: null,
                        width: null,
                        block: false,
                        radius: false,
                        circle: false,
                        outline: false,
                        active: false,
                        disabled: false,
                        eventClick: null
                }

        public render(h: CreateElement): any {
                let innerElement: any[] = [this.$props.text]

                if (this.$props.icon) {
                        let iconElement = <Icon name={this.$props.icon} size="Small" />
                        let textElement = this.$props.text

                        innerElement = this.$props.align === 'Bottom' || this.$props.align === 'Right'
                                ? [null, textElement, iconElement, null]
                                : [null, iconElement, textElement, null]
                }

                if (this.$props.badge) {
                        innerElement[this.$props.align === 'Top' ? 0 : 3] = <Badge text={this.$props.badge} />
                }

                return (
                        <button
                                type="button"
                                id={this.$props.id}
                                class={vfluents.cls([
                                        'pure-button',
                                        vfluents.themePrefix + 'button',
                                        ['Primary', 'Secondary', 'Success', 'Danger', 'Warning', 'Info', 'Link'].indexOf(this.$props.type) !== -1
                                                ? vfluents.themePrefix + 'button-' + String(this.$props.type).toLowerCase()
                                                : vfluents.themePrefix + 'button-default',
                                        ['Small', 'Large', 'Huge'].indexOf(this.$props.size) !== -1
                                                ? vfluents.themePrefix + 'button-' + String(this.$props.size).toLowerCase()
                                                : null,
                                        this.$props.icon ? vfluents.themePrefix + 'button-icon' : null,
                                        this.$props.icon && !this.$props.text ? vfluents.themePrefix + 'button-icon-only' : null,
                                        ['Left', 'Right', 'Top', 'Bottom'].indexOf(this.$props.align) !== -1
                                                ? vfluents.themePrefix + 'button-' + String(this.$props.align).toLowerCase()
                                                : null,
                                        this.$props.block ? vfluents.themePrefix + 'button-block' : null,
                                        this.$props.radius && !this.$props.circle ? vfluents.themePrefix + 'button-radius' : null,
                                        this.$props.circle && !this.$props.radius ? vfluents.themePrefix + 'button-circle' : null,
                                        this.$props.outline ? vfluents.themePrefix + 'button-outline' : null,
                                        this.$props.active && !this.$props.disabled ? vfluents.themePrefix + 'button-active' : null,
                                        this.$props.disabled && !this.$props.active ? vfluents.themePrefix + 'button-disabled' : null,
                                        this.$props.className
                                ])}
                                style={{ width: this.$props.width }}
                                disabled={this.$props.disabled && !this.$props.active}
                                onClick={vfluents.eventSafe(this.$props.eventClick)}
                        >{innerElement}</button>
                )
        }
}

@Component
export class ButtonGroup extends vfluents {
        @Props() public readonly props: {
                id?: string
                className?: string
        } = { id: null, className: null }

        public render(h: CreateElement): any {
                return (
                        <div id={this.$props.id} class={vfluents.cls([
                                vfluents.themePrefix + 'button-group',
                                this.$props.className
                        ])}>{this.innerComponent()}</div>
                )
        }
}