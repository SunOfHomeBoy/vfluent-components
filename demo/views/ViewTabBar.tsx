import { Component, CreateElement } from 'vue-component-decorator'
import { vfluents, TabBar } from '../../components'
import { ViewComponent } from '../components'
import { theme } from '../config'

@Component
export class ViewTabBar extends ViewComponent {
        private tbarItems: any[] = [
                {
                        text: '消息',
                        icon: 'Chat',
                        badge: '8'
                },
                {
                        text: '定位',
                        icon: 'Location'
                },
                {
                        icon: 'Plus'
                },
                {
                        text: '發現',
                        icon: 'Search'
                },
                {
                        text: '我',
                        icon: 'User'
                }
        ]

        public created() {
                this.props.name = 'TabBar'
                this.props.description = '標籤欄組件'
        }

        public renderComponent(h: CreateElement) {
                return (
                        <article>
                                <dfn>常用用法</dfn>
                                <samp>
                                        <p>默認樣式</p>
                                        <TabBar items={this.tbarItems} type="Default" />
                                        <p>Primary樣式</p>
                                        <TabBar items={this.tbarItems} type="Primary" />
                                        <p>Secondary樣式</p>
                                        <TabBar items={this.tbarItems} type="Secondary" />
                                        <p>Success樣式</p>
                                        <TabBar items={this.tbarItems} type="Success" />
                                        <p>Danger樣式</p>
                                        <TabBar items={this.tbarItems} type="Danger" />
                                        <p>Warning樣式</p>
                                        <TabBar items={this.tbarItems} type="Warning" />
                                        <p>Info樣式</p>
                                        <TabBar items={this.tbarItems} type="Info" />
                                        <p>Link模式</p>
                                        <TabBar items={this.tbarItems} type="Link" />
                                        <p>小型尺寸</p>
                                        <TabBar items={this.tbarItems} size="Small" />
                                        <p>普通尺寸</p>
                                        <TabBar items={this.tbarItems} size="Default" />
                                        <p>較大尺寸</p>
                                        <TabBar items={this.tbarItems} size="Large" />
                                        <p>巨大尺寸</p>
                                        <TabBar items={this.tbarItems} size="Huge" />
                                </samp>
                                <code></code>
                        </article>
                )
        }
}