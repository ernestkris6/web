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
            </form>
        </div>     
        );
}
 
export default Create;