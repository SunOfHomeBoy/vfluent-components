import { Component, CreateElement } from 'vue-component-decorator'
import { NavBar } from '../../components'
import { ViewComponent } from '../components'

@Component
export class ViewNavBar extends ViewComponent {
        private navbarItems: any[] = [
                {
                        text: '首頁',
                        href: '/'
                },
                {
                        text: '源碼',
                        href: 'https://github.com/hjboss/vfluent-components'
                },
                {
                        text: '討論',
                        href: 'https://github.com/hjboss/vfluent-components/issues'
                },
                {
                        text: 'BUG'
                }
        ]

        public created() {
                this.props.name = 'NavBar'
                this.props.description = '導航欄組件'
        }

        public renderComponent(h: CreateElement): any {
                return (
                        <article>
                                <dfn>品牌LOGO</dfn>
                                <samp>
                                        <p>品牌名稱</p>
                                        <NavBar brandName="vFluent-Components" />
                                        <p>品牌名稱+LOGO圖標</p>
                                        <NavBar brandName="vFluent-Components" brandLogo="Github" />
                                        <p>品牌名稱+LOGO圖標+鏈接地址</p>
                                        <NavBar brandName="vFluent-Components" brandLogo="Github" brandHref="https://github.com/hjboss/vfluent-components" />
                                        <p>品牌名稱+LOGO圖標+點擊事件</p>
                                        <NavBar brandName="vFluent-Components" brandLogo="Github" eventBrand={() => alert('Are you OK~')} />
                                        <p>品牌名稱+LOGO圖標+自定義樣式</p>
                                        <NavBar brandName="vFluent-Components" brandLogo="Github" brandCls="pure-u-1-2" />
                                </samp>
                                <code></code>
                                <dfn>標準導航</dfn>
                                <samp>
                                        <p>標準導航+默認對齊</p>
                                        <NavBar brandName="vFluent-Components" brandLogo="Github" items={this.navbarItems} align="Left" />
                                        <p>標準導航+對齊居中</p>
                                        <NavBar brandName="vFluent-Components" brandLogo="Github" items={this.navbarItems} align="Center" />
                                        <p>標準導航+對齊向右</p>
                                        <NavBar brandName="vFluent-Components" brandLogo="Github" items={this.navbarItems} align="Right" />
                                </samp>
                                <code></code>
                                <dfn>導航尺寸</dfn>
                                <samp>
                                        <p>小型尺寸</p>
                                        <NavBar brandName="vFluent-Components" brandLogo="Github" items={this.navbarItems} size="Small" />
                                        <p>默認尺寸</p>
                                        <NavBar brandName="vFluent-Components" brandLogo="Github" items={this.navbarItems} size="Default" />
                                        <p>較大尺寸</p>
                                        <NavBar brandName="vFluent-Components" brandLogo="Github" items={this.navbarItems} size="Large" />
                                        <p>巨大尺寸</p>
                                        <NavBar brandName="vFluent-Components" brandLogo="Github" items={this.navbarItems} size="Huge" />
                                </samp>
                                <code></code>
                        </article>
                )
        }
}
