import React, { useState } from "react";

import CartItem from "../../components/CartItem";
import { handleIncrement } from "../../util/Functions/incrementBtn";
import { handleDecrement } from "../../util/Functions/decrementBtn";
import { removeCartitem } from "../../util/Functions/removeCartItem";
import { findLocalItems } from "../../util/Functions/fetchLocalStorageData";
import { useDispatch, useSelector } from "react-redux";
import { DeleteCartItem } from "../../Redux/reducers/cartReducer";
import { Link } from "react-router-dom";
import PriceBox from "../../components/PriceBox";

// import NewProductComponent from "../components/NewProductComponent";

function CartPageView() {
  const cartItems = findLocalItems("myCart-ProdId");
  // console.log("my prods", cartItems)
  

  let finalPrice = 0;

  for (let i = 0; i < cartItems.length; i++) {
    let qty = parseFloat(cartItems[i]?.val?.quantity);
    let price = parseFloat(cartItems[i]?.val?.price);
    finalPrice += qty * price;
  }

  // console.log("fp",finalPrice)

  const [update, setupdate] = useState(1);
  const handleInc = (productId, price) => {
    handleIncrement(productId, price);
    setupdate(update + 1);
  };
  const handleDec = (productId, price) => {
   
    let item=JSON.parse(localStorage.getItem(`myCart-ProdId${productId}`))
   
    if(item?.quantity===1){
      localStorage.removeItem(`myCart-ProdId${productId}` );
      dispatch(DeleteCartItem(productId));
      setupdate(update + 1);
      
    }
    else{
      handleDecrement(productId, price);
      setupdate(update + 1);
    }
    
    
  };
  const dispatch = useDispatch();
  const handleRemoveItem = (productId) => {
    dispatch(DeleteCartItem(productId));
    removeCartitem(productId);
    setupdate(update + 1);
  };

  return (
    <div className="w-[100%] mx-auto ]  p-5   my-6 flex-col xl:w-[80%]">
      {cartItems?.length > 0 ? (
        <div>
          <div className="flex-col justify-center items-center  ">
            <h1 className="font-mono text-3xl font-bold text-center text-gray-800">
              Shopping Cart
            </h1>
            <h3 className="text-lg mt-3 text-center font-mono font-semibold text-gray-500">
              Shipping and Platform charges are confirmed at checkout.
            </h3>
          </div>
          <div className="w-[100%]  flex justify-between  mx-auto min-h-[60vh]   mt-8">
            <div className="w-[64%] min-h-[60vh] ">
              <div>
                <h1 className="font-bold text-2xl pt-5 pl-5 font-mono">
                  Your order
                </h1>
              </div>
              <div className="mt-5">
                {/* <CartItem  /> */}
                {cartItems !== undefined
                  ? cartItems.map((elem, index) => {
                      return (
                       
                        <CartItem
                          key={index}
                          prodId={elem?.val?.prodId}
                          qty={elem?.val?.quantity}
                          handleInc={handleInc}
                          handleDec={handleDec}
                          handleRemoveItem={handleRemoveItem}
                        />
                    
                      );
                    })
                  : ""}
              </div>
            </div>
            <div className="w-[34%]  rounded-lg">
           <PriceBox finalPrice={finalPrice} message={"GO TO CHECKOUT"} path={"/checkout"}/>
           
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex, justify-center items-center min-h-[30vh]">
            <h1 className="font-mono text-3xl font-bold text-center text-gray-800">
              Shopping Cart
            </h1>
            <h3 className="text-lg mt-3 text-center font-mono font-semibold text-gray-500">
              Hi user! you cart is empty!!
            </h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPageView;
