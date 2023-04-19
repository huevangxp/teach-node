const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    detail:String
})

const product = new mongoose.model('Product', productSchema)
module.exports = product