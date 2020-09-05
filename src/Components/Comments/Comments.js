import React, { useState } from 'react';
import './Comments.css'
import pics from '../PicData';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const Comments = (props) => {
    const { name, email, body, id } = props.comments;

    // styles for image sizing
    const useStyles = makeStyles((theme) => ({
        large: {
            width: theme.spacing(12),
            height: theme.spacing(12),
        },
    }));
    const classes = useStyles();


    return (
        <Box display="flex" className="comments" alignItems="center">
            <div className="roundedImg">
                <Avatar alt="random pic" src={pics[id]} className={classes.large} />
            </div>
            <div>
                <h3 className="commenter">{name}</h3>
                <p className="cmtEmail"><small>email: <span className="emailHighlight">{email}</span></small></p>
                <p className="cmtDetails">{body}</p>
            </div>
        </Box>
    );
};

export default Comments;