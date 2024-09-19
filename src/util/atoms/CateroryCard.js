import React from 'react'

function CateroryCard({imgUrl, categoryName}) {
  return (
    
    <div className='mx-5 my-2 shadow-md cursor-pointer w-[90%] border border-black  hover:scale-105 translate-x-0.5 '>
      <img  className=" w-[100%] h-[170px]"src={imgUrl} alt="clothing image"/>
      <h1 className='text-center py-5 text-xl font-mono'>{categoryName}</h1>
    </div>
      
   
  )
}

export default CateroryCard
