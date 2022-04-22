import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Context } from '../index'
import { authRoutes, publicRoutes } from '../routes'
import Shop from '../pages/Shop'

const AppRouter = observer(() => {
    const { user } = useContext(Context)
    console.log(user.isAuth)
    return (
        <Routes>
            {user.isAuth &&
                authRoutes.map(({ path, component }) => (
                    <Route key={path} path={path} element={component} />
                ))}
            {publicRoutes.map(({ path, component }) => (
                <Route key={path} path={path} element={component} />
            ))}
            <Route path="*" element={<Shop />} />
        </Routes>
    )
})

export default AppRouter
