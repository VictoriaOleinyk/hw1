import React, { useState } from 'react';
import axios from 'axios';


const API_URL = 'https://jsonplaceholder.typicode.com/posts';

function CreatePostForm({ onPostCreated }) {
    const [newPost, setNewPost] = useState({
        title: '',
        body: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewPost((prevPost) => ({
            ...prevPost,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(API_URL, newPost);
            onPostCreated(response.data);
            setNewPost({ title: '', body: '' });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Create Post</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={newPost.title}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="body">Body:</label>
                    <textarea
                        id="body"
                        name="body"
                        value={newPost.body}
                        onChange={handleInputChange}
                    ></textarea>
                </div>
                <button type="submit" onClick={handleSubmit}>Create</button>
            </form>
        </div>
    );
}

export default CreatePostForm;