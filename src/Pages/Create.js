import { useState } from 'react';
import './Create.css';

import { useNavigate } from 'react-router-dom';

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState("Ernest");
    const [isPending, setIsPending] =useState(false)
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const blog = {title, body, author};

        setIsPending(true);
        
       fetch('http://localhost:8000/blogs', {
        method: "POST",
        headers: { "Content-Type" : "application/json" },
        body: JSON.stringify(blog)
       })
       .then(() => {
        console.log("new blog added");
        setIsPending(false);
       })
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
                
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Add Blog...</button>}
                
            </form>
        </div>     
        );
}
 
export default Create;