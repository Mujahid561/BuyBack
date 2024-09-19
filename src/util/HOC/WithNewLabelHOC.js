import React from "react";

function withNewLabelHOC(ProductCard) {
  return (props) => {
    return (
      <div className="relative  border border-black">
        <label className="absolute mt-3 px-3 py-2 ml-3 text-white bg-black">New</label>
        <ProductCard {...props} />
      </div>
    );
  };
}

export default withNewLabelHOC;
