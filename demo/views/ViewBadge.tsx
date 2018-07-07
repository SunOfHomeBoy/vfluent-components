import { Component, CreateElement } from 'vue-component-decorator'
import { Badge, vfluents } from '../../components'
import { ViewComponent } from '../components'
import { theme } from '../config';

@Component
export class ViewBadge extends ViewComponent {
        public created() {
                this.props.name = 'Badge'
                this.props.description = '徽章展示新的或者未讀的信息條目'
        }

        public renderComponent(h: CreateElement): any {
                return (
                        <article>
                                <dfn>基本用法<small>展示新消息數量</small></dfn>
                                <samp>
                                        <span>評論</span><Badge text={12} />
                                        &nbsp;&nbsp;
                                        <span>回覆</span><Badge text={3} />
                                </samp>
                                <code></code>
                                <dfn>最大數值<small>超過最大數值則顯示&nbsp;<strong>&#123;max&#125;+</strong>&nbsp;格式</small></dfn>
                                <samp>
                                        <span>評論</span><Badge text={123} />
                                        &nbsp;&nbsp;
                                        <span>回覆</span><Badge text={12} max={10} />
                                </samp>
                                <code></code>
                                <dfn>自定義型<small>顯示任何文本內容</small></dfn>
                                <samp>
                                        <span>評論</span><Badge text="New" />
                                        &nbsp;&nbsp;
                                        <span>回覆</span><Badge text="Hot" />
                                </samp>
                                <code>小圓點型</code>
                        </article>
                )
        }

        public renderComponent0(h: CreateElement): any {
                return (
                        <article>
                                <dfn>常用用法</dfn>
                                <samp>
                                        <p>徽章+數字型+Top<Badge align="Top" text="8" /></p>
                                        <p>徽章+字符型+Top<Badge align="Top" text="New" /></p>
                                        <p>徽章+圓點型+Top<Badge align="Top" text=" " /></p>
                                        <br />
                                        <p>徽章+數字型+Middle<Badge align="Middle" text="8" /></p>
                                        <p>徽章+字符型+Middle<Badge align="Middle" text="New" /></p>
                                        <p>徽章+圓點型+Middle<Badge align="Middle" text=" " /></p>
                                        <br />
                                        <p>徽章+數字型+Bottom<Badge align="Bottom" text="8" /></p>
                                        <p>徽章+字符型+Bottom<Badge align="Bottom" text="New" /></p>
                                        <p>徽章+圓點型+Bottom<Badge align="Bottom" text=" " /></p>
                                </samp>
                                <code>
                                        <p>
                                                <span class="text">徽章+數字型+Top</span>
                                                <span class="tags">&lt;Badge</span>
                                                <span class="attr">align=</span>
                                                <span class="info">"Top"</span>
                                                <span class="attr">text=</span>
                                                <span class="info">"8"</span>
                                                <span class="tags">&nbsp;/&gt;</span>
                                        </p>
                                        <p>
                                                <span class="text">徽章+字符+Top</span>
                                                <span class="tags">&lt;Badge</span>
                                                <span class="attr">align=</span>
                                                <span class="info">"Top"</span>
                                                <span class="attr">text=</span>
                                                <span class="info">"New"</span>
                                                <span class="tags">&nbsp;/&gt;</span>
                                        </p>
                                        <p>
                                                <span class="text">徽章+圓點型+Top</span>
                                                <span class="tags">&lt;Badge</span>
                                                <span class="attr">align=</span>
                                                <span class="info">"Top"</span>
                                                <span class="attr">text=</span>
                                                <span class="info">" "</span>
                                                <span class="tags">&nbsp;/&gt;</span>
                                        </p>
                                        <p>
                                                <span class="text">徽章+數字型+Middle</span>
                                                <span class="tags">&lt;Badge</span>
                                                <span class="attr">align=</span>
                                                <span class="info">"Middle"</span>
                                                <span class="attr">text=</span>
                                                <span class="info">"8"</span>
                                                <span class="tags">&nbsp;/&gt;</span>
                                        </p>
                                        <p>
                                                <span class="text">徽章+字符型+Middle</span>
                                                <span class="tags">&lt;Badge</span>
                                                <span class="attr">align=</span>
                                                <span class="info">"Middle"</span>
                                                <span class="attr">text=</span>
                                                <span class="info">"New"</span>
                                                <span class="tags">&nbsp;/&gt;</span>
                                        </p>
                                        <p>
                                                <span class="text">徽章+圓點型+Middle</span>
                                                <span class="tags">&lt;Badge</span>
                                                <span class="attr">align=</span>
                                                <span class="info">"Middle"</span>
                                                <span class="attr">text=</span>
                                                <span class="info">" "</span>
                                                <span class="tags">&nbsp;/&gt;</span>
                                        </p>
                                        <p>
                                                <span class="text">徽章+數字型+BOttom</span>
                                                <span class="tags">&lt;Badge</span>
                                                <span class="attr">align=</span>
                                                <span class="info">"Bottom"</span>
                                                <span class="attr">text=</span>
                                                <span class="info">"8"</span>
                                                <span class="tags">&nbsp;/&gt;</span>
                                        </p>
                                        <p>
                                                <span class="text">徽章+字符型+BOttom</span>
                                                <span class="tags">&lt;Badge</span>
                                                <span class="attr">align=</span>
                                                <span class="info">"Bottom"</span>
                                                <span class="attr">text=</span>
                                                <span class="info">"New"</span>
                                                <span class="tags">&nbsp;/&gt;</span>
                                        </p>
                                        <p>
                                                <span class="text">徽章+圓點型+BOttom</span>
                                                <span class="tags">&lt;Badge</span>
                                                <span class="attr">align=</span>
                                                <span class="info">"Bottom"</span>
                                                <span class="attr">text=</span>
                                                <span class="info">" "</span>
                                                <span class="tags">&nbsp;/&gt;</span>
                                        </p>
                                </code>
                                <dfn>組件屬性</dfn>
                                <table class="attrs">
                                        <tr>
                                                <th width="15%">屬性</th>
                                                <th width="15%">類型</th>
                                                <th width="25%">說明</th>
                                                <th width="30%">選項</th>
                                                <th width="15%">默認</th>
                                        </tr>
                                        <tr>
                                                <td>id</td>
                                                <td>String</td>
                                                <td>組件ID</td>
                                                <td>-</td>
                                                <td>空字符串</td>
                                        </tr>
                                        <tr>
                                                <td>className</td>
                                                <td>String</td>
                                                <td>附加樣式 可空 默認值：空字符串</td>
                                                <td>-</td>
                                                <td>空字符串</td>
                                        </tr>
                                        <tr>
                                                <td>text</td>
                                                <td>String</td>
                                                <td>徽章文本</td>
                                                <td>-</td>
                                                <td>空字符串</td>
                                        </tr>
                                        <tr>
                                                <td>align</td>
                                                <td>String</td>
                                                <td>對齊方向</td>
                                                <td>Top | Middle | Bottom</td>
                                                <td>Top</td>
                                        </tr>
                                </table>
                        </article>
                )
        }
}