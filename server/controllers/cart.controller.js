const Cart = require('../models/cart.model')

module.exports = {
    // This will get all cart items
    all: (req, res) => {
        Cart.find()
            .then(cart => res.json(cart))
            .catch (err => res.json(err))
    },
    // This will get one cart item
    one: (req, res) => {
        Cart.findOne({_id: req.params.id})
            .then((cart => res.json(cart)))
            .catch(err => res.json(err))
    },
    // This will update cart item
    update: (req, res) => {
        Cart.findOneAndUpdate({_id: req.params.id}, {runValidators: true, new: true})
            .then(cart => res.json(cart))
            .catch(err => res.status(400).json(err))
    },
    // This wil delete cart item
    delete: (req, res) => {
        Cart. findOneAndDelete( {_id: req.params.id})
            .then(res => res.json(res))
            .catch (err => res.json(err))
    }


}
