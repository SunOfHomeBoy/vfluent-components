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
                                        <Tooltip content="ok"></Tooltip>

                                </samp>
                        </article>
                )
        }
}