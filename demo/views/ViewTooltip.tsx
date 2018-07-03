import { Component, CreateElement } from 'vue-component-decorator'
import { Tooltip, vfluents, Button } from '../../components'
import { ViewComponent } from '../components'
import { theme } from '../config'

@Component
export class ViewTooltip extends ViewComponent {
        public name: string = 'Tooltip'
        public description: string = '提示文本組件'

        public renderComponent(h: CreateElement): any {
                return (
                        <article>
                                <dfn>常用用法</dfn>
                                <samp>
                                        <table class={theme.themePrefix + 'box'}>
                                                <tr>
                                                        <td></td>
                                                        <th>
                                                                <Tooltip text="Top提示文本" placement="Top">
                                                                        上邊
                                                                </Tooltip>
                                                        </th>
                                                        <td></td>
                                                </tr>
                                                <tr>
                                                        <th>
                                                                <Tooltip text="Left提示文本" placement="Left">
                                                                        左邊
                                                                </Tooltip>
                                                        </th>
                                                        <td></td>
                                                        <th>
                                                                <Tooltip text="Right提示文本" placement="Right">
                                                                        右邊
                                                                </Tooltip>
                                                        </th>
                                                </tr>
                                                <tr>
                                                        <td></td>
                                                        <th>
                                                                <Tooltip text="Bottom提示文本" placement="Bottom">
                                                                        下邊
                                                                </Tooltip>
                                                        </th>
                                                        <td></td>
                                                </tr>
                                        </table>
                                </samp>
                                <code>

                                </code>
                        </article>
                )
        }
}