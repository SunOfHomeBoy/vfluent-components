import { Component, CreateElement } from 'vue-component-decorator'
import { vfluents } from './vfluents'
import utils from './utils'
import './styles/Dashboard.scss'

@Component
export class Dashboard extends vfluents {
        public props: {
                id?: string, // 組件ID 可空 默認值：空字符串
                className?: string // 附加樣式 可空 默認值：空字符串
                size?: string // 導航尺寸 可空 默認值：Default 可選值：Default | Small | Large | Huge
                collapsed?: boolean // 側欄折疊 可空 默認值：FALSE
        } = {}

        protected stateCollapsed: boolean = false
        protected timesCollapsed: number = -1
        protected configures() { }

        public created() {
                this.configures()
                this.stateCollapsed = this.stateCollapsed || this.props.collapsed || false
        }

        public render(h: CreateElement): any {
                let innerElement = this.innerComponent()

                if (utils.empty(innerElement)) {
                        innerElement = <router-view></router-view>
                }

                return (
                        <div id={this.props.id} class={vfluents.cls([
                                'pure-g',
                                vfluents.themePrefix + 'dashboard',
                                ['Small', 'Large', 'Huge'].indexOf(this.props.size) !== -1
                                        ? vfluents.themePrefix + 'dashboard-' + String(this.props.size).toLowerCase()
                                        : '',
                                this.stateCollapsed
                                        ? vfluents.themePrefix + 'dashboard-collapsed'
                                        : '',
                                utils.empty(this.stateCollapsed) && this.timesCollapsed === -1
                                        ? vfluents.themePrefix + 'dashboard-init'
                                        : ''
                        ])}>
                                <aside class={vfluents.cls([
                                        'pure-u-5-6',
                                        vfluents.themePrefix + 'dashboard-side'
                                ])}></aside>
                                <main class={vfluents.cls([
                                        'pure-u-1',
                                        vfluents.themePrefix + 'dashboard-main'
                                ])}></main>
                        </div>
                )
        }
}
