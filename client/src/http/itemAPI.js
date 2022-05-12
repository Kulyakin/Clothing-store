import { $host, $authHost } from './index'
import jwt_decode from 'jwt-decode'

export const createType = async (type) => {
    const { data } = await $authHost.post('api/type', type)
    localStorage.setItem('token', data.jwttoken)
    return jwt_decode(data.jwttoken)
}

export const fetchTypes = async (email, password) => {
    const { data } = await $authHost.post('api/user/login', { email, password })
    localStorage.setItem('token', data.jwttoken)
    return jwt_decode(data.jwttoken)
}

export const check = async () => {
    const { data } = await $authHost.get('api/user/auth')
    localStorage.setItem('token', data.jwttoken)
    return jwt_decode(data.jwttoken)
}
