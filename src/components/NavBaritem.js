import React from "react";
import { Link } from "react-router-dom";

function NavBaritem({
  itemData,
  setactiveTab,
  itemIndex,
  headerIndex,
  activeTab,
}) {
  return (
    <Link
      to={itemData?.path}
      onClick={() => setactiveTab({ header: headerIndex, Navitem: itemIndex })}
    >
      <h1
        className={`py-2 hover:bg-slate-200 pl-[22%] text-sm xl:text-base ${
          itemIndex === activeTab.Navitem && headerIndex === activeTab.header
            ? "bg-slate-200 font-base"
            : "bg-white font-thin"
        }`}
      >
        {itemData?.title}
      </h1>
    </Link>
  );
}

export default NavBaritem;
