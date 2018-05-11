import Vue, { CreateElement } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { vfluents } from '../vfluents'
import { removeEmpty } from '../utils'

@Component
export default class Dashboard extends vfluents {
        public render(h: CreateElement) {
                return (
                        <div class={removeEmpty([
                                'container-fluid',
                                vfluents.themePrefix + 'dashboard',
                                this.className
                        ])}></div>
                )
        }
}