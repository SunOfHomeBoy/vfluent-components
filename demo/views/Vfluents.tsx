import { Component, CreateElement } from 'vue-component-decorator'
import { vfluents } from '../../components'

@Component
export default class Vfluents extends vfluents<any> {
        public render(h: CreateElement) {
                return <h1>Hello World</h1>
        }
}
