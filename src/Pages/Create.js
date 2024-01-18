import { useState } from 'react';
import './Create.css';

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState("Ernest");

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return ( 
        <div className="create">
            <h1>Add a new blog</h1>

            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input 
                type='text' 
                required 
                value={title}
                onChange={(e) => setTitle(e.target.value)}

                />

                <label>Blog body:</label>
                <textarea
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                ></textarea>

                <label>Blog author:</label>
                <select 
                value={author}
                onChange={(e) => setAuthor(e.target.value)}>
                    <option value="Ernest">Ernest</option>
                    <option value="Emma">Emma</option>
                </select>

                <button>Add Blog</button>
                
            </form>
        </div>     
        );
}
 
export default Create;