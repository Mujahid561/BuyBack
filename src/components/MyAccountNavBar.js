import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBoxOpen } from "react-icons/fa";

import { ImSwitch } from "react-icons/im";
import { data } from "../Mockdata/navbarData";
import NavBaritem from "./NavBaritem";
import useModal from "../util/customHooks/useModal";
import Modal from "./Modal";

function MyAccountNavBar() {
  const [open, handleOpen, handleClose] = useModal();
  const [activeTab, setactiveTab] = useState({
    header: 0,
    Navitem: 0,
  });
  return (
    <div className="w-[20%] min-h-[80vh]   flex-col justify-between">
      <div className=" min-h-[8vh] shadow-md bg-white flex">
        <div className="w-[50%]  p-5 xl:w-[30%]">
          <img
            className=" w-[100%] rounded-full"
            src="https://www.shareicon.net/data/512x512/2016/09/01/822711_user_512x512.png"
          />
        </div>
        <div className="w-[70%] py-3 px-1 xl:p-5">
          <h1 className="font-thin text-xs">Hello,</h1>
          <h1 className="pt-1 font-bold xl:pt-2">User</h1>
        </div>
      </div>
      <div className=" min-h-[70vh] shadow-md bg-white mt-5 flex-col">
        <Link
          to="/order-history"
          className="py-5 px-7 flex justify-between border-b-2 hover:bg-slate-200"
        >
          <div className="flex">
          <div className="text-lg xl:text-3xl"><FaBoxOpen  /></div>
            
            <h1 className="pl-3 text-xs items-center font-bold text-gray-500 hover:text-black xl:text-xl xl:pl-5">
              MY ORDERS
            </h1>
          </div>
          <div>
            <h1 className="text-sm  text-gray-500  hover:text-black xl:text-lg">{">"}</h1>
          </div>
        </Link>
        {data?.map((elem, ind) => {
          let Icon = elem?.logo;

          return (
            <div className=" flex-col justify-between border-b-2 pb-3">
              <div className="flex pt-5 pb-3 px-7">
              <div className="text-lg xl:text-3xl">
              <Icon  />
              </div>
               
                <h1 className="pl-3 text-xs font-bold text-gray-500 hover:text-black xl:text-xl xl:pl-5">
                  {elem?.header}
                </h1>
              </div>
              <div
                className={`w-[100%] justify-center items-center flex-col  `}
              >
                {elem?.items.map((item, index) => {
                  return (
                    <NavBaritem
                      itemData={item}
                      setactiveTab={setactiveTab}
                      itemIndex={index}
                      headerIndex={ind}
                      activeTab={activeTab}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}

        <div className=" flex justify-between border-b-2 hover:bg-slate-200">
          <div
            className="flex cursor-pointer  w-[100%] py-5 px-7"
            onClick={handleOpen}
          >
            <div className="text-lg xl:text-3xl"><ImSwitch  /></div>
            <h1 className="pl-5 w-[100%]  text-md font-bold text-gray-500 hover:text-black xl:text-lg">
              Logout
            </h1>
            <Modal isOpen={open} onClose={handleClose} message={"Login"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAccountNavBar;
