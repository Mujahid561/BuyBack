import React from "react";
import FavoriteItems from "../../components/FavoriteItems";
import { useDispatch, useSelector } from "react-redux";
import ShimmerUI from "../../util/shimmerUI/ShimmerUI";
import {
  ClearFavoriteItems,
  DeleteFavoriteItem,
} from "../../Redux/reducers/favoriteReducer";
import { Link } from "react-router-dom";
import NewProductComponent from "../../components/NewProductComponent";
import ErrorBoundary from "../../components/ErrorBoundary";

function FavoritePageView() {
  const data = useSelector((state) => state.favorite.data);
  const dispatch = useDispatch();
  const DeleteFavorite = (id) => {
    dispatch(DeleteFavoriteItem(id));
  };

  return (
    <>
    {/* --------------------------- to clear all items in favorite page------------------------- */}
      {data.length > 0 ? (
        <div className="px-5 py-8">
          <button
            className="bg-black text-white py-2 px-3 mr-[4%] float-right"
            onClick={() => dispatch(ClearFavoriteItems())}
          >
            Clear All
          </button>
        </div>
      ) : (
        ""
      )}
  {/* --------------------------- items in favorite page------------------------- */}
      <div className="bg-white mt-5 h-auto  w-[90%] mx-auto shadow-lg">
        <div>
          {data === undefined || data.length === 0 || null ? (
            <div>
            {/* --------------------------- if there are no items in favorite page------------------------- */}
              <div className="p-5 text-center">
                <h1 className="text-2xl font-mono">
                  Hi user! There are no favorite items in your list!!
                </h1>
              </div>
              <div className="mt-[10%]">
                <NewProductComponent width={100} />
              </div>
            </div>
          ) :
      
   (
            data.map((elem) => {
              return (
                <FavoriteItems
                  key={elem.id}
                  name={elem.name}
                  img={elem.img}
                  price={elem.price}
                  DeleteFavorite={DeleteFavorite}
                  id={elem.id}
                />
              );
            })
          )}
        </div>
      </div>
    </>
  );
}

export default FavoritePageView;
