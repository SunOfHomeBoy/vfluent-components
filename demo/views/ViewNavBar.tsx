import { Component, CreateElement } from 'vue-component-decorator'
import { NavBar, Button, Icon } from '../../components'
import { ViewComponent } from '../components'

@Component
export class ViewNavBar extends ViewComponent {
        private navbarItems: any[] = [
                {
                        text: '首頁',
                        href: '/'
                },
                {
                        text: '選項',
                        dropdowns: [
                                {
                                        text: '選項一'
                                },
                                {
                                        text: '選項二之特殊選項'
                                }
                        ]
                },
                {
                        text: '源碼',
                        href: 'https://github.com/hjboss/vfluent-components'
                },
                {
                        text: '討論',
                        href: 'https://github.com/hjboss/vfluent-components/issues'
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
                                <dfn>移動導航</dfn>
                                <samp>
                                        <p>文本標題</p>
                                        <NavBar>頁面標題</NavBar>
                                        <p>文本標題+標準按鈕</p>
                                        <NavBar prepend={[{ text: '微博', icon: 'Weibo' }]} append={[{ text: '微信', icon: 'Weixin', align: 'Right' }]}>頁面標圖</NavBar>
                                        <p>文本標題+圖標按鈕</p>
                                        <NavBar prepend={[{ icon: 'Weibo' }]} append={[{ icon: 'Weixin' }]}>頁面標題</NavBar>
                                        <p>文本標題+文本按鈕</p>
                                        <NavBar prepend={[{ text: '微博' }]} append={[{ text: '微信' }]}>頁面標圖</NavBar>
                                        <p>自定義組件</p>
                                        <NavBar prepend={[{ text: '微博', icon: 'Weibo' }]} append={[{ icon: 'Weixin' }]}><Button type="Success" text="頁面標題" block={true} /></NavBar>
                                </samp>
                        </article>
                )
        }
}
