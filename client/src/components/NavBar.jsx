import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {




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
                <div className='d-flex justify-content-center gap-5 mb-4'>
                    <Link to='/' className='link'>Home</Link>
                    <Link to='/' className='link'>Lorem</Link>
                    <Link to='/' className='link'>Ipsum</Link>
                    <Link to='/' className='link'>Placeholder</Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar