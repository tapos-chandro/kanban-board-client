import { Link, useNavigate } from "react-router";
import "./login.css"
import useAuth from "../../hooks/useAuth";




const Login = () => {
    const {logInUser} = useAuth()

    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault() ;
        const from = e.target;

        const email = from.email.value;
        const password = from.password.value;

        try {
            const res = await logInUser(email, password)
            console.log(res.user.email)
            if(res?.user?.email){

                navigate('/')
            }
        } catch (error) {
            console.log(error.message)
        }

        

    }

    return (
        <div className="login-container">
            <h1 className="login-title">Login User </h1>
            <form onSubmit={handleSubmit}>
                <input className="email" type="email" name="email" placeholder="Enter your email"/><br/>
                <input className="password" type="password" name="password" id="" placeholder="Enter your email"/><br/>
                <input className="button" type="submit" value="Submit" />
            </form>
            <p>Already have an account? <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Login;