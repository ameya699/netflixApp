import React from 'react'
import netlifxlogo from "../images/logo.png"
import { signOut } from 'firebase/auth'
import {auth} from "../utils/firebase"
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Header = () => {
const navigate=useNavigate()

const displayName=useSelector(store=>store?.user)
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      navigate("/error")
    });
  }

 
    
  const photoURL=auth?.currentUser?.photoURL
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between'>       
       <div>
       <img src={netlifxlogo} alt='logo' className='w-44'/>
       </div>
        {auth.currentUser && <div className='flex gap-2'>
         <img src={photoURL} className='w-10 h-12 pt-2 mt-2 rounded-full' alt='user-icon'/>
         <button className='font-bold text-white' onClick={handleSignOut}>{displayName? `(Sign out of ${displayName.displayName})`:"(Sign out)"}</button>
         </div>}
    </div>
  )
}

export default Header