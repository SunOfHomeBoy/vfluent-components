import { Component, CreateElement } from 'vue-component-decorator'
import { vfluents } from './vfluents'
import utils from './utils'

@Component
export class Dashboard extends vfluents<any> {
        protected configures: {
                id?: string // 組件ID 可空 默認值：空字符串
                className?: string // 附加樣式 可空 默認值：空字符串
                size?: string // 導航尺寸 可空 默認值：Default 可選值：Default | Small | Large | Huge
                collapsed?: boolean // 側欄折疊 可空 默認值：FALSE

        } = {}

        protected stateCollapsed: boolean

        public render(h: CreateElement) {
                return (
                        <div id={this.configures.id} class={vfluents.cls([
                                'pure-g',
                                vfluents.themePrefix + 'dashboard',
                                ['Small', 'Large', 'Huge'].indexOf(this.configures.size) !== -1
                                        ? vfluents.themePrefix + 'dashboard-' + this.configures.size
                                        : '',

                        ])}>
                        </div>
                )
        }

        public created() {
                this.stateCollapsed = this.stateCollapsed || this.configures.collapsed
        }
}