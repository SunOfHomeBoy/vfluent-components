import Vue, { CreateElement } from 'vue'
import { Component, Prop, Provide, Watch } from 'vue-property-decorator'
import { vfluents } from '../vfluents'
import { Button } from '../Button'
import * as utils from '../utils'

export interface ITabBar {
        text: string
        icon: string
        link?: string
        sign?: string
        fn?: any
}

@Component
export class TabBar extends vfluents {
        @Prop() items: ITabBar[] // 按鈕項配置 可空 默認值：空數組
        @Prop() type: string // 按鈕類型 可空 默認值：Default 可選值：Default | Primary | Secondary | Success | Danger | Warning | Info | Light | Dark |  Link
        @Prop() fixed: string // 固定位置 可空 默認值：default 可選值：Default | Top | Bottom | Sticky

        public component(h: CreateElement) {
                let clsFixed = ''
                switch (this.fixed) {
                        case 'Top':
                                clsFixed = 'fixed-top'
                                break

                        case 'Bottom':
                                clsFixed = 'fixed-bottom'
                                break

                        case 'Sticky':
                                clsFixed = 'sticky-top'
                                break
                }

                if (utils.empty(this.items) === false) {
                        for (let id = 0; id < this.items.length; id++) {
                                let { text, icon, link, sign, fn } = this.items[id]
                                this.innerHTML.push((
                                        <Button
                                                align="Top"
                                                type={this.type || 'Default'}
                                                icon={icon}
                                                text={text}
                                                eventClick={() => this.eventClick(link, fn)}
                                        />
                                ))
                        }
                }

                return (
                        <nav class={vfluents.cls([
                                'd-flex',
                                'justify-content-around',
                                'align-items-start',
                                'flex-nowrap',
                                clsFixed,
                                vfluents.themePrefix + 'tabbar',
                                `${vfluents.themePrefix}tabbar-flex${this.items.length}`,
                                this.className
                        ])}>{this.innerHTML}</nav>
                )
        }

        public eventClick(link: string, fn: any) {
                if (typeof (fn) === 'function') {
                        fn()
                }

                if (utils.empty(link) === false) {
                        this.redirect(link)
                }
        }
}