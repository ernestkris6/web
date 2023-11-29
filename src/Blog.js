import React from 'react';
import './Blog.css';


const Blog = ({blogs, title, author, body}) => {

    return ( 
       <div>
        <h1> {title}</h1>
             {blogs.map((blog) => (
            <div className='blog-list'>
                <h2>{blog.title}</h2>
                <p>{blog.body}</p>
                <h4><i>{blog.author}</i></h4>

                <button>DELETE</button>
            </div>))}
       </div>
     );
}
 
export default Blog;