import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-16 lg:px-26 py-5'>
      <Link className='max-md:flex-1'>
      <img src="{assets.logo}" alt="" className='w-36 h-auto'/>
      </Link>
      
    </div>
  )
}

export default Navbar
