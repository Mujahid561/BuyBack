import React from 'react'

function PromoComponent({title,offPercentage, btnTitle,description,img}) {
  return (
    <div className='w-[46%] rounded-xl h-[420px]  shadow-md  bg-no-repeat bg-cover bg-center mt-10 object-cover'   style={{ backgroundImage: `url(${img})`,   }} >
    <div className='w-[70%] mx-5 my-5  h-[230px] p-8'>
        <div>
            <h1 className=' text-4xl font-extrabold text-white'>{title}</h1>
        </div>
        <div>
            <div><h1 className='mt-5  font-bold  text-white'>UP TO</h1></div>
            <div><h1 className='text-7xl font-extrabold  text-white'>{offPercentage}</h1></div>
        </div>
        <div>
            <h1 className='text-lg font-bold  text-white'>{description}</h1>
        </div>
    </div>
    <div>
        <h1 className='text-base text-center pt-8 cursor-pointer  text-white underline'>{btnTitle}</h1>
    </div>
      
    </div>
  )
}

export default PromoComponent
