/// <reference path="vfluents.d.tsx" />
import Vue from 'vue'
import VueRouter from 'vue-router'
import { settings, routes, theme } from './config'
import { vfluents } from '../components'
import './styles/stylesheets.scss'

export default function vfluentsMain() {
        Vue.config.devtools = settings.debug
        Vue.use(VueRouter)

        vfluents.init(theme)
        new Vue({
                router: new VueRouter({
                        routes,
                        mode: settings.history ? 'history' : 'hash'
                })
        }).$mount('#' + settings.appID)
}

if (typeof (process.env.production) !== 'undefined') {
        vfluentsMain()
}