import { createContext, useState } from "react";

export const CartContext = createContext({
    //dont define functions here, simply stating that we can define a function
    items: [],
    getItemQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {}
})

//context (cart, addToCart, etc)
//Provider (gives react app access to all the functions in our CartContext)

export function CartProvider({children}) {

    //state specific to our Provider
    const [cartItems, setCartItems] = useState([]);


    //.find() array function to get access to current element we're looping over (item)
    //and if the current id is equal to the id that we pass into the function, we then want to get the quantity
    function getItemQuantity(id) {
        //? if we get .find does not find an item with matching id's, we will not ask for the quantity
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

    //this Provider showing information to the whole application
    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;