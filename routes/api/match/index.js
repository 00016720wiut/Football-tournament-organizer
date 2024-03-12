const express = require('express');
const { validationResult } = require('express-validator');
const { addMatchValidation, editMatchValidation, deleteMatchValidation } = require('../../../validators/match');

const router = express.Router();
const match_controller = require('../../../controllers/api/match');

// Defining api routes
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

router.put('/:id', editMatchValidation(), (req, res)=>{
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  match_controller.edit(req, res)
})

router.delete('/:id', deleteMatchValidation(), (req, res, next)=>{
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  match_controller.delete(req, res)
})

module.exports = router;