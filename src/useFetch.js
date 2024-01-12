import {useEffect, useState} from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

        useEffect(()=> {

            const abortCont = new AbortController();
            setTimeout(() => {
             fetch(url, {signal: signal.abortCont})
             .then(res => {
                if(!res.ok) {
                   throw Error('Could not fetch data!!!')
                }
                return res.json()
                
             })
             .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
             })
             .catch(err => {
               if (err.name === 'AbortError') {
                  console.log('err aborted');
               }
               else {
                  setIsPending(false)
                  setError(err.message)
                  console.log(err.message);
               }
                
                
                
             })
                
            }, 2000);

            return () => abortCont.abort();
        }, [url])
    
     

     return {data, isPending, error};

}
 
export default useFetch;