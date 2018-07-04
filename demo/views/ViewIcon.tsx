import { Component, CreateElement } from 'vue-component-decorator'
import { vfluents, Icon } from '../../components'
import { ViewComponent } from '../components'
import { theme } from '../config'

@Component
export class ViewIcon extends ViewComponent {
        public name: string = 'Icon'
        public description: string = '圖標組件'

        public created() {
                this.props.name = 'Badge'
                this.props.description = '徽章展示新的或者未讀的信息條目'
        }

        public renderComponent(h: CreateElement): any {
                let iconElements = []
                for (let name of Object.keys(theme.icons).sort()) {
                        iconElements.push(
                                <center class="pure-u-1-4 pure-u-md-1-5 pure-u-lg-1-8 pure-u-xl-1-12">
                                        <Icon name={name} size="Huge" />
                                        <h6>{String(name).replace(/^icon/i, '')}</h6>
                                </center>
                        )
                }

                return (
                        <article>
                                <dfn>常用用法</dfn>
                                <samp>
                                        <span class={vfluents.themePrefix + 'align-center'}>
                                                <Icon name="Github" size="Mini" />
                                                <h5>16px</h5>
                                        </span>
                                        <span class={vfluents.themePrefix + 'align-center'}>
                                                <Icon name="Github" size="Small" />
                                                <h5>24px</h5>
                                        </span>
                                        <span class={vfluents.themePrefix + 'align-center'}>
                                                <Icon name="Github" size="Default" />
                                                <h5>32px</h5>
                                        </span>
                                        <span class={vfluents.themePrefix + 'align-center'}>
                                                <Icon name="Github" size="Large" />
                                                <h5>48px</h5>
                                        </span>
                                        <span class={vfluents.themePrefix + 'align-center'}>
                                                <Icon name="Github" size="Huge" />
                                                <h5>64px</h5>
                                        </span>
                                        <span class={vfluents.themePrefix + 'align-center'}>
                                                <Icon name="Github" size="Huge" color="#0078d7" />
                                                <h5>#0078d7</h5>
                                        </span>
                                        <span class={vfluents.themePrefix + 'align-center'}>
                                                <Icon name="Github" size="Huge" eventClick={() => alert('Are you OK~')} />
                                                <h5>Click</h5>
                                        </span>
                                </samp>
                                <code>
                                        <p>
                                                <span class="tags">&lt;Icon</span>
                                                <span class="attr">name=</span>
                                                <span class="info">"Github"</span>
                                                <span class="attr">size=</span>
                                                <span class="info">"Mini"</span>
                                                <span class="tags">&nbsp;/&gt;</span>
                                        </p>
                                        <p>
                                                <span class="tags">&lt;Icon</span>
                                                <span class="attr">name=</span>
                                                <span class="info">"Github"</span>
                                                <span class="attr">size=</span>
                                                <span class="info">"Small"</span>
                                                <span class="tags">&nbsp;/&gt;</span>
                                        </p>
                                        <p>
                                                <span class="tags">&lt;Icon</span>
                                                <span class="attr">name=</span>
                                                <span class="info">"Github"</span>
                                                <span class="attr">size=</span>
                                                <span class="info">"Default"</span>
                                                <span class="tags">&nbsp;/&gt;</span>
                                        </p>
                                        <p>
                                                <span class="tags">&lt;Icon</span>
                                                <span class="attr">name=</span>
                                                <span class="info">"Github"</span>
                                                <span class="attr">size=</span>
                                                <span class="info">"Large"</span>
                                                <span class="tags">&nbsp;/&gt;</span>
                                        </p>
                                        <p>
                                                <span class="tags">&lt;Icon</span>
                                                <span class="attr">name=</span>
                                                <span class="info">"Github"</span>
                                                <span class="attr">size=</span>
                                                <span class="info">"Huge"</span>
                                                <span class="tags">&nbsp;/&gt;</span>
                                        </p>
                                        <p>
                                                <span class="tags">&lt;Icon</span>
                                                <span class="attr">name=</span>
                                                <span class="info">"Github"</span>
                                                <span class="attr">size=</span>
                                                <span class="info">"Huge"</span>
                                                <span class="attr">color=</span>
                                                <span class="info">"#0078d7"</span>
                                                <span class="tags">&nbsp;/&gt;</span>
                                        </p>
                                        <p>
                                                <span class="tags">&lt;Icon</span>
                                                <span class="attr">name=</span>
                                                <span class="info">"Github"</span>
                                                <span class="attr">size=</span>
                                                <span class="info">"Huge"</span>
                                                <span class="attr">eventClick=</span>
                                                <span class="info">&#123;&#40;&#41; =&gt; alert&#40;'Are you OK'&#41;&#125;</span>
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
                                </table>
                                <dfn>常用圖標</dfn>
                                <samp class="pure-g">{iconElements}</samp>
                                <code></code>
                        </article>
                )
        }
}