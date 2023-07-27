const CartController = require('../controllers/cart.controller')

module.exports = app => {
    app.get('/api/cart', CartController.all)

    app.get('/api/cart/:id', CartController.one)

    app.post('/api/cart', CartController.new)
    
    app.put('/api/cart/:id', CartController.update)

    app.delete('/api/cart/:id', CartController.delete)
}
