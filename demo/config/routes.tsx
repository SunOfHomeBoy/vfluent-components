import ViewVfluents from '../views/ViewVfluents'
import ViewButton from '../views/ViewButton'
import ViewChart from '../views/ViewChart'
import ViewForm from '../views/ViewForm'
import ViewIcon from '../views/ViewIcon'
import ViewInput from '../views/ViewInput'
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
                                path: 'Form',
                                component: ViewForm
                        },
                        {
                                path: 'Icon',
                                component: ViewIcon
                        },
                        {
                                path: 'Input',
                                component: ViewInput
                        },
                        {
                                path: 'TextBlock',
                                component: ViewTextBlock
                        }
                ]
        }
]