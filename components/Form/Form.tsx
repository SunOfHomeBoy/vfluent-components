import Vue, { CreateElement } from 'vue'
import { Component, Prop, Provide, Watch } from 'vue-property-decorator'
import { vfluents } from '../vfluents'

@Component
export class Form extends vfluents {
        @Prop() layout: string // 表單佈局 可空 默認值： Vertical 可選值：Vertical | Horizontal
        @Prop() model: any // 表單數據 可空 默認值：空值

        public component(h: CreateElement) {
                return (
                        <form
                                class={vfluents.cls([
                                        this.layout === 'Horizontal'
                                                ? 'form-inline'
                                                : '',
                                        vfluents.themePrefix + 'form',
                                        this.className
                                ])}
                                v-model={this.model}
                        >{this.innerHTML}</form>
                )
        }
}