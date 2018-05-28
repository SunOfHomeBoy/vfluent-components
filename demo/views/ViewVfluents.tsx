import Vue, { CreateElement } from 'vue'
import { Component, Prop, Provide } from 'vue-property-decorator'
import { vfluents, Dashboard } from '../../components'

@Component
export default class ViewVfluents extends Dashboard {
        @Provide() size: string = 'Default'
        @Provide() collapsed: boolean = false
        @Provide() brandLogo: string = 'Hierarchy'
        @Provide() brandName: string = 'vFluents'
        @Provide() account: string = 'hongjiangproject@yahoo.com'
        @Provide() headerImg0: string = 'https://avatars1.githubusercontent.com/u/20560933?s=460&v=4'
}
