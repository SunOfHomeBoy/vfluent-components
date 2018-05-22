import Vue, { CreateElement } from 'vue'
import { Component, Prop, Provide } from 'vue-property-decorator'
import { vfluents, Icon } from '../../components'
import { theme } from '../config'

@Component
export default class ViewIcon extends vfluents {
        public component(h: CreateElement) {
                let elementIcons = []
                for (let name in theme.icons) {
                        elementIcons.push(
                                <div class={`col-4 col-md-1 ${theme.themePrefix}unit`}>
                                        <Icon name={name} size="huge" />
                                        <section>{String(name).replace(/^icon/i, '')}</section>
                                </div>
                        )
                }
                return (
                        <div class={`container-fluid justify-content-start ${theme.themePrefix}view-icons`}>
                                <div class="row">{elementIcons}</div>
                        </div>
                )
        }
}