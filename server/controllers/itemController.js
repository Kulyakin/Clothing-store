const uuid = require('uuid') // Генератор уникальных id
const path = require('path')
const { Item } = require('../models/models')

class ItemController {
    async create(req, res) {
        try {
            const { name, price, brandId, typeId, info } = req.body
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

            return res.json(item)
        } catch (error) {
            console.log('error')
        }
    }

    async getAll(req, res) {}

    async getOne(req, res) {}
}

module.exports = new ItemController()
