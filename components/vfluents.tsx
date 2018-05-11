import Vue, { CreateElement } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import initBrowsers from 'init-browsers'

@Component
export class vfluents extends Vue {
        public static themePrefix: string = 'vfluents-'
        public static useSVGElement: boolean = true

        @Prop() className: string
        @Prop() style: any
        public render(h: CreateElement) { }

        public static init(configures?: any) {
                initBrowsers(Object.assign(Object.assign({}, configures), {
                        themePrefix: vfluents.themePrefix,
                        baseFontSize: 16
                }))
        }
}
