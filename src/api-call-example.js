import axios from 'axios';
import React from 'react';
import { useState,useEffect } from "react";

export default function Apicall() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(resp =>
            setPosts(resp.data)
        ).catch(error => console.error(error));

    });

    return (
        <ul>
            {posts.map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );

}