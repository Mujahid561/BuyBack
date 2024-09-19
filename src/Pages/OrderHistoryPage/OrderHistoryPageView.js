import React from "react";
import HistoryOrderItem from "../../components/HistoryOrderItem";
import { Link } from "react-router-dom";
import BreadCrumbs from "../../components/BreadCrumbs";

function OrderHistoryPageView() {
  let bredCrumbsdata = [
    { name: "Home /", path: "/" },
    { name: "My Account /", path: "/my-account" },
    { name: "Order History", path: "/order-history" },
  ];
  return (
    <div className="w-[90%] mx-auto my-6 min-h-[70vh] flex-col  ">
      <div className="pb-5 ">
        {/* <Link to="/">
          <span className="text-gray-500">Home /</span>{" "}
        </Link>

        <Link to="/my-account">
          <span className="text-gray-500 ">My Account /</span>{" "}
        </Link>

        <Link to="/order-history">
          <span className="text-gray-500 ">Order History</span>{" "}
        </Link> */}
        <BreadCrumbs breadcrumbs={bredCrumbsdata}/>
      </div>
      <div className="w-[100%] flex justify-between">
        <div className="w-[18%]  ">
          <div className=" bg-white h-[100vh] shadow-md xl:h-[50vh]">
            <h1 className="text-2xl font-bold border-b-[1px] p-4">Filters</h1>
            <div className="py-4 border-b-[1px] px-4">
              <h1 className="font-semibold text-base pb-2"> ORDER STATUS</h1>

              <div>
                <label>
                  <input type="checkbox" />
                  <span className="pl-3 font-light">On the way</span>
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" />
                  <span className="pl-3 font-light">Delivered</span>
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" />
                  <span className="pl-3 font-light">Cancelled</span>
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" />
                  <span className="pl-3 font-light">Returned</span>
                </label>
              </div>
            </div>
            <div className="py-4  px-4">
              <h1 className="font-semibold text-base pb-2"> ORDER TIME</h1>
              <div>
                <label>
                  <input type="checkbox" />
                  <span className="pl-3 font-light">Last 30 days</span>
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" />
                  <span className="pl-3 font-light">2023</span>
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" />
                  <span className="pl-3 font-light">2022</span>
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" />
                  <span className="pl-3 font-light">2021</span>
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" />
                  <span className="pl-3 font-light">Older</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[80%] flex-col">
          <div className="bg-white w-[80%] shadow-md border">
            <input
              className="w-[75%]  py-2 px-3 xl:w-[85%] "
              placeholder="Search ordered item"
            />
            <button className=" w-[25%] bg-black p-2 cursor-pointer text-white xl:w-[15%]">
              Search Orders
            </button>
          </div>
          <div className="w-[100%] bg-white min-h-[10vh] mt-4 shadow-md">
            <HistoryOrderItem />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderHistoryPageView;
