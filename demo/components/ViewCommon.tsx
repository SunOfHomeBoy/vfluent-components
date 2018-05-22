import Vue, { CreateElement } from 'vue'
import { Component, Prop, Provide } from 'vue-property-decorator'
import { vfluents, Button } from '../../components'
import { theme } from '../config'

@Component
export class ViewCommon extends vfluents {
        @Provide() name: string
        @Provide() title: string
        @Provide() description: string

        public component(h: CreateElement) {
                return (
                        <div class={vfluents.cls([
                                theme.themePrefix + 'view-common',
                                theme.themePrefix + 'view-' + String(this.name).toLowerCase()
                        ])}>
                        </div>
                )
        }

        protected componentView(h: CreateElement) { }
}