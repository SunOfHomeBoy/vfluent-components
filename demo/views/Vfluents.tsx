import { Component, CreateElement } from 'vue-component-decorator'
import { Dashboard } from '../../components'
import { theme } from '../config'

@Component
export class Vfluents extends Dashboard {
        public created() {
                this.props = Object.assign(this.props, {
                        size: 'Default',
                        collapsed: false,
                        brandLogo: 'Hierarchy',
                        brandName: 'vFluents',
                        account: 'Administrators',
                        purview: '*',
                        avatars: 'https://avatars0.githubusercontent.com/u/30998388?s=200&v=4',
                        bbarItems: [
                                { icon: 'Dashboard', href: '/' },
                                { icon: 'Search' },
                                { icon: 'Code', text: '源碼', href: 'https://github.com/hjboss/vfluent-components' }
                        ]
                })
        }

        public mounted() {
                document.body.setAttribute('class', theme.themePrefix + 'success')
        }
}