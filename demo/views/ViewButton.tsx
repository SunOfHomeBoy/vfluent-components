import Vue, { CreateElement } from 'vue'
import { Component, Prop, Provide } from 'vue-property-decorator'
import { vfluents, Button, TextBlock } from '../../components'
import { ViewCommon } from '../components'
import { theme } from '../config'

@Component
export default class ViewButton extends ViewCommon {
        @Provide() name: string = 'Button'
        @Provide() description: string = '常用操作按钮'

        public componentView(h: CreateElement) {
                return (
                        <article>
                                <h5>按鈕類型</h5>
                                <section>
                                        <Button type="Default" text="Default" />
                                        <Button type="Primary" text="Primary" />
                                        <Button type="Secondary" text="Secondary" />
                                        <Button type="Success" text="Success" />
                                        <Button type="Danger" text="Danger" />
                                        <Button type="Warning" text="Warning" />
                                        <Button type="Info" text="Info" />
                                        <Button type="Light" text="Light" />
                                        <Button type="Dark" text="Dark" />
                                        <Button type="Link" text="Link" />
                                </section>
                                <code class="language-html">
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Default&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Default&quot;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Primary&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Primary&quot;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Secondary&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Secondary&quot;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Success&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Success&quot;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Danger&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Danger&quot;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Warning&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Warning&quot;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Info&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Info&quot;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Light&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Light&quot;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Dark&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Dark&quot;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Link&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Link&quot;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                </code>
                                <h5>邊框樣式</h5>
                                <section>
                                        <Button type="Default" text="Default" outline={true} />
                                        <Button type="Primary" text="Primary" outline={true} />
                                        <Button type="Secondary" text="Secondary" outline={true} />
                                        <Button type="Success" text="Success" outline={true} />
                                        <Button type="Danger" text="Danger" outline={true} />
                                        <Button type="Warning" text="Warning" outline={true} />
                                        <Button type="Info" text="Info" outline={true} />
                                        <Button type="Light" text="Light" outline={true} />
                                        <Button type="Dark" text="Dark" outline={true} />
                                        <Button type="Link" text="Link" outline={true} />
                                </section>
                                <code class="language-html">
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Default&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Default&quot;</span>
                                                <span class="a">outline=</span>
                                                <span class="v">&#123;true&#125;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Primary&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Primary&quot;</span>
                                                <span class="a">outline=</span>
                                                <span class="v">&#123;true&#125;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Secondary&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Secondary&quot;</span>
                                                <span class="a">outline=</span>
                                                <span class="v">&#123;true&#125;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Success&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Success&quot;</span>
                                                <span class="a">outline=</span>
                                                <span class="v">&#123;true&#125;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Danger&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Danger&quot;</span>
                                                <span class="a">outline=</span>
                                                <span class="v">&#123;true&#125;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Warning&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Warning&quot;</span>
                                                <span class="a">outline=</span>
                                                <span class="v">&#123;true&#125;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Info&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Info&quot;</span>
                                                <span class="a">outline=</span>
                                                <span class="v">&#123;true&#125;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Light&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Light&quot;</span>
                                                <span class="a">outline=</span>
                                                <span class="v">&#123;true&#125;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Dark&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Dark&quot;</span>
                                                <span class="a">outline=</span>
                                                <span class="v">&#123;true&#125;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Link&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Link&quot;</span>
                                                <span class="a">outline=</span>
                                                <span class="v">&#123;true&#125;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                </code>
                                <h5>按鈕尺寸</h5>
                                <section>
                                        <Button type="Primary" size="Small" text="Small" />
                                        <Button type="Primary" size="Default" text="Default" />
                                        <Button type="Primary" size="Large" text="Large" />
                                        <Button type="Primary" size="Huge" text="Huge" />
                                </section>
                                <code class="language-html">
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Primary&quot;</span>
                                                <span class="a">size=</span>
                                                <span class="v">&quot;Small&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Small&quot;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Primary&quot;</span>
                                                <span class="a">size=</span>
                                                <span class="v">&quot;Default&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Default&quot;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Primary&quot;</span>
                                                <span class="a">size=</span>
                                                <span class="v">&quot;Large&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Large&quot;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Primary&quot;</span>
                                                <span class="a">size=</span>
                                                <span class="v">&quot;Huge&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Huge&quot;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                </code>
                                <h5>圖標按鈕</h5>
                                <section>
                                        <Button type="Default" icon="Checkmark" text="Icon+Default" />
                                        <Button type="Primary" icon="Checkmark" text="Icon+Primary" />
                                        <Button type="Secondary" icon="Checkmark" text="Icon+Secondary" />
                                        <Button type="Success" icon="Checkmark" text="Icon+Success" />
                                        <Button type="Danger" icon="Checkmark" text="Icon+Danger" />
                                        <Button type="Warning" icon="Checkmark" text="Icon+Warning" />
                                        <Button type="Info" icon="Checkmark" text="Icon+Info" />
                                        <Button type="Light" icon="Checkmark" text="Icon+Light" />
                                        <Button type="Dark" icon="Checkmark" text="Icon+Dark" />
                                        <Button type="Link" icon="Checkmark" text="Icon+Link" />
                                        <br />
                                        <Button type="Default" icon="Checkmark" text="Icon+Default" outline={true} />
                                        <Button type="Primary" icon="Checkmark" text="Icon+Primary" outline={true} />
                                        <Button type="Secondary" icon="Checkmark" text="Icon+Secondary" outline={true} />
                                        <Button type="Success" icon="Checkmark" text="Icon+Success" outline={true} />
                                        <Button type="Danger" icon="Checkmark" text="Icon+Danger" outline={true} />
                                        <Button type="Warning" icon="Checkmark" text="Icon+Warning" outline={true} />
                                        <Button type="Info" icon="Checkmark" text="Icon+Info" outline={true} />
                                        <Button type="Light" icon="Checkmark" text="Icon+Light" outline={true} />
                                        <Button type="Dark" icon="Checkmark" text="Icon+Dark" outline={true} />
                                        <Button type="Link" icon="Checkmark" text="Icon+Link" outline={true} />
                                        <br />
                                        <Button type="Default" icon="Checkmark" />
                                        <Button type="Primary" icon="Checkmark" />
                                        <Button type="Secondary" icon="Checkmark" />
                                        <Button type="Success" icon="Checkmark" />
                                        <Button type="Danger" icon="Checkmark" />
                                        <Button type="Warning" icon="Checkmark" />
                                        <Button type="Info" icon="Checkmark" />
                                        <Button type="Light" icon="Checkmark" />
                                        <Button type="Dark" icon="Checkmark" />
                                        <Button type="Link" icon="Checkmark" />
                                        <br />
                                        <Button type="Default" icon="Checkmark" outline={true} />
                                        <Button type="Primary" icon="Checkmark" outline={true} />
                                        <Button type="Secondary" icon="Checkmark" outline={true} />
                                        <Button type="Success" icon="Checkmark" outline={true} />
                                        <Button type="Danger" icon="Checkmark" outline={true} />
                                        <Button type="Warning" icon="Checkmark" outline={true} />
                                        <Button type="Info" icon="Checkmark" outline={true} />
                                        <Button type="Light" icon="Checkmark" outline={true} />
                                        <Button type="Dark" icon="Checkmark" outline={true} />
                                        <Button type="Link" icon="Checkmark" outline={true} />
                                </section>
                                <code class="language-html">
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Default&quot;</span>
                                                <span class="a">icon=</span>
                                                <span class="v">&quot;Checkmark&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Icon+Default&quot;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Primary&quot;</span>
                                                <span class="a">icon=</span>
                                                <span class="v">&quot;Checkmark&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Icon+Primary&quot;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Secondary&quot;</span>
                                                <span class="a">icon=</span>
                                                <span class="v">&quot;Checkmark&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Icon+Secondary&quot;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Success&quot;</span>
                                                <span class="a">icon=</span>
                                                <span class="v">&quot;Checkmark&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Icon+Success&quot;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Danger&quot;</span>
                                                <span class="a">icon=</span>
                                                <span class="v">&quot;Checkmark&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Icon+Danger&quot;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Warning&quot;</span>
                                                <span class="a">icon=</span>
                                                <span class="v">&quot;Checkmark&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Icon+Warning&quot;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Info&quot;</span>
                                                <span class="a">icon=</span>
                                                <span class="v">&quot;Checkmark&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Icon+Info&quot;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Light&quot;</span>
                                                <span class="a">icon=</span>
                                                <span class="v">&quot;Checkmark&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Icon+Light&quot;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Dark&quot;</span>
                                                <span class="a">icon=</span>
                                                <span class="v">&quot;Checkmark&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Icon+Dark&quot;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Link&quot;</span>
                                                <span class="a">icon=</span>
                                                <span class="v">&quot;Checkmark&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Icon+Link&quot;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <br />
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Default&quot;</span>
                                                <span class="a">icon=</span>
                                                <span class="v">&quot;Checkmark&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Icon+Default&quot;</span>
                                                <span class="a">outline=</span>
                                                <span class="v">&#123;true&#125;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Primary&quot;</span>
                                                <span class="a">icon=</span>
                                                <span class="v">&quot;Checkmark&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Icon+Primary&quot;</span>
                                                <span class="a">outline=</span>
                                                <span class="v">&#123;true&#125;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Secondary&quot;</span>
                                                <span class="a">icon=</span>
                                                <span class="v">&quot;Checkmark&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Icon+Secondary&quot;</span>
                                                <span class="a">outline=</span>
                                                <span class="v">&#123;true&#125;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Success&quot;</span>
                                                <span class="a">icon=</span>
                                                <span class="v">&quot;Checkmark&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Icon+Success&quot;</span>
                                                <span class="a">outline=</span>
                                                <span class="v">&#123;true&#125;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Danger&quot;</span>
                                                <span class="a">icon=</span>
                                                <span class="v">&quot;Checkmark&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Icon+Danger&quot;</span>
                                                <span class="a">outline=</span>
                                                <span class="v">&#123;true&#125;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Warning&quot;</span>
                                                <span class="a">icon=</span>
                                                <span class="v">&quot;Checkmark&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Icon+Warning&quot;</span>
                                                <span class="a">outline=</span>
                                                <span class="v">&#123;true&#125;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Info&quot;</span>
                                                <span class="a">icon=</span>
                                                <span class="v">&quot;Checkmark&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Icon+Info&quot;</span>
                                                <span class="a">outline=</span>
                                                <span class="v">&#123;true&#125;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Light&quot;</span>
                                                <span class="a">icon=</span>
                                                <span class="v">&quot;Checkmark&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Icon+Light&quot;</span>
                                                <span class="a">outline=</span>
                                                <span class="v">&#123;true&#125;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Dark&quot;</span>
                                                <span class="a">icon=</span>
                                                <span class="v">&quot;Checkmark&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Icon+Dark&quot;</span>
                                                <span class="a">outline=</span>
                                                <span class="v">&#123;true&#125;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Link&quot;</span>
                                                <span class="a">icon=</span>
                                                <span class="v">&quot;Checkmark&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Icon+Link&quot;</span>
                                                <span class="a">outline=</span>
                                                <span class="v">&#123;true&#125;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <br />
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Default&quot;</span>
                                                <span class="a">icon=</span>
                                                <span class="v">&quot;Checkmark&quot;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Primary&quot;</span>
                                                <span class="a">icon=</span>
                                                <span class="v">&quot;Checkmark&quot;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Secondary&quot;</span>
                                                <span class="a">icon=</span>
                                                <span class="v">&quot;Checkmark&quot;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Success&quot;</span>
                                                <span class="a">icon=</span>
                                                <span class="v">&quot;Checkmark&quot;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Danger&quot;</span>
                                                <span class="a">icon=</span>
                                                <span class="v">&quot;Checkmark&quot;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Warning&quot;</span>
                                                <span class="a">icon=</span>
                                                <span class="v">&quot;Checkmark&quot;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Info&quot;</span>
                                                <span class="a">icon=</span>
                                                <span class="v">&quot;Checkmark&quot;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Light&quot;</span>
                                                <span class="a">icon=</span>
                                                <span class="v">&quot;Checkmark&quot;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Dark&quot;</span>
                                                <span class="a">icon=</span>
                                                <span class="v">&quot;Checkmark&quot;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Link&quot;</span>
                                                <span class="a">icon=</span>
                                                <span class="v">&quot;Checkmark&quot;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <br />
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Default&quot;</span>
                                                <span class="a">icon=</span>
                                                <span class="v">&quot;Checkmark&quot;</span>
                                                <span class="a">outline=</span>
                                                <span class="v">&#123;true&#125;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Primary&quot;</span>
                                                <span class="a">icon=</span>
                                                <span class="v">&quot;Checkmark&quot;</span>
                                                <span class="a">outline=</span>
                                                <span class="v">&#123;true&#125;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Secondary&quot;</span>
                                                <span class="a">icon=</span>
                                                <span class="v">&quot;Checkmark&quot;</span>
                                                <span class="a">outline=</span>
                                                <span class="v">&#123;true&#125;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Success&quot;</span>
                                                <span class="a">icon=</span>
                                                <span class="v">&quot;Checkmark&quot;</span>
                                                <span class="a">outline=</span>
                                                <span class="v">&#123;true&#125;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Danger&quot;</span>
                                                <span class="a">icon=</span>
                                                <span class="v">&quot;Checkmark&quot;</span>
                                                <span class="a">outline=</span>
                                                <span class="v">&#123;true&#125;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Warning&quot;</span>
                                                <span class="a">icon=</span>
                                                <span class="v">&quot;Checkmark&quot;</span>
                                                <span class="a">outline=</span>
                                                <span class="v">&#123;true&#125;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Info&quot;</span>
                                                <span class="a">icon=</span>
                                                <span class="v">&quot;Checkmark&quot;</span>
                                                <span class="a">outline=</span>
                                                <span class="v">&#123;true&#125;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Light&quot;</span>
                                                <span class="a">icon=</span>
                                                <span class="v">&quot;Checkmark&quot;</span>
                                                <span class="a">outline=</span>
                                                <span class="v">&#123;true&#125;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Dark&quot;</span>
                                                <span class="a">icon=</span>
                                                <span class="v">&quot;Checkmark&quot;</span>
                                                <span class="a">outline=</span>
                                                <span class="v">&#123;true&#125;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Link&quot;</span>
                                                <span class="a">icon=</span>
                                                <span class="v">&quot;Checkmark&quot;</span>
                                                <span class="a">outline=</span>
                                                <span class="v">&#123;true&#125;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                </code>
                                <h5>水平擴展</h5>
                                <section>
                                        <Button type="Primary" text="Primary" block={true} />
                                </section>
                                <code class="language-html">
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Primary&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Primary&quot;</span>
                                                <span class="a">block=</span>
                                                <span class="v">&#123;true&#125;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                </code>
                                <h5>圖標對齊</h5>
                                <section>
                                        <Button type="Primary" icon="Checkmark" block={true} align="Default" text="Text+Default" />
                                        <br />
                                        <Button type="Primary" icon="Checkmark" block={true} align="Left" size="Small" text="Text+Left+Small" />
                                        <Button type="Primary" icon="Checkmark" block={true} align="Left" size="Default" text="Text+Left+Default" />
                                        <Button type="Primary" icon="Checkmark" block={true} align="Left" size="Large" text="Text+Left+Large" />
                                        <Button type="Primary" icon="Checkmark" block={true} align="Left" size="Huge" text="Text+Left+Huge" />
                                        <br />
                                        <Button type="Primary" icon="Checkmark" block={true} align="Right" size="Small" text="Text+Right+Small" />
                                        <Button type="Primary" icon="Checkmark" block={true} align="Right" size="Default" text="Text+Right+Default" />
                                        <Button type="Primary" icon="Checkmark" block={true} align="Right" size="Large" text="Text+Right+Large" />
                                        <Button type="Primary" icon="Checkmark" block={true} align="Right" size="Huge" text="Text+Right+Huge" />
                                        <br />
                                        <Button type="Primary" icon="Checkmark" block={true} align="Top" size="Small" text="Text+Top+Small" />
                                        <Button type="Primary" icon="Checkmark" block={true} align="Top" size="Default" text="Text+Top+Default" />
                                        <Button type="Primary" icon="Checkmark" block={true} align="Top" size="Large" text="Text+Top+Large" />
                                        <Button type="Primary" icon="Checkmark" block={true} align="Top" size="Huge" text="Text+Top+Huge" />
                                        <br />
                                        <Button type="Primary" icon="Checkmark" block={true} align="Bottom" size="Small" text="Text+Bottom+Small" />
                                        <Button type="Primary" icon="Checkmark" block={true} align="Bottom" size="Default" text="Text+Bottom+Default" />
                                        <Button type="Primary" icon="Checkmark" block={true} align="Bottom" size="Large" text="Text+Bottom+Large" />
                                        <Button type="Primary" icon="Checkmark" block={true} align="Bottom" size="Huge" text="Text+Bottom+Huge" />
                                </section>
                                <code class="language-html">
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Primary&quot;</span>
                                                <span class="a">icon=</span>
                                                <span class="v">&quot;Checkmark&quot;</span>
                                                <span class="a">block=</span>
                                                <span class="v">&#123;true&#125;</span>
                                                <span class="a">align=</span>
                                                <span class="v">&quot;Default&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Text+Default&quot;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <br class="ButtonLeft" />
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Primary&quot;</span>
                                                <span class="a">icon=</span>
                                                <span class="v">&quot;Checkmark&quot;</span>
                                                <span class="a">block=</span>
                                                <span class="v">&#123;true&#125;</span>
                                                <span class="a">align=</span>
                                                <span class="v">&quot;Left&quot;</span>
                                                <span class="a">size=</span>
                                                <span class="v">&quot;Small&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Text+Left+Small&quot;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Primary&quot;</span>
                                                <span class="a">icon=</span>
                                                <span class="v">&quot;Checkmark&quot;</span>
                                                <span class="a">block=</span>
                                                <span class="v">&#123;true&#125;</span>
                                                <span class="a">align=</span>
                                                <span class="v">&quot;Left&quot;</span>
                                                <span class="a">size=</span>
                                                <span class="v">&quot;Default&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Text+Left+Default&quot;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Primary&quot;</span>
                                                <span class="a">icon=</span>
                                                <span class="v">&quot;Checkmark&quot;</span>
                                                <span class="a">block=</span>
                                                <span class="v">&#123;true&#125;</span>
                                                <span class="a">align=</span>
                                                <span class="v">&quot;Left&quot;</span>
                                                <span class="a">size=</span>
                                                <span class="v">&quot;Large&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Text+Left+Large&quot;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Primary&quot;</span>
                                                <span class="a">icon=</span>
                                                <span class="v">&quot;Checkmark&quot;</span>
                                                <span class="a">block=</span>
                                                <span class="v">&#123;true&#125;</span>
                                                <span class="a">align=</span>
                                                <span class="v">&quot;Left&quot;</span>
                                                <span class="a">size=</span>
                                                <span class="v">&quot;Huge&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Text+Left+Huge&quot;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <br class="ButtonRight" />
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Primary&quot;</span>
                                                <span class="a">icon=</span>
                                                <span class="v">&quot;Checkmark&quot;</span>
                                                <span class="a">block=</span>
                                                <span class="v">&#123;true&#125;</span>
                                                <span class="a">align=</span>
                                                <span class="v">&quot;Right&quot;</span>
                                                <span class="a">size=</span>
                                                <span class="v">&quot;Small&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Text+Right+Small&quot;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Primary&quot;</span>
                                                <span class="a">icon=</span>
                                                <span class="v">&quot;Checkmark&quot;</span>
                                                <span class="a">block=</span>
                                                <span class="v">&#123;true&#125;</span>
                                                <span class="a">align=</span>
                                                <span class="v">&quot;Right&quot;</span>
                                                <span class="a">size=</span>
                                                <span class="v">&quot;Default&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Text+Right+Default&quot;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Primary&quot;</span>
                                                <span class="a">icon=</span>
                                                <span class="v">&quot;Checkmark&quot;</span>
                                                <span class="a">block=</span>
                                                <span class="v">&#123;true&#125;</span>
                                                <span class="a">align=</span>
                                                <span class="v">&quot;Right&quot;</span>
                                                <span class="a">size=</span>
                                                <span class="v">&quot;Large&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Text+Right+Large&quot;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Primary&quot;</span>
                                                <span class="a">icon=</span>
                                                <span class="v">&quot;Checkmark&quot;</span>
                                                <span class="a">block=</span>
                                                <span class="v">&#123;true&#125;</span>
                                                <span class="a">align=</span>
                                                <span class="v">&quot;Right&quot;</span>
                                                <span class="a">size=</span>
                                                <span class="v">&quot;Huge&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Text+Right+Huge&quot;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <br class="ButtonTop" />
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Primary&quot;</span>
                                                <span class="a">icon=</span>
                                                <span class="v">&quot;Checkmark&quot;</span>
                                                <span class="a">block=</span>
                                                <span class="v">&#123;true&#125;</span>
                                                <span class="a">align=</span>
                                                <span class="v">&quot;Top&quot;</span>
                                                <span class="a">size=</span>
                                                <span class="v">&quot;Small&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Text+Top+Small&quot;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Primary&quot;</span>
                                                <span class="a">icon=</span>
                                                <span class="v">&quot;Checkmark&quot;</span>
                                                <span class="a">block=</span>
                                                <span class="v">&#123;true&#125;</span>
                                                <span class="a">align=</span>
                                                <span class="v">&quot;Top&quot;</span>
                                                <span class="a">size=</span>
                                                <span class="v">&quot;Default&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Text+Top+Default&quot;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Primary&quot;</span>
                                                <span class="a">icon=</span>
                                                <span class="v">&quot;Checkmark&quot;</span>
                                                <span class="a">block=</span>
                                                <span class="v">&#123;true&#125;</span>
                                                <span class="a">align=</span>
                                                <span class="v">&quot;Top&quot;</span>
                                                <span class="a">size=</span>
                                                <span class="v">&quot;Large&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Text+Top+Large&quot;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Primary&quot;</span>
                                                <span class="a">icon=</span>
                                                <span class="v">&quot;Checkmark&quot;</span>
                                                <span class="a">block=</span>
                                                <span class="v">&#123;true&#125;</span>
                                                <span class="a">align=</span>
                                                <span class="v">&quot;Top&quot;</span>
                                                <span class="a">size=</span>
                                                <span class="v">&quot;Huge&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Text+Top+Huge&quot;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <br class="ButtonButtom" />
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Primary&quot;</span>
                                                <span class="a">icon=</span>
                                                <span class="v">&quot;Checkmark&quot;</span>
                                                <span class="a">block=</span>
                                                <span class="v">&#123;true&#125;</span>
                                                <span class="a">align=</span>
                                                <span class="v">&quot;Bottom&quot;</span>
                                                <span class="a">size=</span>
                                                <span class="v">&quot;Small&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Text+Bottom+Small&quot;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Primary&quot;</span>
                                                <span class="a">icon=</span>
                                                <span class="v">&quot;Checkmark&quot;</span>
                                                <span class="a">block=</span>
                                                <span class="v">&#123;true&#125;</span>
                                                <span class="a">align=</span>
                                                <span class="v">&quot;Bottom&quot;</span>
                                                <span class="a">size=</span>
                                                <span class="v">&quot;Default&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Text+Bottom+Default&quot;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Primary&quot;</span>
                                                <span class="a">icon=</span>
                                                <span class="v">&quot;Checkmark&quot;</span>
                                                <span class="a">block=</span>
                                                <span class="v">&#123;true&#125;</span>
                                                <span class="a">align=</span>
                                                <span class="v">&quot;Bottom&quot;</span>
                                                <span class="a">size=</span>
                                                <span class="v">&quot;Large&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Text+Bottom+Large&quot;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Primary&quot;</span>
                                                <span class="a">icon=</span>
                                                <span class="v">&quot;Checkmark&quot;</span>
                                                <span class="a">block=</span>
                                                <span class="v">&#123;true&#125;</span>
                                                <span class="a">align=</span>
                                                <span class="v">&quot;Bottom&quot;</span>
                                                <span class="a">size=</span>
                                                <span class="v">&quot;Huge&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Text+Bottom+Huge&quot;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                </code>
                                <h5>圓角按鈕</h5>
                                <section>
                                        <Button type="Primary" round={true} size="Small" text="Round+Small" />
                                        <Button type="Primary" round={true} size="Default" text="Round+Default" />
                                        <Button type="Primary" round={true} size="Large" text="Round+Large" />
                                        <Button type="Primary" round={true} size="Huge" text="Round+Huge" />
                                </section>
                                <code class="language-html">
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Primary&quot;</span>
                                                <span class="a">round=</span>
                                                <span class="v">&#123;true&#125;</span>
                                                <span class="a">size=</span>
                                                <span class="v">&quot;Small&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Round+Small&quot;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Primary&quot;</span>
                                                <span class="a">round=</span>
                                                <span class="v">&#123;true&#125;</span>
                                                <span class="a">size=</span>
                                                <span class="v">&quot;Default&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Round+Default&quot;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Primary&quot;</span>
                                                <span class="a">round=</span>
                                                <span class="v">&#123;true&#125;</span>
                                                <span class="a">size=</span>
                                                <span class="v">&quot;Large&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Round+Large&quot;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Primary&quot;</span>
                                                <span class="a">round=</span>
                                                <span class="v">&#123;true&#125;</span>
                                                <span class="a">size=</span>
                                                <span class="v">&quot;Huge&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Round+Huge&quot;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                </code>
                                <h5>圓形按鈕</h5>
                                <section>
                                        <Button type="Primary" circle={true} size="Small" icon="Checkmark" />
                                        <Button type="Primary" circle={true} size="Default" icon="Checkmark" />
                                        <Button type="Primary" circle={true} size="Large" icon="Checkmark" />
                                        <Button type="Primary" circle={true} size="Huge" icon="Checkmark" />
                                        <Button type="Primary" circle={true} size="Huge" icon="Checkmark" text="Text+Icon" />
                                        <Button type="Primary" circle={true} size="Huge" text="Text+Only" />
                                </section>
                                <code class="language-html">
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Primary&quot;</span>
                                                <span class="a">circle=</span>
                                                <span class="v">&#123;true&#125;</span>
                                                <span class="a">size=</span>
                                                <span class="v">&quot;Small&quot;</span>
                                                <span class="a">icon=</span>
                                                <span class="v">&quot;Checkmark&quot;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Primary&quot;</span>
                                                <span class="a">circle=</span>
                                                <span class="v">&#123;true&#125;</span>
                                                <span class="a">size=</span>
                                                <span class="v">&quot;Default&quot;</span>
                                                <span class="a">icon=</span>
                                                <span class="v">&quot;Checkmark&quot;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Primary&quot;</span>
                                                <span class="a">circle=</span>
                                                <span class="v">&#123;true&#125;</span>
                                                <span class="a">size=</span>
                                                <span class="v">&quot;Large&quot;</span>
                                                <span class="a">icon=</span>
                                                <span class="v">&quot;Checkmark&quot;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Primary&quot;</span>
                                                <span class="a">circle=</span>
                                                <span class="v">&#123;true&#125;</span>
                                                <span class="a">size=</span>
                                                <span class="v">&quot;Huge&quot;</span>
                                                <span class="a">icon=</span>
                                                <span class="v">&quot;Checkmark&quot;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Primary&quot;</span>
                                                <span class="a">circle=</span>
                                                <span class="v">&#123;true&#125;</span>
                                                <span class="a">size=</span>
                                                <span class="v">&quot;Large&quot;</span>
                                                <span class="a">icon=</span>
                                                <span class="v">&quot;Checkmark&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Text+Icon&quot;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Primary&quot;</span>
                                                <span class="a">circle=</span>
                                                <span class="v">&#123;true&#125;</span>
                                                <span class="a">size=</span>
                                                <span class="v">&quot;Huge&quot;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Text+Only&quot;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                </code>
                                <h5>按鈕狀態</h5>
                                <section>
                                        <Button type="Primary" active={true} text="Active" />
                                        <Button type="Primary" disabled={true} text="Disabled" />
                                        <Button type="Primary" eventClick={() => alert('ClickEvent')} text="Click" />
                                </section>
                                <code class="language-html">
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Primary&quot;</span>
                                                <span class="a">active=</span>
                                                <span class="v">&#123;true&#125;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Active&quot;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Primary&quot;</span>
                                                <span class="a">disabled=</span>
                                                <span class="v">&#123;true&#125;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Disabled&quot;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
                                        </TextBlock>
                                        <TextBlock>
                                                <span class="t">&lt;Button</span>
                                                <span class="a">type=</span>
                                                <span class="v">&quot;Primary&quot;</span>
                                                <span class="a">eventClick=</span>
                                                <span class="v">&#123;() =&gt; alert('ClickEvent')&#125;</span>
                                                <span class="a">text=</span>
                                                <span class="v">&quot;Active&quot;</span>
                                                <span class="t">&nbsp;&#47;&gt;</span>
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
                                                                <td>size</td>
                                                                <td>String</td>
                                                                <td>按鈕尺寸</td>
                                                                <td>Default | Small | Large | Huge</td>
                                                                <td>Default</td>
                                                        </tr>
                                                        <tr>
                                                                <td>text</td>
                                                                <td>String</td>
                                                                <td>按鈕文本</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                        </tr>
                                                        <tr>
                                                                <td>icon</td>
                                                                <td>String</td>
                                                                <td>圖標名稱</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                        </tr>
                                                        <tr>
                                                                <td>type</td>
                                                                <td>String</td>
                                                                <td>按鈕類型</td>
                                                                <td>Default | Primary | Secondary | Success | Danger | Warning | Info | Light | Dark |  Link</td>
                                                                <td>Default</td>
                                                        </tr>
                                                        <tr>
                                                                <td>size</td>
                                                                <td>String</td>
                                                                <td>對齊方向</td>
                                                                <td>Default | Top | Right | Bottom | Left</td>
                                                                <td>Default</td>
                                                        </tr>
                                                        <tr>
                                                                <td>block</td>
                                                                <td>Boolean</td>
                                                                <td>水平擴展</td>
                                                                <td>-</td>
                                                                <td>false</td>
                                                        </tr>
                                                        <tr>
                                                                <td>round</td>
                                                                <td>Boolean</td>
                                                                <td>邊框圓角</td>
                                                                <td>-</td>
                                                                <td>false</td>
                                                        </tr>
                                                        <tr>
                                                                <td>circle</td>
                                                                <td>Boolean</td>
                                                                <td>圓形按鈕</td>
                                                                <td>-</td>
                                                                <td>false</td>
                                                        </tr>
                                                        <tr>
                                                                <td>outline</td>
                                                                <td>Boolean</td>
                                                                <td>邊框樣式</td>
                                                                <td>-</td>
                                                                <td>False</td>
                                                        </tr>
                                                        <tr>
                                                                <td>active</td>
                                                                <td>Boolean</td>
                                                                <td>激活狀態</td>
                                                                <td>-</td>
                                                                <td>false</td>
                                                        </tr>
                                                        <tr>
                                                                <td>disabled</td>
                                                                <td>Boolean</td>
                                                                <td>禁用狀態</td>
                                                                <td>-</td>
                                                                <td>false</td>
                                                        </tr>
                                                        <tr>
                                                                <td>eventClick</td>
                                                                <td>Function</td>
                                                                <td>單擊事件</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                        </tr>
                                                </tbody>
                                        </table>
                                </section>
                        </article>
                )
        }
}