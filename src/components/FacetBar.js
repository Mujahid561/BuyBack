import React, { useState } from "react";


function FacetBar() {
  const [range, setRange] = useState(20);
  const [rating,setRating]=useState({
    fourStars:false,
    threeStars:false
  })

 const handleRating=(num)=>{
   if(num==4){
    setRating({...rating,fourStars:!rating.fourStars})
   }
   else{
    setRating({...rating,threeStars:!rating.threeStars})
   }
 }



  return (
  
    <div >
      <div>
        {" "}
        <h1 className="font-mono font-bold text-lg border-b-2 pb-3">Filter</h1>

      </div>

      <div className=" h-auto pb-3 border-b-2 pt-3">
        <h1 className="font-mono">Price</h1>
        <input
          type="range"
          min="10"
          value={range}
          max="1000"
          onChange={(e) => setRange(e.target.value)}
          className="w-[90%]"
        />
      </div>
      <div className="pt-2 border-b-2 pb-3">
        <h1 className="font-mono  ">Customer Rating</h1>
        <div className="flex-col">
          <div>
            <label className="flex-col">
              <input type="checkbox" value={rating.fourStars===true ? "checked":""} onChange={()=>{handleRating(4)}} /><span className="pl-3">4 stars</span>
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox" value={rating.fourStars===true ? "checked":""} /><span className="pl-3">3 stars</span>
            </label>
          </div>
        </div>
      </div>
    </div>
 
  );
}

export default FacetBar;
