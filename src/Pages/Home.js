import React, {useEffect, useState} from 'react';
import './Home.css'

import Blog from '../Blog';


const Home = () => {

    // const [isPending, setIsPending] = useState(false);

      const [blogs, setBlogs] = useState(null);
      const [isPending, setIsPending] = useState(true);

   const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs)
   }

    
    //Useffect hook

    useEffect(()=> {
        fetch('http://localhost:8000/blogs')
        .then(res => {
           return res.json();
        })
        .then((data) => {
            console.log(data);
            setBlogs(data)
        });
    }, []);



    return ( 
        <div className='home'>
            {blogs && <Blog blogs={blogs} handleDelete={handleDelete} title='ALL BLOGS'/>}
            {blogs && <Blog blogs={blogs} handleDelete={handleDelete} title='ALL BLOGS'/>}
        </div>
     );
}
 
export default Home;