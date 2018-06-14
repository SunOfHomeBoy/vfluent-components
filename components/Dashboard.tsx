import { Component, CreateElement } from 'vue-component-decorator'
import { vfluents } from './vfluents'
import utils from './utils'

@Component
export class Dashboard extends vfluents<any> {
        protected configures: {
                size?: string // 導航尺寸 可空 默認值：Default 可選值：Default | Small | Large | Huge

        } = {}

        public render(h: CreateElement) { }
}