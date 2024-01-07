import React, {useEffect, useState} from 'react';
import './Home.css'

import Blog from '../Blog';


const Home = () => {

    // const [isPending, setIsPending] = useState(false);

      const [blogs, setBlogs] = useState(null);
      const [isPending, setIsPending] = useState(true);
      const [error, setError] = useState(null);

    const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs)
   }

    
    //Useffect hook

    useEffect(()=> {
        setTimeout(() => {
         fetch(' http://localhost:8000/bloggs')
         .then(res => {
            if(!res.ok) {
               throw Error('Could not fetch data!!!')
            }
            return res.json()
            // console.log(res);
         })
         .then(data => {
            setBlogs(data)
            setIsPending(false);
            setError(null)
         })
         .catch(err => {
            console.log(err.message);
            setError(err.message)
            setIsPending(false)
         })
            
        }, 2000);
    }, []);



    return ( 
        <div className='home'>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <Blog blogs={blogs} handleDelete={handleDelete} title='ALL BLOGS'/>}
            {blogs && <Blog blogs={blogs} handleDelete={handleDelete} title='ALL BLOGS'/>}
        </div>
     );
}
 
export default Home;