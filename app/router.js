const { Router } = require('express');

const mainController = require('./controllers/mainController.js');
const heroController = require('./controllers/heroController.js');
const servicesController = require('./controllers/servicesController.js');
const reviewsController = require('./controllers/temoignagesController.js');

const router = Router();

router.get('/', mainController.homepage);
router.get('/heroes', heroController.list);
router.get('/services', servicesController.list);
router.get('/reviews', reviewsController.list);

module.exports = router;