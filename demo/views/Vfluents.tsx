import { Component, CreateElement } from 'vue-component-decorator'
import { Dashboard } from '../../components'
import { theme } from '../config'

@Component
export class Vfluents extends Dashboard {
        /*public size: string = 'Default'
        public collapsed: boolean = false
        public account: string = 'Administrators'
        public purview: string = '*'
        public avatars: string = 'https://avatars0.githubusercontent.com/u/30998388?s=200&v=4'
        public bbarItems: any[] = [
                { icon: 'Dashboard', href: '/' },
                { icon: 'Search' },
                { icon: 'Code', text: '源碼', href: 'https://github.com/hjboss/vfluent-components' }
        ]*/

        public created() {
                this.props = Object.assign(this.props, {

                })
        }

        public mounted() {
                document.body.setAttribute('class', theme.themePrefix + 'success')
        }
}