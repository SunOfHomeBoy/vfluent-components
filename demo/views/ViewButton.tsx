import { Component, CreateElement } from 'vue-component-decorator'
import { Button } from '../../components'
import { ViewComponent } from '../components'
import { theme } from '../config'

@Component
export class ViewButton extends ViewComponent {
        public created() {
                this.props.name = 'Button'
                this.props.description = '常用按鈕組件'
        }

        public renderComponent(h: CreateElement): any {
                return (
                        <article>
                                <dfn>按鈕類型</dfn>
                                <samp>
                                        <Button width="10rem" type="Primary" text="Primary" />
                                        <Button width="10rem" type="Secondary" text="Secondary" />
                                        <Button width="10rem" type="Success" text="Success" />
                                        <Button width="10rem" type="Danger" text="Danger" />
                                        <Button width="10rem" type="Warning" text="Warning" />
                                        <Button width="10rem" type="Info" text="Info" />
                                        <Button width="10rem" type="Link" text="Link" />
                                        <Button width="10rem" type="Default" text="Default" />
                                </samp>
                                <code></code>
                                <dfn>邊框樣式</dfn>
                        </article>
                )
        }
}