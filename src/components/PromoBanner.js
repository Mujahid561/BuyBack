import React from "react";
import { Link } from "react-router-dom";


function PromoBanner() {
  return (
    <div className="relative ">
    <Link to="Product-Listing">
      <div className="h-[400px] my-10 bg-slate-500 w-[90%] flex mx-auto shadow-lg justify-center items-center xl:h-[500px]">
      <h1 className="absolute bottom-3 p-1 text-xl text-center underline cursor-pointer text-white">SHOP NOW</h1>
        <img
          className="w-[100%] h-[100%]"
          src="https://cdnb.artstation.com/p/assets/images/images/031/504/361/large/gururaj-gk-x-media-post-06.jpg?1603816156"
         
          alt="promo banner"
        />
      </div>
      </Link>
    </div>
  );
}

export default PromoBanner;
