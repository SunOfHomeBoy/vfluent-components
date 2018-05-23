import Vue, { CreateElement } from 'vue'
import { Component, Prop, Provide } from 'vue-property-decorator'
import { vfluents, Button } from '../../components'
import { ViewCommon } from '../components'
import { theme } from '../config'

@Component
export default class ViewButton extends ViewCommon {
        @Provide() name: string = 'button'
        @Provide() title: string = '按鈕'
        @Provide() description: string = '常用的操作按钮'

        public componentView(h: CreateElement) {
                return (
                        <article>

                        </article>
                )
        }
}