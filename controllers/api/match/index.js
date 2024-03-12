// importing service class
const match_service = require('../../../services/match')

// mentioning the service's methods
const match_controller = {
    getAll(req, res) {
        res.json(match_service.getAll())
    },
    create(req, res) {
        res.status(201).json(
            match_service.create(req, res)
        )
    },
    edit(req, res) {
        const match = match_service.edit(req.params.id, req.body)
        
        if (match) {
            res.json(match)
        } else {
            res.status(404).send('match not found')
        }
    },
    delete(req, res) {
        const match = match_service.getById(req.params.id)
        
        if (match) {
            match_service.delete(req.params.id)
            res.status(204).send('match deleted successfully')
        } else {
            res.status(404).send('match not found')
        }
    }
}

module.exports = match_controller



