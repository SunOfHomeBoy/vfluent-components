import Vue, { CreateElement } from 'vue'
import { Component, Prop, Provide } from 'vue-property-decorator'
import { vfluents } from '../vfluents'

@Component
export class TextBlock extends vfluents {
        @Prop() type: string // 文本類型 可空 默認值：default 可選值：default | Header | SubHeader | Title | SubTitle | Base | Caption | Footer
        @Prop() align: string // 文本對齊 可空 默認值：Left 可選值： Left | Middle | Right
        @Prop() indent: boolean // 文本縮進 可空 默認值：FALSE

        public component(h: CreateElement) {
                let cls = vfluents.cls([
                        vfluents.themePrefix + 'textblock',
                        ['Middle', 'Right'].indexOf(this.align) !== -1
                                ? vfluents.themePrefix + 'textblock-' + String(this.align).toLowerCase()
                                : '',
                        this.indent
                                ? vfluents.themePrefix + 'textblock-indent'
                                : '',
                        vfluents.themePrefix + 'textblock-%TYPE%'
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
                                        <footer class={cls.replace('%TYPE%', 'footer')}>{this.innerHTML}</footer>
                                )
                }

                return (
                        <p class={cls.replace('%TYPE%', 'paragraph')}>{this.innerHTML}</p>
                )
        }
}