import React from 'react';
import './Home.css'
import { useState } from 'react';

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title : "Web Dev Classes", author : "Ernie", body : "Lorem ipsum dolor", id : "1"},
        {title : "How to code", author : "Emma", body : "Lorem ipsum dolor",  id : "2"},
        {title : "Keeping up with programming", author : "Josh", body : "Lorem ipsum dolor",  id : "3"}
    ])
    
    return ( 
        <div className='home'>
              {blogs.map((blog) => (
                <div>
                    <h2>{blog.title}</h2>
                    <p>{blog.body}</p>
                    <h4><i>{blog.author}</i></h4>

                    <button>See more...</button>
                </div>))}
        </div>
     );
}
 
export default Home;