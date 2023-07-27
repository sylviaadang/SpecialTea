import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Button = (props) => {

    const {item} = props

    // const [cart, setCart] = useState(JSON.parse(localStorage.getItem('items')))

    const [cartItem, setCartItem] = useState({})

    const navigator = useNavigate()

    const addItemToCart = (e) => {
        // setCart(item => ({...item, [e.target.id]: e.target.value}))
        // navigator('/')
        axios.post('http://localhost:8000/api/cart')
            .then(res => {
                setCartItem({
                    items: [{
                        name: `${item.name}`,
                        quantity: 1
                    }]
                })
                navigator('/checkout')
            })
            .catch(err => console.log(err))
    }



    return (
        <div>
            <button onClick={addItemToCart} className='p-1'>Add to cart</button>
        </div>
    )
}

export default Button