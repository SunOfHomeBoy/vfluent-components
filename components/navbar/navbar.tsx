import Vue, { CreateElement } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { vfluents } from '../vfluents'
import './navbar.scss'

@Component
export class Navbar extends vfluents {
        @Prop() size: string // 行高尺寸 可空 默認值：default 可選值：default | small | large | huge
        @Prop() dark: boolean // 深色背景 可空 默認值：FALSE
        @Prop() fixed: string // 固定位置 可空 默認值：default 可選值：default | top | bottom | sticky
        @Prop() brandLogo: string // 品牌LOGO 可空 默認值：空字符串
        @Prop() brandName: string // 品牌名稱 可空 默認值：空字符串
        @Prop() brandHref: string // 品牌鏈接 可空 默認值：空字符串

        public component(h: CreateElement) {
                return (
                        <nav class={vfluents.cls([
                                'navbar',
                                this.clsFixed(this.fixed),
                                this.dark
                                        ? 'navbar-dark bg-dark'
                                        : 'navbar-light bg-light',
                                vfluents.themePrefix + 'navbar',
                                ['small', 'large', 'huge'].indexOf(this.size) !== -1
                                        ? `${vfluents.themePrefix}navbar-${this.size}`
                                        : '',
                                this.className
                        ])}></nav>
                )
        }

        private clsFixed(fixed: string): string {
                switch (fixed) {
                        case 'top':
                                return 'fixed-top'

                        case 'bottom':
                                return 'fixed-bottom'

                        case 'sticky':
                                return 'sticky-top'
                }

                return ''
        }
}