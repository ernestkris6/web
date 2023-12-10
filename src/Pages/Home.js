import React, {useState} from 'react';
import './Home.css'

import Blog from '../Blog';


const Home = () => {

      const [blogs, setBlogs] = useState([
        {title : "Web Dev Classes", author : "Ernie", body : "Lorem ipsum dolor", id : "1"},
        {title : "How to code", author : "Emma", body : "Lorem ipsum dolor",  id : "2"},
        {title : "Keeping up with programming", author : "Josh", body : "Lorem ipsum dolor",  id : "3"}
    ]);


    handleDelete = id => {
      blogs = blogs.filter(!blog.id === id)
      setBlogs()
    }
    // const [otp, setOtp] = useState('');

    // const generateOtp = () => {
    //     const randomOtp = Math.floor(100000 + Math.random() * 900000);
    //     setOtp(randomOtp.toString());
    //   }
     


    return ( 
        <div className='home'>
            <Blog blogs={blogs} handleDelete={handleDelete} title='ALL BLOGS'/>
            <Blog blogs={blogs} title='ALL BLOGS'/>
            {/* <p>Your OTP Code is: {otp}</p>
            <button onClick={generateOtp}>generateOtp</button> */}
        </div>
     );
}
 
export default Home;