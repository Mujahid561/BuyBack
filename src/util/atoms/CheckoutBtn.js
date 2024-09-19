import React from "react";
import { Link } from "react-router-dom";

function CheckoutBtn({ path ,message}) {
  return (
    <div>
        <div className=" pt-2 w-[90%] mx-auto my-6 text-white bg-black py-3 rounded-lg flex justify-center items-center cursor-pointer ">
                
                
        <h1 className="text-center font-semibold">
          <Link to={path}>{message}</Link>
        </h1>
      </div>
    </div>
  );
}

export default CheckoutBtn;
