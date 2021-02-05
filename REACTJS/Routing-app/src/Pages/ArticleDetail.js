import React from 'react'
import { useParams } from 'react-router-dom'

/*
useState(()=>{
console.log('hello')
},[])
*/

function ArticleDetail({single}) {
    let{id} = useParams();
     
    return (
    
        <div>
            <h1>Article detail page</h1>
            <h2>Article ID is{id} </h2>
            {console.log(single)}
            <h3 style={{'display':'block'}}>Article TITLE: {single.title}</h3>
            <p>{single.body}</p>
        </div>
    )
}

export default ArticleDetail




