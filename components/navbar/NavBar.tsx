import Vue, { CreateElement } from 'vue'
import { Component, Prop, Provide } from 'vue-property-decorator'
import { vfluents } from '../vfluents'
import { Icon } from '../icon'

@Component
export class NavBar extends vfluents {
        @Prop() size: string // 行高尺寸 可空 默認值：default 可選值：default | small | large | huge
        @Prop() dark: boolean // 深色背景 可空 默認值：FALSE
        @Prop() fixed: string // 固定位置 可空 默認值：default 可選值：default | top | bottom | sticky
        @Prop() brandCls: string // 品牌樣式 可空 默認值：空字符串
        @Prop() brandLogo: string // 品牌LOGO 可空 默認值：空字符串
        @Prop() brandName: string // 品牌名稱 可空 默認值：空字符串
        @Prop() brandHref: string // 品牌鏈接 可空 默認值：空字符串
        @Prop() itemsLeft: any[] // 左側導航項 可空 默認值：空數組
        @Prop() itemsMiddle: any[] // 中間導航項 可空 默認值：空數組
        @Prop() itemsRight: any[] // 右側導航項 可空 默認值：空數組
        @Prop() eventBrand: any // 品牌區域單擊事件 可空 默認值：空值

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
                                <div class="navbar-left">{this.itemsLeft}</div>
                                <div class="navbar-middle">{this.itemsMiddle}</div>
                                <div class="navbar-right">{this.itemsRight}</div>
                        </nav>
                )
        }

        private componentBrand(h: CreateElement) {
                let elementImage: any
                if (/\.(png|gif|jpg|jpeg|webp|svg)$/i.test(String(this.brandLogo).toLowerCase()) === false) {
                        elementImage = (
                                <Icon name={this.brandLogo} className="align-top navbar-brand-logo" />
                        )
                } else {
                        elementImage = (
                                <span class="d-inline-block align-top navbar-brand-logo"
                                        style={{ backgroundImage: `url(${this.brandLogo})` }}
                                ></span>
                        )
                }

                return (
                        <a class={vfluents.cls([this.brandCls, 'navbar-brand'])} href={this.brandHref || null}
                                onClick={vfluents.eventSafe(this.eventBrand)}>
                                {elementImage}<span class="navbar-brand-text">{this.brandName}</span>
                        </a>
                )
        }
}