import React, { useState } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

const Login = () => {

    const [isSignin,setIsSignin]=useState(true)

    const toggleSignInForm=()=>{
        setIsSignin(!isSignin)
    }
  return (
    <div>
        <Header/>
        <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/IN-en-20240909-TRIFECTA-perspective_b22117e0-4610-4d57-a695-20f77d241a4a_large.jpg' alt='login-bg'/>
        </div>
        <form className='w-3/12 absolute p-12 bg-black mt-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{isSignin?"Sign In":"Sign Up"}</h1>
        {isSignin && <input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700 rounded-sm'/> } 
            <input type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700 rounded-sm'/> 
            <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700 rounded-sm'/>
            <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignin?"Sign In":"Sign Up"}</button>
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{!isSignin?"Already a user? Sign in":"New to Netflix? Sign up now"}</p>
        </form>

    </div>
  )
}

export default Login