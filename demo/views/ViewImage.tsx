import { Component, CreateElement } from 'vue-component-decorator'
import { Image } from '../../components'
import { ViewComponent } from '../components'

@Component
export class ViewImage extends ViewComponent {
        public name: string = 'Image'
        public description: string = '響應式圖片組件'

        public renderComponent(h: CreateElement): any {
                return (
                        <article>
                                <dfn></dfn>
                                <samp></samp>
                        </article>
                )
        }
}