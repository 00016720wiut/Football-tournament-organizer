const express = require('express');
const router = express.Router();
const match_controller = require('../../../controllers/api/match');

// Define API routes
router.get('/', (req, res)=>{
    match_controller.getAll(req, res);
});

module.exports = router;
