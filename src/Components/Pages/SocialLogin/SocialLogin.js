import React from 'react';
import './SocialLogin.css'
import google from '../../../image/google.png'
import facebook from '../../../image/facebook.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router';
import Loading from '../Loading/Loading';

const SocialLogin = () => {


    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    const location = useLocation()
    let errorElement;

    let from = location?.state?.from?.pathname || '/'

if(loading){
    return <Loading></Loading>
}

    if (user) {
        navigate(from, { replace: true })
    }

    if(error){
        errorElement=<p className='text-danger'>{error.message}</p>       
    }
    return (
        <div>

            <div>
                <div className='dash-container'>
                    <div className='dash'>
                    </div>
                    <p className='or'>
                        or
                    </p>
                    <div className="dash">
                    </div>
                </div>
                {errorElement}
                <div className='social-login'>
                    <div className='social'>
                        <div onClick={() => signInWithGoogle()} className='btn-style'>
                            <img src={google} alt="" />
                            <button>Google Sign in</button>
                        </div>
                        <div className='btn-style'>
                            <img src={facebook} alt="" />
                            <button>Facebook Sing in</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default SocialLogin;