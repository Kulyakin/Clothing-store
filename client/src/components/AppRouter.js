import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes'

const AppRouter = () => {
    const isAuth = false
    return (
        <Routes>
            {isAuth &&
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
