import Vue, { CreateElement } from 'vue'
import { Component, Prop, Provide } from 'vue-property-decorator'
import { vfluents } from '../vfluents'

@Component
export class Form extends vfluents {
        @Prop()
        public component(h: CreateElement) {
                return (
                        <div class={vfluents.cls([

                        ])}>{this.innerHTML}</div>
                )
        }
}