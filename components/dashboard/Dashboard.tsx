import Vue, { CreateElement } from 'vue'
import { Component, Prop, Provide } from 'vue-property-decorator'
import { vfluents } from '../vfluents'
import { Navbar } from '../navbar'

@Component
export class Dashboard extends vfluents {
        @Prop() size: string // 導航尺寸 可空 默認值：default 可選值：default | small | large | huge
        @Prop() collapsed: boolean // 側欄折疊 可空 默認值：false
        @Prop() brandLogo: string // 品牌LOGO 可空 默認值：空字符串
        @Prop() brandName: string // 品牌名稱 可空 默認值：空字符串
        @Prop() brandHref: string // 品牌鏈接 可空 默認值：空字符串
        @Provide() stateSize: string = 'default'
        @Provide() stateCollapsed: boolean = false
        @Provide() stateBrandLogo: string = ''
        @Provide() stateBrandName: string = ''
        @Provide() stateBrandHref: string = ''


        public created() {
                this.stateSize = this.size || this.stateSize
                this.stateCollapsed = this.collapsed || this.stateCollapsed
                this.stateBrandLogo = this.brandLogo || this.stateBrandLogo
                this.stateBrandName = this.brandName || this.stateBrandName
                this.stateBrandHref = this.brandHref || this.stateBrandHref
        }

        public component(h: CreateElement) {
                return (
                        <div class={vfluents.cls([
                                'container-fluid',
                                vfluents.themePrefix + 'dashboard',
                                ['small', 'large', 'huge'].indexOf(this.stateSize) !== -1
                                        ? `${vfluents.themePrefix}dashboard-${this.stateSize}`
                                        : '',
                                this.stateCollapsed
                                        ? vfluents.themePrefix + 'dashboard-collapsed'
                                        : '',
                                this.className
                        ])}>
                                <div class="row">
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
                        ])} onClick={this.closeCollapse}>
                                {this.componentSideNavbar(h)}
                        </aside>
                )
        }

        private componentSideNavbar(h: CreateElement) {
                return (
                        <Navbar
                                size={this.stateSize}
                                brandLogo={this.stateBrandLogo}
                                brandName={this.stateBrandName}
                                brandHref={this.stateBrandHref}
                        />
                )
        }

        private componentMain(h: CreateElement) {
                return (
                        <main class={vfluents.cls([
                                'col-12',
                                'col-md-8',
                                'col-lg-9',
                                'col-xl-10',
                                vfluents.themePrefix + 'dashboard-main'
                        ])} onClick={this.openCollapse}>
                                {this.componentMainNavbar(h)}
                                {this.componentMainTarbar(h)}
                                <div class={`position-fixed ${vfluents.themePrefix}dashboard-main-mask`}></div>
                                <div class={vfluents.themePrefix + 'dashboard-main-inner'}>
                                        <router-view></router-view>
                                </div>
                        </main>
                )
        }

        private componentMainNavbar(h: CreateElement) {
                return (
                        <Navbar
                                size={this.stateSize}
                        />
                )
        }

        private componentMainTarbar(h: CreateElement) {
        }

        public closeCollapse() {
                this.stateCollapsed = false
        }

        public openCollapse() {
                this.stateCollapsed = true
        }
}