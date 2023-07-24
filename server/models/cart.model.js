const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    items: [{
        name: String,
        quantity: Number,
        required: true,
        default: 1,
    },
    {
        price: Number
    }]
}, {timestamps: true})

const Cart = mongoose.model('Cart', CartSchema)
module.exports = Cart
