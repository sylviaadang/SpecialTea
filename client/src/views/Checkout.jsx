import React, { useState, useEffect, useContext } from 'react'
import NavBar from '../components/NavBar'
import PayButton from '../components/PayButton'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext'

const Checkout = (props) => {

    const cart = useContext(CartContext);
    const id = props.id
    // const itemQuantity = cart.getItemQuantity(item._id)
    const [cartItems, setCartItems] = useState([])

    
    const allCartItems = () => {
        axios.get('http://localhost:8000/api/cart')
            .then(res => setCartItems(res.data))
            .catch(err => console.log(err))
    }

    console.log(cart.items)
    
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

    const itemsCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);

    // function subtotal(){
    //     const items = cart.items
    //     let total = 0;
    //     for (i = 0; i < items.length; i++) {
    //         total += items.price * items.quantity
    //     }
    //     return total;
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
            <h2 className='text-center mt-5'>Shopping Cart</h2>
            {itemsCount > 0 ? 
                <>
                {cart.items.map((currentItem, key) => {
                    return (
                        <div key={key} className='d-flex gap-5 justify-content-center my-3'>
                            <p>{currentItem.name}</p>
                            <p>${currentItem.price}</p>
                            <form className='d-flex align-items-center'>
                                <button type='button' className='rounded update-btn mx-2' onClick={() => cart.removeOneFromCart(currentItem._id)}>-</button>
                                <p>{currentItem.quantity}</p>
                                <button type='button' className='rounded update-btn mx-2' onClick={() => cart.addOneToCart(currentItem._id)}>+</button>
                            </form>
                            <button type='button' className='remove link' onClick={() => cart.deleteFromCart(currentItem._id)}>Remove</button>
                        </div>
                    )
                })}
                </>
                :
                <p className='text-center mt-5'>No items in cart</p>
            }
            <h4 className='text-center m-5'>Subtotal: ${(cart.items.reduce((total, item) => total+(item.price*item.quantity), 0)).toFixed(2)}</h4>
            <div>
                <PayButton/>
            </div>
        </div>
    )
}

export default Checkout