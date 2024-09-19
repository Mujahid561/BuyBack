import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../util/atoms/ProductCard";
import {
  AddFavoriteItem,
  DeleteFavoriteItem,
} from "../../Redux/reducers/favoriteReducer";

function BrandsPageView() {
  const data = useSelector((state) => state.product.data[0]);
  const [prod,setProd]=useState(0)
  let data1 = data?.slice(prod, prod+4);

  const handleNext=()=>{
     setProd(prod+4)
  }
  const handlePrev=()=>{
    setProd(prod-4)
  }

  return (
    <div className="w-[90%] mx-auto my-6 min-h-[70vh] flex bg-white shadow-lg">
    <div><button onClick={handlePrev}>left</button></div>
      <div className="flex w-[80%] mx-auto">
        {data1.map((elem, ind) => {
          return (
            <ProductCard
              key={elem.id}
              img={elem.images[0]}
              name={elem.title}
              price={elem.price}
              id={elem.id}
              AddFavorite={AddFavoriteItem}
              DeleteFavorite={DeleteFavoriteItem}
            />
          );
        })}
      </div>
      <div><button onClick={handleNext}>Right</button></div>
    </div>
  );
}

export default BrandsPageView;
