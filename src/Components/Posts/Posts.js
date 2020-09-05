import React, { useEffect, useState } from 'react';
import './Posts.css';
import PostCard from '../PostCard/PostCard';


const Posts = () => {

    // fetch posts
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data));
    }, [])

    return (
        <div>
            {
                posts.map(post => (
                    <PostCard post={post} key={post.id}></PostCard>))
            }
        </div>
    );
};

export default Posts;