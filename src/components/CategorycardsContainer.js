import React from "react";
import CateroryCard from "../util/atoms/CateroryCard";
import { data } from "../Mockdata/categorydata";
import { Link } from "react-router-dom";

function CategorycardsContainer() {
 
  return (
    <div>
      <div className="w-[90%]  mx-auto my-10 bg-white  shadow-lg justify-center flex items-center">
        <div className="w-[95%]  my-8 flex  border">
          {data.map((elem,index) => (
           <Link to="/Categories" key={index}>
            <CateroryCard
            key={index}
              imgUrl={elem?.categoryImage}
              categoryName={elem?.categoryName}
            />
            </Link>
           
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategorycardsContainer;
