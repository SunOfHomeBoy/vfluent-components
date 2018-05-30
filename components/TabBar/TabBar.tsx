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

        public component(h: CreateElement) {
                if (utils.empty(this.items) === false) {
                        for (let { text, icon, link, sign, fn } of this.items) {
                                this.innerHTML.push((
                                        <Button
                                                type="Primary"
                                                align="Top"
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
                                'fixed-bottom',
                                vfluents.themePrefix + 'tabbar'
                        ])}>
                                {this.innerHTML}
                        </nav>
                )
        }

        public eventClick(link: string, fn: any) { }
}