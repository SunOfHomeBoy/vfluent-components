import Vue, { CreateElement } from 'vue'
import { Component, Prop, Provide, Watch, Model } from 'vue-property-decorator'
import { vfluents, Button, TextBlock, Form, Input } from '../../components'
import { ViewCommon } from '../components'
import { theme } from '../config'
import { mixins } from 'vue-class-component';

@Component
export default class ViewInput extends ViewCommon {
        @Provide() name: string = 'Input'
        @Provide() description: string = '輸入框組件'
        @Provide() model: any = { binding: '' }

        public componentView(h: CreateElement) {
                return (
                        <article>
                                <h5>類型</h5>
                                <section>
                                        <Input type="Text" label="文本" placeholder="請輸入任意文本" />
                                        <br />
                                        <Input type="Password" label="密码" placeholder="密碼長度爲6-20個字符,由英文字母、數字及下劃線組成且區分大小寫" errmsg="密碼長度爲6-20個字符,由英文字母、數字及下劃線組成且區分大小寫" />
                                        <br />
                                        <Input type="Email" label="Email" placeholder="請輸入正確的電子郵箱地址" errmsg="請輸入正確的電子郵箱地址" />
                                        <br />
                                        <Input type="URL" label="URL" placeholder="比如: https://hjboss.github.io/vfluents" errmsg="請輸入正確的網頁地址" />
                                        <br />
                                        <Input type="Number" label="數字" placeholder="僅允許輸入0-9等阿拉伯數字" />
                                        <br />
                                        <Input type="Search" label="搜索" placeholder="請輸入搜索關鍵詞" eventSearch={(e: any, keywords: string) => alert(keywords)} />
                                        <br />
                                        <Input type="Tel" label="電話" placeholder="請填寫您的電話號碼" />
                                </section>
                                <code class="language-html"></code>
                                <h5>標籤</h5>
                                <section>
                                        <Input label="普通標籤" />
                                        <br />
                                        <Input label="自動寬度" labelWidth={0} />
                                        <br />
                                        <Input label="默認對齊" labelWidth={12} labelAlign="Left" />
                                        <br />
                                        <Input label="居中對齊" labelWidth={12} labelAlign="Middle" />
                                        <br />
                                        <Input label="右側對齊" labelWidth={12} labelAlign="Right" />
                                </section>
                                <code class="language-html"></code>
                                <h5>樣式</h5>
                                <section>
                                        <Input placeholder="普通字體樣式" />
                                        <Input placeholder="等寬字體樣式" monospace={true} />
                                        <Input placeholder="無邊框樣式" border={false} />
                                        <Input placeholder="小型尺寸" size="Small" />
                                        <Input placeholder="普通尺寸" size="Default" />
                                        <Input placeholder="較大尺寸" size="Large" />
                                        <Input placeholder="大型尺寸" size="Huge" />
                                </section>
                                <code class="language-html"></code>
                                <h5>數據綁定</h5>
                                <section>
                                        <Input
                                                label="輸入值："
                                                labelWidth={0}
                                                data={this.model.binding}
                                                placeholder={'請輸入數據'}
                                                eventInput={(e: any, v: string) => this.model.binding = v}
                                                eventChange={() => alert('Success Changed')}
                                        />
                                        <br />
                                        <TextBlock>輸出值：<strong>{this.model.binding}</strong></TextBlock>
                                </section>
                        </article>
                )
        }
}