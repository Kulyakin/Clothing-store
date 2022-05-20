import { makeAutoObservable } from 'mobx'

export default class ItemStore {
    constructor() {
        this._types = []
        this._brands = []
        this._items = [
            {
                id: 1,
                name: 'Джинсы-бананы Умеренный синий деним',
                price: 899,
                rating: 5,
                img: 'https://www.terranovastyle.ru/ru_ru/media/catalog/product/cache/81c07efe08d5eb10dd5c992ecbfb2edf/d/z/dzhinsy-fasona-mom-mom-34-sab0052606001s350-kw-dzhinsy-dlinnye-kw-sinij_4_1.jpg'
            },
            {
                id: 2,
                name: 'Свободная толстовка с капюшоном Фуксия светлый',
                price: 1599,
                rating: 5,
                img: 'https://www.terranovastyle.ru/ru_ru/media/catalog/product/f/e/fetd52883p22br-chiusa-capp-maxi-tu-brush-s476_4_1.jpg'
            },
            {
                id: 3,
                name: 'Джинсы-бананы Умеренный синий деним',
                price: 1239,
                rating: 5,
                img: 'https://www.terranovastyle.ru/ru_ru/media/catalog/product/cache/81c07efe08d5eb10dd5c992ecbfb2edf/d/z/dzhinsy-fasona-mom-mom-34-sab0052606001s350-kw-dzhinsy-dlinnye-kw-sinij_4_1.jpg'
            },
            {
                id: 4,
                name: 'Джинсы-бананы Умеренный синий деним',
                price: 779,
                rating: 5,
                img: 'https://www.terranovastyle.ru/ru_ru/media/catalog/product/cache/81c07efe08d5eb10dd5c992ecbfb2edf/d/z/dzhinsy-fasona-mom-mom-34-sab0052606001s350-kw-dzhinsy-dlinnye-kw-sinij_4_1.jpg'
            },
            {
                id: 5,
                name: 'Джинсы-бананы Умеренный синий деним',
                price: 899,
                rating: 5,
                img: 'https://www.terranovastyle.ru/ru_ru/media/catalog/product/cache/81c07efe08d5eb10dd5c992ecbfb2edf/d/z/dzhinsy-fasona-mom-mom-34-sab0052606001s350-kw-dzhinsy-dlinnye-kw-sinij_4_1.jpg'
            },
            {
                id: 6,
                name: 'Джинсы-бананы Умеренный синий деним',
                price: 8229,
                rating: 5,
                img: 'https://www.terranovastyle.ru/ru_ru/media/catalog/product/cache/81c07efe08d5eb10dd5c992ecbfb2edf/d/z/dzhinsy-fasona-mom-mom-34-sab0052606001s350-kw-dzhinsy-dlinnye-kw-sinij_4_1.jpg'
            },
            {
                id: 7,
                name: 'Джинсы-бананы Умеренный синий деним',
                price: 1239,
                rating: 5,
                img: 'https://www.terranovastyle.ru/ru_ru/media/catalog/product/cache/81c07efe08d5eb10dd5c992ecbfb2edf/d/z/dzhinsy-fasona-mom-mom-34-sab0052606001s350-kw-dzhinsy-dlinnye-kw-sinij_4_1.jpg'
            },
            {
                id: 8,
                name: 'Джинсы-бананы Умеренный синий деним',
                price: 779,
                rating: 5,
                img: 'https://www.terranovastyle.ru/ru_ru/media/catalog/product/cache/81c07efe08d5eb10dd5c992ecbfb2edf/d/z/dzhinsy-fasona-mom-mom-34-sab0052606001s350-kw-dzhinsy-dlinnye-kw-sinij_4_1.jpg'
            },
            {
                id: 9,
                name: 'Джинсы-бананы Умеренный синий деним',
                price: 899,
                rating: 5,
                img: 'https://www.terranovastyle.ru/ru_ru/media/catalog/product/cache/81c07efe08d5eb10dd5c992ecbfb2edf/d/z/dzhinsy-fasona-mom-mom-34-sab0052606001s350-kw-dzhinsy-dlinnye-kw-sinij_4_1.jpg'
            },
            {
                id: 10,
                name: 'Джинсы-бананы Умеренный синий деним',
                price: 8229,
                rating: 5,
                img: 'https://www.terranovastyle.ru/ru_ru/media/catalog/product/cache/81c07efe08d5eb10dd5c992ecbfb2edf/d/z/dzhinsy-fasona-mom-mom-34-sab0052606001s350-kw-dzhinsy-dlinnye-kw-sinij_4_1.jpg'
            },
            {
                id: 11,
                name: 'Джинсы-бананы Умеренный синий деним',
                price: 1239,
                rating: 5,
                img: 'https://www.terranovastyle.ru/ru_ru/media/catalog/product/cache/81c07efe08d5eb10dd5c992ecbfb2edf/d/z/dzhinsy-fasona-mom-mom-34-sab0052606001s350-kw-dzhinsy-dlinnye-kw-sinij_4_1.jpg'
            },
            {
                id: 12,
                name: 'Джинсы-бананы Умеренный синий деним',
                price: 779,
                rating: 5,
                img: 'https://www.terranovastyle.ru/ru_ru/media/catalog/product/cache/81c07efe08d5eb10dd5c992ecbfb2edf/d/z/dzhinsy-fasona-mom-mom-34-sab0052606001s350-kw-dzhinsy-dlinnye-kw-sinij_4_1.jpg'
            },
            {
                id: 13,
                name: 'Джинсы-бананы Умеренный синий деним',
                price: 899,
                rating: 5,
                img: 'https://www.terranovastyle.ru/ru_ru/media/catalog/product/cache/81c07efe08d5eb10dd5c992ecbfb2edf/d/z/dzhinsy-fasona-mom-mom-34-sab0052606001s350-kw-dzhinsy-dlinnye-kw-sinij_4_1.jpg'
            },
            {
                id: 14,
                name: 'Джинсы-бананы Умеренный синий деним',
                price: 8229,
                rating: 5,
                img: 'https://www.terranovastyle.ru/ru_ru/media/catalog/product/cache/81c07efe08d5eb10dd5c992ecbfb2edf/d/z/dzhinsy-fasona-mom-mom-34-sab0052606001s350-kw-dzhinsy-dlinnye-kw-sinij_4_1.jpg'
            },
            {
                id: 15,
                name: 'Джинсы-бананы Умеренный синий деним',
                price: 1239,
                rating: 5,
                img: 'https://www.terranovastyle.ru/ru_ru/media/catalog/product/cache/81c07efe08d5eb10dd5c992ecbfb2edf/d/z/dzhinsy-fasona-mom-mom-34-sab0052606001s350-kw-dzhinsy-dlinnye-kw-sinij_4_1.jpg'
            },
            {
                id: 16,
                name: 'Джинсы-бананы Умеренный синий деним',
                price: 779,
                rating: 5,
                img: 'https://www.terranovastyle.ru/ru_ru/media/catalog/product/cache/81c07efe08d5eb10dd5c992ecbfb2edf/d/z/dzhinsy-fasona-mom-mom-34-sab0052606001s350-kw-dzhinsy-dlinnye-kw-sinij_4_1.jpg'
            }
        ]
        this._selectedType = {}
        this._selectedBrand = {}

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

    setSelectedType(type) {
        this._selectedType = type
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand
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

    get selectedType() {
        return this._selectedType
    }

    get selectedBrand() {
        return this._selectedBrand
    }
}
