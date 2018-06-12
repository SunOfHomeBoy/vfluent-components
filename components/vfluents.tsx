import Vue, { CreateElement, PropOptions, WatchOptions } from 'vue'
import Component, { createDecorator, mixins } from 'vue-class-component'
import { Prop, Provide } from 'vue-property-decorator'

import initBrowsers from 'init-browsers'
import utils from './utils'

export { Component, CreateElement, Prop, Provide, Vue }

// Decorator of a prop
export function Prop0(configures?: PropOptions): PropertyDecorator {
        return createDecorator((componentOptions: any, field: string) => {
                console.log(componentOptions)
                componentOptions.props = componentOptions.props || {}
                componentOptions.props[field] = configures || { require: false }
        })
}

// Decorator of a provide
export function Provide0(name?: string | symbol): PropertyDecorator {
        return createDecorator((componentOptions: any, field: string) => {
                if (typeof (componentOptions.provide) === 'function' || utils.empty(componentOptions.provide.managed)) {
                        componentOptions.provide = (self: any) => {
                                self = self || {}

                                let buf = typeof (componentOptions.provide) === 'function'
                                        ? componentOptions.provide.call(self)
                                        : (componentOptions.provide || {})

                                for (let key in componentOptions.provide.managed) {
                                        buf[componentOptions.provide.managed[key]] = self[key]
                                }

                                return buf
                        }

                        componentOptions.provide.managed = {}
                }

                componentOptions.provide.managed[field] = name || field
        })
}

// Base Class of the vfluents components
@Component
export class vfluents extends Vue {
        public static themePrefix: string = 'vfluents-'
        public static useSVGElement: boolean = true
        public static iconElements: any = {}

        public innerHTML: any
        public view(h: CreateElement) { }

        public render(h: CreateElement) {
                this.innerHTML = (this.$options as any)._renderChildren || []
                return this.view(h)
        }


        public static init(configures: any = {}) { }

}