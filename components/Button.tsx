import { Component, CreateElement, Props } from 'vue-component-decorator'
import { vfluents } from './vfluents'
import { Icon } from './Icon'
import './styles/Button.scss'
import utils from './utils';

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
                        let iconElement = <Icon name={this.$props.icon} size="Small" />
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
                                        vfluents.themePrefix + 'button',
                                        ['Primary', 'Secondary', 'Success', 'Danger', 'Warning', 'Info', 'Link'].indexOf(this.$props.type) !== -1
                                                ? vfluents.themePrefix + 'button-' + String(this.$props.type).toLowerCase()
                                                : '',
                                        ['Small', 'Large', 'Huge'].indexOf(this.$props.size) !== -1
                                                ? vfluents.themePrefix + 'button-' + String(this.$props.size).toLowerCase()
                                                : '',
                                        ['Left', 'Right', 'Top', 'Bottom'].indexOf(this.$props.align) !== -1
                                                ? vfluents.themePrefix + 'button-' + String(this.$props.align).toLowerCase()
                                                : '',
                                        this.$props.icon
                                                ? vfluents.themePrefix + 'button-icon'
                                                : '',
                                        this.$props.icon && !this.$props.text
                                                ? vfluents.themePrefix + 'button-icon-notext'
                                                : '',
                                        this.$props.outline
                                                ? vfluents.themePrefix + 'button-outline'
                                                : '',
                                        this.$props.radius && !this.$props.circle
                                                ? vfluents.themePrefix + 'button-radius'
                                                : '',
                                        this.$props.circle && !this.$props.radius
                                                ? vfluents.themePrefix + 'button-circle'
                                                : '',
                                        this.$props.active && !this.$props.disabled
                                                ? vfluents.themePrefix + 'button-active'
                                                : ''
                                ])}
                                style={{ width: this.$props.width }}
                                onClick={vfluents.eventSafe(this.$props.eventClick)}
                        >{innerElement}</a>
                )
        }
}