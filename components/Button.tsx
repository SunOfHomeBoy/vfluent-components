import { Component, CreateElement, Props } from 'vue-component-decorator'
import { vfluents } from './vfluents'
import { Badge } from './Badge'
import { Icon } from './Icon'
import { Tooltip } from './Tooltip'
import utils from './utils'
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
                title?: string // 提示文本 可空 默認值：空字符串
                width?: string // 按鈕寬度 可空 默認值：空字符串
                block?: boolean // 100%寬度 可空 默認值：FALSE
                radius?: boolean // 圓角邊框 可空 默認值：FALSE
                circle?: boolean // 圓形按鈕 可空 默認值：FALSE
                outline?: boolean // 邊框樣式 可空 默認值：FALSE
                active?: boolean // 激活按钮 可空 默認值：FALSE
                disabled?: boolean // 禁用按钮 可空 默認值：FALSE
                tooltip?: { text?: string, placement?: string } // 提示文本 可空 默認值：NULL
                eventClick?: any // 單擊事件 可空 默認值：NULL
        } = {
                        id: null,
                        className: null,
                        type: 'Default',
                        size: 'Default',
                        text: null,
                        icon: null,
                        align: 'Default',
                        badge: null,
                        title: null,
                        width: null,
                        block: false,
                        radius: false,
                        circle: false,
                        outline: false,
                        active: false,
                        disabled: false,
                        tooltip: null,
                        eventClick: null
                }
        public readonly btnTypes: string[] = ['Primary', 'Secondary', 'Success', 'Danger', 'Warning', 'Info', 'Link', 'Default']

        public render(h: CreateElement): any {
                let innerComponents = [this.$props.text]

                if (utils.nonempty(this.$props.icon)) {
                        let iconComponent = <Icon name={this.$props.icon} size="Small" />
                        let textComponent = this.$props.text

                        innerComponents = this.$props.align === 'Bottom' || this.$props.align === 'Right'
                                ? [null, textComponent, iconComponent, null]
                                : [null, iconComponent, textComponent, null]
                }

                if (utils.nonempty(this.$props.badge)) {
                        innerComponents[this.$props.align === 'Top' ? 0 : 3] = <Badge text={this.$props.badge} />
                }

                return (
                        <Tooltip text={utils.dict(this.$props.tooltip).text} placement={utils.dict(this.$props.tooltip).placement}>
                                <a
                                        id={this.$props.id}
                                        onClick={this.eventPreClick}
                                        style={{ width: this.$props.width }}
                                        class={vfluents.cls([
                                                'pure-button',
                                                vfluents.themePrefix + 'button',
                                                this.btnTypes.indexOf(this.$props.type) !== -1
                                                        ? vfluents.themePrefix + 'button-' + utils.str(this.$props.type).toLowerCase()
                                                        : vfluents.themePrefix + 'button-default',
                                                ['Small', 'Large', 'Huge'].indexOf(this.$props.size) !== -1
                                                        ? vfluents.themePrefix + 'button-' + utils.str(this.$props.size).toLowerCase()
                                                        : '',
                                                utils.nonempty(this.$props.icon)
                                                        ? vfluents.themePrefix + 'button-icon'
                                                        : '',
                                                utils.nonempty(this.$props.icon) && utils.empty(this.$props.text)
                                                        ? vfluents.themePrefix + 'button-icon-only'
                                                        : '',
                                                ['Top', 'Right', 'Bottom', 'Left'].indexOf(this.$props.align) === -1
                                                        ? vfluents.themePrefix + 'button-' + utils.str(this.$props.align).toLowerCase()
                                                        : '',
                                                utils.nonempty(this.$props.block)
                                                        ? vfluents.themePrefix + 'button-block'
                                                        : ''
                                        ])}
                                >{innerComponents}</a>
                        </Tooltip>
                )
        }

        public eventPreClick(event: Event) {
                if (utils.empty(this.$props.disabled) && utils.isFunc(this.$props.eventClick)) {
                        this.$props.eventClick(event)
                }
        }

        public render0(h: CreateElement): any {
                return (
                        <Tooltip text={tooltipProps.tex} placement={tooltipProps.placement}>
                                <a
                                        id={this.$props.id}
                                        class={vfluents.cls([
                                                'pure-button',
                                                vfluents.themePrefix + 'button',
                                                this.btnTypes.indexOf(this.$props.type) !== -1
                                                        ? vfluents.themePrefix + 'button-' + String(this.$props.type).toLowerCase()
                                                        : vfluents.themePrefix + 'button-default',
                                                ['Small', 'Large', 'Huge'].indexOf(this.$props.size) !== -1
                                                        ? vfluents.themePrefix + 'button-' + String(this.$props.size).toLowerCase()
                                                        : null,
                                                utils.empty(this.$props.icon) === false
                                                        ? vfluents.themePrefix + 'button-icon'
                                                        : null,
                                                utils.empty(this.$props.icon) === false && utils.empty(this.$props.text)
                                                        ? vfluents.themePrefix + 'button-icon-only'
                                                        : null,
                                                ['Left', 'Right', 'Top', 'Bottom'].indexOf(this.$props.align) !== -1
                                                        ? vfluents.themePrefix + 'button-' + String(this.$props.align).toLowerCase()
                                                        : null,
                                                utils.empty(this.$props.block) === false
                                                        ? vfluents.themePrefix + 'button-block'
                                                        : null,
                                                utils.empty(this.$props.radius) === false && utils.empty(this.$props.circle)
                                                        ? vfluents.themePrefix + 'button-radius'
                                                        : null,
                                                utils.empty(this.$props.circle) === false && utils.empty(this.$props.radius)
                                                        ? vfluents.themePrefix + 'button-circle'
                                                        : null,
                                                utils.empty(this.$props.outline) === false
                                                        ? vfluents.themePrefix + 'button-outline'
                                                        : null,
                                                utils.empty(this.$props.active) === false && utils.empty(this.$props.disabled)
                                                        ? vfluents.themePrefix + 'button-active'
                                                        : null,
                                                utils.empty(this.$props.disabled) === false && utils.empty(this.$props.active)
                                                        ? vfluents.themePrefix + 'button-disabled'
                                                        : null,
                                                this.$props.className
                                        ])}
                                        style={{ width: this.$props.width }}
                                        onClick={this.eventPreClick0}
                                >{innerElement}</a>
                        </Tooltip>
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
                        ])}>{this.innerComponents()}</div>
                )
        }
}