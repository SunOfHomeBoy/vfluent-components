import Vue, { CreateElement } from 'vue'
import { Component, Prop, Provide } from 'vue-property-decorator'
import { vfluents } from '../vfluents'

@Component
export class Icon extends vfluents {
        @Prop() name: string // 圖標名稱 可空 默認值：空字符串
        @Prop() size: string // 圖標尺寸 可空 默認值：Default 可選值：Default | Mini | Small | Large | Huge
        @Prop() eventClick: any // 單擊事件 可空 默認值：空值

        public component(h: CreateElement) {
                let clsSize = ['mini', 'small', 'large', 'huge'].indexOf(this.size) !== -1
                        ? `${vfluents.themePrefix}icon-${this.size}`
                        : ''

                if (!vfluents.useSVGElement) {
                        return (
                                <span class={vfluents.cls([
                                        'glyphicon',
                                        'glyphicon-' + this.name,
                                        vfluents.themePrefix + 'icon',
                                        clsSize,
                                        this.className
                                ])} aria-hidden="true" onClick={vfluents.eventSafe(this.eventClick)}></span>
                        )
                }

                return (
                        <svg class={vfluents.cls([
                                vfluents.themePrefix + 'icon',
                                vfluents.themePrefix + 'icon-' + this.name,
                                clsSize,
                                this.className
                        ])} onClick={vfluents.eventSafe(this.eventClick)}>
                                <use xlinkHref={'#icon' + this.name.replace(/^icon/i, '').replace(/^[a-z]/i, s => s.toUpperCase())} />
                        </svg>
                )
        }
}