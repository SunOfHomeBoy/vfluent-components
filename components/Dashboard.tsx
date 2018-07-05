import { Component, CreateElement } from 'vue-component-decorator'
import { vfluents } from './vfluents'
import { Button } from './Button'
import { NavBar } from './NavBar'
import { TabBar } from './TabBar'
import utils from './utils'
import './styles/Dashboard.scss'

@Component
export class Dashboard extends vfluents {
        public props: {
                id?: string // 組件ID 可空 默認值：空字符串
                className?: string // 附加樣式 可空 默認值：空字符串
                size?: string // 導航尺寸 可空 默認值：Default 可選值：Default | Small | Large | Huge
                collapsed?: boolean // 側折疊 可空 默認值：FALSE
                brandLogo?: string // 品牌LOGO 可空 默認值：空字符串
                brandName?: string // 品牌名稱 可空 默認值：空字符串
                brandHref?: string // 品牌鏈接 可空 默認值：空字符串
                startIcon?: string // 開始菜單 可空 默認值：空字符串
                account?: string // 用戶帳號 可空 默認值：空字符串
                purview?: string // 用戶權限 可空 默認值：空字符串
                avatars?: string // 用戶頭像 可空 默認值：空字符串
                sideMenus?: any[] // 側欄菜單 可空 默認值：空數組
                bbarItems?: any[] // 底部導航 可空 默認值：空數組
                tbarItems?: any[] // 頂部導航 可空 默認值：空數組
                tbarSystem?: boolean // 系統導航 可空 默認值：TRUE
        } = {}
        private stateCollapsed: boolean = false

        public render(h: CreateElement): any {
                /*let innerElement = this.innerComponents()

                if (utils.empty(innerElement)) {
                        innerElement = <router-view></router-view>
                }

                return (
                        <div class={vfluents.cls([
                                'pure-g',
                                vfluents.themePrefix + 'dashboard',
                                ['Small', 'Large', 'Huge'].indexOf(this.props.size) !== -1
                                        ? vfluents.themePrefix + 'dashboard-' + this.props.size.toLowerCase()
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
                                                size={this.props.size || 'Default'}
                                        ></NavBar>
                                        <TabBar fixed="Bottom" size={this.props.size} items={this.props.bbarItems} className={vfluents.themePrefix + 'dashboard-bbar'} />
                                        <div class={vfluents.themePrefix + 'mask'} onClick={this.eventCollapsed}></div>
                                        <div class={vfluents.themePrefix + 'dashboard-main-inner'}>{innerElement}</div>
                                </main>
                        </div>
                )*/
        }

        public eventCollapsed() {
                this.stateCollapsed = !this.stateCollapsed
        }
}