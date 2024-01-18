import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';


const Blog = ({blogs, title}) => {


    return ( 
       <div className=''>
        <h1>{title}</h1>
             {blogs.map((blog) => (
            <div className='blog-list' key={blog.id}>
                <Link to={`/blogs/${blog.id}`}>
                <h2>{blog.title}</h2>
                <p>{blog.body}</p>
                </Link>
                <h4><i>{blog.author}</i></h4>

                <button>DELETE</button>
            </div>))}
       </div>
     );
}
 
export default Blog;