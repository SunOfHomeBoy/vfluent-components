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
        @Prop() eventBrand: any // 品牌區域單擊事件 可空 默認值：空值

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
                return (
                        <main class={vfluents.cls([
                                'col-12',
                                'col-md-8',
                                'col-lg-9',
                                'col-xl-10',
                                vfluents.themePrefix + 'dashboard-main'
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
                        <Navbar
                                size={this.size || 'default'}
                                fixed="top"
                                brandLogo={this.brandLogo}
                                brandName={this.brandName}
                                brandHref={this.brandHref}
                                eventBrand={vfluents.eventSafe(this.eventBrand)}
                        />
                )
        }

        private componentMainTarbar(h: CreateElement) {
                return (
                        <div></div>
                )
        }
}