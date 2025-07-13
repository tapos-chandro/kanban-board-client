
import { NavLink, Outlet } from 'react-router';
import './Layout.css'


const Layout = () => {
    return (
        <div className="">
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/register">Register</NavLink>
            </nav>
            <div className="main-container">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Layout;