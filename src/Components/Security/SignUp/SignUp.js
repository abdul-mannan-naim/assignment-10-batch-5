import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../../Pages/SocialLogin/SocialLogin';
import { async } from '@firebase/util';
import Loading from '../../Pages/Loading/Loading';


const SignUp = () => {

    const [agree, setAgree] = useState(false)


    let errorElement;
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });


    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate()

    const navigateLogin = () => {
        navigate('/login')
    }
    if(updating){
        return <Loading></Loading>
    }


    if (error) {
        errorElement = <p className='text-danger'>{error.message}</p>
    }
    const handleSignUp = async (event) => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name})
        alert('updated profile')
        navigate('/home')
    }

    return (
        <div>
            <div className='form-container'>
                <div className='login-container'>
                    <form onSubmit={handleSignUp} className='login-form'>
                        <h1>Please Sign Up</h1>
                        <div>
                            <label className='d-block' htmlFor="name">Your Name</label>
                            <input type="text" name="name" id="" required />
                        </div>
                        <div>
                            <label className='d-block' htmlFor="email">Your Email</label>
                            <input type="email" name="email" id="" required />
                        </div>
                        <div>
                            <label className='d-block' htmlFor="password">Set Password</label>
                            <input type="password" name="password" id="" required />
                        </div>
                        <div className='mt-2'>
                            <input onClick={() => setAgree(!agree)} className='' type="checkbox" name="terms" id="terms" />
                            <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Agree with all terms and condition</label>

                        </div>
                        <div>
                            {errorElement}
                            {/* <p>New to Hello Doctor? <span className='sign-up-link' onClick={navigateRagister} >Please Register</span> </p> */}
                            <p>Already have an Account? <Link className='sign-up-link' onClick={navigateLogin} to='/login' > Login</Link></p>
                            <input disabled={!agree} className='input-btn' type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default SignUp;