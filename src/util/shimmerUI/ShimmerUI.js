import React from 'react'

function ShimmerUI() {
    let arr=[1,2,3,4,5,6,7,8,9,10,11,1,1,1,1,1,1,1,1,1,1,1,1,1]
  return (
   
      <div className='flex justify-center items-center flex-wrap w-[90%] mx-auto mt-5'>
      {
        arr.map((elem,index)=>{
          return(
            <div key={index} className='w-[290px] h-[400px] bg-slate-200 mx-5 my-5'></div>
          )
        })
      }
    </div>
   
  )
}

export default ShimmerUI
