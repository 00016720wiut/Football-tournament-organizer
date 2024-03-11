const fs = require('fs')
// access global mock db file
const tickets = require('../../data/thedatabase.json')

// write service method implementations
const match_service = {
    getAll() {
        return tickets
    }
}

module.exports = match_service
