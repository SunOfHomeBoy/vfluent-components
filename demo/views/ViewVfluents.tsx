import Vue, { CreateElement } from 'vue'
import { Component, Prop, Provide } from 'vue-property-decorator'
import { vfluents, Dashboard, INavigationView } from '../../components'

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
                        icon: 'Home',
                        text: '儀錶盤',
                        link: 'Button'
                },
                {
                        icon: 'Activity',
                        text: '常用組件',
                        items: [
                                {
                                        text: '文本 TextBlock',
                                        link: '/TextBlock'
                                },
                                {
                                        text: '圖標 Icon',
                                        link: 'Icon'
                                },
                                {
                                        text: '按鈕 Button',
                                        link: 'Button'
                                }
                        ]
                },
                {
                        icon: 'Activity',
                        text: '常用組件',
                        items: [
                                {
                                        text: '文本 TextBlock',
                                        link: 'TextBlock'
                                },
                                {
                                        text: '圖標 Icon',
                                        link: 'Icon'
                                },
                                {
                                        text: '按鈕 Button',
                                        link: 'Button'
                                },
                                {
                                        text: '文本 TextBlock',
                                        link: 'TextBlock'
                                },
                                {
                                        text: '圖標 Icon',
                                        link: 'Icon'
                                },
                                {
                                        text: '按鈕 Button',
                                        link: 'Button'
                                },
                                {
                                        text: '文本 TextBlock',
                                        link: 'TextBlock'
                                },
                                {
                                        text: '圖標 Icon',
                                        link: 'Icon'
                                },
                                {
                                        text: '按鈕 Button',
                                        link: 'Button'
                                },
                                {
                                        text: '文本 TextBlock',
                                        link: 'TextBlock'
                                },
                                {
                                        text: '圖標 Icon',
                                        link: 'Icon'
                                },
                                {
                                        text: '按鈕 Button',
                                        link: 'Button'
                                },
                                {
                                        text: '文本 TextBlock',
                                        link: 'TextBlock'
                                },
                                {
                                        text: '圖標 Icon',
                                        link: 'Icon'
                                },
                                {
                                        text: '按鈕 Button',
                                        link: 'Button'
                                },
                                {
                                        text: '文本 TextBlock',
                                        link: 'TextBlock'
                                },
                                {
                                        text: '圖標 Icon',
                                        link: 'Icon'
                                },
                                {
                                        text: '按鈕 Button',
                                        link: 'Button'
                                }
                        ]
                }
        ]
}
