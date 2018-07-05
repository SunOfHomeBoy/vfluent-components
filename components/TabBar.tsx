import { Component, CreateElement, Props } from 'vue-component-decorator'
import { vfluents } from './vfluents'
import { Button, ButtonGroup } from './Button'
import utils from './utils'
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
        public readonly itemSizes: any = { 'Huge': 'Large', 'Large': 'Default' }

        public render(h: CreateElement): any {
                return (
                        <ButtonGroup id={this.$props.id} className={vfluents.cls([
                                vfluents.themePrefix + 'tabbar',
                                ['Small', 'Large', 'Huge'].indexOf(this.$props.size) !== -1
                                        ? vfluents.themePrefix + 'tabbar-' + utils.str(this.$props.size).toLowerCase()
                                        : '',
                                ['Top', 'Bottom', 'Sticky'].indexOf(this.$props.fixed) !== -1
                                        ? vfluents.themePrefix + 'fixed-' + utils.str(this.$props.fixed).toUpperCase()
                                        : '',
                                this.$props.className
                        ])}>{utils.forEach(this.$props.items, (element: any) => {
                                return (
                                        <Button
                                                text={element.text}
                                                badge={element.badge}
                                                type={this.$props.type || 'Default'}
                                                size={this.itemSizes[this.$props.size] || 'Small'}
                                                icon={this.$props.size === 'Small' && utils.nonempty(element.text) ? null : element.icon}
                                                align={this.$props.size === 'Small' ? null : 'Top'}
                                                eventClick={() => this.eventPreClick(element.href, element.click)}
                                        />
                                )
                        })}</ButtonGroup>
                )
        }

        public eventPreClick(href: string, click: any) {
                if (utils.isFunc(click)) {
                        click()
                } else if (utils.nonempty(href)) {
                        this.redirect(href)
                }
        }
}