import ViewVfluents from '../views/ViewVfluents'
import ViewButton from '../views/ViewButton'
import ViewIcon from '../views/ViewIcon'

export const routes: any[] = [
        {
                path: '/',
                component: ViewVfluents,
                children: [
                        {
                                path: 'btn',
                                component: ViewButton
                        },
                        {
                                path: 'icons',
                                component: ViewIcon
                        }
                ]
        },

]