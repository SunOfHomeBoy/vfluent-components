import Vfluents from '../views/Vfluents'
import ViewIcons from '../views/ViewIcons'

export const routes: any[] = [
        {
                path: '/',
                component: Vfluents,
                children: [
                        {
                                path: 'icons',
                                component: ViewIcons
                        }
                ]
        }
]