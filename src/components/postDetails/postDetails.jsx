import {useLoaderData, useNavigate, useParams} from "react-router-dom";


const PostDetails = () => {
    const navigate = useNavigate();
    const {postId} = useParams();

    const post = useLoaderData();
    const {id, body} = post;

    console.log(postId);

    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <div>
            <h3>Post Details: {id} </h3>
            <p>{body}</p>
            <button onClick={handleGoBack}>Go Back</button>



        </div>
    );
};

export default PostDetails;