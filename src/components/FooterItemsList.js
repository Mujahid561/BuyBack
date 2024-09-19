import React from 'react'
import { Link } from 'react-router-dom'

function FooterItemsList({list}) {
  return (
    <>
     {list?.map((elem,ind)=>{
        return <h1 key={ind} className='py-1 text-slate-400 cursor-pointer'><Link to={elem?.route}>{elem?.heading}</Link></h1>
     })} 
    </>
  )
}

export default FooterItemsList
