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
                radius?: boolean
                circle?: boolean
                outline?: boolean
                active?: boolean
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
                        radius: false,
                        circle: false,
                        outline: false,
                        active: false,
                        disabled: false,
                        eventClick: null
                }

        public render(h: CreateElement): any {
                let innerElement: any = this.$props.text

                if (this.$props.icon) {
                        let iconElement = <Icon name={this.$props.icon} size={this.$props.size === 'Small' ? 'Mini' : 'Small'} />
                        let textElement = this.$props.text

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
                                                : '',
                                        this.$props.radius && !this.$props.circle
                                                ? vfluents.themePrefix + 'btn-radius'
                                                : '',
                                        this.$props.circle && !this.$props.radius
                                                ? vfluents.themePrefix + 'btn-circle'
                                                : '',
                                        this.$props.active && !this.$props.disabled
                                                ? vfluents.themePrefix + 'btn-active'
                                                : ''
                                ])}
                                style={{ width: this.$props.width }}
                                onClick={vfluents.eventSafe(this.$props.eventClick)}
                        >{innerElement}</a>
                )
        }
}