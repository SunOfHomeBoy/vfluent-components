import Vue, { CreateElement } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { vfluents } from '../vfluents'
import './dashboard.scss'

@Component
export class Dashboard extends vfluents {
        @Prop() collapsed: boolean

        public component(h: CreateElement) {
                return (
                        <div class={vfluents.cls([
                                'container-fluid',
                                vfluents.themePrefix + 'dashboard',
                                this.collapsed
                                        ? vfluents.themePrefix + 'dashboard-collapsed'
                                        : '',
                                this.className
                        ])}>
                                <div class="row">
                                        <aside class={vfluents.cls([
                                                'col-10',
                                                'col-md-4',
                                                'col-lg-3',
                                                'col-xl-2',
                                                'fadeinL',
                                                vfluents.themePrefix + 'dashboard-side'
                                        ])} onClick={this.closeCollapse}></aside>
                                        <main class={vfluents.cls([
                                                'col-12',
                                                'col-md-8',
                                                'col-lg-9',
                                                'col-xl-10',
                                                vfluents.themePrefix + 'dashboard-main'
                                        ])} onClick={this.openCollapse}></main>
                                </div>
                        </div >
                )
        }

        public closeCollapse() {
                this.collapsed = false
        }

        public openCollapse() {
                this.collapsed = true
        }
}