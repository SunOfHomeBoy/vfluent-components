import Vue, { CreateElement } from 'vue'
import { Component, Prop, Provide } from 'vue-property-decorator'
import { vfluents, TextBlock } from '../../components'
import { ViewCommon } from '../components'
import { theme } from '../config'

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
                                                                        <TextBlock type="Default" align="Left">TextLeft</TextBlock>
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
                                                                        <TextBlock type="Default" align="Middle">TextMiddle</TextBlock>
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
                                                <span class="nt">&lt;TextBlock</span>
                                                <span class="na">type=</span>
                                                <span class="s">&quot;Header&quot;</span>
                                                <span class="nt">&gt;</span>
                                                <span class="i">Header</span>
                                                <span class="nt">&lt;TextBlock&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="nt">&lt;TextBlock</span>
                                                <span class="na">type=</span>
                                                <span class="s">&quot;SubHeader&quot;</span>
                                                <span class="nt">&gt;</span>
                                                <span class="i">SubHeader</span>
                                                <span class="nt">&lt;TextBlock&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="nt">&lt;TextBlock</span>
                                                <span class="na">type=</span>
                                                <span class="s">&quot;Title&quot;</span>
                                                <span class="nt">&gt;</span>
                                                <span class="i">Title</span>
                                                <span class="nt">&lt;TextBlock&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="nt">&lt;TextBlock</span>
                                                <span class="na">type=</span>
                                                <span class="s">&quot;SubTitle&quot;</span>
                                                <span class="nt">&gt;</span>
                                                <span class="i">SubTitle</span>
                                                <span class="nt">&lt;TextBlock&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="nt">&lt;TextBlock</span>
                                                <span class="na">type=</span>
                                                <span class="s">&quot;Base&quot;</span>
                                                <span class="nt">&gt;</span>
                                                <span class="i">Base</span>
                                                <span class="nt">&lt;TextBlock&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="nt">&lt;TextBlock</span>
                                                <span class="na">type=</span>
                                                <span class="s">&quot;Caption&quot;</span>
                                                <span class="nt">&gt;</span>
                                                <span class="i">Caption</span>
                                                <span class="nt">&lt;TextBlock&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="nt">&lt;TextBlock&gt;</span>
                                                <span class="i">Paragraph</span>
                                                <span class="nt">&lt;TextBlock&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="nt">&lt;TextBlock</span>
                                                <span class="na">align=</span>
                                                <span class="s">&quot;Left&quot;</span>
                                                <span class="nt">&gt;</span>
                                                <span class="i">TextLeft</span>
                                                <span class="nt">&lt;TextBlock&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="nt">&lt;TextBlock</span>
                                                <span class="na">align=</span>
                                                <span class="s">&quot;Middle&quot;</span>
                                                <span class="nt">&gt;</span>
                                                <span class="i">TextMiddle</span>
                                                <span class="nt">&lt;TextBlock&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="nt">&lt;TextBlock</span>
                                                <span class="na">align=</span>
                                                <span class="s">&quot;Right&quot;</span>
                                                <span class="nt">&gt;</span>
                                                <span class="i">TextRight</span>
                                                <span class="nt">&lt;TextBlock&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="nt">&lt;TextBlock</span>
                                                <span class="na">type=</span>
                                                <span class="s">&quot;Footer&quot;</span>
                                                <span class="na">links=</span>
                                                <span class="s">&#123;eLinks&#125;</span>
                                                <span class="nt">&gt;</span>
                                                <span class="i">Copyright © 2018 hjboss.github.io</span>
                                                <span class="nt">&lt;TextBlock&gt;</span>
                                        </TextBlock>
                                </code>
                                <h4>組件參數</h4>
                                <section class="attrs">
                                        <table class="attrs">
                                                <thead>
                                                        <tr>
                                                                <th width="20%">參數</th>
                                                                <th width="10%">類型</th>
                                                                <th width="35%">說明</th>
                                                                <th width="25%">可選值</th>
                                                                <th width="10%">默認值</th>
                                                        </tr>
                                                </thead>
                                                <tbody></tbody>
                                        </table>
                                </section>
                        </article >
                )
        }
}