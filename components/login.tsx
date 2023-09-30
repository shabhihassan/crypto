import React from 'react'
import Image from 'next/image'
import login1 from '../public/login-1.svg'
import googlebtn from '../public/Google-btn.svg'
import {
    GetUserInfoByTokenAction,
    SigninAction,
    useCapchaInitialize,
  } from "state/actions/user";
  import { useDispatch, useSelector } from "react-redux";
  import { authPageRequireCheck } from "middlewares/ssr-authentication-check";
const Login = () => {
  return (
    <div className='login-container'>
        <div className="lci wc">
            <div className="login-img">
                <Image src={login1} alt='wallet' width={820} height={810}/>
            </div>
        </div>
        <div className="login-con lc">
            <h1>Welcome back!</h1>
            {/* create login form */}
            <form className='login-form'>
                <div className="form-group">
                    <input type="email" className='form-control' id='email' placeholder='Email'/>
                </div>
                <div className="form-group">
                    <input type="password" className='form-control' id='password' placeholder='Password'/>
                </div>
                <button className='btn-custom-login' 
                    >Login</button>
                <span>or</span>
                <div className="google-btn-login">
                    <Image src={googlebtn} alt='google-btn' width={30} height={30}/>
                    <p>Continue with Google</p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login