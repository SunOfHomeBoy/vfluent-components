import { Component, CreateElement, Props } from 'vue-component-decorator'
import { vfluents } from './vfluents'
import utils from './utils'
import './styles/Tooltip.scss'

@Component
export class Tooltip extends vfluents {
        @Props() public readonly props: {
                id?: string // 組件ID 可空 默認值：空字符串
                className?: string // 附加樣式 可空 默認值：空字符串
                placement?: string // 固定位置 可空 默認值：Bottom 可選值：Top | Right | Bottom | Left
                text?: string // 內容文本 可空 默認值：空字符串
        } = {
                        id: null,
                        className: null,
                        text: '',
                        placement: 'Bottom'
                }

        public render(h: CreateElement): any {
                let selfComponent = this.innerComponents()[0]

                if (vfluents.useTooltip && !utils.empty(selfComponent) && !utils.empty(this.$props.text)) {
                        selfComponent.data = selfComponent.data || {}
                        selfComponent.children = selfComponent.children || []

                        if (typeof (selfComponent.tag) === 'undefined') {
                                selfComponent.tag = selfComponent.tag || 'span'
                                selfComponent.children.push({ text: selfComponent.text })
                        }


                        let tooltipElement: any = {
                                tag: 'span',
                                text: this.$props.text,
                                data: {
                                        class: vfluents.cls([
                                                vfluents.themePrefix + 'tooltip-inner',
                                                ['Top', 'Left', 'Right'].indexOf(this.$props.placement) !== -1
                                                        ? vfluents.themePrefix + 'tooltip-' + String(this.$props.placement).toLowerCase()
                                                        : vfluents.themePrefix + 'tooltip-bottom'
                                        ]),
                                        style: {
                                                width: utils.vwidth(this.$props.text) + 'em'
                                        }
                                }
                        }

                        if (this.$props.placement !== 'Left' && this.$props.placement !== 'Right') {
                                tooltipElement.data.style.marginLeft = -(utils.vwidth(this.$props.text) / 2 + 1) + 'em'
                        }

                        selfComponent.children.push(tooltipElement)
                        selfComponent.data.class = vfluents.cls([selfComponent.data.class, vfluents.themePrefix + 'tooltip'])
                }

                return selfComponent
        }
}
