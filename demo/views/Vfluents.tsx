import Vue, { CreateElement } from 'vue'
import { VueComponent, Component } from 'vue-component-decorator'
import { theme } from '../config'
import { Button } from '../../components'

@Component
export default class Vfluents extends VueComponent<any> {
        public render(h: CreateElement) {
                return (
                        <div class={theme.themePrefix + '-viewport'}>Hello, Vfluents ~
                                <Button />
                        </div>
                )
        }
}
