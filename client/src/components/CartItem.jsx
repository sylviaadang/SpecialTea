import React, { useContext } from 'react'
import { CartContext } from '../CartContext';




const CartItem = (props) => {
    const item = props.item;
    const cart = useContext(CartContext)









    return (
        <div>CartItem</div>
    )
}

export default CartItem