import { createContext, useState } from "react";
// import axios from "axios";

// const [item, setItem] = useState([])

// const findItem = (id) => {
//     axios.get(`/api/items/${id}`)
//         .then(res => {})
// }

// function getItemData(id) {
//     let itemData = 
// }

export const CartContext = createContext({
    items: [],
    getItemQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {}
})

export function CartProvider({children}) {
    const [cartItems, setCartItems] = useState([]);

    function getItemQuantity(id) {
        const quantity = cartItems.find(item => item._id === id)?.quantity

        if (quantity === undefined) {
            return 0;
        }

        return quantity;
    }

    function addOneToCart(id, name, price) {
        const quantity = getItemQuantity(id);

        if (quantity === 0) {
            setCartItems (
                [
                    ...cartItems,
                    {
                        _id: id,
                        quantity: 1,
                        name: name,
                        price: price
                    }
                ]
            )
        } else {
            setCartItems (
                cartItems.map(
                    item => item._id === id ?
                    {...item, quantity: item.quantity + 1}
                    : item
                )
            )
        }
    }

    function removeOneFromCart(id) {
        const quantity = getItemQuantity(id);

        if (quantity == 1) {
            deleteFromCart(id)
        } else {
            setCartItems (
                cartItems.map(
                    item => item._id === id ?
                    {...item, quantity: item.quantity - 1}
                    : item
                )
            )
        }
    }

    function deleteFromCart(id) {
        setCartItems(
            cartItems => cartItems.filter(currentItem => {
                return currentItem._id != id;
            })
        )
    }

    // function getTotalCost() {
    //     let totalCost = 0;
    //     cartItems.map((cartItem) => {
    //         const itemData = 
    //     })
    // }

    const contextValue = {
        items: cartItems,
        getItemQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        // getTotalCost
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;