import React, { useState, useEffect } from 'react';
import './Feed.css';
import axios from '../axios';
import Pusher from 'pusher-js';

import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';

const pusher = new Pusher('f5db2c36a6e8c7347002', {
    cluster: 'us3'
});

const Feed = () => {
    const [profilePic, setProfilePic] = useState('')
    const [postsData, setPostsData] = useState([])

    const syncFeed = () => {
        axios.get('/retrieve/posts')
            .then((res) => {
                console.log(res.data);
                setPostsData(res.data);
            })
    }

    useEffect(() => {
        const channel = pusher.subscribe('posts');
        channel.bind('inserted', function (data) {
            syncFeed()
        });
    }, [])

    useEffect(() => {
        syncFeed()
    }, [])

    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            {
                postsData.map(entry => (
                    <Post
                        profilePic={entry.avatar}
                        message={entry.text}
                        timestamp={entry.timestamp}
                        imgName={entry.imgName}
                        username={entry.user}
                    />
                ))
            }
        </div>
    )
}

export default Feed;
