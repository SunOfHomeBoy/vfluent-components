import { Component, CreateElement } from 'vue-component-decorator'
import { Button } from '../../components'
import { ViewComponent } from '../components'
import { theme } from '../config'

@Component
export class ViewButton extends ViewComponent {
        public created() {
                this.props.name = 'Button'
                this.props.description = '常用按鈕組件'
        }

        public renderComponent(h: CreateElement): any {
                return (
                        <article>
                                <dfn>按鈕類型</dfn>
                                <samp>
                                        <Button width="15rem" type="Primary" text="Primary" />
                                        <Button width="15rem" type="Secondary" text="Secondary" />
                                        <Button width="15rem" type="Success" text="Success" />
                                        <Button width="15rem" type="Danger" text="Danger" />
                                        <Button width="15rem" type="Warning" text="Warning" />
                                        <Button width="15rem" type="Info" text="Info" />
                                        <Button width="15rem" type="Link" text="Link" />
                                        <Button width="15rem" type="Default" text="Default" />
                                        <br />
                                        <Button width="15rem" type="Primary" text="Primary" icon="Github" />
                                        <Button width="15rem" type="Secondary" text="Secondary" icon="Github" />
                                        <Button width="15rem" type="Success" text="Success" icon="Github" />
                                        <Button width="15rem" type="Danger" text="Danger" icon="Github" />
                                        <Button width="15rem" type="Warning" text="Warning" icon="Github" />
                                        <Button width="15rem" type="Info" text="Info" icon="Github" />
                                        <Button width="15rem" type="Link" text="Link" icon="Github" />
                                        <Button width="15rem" type="Default" text="Default" icon="Github" />
                                </samp>
                                <code>
                                        <p>
                                                <span class="tags">&lt;Button</span>
                                                <span class="attr">type=</span>
                                                <span class="info">"Primary"</span>
                                                <span class="attr">text=</span>
                                                <span class="info">"Primary"</span>
                                                <span class="tags">&nbsp;/&gt;</span>
                                        </p>
                                        <p>
                                                <span class="tags">&lt;Button</span>
                                                <span class="attr">type=</span>
                                                <span class="info">"Secondary"</span>
                                                <span class="attr">text=</span>
                                                <span class="info">"Secondary"</span>
                                                <span class="tags">&nbsp;/&gt;</span>
                                        </p>
                                        <p>
                                                <span class="tags">&lt;Button</span>
                                                <span class="attr">type=</span>
                                                <span class="info">"Success"</span>
                                                <span class="attr">text=</span>
                                                <span class="info">"Success"</span>
                                                <span class="tags">&nbsp;/&gt;</span>
                                        </p>
                                        <p>
                                                <span class="tags">&lt;Button</span>
                                                <span class="attr">type=</span>
                                                <span class="info">"Danger"</span>
                                                <span class="attr">text=</span>
                                                <span class="info">"Danger"</span>
                                                <span class="tags">&nbsp;/&gt;</span>
                                        </p>
                                        <p>
                                                <span class="tags">&lt;Button</span>
                                                <span class="attr">type=</span>
                                                <span class="info">"Warning"</span>
                                                <span class="attr">text=</span>
                                                <span class="info">"Warning"</span>
                                                <span class="tags">&nbsp;/&gt;</span>
                                        </p>
                                        <p>
                                                <span class="tags">&lt;Button</span>
                                                <span class="attr">type=</span>
                                                <span class="info">"Info"</span>
                                                <span class="attr">text=</span>
                                                <span class="info">"Info"</span>
                                                <span class="tags">&nbsp;/&gt;</span>
                                        </p>
                                        <p>
                                                <span class="tags">&lt;Button</span>
                                                <span class="attr">type=</span>
                                                <span class="info">"Link"</span>
                                                <span class="attr">text=</span>
                                                <span class="info">"Link"</span>
                                                <span class="tags">&nbsp;/&gt;</span>
                                        </p>
                                        <p>
                                                <span class="tags">&lt;Button</span>
                                                <span class="attr">type=</span>
                                                <span class="info">"Default"</span>
                                                <span class="attr">text=</span>
                                                <span class="info">"Default"</span>
                                                <span class="tags">&nbsp;/&gt;</span>
                                        </p>
                                </code>
                                <dfn>邊框樣式</dfn>
                                <samp>
                                        <Button width="15rem" outline={true} type="Primary" text="Primary" />
                                        <Button width="15rem" outline={true} type="Secondary" text="Secondary" />
                                        <Button width="15rem" outline={true} type="Success" text="Success" />
                                        <Button width="15rem" outline={true} type="Danger" text="Danger" />
                                        <Button width="15rem" outline={true} type="Warning" text="Warning" />
                                        <Button width="15rem" outline={true} type="Info" text="Info" />
                                        <Button width="15rem" outline={true} type="Link" text="Link" />
                                        <Button width="15rem" outline={true} type="Default" text="Default" />
                                        <br />
                                        <Button width="15rem" outline={true} type="Primary" text="Primary" icon="Github" />
                                        <Button width="15rem" outline={true} type="Secondary" text="Secondary" icon="Github" />
                                        <Button width="15rem" outline={true} type="Success" text="Success" icon="Github" />
                                        <Button width="15rem" outline={true} type="Danger" text="Danger" icon="Github" />
                                        <Button width="15rem" outline={true} type="Warning" text="Warning" icon="Github" />
                                        <Button width="15rem" outline={true} type="Info" text="Info" icon="Github" />
                                        <Button width="15rem" outline={true} type="Link" text="Link" icon="Github" />
                                        <Button width="15rem" outline={true} type="Default" text="Default" icon="Github" />
                                </samp>
                                <code>
                                        <p>
                                                <span class="tags">&lt;Button</span>
                                                <span class="attr">outline=</span>
                                                <span class="info">&#123;true&#125;</span>
                                                <span class="attr">type=</span>
                                                <span class="info">"Primary"</span>
                                                <span class="attr">text=</span>
                                                <span class="info">"Primary"</span>
                                                <span class="tags">&nbsp;/&gt;</span>
                                        </p>
                                        <p>
                                                <span class="tags">&lt;Button</span>
                                                <span class="attr">outline=</span>
                                                <span class="info">&#123;true&#125;</span>
                                                <span class="attr">type=</span>
                                                <span class="info">"Secondary"</span>
                                                <span class="attr">text=</span>
                                                <span class="info">"Secondary"</span>
                                                <span class="tags">&nbsp;/&gt;</span>
                                        </p>
                                        <p>
                                                <span class="tags">&lt;Button</span>
                                                <span class="attr">outline=</span>
                                                <span class="info">&#123;true&#125;</span>
                                                <span class="attr">type=</span>
                                                <span class="info">"Success"</span>
                                                <span class="attr">text=</span>
                                                <span class="info">"Success"</span>
                                                <span class="tags">&nbsp;/&gt;</span>
                                        </p>
                                        <p>
                                                <span class="tags">&lt;Button</span>
                                                <span class="attr">outline=</span>
                                                <span class="info">&#123;true&#125;</span>
                                                <span class="attr">type=</span>
                                                <span class="info">"Danger"</span>
                                                <span class="attr">text=</span>
                                                <span class="info">"Danger"</span>
                                                <span class="tags">&nbsp;/&gt;</span>
                                        </p>
                                        <p>
                                                <span class="tags">&lt;Button</span>
                                                <span class="attr">outline=</span>
                                                <span class="info">&#123;true&#125;</span>
                                                <span class="attr">type=</span>
                                                <span class="info">"Warning"</span>
                                                <span class="attr">text=</span>
                                                <span class="info">"Warning"</span>
                                                <span class="tags">&nbsp;/&gt;</span>
                                        </p>
                                        <p>
                                                <span class="tags">&lt;Button</span>
                                                <span class="attr">outline=</span>
                                                <span class="info">&#123;true&#125;</span>
                                                <span class="attr">type=</span>
                                                <span class="info">"Info"</span>
                                                <span class="attr">text=</span>
                                                <span class="info">"Info"</span>
                                                <span class="tags">&nbsp;/&gt;</span>
                                        </p>
                                        <p>
                                                <span class="tags">&lt;Button</span>
                                                <span class="attr">outline=</span>
                                                <span class="info">&#123;true&#125;</span>
                                                <span class="attr">type=</span>
                                                <span class="info">"Link"</span>
                                                <span class="attr">text=</span>
                                                <span class="info">"Link"</span>
                                                <span class="tags">&nbsp;/&gt;</span>
                                        </p>
                                        <p>
                                                <span class="tags">&lt;Button</span>
                                                <span class="attr">outline=</span>
                                                <span class="info">&#123;true&#125;</span>
                                                <span class="attr">type=</span>
                                                <span class="info">"Default"</span>
                                                <span class="attr">text=</span>
                                                <span class="info">"Default"</span>
                                                <span class="tags">&nbsp;/&gt;</span>
                                        </p>
                                </code>
                                <dfn>按鈕尺寸</dfn>
                                <samp>
                                        <Button width="15rem" type="Primary" size="Small" text="Small" />
                                        <Button width="15rem" type="Primary" size="Small" text="Small" icon="Github" />
                                        <br />
                                        <Button width="15rem" type="Primary" size="Default" text="Default" />
                                        <Button width="15rem" type="Primary" size="Default" text="Default" icon="Github" />
                                        <br />
                                        <Button width="15rem" type="Primary" size="Large" text="Large" />
                                        <Button width="15rem" type="Primary" size="Large" text="Large" icon="Github" />
                                        <br />
                                        <Button width="15rem" type="Primary" size="Huge" text="Huge" />
                                        <Button width="15rem" type="Primary" size="Huge" text="Huge" icon="Github" />
                                </samp>
                                <code></code>
                                <dfn>按鈕圖標</dfn>
                                <samp>
                                        <Button icon="Github" type="Primary" size="Small" text="Icon+Primary+Small" />
                                        <Button icon="Github" type="Primary" size="Default" text="Icon+Primary+Default" />
                                        <Button icon="Github" type="Primary" size="Large" text="Icon+Primary+Large" />
                                        <Button icon="Github" type="Primary" size="Huge" text="Icon+Primary+Huge" />
                                        <br />
                                        <Button icon="Github" type="Primary" size="Small" />
                                        <Button icon="Github" type="Primary" size="Default" />
                                        <Button icon="Github" type="Primary" size="Large" />
                                        <Button icon="Github" type="Primary" size="Huge" />
                                        <br />
                                        <Button icon="Github" type="Primary" size="Small" circle={true} />
                                        <Button icon="Github" type="Primary" size="Default" circle={true} />
                                        <Button icon="Github" type="Primary" size="Large" circle={true} />
                                        <Button icon="Github" type="Primary" size="Huge" circle={true} />
                                </samp>
                                <dfn>圖標對齊</dfn>
                                <samp>
                                        <Button width="15rem" type="Primary" icon="Github" align="Left" size="Small" text="Left+Small" />
                                        <Button width="15rem" type="Primary" icon="Github" align="Left" size="Default" text="Left+Default" />
                                        <Button width="15rem" type="Primary" icon="Github" align="Left" size="Large" text="Left+Large" />
                                        <Button width="15rem" type="Primary" icon="Github" align="Left" size="Huge" text="Left+Huge" />
                                        <br />
                                        <Button width="15rem" type="Primary" icon="Github" align="Right" size="Small" text="Right+Small" />
                                        <Button width="15rem" type="Primary" icon="Github" align="Right" size="Default" text="Right+Default" />
                                        <Button width="15rem" type="Primary" icon="Github" align="Right" size="Large" text="Right+Large" />
                                        <Button width="15rem" type="Primary" icon="Github" align="Right" size="Huge" text="Right+Huge" />
                                        <br />
                                        <Button width="15rem" type="Primary" icon="Github" align="Top" size="Small" text="Top+Small" />
                                        <Button width="15rem" type="Primary" icon="Github" align="Top" size="Default" text="Top+Default" />
                                        <Button width="15rem" type="Primary" icon="Github" align="Top" size="Large" text="Top+Large" />
                                        <Button width="15rem" type="Primary" icon="Github" align="Top" size="Huge" text="Top+Huge" />
                                        <br />
                                        <Button width="15rem" type="Primary" icon="Github" align="Bottom" size="Small" text="Bottom+Small" />
                                        <Button width="15rem" type="Primary" icon="Github" align="Bottom" size="Default" text="Bottom+Default" />
                                        <Button width="15rem" type="Primary" icon="Github" align="Bottom" size="Large" text="Bottom+Large" />
                                        <Button width="15rem" type="Primary" icon="Github" align="Bottom" size="Huge" text="Bottom+Huge" />
                                </samp>
                                <code></code>
                                <dfn>圓形圓角</dfn>
                                <samp>
                                        <Button type="Primary" circle={false} radius={false} icon="Github" text="Icon-Circle-Radius+Text" />
                                        <Button type="Primary" circle={false} radius={true} icon="Github" text="Icon-Circle+Radius+Text" />
                                        <Button type="Primary" circle={true} radius={false} icon="Github" text="Icon+Circle-Radius+Text" />
                                        <Button type="Primary" circle={true} radius={false} icon="Github" />
                                </samp>
                                <dfn>按鈕狀態</dfn>
                                <samp>
                                        <Button width="15rem" active={true} type="Primary" text="Active-Outlink" />
                                        <Button width="15rem" active={true} type="Primary" text="Active+Outlink" outline={true} />
                                </samp>
                                <code>
                                        <p>
                                                <span class="tags">&lt;Button</span>
                                                <span class="attr">active=</span>
                                                <span class="info">&#123;true&#125;</span>
                                                <span class="attr">type=</span>
                                                <span class="info">"Primary"</span>
                                                <span class="attr">text=</span>
                                                <span class="info">"Active-Outlink"</span>
                                                <span class="tags">&nbsp;/&gt;</span>
                                        </p>
                                        <p>
                                                <span class="tags">&lt;Button</span>
                                                <span class="attr">active=</span>
                                                <span class="info">&#123;true&#125;</span>
                                                <span class="attr">type=</span>
                                                <span class="info">"Primary"</span>
                                                <span class="attr">text=</span>
                                                <span class="info">"Active-Outlink"</span>
                                                <span class="attr">outline=</span>
                                                <span class="info">&#123;true&#125;</span>
                                                <span class="tags">&nbsp;/&gt;</span>
                                        </p>
                                </code>
                        </article>
                )
        }
}