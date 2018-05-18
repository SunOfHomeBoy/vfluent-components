import Vue, { CreateElement } from 'vue'
import { Component, Prop, Provide } from 'vue-property-decorator'
import { vfluents, Dashboard } from '../../components'
import { theme } from '../config'

@Component
export default class Vfluents extends Dashboard {
        @Provide() stateSize: string = 'default'
        @Provide() stateCollapsed: boolean = false
        @Provide() stateBrandLogo: string = 'home'
        @Provide() stateBrandName: string = 'Vfluents Component'
        @Provide() stateBrandHref: string = ''
        public innerHTML: any = (
                <router-view></router-view>
        )
}
