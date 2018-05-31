import Vue, { CreateElement } from 'vue'
import { Component, Prop, Provide } from 'vue-property-decorator'
import { vfluents } from '../vfluents'

@Component
export class TextBlock extends vfluents {
        @Prop() type: string // 文本類型 可空 默認值：Default 可選值：Default | Header | SubHeader | Title | SubTitle | Base | Caption | Footer
        @Prop() align: string // 文本對齊 可空 默認值：Left 可選值： Left | Middle | Right
        @Prop() indent: number // 文本縮進 可空 默認值：0 可選值：0 | 1 | 2 | 3 | 4 | 5 | 7 | 8
        @Prop() links: any[] // 底部鏈接 可空 默認值：空數組 注意：僅對type=Footer有效

        public component(h: CreateElement) {
                let cls = vfluents.cls([
                        vfluents.themePrefix + 'textblock',
                        ['Middle', 'Right'].indexOf(this.align) !== -1
                                ? vfluents.themePrefix + 'textblock-' + String(this.align).toLowerCase()
                                : '',
                        [1, 2, 3, 4, 5, 6, 7, 8].indexOf(this.indent) !== -1
                                ? `${vfluents.themePrefix}textblock-indent${this.indent}`
                                : '',
                        vfluents.themePrefix + 'textblock-%TYPE%',
                        this.className
                ])
                switch (this.type) {
                        case 'Header':
                                return (
                                        <h1 class={cls.replace('%TYPE%', 'header')}>{this.innerHTML}</h1>
                                )

                        case 'SubHeader':
                                return (
                                        <h2 class={cls.replace('%TYPE%', 'subheader')}>{this.innerHTML}</h2>
                                )

                        case 'Title':
                                return (
                                        <h3 class={cls.replace('%TYPE%', 'title')}>{this.innerHTML}</h3>
                                )

                        case 'SubTitle':
                                return (
                                        <h4 class={cls.replace('%TYPE%', 'subtitle')}>{this.innerHTML}</h4>
                                )

                        case 'Base':
                                return (
                                        <h5 class={cls.replace('%TYPE%', 'base')}>{this.innerHTML}</h5>
                                )

                        case 'Caption':
                                return (
                                        <h6 class={cls.replace('%TYPE%', 'caption')}>{this.innerHTML}</h6>
                                )

                        case 'Footer':
                                return (
                                        <footer class={cls.replace('%TYPE%', 'footer')}>
                                                <span class={vfluents.themePrefix + 'textblock-footer-links'}>{this.links}</span>
                                                <span class={vfluents.themePrefix + 'textblock-footer-text'}>{this.innerHTML}</span>
                                        </footer>
                                )
                }

                return (
                        <p class={cls.replace('%TYPE%', 'paragraph')}>{this.innerHTML}</p>
                )
        }
}