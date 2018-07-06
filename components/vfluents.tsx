import { Vue, CreateElement, Props } from 'vue-component-decorator'
import initBrowsers from 'init-browsers'
import utils from './utils'

export class vfluents extends Vue {
        public static themePrefix: string = 'vfluents-'
        public static useSVGElement: boolean = true
        public static useTooltip: boolean = true
        public static useAutoLanguage: boolean = false

        @Props() public readonly props: { [name: string]: any }
        public render(h: CreateElement): any { }

        public innerComponents(): any[] {
                return (this.$options as any)._renderChildren || []
        }

        public redirect(uri: string, success?: any) {
                if (utils.str(uri).indexOf('http') === 0) {
                        return window.location.href = uri
                }

                if (utils.nonempty(uri)) {
                        return this.$router.push(uri, () => {
                                if (utils.isFunc(success)) {
                                        success()
                                }
                        })
                }
        }

        public static init(configures: any = {}) {
                initBrowsers(Object.assign(Object.assign({}, configures), {
                        themePrefix: vfluents.themePrefix,
                        autoLanguage: vfluents.useAutoLanguage
                }))
        }

        public static cls(items: string[], cls: string = ''): string {
                for (let i = 0; i < items.length; i++) {
                        cls += utils.nonempty(cls) && utils.nonempty(items[i])
                                ? ' ' + items[i]
                                : items[i] || ''
                }

                return cls
        }

        public static eventSafe(fn: any, ...args: any[]): Function {
                return (event: Event) => {
                        if (utils.isFunc(fn)) {
                                fn(event, ...args)
                        }
                }
        }
}
