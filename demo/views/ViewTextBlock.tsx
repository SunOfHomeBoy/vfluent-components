import Vue, { CreateElement } from 'vue'
import { Component, Prop, Provide } from 'vue-property-decorator'
import { vfluents, TextBlock } from '../../components'
import { ViewCommon } from '../components'

@Component
export default class ViewTextBlock extends ViewCommon {
        @Provide() name: string = 'TextBlock'
        @Provide() description: string = '頁眉、頁腳、標題和段落等常用文本組件'

        public componentView(h: CreateElement) {
                return (
                        <article>
                                <h4>基本用法</h4>
                                <section>
                                        <table class="table">
                                                <thead>
                                                        <tr>
                                                                <th width="60%">Type</th>
                                                                <th width="20%">Size</th>
                                                                <th width="20%">LineHeight</th>
                                                        </tr>
                                                </thead>
                                                <tbody>
                                                        <tr>
                                                                <td>
                                                                        <TextBlock type="Header">Header</TextBlock>
                                                                </td>
                                                                <td>46px</td>
                                                                <td>56px</td>
                                                        </tr>
                                                        <tr>
                                                                <td>
                                                                        <TextBlock type="SubHeader">SubHeader</TextBlock>
                                                                </td>
                                                                <td>34px</td>
                                                                <td>40px</td>
                                                        </tr>
                                                        <tr>
                                                                <td>
                                                                        <TextBlock type="Title">Title</TextBlock>
                                                                </td>
                                                                <td>24px</td>
                                                                <td>28px</td>
                                                        </tr>
                                                        <tr>
                                                                <td>
                                                                        <TextBlock type="SubTitle">SubTitle</TextBlock>
                                                                </td>
                                                                <td>20px</td>
                                                                <td>24px</td>
                                                        </tr>
                                                        <tr>
                                                                <td>
                                                                        <TextBlock type="Base">Base</TextBlock>
                                                                </td>
                                                                <td>15px</td>
                                                                <td>20px</td>
                                                        </tr>
                                                        <tr>
                                                                <td>
                                                                        <TextBlock type="Caption">Caption</TextBlock>
                                                                </td>
                                                                <td>12px</td>
                                                                <td>14px</td>
                                                        </tr>
                                                        <tr>
                                                                <td>
                                                                        <TextBlock>Paragraph</TextBlock>
                                                                </td>
                                                                <td>15px</td>
                                                                <td>20px</td>
                                                        </tr>
                                                        <tr>
                                                                <td>
                                                                        <TextBlock type="Default" indent={4}>TextIndent4</TextBlock>
                                                                </td>
                                                                <td>15px</td>
                                                                <td>20px</td>
                                                        </tr>
                                                        <tr>
                                                                <td>
                                                                        <TextBlock type="Default" align="Left">TextLeft</TextBlock>
                                                                </td>
                                                                <td>15px</td>
                                                                <td>20px</td>
                                                        </tr>
                                                        <tr>
                                                                <td>
                                                                        <TextBlock type="Default" align="Middle">TextMiddle</TextBlock>
                                                                </td>
                                                                <td>15px</td>
                                                                <td>20px</td>
                                                        </tr>
                                                        <tr>
                                                                <td>
                                                                        <TextBlock type="Default" align="Right">TextRight</TextBlock>
                                                                </td>
                                                                <td>15px</td>
                                                                <td>20px</td>
                                                        </tr>
                                                        <tr>
                                                                <td>
                                                                        <TextBlock type="Footer" links={[
                                                                                (<a>底部链接</a>),
                                                                                (<a>底部链接</a>)
                                                                        ]}>Copyright © 2018 hjboss.github.io</TextBlock>
                                                                </td>
                                                                <td>12px</td>
                                                                <td>20px</td>
                                                        </tr>
                                                </tbody>
                                        </table>
                                </section>
                                <code class="language-html">
                                        <TextBlock>
                                                <span class="t">&lt;TextBlock</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Header&quot;</span>
                                                <span class="t">&gt;</span>
                                                <span class="i">Header</span>
                                                <span class="t">&lt;TextBlock&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;TextBlock</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;SubHeader&quot;</span>
                                                <span class="t">&gt;</span>
                                                <span class="i">SubHeader</span>
                                                <span class="t">&lt;TextBlock&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;TextBlock</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Title&quot;</span>
                                                <span class="t">&gt;</span>
                                                <span class="i">Title</span>
                                                <span class="t">&lt;TextBlock&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;TextBlock</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;SubTitle&quot;</span>
                                                <span class="t">&gt;</span>
                                                <span class="i">SubTitle</span>
                                                <span class="t">&lt;TextBlock&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;TextBlock</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Base&quot;</span>
                                                <span class="t">&gt;</span>
                                                <span class="i">Base</span>
                                                <span class="t">&lt;TextBlock&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;TextBlock</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Caption&quot;</span>
                                                <span class="t">&gt;</span>
                                                <span class="i">Caption</span>
                                                <span class="t">&lt;TextBlock&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;TextBlock&gt;</span>
                                                <span class="i">Paragraph</span>
                                                <span class="t">&lt;TextBlock&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;TextBlock</span>
                                                <span class="a">indent=</span>
                                                <span class="v">&#123;4&#125;</span>
                                                <span class="t">&gt;</span>
                                                <span class="i">TextIndent4</span>
                                                <span class="t">&lt;TextBlock&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;TextBlock</span>
                                                <span class="a">align=</span>
                                                <span class="v">&quot;Left&quot;</span>
                                                <span class="t">&gt;</span>
                                                <span class="i">TextLeft</span>
                                                <span class="t">&lt;TextBlock&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;TextBlock</span>
                                                <span class="a">align=</span>
                                                <span class="v">&quot;Middle&quot;</span>
                                                <span class="t">&gt;</span>
                                                <span class="i">TextMiddle</span>
                                                <span class="t">&lt;TextBlock&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;TextBlock</span>
                                                <span class="a">align=</span>
                                                <span class="v">&quot;Right&quot;</span>
                                                <span class="t">&gt;</span>
                                                <span class="i">TextRight</span>
                                                <span class="t">&lt;TextBlock&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;TextBlock</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Footer&quot;</span>
                                                <span class="a">links=</span>
                                                <span class="v">&#123;eLinks&#125;</span>
                                                <span class="t">&gt;</span>
                                                <span class="i">Copyright © 2018 hjboss.github.io</span>
                                                <span class="t">&lt;TextBlock&gt;</span>
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
                                                                <td>type</td>
                                                                <td>String</td>
                                                                <td>文本類型</td>
                                                                <td>Default | Header | SubHeader | Title | SubTitle | Base | Caption | Footer</td>
                                                                <td>Default</td>
                                                        </tr>
                                                        <tr>
                                                                <td>align</td>
                                                                <td>String</td>
                                                                <td>對齊方向</td>
                                                                <td>Left | Middle | Right</td>
                                                                <td>Left</td>
                                                        </tr>
                                                        <tr>
                                                                <td>indent</td>
                                                                <td>Number</td>
                                                                <td>文首縮進</td>
                                                                <td>0 | 1 | 2 | 3 | 4 | 5 | 7 | 8</td>
                                                                <td>0</td>
                                                        </tr>
                                                        <tr>
                                                                <td>links</td>
                                                                <td>Array</td>
                                                                <td>底部鏈接 注意：僅隊type=Footer有效</td>
                                                                <td>-</td>
                                                                <td>[]</td>
                                                        </tr>
                                                </tbody>
                                        </table>
                                </section>
                        </article >
                )
        }
}