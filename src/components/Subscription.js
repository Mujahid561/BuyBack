import React from "react";

function Subscription() {
  return (
    <div className="w-[90%] min-h-[200px] mx-auto bg-white shadow-lg my-10 px-[8%] py-5 flex ">
      <div className=" w-[50%] min-h-[200px] pl-16  py-8  xl:pr-[12%]">
        <h1 className=" font-extrabold text-3xl mb-6">Grab an extra 5% discount</h1>
        <h1 className="font-light text-slate-500">
          Subscribe to monthly newsletter. Get the latest product updates and
          special offers delivered right to your inbox.
        </h1>
       
      </div>
      <div className=" w-[50%] min-h-[200px] flex  py-8 justify-center items-center">
        <input className="w-[50%] border border-gray-400 px-3 py-2 rounded-lg" placeholder="Enter your email"/>
        <button className="bg-black text-white p-2 px-3 rounded-lg ml-5">Subscribe</button>
      </div>
    </div>
  );
}

export default Subscription;
