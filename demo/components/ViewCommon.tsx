import Vue, { CreateElement } from 'vue'
import { Component, Prop, Provide } from 'vue-property-decorator'
import { vfluents, TextBlock } from '../../components'
import { theme } from '../config'

@Component
export class ViewCommon extends vfluents {
        @Provide() name: string
        @Provide() description: string

        public component(h: CreateElement) {
                return (
                        <div class={vfluents.cls([
                                theme.themePrefix + 'view-common',
                                theme.themePrefix + 'view-' + this.name
                        ])}>
                                <TextBlock type="Header" class={theme.themePrefix + 'view-header'}>
                                        {this.name}
                                        <small>{this.description}</small>
                                </TextBlock>
                                {this.componentView(h)}
                        </div>
                )
        }

        protected componentView(h: CreateElement) { }
}