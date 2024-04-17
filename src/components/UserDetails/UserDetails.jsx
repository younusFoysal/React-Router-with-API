import {useLoaderData} from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData();
    const {name,website} = user;
    return (
        <div>
            <h2>Details About User</h2>
            <p>Name: {name}</p>
            <p>Website: {website}</p>
        </div>
    );
};

export default UserDetails;