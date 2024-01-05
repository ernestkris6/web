import React, {useState} from 'react';
import './Home.css'

import Blog from '../Blog';


const Home = () => {

    // const [isPending, setIsPending] = useState(false);

      const [blogs, setBlogs] = useState(null);

   const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs)
   }

    
    //Useffect hook

    useEffect(()=> {
        console.log("use effect ran");
        console.log(blogs);
    }, [])


    return ( 
        <div className='home'>
            <Blog blogs={blogs} handleDelete={handleDelete} title='ALL BLOGS'/>
            <Blog blogs={blogs} handleDelete={handleDelete} title='ALL BLOGS'/>
        </div>
     );
}
 
export default Home;