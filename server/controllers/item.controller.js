const Item = require('../models/item.model')

module.exports = {

    all : (req, res) => {
        Item.find()
            .then(item => res.json(item))
            .catch(err => res.json(err))
    },

    one: (req, res) => {
        Item.findOne({_id: req.params.id})
            .then(item => res.json(item))
            .catch(err => res.json(err))
    }
}
