import { Link } from "react-router";
import "./login.css"
import useAuth from "../../hooks/useAuth";



const Login = () => {
    const {user} = useAuth()
    console.log(user)
    return (
        <div className="login-container">
            <h1 className="login-title">Login User </h1>
            <form>
                <input className="email" type="email" name="password" placeholder="Enter your email"/><br/>
                <input className="password" type="password" name="password" id="" placeholder="Enter your email"/><br/>
                <input className="button" type="submit" value="Submit" />
            </form>
            <p>Already have an account? <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Login;