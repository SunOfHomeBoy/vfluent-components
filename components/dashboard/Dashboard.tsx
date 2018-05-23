import Vue, { CreateElement } from 'vue'
import { Component, Prop, Provide } from 'vue-property-decorator'
import { vfluents } from '../vfluents'
import { Button } from '../button'
import { NavBar } from '../navbar'
import { empty } from '../utils'

@Component
export class Dashboard extends vfluents {
        @Provide() size: string // 導航尺寸 可空 默認值：default 可選值：default | small | large | huge
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
                                ['small', 'large', 'huge'].indexOf(this.size) !== -1
                                        ? `${vfluents.themePrefix}dashboard-${this.size}`
                                        : '',
                                this.collapsed
                                        ? vfluents.themePrefix + 'dashboard-collapsed'
                                        : '',
                                this.className
                        ])}>
                                <div class={`row ${vfluents.themePrefix}row`}>
                                        {this.componentSide(h)}
                                        {this.componentMain(h)}
                                </div>
                        </div>
                )
        }

        private componentSide(h: CreateElement) {
                return (
                        <aside class={vfluents.cls([
                                'col-10',
                                'col-md-4',
                                'col-lg-3',
                                'col-xl-2',
                                vfluents.themePrefix + 'dashboard-side'
                        ])}>
                        </aside>
                )
        }

        private componentMain(h: CreateElement) {
                if (!this.innerHTML) {
                        this.innerHTML = (
                                <router-view></router-view>
                        )
                }
                return (
                        <main class={vfluents.cls([
                                'col-12',
                                'col-md-8',
                                'col-lg-9',
                                'col-xl-10',
                                vfluents.themePrefix + 'dashboard-main',
                                empty(this.tbarItems)
                                        ? `${vfluents.themePrefix}dashboard-bottom`
                                        : ''
                        ])}>
                                {this.componentMainNavbar(h)}
                                {this.componentMainTarbar(h)}
                                <div class={`position-fixed ${vfluents.themePrefix}dashboard-main-mask`}></div>
                                <div class={vfluents.themePrefix + 'dashboard-main-inner'}>{this.innerHTML}</div>
                        </main>
                )
        }

        private componentMainNavbar(h: CreateElement) {
                return (
                        <NavBar
                                size={this.size || 'default'}
                                fixed="top"
                                brandCls="col-10 col-md-4 col-lg-3 col-xl-2"
                                brandLogo={this.brandLogo}
                                brandName={this.brandName}
                                brandHref={this.brandHref}
                                eventBrand={vfluents.eventSafe(this.eventCollapsed)}
                                itemsLeft={[
                                        (<Button icon={this.menuIcon || 'Hierarchy'} text="TEST" />)
                                ]}
                        />
                )
        }

        private componentMainTarbar(h: CreateElement) {
                return (
                        <div></div>
                )
        }

        public eventCollapsed() {
                this.collapsed = !this.collapsed
        }
}