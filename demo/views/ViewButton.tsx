import { Component, CreateElement } from 'vue-component-decorator'
import { Button, ButtonGroup } from '../../components'
import { ViewComponent } from '../components'
import { theme } from '../config';
import utils from '../../components/utils';

@Component
export class ViewButton extends ViewComponent {
        private stateActive: any = {}

        public created() {
                this.props.name = 'Button'
                this.props.description = '常用的操作按鈕組件'
        }

        public setActive(name: string) {
                if (this.stateActive[name]) {
                        return this.stateActive = {}
                }

                this.stateActive = {}
                this.stateActive[name] = true
        }

        public renderComponent(h: CreateElement): any {
                return (
                        <article>
                                <dfn>默認樣式<small>採用預定於背景顏色表示按鈕的語義用途</small></dfn>
                                <samp>
                                        <Button responsive={true} type="Primary" text="Primary" />
                                        <Button responsive={true} type="Secondary" text="Secondary" />
                                        <Button responsive={true} type="Success" text="Success" />
                                        <Button responsive={true} type="Danger" text="Danger" />
                                        <Button responsive={true} type="Warning" text="Warning" />
                                        <Button responsive={true} type="Info" text="Info" />
                                        <Button responsive={true} type="Link" text="Link" />
                                        <Button responsive={true} type="Default" text="Default" />
                                        <br />
                                        <Button responsive={true} type="Primary" text="Primary" icon="Github" />
                                        <Button responsive={true} type="Secondary" text="Secondary" icon="Github" />
                                        <Button responsive={true} type="Success" text="Success" icon="Github" />
                                        <Button responsive={true} type="Danger" text="Danger" icon="Github" />
                                        <Button responsive={true} type="Warning" text="Warning" icon="Github" />
                                        <Button responsive={true} type="Info" text="Info" icon="Github" />
                                        <Button responsive={true} type="Link" text="Link" icon="Github" />
                                        <Button responsive={true} type="Default" text="Default" icon="Github" />
                                </samp>
                                <code></code>
                                <dfn>簡單樣式<small>採用預定於文本邊框顏色表示按鈕的語義用途</small></dfn>
                                <samp>
                                        <Button responsive={true} outline={true} type="Primary" text="Primary" />
                                        <Button responsive={true} outline={true} type="Secondary" text="Secondary" />
                                        <Button responsive={true} outline={true} type="Success" text="Success" />
                                        <Button responsive={true} outline={true} type="Danger" text="Danger" />
                                        <Button responsive={true} outline={true} type="Warning" text="Warning" />
                                        <Button responsive={true} outline={true} type="Info" text="Info" />
                                        <Button responsive={true} outline={true} type="Link" text="Link" />
                                        <Button responsive={true} outline={true} type="Default" text="Default" />
                                        <br />
                                        <Button responsive={true} outline={true} type="Primary" text="Primary" icon="Github" />
                                        <Button responsive={true} outline={true} type="Secondary" text="Secondary" icon="Github" />
                                        <Button responsive={true} outline={true} type="Success" text="Success" icon="Github" />
                                        <Button responsive={true} outline={true} type="Danger" text="Danger" icon="Github" />
                                        <Button responsive={true} outline={true} type="Warning" text="Warning" icon="Github" />
                                        <Button responsive={true} outline={true} type="Info" text="Info" icon="Github" />
                                        <Button responsive={true} outline={true} type="Link" text="Link" icon="Github" />
                                        <Button responsive={true} outline={true} type="Default" text="Default" icon="Github" />
                                </samp>
                                <code></code>
                                <dfn>按鈕尺寸<small>提供四種尺寸可以在不同場景下合理使用</small></dfn>
                                <samp>
                                        <Button responsive={true} type="Primary" icon="Github" size="Small" text="Small" />
                                        <Button responsive={true} type="Primary" icon="Github" size="Default" text="Default" />
                                        <Button responsive={true} type="Primary" icon="Github" size="Large" text="Large" />
                                        <Button responsive={true} type="Primary" icon="Github" size="Huge" text="Huge" />
                                </samp>
                                <code></code>
                                <dfn>按鈕寬度<small>設置按鈕寬度爲100%或者指定數值</small></dfn>
                                <samp>
                                        <Button type="Primary" width="10rem" text="width: 10rem" />
                                        <Button type="Primary" width="235px" text="width: 235px" />
                                        <Button type="Primary" block={true} text="width: 100%" />
                                </samp>
                                <code></code>
                                <dfn>圓角圓形<small>設置預定於邊框圓角或者圓形按鈕</small></dfn>
                                <samp>
                                        <Button responsive={true} type="Primary" circle={false} radius={true} text="Text+Radius" />
                                        <Button responsive={true} type="Primary" circle={true} radius={false} text="Text+Circle" />
                                        <Button responsive={true} type="Primary" circle={false} radius={true} text="Text+Icon+Radius" icon="Github" />
                                        <Button responsive={true} type="Primary" circle={true} radius={false} text="Text+Icon+Circle" icon="Github" />
                                        <Button type="Primary" circle={false} radius={true} icon="Github" />
                                        <Button type="Primary" circle={true} radius={false} icon="Github" />
                                </samp>
                                <code></code>
                                <dfn>背景圖片<small>帶背景圖片的按鈕可以增強可視化</small></dfn>
                                <samp>
                                        <Button responsive={true} type="Primary" icon="Github" text="Background" background="https://marketplace-images.githubusercontent.com/703/50817eba-e40e-11e7-8052-e141c95cd0ce?auto=webp&format=jpeg&width=600" />
                                        <Button responsive={true} type="Primary" icon="Github" text="Background" radius={true} background="https://marketplace-images.githubusercontent.com/703/e9f3187a-e40d-11e7-8711-2581b27761af?auto=webp&format=jpeg&width=600" />
                                        <Button responsive={true} type="Primary" text="Background" circle={true} background="https://marketplace-images.githubusercontent.com/703/8af94adc-e40e-11e7-8871-55e85b471458?auto=webp&format=jpeg&width=600" />
                                        <Button type="Primary" icon="None" background="https://avatars3.githubusercontent.com/ml/493?s=62&v=4" />
                                        <Button type="Primary" icon="None" circle={true} background="https://avatars2.githubusercontent.com/ml/246?s=106&v=4" />
                                </samp>
                                <code></code>
                                <dfn>圖標按鈕<small>帶圖標的按鈕可以增強識別度或者節省空間</small></dfn>
                                <samp>
                                        <Button responsive={true} icon="Github" type="Primary" size="Small" text="Icon+Small" />
                                        <Button responsive={true} icon="Github" type="Primary" size="Default" text="Icon+Default" />
                                        <Button responsive={true} icon="Github" type="Primary" size="Large" text="Icon+Large" />
                                        <Button responsive={true} icon="Github" type="Primary" size="Huge" text="Icon+Huge" />
                                        <br />
                                        <Button icon="Github" type="Primary" size="Small" />
                                        <Button icon="Github" type="Primary" size="Default" />
                                        <Button icon="Github" type="Primary" size="Large" />
                                        <Button icon="Github" type="Primary" size="Huge" />
                                </samp>
                                <code></code>
                                <dfn>圖標位置<small>提供四個圖標位置可以在不同場景下合理使用</small></dfn>
                                <samp>
                                        <Button responsive={true} icon="Github" type="Primary" size="Small" align="Left" text="Small+Left" />
                                        <Button responsive={true} icon="Github" type="Primary" size="Small" align="Right" text="Small+Right" />
                                        <br />
                                        <Button responsive={true} icon="Github" type="Primary" size="Small" align="Top" text="Small+Top" />
                                        <Button responsive={true} icon="Github" type="Primary" size="Small" align="Bottom" text="Small+Bottom" />
                                        <br />
                                        <Button responsive={true} icon="Github" type="Primary" size="Default" align="Left" text="Default+Left" />
                                        <Button responsive={true} icon="Github" type="Primary" size="Default" align="Right" text="Default+Right" />
                                        <br />
                                        <Button responsive={true} icon="Github" type="Primary" size="Default" align="Top" text="Default+Top" />
                                        <Button responsive={true} icon="Github" type="Primary" size="Default" align="Bottom" text="Default+Bottom" />
                                        <br />
                                        <Button responsive={true} icon="Github" type="Primary" size="Large" align="Left" text="Large+Left" />
                                        <Button responsive={true} icon="Github" type="Primary" size="Large" align="Right" text="Large+Right" />
                                        <br />
                                        <Button responsive={true} icon="Github" type="Primary" size="Large" align="Top" text="Large+Top" />
                                        <Button responsive={true} icon="Github" type="Primary" size="Large" align="Bottom" text="Large+Bottom" />
                                        <br />
                                        <Button responsive={true} icon="Github" type="Primary" size="Huge" align="Left" text="Huge+Left" />
                                        <Button responsive={true} icon="Github" type="Primary" size="Huge" align="Right" text="Huge+Right" />
                                        <br />
                                        <Button responsive={true} icon="Github" type="Primary" size="Huge" align="Top" text="Huge+Top" />
                                        <Button responsive={true} icon="Github" type="Primary" size="Huge" align="Bottom" text="Huge+Bottom" />
                                </samp>
                                <code></code>
                                <dfn>按鈕徽章<small>提供多種徽章展示新的或者未讀的信息條目</small></dfn>
                                <samp>
                                        <Button responsive={true} icon="Github" type="Primary" badge="New" text="Badge+Text" />
                                        <Button responsive={true} icon="Github" type="Primary" badge={100} text="Badge+Limit" />
                                        <Button responsive={true} icon="Github" type="Primary" badge=" " text="Badge+Circle" />
                                        <Button icon="Github" type="Primary" badge="99" align="Bottom" />
                                        <Button icon="Github" type="Primary" badge="99" align="Bottom" radius={true} />
                                        <Button icon="Github" type="Primary" badge="99" align="Bottom" circle={true} />
                                        <br />
                                        <Button responsive={true} badge="99" icon="Github" type="Primary" size="Small" align="Left" text="Small+Left" />
                                        <Button responsive={true} badge="99" icon="Github" type="Primary" size="Small" align="Right" text="Small+Right" />
                                        <Button responsive={true} badge="99" icon="Github" type="Primary" size="Small" align="Top" text="Small+Top" />
                                        <Button responsive={true} badge="99" icon="Github" type="Primary" size="Small" align="Bottom" text="Small+Bottom" />
                                        <br />
                                        <Button responsive={true} badge="99" icon="Github" type="Primary" size="Default" align="Left" text="Default+Left" />
                                        <Button responsive={true} badge="99" icon="Github" type="Primary" size="Default" align="Right" text="Default+Right" />
                                        <Button responsive={true} badge="99" icon="Github" type="Primary" size="Default" align="Top" text="Default+Top" />
                                        <Button responsive={true} badge="99" icon="Github" type="Primary" size="Default" align="Bottom" text="Default+Bottom" />
                                        <br />
                                        <Button responsive={true} badge="99" icon="Github" type="Primary" size="Large" align="Left" text="Large+Left" />
                                        <Button responsive={true} badge="99" icon="Github" type="Primary" size="Large" align="Right" text="Large+Right" />
                                        <Button responsive={true} badge="99" icon="Github" type="Primary" size="Large" align="Top" text="Large+Top" />
                                        <Button responsive={true} badge="99" icon="Github" type="Primary" size="Large" align="Bottom" text="Large+Bottom" />
                                        <br />
                                        <Button responsive={true} badge="99" icon="Github" type="Primary" size="Huge" align="Left" text="Huge+Left" />
                                        <Button responsive={true} badge="99" icon="Github" type="Primary" size="Huge" align="Right" text="Huge+Right" />
                                        <Button responsive={true} badge="99" icon="Github" type="Primary" size="Huge" align="Top" text="Huge+Top" />
                                        <Button responsive={true} badge="99" icon="Github" type="Primary" size="Huge" align="Bottom" text="Huge+Bottom" />
                                        <br />
                                        <Button block={true} type="Primary" badge={100} text="Messages" />
                                        <Button block={true} type="Primary" badge={100} text="Messages" icon="Github" size="Small" />
                                        <Button block={true} type="Primary" badge={100} text="Messages" icon="Github" size="Default" />
                                        <Button block={true} type="Primary" badge={100} text="Messages" icon="Github" size="Large" />
                                        <Button block={true} type="Primary" badge={100} text="Messages" icon="Github" size="Huge" />
                                </samp>
                                <code></code>
                                <dfn>按鈕狀態<small>除默認狀態外還有&nbsp;<strong>Active</strong>&nbsp;和&nbsp;<strong>Disabled</strong>&nbsp;兩種狀態</small></dfn>
                                <samp>
                                        <Button responsive={true} type="Primary" text="Primary+Active" active={true} />
                                        <Button responsive={true} type="Secondary" text="Secondary+Active" active={true} />
                                        <Button responsive={true} type="Success" text="Success+Active" active={true} />
                                        <Button responsive={true} type="Danger" text="Danger+Active" active={true} />
                                        <Button responsive={true} type="Warning" text="Warning+Active" active={true} />
                                        <Button responsive={true} type="Info" text="Info+Active" active={true} />
                                        <Button responsive={true} type="Link" text="Link+Active" active={true} />
                                        <Button responsive={true} type="Default" text="Default+Active" active={true} />
                                        <br />
                                        <Button responsive={true} type="Primary" text="Primary+Active+Outline" active={true} outline={true} />
                                        <Button responsive={true} type="Secondary" text="Secondary+Active+Outline" active={true} outline={true} />
                                        <Button responsive={true} type="Success" text="Success+Active+Outline" active={true} outline={true} />
                                        <Button responsive={true} type="Danger" text="Danger+Active+Outline" active={true} outline={true} />
                                        <Button responsive={true} type="Warning" text="Warning+Active+Outline" active={true} outline={true} />
                                        <Button responsive={true} type="Info" text="Info+Active+Outline" active={true} outline={true} />
                                        <Button responsive={true} type="Link" text="Link+Active+Outline" active={true} outline={true} />
                                        <Button responsive={true} type="Default" text="Default+Active+Outline" active={true} outline={true} />
                                        <br />
                                        <Button responsive={true} type="Primary" text="Primary" disabled={true} />
                                        <Button responsive={true} type="Secondary" text="Secondary" disabled={true} />
                                        <Button responsive={true} type="Success" text="Success" disabled={true} />
                                        <Button responsive={true} type="Danger" text="Danger" disabled={true} />
                                        <Button responsive={true} type="Warning" text="Warning" disabled={true} />
                                        <Button responsive={true} type="Info" text="Info" disabled={true} />
                                        <Button responsive={true} type="Link" text="Link" disabled={true} />
                                        <Button responsive={true} type="Default" text="Default+Disabled" disabled={true} />
                                        <br />
                                        <Button responsive={true} type="Primary" text="Primary" disabled={true} outline={true} />
                                        <Button responsive={true} type="Secondary" text="Secondary" disabled={true} outline={true} />
                                        <Button responsive={true} type="Success" text="Success" disabled={true} outline={true} />
                                        <Button responsive={true} type="Danger" text="Danger" disabled={true} outline={true} />
                                        <Button responsive={true} type="Warning" text="Warning" disabled={true} outline={true} />
                                        <Button responsive={true} type="Info" text="Info" disabled={true} outline={true} />
                                        <Button responsive={true} type="Link" text="Link" disabled={true} outline={true} />
                                        <Button responsive={true} type="Default" text="Default+Disabled+Outline" disabled={true} outline={true} />
                                </samp>
                                <code></code>
                                <dfn>提示文本<small>合理使用提示文本可以有助於對按鈕功能的理解</small></dfn>
                                <samp>
                                        <table class={theme.themePrefix + 'box'}>
                                                <tr>
                                                        <td></td>
                                                        <td><Button type="Primary" tooltip={{ text: 'Top提示文本', placement: 'Top' }} text="上邊" /></td>
                                                        <td></td>
                                                </tr>
                                                <tr>
                                                        <td><Button type="Primary" tooltip={{ text: 'Left提示文本', placement: 'Left' }} text="左邊" /></td>
                                                        <td></td>
                                                        <td><Button type="Primary" tooltip={{ text: 'Right提示文本', placement: 'Right' }} text="右邊" /></td>
                                                </tr>
                                                <tr>
                                                        <td></td>
                                                        <td><Button type="Primary" tooltip={{ text: 'Bottom提示文本', placement: 'Bottom' }} text="下邊" /></td>
                                                        <td></td>
                                                </tr>
                                        </table>
                                </samp>
                                <code></code>
                                <dfn>單擊事件<small>當&nbsp;<strong>Disabled</strong>&nbsp;狀態時其單擊事件是無效的</small></dfn>
                                <samp>
                                        <Button responsive={true} type="Primary" text="Click+Enable" eventClick={() => window.alert('Are you OK~')} />
                                        <Button responsive={true} type="Primary" text="Click+Unenable" eventClick={() => window.alert('Are you OK~')} disabled={true} />
                                </samp>
                                <code></code>
                                <dfn>按鈕組<small>常用於多項類似操作的按鈕</small></dfn>
                                <samp></samp>
                                <code></code>
                        </article>
                )
        }
        /*
public renderComponent0(h: CreateElement): any {
return (
<article>
                        <dfn>按鈕類型</dfn>
                        <samp>
                                <Button width="15rem" type="Primary" text="Primary" />
                                <Button width="15rem" type="Secondary" text="Secondary" />
                                <Button width="15rem" type="Success" text="Success" />
                                <Button width="15rem" type="Danger" text="Danger" />
                                <Button width="15rem" type="Warning" text="Warning"
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
                                        <span class="tags">&lt;Bu
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
                                <dfn>按鈕徽章</dfn>
                                <samp>
                                        <Button width="15rem" type="Primary" icon="Github" align="Default" badge="8" text="Center+Badge" />
                                        <Button width="15rem" type="Primary" icon="Github" align="Default" badge="New" text="Center+Badge" />
                                        <Button width="15rem" type="Primary" icon="Github" align="Default" badge=" " text="Center+Badge" />
                                        <br />
                                        <Button width="15rem" type="Primary" icon="Github" align="Left" badge="8" text="Left+Badge" size="Small" />
                                        <Button width="15rem" type="Primary" icon="Github" align="Left" badge="8" text="Left+Badge" size="Default" />
                                        <Button width="15rem" type="Primary" icon="Github" align="Left" badge="8" text="Left+Badge" size="Large" />
                                        <Button width="15rem" type="Primary" icon="Github" align="Left" badge="8" text="Left+Badge" size="Huge" />
                                        <br />
                                        <Button width="15rem" type="Primary" icon="Github" align="Right" badge="8" text="Right+Badge" size="Small" />
                                        <Button width="15rem" type="Primary" icon="Github" align="Right" badge="8" text="Right+Badge" size="Default" />
                                        <Button width="15rem" type="Primary" icon="Github" align="Right" badge="8" text="Right+Badge" size="Large" />
                                        <Button width="15rem" type="Primary" icon="Github" align="Right" badge="8" text="Right+Badge" size="Huge" />
                                        <br />
                                        <Button width="15rem" type="Primary" icon="Github" align="Top" badge="8" text="Right+Badge" size="Small" />
                                        <Button width="15rem" type="Primary" icon="Github" align="Top" badge="8" text="Right+Badge" size="Default" />
                                        <Button width="15rem" type="Primary" icon="Github" align="Top" badge="8" text="Right+Badge" size="Large" />
                                        <Button width="15rem" type="Primary" icon="Github" align="Top" badge="8" text="Right+Badge" size="Huge" />
                                        <br />
                                        <Button width="15rem" type="Primary" icon="Github" align="Bottom" badge="8" text="Right+Badge" size="Small" />
                                        <Button width="15rem" type="Primary" icon="Github" align="Bottom" badge="8" text="Right+Badge" size="Default" />
                                        <Button width="15rem" type="Primary" icon="Github" align="Bottom" badge="8" text="Right+Badge" size="Large" />
                                        <Button width="15rem" type="Primary" icon="Github" align="Bottom" badge="8" text="Right+Badge" size="Huge" />
                                </samp>
                                <dfn>圓形圓角</dfn>
                                <samp>
                                        <Button type="Primary" circle={false} radius={false} icon="Github" text="Icon-Circle-Radius+Text" />
                                        <Button type="Primary" circle={false} radius={true} icon="Github" text="Icon-Circle+Radius+Text" />
                                        <Button type="Primary" circle={true} radius={false} icon="Github" text="Icon+Circle-Radius+Text" />
                                        <Button type="Primary" circle={true} radius={false} icon="Github" />
                                </samp>
                                <code></code>
                                <dfn>按鈕寬度</dfn>
                                <samp>
                                        <Button type="Primary" width="10rem" text="width: 10rem" />
                                        <Button type="Primary" width="15rem" text="width: 15rem" />
                                        <Button type="Primary" block={true} text="width: 100%" />
                                </samp>
                                <code></code>
                                <dfn>按鈕狀態</dfn>
                                <samp>
                                        <Button width="15rem" type="Primary" text="Primary+Active" active={true} />
                                        <Button width="15rem" type="Secondary" text="Secondary+Active" active={true} />
                                        <Button width="15rem" type="Success" text="Success+Active" active={true} />
                                        <Button width="15rem" type="Danger" text="Danger+Active" active={true} />
                                        <Button width="15rem" type="Warning" text="Warning+Active" active={true} />
                                        <Button width="15rem" type="Info" text="Info+Active" active={true} />
                                        <Button width="15rem" type="Link" text="Link+Active" active={true} />
                                        <Button width="15rem" type="Default" text="Default+Active" active={true} />
                                        <br />
                                        <Button width="15rem" type="Primary" text="Primary+Active+Outline" active={true} outline={true} />
                                        <Button width="15rem" type="Secondary" text="Secondary+Active+Outline" active={true} outline={true} />
                                        <Button width="15rem" type="Success" text="Success+Active+Outline" active={true} outline={true} />
                                        <Button width="15rem" type="Danger" text="Danger+Active+Outline" active={true} outline={true} />
                                        <Button width="15rem" type="Warning" text="Warning+Active+Outline" active={true} outline={true} />
                                        <Button width="15rem" type="Info" text="Info+Active+Outline" active={true} outline={true} />
                                        <Button width="15rem" type="Link" text="Link+Active+Outline" active={true} outline={true} />
                                        <Button width="15rem" type="Default" text="Default+Active+Outline" active={true} outline={true} />
                                        <br />
                                        <Button width="15rem" type="Primary" text="Primary" disabled={true} />
                                        <Button width="15rem" type="Secondary" text="Secondary" disabled={true} />
                                        <Button width="15rem" type="Success" text="Success" disabled={true} />
                                        <Button width="15rem" type="Danger" text="Danger" disabled={true} />
                                        <Button width="15rem" type="Warning" text="Warning" disabled={true} />
                                        <Button width="15rem" type="Info" text="Info" disabled={true} />
                                        <Button width="15rem" type="Link" text="Link" disabled={true} />
                                        <Button width="15rem" type="Default" text="Default+Disabled" disabled={true} />
                                        <br />
                                        <Button width="15rem" type="Primary" text="Primary" disabled={true} outline={true} />
                                        <Button width="15rem" type="Secondary" text="Secondary" disabled={true} outline={true} />
                                        <Button width="15rem" type="Success" text="Success" disabled={true} outline={true} />
                                        <Button width="15rem" type="Danger" text="Danger" disabled={true} outline={true} />
                                        <Button width="15rem" type="Warning" text="Warning" disabled={true} outline={true} />
                                        <Button width="15rem" type="Info" text="Info" disabled={true} outline={true} />
                                        <Button width="15rem" type="Link" text="Link" disabled={true} outline={true} />
                                        <Button width="15rem" type="Default" text="Default+Disabled+Outline" disabled={true} outline={true} />
                                </samp>
                                <code>
                                </code>
                                <dfn>提示文本</dfn>
                                <samp>
                                        <table class={theme.themePrefix + 'box'}>
                                                <tr>
                                                        <td></td>
                                                        <td><Button type="Primary" tooltip={{ text: 'Top提示文本', placement: 'Top' }} text="上邊" /></td>
                                                        <td></td>
                                                </tr>
                                                <tr>
                                                        <td><Button type="Primary" tooltip={{ text: 'Left提示文本', placement: 'Left' }} text="左邊" /></td>
                                                        <td></td>
                                                        <td><Button type="Primary" tooltip={{ text: 'Right提示文本', placement: 'Right' }} text="右邊" /></td>
                                                </tr>
                                                <tr>
                                                        <td></td>
                                                        <td><Button type="Primary" tooltip={{ text: 'Bottom提示文本', placement: 'Bottom' }} text="下邊" /></td>
                                                        <td></td>
                                                </tr>
                                        </table>
                                </samp>
                                <code></code>
                                <dfn>點擊事件</dfn>
                                <samp>
                                        <Button type="Primary" text="Click+Enable" eventClick={() => alert('Are you OK~')} />
                                        <Button type="Primary" text="Click+Unenable" eventClick={() => alert('Are you OK~')} disabled={true} />
                                </samp>
                                <code>
                                        <p>
                                                <span class="tags">&lt;Button</span>
                                                <span class="attr">type=</span>
                                                <span class="info">"Primary"</span>
                                                <span class="attr">text=</span>
                                                <span class="info">"Click+Enable"</span>
                                                <span class="attr">eventClick=</span>
                                                <span class="info">&#123;&#40;&#41; =&gt; alert&#40;'Are you OK~'&#41;&#125;</span>
                                                <span class="tags">&nbsp;/&gt;</span>
                                        </p>
                                        <p>
                                                <span class="tags">&lt;Button</span>
                                                <span class="attr">type=</span>
                                                <span class="info">"Primary"</span>
                                                <span class="attr">text=</span>
                                                <span class="info">"Click+Unenable"</span>
                                                <span class="attr">eventClick=</span>
                                                <span class="info">&#123;&#40;&#41; =&gt; alert&#40;'Are you OK~'&#41;&#125;</span>
                                                <span class="attr">disabled=</span>
                                                <span class="info">&#123;true&#125;</span>
                                                <span class="tags">&nbsp;/&gt;</span>
                                        </p>
                                </code>
                                <dfn>按鈕組</dfn>
                                <samp>
                                        <ButtonGroup>
                                                <Button width="8rem" radius={true} type="Primary" text="Primary" active={this.stateActive.Primary || false} eventClick={() => this.setActive('Primary')} />
                                                <Button width="8rem" radius={true} type="Success" text="Success" active={this.stateActive.Success || false} eventClick={() => this.setActive('Success')} />
                                                <Button width="8rem" radius={true} type="Warning" text="Warning" active={this.stateActive.Warning || false} eventClick={() => this.setActive('Warning')} />
                                                <Button width="8rem" radius={true} type="Info" text="Info" active={this.stateActive.Info || false} eventClick={() => this.setActive('Info')} />
                                        </ButtonGroup>
                                </samp>
                                <code></code>
</article>
                        )
                }
        */

}