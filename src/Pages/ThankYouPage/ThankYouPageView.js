import React from "react";
import { PiSealCheckFill } from "react-icons/pi";
import { Link } from "react-router-dom";

function ThankYouPageView() {
  return (
    <div className="w-[90%] mx-auto my-6 min-h-[70vh] flex-col justify-center items-center mt-8  ">
      <div className="flex justify-center items-center flex-col ">
        <h1 className="font-mono text-3xl font-bold text-center text-gray-800">
          Thank You!
        </h1>
        <h3 className="text-lg  mt-3 text-center font-mono font-semibold text-gray-500">
          Your order was completed successfully.
        </h3>
      </div>
      <div className="w-[50%] min-h-[300px] bg-white mx-auto mt-[6%] flex p-10 shadow-lg">
        <div className="w-[20%]  xl:pl-8">
          <PiSealCheckFill size={80} />
        </div>
        <div className="w-[80%] pl-5 xl:w-[70%]">
          <h1 className="font-light">
            An email receipt, including all details about your order, has been
            sent to the email address you provided. Please keep it for your
            records
          </h1>
          <h1 className="mt-5 font-light">
            You can visit My Account page at any time to check the status of your order. Or click here to <span className="underline"> print a copy of your receipt</span>
          </h1>
          <Link to="/"><button className="px-3 py-2 bg-black text-white mt-6 rounded-lg">Go back to Shop</button></Link>
          
        </div>
      </div>
    </div>
  );
}

export default ThankYouPageView;
