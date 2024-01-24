import React from 'react';
import './Home.css';


import Blog from '../Blog';
import useFetch from '../useFetch';


const Home = () => {

    const {data:blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

 
    return ( 
        <div className='home'>
            {/* <img src={img9} alt='' /> */}
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <Blog blogs={blogs} title='ALL BLOGS'/>}

        </div>
     );
}
 
export default Home; 