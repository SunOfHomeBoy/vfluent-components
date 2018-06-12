import { vfluents, Component, CreateElement, Prop, Provide } from '../../components'
import { TextComponent } from './Text'
import Vue from 'vue';

@Component
export class ViewVfluents extends vfluents {
        public start: number = new Date().getTime()

        public beforeCreate() {
                console.log('ProvideBefore1=' + this.start)
        }

        public mounted() {
                console.log('ProvideAfter1=' + this.start)
        }

        public render(h: CreateElement) {
                return (
                        <TextComponent size="ok" />
                )
        }
}