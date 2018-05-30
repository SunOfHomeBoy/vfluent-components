import Vue, { CreateElement } from 'vue'
import { Component, Prop, Provide } from 'vue-property-decorator'
import { vfluents } from '../vfluents'
import { Button } from '../Button'
import { NavBar } from '../NavBar'
import { NavigationView, INavigationView } from '../NavigationView'
import * as utils from '../utils'
import { iconCog, iconHierarchy, iconQuit, iconUser } from '../icons'
vfluents.useIcons({ iconCog, iconHierarchy, iconQuit, iconUser })

@Component
export class Dashboard extends vfluents {
        @Provide() size: string // 導航尺寸 可空 默認值：Default 可選值：Default | Small | Large | Huge
        @Provide() collapsed: boolean // 側欄折疊 可空 默認值：FALSE
        @Provide() brandLogo: string // 品牌LOGO 可空 默認值：空字符串
        @Provide() brandName: string // 品牌名稱 可空 默認值：空字符串
        @Provide() brandHref: string // 品牌鏈接 可空 默認值：空字符串
        @Provide() menuIcon: string // 菜單圖標 可空 默認值：空字符串
        @Provide() account: string // 用戶賬號 可空 默認值：空字符串
        @Provide() purview: string // 用戶權限 可空 默認值：空字符串
        @Provide() headerImg: string // 用戶頭銜 可空 默認值：空字符串
        @Provide() sideItems: any[] // 左側導航項 可空 默認值：空數組
        @Provide() tbarLeft: any[] // 頂部導航左側項 可空 默認值：空數組
        @Provide() tbarRight: any[] // 頂部導航右側項 可空 默認值：空數組
        @Provide() tbarSystem: boolean // 啓用頂部導航系統項 可空 默認值：TRUE
        @Provide() tbarTitle: string // 主標題 可空 默認值：空字符串 註釋：僅限移動端可見
        @Provide() bbarItems: any[] // 底部導航項 可空 默認值：空數組 註釋：僅限移動端可見
        @Provide() clsMounted: string // 加載成功時BODY元素樣式名稱 可空 默認值：空字符串
        @Provide() menuItems: INavigationView[] // 左側導航項 可空 默認值：空數組
        @Provide() links: { userinfo: string, setting: string, signin: string }

        private touchPosition: { x: number, y: number } = { x: 0, y: 0 }
        private countCollapsed: number = -1

        public eventCollapsed() {
                this.countCollapsed = this.countCollapsed + 1
                this.collapsed = !this.collapsed
        }

        public eventUserinfo() {
                this.$router.push(this.links.userinfo, () => {
                        this.collapsed = false
                })
        }

        public eventSetting() {
                this.$router.push(this.links.setting, () => {
                        this.collapsed = false
                })
        }

        public eventSignout() { this.$router.push(this.links.signin) }
        public eventOpenMenu() { this.collapsed = false }

        public component(h: CreateElement) {
                if (utils.empty(this.innerHTML)) {
                        this.innerHTML = (
                                <router-view></router-view>
                        )
                }

                let userElement = (
                        <span class={vfluents.themePrefix + 'userinfo'}>
                                <span class={vfluents.themePrefix + 'account'}>{this.account}</span>
                                <span class={vfluents.themePrefix + 'purview'}>{this.purview}</span>
                        </span>
                )

                return (
                        <div class={vfluents.cls([
                                'container-fluid',
                                vfluents.themePrefix + 'dashboard',
                                ['Small', 'Large', 'Huge'].indexOf(this.size) !== -1
                                        ? vfluents.themePrefix + 'dashboard-' + this.size.toLowerCase()
                                        : '',
                                this.collapsed
                                        ? vfluents.themePrefix + 'dashboard-collapsed'
                                        : vfluents.themePrefix + 'dashboard-uncollapsed' + (this.countCollapsed === -1 ? '-init' : ''),

                                this.className
                        ])}>
                                <div class={`row ${vfluents.themePrefix}row`}>
                                        <aside
                                                class={vfluents.cls([
                                                        'col-9',
                                                        'col-md-4',
                                                        'col-lg-3',
                                                        'col-xl-2',
                                                        vfluents.themePrefix + 'dashboard-side'
                                                ])}
                                        >
                                                <div class={`${vfluents.themePrefix}userinfo`}>
                                                        <Button
                                                                type="Info"
                                                                icon="None"
                                                                size="Default"
                                                                circle={true}
                                                                className={vfluents.themePrefix + 'dashboard-headerimg'}
                                                                style={{ backgroundImage: `url(${this.headerImg})` }}
                                                        />
                                                        <section onClick={vfluents.eventSafe(this.eventUserinfo)}>
                                                                <h6>{this.account}</h6>
                                                                <small>{this.purview}</small>
                                                        </section>
                                                </div>
                                                <NavigationView
                                                        size={this.size}
                                                        collapsed={this.collapsed}
                                                        items={this.menuItems || []}
                                                        eventLinks={this.eventOpenMenu}
                                                />
                                        </aside>
                                        <main id="main" class={vfluents.cls([
                                                'col-12',
                                                'col-md-8',
                                                'col-lg-9',
                                                'col-xl-10',
                                                vfluents.themePrefix + 'dashboard-main',
                                                utils.empty(this.bbarItems)
                                                        ? vfluents.themePrefix + 'dashboard-bottom'
                                                        : ''
                                        ])}>
                                                <NavBar
                                                        size={this.size || 'Default'}
                                                        fixed="Top"
                                                        brandCls="col-10 col-md-4 col-lg-3 col-xl-2"
                                                        brandLogo={this.brandLogo}
                                                        brandName={this.brandName}
                                                        brandHref={this.brandHref}
                                                        eventBrand={vfluents.eventSafe(this.eventCollapsed)}
                                                        itemsLeft={[
                                                                (
                                                                        <Button
                                                                                type="Primary"
                                                                                size={this.size}
                                                                                icon={this.menuIcon || 'Hierarchy'}
                                                                                eventClick={vfluents.eventSafe(this.eventCollapsed)}
                                                                                className={vfluents.themePrefix + 'dashboard-startmenu'}
                                                                        />
                                                                ),
                                                                ...(this.tbarLeft || [])
                                                        ]}
                                                        itemsMiddle={[
                                                                (
                                                                        <Button
                                                                                type="Info"
                                                                                size={this.size}
                                                                                text={this.tbarTitle || this.brandName}
                                                                                block={true}
                                                                                className={vfluents.themePrefix + 'dashboard-brand'}
                                                                        />
                                                                )
                                                        ]}
                                                        itemsRight={[
                                                                ...(this.tbarRight || []),
                                                                this.tbarSystem === false ? null : (
                                                                        <Button
                                                                                type="Primary"
                                                                                icon="Cog"
                                                                                size={this.size}
                                                                                eventClick={vfluents.eventSafe(this.eventSetting)}
                                                                                className={vfluents.themePrefix + 'dashboard-setting'}
                                                                        />
                                                                ),
                                                                (this.tbarSystem === false || !this.headerImg) ? null : (
                                                                        <Button
                                                                                type="Info"
                                                                                icon="None"
                                                                                size={this.size}
                                                                                className={vfluents.themePrefix + 'dashboard-headerimg'}
                                                                                style={{ backgroundImage: `url(${this.headerImg})` }}
                                                                        />
                                                                ),
                                                                this.tbarSystem === false ? null : (
                                                                        <Button
                                                                                type="Primary"
                                                                                icon={this.headerImg ? null : 'User'}
                                                                                size={this.size}
                                                                                text={this.account}
                                                                                eventClick={vfluents.eventSafe(this.eventUserinfo)}
                                                                                className={vfluents.themePrefix + 'dashboard-userinfo'}
                                                                        />
                                                                ),
                                                                this.tbarSystem === false ? null : (
                                                                        <Button
                                                                                type="Primary"
                                                                                icon="Quit"
                                                                                size={this.size}
                                                                                eventClick={vfluents.eventSafe(this.eventSignout)}
                                                                                className={vfluents.themePrefix + 'dashboard-quit'}
                                                                        />
                                                                )
                                                        ]}

                                                />
                                                <div class={`position-fixed ${vfluents.themePrefix}dashboard-main-mask`}
                                                        onClick={vfluents.eventSafe(this.eventCollapsed)}></div>
                                                <div class={vfluents.themePrefix + 'dashboard-main-inner'}>{this.innerHTML}</div>
                                        </main>
                                </div>
                        </div>
                )
        }

        public mounted() {
                document.body.setAttribute('class', this.clsMounted || (vfluents.themePrefix + 'mounted-success'))
                this.links = { userinfo: 'userinfo', setting: 'setting', signin: 'signin' }
        }
}