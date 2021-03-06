import { Component, CreateElement } from 'vue-component-decorator'
import { vfluents } from '../../components'
import { theme } from '../config'

@Component
export class ViewComponent extends vfluents {
        public props: {
                name?: string
                description?: string
        } = {}
        protected renderComponent(h: CreateElement): any { }

        public render(h: CreateElement): any {
                return (
                        <div class={vfluents.cls([
                                theme.themePrefix + 'view-component',
                                theme.themePrefix + 'view-component-' + this.props.name
                        ])}>
                                <h1 class={theme.themePrefix + 'view-component-header'}>
                                        {this.props.name}
                                        <small>{this.props.description}</small>
                                </h1>
                                {this.renderComponent(h)}
                        </div>
                )
        }
}