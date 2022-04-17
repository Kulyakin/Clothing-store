import React, { useContext } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { Context } from '../index'
import Shop from '../pages/Shop'
import { authRoutes, publicRoutes } from '../routes'

const AppRouter = () => {
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
}

export default AppRouter
