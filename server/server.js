require('dotenv').config()
const port = process.env.PORT
const express = require('express')
const app = express()
const cors = require('cors')
const stripe = require("./routes/stripe")

require('./config/mongoose.config')

app.use(express.json(), express.urlencoded({extended: true}), cors())
app.use("/api/stripe", stripe)


const itemRoutes = require('./routes/item.routes')
const cartRoutes = require('./routes/cart.routes')
cartRoutes(app)
itemRoutes(app)

app.listen(port, () => console.log(`Listening on port: ${port}`))
