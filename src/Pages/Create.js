import './Create.css';

const Create = () => {
    return ( 
        <div className="create">
            <h1>Add a new blog</h1>

            <form>
                <label>Blog Title:</label>
                <input 
                type='text' 
                required 
                />

                <label>Blog body:</label>
                <textarea
                required
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