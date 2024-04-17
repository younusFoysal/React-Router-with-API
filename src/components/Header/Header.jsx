import './Header.css';
import {Link, NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div>

            <nav>
                {/*<span>My Website</span>*/}
                <Link to="/">Home</Link>

                <NavLink to="/users">Users</NavLink>
                {/*<Link to="/users">Users</Link>*/}
                <NavLink to="/posts">Posts</NavLink>
                {/*<Link to="/posts">Post</Link>*/}

                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>

            </nav>
        </div>
    );
};

export default Header;