import { useState } from 'react';
import './Create.css';

const Create = () => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('');

    return ( 
        <div className="create">
            <h1>Add a new blog</h1>

            <form>
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
                <select>
                    <option value="Ernest">Ernest</option>
                    <option value="Emma">Emma</option>
                </select>

                <button>Submit</button>
            </form>
        </div>     
        );
}
 
export default Create;