const express = require('express');
const router = express.Router()

const productRoute = require('./product.routes');

productRoute(router);

module.exports = router;