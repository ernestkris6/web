import React from 'react';

import './Navbar.css';

const Navbar =() => {
  return (
    <div className='navbar'>
        <div className='header'>
            <h1>Kris Blog</h1>
        </div>
        <div className='links'>
            <a href='/'>Home</a>
            <a style={{
            backgroundColor:'#c1630b', 
            borderRadius:'12px', 
            color: 'white', 
            padding: '6px' }} 
            href='Blogs'>BLOGS</a>
        </div>
    </div>
  )
}

export default Navbar;