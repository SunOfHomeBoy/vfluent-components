import { Component, CreateElement, Props } from 'vue-component-decorator'
import { vfluents } from './vfluents'
import { Icon } from './Icon'
import './styles/Button.scss'

@Component
export class Button extends vfluents {
        @Props() public readonly props: {
                id?: string
                className?: string
                size?: string
                text?: string
                icon?: string
                type?: string
                align?: string
                width?: string
                block?: boolean
                round?: boolean
                circle?: boolean
                outline?: boolean
                actived?: boolean
                disabled?: boolean
                eventClick?: any
        } = {
                        id: null,
                        className: null,
                        size: 'Default',
                        text: '',
                        icon: null,
                        type: 'Default',
                        align: 'Default',
                        width: null,
                        block: false,
                        round: false,
                        circle: false,
                        outline: false,
                        actived: false,
                        disabled: false,
                        eventClick: null
                }

        public render(h: CreateElement): any {
                let innerElement: any = <span class={vfluents.themePrefix + 'btn-text'}>{this.$props.text}</span>

                if (this.$props.icon) {
                        let iconElement = <Icon name={this.$props.icon} size={this.$props.size === 'Small' ? 'Mini' : 'Small'} />
                        let textElement = <span class={vfluents.themePrefix + 'btn-text'}>{this.$props.text}</span>

                        innerElement = this.$props.align === 'Bottom' || this.$props.align === 'Right'
                                ? [textElement, iconElement]
                                : [iconElement, textElement]
                }

                return (
                        <a
                                id={this.$props.id}
                                class={vfluents.cls([
                                        'pure-button',
                                        vfluents.themePrefix + 'btn',
                                        ['Primary', 'Secondary', 'Success', 'Danger', 'Warning', 'Info', 'Link'].indexOf(this.$props.type) !== -1
                                                ? vfluents.themePrefix + 'btn-' + String(this.$props.type).toLowerCase()
                                                : '',
                                        this.$props.outline
                                                ? vfluents.themePrefix + 'btn-outline'
                                                : ''
                                ])}
                                style={{ width: this.$props.width }}
                                onClick={vfluents.eventSafe(this.$props.eventClick)}
                        >{innerElement}</a>
                )
        }
}