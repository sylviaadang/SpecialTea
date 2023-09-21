import axios from 'axios';
import {useSelector} from 'react';
// import { url } from "../slices/api"

const PayButton = ({cartItems}) => {

    const handleCheckout = () => {
        //performing http request
        console.log(cartItems)
    }

    return (
        <>
            <button onCLick={() => handleCheckout}>Check Out</button>
        </>
    );
}

export default PayButton;