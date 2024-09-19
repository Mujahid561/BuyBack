import React from 'react'

function CheckoutPickupOption() {
  return (
    <div className="bg-white min-h-[300px] mt-8 rounded-lg shadow-md">
    <div className="border-b-2 ">
      <div className="flex justify-between  px-10 pt-10 pb-6">
        <div className="flex">
          <input
            className="w-[25px] h-[25px] accent-black"
            type="radio"
            name="PickupOption"
          />
          <div className="pl-5">
            <h1 className="font-bold">Pick-up point</h1>
            <p className="font-light">Shipping: 2-4 weeks</p>
          </div>
        </div>
        <div>
          <h1 className="font-bold">Rs.16</h1>
        </div>
      </div>
      <div className="px-[9.5%] ">
        <h1 className="font-bold">Ship to:</h1>
        <p className="font-light">
          Newarea, 65 Whitefield, Bangalore{" "}
        </p>
      </div>
      <div className="px-[9.5%] pt-4 pb-6">
        <h1 className="text-gray-500 underline">Change</h1>
      </div>

    </div>
    <div className="flex justify-between  px-10 pt-10 pb-6">
        <div className="flex">
          <input
            className="w-[25px] h-[25px] accent-black"
            type="radio"
            name="PickupOption"
          />
          <div className="pl-5">
            <h1 className="font-bold">Home Delivery</h1>
            <p className="font-light">Shipping: 3-5 weeks</p>
          </div>
        </div>
        <div>
          <h1 className="font-bold">Rs.36</h1>
        </div>
      </div>
  </div>
  )
}

export default CheckoutPickupOption
