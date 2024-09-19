import React from 'react'

function IncAndDecBtn({qntyCount,handleIncrement,handleDecrement,productId,height, price}) {

    
  return (
   
    <div className='flex' style={{"height":height}}>
      <button className=" bg-black  text-white border  w-[20%]" onClick={()=>handleDecrement(productId,price)} >-</button>
      <h1 className=' flex border  text-center text-bold w-[60%] justify-center items-center'>{qntyCount}</h1>
      <button className=' bg-black  text-white borderh-[80px]  w-[20%]' onClick={()=>handleIncrement(productId,price)}>+</button>
      </div>
  
  )
}

export default IncAndDecBtn
