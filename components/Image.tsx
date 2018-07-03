import { Component, CreateElement, Props } from 'vue-component-decorator'
import { vfluents } from './vfluents'
import utils from './utils'
import './styles/Image.scss'

@Component
export class Image extends vfluents {
        @Props() public readonly props: {
                id?: string // 組件ID 可空 默認值：空字符串
                className?: string // 附加樣式 可空 默認值：空字符串
                src?: string // 圖片鏈接 可空 默認值：空字符串
                text?: string // 提示文本 可空 默認值：空字符串
                size?: string // 盒狀尺寸 可空 默認值：NULL 可選值：Default | Small | Large | Huge
                width?: string // 可視寬度 可空 默認值：NULL
                height?: string // 可視高度 可空 默認值：NULL
                radius?: boolean // 圓角邊框 可空 默認值：FALSE
                circle?: boolean // 圓形按鈕 可空 默認值：FALSE
                eventClick?: any // 單擊事件 可空 默認值：NULL
        } = {
                        id: null,
                        className: null,
                        src: '',
                        text: '',
                        size: null,
                        width: null,
                        height: null,
                        radius: false,
                        circle: false,
                        eventClick: null
                }

        public render(h: CreateElement): any {
                return (
                        <img
                                id={this.$props.id}
                                src={this.$props.src}
                                alt={this.$props.text}
                                class={vfluents.cls([
                                        'pure-img',
                                        vfluents.themePrefix + 'image',
                                        ['Default', 'Small', 'Large', 'Huge'].indexOf(this.$props.size) !== -1
                                                ? vfluents.themePrefix + 'image-' + String(this.$props.size).toLowerCase()
                                                : '',
                                        utils.empty(this.$props.radius) !== false
                                                ? vfluents.themePrefix + 'image-radius'
                                                : '',
                                        utils.empty(this.$props.circle) !== false
                                                ? vfluents.themePrefix + 'image-circle'
                                                : '',
                                        this.$props.className
                                ])}
                                style={{ width: this.$props.width, height: this.$props.height }}
                                onClick={vfluents.eventSafe(this.$props.eventClick)}
                        />
                )
        }
}