import Vue, { CreateElement } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { vfluents, Dashboard } from '../../components'
import { theme } from '../config'

@Component
export default class Vfluents extends Dashboard {
        public collapsed: boolean = false
}
