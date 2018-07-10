import { Component, CreateElement, Props } from 'vue-component-decorator'
import { vfluents } from './vfluents'
import './styles/Badge.scss'
import utils from './utils';

@Component
export class Badge extends vfluents {
        @Props() public readonly props: {
                id?: string // 組件ID 可空 默認值：空字符串
                className?: string // 附加樣式 可空 默認值：空字符串
                text?: string | number // 徽章文本 可空 默認值：空字符串
                max?: number // 最大數值 可空 默認值：99
                align?: string // 對齊方向 可空 默認值：Top 可選值：Top | Center | Bottom
        } = {
                        id: null,
                        className: null,
                        text: null,
                        max: vfluents.useBadgeLimit,
                        align: 'Top'
                }

        public render(h: CreateElement): any {
                let textComponents: any = this.$props.text

                if (typeof (textComponents) === 'number') {
                        if (this.$props.max < textComponents) {
                                textComponents = this.$props.max + '+'
                        }
                }

                return (
                        <span id={this.$props.id} class={vfluents.cls([
                                vfluents.themePrefix + 'badge',
                                ['Center', 'Bottom'].indexOf(this.$props.align) !== -1
                                        ? vfluents.themePrefix + 'badge-' + utils.str(this.$props.align).toLowerCase()
                                        : vfluents.themePrefix + 'badge-top',
                                utils.str(this.$props.text).length < 2
                                        ? vfluents.themePrefix + 'badge-circle'
                                        : '',
                                /^\s+$/i.test(this.$props.text)
                                        ? vfluents.themePrefix + 'badge-point'
                                        : ''
                        ])}>{textComponents}</span>
                )
        }
}