import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CreatePostForm from '../CreatePostForm/CreatePostForm';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => setPosts(response.data))
            .catch(error => console.error(error));
    }, []);

    const handlePostCreated = (newPost) => {
        setPosts(prevPosts => [newPost, ...prevPosts]);
    };

    return (
        <div>
            <h4>Posts</h4>
            <ul>
                {posts.map(p => (
                    <li key={p.id}>
                        <Link to={`/posts/${p.id}`}>{p.title}</Link>
                    </li>
                ))}
            </ul>
            <CreatePostForm onPostCreated={handlePostCreated} setPosts={setPosts} />
        </div>
    );
};

export default PostList;