import React from "react";
import { CgProfile } from "react-icons/cg";

function CheckoutProfileCard({userData}) {
  let maskedPhoneNum =
    "+91" +
    " " +
    userData?.personalData?.mobileNumber.slice(0, 2).padEnd(8, "x") +
    userData?.personalData?.mobileNumber.slice(8, 10);

  let maskedAddress =
    userData?.address?.doorNum +
    " " +
    userData?.address?.street
      .slice(0, 6)
      .padEnd(userData?.address?.street.length - 2, "*") +
    userData?.address?.street.slice(
      userData?.address?.street.length - 2,
      userData?.address?.street.length
    ) +
    "\n" +
    userData?.address?.area
      .slice(0, 4)
      .padEnd(userData?.address?.area.length - 2, "*") +
    userData?.address?.area.slice(
      userData?.address?.area.length - 2,
      userData?.address?.area.length
    ) +
    " " +
    userData?.address?.city;
  return (
    <div className="">
      <div className="flex justify-between items-center px-4 pt-3">
        <div className="flex  items-center">
          <div>
            <CgProfile size={30} />
          </div>
          <div>
            <h1 className=" text-xl pl-3 font-semibold ">
              {userData?.personalData?.fname}
            </h1>
          </div>
        </div>
        <div className="float-right">
          <h1>
            🖊️{" "}
            <span className="text-gray-600 underline cursor-pointer">
              Change address
            </span>
          </h1>
        </div>
      </div>
      <div className="mt-5 bg-white min-h-[170px] rounded-lg p-6 flex shadow-md">
        <div className="w-[40%]  flex-col ">
          <div className="flex-col">
            <h1 className="text-sm text-gray-500">Email</h1>
            <h1>{userData?.personalData?.emailAddress}</h1>
          </div>
          <div className="flex-col mt-5">
            <h1 className="text-sm text-gray-500">Mobile phone</h1>
            <h1>{maskedPhoneNum}</h1>
          </div>
        </div>
        <div className="w-[30%] ml-4">
          <div className="flex-col">
            <h1 className="text-sm text-gray-500">Address</h1>
            <h1>{maskedAddress}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProfileCard;
