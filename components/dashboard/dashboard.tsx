import Vue, { CreateElement } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { vfluents } from '../vfluents'
import './dashboard.scss'

@Component
export class Dashboard extends vfluents {
        public render(h: CreateElement) {
                return (
                        <div class={vfluents.cls([
                                'container-fluid',
                                vfluents.themePrefix + 'dashboard',
                                this.className
                        ])}></div>
                )
        }
}