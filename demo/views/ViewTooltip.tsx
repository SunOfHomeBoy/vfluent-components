import { Component, CreateElement } from 'vue-component-decorator'
import { Tooltip, vfluents } from '../../components'
import { ViewComponent } from '../components'
import { theme } from '../config'

@Component
export class ViewTooltip extends ViewComponent {
        public created() {
                this.props.name = 'Tooltip'
                this.props.description = '提示文本組件'
        }

        public renderComponent(h: CreateElement): any {
                return (
                        <article>
                                <dfn>常用用法</dfn>
                                <samp>
                                        <table class={theme.themePrefix + 'box'}>
                                                <tr>
                                                        <td></td>
                                                        <th>上左<Tooltip text="Top-start" placement="Top-start" /></th>
                                                        <th>上邊<Tooltip text="Top-start" placement="Top" /></th>
                                                        <th>上右<Tooltip text="Top-start" placement="Top-end" /></th>
                                                        <td></td>
                                                </tr>
                                                <tr>
                                                        <th>左上<Tooltip text="Left-start" placement="Left-start" /></th>
                                                        <td colspan="3"></td>
                                                        <th>右上<Tooltip text="Right-start" placement="Right-start" /></th>
                                                </tr>
                                                <tr>
                                                        <th>左上<Tooltip text="Left-start" placement="Left-start" /></th>
                                                        <td colspan="3"></td>
                                                        <th>右上<Tooltip text="Right-start" placement="Right-start" /></th>
                                                </tr>
                                                <tr>
                                                        <th>左上<Tooltip text="Left-start" placement="Left-start" /></th>
                                                        <td colspan="3"></td>
                                                        <th>右上<Tooltip text="Right-start" placement="Right-start" /></th>
                                                </tr>
                                                <tr>
                                                        <td></td>
                                                        <th>下左<Tooltip text="Bottom-start" placement="下左" /></th>
                                                        <th>下邊<Tooltip text="Bottom提示文字" placement="Bottom" /></th>
                                                        <th>下右<Tooltip text="Bottom-end" placement="Bottom-end" /></th>
                                                        <td></td>
                                                </tr>
                                        </table>
                                </samp>
                        </article>
                )
        }
}