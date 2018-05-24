import Vue, { CreateElement } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import initBrowsers from 'init-browsers'
import { empty, removeEmpty } from './utils'

@Component
export class vfluents extends Vue {
        public static themePrefix: string = 'vfluents-'
        public static useSVGElement: boolean = true

        @Prop() className: string
        protected innerHTML: any
        public component(h: CreateElement): any { }

        public render(h: CreateElement): any {
                this.innerHTML = (this.$options as any)._renderChildren
                return this.component(h)
        }

        public static init(configures?: any) {
                initBrowsers(Object.assign(Object.assign({}, configures), {
                        themePrefix: vfluents.themePrefix
                }))
        }

        public static cls(configures?: string[]): string {
                return removeEmpty(configures).join(' ')
        }

        public static theme(name?: string) {
                let reg = /theme-[A-Za-z0-9]{1,}/i
                let cls = document.documentElement.getAttribute('class')

                if (empty(name)) {
                        return cls.match(reg).toString().replace('theme-', '')
                }

                return document.documentElement.setAttribute('class', cls.replace(reg, `theme-${name}`))
        }

        public static eventSafe(fn: any): Function {
                return (e: Event) => {
                        if (typeof (fn) === 'function') {
                                fn(e)
                        }
                }
        }
}
