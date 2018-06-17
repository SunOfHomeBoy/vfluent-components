import { Component, CreateElement, Props } from 'vue-component-decorator'
import { vfluents } from './vfluents'
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
                items?: {}[] // 導航項配置 可空 默認值：空數組
                eventBrand?: any // 品牌區域單擊事件 可空 默認值：空值
        } = {
                        id: '',
                        className: '',
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
                return (
                        <div id={this.$props.id} class={vfluents.cls([
                                'pure-menu',
                                'pure-menu-horizontal',
                                'pure-menu-scrollable',
                                vfluents.themePrefix + 'navbar',
                                ['Small', 'Large', 'Huge'].indexOf(this.$props.size) !== -1
                                        ? vfluents.themePrefix + 'navbar-' + String(this.$props.size).toLowerCase()
                                        : '',
                                ['Top', 'Bottom', 'Sticky'].indexOf(this.$props.fixed) !== -1
                                        ? vfluents.themePrefix + 'navbar-' + String(this.$props.fixed).toLowerCase()
                                        : '',
                                this.$props.className
                        ])}></div>
                )
        }
}