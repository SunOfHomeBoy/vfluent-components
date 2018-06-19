import { Vfluents } from '../views/Vfluents'
import { ViewButton } from '../views/ViewButton'
import { ViewIcon } from '../views/ViewIcon'
import { ViewTypography } from '../views/ViewTypography'

export const routes: any[] = [
        {
                path: '/',
                component: Vfluents,
                children: [
                        {
                                path: 'Button',
                                component: ViewButton
                        },
                        {
                                path: 'Icon',
                                component: ViewIcon
                        },
                        {
                                path: 'Typography',
                                component: ViewTypography
                        }
                ]
        }
]