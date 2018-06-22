import { Component, CreateElement, Props } from 'vue-component-decorator'
import { vfluents } from './vfluents'
import { Button, ButtonGroup } from './Button'
import './styles/TabBar.scss'

@Component
export class TabBar extends vfluents {
        @Props() public readonly props: {
                id?: string // 組件ID 可空 默認值：空字符串
                className?: string // 附加樣式 可空 默認值：空字符串
                size?: string // 按鈕尺寸 可空 默認值：Default 可選值：Default | Small | Large | Huge
                type?: string // 按鈕類型 可空 默認值：Default 可選值：Default | Primary | Secondary | Success | Danger | Warning | Info | Link
                fixed?: string // 固定位置 可空 默認值：Default 可選值：Default | Top | Bottom | Sticky
                items?: {
                        text?: string // 標籤項之文本 可空 默認值：空字符串
                        icon?: string // 標籤項之圖標 可空 默認值：空字符串
                        href?: string // 標籤項之鏈接 可空 默認值：空字符串
                        badge?: string // 標籤項之徽章 可空 默認值：空字符串
                        click?: any // 標籤項之單擊事件 可空 默認值：空值
                }[]
        } = {
                        id: null,
                        className: null,
                        size: 'Default',
                        type: 'Default',
                        fixed: 'Default',
                        items: null
                }

        public render(h: CreateElement): any {
                let btnElements: any[] = []
                if (this.$props.items instanceof Array) {
                        for (let i = 0; i < this.$props.items.length; i++) {
                                let { text, icon, href, badge, click } = this.$props.items[i]
                                let size = 'Small'

                                switch (this.$props.size) {
                                        case 'Huge':
                                                size = 'Large'
                                                break

                                        case 'Large':
                                                size = 'Default'
                                                break
                                }

                                btnElements.push(
                                        <Button
                                                size={size}
                                                text={text}
                                                badge={badge}
                                                type={this.$props.type || 'Default'}
                                                align={this.$props.size === 'Small' ? null : 'Top'}
                                                icon={this.$props.size === 'Small' && text ? null : icon}
                                                eventClick={() => this.Click(href, click)}
                                        />
                                )
                        }

                }

                return (
                        <ButtonGroup id={this.$props.id} className={vfluents.cls([
                                vfluents.themePrefix + 'tabbar',
                                ['Small', 'Large', 'Huge'].indexOf(this.$props.size) !== -1
                                        ? vfluents.themePrefix + 'tabbar-' + String(this.$props.type).toLowerCase()
                                        : null,
                                ['Top', 'Bottom', 'Sticky'].indexOf(this.$props.fixed) !== -1
                                        ? vfluents.themePrefix + 'fixed-' + String(this.$props.fixed).toLowerCase()
                                        : null,
                                this.$props.className
                        ])}>{btnElements}</ButtonGroup>
                )
        }

        public Click(href: string, click: any) {
                if (typeof (click) === 'function') {
                        return click()
                }

                if (href) {
                        return this.redirect(href)
                }
        }
}