import { Vfluents } from '../views/Vfluents'
import { ViewBadge } from '../views/ViewBadge'
import { ViewButton } from '../views/ViewButton'
import { ViewIcon } from '../views/ViewIcon'
import { ViewNavBar } from '../views/ViewNavBar'
import { ViewTabBar } from '../views/ViewTabBar'
import { ViewTooltip } from '../views/ViewTooltip'
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
                                path: 'NavBar',
                                component: ViewNavBar
                        },
                        {
                                path: 'TabBar',
                                component: ViewTabBar
                        },
                        {
                                path: 'Tooltip',
                                component: ViewTooltip
                        },
                        {
                                path: 'Typography',
                                component: ViewTypography
                        }
                ]
        }
]