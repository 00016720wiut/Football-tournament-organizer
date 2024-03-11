const express = require('express')
const match_router = require('./match')

const router = express.Router()

// registering child routers
router.use('/match', match_router)

module.exports = router