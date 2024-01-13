import { useParams } from 'react-router-dom';
import './BlogDetails.css';
import useFetch from '../useFetch';
const BlogDetails = () => {
    const { id } = useParams();
    const {data, isPending, error} = useFetch('http://localhost:8000/blogs/' + id);


    return ( 
        <div className="blog-details">
            <h1>Blog Details - { id }</h1>
            { isPending && <div>Loading...</div>}
            {error && <div>{ error }</div>}
            { data }
        </div>
     );
}
 
export default BlogDetails;