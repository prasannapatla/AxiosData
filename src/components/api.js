import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Api() {
    const [posts,setPost] = useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                setPost(res.data)
                console.log(res)
            })
            .catch(error=>{console.log("error")})
    },[])
    return (
        <div>
            <ul>
                {posts.map((post) => 
                    <li key={post.id}>{post.title}</li>
                )}
            </ul>
        </div>
    )
}
export default Api;
