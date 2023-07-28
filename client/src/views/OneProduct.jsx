import React, { useEffect, useState, useContext } from 'react'
import NavBar from '../components/NavBar'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
// import Button from '../components/Button'
import { CartContext } from '../CartContext'


const OneProduct = () => {

    const {id} = useParams()
    const [item, setItem] = useState({})

    const navigator = useNavigate()

    const fetchItem = () => {
        axios.get(`http://localhost:8000/api/items/${id}`)
            .then(res => {setItem(res.data)})
            .catch(err => console.log(err))
    }

    useEffect(fetchItem, [])

    //cart functionality
    const cart = useContext(CartContext);


    return (
        <div>
            <NavBar/>
            <div className='d-flex justify-content-evenly mt-5'>
                <div>
                    <img src={item.img} alt="Earl Grey Tea" className='one-item-img' />
                </div>
                <div className='col-4'>
                    <h3>{item.name}</h3>
                    <div className="d-flex gap-5">
                        <p>${item.price}</p>
                        <p>{item.ounce} oz</p>
                    </div>
                    <p>TASTE: {item.flavor}</p>
                    <p>{item.description}</p>
                    {/* <Button item={item}/> */}
                    <button onClick={() => cart.addOneToCart(item._id, item.name, item.price)} >Add to Cart</button>
                </div>

            </div>
        </div>
    )
}

export default OneProduct