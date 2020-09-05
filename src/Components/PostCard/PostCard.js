import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './PostCard.css'
import { Link } from "react-router-dom";

const PostCard = (props) => {
    const { title, id, body } = props.post;

    return (
        <Card className="postsCard">
            <CardContent>
                {/* title & body as requirement, ignored id */}
                <Typography variant="h5" component="h2">{title}</Typography>
                <Typography className="postBody" variant="body3" component="p">{body}</Typography>
                <br />
                <Link to={"postCard/" + id}>
                    <Button variant="contained" color="primary">See more</Button>
                </Link>
            </CardContent>
        </Card>
    );
};

export default PostCard;