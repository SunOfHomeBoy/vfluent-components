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
                                        <Button width="10rem" type="Primary" text="Primary" />
                                        <Button width="10rem" type="Secondary" text="Secondary" />
                                        <Button width="10rem" type="Success" text="Success" />
                                        <Button width="10rem" type="Danger" text="Danger" />
                                        <Button width="10rem" type="Warning" text="Warning" />
                                        <Button width="10rem" type="Info" text="Info" />
                                        <Button width="10rem" type="Link" text="Link" />
                                        <Button width="10rem" type="Default" text="Default" />
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
                                        <Button width="10rem" outline={true} type="Primary" text="Primary" />
                                        <Button width="10rem" outline={true} type="Secondary" text="Secondary" />
                                        <Button width="10rem" outline={true} type="Success" text="Success" />
                                        <Button width="10rem" outline={true} type="Danger" text="Danger" />
                                        <Button width="10rem" outline={true} type="Warning" text="Warning" />
                                        <Button width="10rem" outline={true} type="Info" text="Info" />
                                        <Button width="10rem" outline={true} type="Link" text="Link" />
                                        <Button width="10rem" outline={true} type="Default" text="Default" />
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
                                <dfn>圓形圓角</dfn>
                                <samp>
                                        <Button type="Primary" circle={false} radius={false} icon="Github" text="Icon-Circle-Radius+Text" />
                                        <Button type="Primary" circle={false} radius={true} icon="Github" text="Icon-Circle+Radius+Text" />
                                        <Button type="Primary" circle={true} radius={false} icon="Github" text="Icon+Circle-Radius+Text" />
                                        <Button type="Primary" circle={false} radius={false} icon="Github" text="Icon+Circle-Radius-Text" />
                                </samp>
                                <dfn>Active狀態</dfn>
                                <samp>
                                        <Button active={true} type="Primary" text="Active-Outlink" />
                                        <Button active={true} type="Primary" text="Active+Outlink" outline={true} />
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
                                                <span class="info">&#125;true&#125;</span>
                                                <span class="tags">&nbsp;/&gt;</span>
                                        </p>
                                </code>
                        </article>
                )
        }
}