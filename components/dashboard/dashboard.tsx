import Vue, { CreateElement } from 'vue'
import { Component, Prop, Provide } from 'vue-property-decorator'
import { vfluents } from '../vfluents'
import { Navbar } from '../navbar/navbar'
import './dashboard.scss'

@Component
export class Dashboard extends vfluents {
        @Prop() size: string // 導航尺寸 可空 默認值：default 可選值：default | small | large | huge
        @Prop() theme: string // 界面主題 可空 默認值：default 可選值：default | light | dark | todc
        @Prop() collapsed: boolean // 側欄折疊 可空 默認值：false
        @Prop() brandLogo: string // 品牌LOGO 可空 默認值：空字符串
        @Prop() brandName: string // 品牌名稱 可空 默認值：空字符串
        @Prop() brandHref: string // 品牌鏈接 可空 默認值：空字符串
        @Provide() stateSize: string = 'default'
        @Provide() stateTheme: string = 'default'
        @Provide() stateCollapsed: boolean = false

        public created() {
                this.stateSize = this.size || this.stateSize
                this.stateTheme = this.theme || this.stateTheme
                this.stateCollapsed = this.collapsed || this.stateCollapsed
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
                                `${vfluents.themePrefix}dashboard-theme-${this.stateTheme}`,
                                this.className
                        ])}>
                                <div class="row">
                                        <aside class={vfluents.cls([
                                                'col-10',
                                                'col-md-4',
                                                'col-lg-3',
                                                'col-xl-2',
                                                vfluents.themePrefix + 'dashboard-side'
                                        ])} onClick={this.closeCollapse}>
                                                <Navbar
                                                        size={this.stateSize}
                                                />
                                        </aside>
                                        <main class={vfluents.cls([
                                                'col-12',
                                                'col-md-8',
                                                'col-lg-9',
                                                'col-xl-10',
                                                vfluents.themePrefix + 'dashboard-main'
                                        ])} onClick={this.openCollapse}>
                                                <Navbar
                                                />
                                        </main>
                                </div>
                        </div >
                )
        }

        public closeCollapse() {
                this.stateCollapsed = false
        }

        public openCollapse() {
                this.stateCollapsed = true
        }
}