import { Component, CreateElement, Props } from 'vue-component-decorator'
import { vfluents } from './vfluents'
import './styles/Icon.scss'
import utils from './utils';

@Component
export class Icon extends vfluents {
        @Props() public readonly props: {
                id?: string // 組件ID 可空 默認值：空字符串
                className?: string // 附加樣式 可空 默認值：空字符串
                name?: string // 圖標名稱 可空 默認值：空字符串
                size?: string // 圖標尺寸 可空 默認值：Default 可選值：Default | Mini | Small | Large | Huge
                color?: string // 圖標顏色 可空 默認值：空字符串
                eventClick?: any // 點擊事件 可空 默認值：空值
        } = {
                        id: null,
                        className: null,
                        name: null,
                        size: 'Default',
                        color: null,
                        eventClick: null
                }

        public render(h: CreateElement): any {
                let cls = vfluents.cls([
                        vfluents.themePrefix + 'icon',
                        vfluents.themePrefix + 'icon-' + utils.str(this.$props.name).replace(/^icon/i, ''),
                        ['Mini', 'Small', 'Large', 'Huge'].indexOf(this.$props.size) !== -1
                                ? vfluents.themePrefix + 'icon-' + utils.str(this.$props.size).toLowerCase()
                                : '',
                        this.$props.className
                ])
                let style = { color: this.$props.color, fill: this.$props.color }

                if (utils.empty(vfluents.useSVGElement)) {
                        return <span id={this.$props.id} class={cls} style={style} onClick={vfluents.eventSafe(this.$props.eventClick)}></span>
                }

                return (
                        <svg id={this.$props.id} class={cls} style={style} onClick={vfluents.eventSafe(this.$props.eventClick)}>
                                <use xlinkHref={'#icon' + utils.firstUppercase(utils.str(this.$props.name).replace(/^icon/i, ''))} />
                        </svg>
                )
        }
}