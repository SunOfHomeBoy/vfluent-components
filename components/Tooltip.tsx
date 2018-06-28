import { Component, CreateElement, Props } from 'vue-component-decorator'
import { vfluents } from './vfluents'
import './styles/Tooltip.scss'

@Component
export class Tooltip extends vfluents {
        @Props() public readonly props: {
                id?: string // 組件ID 可空 默認值：空字符串
                className?: string // 附加樣式 可空 默認值：空字符串
                text?: string // 內容文本 可空 默認值：空字符串
                placement?: string // 固定位置 可空 默認值：Bottom 可選值：Top | Top-start | Top-end | Right | Right-start | Right-end | Bottom | Bottom-start | Bottom-end | Left | Left-start | Left-end
        } = {
                        id: null,
                        className: null,
                        text: '',
                        placement: 'Bottom'
                }

        public render(h: CreateElement): any {
                return (
                        vfluents.useTooltip ? (
                                <div id={this.$props.id} class={vfluents.cls([
                                        vfluents.themePrefix + 'tooltip',
                                        vfluents.themePrefix + 'tooltip-' + String(this.$props.placement).toLowerCase()
                                ])}>{this.$props.text}</div>
                        ) : null
                )
        }
}