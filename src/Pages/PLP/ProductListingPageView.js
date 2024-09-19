import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../util/atoms/ProductCard";

import FacetBar from "../../components/FacetBar";
import ShimmerUI from "../../util/shimmerUI/ShimmerUI";
import {
  AddFavoriteItem,
  DeleteFavoriteItem,
} from "../../Redux/reducers/favoriteReducer";
import Pagination from "../../components/Pagination";
import { useProductList } from "../../util/customHooks/useProductList";
import BreadCrumbs from "../../components/BreadCrumbs";

function ProductListingPageView() {
  const [isActive, setisActive] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  
  const [paginatedData, setPaginatedData] = useState([]);
  const data = useProductList()
 
  let prodLimit = 20;
  const dispatch = useDispatch();
  const AddFavorite = (id) => {
    dispatch(AddFavoriteItem(id));
  };
  const DeleteFavorite = (id) => {
    dispatch(DeleteFavoriteItem(id));
  };
  useEffect(() => {
    if (data !== null || undefined) {
      setPaginatedData(data?.slice(0, prodLimit));
    }
  }, [data]);
useEffect(()=>{
  window.scrollTo({ top: 0 });
},[])

  const handlePagination = (page) => {
    setisActive(page);
    setCurrentPage(page)
    if (page === 1) {
      setPaginatedData(data?.slice(0, page * prodLimit));
    } else {
      let initpage = page - 1;
      setPaginatedData(data?.slice(initpage * 20, page * prodLimit));
    }
  };
  let paginationLength = Math.ceil(data?.length / 20);


   const handlePrev=()=>{
    let cur=currentPage-1
   handlePagination(cur) 
   setCurrentPage(cur)
    
   }
   const handleNext=()=>{
    let cur=currentPage+1
   handlePagination(cur) 
   setCurrentPage(cur)
    
   }

  const handlePaginationArrlength = () => {
    if (data) {
      return new Array(paginationLength).fill(1);
    } else {
      return null;
    }
  };
  let paginationArr = handlePaginationArrlength();
  const breadcrumbsdata=[{name:"Home /", path:"/"},{name:"Product List", path:"/Product-Listing"}]

  return data === undefined ? (
    <ShimmerUI />
  ) : (
    <div className=" w-[90%] mx-auto  py-6 mb-3 flex-col ">
    <div className="mb-2 pl-4">
      <BreadCrumbs breadcrumbs={breadcrumbsdata}/>
    </div>
    <div className="flex flex-wrap justify-evenly ">
      <div className="w-[19%] h-[100vh]  bg-white shadow-2xl pt-3 px-2">
        <FacetBar />
      </div>

      <div className="flex-col  w-[78%] pl-5   bg-white shadow-2xl">
        <div className="flex w-[100%] flex-wrap items-center justify-evenly mt-3 ">
          {paginatedData === undefined || paginatedData.length === 0
            ? <ShimmerUI/>
            : paginatedData.map((elem) => {
                return (
                  <ProductCard
                    key={elem.id}
                    img={elem.images[0]}
                    name={elem.title}
                    price={elem.price}
                    id={elem.id}
                    AddFavorite={AddFavorite}
                    DeleteFavorite={DeleteFavorite}
                  />
                );
              })}
        </div>
        <div className="flex my-8 w-[80%] justify-center items-center mx-auto">
          <button className={`border border-gray-400 c px-3 py-3 xl:p-4 ${currentPage===1?"text-gray-400":"text-black"}`} disabled={currentPage === 1} onClick={handlePrev}>Prev</button>
          {paginationArr.map((elem, index) => {
            return (
              
              <Pagination key={index} isActive={isActive} handlePagination={handlePagination} index={index}/>
            );
          })}
          <button className="border border-gray-400 c px-3 py-3 xl:p-4" disabled={currentPage === paginationLength} onClick={handleNext}>Next</button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default ProductListingPageView;
{/* <button
                className={`border border-gray-400 c py-4 px-6 ${
                  isActive === index + 1 ? "bg-black text-white" : "bg-white"
                }`}
                onClick={() => {
                  handlePagination(index + 1);
                }}
              >
                {index + 1}
              </button> */}