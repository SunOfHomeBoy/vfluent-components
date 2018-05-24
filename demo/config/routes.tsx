import ViewVfluents from '../views/ViewVfluents'
import ViewButton from '../views/ViewButton'
import ViewIcon from '../views/ViewIcon'
import ViewTextBlock from '../views/ViewTextBlock'

export const routes: any[] = [
        {
                path: '/',
                component: ViewVfluents,
                children: [
                        {
                                path: 'button',
                                component: ViewButton
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
        },

]