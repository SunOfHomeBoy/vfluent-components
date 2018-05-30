import Vue, { CreateElement } from 'vue'
import { Component, Prop, Provide } from 'vue-property-decorator'
import { vfluents, Dashboard, INavigationView, ITabBar } from '../../components'

@Component
export default class ViewVfluents extends Dashboard {
        @Provide() size: string = 'Default'
        @Provide() collapsed: boolean = false
        @Provide() brandLogo: string = 'Hierarchy'
        @Provide() brandName: string = 'vFluents'
        @Provide() account: string = 'hongjiangproject@yahoo.com'
        @Provide() purview: string = '超級管理員'
        @Provide() headerImg: string = 'https://avatars1.githubusercontent.com/u/20560933?s=460&v=4'
        @Provide() menuItems: INavigationView[] = [
                {
                        icon: 'Dashboard',
                        text: '儀錶盤',

                },
                {
                        icon: 'Component',
                        text: '常用組件',
                        items: [
                                {
                                        text: '按鈕Button',
                                        link: 'Button'
                                },
                                {
                                        text: '圖標Icon',
                                        link: 'Icon'
                                },
                                {
                                        text: '導航欄NavBar',
                                        link: 'NavBar'
                                },
                                {
                                        text: '導航視圖NavigationView',
                                        link: 'NavigationView'
                                },
                                {
                                        text: '文本TextBlock',
                                        link: 'TextBlock'
                                }
                        ]
                },
                {
                        icon: '',
                        text: '常用頁面'
                }
        ]
        @Provide() bbarItems: ITabBar[] = [
                {
                        icon: 'Cog',
                        text: '主頁'
                },
                {
                        icon: 'Mail',
                        text: '消息'
                },
                {
                        icon: 'Plus',
                        text: '家裡'
                },
                {
                        icon: 'Search',
                        text: '搜索'
                },
                {
                        icon: 'User',
                        text: '我'
                }
        ]
}
