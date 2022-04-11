const { Brand } = require('../models/models')
const ApiError = require('../error/ApiError')

// Любые запросы к БД являются ассинхронными

class BrandController {
    async create(req, res) {
        const { name } = req.body
        const brand = await Brand.create({ name })
        return res.json(brand)
    }

    async getAll(req, res) {
        const brands = await Brand.findAll()
        return res.json(brands)
    }
}

module.exports = new BrandController()
