import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './PostDetails.css'
import Comments from '../Comments/Comments';

const PostDetails = () => {
    const { postId } = useParams();

    // fetch post data
    const [postData, setPostData] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json())
            .then(data => setPostData(data));
    }, [])
    const { title, body } = postData;

    //fetch comments
    const [comments, setComments] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then(res => res.json())
            .then(data => {
                setComments(data)
            })
    }, [])

    return (
        <div>
            <div className="details">
                <h3>{title}</h3>
                <p>{body}</p>
            </div>
            <h2>Comments:</h2>
            {
                comments.map(cmt => (
                    <Comments comments={cmt} key={cmt.id}></Comments>
                ))
            }
        </div>

    );
};

export default PostDetails;