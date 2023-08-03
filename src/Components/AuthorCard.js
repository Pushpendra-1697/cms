import React from 'react';
import '../App.css';

const AuthorCard = ({ author }) => {

    return (
        <div className='authorCard'>
            <img className='profile' src={author.avatar.file.url} title='Profile'></img>
            <h3>{author?.name}</h3>
            <p>{author?.description}</p>
        </div>
    );
}

export default AuthorCard;