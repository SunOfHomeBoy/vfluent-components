import { Vfluents } from '../views/Vfluents'
import { ViewTextBlock } from '../views/ViewTextBlock'

export const routes: any[] = [
        {
                path: '/',
                component: Vfluents,
                children: [
                        {
                                path: 'TextBlock',
                                component: ViewTextBlock
                        }
                ]
        }
]