const Item = require('../models/item.model')

module.exports = {

    allItems: (req, res) => {
        Item.find()
            .then(item => res.json(item))
            .catch(err => res.json(err))
    },

    oneItem: (req, res) => {
        Item.findOne({_id: req.params.id})
            .then(item => res.json(item))
            .catch(err => res.json(err))
    },

    newItem: (req, res) => {
        Item.create(req.body)
            .then(newItem => res.json(newItem))
            .catch(err => res.status(400).json(err))
    },

    updateItem: (req, res) => {
        Item.update({_id: req.params._id}, req.body, {new: true, runValidators: true})
            .then(item => res.json(item))
            .catch(err => res.status(400).json(err))
    },

    deleteItem: (req, res) => {
        Item.deleteOne({_id: req.params.id})
            .then(item => res.json(item))
            .catch(err => res.json(err))
    }
}
