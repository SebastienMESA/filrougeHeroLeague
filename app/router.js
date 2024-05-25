const { Router } = require('express');

const mainController = require('./controllers/mainController.js');

const router = Router();

router.get('/', mainController.homepage);

module.exports = router;