import React from "react";
import { MdOutlineFavorite } from "react-icons/md";
import { Link } from "react-router-dom";


function FavoriteItems({img,name,price,DeleteFavorite,id}) {
   
  return (
 
    <div>
      <div className=" w-[100%] h-[230px] flex  mx-auto  p-4 border-b-2">
        <div className="flex w-[100%]">
        <div className="w-[100%] flex" >
          <Link className="w-[20%] aspect-square"  to={`/Productdetail/${id}`} >
            <img
              className="w-[100%] h-[200px] xl:w-[50%] mx-auto xl:h-[200px]  "
              src={img}
              alt="image"
            />
          </Link>
          <div className="  ml-8  justify-between ">
            <div>
              <h1>{name}</h1>
              <h1>Price - {price}</h1>
              <h1>Rating - 3.8 stars</h1>
            </div>
            <div>
              <button className="bg-black text-white px-2 py-1 mt-20">
                Add to cart
              </button>
            </div>
          </div>
          </div>
        </div>

        <div className="cursor-pointer">
          <MdOutlineFavorite size={35} onClick={()=>DeleteFavorite(id)}/>
        </div>
      </div>
    </div>
    
  );
}

export default FavoriteItems;
