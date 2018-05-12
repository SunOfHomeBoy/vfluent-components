import Vue, { CreateElement } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { vfluents } from '../vfluents'
import './dashboard.scss'

@Component
export class Dashboard extends vfluents {
        public render(h: CreateElement) {
                console.log(this.$el.innerHTML)
                return (
                        <div class={vfluents.cls([
                                'container-fluid',
                                vfluents.themePrefix + 'dashboard',
                                this.className
                        ])}>
                                <section></section>
                                <main></main>
                        </div>
                )
        }
}