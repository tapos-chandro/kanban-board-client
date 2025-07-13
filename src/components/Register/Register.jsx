
import { Link } from 'react-router';
import "./Register.css"

const Register = () => {
    return (
        <div>
            <div className="register-container">
                <h1 className="login-title">Register now ! </h1>
                <form>
                    
                    <input className="name" type="text" name="name" placeholder="Enter your name" /><br />
                    <input className="email" type="email" name="password" placeholder="Enter your email" /><br />
                    <input className="password" type="password" name="password" id="" placeholder="Enter your email" /><br />
                    <input className="button" type="submit" value="Submit" />
                </form>
                <p>have an new account? <Link to="/login">Login!</Link></p>
            </div>
        </div>
    );
};

export default Register;