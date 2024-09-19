import React, { useState } from 'react'
import CheckoutBtn from '../util/atoms/CheckoutBtn';

function PriceBox({finalPrice,message,path}) {
  const [discountModal, setdiscountModal] = useState(false);
  return (
    <div>
       <div >
              <div>
                <h1 className="font-bold text-2xl pt-5 pl-5 font-mono">
                  Summary
                </h1>
              </div>
              <div className="  mt-5 rounded-md bg-white  px-8 border ">
              <div>
                <div className="flex justify-between  pt-5">
                  <h1>Items in the Cart</h1>
                  <h1>₹ {(finalPrice * 1.3).toFixed(2)}</h1>
                </div>
                <div className="flex justify-between pt-2 text-gray-400 pb-8 border-b-2 ">
                  <h1>Savings applied</h1>
                  <h1>₹ -{(finalPrice * 0.3).toFixed(2)}</h1>
                </div>
                <div className="flex justify-between pt-2  ">
                  <h1 className="font-bold text-2xl">Total</h1>
                  <h1>₹ {finalPrice.toFixed(2)}</h1>
                </div>
                </div>
                <CheckoutBtn path={path} message={message} />
              
              </div>
              <div className="bg-white min-h-[70px] h-auto mt-5 rounded-lg border flex-col items-center px-[12%] justify-center">
                <div className="flex justify-between  mt-5 ">
                  <div>
                    <h1 className="">DISCOUNT CODE / GIFT CARD</h1>
                  </div>
                  <div onClick={() => setdiscountModal(!discountModal)}>
                    <h1 className="text-lg"> {discountModal? "🔼":"🔽"} </h1>
                  </div> 
                </div>
                <div className="my-5 w-[100%] ">
                  {!discountModal ? (
                    ""
                  ) : (
                   
                     
                      <div>
                        <input
                          className="border w-[73%]  px-3 py-2 shadow-sm rounded-lg"
                          placeholder="Enter Code"
                        />
                    
                      
                        <button className=" ml-[2%] text-center  w-[25%] px-2 py-2 bg-black text-white rounded-lg text-sm xl:text-base xl:px-2 2xl:px-3">
                          Submit
                        </button>
                      </div>
                 
                  )}
                </div>
              </div>
              </div>
    </div>
  )
}

export default PriceBox
