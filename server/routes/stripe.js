const express = require('express');
const app = express();
require("dotenv").config();
// app.use(express.static('public'))
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_KEY)

const router = express.Router()

const YOUR_DOMAIN = process.env.YOUR_DOMAIN;

router.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                    name: 'T-shirt',
                },
                unit_amount: 2000,
            },
                quantity: 1,
            },
        ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}/success.html`,
    cancel_url: `${YOUR_DOMAIN}/cancel.html`,
    });
    res.send({url: session.url});
});

module.exports = router;