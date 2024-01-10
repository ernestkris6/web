import {useEffect, useState} from 'react'

const useFetch = (url) => {

   
    return ( 
        useEffect(()=> {
            setTimeout(() => {
             fetch('http://localhost:8000/blogs')
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
    
     );

}
 
export default useFetch;