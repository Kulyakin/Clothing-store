import React, { useContext } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { Context } from '..'
import { authRoutes, publicRoutes } from '../routes'

const AppRouter = () => {
    const { user } = useContext(Context)
    console.log(user)
    return (
        <Routes>
            {user.isAuth &&
                authRoutes.map(({ path, component }) => (
                    <Route key={path} path={path} element={component} exact />
                ))}
            {publicRoutes.map(({ path, component }) => (
                <Route key={path} path={path} element={component} exact />
            ))}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default AppRouter
