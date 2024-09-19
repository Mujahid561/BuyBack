import React, { useState } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlineFavorite } from "react-icons/md";
import { Link } from "react-router-dom";
function ProductCard(props) {
  const { name, img, price, id, AddFavorite, DeleteFavorite,isFavorite }=props
  const [selected, setSelected] = useState(false);

  const handleAddFavoriteinCard = (data) => {
    
    
      setSelected(!selected);
      AddFavorite(data)
    
  };
 

  const handleDeleteFavoriteinCard = (id) => {
   
      setSelected(!selected);
      DeleteFavorite(id)
    
  };
  return (
    <div className="w-[21.5%] border min-h-[250px] max-h-[500px] cursor-pointer shadow-xl mb-3 mt-1 relative xl:w-[22.5%] xl:min-h-[360px] xl:max-h-[400px]" data-testid="Productcard">
      <React.Fragment>
        {selected || isFavorite ? (
          <MdOutlineFavorite
            onClick={() => handleDeleteFavoriteinCard(id)}
            className="absolute right-2 mt-3 text-2xl xl:text-4xl"
            data-testid="RemovefromFav"
            
          />
        ) : (
          <MdFavoriteBorder
            onClick={() => handleAddFavoriteinCard(props)}
            className="absolute right-2 mt-3 text-2xl xl:text-4xl"
            data-testid="AddtoFav"
            
          />
        )}
        <Link to={`/Productdetail/${id}`}>
          <img className=" aspect-square" src={img} data-testid="prodimg" alt="Product Image"/>
        </Link>
      </React.Fragment>
      <Link to={`/Productdetail/${id}`}>
      <div className="min-h-[60px] xl:min-h-[30px]"> <h5 className="py-3 px-2 text-sm xl:text-base">{name}</h5></div>
       
        <div className="flex px-2 pb-2 gap-2 items-center xl:gap-3" >
          <h1 className="text-[12px] font-bold xl:text-lg">₹ {price} </h1>{" "}
          <h1 className="text-[6px] text-gray-400 line-through xl:text-base">₹ 1000</h1>
          <h1 className="text-[4px] text-green-600 xl:text-sm">90% off</h1>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
