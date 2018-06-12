import { vfluents, Component, Prop, Provide } from '../../components'
import Vue, { CreateElement } from 'vue';

@Component
export class TextComponent extends Vue {
        @Prop() size: string

        public render(h: CreateElement) {
                console.log('props', this.$props)
                return (
                        <h1 size="pl">OK={this.$props}</h1>
                )
        }
}