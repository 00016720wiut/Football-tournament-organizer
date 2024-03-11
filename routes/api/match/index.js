const express = require('express');
const { validationResult } = require('express-validator');
const { addMatchValidation } = require('../../../validators/match');

const router = express.Router();
const match_controller = require('../../../controllers/api/match');

// Define API routes
router.get('/', (req, res)=>{
    match_controller.getAll(req, res);
});

router.post('/', addMatchValidation(), (req, res)=>{
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    match_controller.create(req, res)
})

module.exports = router;

