const mongoose = require('mongoose')


const ItemSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true,
    },

    flavor: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    price: {
        type: Number,
        required: true,
    },

    ounce: {
        type: Number,
        required: true,
    },
    
    img: {
        type: String
    },
}, {timestamps: true})

const Item = mongoose.model('Item', ItemSchema)
module.exports = Item
