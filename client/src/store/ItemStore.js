import { makeAutoObservable } from 'mobx'

export default class ItemStore {
    constructor() {
        this._types = [
            { id: 1, name: 'Джинсы' },
            { id: 2, name: 'Брюки' },
            { id: 3, name: 'Юбки' },
            { id: 4, name: 'Трусики' }
        ]
        this._brands = [
            { id: 1, name: 'Terranova' },
            { id: 2, name: 'Zara' }
        ]
        this._items = [
            {
                id: 1,
                name: 'Джинсы-бананы Умеренный синий деним',
                price: 899,
                rating: 5,
                img: 'c4042e78-9847-47f7-87bd-97c43be89663.jpg'
            },
            {
                id: 2,
                name: 'Джинсы-бананы Умеренный синий деним',
                price: 8229,
                rating: 5,
                img: 'c4042e78-9847-47f7-87bd-97c43be89663.jpg'
            },
            {
                id: 3,
                name: 'Джинсы-бананы Умеренный синий деним',
                price: 1239,
                rating: 5,
                img: 'c4042e78-9847-47f7-87bd-97c43be89663.jpg'
            },
            {
                id: 4,
                name: 'Джинсы-бананы Умеренный синий деним',
                price: 779,
                rating: 5,
                img: 'c4042e78-9847-47f7-87bd-97c43be89663.jpg'
            }
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setItems(items) {
        this._items = items
    }
    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get items() {
        return this._items
    }
}
