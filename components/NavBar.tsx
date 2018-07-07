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
                prepend?: any[] // 前置元素 可空 默認值：空數組
                append?: any[] // 後置元素 可空 默認值：空數組
                align?: string // 導航對齊 可空 默認值：Left 可選值：Left | Center | Right
                items?: {
                        text?: string // 導航項之文本 可空 默認值：空字符串
                        href?: string // 導航項之鏈接 可空 默認值：空字符串
                        selected?: boolean // 導航項之已選狀態 可空 默認值：FALSE
                        disabled?: boolean // 導航項之禁用狀態 可空 默認值：FALSE
                        dropdown?: { // 即導航項是下拉菜單
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
                        brandLogo: null,
                        brandName: null,
                        brandHref: null,
                        brandCls: null,
                        prepend: null,
                        append: null,
                        align: 'Left',
                        items: null,
                        eventBrand: null
                }

        public render(h: CreateElement): any {
                let prependComponents = utils.list()
                let appendComponents = utils.list()
                let innerComponents = utils.list()

                if (utils.nonempty(this.$props.items) && this.$props.items instanceof Array) {
                        let navComponent = this.renderNavitemsComponents(h, this.$props.items)

                        switch (this.$props.align) {
                                case 'Center':
                                        innerComponents.push(navComponent)
                                        break

                                case 'Right':
                                        appendComponents.push(navComponent)
                                        break

                                default:
                                        prependComponents.push(navComponent)
                                        break
                        }
                }

                if (utils.nonempty(this.$props.prepend)) {
                        prependComponents.push(this.renderPrependAndAppend(h, this.$props.prepend))
                }

                if (utils.nonempty(this.$props.append)) {
                        appendComponents.push(this.renderPrependAndAppend(h, this.$props.append))
                }

                innerComponents.push(this.renderChildrenComponents(h))

                return (
                        <nav id={this.$props.id} class={vfluents.cls([
                                'pure-g',
                                'pure-menu',
                                'pure-menu-horizontal',
                                'pure-menu-scrollable',
                                vfluents.themePrefix + 'navbar',
                                ['Small', 'Large', 'Huge'].indexOf(this.$props.size) !== -1
                                        ? vfluents.themePrefix + 'navbar-' + utils.str(this.$props.size).toLowerCase()
                                        : '',
                                ['Top', 'Bottom', 'Sticky'].indexOf(this.$props.fixed) !== -1
                                        ? vfluents.themePrefix + 'fixed-' + utils.str(this.$props.fixed).toLowerCase()
                                        : '',
                                this.$props.className
                        ])}>
                                {utils.empty(this.$props.brandName) && utils.empty(this.$props.brandLogo) ? null : (
                                        <Button
                                                type="Primary"
                                                align="Left"
                                                size={this.$props.size}
                                                icon={this.$props.brandLogo}
                                                text={this.$props.brandName}
                                                className={vfluents.cls([vfluents.themePrefix + 'navbar-brand', this.$props.brandCls])}
                                                eventClick={() => this.eventPreClick(this.$props.brandHref, this.$props.eventBrand)}
                                        />
                                )}
                                <div class={vfluents.themePrefix + 'navbar-prepend'}>{prependComponents}</div>
                                <div class={vfluents.themePrefix + 'navbar-inner'}>{innerComponents}</div>
                                <div class={vfluents.themePrefix + 'navbar-append'}>{appendComponents}</div>
                        </nav>
                )
        }

        public renderChildrenComponents(h: CreateElement): any {
                let innerComponents = this.innerComponents()

                if (innerComponents.length === 1 && utils.empty(innerComponents[0].tag)) {
                        return (
                                <div class={vfluents.cls([
                                        vfluents.themePrefix + 'align-center',
                                        vfluents.themePrefix + 'position-absolute',
                                        vfluents.themePrefix + 'navbar-title'
                                ])}>{innerComponents}</div>
                        )
                }

                return innerComponents
        }

        public renderNavitemsComponents(h: CreateElement, components: any[]): any {
                let menuitems = utils.list()

                for (let { text, href, selected, disabled, dropdown } of components) {
                        let menuChildren: any

                        if (utils.nonempty(dropdown)) {
                                menuChildren = (
                                        <ul class="pure-menu-children">{utils.forEach(dropdown, (element: any) => {
                                                return (
                                                        <li class="pure-menu-item">
                                                                <Button
                                                                        type="Secondary"
                                                                        align="Left"
                                                                        block={true}
                                                                        text={element.text}
                                                                        size={this.$props.size}
                                                                        eventClick={() => this.eventPreClick(element.href, null)}
                                                                />
                                                        </li>
                                                )
                                        })}</ul>
                                )
                        }

                        menuitems.push(
                                <li class="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
                                        <Button
                                                type="Secondary"
                                                text={text}
                                                size={this.$props.size}
                                                active={selected}
                                                disabled={disabled}
                                                eventClick={() => this.eventPreClick(href, null)}
                                        />
                                        {menuChildren}
                                </li>
                        )
                }

                return <ul class="pure-menu-list">{menuitems}</ul>
        }

        public renderPrependAndAppend(h: CreateElement, components: any[]): any[] {
                return utils.forEach(components, (element: any) => {
                        if (typeof (element) === 'object' && utils.empty(element.tag)) {
                                return (
                                        <Button
                                                type="Secondary"
                                                text={element.text}
                                                icon={element.icon}
                                                size={this.$props.size}
                                                align={element.align}
                                                tooltip={element.tooltip}
                                                className={element.className}
                                                background={element.background}
                                                eventClick={() => this.eventPreClick(element.href, element.click)}
                                        />
                                )
                        }

                        return element
                })
        }

        public eventPreClick(href: string, click: any) {
                if (utils.isFunc(click)) {
                        click()
                } else if (utils.nonempty(href)) {
                        this.redirect(href)
                }
        }
}