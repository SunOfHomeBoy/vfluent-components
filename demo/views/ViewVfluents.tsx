import Vue, { CreateElement } from 'vue'
import { Component, Prop, Provide } from 'vue-property-decorator'
import { vfluents, Dashboard } from '../../components'

@Component
export default class ViewVfluents extends Dashboard {
        @Provide() size: string = 'default'
        @Provide() collapsed: boolean = false
        @Provide() brandLogo: string = 'Hierarchy'
        @Provide() brandName: string = 'Vfluents Component'
}
