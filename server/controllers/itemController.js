const uuid = require('uuid') // Генератор уникальных id
const path = require('path')
const { Item, ItemInfo } = require('../models/models')
const ApiError = require('../error/ApiError')

class ItemController {
    async create(req, res, next) {
        try {
            let { name, price, brandId, typeId, info } = req.body
            const { img } = req.files
            let fileName = uuid.v4() + '.jpg'
            img.mv(path.resolve(__dirname, '..', 'static', fileName)) // Получение файлов в папку static

            const item = await Item.create({
                name,
                price,
                brandId,
                typeId,
                img: fileName
            })

            if (info) {
                info = JSON.parse(info) // Парсим данные в виде строки
                info.forEach((el) => {
                    ItemInfo.create({
                        title: el.title,
                        description: el.description,
                        itemId: item.id
                    })
                })
            }
            return res.json(item)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }
    // Запрос с фильтрацией
    async getAll(req, res) {
        let { brandId, typeId, limit, currentPage } = req.query // Получаем из строки запроса
        currentPage = currentPage || 1
        limit = limit || 9
        let indent = currentPage * limit - limit
        let items
        if (!brandId && !typeId) {
            items = await Item.findAndCountAll({ limit, indent })
        }
        if (brandId && !typeId) {
            items = await Item.findAndCountAll({
                where: { brandId },
                limit,
                indent
            })
        }
        if (!brandId && typeId) {
            items = await Item.findAndCountAll({
                where: { typeId },
                limit,
                indent
            })
        }
        if (brandId && typeId) {
            items = await Item.findAndCountAll({
                where: { brandId, typeId },
                limit,
                indent
            })
        }
        return res.json(items)
    }

    async getOne(req, res) {
        const { id } = req.params
        const item = await Item.findOne({
            where: { id },
            include: [{ model: ItemInfo, as: 'info' }]
        })
        return res.json(item)
    }
}

module.exports = new ItemController()
