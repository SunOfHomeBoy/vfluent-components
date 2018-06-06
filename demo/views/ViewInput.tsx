import Vue, { CreateElement } from 'vue'
import { Component, Prop, Provide } from 'vue-property-decorator'
import { vfluents, Button, TextBlock, Form } from '../../components'
import { ViewCommon } from '../components'
import { theme } from '../config'

@Component
export default class ViewInput extends ViewCommon {
        @Provide() name: string = 'Input'
        @Provide() description: string = '輸入框組件'

        public componentView(h: CreateElement) {
                return (
                        <article>
                                <h5>輸入框</h5>
                                <section>
                                </section>
                        </article>
                )
        }
}