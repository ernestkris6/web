import {useEffect, useState} from 'react'

const useFetch = () => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    return ( 
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
                setData(data)
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

     return {data, isPending, error};
}
 
export default useFetch;