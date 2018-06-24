import { Component, CreateElement, Props } from 'vue-component-decorator'
import { vfluents } from './vfluents'
import { Button } from './Button'
import utils from './utils'
import './styles/NavBar.scss'

@Component
export class NavBar extends vfluents {
        @Props() public readonly props: {
                id?: string // 組件ID 可空 默認值：空字符串
                className?: string // 附加樣式 可空 默認值：空字符串
                size?: string // 導航尺寸 可空 默認值：Default 可選值：Default | Small | Large | Huge
                fixed?: string // 固定位置 可空 默認值：Default 可選值：Default | Top | Bottom | Sticky
                brandLogo?: string // 品牌LOGO 可空 默認值：空字符串
                brandName?: string // 品牌名稱 可空 默認值：空字符串
                brandHref?: string // 品牌鏈接 可空 默認值：空字符串
                brandCls?: string // 品牌樣式 可空 默認值：空字符串
                prepend?: any // 前置元素 可空 默認值：空值
                append?: any // 後置元素 可空 默認值：空值
                align?: string // 導航對齊 可空 默認值：Left 可選值：Left | Center | Right
                items?: {
                        text?: string // 導航項之文本 可空 默認值：空字符串
                        href?: string // 導航項之鏈接 可空 默認值：空字符串
                        selected?: boolean // 導航項之已選狀態 可空 默認值：FALSE
                        disabled?: boolean // 導航項之禁用狀態 可空 默認值：FALSE
                        dropdowns?: { // 即導航項是下拉菜單
                                text?: string // 菜單項之文本 可空 默認值：空字符串
                                href?: string // 菜單項之鏈接 可空 默認值：空字符串
                        }[]
                }[],
                eventBrand?: any // 品牌區域單擊事件 可空 默認值：空值
        } = {
                        id: null,
                        className: null,
                        size: 'Default',
                        fixed: 'Default',
                        brandLogo: '',
                        brandName: '',
                        brandHref: '',
                        brandCls: '',
                        prepend: null,
                        append: null,
                        align: 'Left',
                        items: null,
                        eventBrand: null
                }

        public render(h: CreateElement): any {
                return (
                        <nav id={this.$props.id} class={vfluents.cls([
                                'pure-g',
                                'pure-menu',
                                'pure-menu-horizontal',
                                vfluents.themePrefix + 'navbar',
                                ['Small', 'Large', 'Huge'].indexOf(this.$props.size) !== -1
                                        ? vfluents.themePrefix + 'navbar-' + String(this.$props.size).toLowerCase()
                                        : null,
                                ['Top', 'Bottom', 'Sticky'].indexOf(this.$props.fixed) !== -1
                                        ? vfluents.themePrefix + 'fixed-' + String(this.$props.fixed).toLowerCase()
                                        : null
                        ])}>
                                {utils.empty(this.$props.brandName) ? null : (
                                        <Button
                                                type="Primary"
                                                size={this.$props.size}
                                                icon={this.$props.brandLogo}
                                                text={this.$props.brandName}
                                                className={vfluents.cls([
                                                        vfluents.themePrefix + 'navbar-brand',
                                                        this.$props.brandCls
                                                ])}
                                                eventClick={() => this.eventPreClick(this.$props.brandHref, this.$props.eventBrand)}
                                        />
                                )}
                                <div class={vfluents.themePrefix + 'navbar-prepend'}>
                                        {this.$props.align === 'Left' ? this.renderNavItems(h) : null}
                                        {this.$props.prepend}
                                </div>
                                <div class={vfluents.themePrefix + 'navbar-inner'}>
                                        {this.$props.align === 'Center' ? this.renderNavItems(h) : null}
                                        {this.innerComponent()}
                                </div>
                                <div class={vfluents.themePrefix + 'navbar-append'}>
                                        {this.$props.append}
                                        {this.$props.align === 'Right' ? this.renderNavItems(h) : null}
                                </div>
                        </nav>
                )
        }

        public renderNavItems(h: CreateElement): any {
                if (this.$props.items instanceof Array && utils.empty(this.$props.items) === false) {
                        let menuitems: any[] = []

                        for (let { text, href, selected, disabled, dropdowns } of this.$props.items) {
                                if (utils.empty(dropdowns) === false) {
                                        continue
                                }

                                menuitems.push(
                                        <li class="pure-menu-item">
                                                <Button
                                                        type="Secondary"
                                                        text={text}
                                                        size={this.$props.size}
                                                        active={selected}
                                                        disabled={disabled}
                                                        eventClick={() => this.eventPreClick(href, null)}
                                                />
                                        </li>
                                )
                        }

                        return <ul class="pure-menu-list">{menuitems}</ul>
                }

                return null
        }

        public eventPreClick(href: string, click: any) {
                if (typeof (click) === 'function') {
                        return click()
                }

                if (utils.empty(href) === false) {
                        return this.redirect(href)
                }
        }
}