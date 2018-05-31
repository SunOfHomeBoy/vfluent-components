import Vue, { CreateElement } from 'vue'
import { Component, Prop, Provide, Watch } from 'vue-property-decorator'
import { vfluents } from '../vfluents'
import { Button } from '../Button'
import * as utils from '../utils'

export interface INavigationView {
        text: string
        icon: string
        link?: string
        sign?: string
        items?: { text: string, link: string }[]
}

@Component
export class NavigationView extends vfluents {
        @Prop() size: string // 行高尺寸 可空 默認值：Default 可選值：Default | Small | Large | Huge
        @Prop() collapsed: boolean // 側欄折疊 可空 默認值：FALSE
        @Prop() active: number // 已點擊導航項 可空 默認值：0 注釋：編碼從1，2，3。。。
        @Prop() items: INavigationView[] // 導航項數組 可空 默認值：空數組
        @Prop() eventLinks: any // 鏈接事件 可空 默認值：空值
        @Provide() stateActive: { x: number, y: number } = { x: 0, y: 0 }

        public component(h: CreateElement) {
                for (let i = 0; i < this.items.length; i++) {
                        let subitems = []
                        if (utils.empty(this.items[i].items) === false) {
                                for (let j = 0; j < this.items[i].items.length; j++) {
                                        subitems.push((
                                                <span
                                                        class={vfluents.cls([
                                                                'list-group-item',
                                                                this.stateActive.x === i && this.stateActive.y === j + 1
                                                                        ? vfluents.themePrefix + 'navigation-active'
                                                                        : ''
                                                        ])}
                                                        onClick={() => this.eventOpenMenu(i, j + 1)}
                                                >
                                                        {this.items[i].items[j].text}
                                                </span>
                                        ))
                                }
                        }

                        this.innerHTML.push((
                                <li
                                        class={vfluents.cls([
                                                'list-group-item',
                                                vfluents.themePrefix + 'navigation-item',
                                                this.stateActive.x === i
                                                        ? vfluents.themePrefix + 'navigation-active'
                                                        : ''
                                        ])}>
                                        <section class={vfluents.themePrefix + 'navigation-item-first'} onClick={() => this.eventOpenMenu(i, 0)}>
                                                <Button size={this.size} icon={this.items[i].icon} />
                                                <span class={vfluents.themePrefix + 'navigation-text'}>{this.items[i].text}</span>
                                        </section>
                                        <ul class={'list-group ' + vfluents.themePrefix + 'navigation-subitems'}>{subitems}</ul>
                                </li >
                        ))
                }

                return (
                        <ul
                                class={vfluents.cls([
                                        'list-group',
                                        vfluents.themePrefix + 'navigation',
                                        ['Small', 'Large', 'Huge'].indexOf(this.size) !== -1
                                                ? vfluents.themePrefix + 'navigation-' + this.size.toLowerCase()
                                                : '',
                                        this.collapsed
                                                ? vfluents.themePrefix + 'navigation-collapsed'
                                                : ''
                                ])}
                        >{this.innerHTML}</ul>
                )
        }

        public created() {
                this.stateActive = { x: this.active || 0, y: 0 }
        }

        public eventOpenMenu(i: number, j: number) {
                let cfg: any = j === 0
                        ? this.items[i]
                        : this.items[i].items[j - 1]

                cfg.link = String(cfg.link || '')
                this.$set(this.stateActive, 'x', i)
                this.$set(this.stateActive, 'y', j)

                if (cfg.link.indexOf('http') !== -1) {
                        window.location.href = cfg.link
                } else if (cfg.link) {
                        this.$router.push(cfg.link, () => {
                                if (typeof (this.eventLinks) === 'function') {
                                        this.eventLinks()
                                }
                        })
                }
        }
}