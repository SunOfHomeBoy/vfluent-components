import Vue, { CreateElement } from 'vue'
import { Component, Prop, Provide } from 'vue-property-decorator'
import { vfluents } from '../vfluents'

@Component
export class Navbar extends vfluents {
        @Prop() size: string // 行高尺寸 可空 默認值：default 可選值：default | small | large | huge
        @Prop() dark: boolean // 深色背景 可空 默認值：FALSE
        @Prop() fixed: string // 固定位置 可空 默認值：default 可選值：default | top | bottom | sticky
        @Prop() brandLogo: string // 品牌LOGO 可空 默認值：空字符串
        @Prop() brandName: string // 品牌名稱 可空 默認值：空字符串
        @Prop() brandHref: string // 品牌鏈接 可空 默認值：空字符串

        public component(h: CreateElement) {
                let clsFixed = ''
                switch (this.fixed) {
                        case 'top':
                                clsFixed = 'fixed-top'
                                break

                        case 'bottom':
                                clsFixed = 'fixed-bottom'
                                break

                        case 'sticky':
                                clsFixed = 'sticky-top'
                                break
                }
                let elementBrand = this.brandName || this.brandLogo
                        ? this.componentBrand(h)
                        : ''
                return (
                        <nav class={vfluents.cls([
                                'navbar navbar-expand-md',
                                this.dark
                                        ? 'navbar-dark bg-dark'
                                        : 'navbar-light bg-light',
                                clsFixed,
                                `${vfluents.themePrefix}navbar`,
                                ['small', 'large', 'huge'].indexOf(this.size) !== -1
                                        ? `${vfluents.themePrefix}navbar-${this.size}`
                                        : '',
                                this.className
                        ])}>
                                {elementBrand}
                        </nav>
                )
        }

        private componentBrand(h: CreateElement) {
                return (
                        <a class="navbar-brand" href="#">
                                <span class="navbar-brand-text">{this.brandName}</span>
                        </a>
                )
        }
}