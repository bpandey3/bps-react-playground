import axios from 'axios';
import React from 'react';
import { useState, useEffect } from "react";
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export default function Apicall() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    //old code
    // useEffect(() => {
    //     axios.get(API_URL).then(resp =>
    //         setPosts(resp.data)
    //     ).catch(error => console.error(error));

    // });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                //console.log(data)
                setPosts(data);

                setLoading(false);
            } catch (error) { setError(error); setLoading(false); }

        }

        fetchData();
    }, []);

    if (loading) { return <div>Loading...</div>; } if (error) { return <div>Error: {error.message}</div>; }

    return (

        // <div> <h1>API Data</h1> 
        // {/* <pre>{JSON.stringify(data, null, 2)}</pre>  */}

        // {/* <ul>
        //     {posts.map(post => (
        //         <li ID and Title is   key={post.id}>{post.title}</li>
        //     ))}
        // </ul> */}
        // </div>

        <div> <h1>API Data</h1> 
        <ul> 
            {posts.map((p, index) => 
                (<li key={index}> User ID is: {p.id},   title : {p.title} </li>))}
        </ul>
        </div>
    );

}
