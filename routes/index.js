const express = require('express');
const router = express.Router();
const swaggerMiddleware = require('./swagger');

router.use('/contacts', require('./contacts'));
router.use('/', swaggerMiddleware);

module.exports = router;