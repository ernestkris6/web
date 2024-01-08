import React, {useEffect, useState} from 'react';
import './Home.css'

import Blog from '../Blog';


const Home = () => {

    // const [isPending, setIsPending] = useState(false);

     

    const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs)
   }

    
    //Useffect hook

    
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