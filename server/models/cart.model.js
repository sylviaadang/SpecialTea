const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    items: [{
        productId: {
            type: String,
            ref: "item"
        },
        name: String,
        quantity: {
            type: Number,
            required: true,
            min: [1, 'Cannot have less than 1'],
            default: 1,
        },
        price: Number
    }],
}, {timestamps: true})

const Cart = mongoose.model('Cart', CartSchema)
module.exports = Cart
