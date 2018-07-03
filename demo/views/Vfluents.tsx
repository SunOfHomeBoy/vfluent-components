import { Component, CreateElement } from 'vue-component-decorator'
import { Dashboard } from '../../components'
import { theme } from '../config'

@Component
export class Vfluents extends Dashboard {
        public size: string = 'Default'
        public collapsed: boolean = false
        public brandName: string = 'vFluents'
        public account: string = 'Administrators'
        public purview: string = '*'
        public avatars: string = 'https://avatars1.githubusercontent.com/u/17957494?s=460&v=4'
        public bbarItems: any[] = [
                { icon: 'Code', text: '源碼', href: 'https://github.com/hjboss/vfluent-components' },
                { icon: 'Dashboard', href: '/' },
                { icon: 'Search', text: '搜索' }
        ]

        public mounted() {
                document.body.setAttribute('class', theme.themePrefix + 'success')
        }
}