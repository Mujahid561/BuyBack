import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import MyAccountNavBar from '../../components/MyAccountNavBar'

function AccountPageView() {
  return (
    <div className='w-[90%] mx-auto my-6   flex justify-between '>
 
  <MyAccountNavBar/>
    <div className='w-[78%] min-h-[80vh] shadow-lg bg-white'>
    <Outlet/>
    </div>
   
    </div>
  )
}

export default AccountPageView
