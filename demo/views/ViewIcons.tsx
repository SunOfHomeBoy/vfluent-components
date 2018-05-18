import Vue, { CreateElement } from 'vue'
import { Component, Prop, Provide } from 'vue-property-decorator'
import { vfluents } from '../../components'

export default class ViewIcons extends vfluents {
        public component(h: CreateElement) {
                return (
                        <div class="ok">okok</div>
                )
        }
}