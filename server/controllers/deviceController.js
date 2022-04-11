const uuid = require('uuid') // Генератор уникальных id

class DeviceController {
    async create(req, res) {
        const {name, price, brandId, typeId, info} = req.body
        const {img} = req.files
        let fileName = uuid.v4() + '.jpeg'
        img.mv()
    }

    async getAll(req, res) {
        
    }

    async getOne(req, res) {

    }
}

module.exports = new DeviceController()