const CartController = require('../controllers/cart.controller')

module.exports = app {
    app.get('/api/cart', CartController.all)

    app.get('/api/cart/:id', CartController.one)

    app.put('/api/authors/:id', CartController.update)

    app.delete('/api/authors/:id', CartController.delete)
}
