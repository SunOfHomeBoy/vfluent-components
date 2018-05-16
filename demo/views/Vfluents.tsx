import Vue, { CreateElement } from 'vue'
import { Component, Prop, Provide } from 'vue-property-decorator'
import { vfluents, Dashboard } from '../../components'
import { theme } from '../config'

@Component
export default class Vfluents extends Dashboard {
        @Provide() stateCollapsed: boolean = false
}
