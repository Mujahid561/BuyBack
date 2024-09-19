import React from "react";
import { data } from "../Mockdata/Footerdata";
import FooterItemsList from "./FooterItemsList";
import { Link } from "react-router-dom";

function FooterComp() {
  return (
    <div>
      <div className="w-[100vw] min-h-[450px] mt-8 bg-white flex shadow-lg">
        <div className=" mx-auto  flex w-[90%]  py-[5%] xl:w-[80%]">
          <div className=" w-[20%]  p-5">
            <h1 className="font-mono font-extrabold text-xl mb-8 xl:text-2xl" >Need help</h1>
            <Link to="/contact-us" className="bg-black text-white px-2 py-2 rounded-md text-sm cursor-pointer xl:text-base">Contact Us</Link>
          </div>

          {data?.map((elem,ind) => {
            return (
              <div className=" w-[20%] py-5  flex-col  xl:py-5" key={ind}>
                <h1 className="pb-5 font-bold font-mono text-base xl:text-lg">{elem?.header}</h1>
                <FooterItemsList list={elem?.items}/>
              </div>
            );
          })}
          <div className=" w-[20%]  p-5">
            <h1 className="font-mono font-bold text-base xl:text-xl">Location</h1>
            <select className="mt-5">
              <option value="India">🇮🇳 India</option>
              <option value="Saudi Arabia">🇸🇦 Saudi Arabia</option>
              <option value="USA">🇺🇸 USA</option>
              <option value="Russia">🇷🇺 Russia</option>
              <option value="Iran">🇮🇷 Iran</option>
              <option value="Sri lanka">🇱🇰 Sri lanka</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterComp;
