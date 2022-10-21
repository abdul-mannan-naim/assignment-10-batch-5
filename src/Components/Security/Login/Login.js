import React, { useRef, useState } from 'react';
import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {   Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../../Pages/SocialLogin/SocialLogin';
import { async } from '@firebase/util';
import Loading from '../../Pages/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const [email, setEmail] =useState('')
    const emailRef = useRef('');
    const passwordRef = useRef('')
    const navigate = useNavigate()
    const location = useLocation()
    let errorElement;

    let from = location?.state?.from?.pathname || '/';

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, updateError] = useSendPasswordResetEmail(
        auth
      );

      if(loading || sending){
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true })
    }
    if (error ) {
        errorElement = <p className='text-danger'>{error.message}</p>
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }
    const navigateRagister = (event) => {
        navigate('/signup')
    }
    const resetPassword = async() => {
        const email = emailRef.current.value;
      if(email){
        await sendPasswordResetEmail(email)
        toast('Email Sent')
      }
      else{
        toast('Please Enter your Email')
      }
    }


    return (
        <div className='form-container'>
            <div className='login-container'>
                <form onSubmit={handleSubmit} className='login-form'>
                    <h1>Please Login</h1>
                    <div>
                        <label className='d-block' htmlFor="email">Your Email</label>
                        <input onChange={(e) => setEmail(e.target.value)} ref={emailRef} type="email" name="email" id="" required />
                    </div>
                    <div>
                        <label className='d-block' htmlFor="password">Your Password</label>
                        <input ref={passwordRef} type="password" name="password" id="" required />
                    </div>
                    <div>
                        {errorElement}
                        {/* <p>New to Hello Doctor? <span className='sign-up-link' onClick={navigateRagister} >Please Register</span> </p> */}
                        <p>Create a New Account? <Link className='sign-up-link' onClick={navigateRagister} to='/signup' > Sign UP</Link></p>
                        <p>Forget Password? <button className='sign-up-link btn btn-link' onClick={resetPassword}  > Reset Password</button></p>
                        <input className='input-btn' type="submit" value="Login" />
                    </div>
                </form>
                <SocialLogin></SocialLogin>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Login;