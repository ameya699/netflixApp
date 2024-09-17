import React from 'react'
import netlifxlogo from "../images/logo.png"

const Header = () => {
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10'>       
         <img src={netlifxlogo} alt='logo' className='w-44'/>
    </div>
  )
}

export default Header