import {Link, useLoaderData, useNavigate} from "react-router-dom";


const Post = ({post}) => {

    //const users = useLoaderData();

    const {id, title} = post;

    const navigate = useNavigate();

    const postStyle = {
        border: '2px solid green',
        padding: '5px',
        borderRadius: '15px',
        marginBottom: '10px',
        width: '300px',
        textAlign: 'center'
    };

    const handleShowDetails = () => {
            navigate(`/posts/${id}`);
    }

    return (
        <div style={postStyle}>
            <h4>Post No: {id}</h4>
            <p>Title: {title}</p>
            <Link to={`/posts/${id}`}>Post Details</Link>
            <Link to={`/posts/${id}`}>
                <button>Show Details</button>
            </Link>
            <button onClick={handleShowDetails}>Click to see details</button>

        </div>
    );
};

export default Post;