import React from "react";
import IncAndDecBtn from "../util/atoms/IncAndDecBtn";
import { MdDeleteForever } from "react-icons/md";
import { usePDPfetchData } from "../util/customHooks/usePDPfetchData";
import { removeCartitem } from "../util/Functions/removeCartItem";
import { Link } from "react-router-dom";
import CartShimmerUI from "../util/shimmerUI/cartShimmerUi";


function CartItem({prodId,qty,handleInc,handleDec, handleRemoveItem}) {

  

const data=usePDPfetchData(prodId)
 
 if(data===undefined|| null){
  return <CartShimmerUI/>
}

  return (
    <div>
      <div className="bg-white h-[220px] flex  py-5 justify-between border-b-2 rounded-lg">
        <div className="flex w-[50%] px-6 ">
          <Link to={`/Productdetail/${prodId}`} className="w-[50%]  border">
            <img
              className="w-[100vw] h-[160px] "
              src={data?.images[0]}
            />
          </Link>
          <div className="flex-col ml-5 w-[50%]  justify-between pt-5 ">
          <Link to={`/Productdetail/${prodId}`}>
            <div>
              {" "}
              <h1 className="font-bold text-sm xl:text-base">{data?.title}</h1>
            </div>

            <div>
              <h1 className="font-light text-sm mt-2">🚚 {data?.shippingInformation}</h1>
            </div>
            <div>
              <h1 className=" font-light text-sm mt-2">{data?.availabilityStatus}</h1>
            </div>
           </Link>
            <div className="w-[70%] mt-[10%]" >
          
              <IncAndDecBtn handleIncrement={handleInc} handleDecrement={handleDec} qntyCount={qty} price={data?.price}  productId={prodId} height={"40px"} />
            </div>
          </div>   
        </div>
        <div className=" w-[30%] flex-col justify-between  pl-3  ">
          <div className=" float-end pr-5">
            <MdDeleteForever size={28} onClick={()=>handleRemoveItem(prodId)} />
          </div>

          <div className="  mt-[60%]  flex-col justify-center items-center xl:mt-[50%] ">
            <div className="text-center">
              
              <h1 className="text-xl  pl-3 xl:text-2xl ">₹ {((data?.price)*qty).toFixed(2)}</h1>
            </div>
            <div className="flex font-bold justify-center items-center">
            <h1 className="text-xs  text-gray-400 line-through xl:text-sm ">₹ {((data?.price*qty)*1.3).toFixed(2)}</h1>
              <h1 className="text-xs  text-center pl-3 text-green-500 xl:text-sm ">You save 30%</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
