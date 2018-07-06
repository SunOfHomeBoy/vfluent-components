import { Component, CreateElement } from 'vue-component-decorator'
import { ViewComponent } from '../components'

@Component
export class ViewTypography extends ViewComponent {
        public created() {
                this.props.name = 'Typography'
                this.props.description = '標題、段落和頁腳等常用文本元素'
        }

        public renderComponent(h: CreateElement): any {
                return (
                        <article>
                                <dfn>標題</dfn>
                                <samp>
                                        <table>
                                                <tr>
                                                        <th width="60%">Type</th>
                                                        <th width="20%">Size</th>
                                                        <th width="20%">Line</th>
                                                </tr>
                                                <tr>
                                                        <td><h1>H1 Header</h1></td>
                                                        <td><span>46px</span></td>
                                                        <td><span>56px</span></td>
                                                </tr>
                                                <tr>
                                                        <td><h2>H2 SubHeader</h2></td>
                                                        <td><span>34px</span></td>
                                                        <td><span>40px</span></td>
                                                </tr>
                                                <tr>
                                                        <td><h3>H3 Title</h3></td>
                                                        <td><span>24px</span></td>
                                                        <td><span>28px</span></td>
                                                </tr>
                                                <tr>
                                                        <td><h4>H4 SubTitle</h4></td>
                                                        <td><span>20px</span></td>
                                                        <td><span>24px</span></td>
                                                </tr>
                                                <tr>
                                                        <td><h5>H5 Base</h5></td>
                                                        <td><span>15px</span></td>
                                                        <td><span>20px</span></td>
                                                </tr>
                                                <tr>
                                                        <td><h6>H6 Caption</h6></td>
                                                        <td><span>12px</span></td>
                                                        <td><span>14px</span></td>
                                                </tr>
                                        </table>
                                </samp>
                                <code>
                                        <p>
                                                <span class="tags">&lt;h1&gt;</span>
                                                <span class="text">H1 Header</span>
                                                <span class="tags">&lt;h1&gt;</span>
                                        </p>
                                        <p>
                                                <span class="tags">&lt;h2&gt;</span>
                                                <span class="text">H2 SubHeader</span>
                                                <span class="tags">&lt;h2&gt;</span>
                                        </p>
                                        <p>
                                                <span class="tags">&lt;h3&gt;</span>
                                                <span class="text">H3 Title</span>
                                                <span class="tags">&lt;h3&gt;</span>
                                        </p>
                                        <p>
                                                <span class="tags">&lt;h4&gt;</span>
                                                <span class="text">H4 SubTitle</span>
                                                <span class="tags">&lt;h4&gt;</span>
                                        </p>
                                        <p>
                                                <span class="tags">&lt;h5&gt;</span>
                                                <span class="text">H5 Base</span>
                                                <span class="tags">&lt;/h5&gt;</span>
                                        </p>
                                        <p>
                                                <span class="tags">&lt;h6&gt;</span>
                                                <span class="text">H6 Caption</span>
                                                <span class="tags">&lt;/h6&gt;</span>
                                        </p>
                                </code>
                                <dfn>段落</dfn>
                                <samp>
                                        <p><strong>vFluentComponents</strong>是充分使用現代瀏覽器的<abbr>HTML5</abbr>和<ins>CSS3</ins>特徵實現的</p>
                                        <p>因此必須聲明<mark>&lt;!DOCTYPE html&gt;</mark></p>
                                        <p>同時亦意味着不再支持<del>低版本IE瀏覽器</del>，比如：<small><em>IE6-9</em></small></p>
                                </samp>
                                <code>
                                        <p>
                                                <span class="tags">&lt;p&gt;</span>
                                                <span class="tags">&lt;strong&gt;</span>
                                                <span class="text">vFluentComponents</span>
                                                <span class="tags">&lt;/strong&gt;</span>
                                                <span class="text">是充分使用現代瀏覽器的</span>
                                                <span class="tags">&lt;abbr&gt;</span>
                                                <span class="text">HTML5</span>
                                                <span class="tags">&lt;/abbr&gt;</span>
                                                <span class="text">和</span>
                                                <span class="tags">&lt;ins&gt;</span>
                                                <span class="text">CSS3</span>
                                                <span class="tags">&lt;/ins&gt;</span>
                                                <span class="text">是充分使用現代瀏覽器的</span>
                                                <span class="tags">&lt;/p&gt;</span>
                                        </p>
                                        <p>
                                                <span class="tags">&lt;p&gt;</span>
                                                <span class="text">因此必須聲明</span>
                                                <span class="tags">&lt;mark&gt;</span>
                                                <span class="text">&amp;lt;!DOCTYPE html&amp;gt;</span>
                                                <span class="tags">&lt;/mark&gt;</span>
                                                <span class="tags">&lt;/p&gt;</span>
                                        </p>
                                        <p>
                                                <span class="tags">&lt;p&gt;</span>
                                                <span class="text">同時亦意味着不再支持</span>
                                                <span class="tags">&lt;del&gt;</span>
                                                <span class="text">同時亦意味着不再支持</span>
                                                <span class="tags">&lt;/del&gt;</span>
                                                <span class="text">，比如：</span>
                                                <span class="tags">&lt;small&gt;&lt;em&gt;</span>
                                                <span class="text">IE6-9</span>
                                                <span class="tags">&lt;/em&gt;&lt;/small&gt;</span>
                                                <span class="tags">&lt;/p&gt;</span>
                                        </p>
                                </code>
                                <dfn>引用</dfn>
                                <samp>
                                        <blockquote>
                                                <p>人只有獻身於社會才能找出那短暫而有風險的生命的意義~</p>
                                                <footer>Albert Einstein</footer>
                                        </blockquote>
                                </samp>
                                <code>
                                        <p>
                                                <span class="tags">&lt;blockquote&gt;</span>
                                        </p>
                                        <p>
                                                <span class="tags">&lt;p&gt;</span>
                                                <span class="text">人只有獻身於社會才能找出那短暫而有風險的生命的意義~</span>
                                                <span class="tags">&lt;/p&gt;</span>
                                        </p>
                                        <p>
                                                <span class="tags">&lt;footer&gt;</span>
                                                <span class="text">Albert Einstein</span>
                                                <span class="tags">&lt;/footer&gt;</span>
                                        </p>
                                        <p>
                                                <span class="tags">&lt;footer&gt;</span>
                                        </p>
                                </code>
                                <dfn>底部</dfn>
                                <samp>
                                        <footer>
                                                <a>底部链接</a>
                                                <a>底部链接</a>
                                                <a>底部链接</a>
                                                <br />
                                                Copyright © 2018 hjboss.github.io
                                        </footer>
                                </samp>
                                <code>
                                        <p>
                                                <span class="tags">&lt;footer&gt;</span>
                                        </p>
                                        <p>
                                                <span class="tags">&lt;a&gt;</span>
                                                <span class="text">底部链接</span>
                                                <span class="tags">&lt;/a&gt;</span>
                                        </p>
                                        <p>
                                                <span class="tags">&lt;a&gt;</span>
                                                <span class="text">底部链接</span>
                                                <span class="tags">&lt;/a&gt;</span>
                                        </p>
                                        <p>
                                                <span class="tags">&lt;a&gt;</span>
                                                <span class="text">底部链接</span>
                                                <span class="tags">&lt;/a&gt;</span>
                                        </p>
                                        <p>
                                                <span class="tags">&lt;br /&gt;</span>
                                        </p>
                                        <p>
                                                <span class="text">Copyright © 2018 hjboss.github.io</span>
                                        </p>
                                        <p>
                                                <span class="tags">&lt;/footer&gt;</span>
                                        </p>
                                </code>
                        </article>
                )
        }
}