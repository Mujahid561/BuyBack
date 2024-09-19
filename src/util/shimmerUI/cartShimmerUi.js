import React from 'react'

function CartShimmerUI() {
    let arr=new Array(2).fill(1)
  return (
   
      <div className='flex justify-center items-center flex-wrap w-[90%] mx-auto mt-5'>
      {
        arr.map((_,index)=>{
          return(
            <div key={index} className='w-[290px] h-[400px] bg-slate-200 mx-5 my-5'></div>
          )
        })
      }
    </div>
   
  )
}

export default CartShimmerUI