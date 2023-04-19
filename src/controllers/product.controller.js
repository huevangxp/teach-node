const Product = require('../models/product.model')

exports.create = (req, res) => {
   try {
    res.send('create product router')
   } catch (error) {
    return res.status(500).json(error)
    }
    
}