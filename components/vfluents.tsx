import Vue, { CreateElement } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import initBrowsers from 'init-browsers'
import * as utils from './utils'

@Component
export class vfluents extends Vue {
        public static themePrefix: string = 'vfluents-'
        public static useSVGElement: boolean = true
        public static iconElements: any = {}

        @Prop() className: string
        protected innerHTML: any
        public component(h: CreateElement): any { }

        public render(h: CreateElement): any {
                this.innerHTML = (this.$options as any)._renderChildren || []
                return this.component(h)
        }

        public redirect(uri: string, fn?: any) {
                if (String(uri).indexOf('http') === 0) {
                        window.location.href = uri
                } else if (utils.empty(uri) === false) {
                        this.$router.push(uri, () => {
                                if (typeof (fn) === 'function') {
                                        fn()
                                }
                        })
                }
        }

        public static init(configures?: any) {
                configures.icons = configures.icons || {}
                configures.icons = Object.assign(vfluents.iconElements, configures.icons)
                initBrowsers(Object.assign(Object.assign({}, configures), {
                        themePrefix: vfluents.themePrefix
                }))
        }

        public static cls(configures?: string[]): string {
                return utils.removeEmpty(configures).join(' ')
        }

        public static theme(name?: string) {
                let reg = /theme-[A-Za-z0-9]{1,}/i
                let cls = document.documentElement.getAttribute('class')

                if (utils.empty(name)) {
                        return cls.match(reg).toString().replace('theme-', '')
                }

                return document.documentElement.setAttribute('class', cls.replace(reg, `theme-${name}`))
        }

        public static eventSafe(fn: any, ...args: any[]): Function {
                return (e: Event) => {
                        if (typeof (fn) === 'function') {
                                console.log(args)
                                fn(e, ...args)
                        }
                }
        }

        public static useIcons(icons: any) {
                vfluents.iconElements = Object.assign(vfluents.iconElements, icons || {})
        }
}
