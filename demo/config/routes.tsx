import ViewVfluents from '../views/ViewVfluents'
import ViewButton from '../views/ViewButton'
import ViewChart from '../views/ViewChart'
import ViewIcon from '../views/ViewIcon'
import ViewTextBlock from '../views/ViewTextBlock'

export const routes: any[] = [
        {
                path: '/',
                component: ViewVfluents,
                children: [
                        {
                                path: 'Button',
                                component: ViewButton
                        },
                        {
                                path: 'Chart',
                                component: ViewChart
                        },
                        {
                                path: 'Icon',
                                component: ViewIcon
                        },
                        {
                                path: 'TextBlock',
                                component: ViewTextBlock
                        }
                ]
        }
]