import { Component, CreateElement } from 'vue-component-decorator'
import { Tooltip, vfluents, Button } from '../../components'
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
                                        <Button text="ok" tooltip={{ text: '一二三四無六期把就令', placement: 'Top' }} /><br /><br />
                                        <Button text="ok" tooltip={{ text: 'QAZwsx1', placement: 'Right' }} />
                                        <Tooltip text="一二三四無六" placement="Left"><a class="ok">test</a></Tooltip>
                                        <Tooltip text="OK123456" placement="Left">okpklas</Tooltip>
                                </samp>
                        </article>
                )
        }
}