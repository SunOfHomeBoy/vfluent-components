import { Component, CreateElement, Props } from 'vue-component-decorator'
import { vfluents } from './vfluents'
import utils from './utils'
import './styles/Tooltip.scss'

@Component
export class Tooltip extends vfluents {
        @Props() public readonly props: {
                id?: string // 組件ID 可空 默認值：空字符串
                className?: string // 附加樣式 可空 默認值：空字符串
                content?: string // 內容文本 可空 默認值：空字符串
                placement?: string // 固定位置 可空 默認值：Bottom 可選值：Top | Right | Bottom | Left
        } = {
                        id: null,
                        className: null,
                        content: '',
                        placement: 'Bottom'
                }

        public render(h: CreateElement): any {
                let selfComponent = this.innerComponents()[0]

                if (utils.empty(vfluents.useTooltip) === false) {
                        selfComponent = selfComponent || {}

                        selfComponent.tag = selfComponent.tag || 'span'
                        selfComponent.data = selfComponent.data || {}
                        selfComponent.children = selfComponent.children || []


                }

                return selfComponent
        }
}
