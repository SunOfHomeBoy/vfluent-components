import Vue, { CreateElement } from 'vue'
import { Component, Prop, Provide } from 'vue-property-decorator'
import { vfluents, Button } from '../../components'
import { ViewCommon } from '../components'
import { theme } from '../config'

@Component
export default class ViewButton extends ViewCommon {
        public componentView(h: CreateElement) {
        }
}