import { Vfluents } from '../views/Vfluents'
import { ViewIcon } from '../views/ViewIcon'
import { ViewTypography } from '../views/ViewTypography'

export const routes: any[] = [
        {
                path: '/',
                component: Vfluents,
                children: [
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