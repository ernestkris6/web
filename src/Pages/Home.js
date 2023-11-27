import React from 'react';
import './Home.css'
import { useState } from 'react';

const Home = () => {

    const [blog, setBlog] = useState({
        title : "Web Dev Classes", author : "Chris", body : "Lorem ipsum dolor", id : "1"
    },
    {
        title : "How to code", author : "Emma", body : "Lorem ipsum dolor",  id : "2"
    },
    {
        title : "Keeping up with programming", author : "Josh", body : "Lorem ipsum dolor",  id : "3"
    })
    
    return ( 
        <div className='home'>
            <p>{blog.title}</p>
            <p>{blog.body}</p>
            <p><i>{blog.author}</i></p>
        </div>
     );
}
 
export default Home;