import React, {useState} from 'react';
import './Home.css'

import Blog from '../Blog';


const Home = () => {

      const [blogs, setBlogs] = useState([
        {title : "Web Dev Classes", author : "Ernie", body : "Lorem ipsum dolor", id : "1"},
        {title : "How to code", author : "Emma", body : "Lorem ipsum dolor",  id : "2"},
        {title : "Keeping up with programming", author : "Dave", body : "Lorem ipsum dolor",  id : "3"}
    ]);


   const handleDelete = (id) => {
      const newBlogs = blogs.filter(blog => blog.id !== id);
      setBlogs(newBlogs);
    }    

    //Useffect hook

    // useEffect(()=> {
    //     console.log("use effect ran");
    // }, [])


    return ( 
        <div className='home'>
            <Blog blogs={blogs} handleDelete={handleDelete} title='ALL BLOGS'/>
    
        </div>
     );
}
 
export default Home;