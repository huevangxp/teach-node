const controller = require('../controllers/product.controller');

module.exports = (app) => {
    app.post('/product', controller.create)
}