import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'



const Home = () => {

    const [product, setProduct] = useState('')


    return (
        <div>
            <NavBar/>
            <div className='hero-bg mb-4'>
                <h2>Test</h2>
            </div>
            <div className='m-4'>
                <h3>Featured Teas</h3>
            </div>
            <div className='m-4'>
                <Card style={{width: '20rem'}}>
                    <Card.Img src=""/>
                    <Card.Body className='text-center'>
                        Short description of tea
                    </Card.Body>
                    <ListGroup className='text-center'>
                        <ListGroup.Item>Stars/Reviews?</ListGroup.Item>
                        <ListGroup.Item>Price</ListGroup.Item>
                        <ListGroup.Item>Ounces</ListGroup.Item>
                    </ListGroup>
                    <Card.Body className='d-flex justify-content-evenly'>
                        <Link>More Details</Link>
                        <Button>Add to Cart</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Home