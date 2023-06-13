const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    seller:{
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    }
})

const productModel = mongoose.model('Product' , productSchema)

module.exports = productModel