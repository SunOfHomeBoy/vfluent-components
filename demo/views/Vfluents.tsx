import { Component, CreateElement } from 'vue-component-decorator'
import { Dashboard } from '../../components'
import { theme } from '../config'

@Component
export class Vfluents extends Dashboard {
        public configures() {
                this.props.size = 'Small'
                this.props.collapsed = false
                this.props.brandLogo = 'Hierarchy'
                this.props.brandName = 'vFluents'
                this.props.brandHref = null
                this.props.account = 'Administrators'
                this.props.purview = '超級管理員'
                this.props.avatars = 'https://avatars1.githubusercontent.com/u/17957494?s=460&v=4'
        }

        public mounted() {
                document.body.setAttribute('class', theme.themePrefix + 'success')
        }
}