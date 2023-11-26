import React from 'react';

import './Navbar.css';

const Navbar =() => {
  return (
    <div className='navbar'>
        <div className='header'>
            <h1>Kris Blog</h1>
        </div>
        <div className='links'>
            <a href='/' >Home</a>
            <a href='Blogs'>BLOGS</a>
        </div>
    </div>
  )
}

export default Navbar;