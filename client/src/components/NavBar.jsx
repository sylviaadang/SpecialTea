import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import image from '../images/shopping-cart.png'

export default props => {

    let location = useLocation();


    return (
        <div>
            {/* nav bar */}
            <div>
                <div className='d-flex m-4 justify-content-between align-items-center'>
                    <div className='d-flex align-items-center gap-4'>
                        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.veryicon.com%2Ficons%2Fmiscellaneous%2Ffoods-life%2Ftea-bag-cup.html&psig=AOvVaw0kUT6aHfV2WqgYXSPlICu6&ust=1690305318588000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCJDK3evsp4ADFQAAAAAdAAAAABAE" alt="SpecialTea Logo" />
                        <h1>SpecialTea</h1>
                    </div>
                    <div>
                        <Link className='me-4 link' to='/'>Login</Link>
                    </div>
                </div>
                <div className='d-flex justify-content-between mb-4'>
                    <div className='d-flex justify-content-center gap-5 col-10 ms-8'>
                        <Link to='/' className='link'>Home</Link>
                        <Link to='/' className='link'>Lorem</Link>
                        <Link to='/' className='link'>Ipsum</Link>
                        <Link to='/' className='link'>Placeholder</Link>
                    </div>
                    { location.pathname !== "/checkout" ? 
                    <div className='d-flex justify-content-end me-5'>
                        <Link to ='/checkout'><img src={image} className='shopping-cart' alt="shopping cart" /></Link>
                    </div>
                    : <></>
                    }
                </div>
            </div>
        </div>
    )
}