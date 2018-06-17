import { Component, CreateElement, Props } from 'vue-component-decorator'
import { vfluents } from './vfluents'

@Component
export class TextBlock extends vfluents {
        @Props() public readonly props: {
                id?: string
                className?: string
                type?: string
                align?: string
        } = {
                        id: '',
                        className: '',
                        type: 'Default',
                        align: 'Left'
                }

        public render(h: CreateElement): any {
                let cls = vfluents.cls([
                        ['Left', 'Center', 'Right'].indexOf(this.$props.align) !== -1
                                ? vfluents.themePrefix + 'align-' + String(this.$props.align).toLowerCase()
                                : '',
                        this.$props.className
                ])
                let innerElement = this.innerComponent()

                switch (this.$props.type) {
                        case 'Header':
                                return (
                                        <h1 id={this.$props.id} class={cls}>{innerElement}</h1>
                                )

                        case 'SubHeader':
                                return (
                                        <h2 id={this.$props.id} class={cls}>{innerElement}</h2>
                                )
                        case 'Title':
                                return (
                                        <h3 id={this.$props.id} class={cls}>{innerElement}</h3>
                                )
                        case 'SubTitle':
                                return (
                                        <h4 id={this.$props.id} class={cls}>{innerElement}</h4>
                                )
                        case 'Base':
                                return (
                                        <h5 id={this.$props.id} class={cls}>{innerElement}</h5>
                                )
                        case 'Caption':
                                return (
                                        <h6 id={this.$props.id} class={cls}>{innerElement}</h6>
                                )
                }

                return (
                        <p id={this.$props.id} class={cls}>{innerElement}</p>
                )
        }
}