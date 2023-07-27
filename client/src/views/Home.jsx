import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import axios from 'axios'



const Home = () => {

    

    const [items, setItems] = useState([])

    const fetchItems = () => {
        axios.get('http://localhost:8000/api/items')
            .then(res => setItems(res.data))
            .catch(err => console.log(err))
    }

    useEffect(fetchItems, [])

    return (
        <div>
            <NavBar/>
            <div className='hero-bg mb-4'>
                <h2>Test</h2>
                {/* <h3>From local storage: {localStorage.getItem('items')}</h3> */}
            </div>
            <div className='m-4'>
                <h3>Featured Teas</h3>
            </div>
            <div className='m-4 d-flex flex-wrap justify-content-evenly'>
                {items.map((item, key) => {
                    return (
                        <Link to={`/items/${item._id}`}>
                            <Card style={{width: '20rem', outline: 'none'}} className='m-5 d-flex'>
                                <Card.Img src={item.img} className='card-img'/>
                                <Card.Body className='text-center'>
                                    <p>{item.name}</p>
                                    {/* {<Button id={item._id}/>} */}
                                </Card.Body>
                            </Card>
                        </Link>
                    )
                })}
                
            </div>
        </div>
    )
}

export default Home