import { Vfluents } from '../views/Vfluents'
import { ViewBadge } from '../views/ViewBadge'
import { ViewButton } from '../views/ViewButton'
import { ViewIcon } from '../views/ViewIcon'
import { ViewTabBar } from '../views/ViewTabBar'
import { ViewTypography } from '../views/ViewTypography'

export const routes: any[] = [
        {
                path: '/',
                component: Vfluents,
                children: [
                        {
                                path: 'Badge',
                                component: ViewBadge
                        },
                        {
                                path: 'Button',
                                component: ViewButton
                        },
                        {
                                path: 'Icon',
                                component: ViewIcon
                        },
                        {
                                path: 'TabBar',
                                component: ViewTabBar
                        },
                        {
                                path: 'Typography',
                                component: ViewTypography
                        }
                ]
        }
]