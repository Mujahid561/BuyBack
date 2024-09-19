import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { usePDPfetchData } from "../../util/customHooks/usePDPfetchData";
import InnerImageZoom from "react-inner-image-zoom";
// import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import NewProductComponent from "../../components/NewProductComponent";
import { MdOutlineFavoriteBorder } from "react-icons/md";

import { IoCartOutline } from "react-icons/io5";
import IncAndDecBtn from "../../util/atoms/IncAndDecBtn";
import { handleIncrement } from "../../util/Functions/incrementBtn";
import { handleDecrement } from "../../util/Functions/decrementBtn";
import { useDispatch } from "react-redux";
import {
  AddCartItem,
  DeleteCartItem,
  FetchItems,
} from "../../Redux/reducers/cartReducer";
import RelatedProducts from "../../components/RelatedProducts";

function PDPView() {
  const { productId } = useParams();

  // const [productExist, setproductExist] = useState();
  const [updated, setupdated] = useState(1);
  const data = usePDPfetchData(productId);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  let productExist = JSON.parse(
    localStorage.getItem(`myCart-ProdId${productId}`)
  );
  const dispatch = useDispatch();
  let price = data?.price;

  const handleAddtoCart = () => {
    let prod = JSON.parse(localStorage.getItem(`myCart-ProdId${productId}`));
    if (prod === null || undefined) {
      // dispatch(AddCartItem({Productid:productId}))
      dispatch(FetchItems([{ ProductId: productId }]));
    }
    handleIncrement(productId, price);
    setupdated(updated + 1);
  };

  const handleRemovetoCart = () => {
    let prod = JSON.parse(localStorage.getItem(`myCart-ProdId${productId}`));
    if (prod?.quantity === 1) {
      dispatch(DeleteCartItem(productId));
      localStorage.removeItem(`myCart-ProdId${productId}`);
      setupdated(updated + 1);
    } else {
      handleDecrement(productId, price);
      setupdated(updated + 1);
    }
  };
  return (
    <div className="w-[90%] flex-col bg-white h-auto min-h-[100vh] mx-auto  my-10 shadow-xl ">
      <div
        className="w-[90%] flex  justify-center mx-auto mb-[12%] xl:w-[80%]"
        data-testid="Test Product"
      >
        <div className="w-[50%] flex-col border mt-5 h-[45vh] mx-5 justify-center items-center gap-0 xl:w-[60%] xl:h-[60vh] ">
          <img
            className="h-[100%] w-[100%]  aspect-square"
            src={data?.images[0]}
          />
          {/* <InnerImageZoom
            className="h-[100%] w-[100%] aspect-square "
            src={`${data?.images[0]}`}
            zoomSrc={`${data?.images[0]}`}
            hideHint
          /> */}
          <div className="flex justify-between mt-5">
            <div className="flex w-[49.5%] border h-[80px] justify-center items-center cursor-pointer mt-[-5px] ">
              {!productExist ? (
                <div
                  className="flex bg-black w-[100%] h-[80px] justify-center items-center"
                  onClick={handleAddtoCart}
                >
                  <button className=" text-lg   text-white  bg-black">
                    Add to Cart{" "}
                  </button>
                  <IoCartOutline className="text-white pl-2 text-3xl  bg-black" />
                </div>
              ) : (
                <div className="w-[100%]">
                  <IncAndDecBtn
                    qntyCount={productExist?.quantity}
                    handleIncrement={handleAddtoCart}
                    handleDecrement={handleRemovetoCart}
                    productId={productId}
                    height={"80px"}
                  />
                </div>
              )}
            </div>
            <div className="flex w-[49.5%] h-[80px] py-4 border-2 justify-center items-center cursor-pointer  mt-[-5px] ">
              <button className=" text-lg ">Add to Favorite </button>
              <MdOutlineFavoriteBorder className="text-white pl-2 text-3xl" />
            </div>
          </div>
        </div>
        <div className="ml-3 mt-5 w-[40%] xl:ml-16">
          <h1 className="text-xl font-mono mb-6 font-semibold xl:text-3xl">
            {data?.title}
          </h1>
          <div className="flex">
            <h1 className="text-xs font-mono  bg-green-600  text-white mb-6  p-1 px-2 xl:text-sm">
              {data?.rating} ⭐️
            </h1>
            <h1 className="pl-3 text-sm text-gray-500 xl:text-base">
              {data?.reviews?.length} Rating and {data?.reviews?.length} Reviews
            </h1>
          </div>
          <div className="flex mb-6">
            <span className="text-gray-500 text-base xl:text-lg">
              Description:
            </span>
            <h1 className="text-sm  ml-3 xl:text-lg"> {data?.description}</h1>
          </div>
          <div className="flex text-center items-center mb-6">
            <h1 className="text-2xl font-bold xl:text-4xl">₹{data?.price}</h1>
            <h1 className="text-base text-gray-400 line-through ml-3 xl:ml-6 xl:text-lg">
              ₹{data?.price * 2}
            </h1>
            <h1 className="text-base text-green-600 ml-3 xl:ml-6 xl:text-lg">
              50% off
            </h1>
          </div>
          <div className="">
            <h1 className="text-sm mb-2 xl:text-base">
              {" "}
              🚚 Estimated Shipment time : {data?.shippingInformation}
            </h1>
            <h1 className="text-sm xl:text-base">
              {" "}
              Minimum Order Quantity : {data?.minimumOrderQuantity}
            </h1>
          </div>
        </div>
      </div>
      <div></div>

      <RelatedProducts category={data?.category} />
    </div>
  );
}

export default PDPView;
