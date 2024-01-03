import React from 'react';
import './Blog.css';


const Blog = ({blogs, title, author, body, handleDelete}) => {


    return ( 
       <div>
        <h1> {title}</h1>
             {blogs.map((blog) => (
            <div className='blog-list' key={blog.id}>
                <h2>{blog.title}</h2>
                <p>{blog.body}</p>
                <h4><i>{blog.author}</i></h4>

                <button onClick={()=> handleDelete(blog.id)}>DELETE</button>
            </div>))}
       </div>
     );
}
 
export default Blog;