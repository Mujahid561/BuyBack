import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
    <div className='flex w-[100%] h-20 bg-white  justify-between items-center mx-auto shadow-md' data-testid="NavBar" >
    <div className='flex w-5/12  justify-evenly items-center'>
        <Link to="/sale"  className='font-mono'>Sale </Link>
        <Link to="/brands" className='font-mono'>Brands </Link>
        <Link to="/Product-Listing" className='font-mono'>Products </Link>
        <Link to="/our-outlets" className='font-mono'>Outlets</Link>
    </div>
    <div className='flex w-3/12 justify-evenly items-center pr-10'>
        <Link to="/my-account/myProfile" className='font-mono'>My Account </Link>
        <Link to="/contact-us" className='font-mono'>Contact </Link>
        
    </div>

    </div>
      
    </div>
  )
}

export default Navbar
