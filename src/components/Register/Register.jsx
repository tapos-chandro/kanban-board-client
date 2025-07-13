
import { Link, useNavigate } from 'react-router';
import "./Register.css"
import useAuth from '../../hooks/useAuth';
import { useState } from 'react';
import { toast } from 'react-toastify';

const Register = () => {
    const { createUser, userProfileUpdate } = useAuth()
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        const from = e.target;
        const name = from.name.value;
        const email = from.email.value;
        const password = from.password.value;

        if (password.length < 6) {
            setError('Password at least 6 characters')
            return
        }


        try {
         const res =  await createUser(email, password)


            const update = await userProfileUpdate(name)
            console.log(update)
            if(res?.user?.email){
                   toast('successfully register')

                   navigate('/login')
            }

            setError('')
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div>
            <div className="register-container">
                <h1 className="login-title">Register now ! </h1>
                <form onSubmit={handleSubmit}>

                    <input className="name" type="text" name="name" placeholder="Enter your name" /><br />
                    <input className="email" type="email" name="email" placeholder="Enter your email" /><br />
                    <input className="password" type="password" name="password" id="" placeholder="Enter your password" /><br />
                    <p className='error'>{error}</p>
                    <input className="button" type="submit" value="Submit" />
                </form>
                <p>have an new account? <Link to="/login">Login!</Link></p>
            </div>
        </div>
    );
};

export default Register;