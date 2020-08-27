import React from 'react';
import Post from './Post/Post';
import './Posts.scss';

const Posts = (props) => {
    let posts = [
        { id: 1, message: "Hello how are you?" },
        { id: 2, message: "It is my first post" },
    ]

    let postElements = posts
        .map(p => <Post id={p.id} message={p.message} />)

    return (
        <div className="posts">
            <div className="post-add">
                <h2>My posts</h2>
                <textarea placeholder="Your text"></textarea>
                <button className="btn" type="button">Add post</button>
            </div>
            {postElements}
        </div>
    )
}

export default Posts;