import React from "react";

import ProductCard from "../util/atoms/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import withNewLabelHOC from "../util/HOC/WithNewLabelHOC";
import ShimmerUI from "../util/shimmerUI/ShimmerUI";
import { Link } from "react-router-dom";
import {
  AddFavoriteItem,
  DeleteFavoriteItem,
} from "../Redux/reducers/favoriteReducer";

function NewProductComponent({ width }) {
  const data = useSelector((state) => state.product.data[0]);
  // let num = Math.floor(Math.random() * (data?.length - 5));

  const data1 = data ? data.slice(3,8 ) : undefined;
  const EnhancedComponent = withNewLabelHOC(ProductCard);
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
        className=" mx-auto bg-white mb-5 shadow-xl pb-8 mt-10"
        style={{ width: `${width}%` }}
      >
        <div className="flex justify-between  px-10 py-6 ">
          <h1 className=" font-bold text-xl font-mono">New Products</h1>
          <h3 className=" font-light text-base mr-10 pb-0 text-gray-400 underline font-mono cursor-pointer ">
            <Link to="/Product-Listing"> Browse All Products</Link>
          </h3>
        </div>
        <div className="flex  justify-around  mx-auto gap-5 px-3 "  style={{ width: `${width}%` }}>
        
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
  );
}

export default NewProductComponent;
