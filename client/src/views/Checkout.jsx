import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Checkout = () => {

    const [cartItems, setCartItems] = useState([])

    
    const allCartItems = () => {
        axios.get('http://localhost:8000/api/cart')
            .then(res => setCartItems(res.data))
            .catch(err => console.log(err))
    }
    
    // const storage = localStorage.getItem("cart")
    // const {obj} = localStorage.getItem("cart")
    // // localStorage.cart = JSON.stringify(Array.from(cart.entries()));
    // const [items, setItems] = useState([]);

    // useEffect(() => {
    //     const items = JSON.parse(localStorage.getItem('cart'));
    //     if (items) {
    //         setItems(items);
    //         console.log(items)
    //     }
    // }, []);

    // const updateQuantity = (e) => {

    // }

    return (
        <div>
            <NavBar/>
            {/* {items.map((item, key) => {
                return (
                    <div key={key} className='d-flex justify-content-center align-items-center gap-5 m-5'>
                        <img src={item.img} alt={item.name} className='checkout-img'/>
                        <p className='reset'>{item.name}</p>
                        <form> 
                            <input type="number" name="quantity" className='checkout-qty' defaultValue="1" min="1"/>
                            <Link to='/checkout'  className='mx-3 link'>Update</Link>
                        </form>
                    </div>
                )
            })
        } */}
            {cartItems.map((item, key) => {
                return (
                    <div>  
                        <p>{item.name}</p>
                    </div>
                )
            })

            }


        </div>
    )
}

export default Checkout