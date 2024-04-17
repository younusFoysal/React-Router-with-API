import {Link} from "react-router-dom";


const User = ({user}) => {

    const {id, name, email, phone} = user;
    const userStyle = {
        border: '2px solid blue',
        padding: '5px',
        borderRadius: '20px',
        marginBottom: '10px',
        width: '300px',
        textAlign: 'center'
    }

    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/users/${id}`}>Show Details</Link>
            <Link to={`/users/${id}`}>
                <button>Click ME</button>
            </Link>
        </div>
    );
};

export default User;