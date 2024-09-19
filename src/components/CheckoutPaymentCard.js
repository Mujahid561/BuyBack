import React from "react";
import { BsCreditCard } from "react-icons/bs";
import { FaCcPaypal } from "react-icons/fa6";
import { MdMobileFriendly } from "react-icons/md";

function CheckoutPaymentCard() {
  return (
    <div className="mt-3">
      <h1 className="font-semibold text-2xl pt-5 pl-5 ">Payment</h1>
      <div className="bg-white min-h-[300px] mt-3 rounded-lg shadow-md">
        <div id="debit/credit  card" className="p-10 border-b-2">
          <div className="flex justify-between ">
            <div className="flex">
              <input className="w-[25px] h-[25px] accent-black" type="radio"  name="PaymentOption" />
              
              

              <h1 className="font-bold pl-6">Debit / Credit Card</h1>
            </div>
            <div>
              <BsCreditCard size={30} />
            </div>
          </div>
          <div>
            <input
              className="border p-3 w-[70%] my-3 rounded-md border-gray-300 "
              placeholder="Card Number"
            />
            <div className="flex justify-between w-[70%] my-3">
              <input
                className="border p-3 w-[48%] rounded-md border-gray-300  "
                placeholder="MM / YY"
              
              />
              <input
                className="border p-3 w-[48%] rounded-md border-gray-300"
                placeholder="CVV"
                
              />
            </div>
            <input
              className="border p-3 w-[70%] my-3 rounded-md border-gray-300"
              placeholder="Name of the Card Holder"
            />
          </div>
        </div>
        <div id="Paypal" className="p-5 border-b-2">
          <div className="flex justify-between px-5 ">
            <div className="flex">
              <input className="w-[25px] h-[25px] accent-black" type="radio" name="PaymentOption" />

              <h1 className="font-bold pl-6">Paypal</h1>
            </div>
            <div>
            <FaCcPaypal   size={30} />
            </div>
          </div>
        </div>
        <div id="UPI">
          <div id="Paypal" className="p-5 pb-8">
            <div className="flex justify-between px-5 ">
              <div className="flex">
                <input
                  className="w-[25px] h-[25px] accent-black"
                  type="radio"
                   name="PaymentOption"
                />

                <h1 className="font-bold pl-6">UPI</h1>
              </div>
              <div>
                <MdMobileFriendly  size={30} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPaymentCard;
