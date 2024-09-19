import React from "react";

// Modal.js

const Modal = ({ isOpen, onClose, message="Logout"}) => {
    console.log("modal called")
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed top-0 left-0 w-[100%] h-[100%] bg-black-rgba flex items-center justify-center "
    >
      <div className="bg-white h-[20%] w-[30%] m-auto p-[2%] border border-solid rounded-md shadow-lg xl:h-[20%] xl:w-[20%] flex">
      <div className="flex-col justify-center items-center ">
                <div><h1 >Are you sure, You want to {message}? </h1></div>
                <div className="flex gap-4 mt-5 items-center justify-center">
                 <button className="bg-black text-white px-3 py-2 rounded-md"   >Cancel</button>
                 <button className="bg-black text-white px-3 py-2 rounded-md "  >Proceed</button>
                 </div> </div>
      </div>
    </div>
  );
};

export default Modal;
