import React from 'react';

const VideoItem = ({video: { snippet }}) => (
    <li>
        <img 
        src = {snippet.thumnails.medium.url} 
        alt="vdo thumbnail" />
    <div>
        <p>{snippet.title}</p>
        <p>{snippet.channelTitle}</p>
    </div>
    </li>
            
    );

export default VideoItem;