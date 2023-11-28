import React from 'react';
import './Blog.css';


const Blog = ({blogs, title, author, body}) => {

    return ( 
       <div >
        {title}
             {blogs.map((blog) => (
            <div className='blog-list'>
                <h2>{blog.title}</h2>
                <p>{blog.body}</p>
                <h4><i>{blog.author}</i></h4>

                <button>See more...</button>
            </div>))}
       </div>
     );
}
 
export default Blog;