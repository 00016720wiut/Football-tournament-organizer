const express = require('express');
const router = express.Router();
const home_controller = require('../../../controllers/web/home');

router.get('/', home_controller.index);
router.get('/add', home_controller.add);
router.get('/edit', home_controller.edit);
router.get('/edit/:id', home_controller.edit);

module.exports = router;


