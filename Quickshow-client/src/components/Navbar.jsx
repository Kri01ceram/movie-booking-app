import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'
import { useState } from 'react'
import { MenuIcon, SearchIcon, XIcon } from 'lucide-react'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-16 lg:px-26 py-5'>
      <Link to='/' className='max-md:flex-1'>
      <img src={assets.logo} alt="" className='w-36 h-auto'/>
      </Link>
      <div
        className={`
          z-50 flex flex-col items-center gap-8 py-3 backdrop-blur overflow-hidden transition-[width] duration-300
          max-md:fixed max-md:top-0 max-md:left-0 max-md:h-screen max-md:justify-center max-md:font-medium max-md:text-lg
          md:static md:flex-row md:bg-white/10 md:border md:border-gray-300/20 md:rounded-full md:px-8
          ${isOpen ? 'max-md:w-full bg-black/70' : 'max-md:w-0 max-md:bg-transparent'}
        `}
      >
        <XIcon className='md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer' onClick={() => setIsOpen(false)} />
          <Link onClick={()=>{scrollTo(0,0), setIsOpen(false)}} to='/'>Home</Link>
          <Link onClick={()=>{scrollTo(0,0), setIsOpen(false)}} to='/movies'>Movies</Link>
          <Link onClick={()=>{scrollTo(0,0), setIsOpen(false)}} to='/theatres'>Theatres</Link>
          <Link onClick={()=>{scrollTo(0,0), setIsOpen(false)}} to='/releases'>Releases</Link>
          <Link onClick={()=>{scrollTo(0,0), setIsOpen(false)}} to='/favorite'>Favorites</Link>
      </div>
      <div className='flex items-center gap-8'>
        <SearchIcon className='max-md:hidden w-6 h-6 cursor-pointer'/>
        <button className='px-4 py-1 sm:px-7 sm:py-2 bg-primary
        hover:bg-primary-dull transition rounded-full font-medium
        cursor-pointer'>Login</button>
     </div>
      <MenuIcon className='max-md:ml-4 md:hidden w-8 h-8 cursor-pointer' onClick={() => setIsOpen(true)} />
      
    </div>
  )
}

export default Navbar
