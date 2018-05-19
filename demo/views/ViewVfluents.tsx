import Vue, { CreateElement } from 'vue'
import { Component, Prop, Provide } from 'vue-property-decorator'
import { vfluents, Dashboard } from '../../components'

@Component
export default class ViewVfluents extends vfluents {
        @Provide() stateCollapsed: boolean = false

        public component(h: CreateElement) {
                return (
                        <Dashboard
                                size="small"
                                collapsed={this.stateCollapsed}
                                brandLogo="Hierarchy"
                                brandName="Vfluents Component"
                                eventBrand={this.eventCollapsed}
                        >
                                <router-view></router-view>
                        </Dashboard >
                )
        }

        public eventCollapsed() {
                console.log('ok')
                this.stateCollapsed = !this.stateCollapsed
        }
}
