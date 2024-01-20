import { useParams } from 'react-router-dom';
import './BlogDetails.css';
import useFetch from '../useFetch';

const BlogDetails = () => {
    const { id } = useParams();
    const {data: blog, isPending, error} = useFetch('http://localhost:8000/blogs/' + id);
    

    return ( 
        <div className="blog-details">
            <h1>Blog Details - { id }</h1>
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h3>{ blog.title }</h3>
                <p><b><i>Written by { blog.author }</i></b></p> <br></br>
               <div><h3>{ blog.body }</h3></div> 
               <button>DELETE</button>
                </article>
            ) }
        </div>
     );
}
 
export default BlogDetails;