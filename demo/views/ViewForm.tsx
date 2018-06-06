import Vue, { CreateElement } from 'vue'
import { Component, Prop, Provide } from 'vue-property-decorator'
import { vfluents, Button, TextBlock, Form } from '../../components'
import { ViewCommon } from '../components'
import { theme } from '../config'

@Component
export default class ViewForm extends ViewCommon {
        @Provide() name: string = 'Form'
        @Provide() description: string = '基礎表單組件'
        @Provide() modelForm: any = {}

        public componentView(h: CreateElement) {
                return (
                        <article>
                                <h5>按鈕類型</h5>
                                <section>
                                        <Form layout="Vertical" model={this.modelForm}>
                                        </Form>
                                </section>
                        </article>
                )
        }
}