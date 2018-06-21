import { Component, CreateElement, Props } from 'vue-component-decorator'
import { vfluents } from './vfluents'
import './styles/Badge.scss'

@Component
export class Badge extends vfluents {
        @Props() public readonly props: {
                id?: string // 組件ID 可空 默認值：空字符串
                className?: string // 附加樣式 可空 默認值：空字符串
                text?: string // 徽章文本 可空 默認值：空字符串
                align?: string // 對齊方向 可空 默認值：Top 可選值：Top | Middle | Bottom
        } = {
                        id: null,
                        className: null,
                        text: '',
                        align: 'Top'
                }

        public render(h: CreateElement): any {
                let cls = vfluents.cls([
                        vfluents.themePrefix + 'badge',
                        String(this.$props.text || '').length < 2
                                ? vfluents.themePrefix + 'badge-circle'
                                : null,
                        this.$props.text === ' '
                                ? vfluents.themePrefix + 'badge-point'
                                : null
                ])

                if (this.$props.align === 'Middle') {
                        return <span id={this.$props.id} class={cls}>{this.$props.text}</span>
                }

                if (this.$props.align === 'Bottom') {
                        return <sub id={this.$props.id} class={cls}>{this.$props.text}</sub>
                }

                return <sup id={this.$props.id} class={cls}>{this.$props.text}</sup>
        }
}