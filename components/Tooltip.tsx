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
                        placement: 'Bottom',
                        text: null
                }

        public render(h: CreateElement): any {
                let selfComponent = this.innerComponents()[0]

                if (vfluents.useTooltip && utils.nonempty(selfComponent) && utils.nonempty(this.$props.text)) {
                        selfComponent.data = selfComponent.data || {}
                        selfComponent.children = selfComponent.children || []

                        if (typeof (selfComponent.tag) === 'undefined') {
                                selfComponent.tag = selfComponent.tag || 'span'
                                selfComponent.children.push({ text: selfComponent.text })
                        }

                        let tooltipComponent: any = {
                                tag: 'span',
                                text: this.$props.text,
                                data: {
                                        class: vfluents.cls([
                                                vfluents.themePrefix + 'tooltip-inner',
                                                ['Top', 'Right', 'Bottom', 'Left'].indexOf(this.$props.placement) !== -1
                                                        ? vfluents.themePrefix + 'tooltip-' + utils.str(this.$props.placement).toLowerCase()
                                                        : vfluents.themePrefix + 'tooltip-bottom'
                                        ]),
                                        style: { width: utils.vwidth(this.$props.text) + 'em' }
                                }
                        }

                        if (this.$props.placement !== 'Left' && this.$props.placement !== 'Right') {
                                tooltipComponent.data.style.marginLeft = -(utils.vwidth(this.$props.text) / 2 + 1) + 'em'
                        }

                        selfComponent.children.push(tooltipComponent)
                        selfComponent.data.class = vfluents.cls([selfComponent.data.class, vfluents.themePrefix + 'tooltip'])
                }

                return selfComponent
        }
}
