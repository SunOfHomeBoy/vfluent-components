import { Component, CreateElement } from 'vue-component-decorator'
import { vfluents } from '../../components'
import { ViewComponent } from '../components'

@Component
export class ViewImage extends ViewComponent {
        public static readonly img0: string = 'https://avatars0.githubusercontent.com/u/30998388?s=200&v=4'
        public static readonly img1: string = 'https://developer.github.com/assets/images/hero-circuit-bg.svg'

        public created() {
                this.props.name = 'Image'
                this.props.description = '響應式圖片組件'
        }

        public renderComponent(h: CreateElement): any {
                return (
                        <article>
                                <dfn>原圖展示</dfn>
                                <samp>
                                </samp>
                        </article>
                )
        }
}