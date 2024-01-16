import './Create.css';

const Create = () => {
    return ( 
        <div className="create">
            <h1>Add a new blog</h1>

            <form className='form'>
                <label>Blog Title:</label>
                <input 
                type='text' 
                required 
                />

                <label>Blog body:</label>
                <textarea
                required
                ></textarea>

            </form>
        </div>     
        );
}
 
export default Create;