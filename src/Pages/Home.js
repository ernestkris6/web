import React, {useEffect, useState} from 'react';
import './Home.css'

import Blog from '../Blog';
// import useFetch from '../useFetch';


const Home = () => {

    // const [isPending, setIsPending] = useState(false);
   
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    useEffect(()=> {
        setTimeout(() => {
         fetch('http://lovalhost:8000/blogs')
         .then(res => {
            if(!res.ok) {
               throw Error('Could not fetch data!!!')
            }
            return res.json()
            
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
    }, [])



   //  const handleDelete = (id) => {
   //  const newBlogs = blogs.filter(blog => blog.id !== id);
   //  setBlogs(newBlogs)
   // }


    return ( 
        <div className='home'>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <Blog blogs={blogs} title='ALL BLOGS'/>}

        </div>
     );
}
 
export default Home;