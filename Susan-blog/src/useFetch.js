import React from 'react'
import './index.css';
import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


    // fetching data from db.json file
    useEffect(() => {
        // to stop and abort the fetch thats happening
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    if (!res.ok) { // error controle
                        throw Error('could not fetch the data')
                    }
                    return res.json();
                })
                .then(data => {
                    console.log(data);
                    setData(data)
                    setIsPending(false) // end "loading" div
                    setError(null);
                })
                .catch(err => {
                    if (err.name === 'AbortError') {
                        console.log('fetch aborted')
                    } else {
                        setIsPending(false);
                        setError(err.message)// catching errors and updating the state
                    }
                })
        }, 1000);

        // to clean up errors that occur when you change between components back and forth to quickly
        return () => abortCont.abort();

    }, [url]);

    return { data, isPending, error }
}



export default useFetch