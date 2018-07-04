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
                return (
                        <nav id={this.$props.id} class={vfluents.cls([
                                'pure-g',
                                'pure-menu',
                                'pure-menu-horizontal',
                                'pure-menu-scrollable',
                                vfluents.themePrefix + 'navbar',
                                ['Small', 'Large', 'Huge'].indexOf(this.$props.size) !== -1
                                        ? vfluents.themePrefix + 'navbar-' + String(this.$props.size).toLowerCase()
                                        : null,
                                ['Top', 'Bottom', 'Sticky'].indexOf(this.$props.fixed) !== -1
                                        ? vfluents.themePrefix + 'fixed-' + String(this.$props.fixed).toLowerCase()
                                        : null,
                                this.$props.className
                        ])}>
                                {utils.empty(this.$props.brandName) === false ? (
                                        <Button
                                                type="Primary"
                                                size={this.$props.size}
                                                icon={this.$props.brandLogo}
                                                text={this.$props.brandName}
                                                align="Left"
                                                className={vfluents.cls([
                                                        vfluents.themePrefix + 'navbar-brand',
                                                        this.$props.brandCls
                                                ])}
                                                eventClick={() => this.eventPreClick(this.$props.brandHref, this.$props.eventBrand)}
                                        />
                                ) : null}
                                <div class={vfluents.themePrefix + 'navbar-prepend'}>{[
                                        this.$props.align === 'Left' && utils.empty(this.$props.items) === false
                                                ? this.renderItems(h)
                                                : null,
                                        this.renderPrependAndAppend(h, this.$props.prepend)
                                ]}</div>
                                <div class={vfluents.themePrefix + 'navbar-inner'}>{[
                                        this.$props.align === 'Center' && utils.empty(this.$props.items) === false
                                                ? this.renderItems(h)
                                                : null,
                                        this.renderChildComponents(h)
                                ]}</div>
                                <div class={vfluents.themePrefix + 'navbar-append'}>{[
                                        this.$props.align === 'Right' && utils.empty(this.$props.items) === false
                                                ? this.renderItems(h)
                                                : null,
                                        this.renderPrependAndAppend(h, this.$props.append)
                                ]}</div>
                        </nav>
                )
        }

        public renderItems(h: CreateElement): any {
                if (this.$props.items instanceof Array && utils.empty(this.$props.items) === false) {
                        let menuitems: any[] = []

                        for (let { text, href, selected, disabled, dropdowns } of this.$props.items) {
                                let subitems: any[] = []

                                if (dropdowns instanceof Array) {
                                        for (let item of dropdowns) {
                                                subitems.push(
                                                        <li class="pure-menu-item">
                                                                <Button
                                                                        type="Secondary"
                                                                        align="Left"
                                                                        block={true}
                                                                        text={item.text}
                                                                        size={this.$props.size}
                                                                        eventClick={() => this.eventPreClick(item.href, null)}
                                                                />
                                                        </li>
                                                )
                                        }
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
                                                {utils.empty(dropdowns) === false ? (
                                                        <ul class="pure-menu-children">{subitems}</ul>
                                                ) : null}
                                        </li>
                                )
                        }

                        return <ul class="pure-menu-list">{menuitems}</ul>
                }

                return null
        }

        public renderChildComponents(h: CreateElement): any {
                let innerElements = this.innerComponents()

                if (innerElements.length === 1 && !innerElements[0].tag) {
                        return (
                                <div class={vfluents.cls([
                                        vfluents.themePrefix + 'align-center',
                                        vfluents.themePrefix + 'position-absolute',
                                        vfluents.themePrefix + 'navbar-title'
                                ])}>{innerElements}</div>
                        )
                }

                return innerElements
        }

        public renderPrependAndAppend(h: CreateElement, components: any[]): any {
                let xpendElements: any[] = []

                if (components instanceof Array) {
                        for (let element of components) {
                                if (typeof (element) === 'object' && utils.empty(element.tag)) {
                                        xpendElements.push(
                                                <Button
                                                        type="Secondary"
                                                        text={element.text}
                                                        icon={element.icon}
                                                        size={this.$props.size}
                                                        align={element.align}
                                                        tooltip={element.tooltip}
                                                        className={element.className}
                                                        eventClick={() => this.eventPreClick(element.href, element.click)}
                                                />
                                        )
                                        continue
                                }

                                xpendElements.push(element)
                        }
                }

                return xpendElements
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