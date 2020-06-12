import React from 'react';
import './style.css';

const Media = ({title, body, url}) => (
    <div>
        <h2>{title}</h2>
        <p>{body}</p>
        <img src={url} alt='img' clasName='image'></img>
    </div>
)

export default Media;