import Vue, { CreateElement } from 'vue'
import { Component, Prop, Provide } from 'vue-property-decorator'
import { vfluents, Dashboard, INavigationView, ITabBar } from '../../components'

@Component
export default class ViewVfluents extends Dashboard {
        @Provide() size: string = 'Default'
        @Provide() collapsed: boolean = false
        @Provide() brandLogo: string = 'Hierarchy'
        @Provide() brandName: string = 'vFluents'
        @Provide() account: string = 'Administrators'
        @Provide() purview: string = '超級管理員'
        @Provide() headerImg: string = 'https://avatars1.githubusercontent.com/u/17957494?s=460&v=4'

        public created() {
                this.bbarItems = [
                        { text: '代碼', icon: 'Code', link: 'https://github.com/hjboss/vfluent-components' },
                        { text: '消息', icon: 'Mail', link: 'Button' },
                        { text: '', icon: 'Dashboard', link: '/' },
                        { text: '發現', icon: 'Search', link: 'Icon' },
                        { text: '吾等', icon: 'User', fn: this.eventUserinfo }
                ]
                this.menuItems = [
                        { icon: 'Dashboard', text: '儀表盤' },
                        {
                                icon: 'Component', text: '常用組件', items: [
                                        { text: '按鈕Button', link: 'Button' },
                                        { text: '圖標Icon', link: 'Icon' },
                                        { text: '導航欄NavBar', link: 'NavBar' },
                                        { text: '導航視圖NavigationView', link: 'NavigationView' },
                                        { text: '標籤欄TabBar', 'link': 'TabBar' },
                                        { text: '文本TextBlock', link: 'TextBlock' }
                                ]
                        }
                ]
        }
}
