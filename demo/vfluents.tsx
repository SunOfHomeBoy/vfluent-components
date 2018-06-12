/// <reference path="./vfluents.d.tsx" />
import Vue from 'vue'
import VueRouter from 'vue-router'
import { settings, routes, theme } from './config'
import { vfluents } from '../components'
import './styles/stylesheets.scss'

export default function vfluentsMain() {
        vfluents.init(theme)
        Vue.config.devtools = settings.debug
        Vue.use(VueRouter)
        new Vue({
                router: new VueRouter({
                        routes,
                        mode: settings.history ? 'history' : 'hash'
                })
        }).$mount('#' + settings.appID)
}

if (typeof (process.env.production) !== 'undefined') {
        setTimeout(vfluentsMain, 750)
}