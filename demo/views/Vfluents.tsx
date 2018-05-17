import Vue, { CreateElement } from 'vue'
import { Component, Prop, Provide } from 'vue-property-decorator'
import { vfluents, Dashboard } from '../../components'
import { theme } from '../config'

@Component
export default class Vfluents extends Dashboard {
        @Provide() stateSize: string = 'huge'
        @Provide() stateCollapsed: boolean = true
        @Provide() stateBrandLogo: string = ''
        @Provide() stateBrandName: string = 'Vfluents Component'
        @Provide() stateBrandHref: string = ''
}
