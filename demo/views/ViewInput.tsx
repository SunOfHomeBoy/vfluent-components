import Vue, { CreateElement } from 'vue'
import { Component, Prop, Provide, Watch, Model } from 'vue-property-decorator'
import { vfluents, Button, TextBlock, Form, Input } from '../../components'
import { ViewCommon } from '../components'
import { theme } from '../config'

@Component
export default class ViewInput extends ViewCommon {
        @Provide() name: string = 'Input'
        @Provide() description: string = '輸入框組件'
        @Provide() model: any = { v0: 'asdf' }

        public componentView(h: CreateElement) {
                return (
                        <article>
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
                                <h5>數據綁定</h5>
                                <section>
                                        <Input label="輸入值：" labelWidth={0} eventInput={(e: any, v: string) => this.model.v0 = v} />
                                        <br />
                                        <TextBlock>輸出值：<strong>{this.model.v0}</strong></TextBlock>
                                </section>
                        </article>
                )
        }
}