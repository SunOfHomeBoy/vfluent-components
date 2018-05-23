import Vue, { CreateElement } from 'vue'
import { Component, Prop, Provide } from 'vue-property-decorator'
import { vfluents, TextBlock } from '../../components'
import { ViewCommon } from '../components'
import { theme } from '../config'

@Component
export default class ViewTextBlock extends ViewCommon {
        @Provide() name: string = 'TextBlock'
        @Provide() description: string = '頁眉、頁腳、標題和段落等常用文本組件'

        public componentView(h: CreateElement) {
                return (
                        <article>
                                <section>
                                        <table class="table">
                                                <thead>
                                                        <tr>
                                                                <th width="60%">Type</th>
                                                                <th width="20%">Size</th>
                                                                <th width="20%">LineHeight</th>
                                                        </tr>
                                                </thead>
                                                <tbody>
                                                        <tr>
                                                                <td>
                                                                        <TextBlock type="Header">Header</TextBlock>
                                                                </td>
                                                                <td></td>
                                                                <td></td>
                                                        </tr>
                                                        <tr>
                                                                <td>
                                                                        <TextBlock type="SubHeader">SubHeader</TextBlock>
                                                                </td>
                                                                <td></td>
                                                                <td></td>
                                                        </tr>
                                                        <tr>
                                                                <td>
                                                                        <TextBlock type="Title">Title</TextBlock>
                                                                </td>
                                                                <td></td>
                                                                <td></td>
                                                        </tr>
                                                        <tr>
                                                                <td>
                                                                        <TextBlock type="SubTitle">SubTitle</TextBlock>
                                                                </td>
                                                                <td></td>
                                                                <td></td>
                                                        </tr>
                                                        <tr>
                                                                <td>
                                                                        <TextBlock type="Base">Base</TextBlock>
                                                                </td>
                                                                <td></td>
                                                                <td></td>
                                                        </tr>
                                                        <tr>
                                                                <td>
                                                                        <TextBlock type="Caption">Caption</TextBlock>
                                                                </td>
                                                                <td></td>
                                                                <td></td>
                                                        </tr>
                                                </tbody>
                                        </table>
                                </section>
                                <code></code>
                        </article>
                )
        }
}