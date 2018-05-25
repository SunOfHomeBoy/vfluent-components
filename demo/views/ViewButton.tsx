import Vue, { CreateElement } from 'vue'
import { Component, Prop, Provide } from 'vue-property-decorator'
import { vfluents, Button } from '../../components'
import { ViewCommon } from '../components'
import { theme } from '../config'

@Component
export default class ViewButton extends ViewCommon {
        @Provide() name: string = 'Button'
        @Provide() description: string = '常用操作按钮'

        public componentView(h: CreateElement) {
                return (
                        <article>
                                <h4>基本用法</h4>
                                <section>
                                        <p class={theme.themePrefix + 'button-types'}>
                                                類型：
                                                <Button type="Default" text="Default" />
                                                <Button type="Primary" text="Primary" />
                                                <Button type="Secondary" text="Secondary" />
                                                <Button type="Success" text="Success" />
                                                <Button type="Danger" text="Danger" />
                                                <Button type="Warning" text="Warning" />
                                                <Button type="Info" text="Info" />
                                                <Button type="Light" text="Light" />
                                                <Button type="Dark" text="Dark" />
                                                <Button type="Link" text="Link" />
                                        </p>
                                        <p class={theme.themePrefix + 'button-sizes'}>
                                                尺寸：
                                                <Button type="Primary" size="Small" text="Small" />
                                                <Button type="Primary" size="Default" text="Default" />
                                                <Button type="Primary" size="Large" text="Large" />
                                                <Button type="Primary" size="Huge" text="Huge" />
                                        </p>
                                        <p class={theme.themePrefix + 'button-icons'}>
                                                圖標：
                                                <Button type="Primary" size="Small" text="Icon+Primary+Small" icon="Checkmark" />
                                                <Button type="Warning" size="Default" text="Icon+Warning+Default" icon="Checkmark" />
                                                <Button type="Light" size="Large" text="Icon+Light+Large" icon="Checkmark" />
                                                <Button type="Dark" size="Large" text="Icon+Dark+Large" icon="Checkmark" />
                                                <Button type="Link" size="Huge" text="Icon+Link+Huge" icon="Checkmark" />
                                                <Button type="Success" size="Huge" text="Icon+Success+Huge" icon="Checkmark" />
                                                <Button type="Default" size="Huge" text="Icon+Default+Huge" icon="Checkmark" />
                                        </p>
                                </section>
                                <code>
                                </code>
                        </article>
                )
        }
}