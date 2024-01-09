import React, {useEffect, useState} from 'react';
import './Home.css'

import Blog from '../Blog';
import useFetch from '../useFetch';


const Home = () => {

    // const [isPending, setIsPending] = useState(false);
   
     

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