import ViewVfluents from '../views/ViewVfluents'
import ViewIcons from '../views/ViewIcons'

export const routes: any[] = [
        {
                path: '/',
                component: ViewVfluents,
                children: [
                        {
                                path: 'icons',
                                component: ViewIcons
                        }
                ]
        },

]