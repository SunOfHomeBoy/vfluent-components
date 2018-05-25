import Vue, { CreateElement } from 'vue'
import { Component, Prop, Provide } from 'vue-property-decorator'
import { vfluents, Icon, TextBlock } from '../../components'
import { ViewCommon } from '../components'
import { theme } from '../config'

@Component
export default class ViewIcon extends ViewCommon {
        @Provide() name: string = 'Icon'
        @Provide() description: string = '圖標組件'

        public componentView(h: CreateElement) {
                let elementIcons = []
                for (let name in theme.icons) {
                        elementIcons.push(
                                <div class={`col-4 col-md-1 ${theme.themePrefix}unit`}>
                                        <Icon name={name} size="Huge" />
                                        <h5>{String(name).replace(/^icon/i, '')}</h5>
                                </div>
                        )
                }
                return (
                        <article>
                                <h4>基本用法</h4>
                                <section>
                                        <span class="d-inline-block text-center">
                                                <Icon name="Summary" size="Mini" />
                                                <h5>16px</h5>
                                        </span>
                                        <span class="d-inline-block text-center">
                                                <Icon name="Summary" size="Small" />
                                                <h5>24px</h5>
                                        </span>
                                        <span class="d-inline-block text-center">
                                                <Icon name="Summary" size="Default" />
                                                <h5>32px</h5>
                                        </span>
                                        <span class="d-inline-block text-center">
                                                <Icon name="Summary" size="Large" />
                                                <h5>48px</h5>
                                        </span>
                                        <span class="d-inline-block text-center">
                                                <Icon name="Summary" size="Huge" />
                                                <h5>80px</h5>
                                        </span>
                                        <span class="d-inline-block text-center">
                                                <Icon name="Summary" size="Huge" style={{ fill: '#0078d7', color: '#0078d7' }} />
                                                <h5>80px</h5>
                                        </span>
                                        <span class="d-inline-block text-center">
                                                <Icon name="Summary" size="Huge" eventClick={() => alert('IconClick')} />
                                                <h5>80px</h5>
                                        </span>
                                </section>
                                <code class="language-html">
                                        <TextBlock>
                                                <span class="t">&lt;Icon</span>
                                                <span class="a">name=</span>
                                                <span class="v">&quot;Summary&quot;</span>
                                                <span class="a">size=</span>
                                                <span class="v">&quot;Mini&quot;</span>
                                                <span class="t">&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Icon</span>
                                                <span class="a">name=</span>
                                                <span class="v">&quot;Summary&quot;</span>
                                                <span class="a">size=</span>
                                                <span class="v">&quot;Small&quot;</span>
                                                <span class="t">&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Icon</span>
                                                <span class="a">name=</span>
                                                <span class="v">&quot;Summary&quot;</span>
                                                <span class="a">size=</span>
                                                <span class="v">&quot;Default&quot;</span>
                                                <span class="t">&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Icon</span>
                                                <span class="a">name=</span>
                                                <span class="v">&quot;Summary&quot;</span>
                                                <span class="a">size=</span>
                                                <span class="v">&quot;Large&quot;</span>
                                                <span class="t">&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Icon</span>
                                                <span class="a">name=</span>
                                                <span class="v">&quot;Summary&quot;</span>
                                                <span class="a">size=</span>
                                                <span class="v">&quot;Huge&quot;</span>
                                                <span class="t">&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Icon</span>
                                                <span class="a">name=</span>
                                                <span class="v">&quot;Summary&quot;</span>
                                                <span class="a">size=</span>
                                                <span class="v">&quot;Huge&quot;</span>
                                                <span class="a">style=</span>
                                                <span class="v">&#123;&#123;&nbsp;fill: '#0078d7', color: '#0078d7'&nbsp;&#125;&#125;</span>
                                                <span class="t">&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Icon</span>
                                                <span class="a">name=</span>
                                                <span class="v">&quot;Summary&quot;</span>
                                                <span class="a">size=</span>
                                                <span class="v">&quot;Huge&quot;</span>
                                                <span class="a">eventClick=</span>
                                                <span class="v">&#123;&nbsp;() => alert('IconClick')&nbsp;&#125;</span>
                                                <span class="t">&#47;&gt;</span>
                                        </TextBlock>
                                </code>
                                <h4>組件參數</h4>
                                <section class="attrs">
                                        <table class="attrs">
                                                <thead>
                                                        <tr>
                                                                <th width="15%">參數</th>
                                                                <th width="15%">類型</th>
                                                                <th width="25%">說明</th>
                                                                <th width="30%">可選值</th>
                                                                <th width="15%">默認值</th>
                                                        </tr>
                                                </thead>
                                                <tbody>
                                                        <tr>
                                                                <td>name</td>
                                                                <td>String</td>
                                                                <td>圖標名稱</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                        </tr>
                                                        <tr>
                                                                <td>size</td>
                                                                <td>String</td>
                                                                <td>圖標尺寸</td>
                                                                <td>Default | Mini | Small | Large | Huge</td>
                                                                <td>Default</td>
                                                        </tr>
                                                        <tr>
                                                                <td>eventClick</td>
                                                                <td>Function</td>
                                                                <td>點擊事件</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                        </tr>
                                                </tbody>
                                        </table>
                                </section>
                                <h4>常用圖標</h4>
                                <code class="language-typescript">
                                        <TextBlock className="c">&#47;&#47; Icon組件支持SVGSprite和IconFont兩種模式，且默認啓用SVGSprite模式</TextBlock>
                                        <TextBlock className="c">&#47;&#47; 若啓用IconFont模式則必須設置<em><span class="n">vfluents</span><span class="s">.</span><span class="n">useSVGElement</span><span class="e"> = </span><span class="w">false</span></em></TextBlock>
                                        <TextBlock className="c">&#47;&#47; Icon組件的IconFont模式則要求圖標CSS類命名需要符合Bootstrap規範即</TextBlock>
                                        <TextBlock className="c">&#47;&#47; <span class="t">&lt;span</span><span class="a">class=</span><span class="v">&quot;glyphicon glyphicon-name ...&quot;</span><span class="a">aria-hidden=</span><span class="v">&quot;true&quot;</span><span class="t">&#47;&gt;</span></TextBlock>
                                        <TextBlock className="c">&#47;&#47; Icon組件的SVGSprite模式則要求將相關SVG圖標進行按需預加載，如下：</TextBlock>
                                        <TextBlock><span class="e">import&nbsp;</span><span class="s">&#123;</span><span class="n">&nbsp;iconAside,&nbsp;iconBook,&nbsp;iconChat&nbsp;</span><span class="s">&#125;</span><span class="e">&nbsp;from&nbsp;</span><span class="s">&#39;</span><span class="n"></span>vfluent-components/icons<span class="s">&#39;</span><span class="c">&nbsp;&#47;&#47; 允許自定義SVGSprite替換內置圖標&nbsp;</span></TextBlock>
                                        <TextBlock><span class="e">import&nbsp;</span><span class="s">&#123;</span><span class="n">&nbsp;vfluents&nbsp;</span><span class="s">&#125;</span><span class="e">&nbsp;from&nbsp;</span><span class="s">&#39;</span><span class="n"></span>vfluent-components<span class="s">&#39;</span></TextBlock>
                                        <TextBlock>&nbsp;</TextBlock>
                                        <TextBlock><span class="n">vfluents</span><span class="s">.</span><span class="c">init</span><span class="s">&#40;&#123;&nbsp;</span><span class="n">icons</span><span class="s">:&nbsp;&#123;&nbsp;</span><span class="n">iconAside</span><span class="s">,&nbsp;</span><span class="n">iconBook</span><span class="s">,&nbsp;</span><span class="n">iconChat</span><span class="s">&nbsp;&#125;&#125;&#41;</span></TextBlock>
                                </code>
                                <div class="container-fluid justify-content-start">
                                        <div class="row">{elementIcons}</div>
                                </div>
                        </article>
                )
        }
}