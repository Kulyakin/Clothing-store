import Admin from './pages/Admin'
import Auth from './pages/Auth'
import Basket from './pages/basket'
import ItemPage from './pages/ItemPage'
import Shop from './pages/Shop'
import {
    ADMIN_ROUTE,
    BASKET_ROUTE,
    ITEM_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    SHOP_ROUTE
} from './utils/constatns'

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        component: <Admin />
    },
    {
        path: BASKET_ROUTE,
        component: <Basket />
    }
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        component: <Shop />
    },
    {
        path: LOGIN_ROUTE,
        component: <Auth />
    },
    {
        path: REGISTRATION_ROUTE,
        component: <Auth />
    },
    {
        path: ITEM_ROUTE + '/:id',
        component: <ItemPage />
    }
]
