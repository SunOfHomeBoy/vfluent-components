import { Component, CreateElement } from 'vue-component-decorator'
import { vfluents } from './vfluents'
import { Button } from './Button'
import { NavBar } from './NavBar'
import { TabBar } from './TabBar'
import utils from './utils'
import './styles/Dashboard.scss'

@Component
export class Dashboard extends vfluents {
        protected size: string // 導航尺寸 可空 默認值：Default 可選值：Default | Small | Large | Huge
        protected collapsed: boolean // 側折疊 可空 默認值：FALSE
        protected brandLogo: string // 品牌LOGO 可空 默認值：空字符串
        protected brandName: string // 品牌名稱 可空 默認值：空字符串
        protected brandHref: string // 品牌鏈接 可空 默認值：空字符串
        protected startIcon: string // 開始菜單 可空 默認值：空字符串
        protected account: string // 用戶帳號 可空 默認值：空字符串
        protected purview: string // 用戶權限 可空 默認值：空字符串
        protected avatars: string // 用戶頭像 可空 默認值：空字符串
        protected sideMenus: any[] // 側欄菜單 可空 默認值：空數組
        protected bbarItems: any[] // 底部導航 可空 默認值：空數組
        protected tbarItems: any[] // 頂部導航 可空 默認值：空數組
        protected tbarSystem: boolean // 系統導航 可空 默認值：TRUE
        private stateCollapsed: boolean = false

        public render(h: CreateElement): any {
                let innerElement = this.innerComponents()

                if (utils.empty(innerElement)) {
                        innerElement = <router-view></router-view>
                }

                return (
                        <div class={vfluents.cls([
                                'pure-g',
                                vfluents.themePrefix + 'dashboard',
                                ['Small', 'Large', 'Huge'].indexOf(this.size) !== -1
                                        ? vfluents.themePrefix + 'dashboard-' + this.size.toLowerCase()
                                        : null,
                                utils.empty(this.stateCollapsed) === false
                                        ? vfluents.themePrefix + 'dashboard-collapsed'
                                        : vfluents.themePrefix + 'dashboard-uncollapsed'
                        ])}>
                                <aside class={vfluents.cls([
                                        'pure-u-4-5',
                                        'pure-u-md-1-3',
                                        'pure-u-lg-1-4',
                                        'pure-u-xl-1-6',
                                        vfluents.themePrefix + 'dashboard-side'
                                ])}></aside>
                                <main class={vfluents.cls([
                                        'pure-u-1',
                                        'pure-u-md-2-3',
                                        'pure-u-lg-3-4',
                                        'pure-u-xl-5-6',
                                        vfluents.themePrefix + 'dashboard-main'
                                ])}>
                                        <NavBar
                                                fixed="Top"
                                                size={this.size || 'Default'}
                                                className={vfluents.themePrefix + 'dashboard-tbar'}
                                                brandLogo={this.brandLogo || this.startIcon || 'Hierarchy'}
                                                brandName={this.brandName}
                                                brandHref={this.brandHref}
                                                eventBrand={this.eventCollapsed}
                                                brandCls={vfluents.cls([
                                                        'pure-u-4-5',
                                                        'pure-u-md-1-3',
                                                        'pure-u-lg-1-4',
                                                        'pure-u-xl-1-6',
                                                        vfluents.themePrefix + 'd-none',
                                                        vfluents.themePrefix + 'd-md-inline-block'
                                                ])}
                                                prepend={[
                                                        {
                                                                icon: this.startIcon || 'Hierarchy',
                                                                className: vfluents.cls([
                                                                        vfluents.themePrefix + 'd-inline-block',
                                                                        vfluents.themePrefix + 'd-md-none'
                                                                ])
                                                        }
                                                ]}
                                                append={[
                                                        ...(this.tbarItems || []),
                                                        this.tbarSystem === false ? null : {
                                                                icon: 'Cog',
                                                                className: vfluents.themePrefix + 'dashboard-quit'
                                                        },
                                                        this.tbarSystem === false ? null : {
                                                                icon: this.avatars ? null : 'User',
                                                                text: this.account,
                                                                className: vfluents.cls([
                                                                        vfluents.themePrefix + 'd-none',
                                                                        vfluents.themePrefix + 'd-md-inline-block',
                                                                        vfluents.themePrefix + 'dashboard-account'
                                                                ])
                                                        },
                                                        this.tbarSystem === false ? null : {
                                                                icon: 'Quit',
                                                                className: vfluents.cls([
                                                                        vfluents.themePrefix + 'd-none',
                                                                        vfluents.themePrefix + 'd-md-inline-block',
                                                                        vfluents.themePrefix + 'dashboard-quit'
                                                                ])
                                                        }
                                                ]}
                                        >{this.brandName}</NavBar>
                                        <TabBar fixed="Bottom" size={this.size} items={this.bbarItems} className={vfluents.themePrefix + 'dashboard-bbar'} />
                                        <div class={vfluents.themePrefix + 'mask'} onClick={this.eventCollapsed}></div>
                                        <div class={vfluents.themePrefix + 'dashboard-main-inner'}>{innerElement}</div>
                                </main>
                        </div>
                )
        }

        public eventCollapsed() {
                this.stateCollapsed = !this.stateCollapsed
        }
}