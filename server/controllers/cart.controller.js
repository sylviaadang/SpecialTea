const Cart = require('../models/cart.model')

module.exports = {

    all: (req, res) => {
        Cart.find()
            .then(cart => res.json(cart))
            .catch (cart => res.json(err))
    },

    update: (req, res) => {
        Cart.findOneAndUpdate({_id: req.params.id}, {runValidators: true, new: true})
            .then(cart => res.json(cart))
            .catch(err => res.status(400).json(err))
    },

    delete: (req, res) => {
        Cart. findOneAndDelete( {_id: req.params.id})
            .then(res => res.json(res))
            .catch (err => res.json(err))
    }


}
