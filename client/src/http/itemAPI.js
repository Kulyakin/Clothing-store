import { $authHost } from './index'

export const createType = async (type) => {
    const { data } = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const { data } = await $authHost.get('api/type')
    return data
}

export const createBrand = async (brand) => {
    const { data } = await $authHost.post('api/brand', brand)
    return data
}

export const fetchBrands = async () => {
    const { data } = await $authHost.get('api/brand')
    return data
}

export const createItem = async (item) => {
    const { data } = await $authHost.post('api/item', item)
    return data
}
