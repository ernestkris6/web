import React from 'react'


const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="">
                <h1>Kris Blog</h1>
                <div className="links">
                    <a href="/">Home</a>
                    <a href="/blogs">BLOG</a>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;