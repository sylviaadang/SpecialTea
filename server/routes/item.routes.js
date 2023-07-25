const itemController = require('../controllers/item.controller')

module.exports = app => {
    app.get('/api/items', itemController.allItems)
    app.get('/api/items/:id', itemController.oneItem)
    app.post('/api/items', itemController.newItem)
    app.put('/api/items/:id', itemController.updateItem)
    app.delete('/api/items/:id', itemController.deleteItem)
}