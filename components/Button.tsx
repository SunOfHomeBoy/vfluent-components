import { Component, CreateElement, Props } from 'vue-component-decorator'
import { vfluents } from './vfluents'
import { Icon } from './Icon'
import './styles/Button.scss'

@Component
export class Button extends vfluents {
        @Props() public readonly props: {
                id?: string
                className?: string
                type?: string
                size?: string
                text?: string
                icon?: string
                align?: string
                badge?: string
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
                        type: 'Default',
                        size: 'Default',
                        text: '',
                        icon: null,
                        align: 'Default',
                        badge: null,
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
                let innerElement: any[] = [this.$props.text]

                if (this.$props.icon) {
                        let iconElement = <Icon name={this.$props.icon} size="Small" />
                        let textElement = this.$props.text

                        innerElement = this.$props.align === 'Bottom' || this.$props.align === 'Right'
                                ? [textElement, iconElement]
                                : [iconElement, textElement]
                }

                if (this.$props.badge) {
                        innerElement.push(
                                <sup class={vfluents.cls([

                                ])}>{this.$props.badge}</sup>
                        )
                }

                return (
                        <button
                                type="button"
                                id={this.$props.id}
                                class={vfluents.cls([
                                        'pure-button',
                                        vfluents.themePrefix + 'button',
                                        ['Primary', 'Secondary', 'Success', 'Danger', 'Warning', 'Info', 'Link'].indexOf(this.$props.type) !== -1
                                                ? vfluents.themePrefix + 'button-' + String(this.$props.type).toLowerCase()
                                                : null,
                                        ['Small', 'Large', 'Huge'].indexOf(this.$props.size) !== -1
                                                ? vfluents.themePrefix + 'button-' + String(this.$props.size).toLowerCase()
                                                : null,
                                        this.$props.icon ? vfluents.themePrefix + 'button-icon' : null,
                                        this.$props.icon && !this.$props.text ? vfluents.themePrefix + 'button-icon-only' : null,
                                        ['Left', 'Right', 'Top', 'Bottom'].indexOf(this.$props.align) !== -1
                                                ? vfluents.themePrefix + 'button-' + String(this.$props.align).toLowerCase()
                                                : null,
                                        this.$props.block ? vfluents.themePrefix + 'button-block' : null,
                                        this.$props.radius && !this.$props.circle ? vfluents.themePrefix + 'button-radius' : null,
                                        this.$props.circle && !this.$props.radius ? vfluents.themePrefix + 'button-circle' : null,
                                        this.$props.outline ? vfluents.themePrefix + 'button-outline' : null,
                                        this.$props.active && !this.$props.disabled ? vfluents.themePrefix + 'button-active' : null,
                                        this.$props.disabled && !this.$props.active ? vfluents.themePrefix + 'button-disabled' : null,
                                        this.$props.className
                                ])}
                                style={{ width: this.$props.width }}
                                disabled={this.$props.disabled && !this.$props.active}
                                onClick={vfluents.eventSafe(this.$props.eventClick)}
                        >{innerElement}</button>
                )
        }
}