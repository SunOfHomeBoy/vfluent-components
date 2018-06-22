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
                items?: {
                        text?: string // 導航項之文本 可空 默認值：空字符串
                        href?: string // 導航項之鏈接 可空 默認值：空字符串
                        selected?: boolean // 導航項之已選狀態 可空 默認值：FALSE
                        disabled?: boolean // 導航項之禁用狀態 可空 默認值：FALSE
                        dropdowns?: { // 即導航項是下拉菜單
                                text?: string // 菜單項之文本 可空 默認值：空字符串
                                href?: string // 菜單項之鏈接 可空 默認值：空字符串
                        }[]

                }[]
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
                        items: null,
                        eventBrand: null
                }

        public render(h: CreateElement) {
                let brandElement = this.$props.text ? <Button
                        type="Link"
                        size={this.$props.size}
                        icon={this.$props.brandLogo}
                        text={this.$props.brandName}
                        className={this.$props.brandCls}
                /> : null
                return (
                        <nav id={this.$props.id} class={vfluents.cls([
                                'pure-menu',
                                'pure-menu-horizontal',
                                'pure-menu-scrollable',
                                vfluents.themePrefix + 'navbar',
                                ['Small', 'Large', 'Huge'].indexOf(this.$props.size) !== -1
                                        ? vfluents.themePrefix + 'navbar-' + String(this.$props.size).toLowerCase()
                                        : '',
                                ['Top', 'Bottom', 'Sticky'].indexOf(this.$props.fixed) !== -1
                                        ? vfluents.themePrefix + 'fixed-' + String(this.$props.fixed).toLowerCase()
                                        : '',
                                this.$props.className
                        ])}>
                                {brandElement}
                                <div class={vfluents.themePrefix + 'navbar-inner'}>
                                </div>
                        </nav>
                )
        }
}