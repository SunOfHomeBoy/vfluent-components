import { Vue, Component, CreateElement, Props } from 'vue-component-decorator'
import initBrowsers from 'init-browsers'
import utils from './utils'

export class vfluents extends Vue {
        public static themePrefix: string = 'vfluents-'
        public static useSVGElement: boolean = true

        @Props() public readonly props: { [nane: string]: any }
        public render(h: CreateElement) { }

        public static init(configures: any = {}) {
                initBrowsers(Object.assign(Object.assign({}, configures), {
                        themePrefix: vfluents.themePrefix
                }))
        }

        protected redirect(uri: string, success?: any) {
                if (String(uri).indexOf('http') === 0) {
                        return window.location.href = uri
                }

                if (utils.empty(uri) === false) {
                        return this.$router.push(uri, () => {
                                if (typeof (success) === 'function') {
                                        success()
                                }
                        })
                }
        }

        protected innerComponent(): any {
                return (this.$options as any)._renderChildren || []
        }

        protected static cls(configures: any[] = []): string {
                return utils.removeEmpty(configures).join(' ')
        }

        protected static eventSafe(fn: any, ...args: any[]): Function {
                return (event: Event) => {
                        if (typeof (fn) === 'function') {
                                fn(event, ...args)
                        }
                }
        }
}

