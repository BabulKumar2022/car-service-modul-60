import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const navigate = useNavigate();
    const navigateLogin =() =>{
        navigate('/login');
    }
    const handleRegister = (event) =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password =event.target.password.value;
        console.log(email, password);
    }

    return (
        <div  className='container'>
            <h1 className='text-center'>Register</h1>
            <form onSubmit={handleRegister} className='register-form'>
                <input type="text" name="name" id="" placeholder='name' /> 
                <input type="email" name="email" id="" placeholder='email address' required/> 
                <input type="password" name="password" id="" placeholder='password' /> 
                <input  type="submit" value="Register" />
                
            </form>
            <p className='text-center'>Already have an account ? <Link to={'/login'} className='text-danger text-decoration-none ' onClick={navigateLogin}>Please Login</Link></p>
        </div>
    );
};

export default Register;