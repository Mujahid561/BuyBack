import React from 'react'
import { Link } from 'react-router-dom'

function HistoryOrderItem() {
  return (
    <div className='w-[100%]  p-3 flex'>
    <Link className='w-[15%] items-center '>
    <img className=' h-[15vh] items-center mx-auto xl:h-[10vh]' src="https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/1.png"/>
    </Link>
    <div className='w-[60%] xl:w-[62%] '>
        <h1 className='text-sm xl:text-base'>Chanel Coco Noir Eau De</h1>
        <h1 className='pt-1 text-sm xl:text-base xl:pt-2'> Rs. 224</h1>
        <h1 className=' pt-1 text-xs xl:text-sm xl:pt-2'> Qty: 2 </h1>
    </div>
    <div className='w-[30%] pl-2 xl:w-[23%]'>
    <h1 className='font-semibold text-sm xl:text-base'>✅ Delivered on Mon Aug 19</h1>
        <h1 className='text-xs pt-2 pl-5 xl:px-5'> Your item has been delivered</h1>
        <h1 className='text-gray-400 pt-1 cursor-pointer text-sm xl:text-base'><span className='text-lg xl:text-xl'>✩ </span> Rate & Review Product</h1>

    </div>
    
    </div>
  )
}

export default HistoryOrderItem
