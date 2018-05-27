import Vue, { CreateElement } from 'vue'
import { Component, Prop, Provide } from 'vue-property-decorator'
import { vfluents } from '../vfluents'
import { Button } from '../button'
import { NavBar } from '../navbar'
import * as utils from '../utils'
import { iconCog, iconHierarchy } from '../icons'
vfluents.useIcons({ iconCog, iconHierarchy })

@Component
export class Dashboard extends vfluents {
        @Provide() size: string // 導航尺寸 可空 默認值：Default 可選值：Default | Small | Large | Huge
        @Provide() collapsed: boolean // 側欄折疊 可空 默認值：FALSE
        @Provide() brandLogo: string // 品牌LOGO 可空 默認值：空字符串
        @Provide() brandName: string // 品牌名稱 可空 默認值：空字符串
        @Provide() brandHref: string // 品牌鏈接 可空 默認值：空字符串
        @Provide() menuIcon: string // 菜單圖標 可空 默認值：空字符串
        @Provide() tbarItems: any[] // 底部導航 可空 默認值：空字符串

        public component(h: CreateElement) {
                return (
                        <div class={vfluents.cls([
                                'container-fluid',
                                vfluents.themePrefix + 'dashboard',
                                ['Small', 'Large', 'Huge'].indexOf(this.size) !== -1
                                        ? vfluents.themePrefix + 'dashboard-' + this.size.toLowerCase()
                                        : '',
                                this.collapsed
                                        ? vfluents.themePrefix + 'dashboard-collapsed'
                                        : '',
                                this.className
                        ])}>
                                <div class={`row ${vfluents.themePrefix}row`}>
                                        <aside class={vfluents.cls([
                                                'col-10',
                                                'col-md-4',
                                                'col-lg-3',
                                                'col-xl-2',
                                                vfluents.themePrefix + 'dashboard-side'
                                        ])}>
                                        </aside>
                                        <main class={vfluents.cls([
                                                'col-12',
                                                'col-md-8',
                                                'col-lg-9',
                                                'col-xl-10',
                                                vfluents.themePrefix + 'dashboard-main',
                                                utils.empty(this.tbarItems)
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
                                                                /*(
                                                                        <Button
                                                                                type="Primary"
                                                                                icon={this.menuIcon || 'Hierarchy'}
                                                                                eventClick={() => alert('ok')}
                                                                                className={vfluents.themePrefix + 'dashboard-startmenu'}
                                                                        />
                                                                ),*/
                                                                (
                                                                        <span onClick={() => alert('ok')}>TEST</span>
                                                                )
                                                        ]}

                                                />
                                                <div class={`position-fixed ${vfluents.themePrefix}dashboard-main-mask`}></div>
                                                <div class={vfluents.themePrefix + 'dashboard-main-inner'}>
                                                        <router-view></router-view>
                                                </div>
                                        </main>
                                </div>
                        </div>
                )
        }

        public eventCollapsed() {
                //alert('ok')
                console.log('ok')
                //this.collapsed = !this.collapsed
        }
}