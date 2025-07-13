
import { NavLink, Outlet, useNavigate } from 'react-router';
import './Layout.css'
import useAuth from '../hooks/useAuth';


const Layout = () => {
    const { logOutUser } = useAuth();
    const navigate = useNavigate();


    const handleLogOut = async () => {
        await logOutUser();
        navigate('/login')
    }

    return (
        <div className="">
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/register">Register</NavLink>
                <button className='logout-btn' onClick={handleLogOut}>Log Out</button>
            </nav>
            <div className="main-container">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Layout;