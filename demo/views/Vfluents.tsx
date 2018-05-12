import Vue, { CreateElement } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { theme } from '../config'
import { vfluents, Dashboard } from '../../components'

@Component
export default class Vfluents extends Vue {
        public render(h: CreateElement) {
                return (
                        <Dashboard className={vfluents.themePrefix}></Dashboard>
                )
        }
}
