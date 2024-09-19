import React from "react";

import ProductCard from "../util/atoms/ProductCard";
import { useDispatch, useSelector } from "react-redux";
// import withNewLabelHOC from "../util/HOC/WithNewLabelHOC";
import ShimmerUI from "../util/shimmerUI/ShimmerUI";
import { Link } from "react-router-dom";
import {
  AddFavoriteItem,
  DeleteFavoriteItem,
} from "../Redux/reducers/favoriteReducer";




function RelatedProducts({category}) {
    
    
  const data = useSelector((state) => state.product.data[0]);
 

  const data2 = data ? data?.filter((elem)=>{
  
    return elem?.category===category 
  }) : undefined;
//   console.log(data2)
const data1=data2? data2?.slice(0,5):data?.slice(0,5)

  const dispatch = useDispatch();
  const AddFavorite = (id) => {
    dispatch(AddFavoriteItem(id));
  };
  const DeleteFavorite = (id) => {
    dispatch(DeleteFavoriteItem(id));
  };
  return (
    <div>
      <div
        className=" mx-auto bg-white mb-5 shadow-xl pb-8"
        
      >
        <div className="flex justify-between p-10">
          <h1 className=" font-bold text-xl font-mono">Related Products</h1>
          <h3 className=" font-light text-base mr-10 pb-0 text-gray-400 underline font-mono cursor-pointer ">
            <Link to="/Product-Listing"> Browse All Products</Link>
          </h3>
        </div>
        <div className="flex justify-evenly gap-3 px-3 ">
          {data1 === undefined ? (
            <ShimmerUI />
          ) : (
            data1.map((elem) => {
              return (
                <ProductCard
                  key={elem.id}
                  img={elem.images[0]}
                  name={elem.title}
                  price={elem.price}
                  id={elem.id}
                  AddFavorite={AddFavorite}
                  DeleteFavorite={DeleteFavorite}
                  // isFavorite={elem?.isFavorite}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  )
}

export default RelatedProducts
