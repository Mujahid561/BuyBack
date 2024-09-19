import React from 'react'
import { Link } from 'react-router-dom'

function BreadCrumbs({breadcrumbs}) {

  return (
    <div>
      {breadcrumbs?.map((elem)=>{
        return (
            <Link to={elem?.path}>
          <span className="text-gray-500">{elem?.name}</span>{" "}
        </Link>
        )
      })}
    </div>
  )
}

export default BreadCrumbs
