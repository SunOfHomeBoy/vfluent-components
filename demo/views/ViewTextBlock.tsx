import { Component, CreateElement } from 'vue-component-decorator'
import { TextBlock } from '../../components'
import { ViewComponent } from '../components'
import { theme } from '../config'

@Component
export class ViewTextBlock extends ViewComponent {
        public created() {
                this.props.name = 'TextBlock'
                this.props.description = '標題、段落和頁腳等常用文本組件'
        }

        public renderComponent(h: CreateElement): any {
                return (
                        <article>
                                <h4>標題文本</h4>
                                <section>
                                        <TextBlock type="Header">H1 Header<span class={theme.themePrefix + 'size'}>46px/56px</span></TextBlock>
                                        <TextBlock type="SubHeader">H2 SubHeader</TextBlock>
                                </section>
                                <code></code>
                        </article>
                )
        }
}