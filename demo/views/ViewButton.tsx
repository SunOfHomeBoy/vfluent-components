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
                                <h4>基本用法</h4>
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
                                <section>
                                        <p class={theme.themePrefix + 'button-types'}>
                                                <h5>類型</h5>

                                        </p>
                                        <p class={theme.themePrefix + 'button-sizes'}>
                                                <h5>尺寸</h5>
                                                <Button type="Primary" size="Small" text="Small" />
                                                <Button type="Primary" size="Default" text="Default" />
                                                <Button type="Primary" size="Large" text="Large" />
                                                <Button type="Primary" size="Huge" text="Huge" />
                                        </p>
                                        <p class={theme.themePrefix + 'button-icons'}>
                                                <h5>圖標</h5>
                                                <Button type="Primary" size="Small" text="Icon+Primary+Small" icon="Checkmark" />
                                                <Button type="Warning" size="Default" text="Icon+Warning+Default" icon="Checkmark" />
                                                <Button type="Light" size="Large" text="Icon+Light+Large" icon="Checkmark" />
                                                <Button type="Dark" size="Large" text="Icon+Dark+Large" icon="Checkmark" />
                                                <Button type="Link" size="Huge" text="Icon+Link+Huge" icon="Checkmark" />
                                                <Button type="Success" size="Huge" text="Icon+Success+Huge" icon="Checkmark" />
                                                <Button type="Default" size="Huge" text="Icon+Default+Huge" icon="Checkmark" />
                                                <br />
                                                <Button type="Primary" size="Small" icon="Checkmark" />
                                                <Button type="Warning" size="Default" icon="Checkmark" />
                                                <Button type="Light" size="Large" icon="Checkmark" />
                                                <Button type="Dark" size="Large" icon="Checkmark" />
                                                <Button type="Link" size="Huge" icon="Checkmark" />
                                                <Button type="Success" size="Huge" icon="Checkmark" />
                                                <Button type="Default" size="Huge" icon="Checkmark" />
                                        </p>
                                        <p class={theme.themePrefix + 'button-round'}>
                                                <h5>圓角</h5>
                                                <Button type="Primary" round={true} size="Small" text="Radius+Small" />
                                                <Button type="Primary" round={true} size="Default" text="Radius+Default" />
                                                <Button type="Primary" round={true} size="Large" text="Radius+Large" />
                                                <Button type="Primary" round={true} size="Huge" text="Radius+Huge" />
                                        </p>
                                        <p class={theme.themePrefix + 'button-circle'}>
                                                <h5>圓形</h5>
                                                <Button type="Primary" circle={true} size="Small" icon="Checkmark" />
                                                <Button type="Primary" circle={true} size="Default" icon="Checkmark" />
                                                <Button type="Primary" circle={true} size="Large" icon="Checkmark" />
                                                <Button type="Primary" circle={true} size="Huge" icon="Checkmark" />
                                                <Button type="Primary" circle={true} size="Huge" icon="Checkmark" text="Text+Icon" />
                                                <Button type="Primary" circle={true} size="Huge" text="TextOnly" />
                                        </p>
                                </section>
                                <code>
                                </code>
                        </article>
                )
        }
}