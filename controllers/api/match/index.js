// import specific service class
const match_service = require('../../../services/match')

// mention the service's needed actions (methods)
const match_controller = {
    getAll(req, res) {
        res.json(match_service.getAll())
    },
    create(req, res) {
        res.status(201).json(
            match_service.create(req, res)
        )
    }
}

module.exports = match_controller

