import React, { useEffect, useState } from "react";
import { data } from "../Mockdata/carouselData";

import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function Carousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  useEffect(() => {
    let timer = setInterval(() => {
      handleRight();
    }, 5000);
    return () => clearInterval(timer);
  });
  const handleRight = () => {
    if (activeSlide < 2) {
      setActiveSlide(activeSlide + 1);
    } else {
      setActiveSlide(0);
    }
  };
  const handleLeft = () => {
    if (activeSlide === 0) {
      setActiveSlide(data?.length - 1);
    } else {
      setActiveSlide(activeSlide - 1);
    }
  };
  const handleIndicator = (ind) => {
    setActiveSlide(ind);
  };
  return (
    <div className="h-[500px] bg-white w-[90%] shadow-lg mt-5 mx-auto flex relative justify-center items-center">
      <button
        className="absolute left-4 p-2 text-white text-8xl"
        onClick={handleLeft}
      >
        <FaChevronLeft />
      </button>
      <Link className="w-[100%] h-[100%]" to="Product-Listing">
        {" "}
        <img
          className="w-[100%] h-[100%] shadow-lg"
          src={data[activeSlide].img}
        />
      </Link>

      <button
        className="absolute right-4  p-2 text-white text-8xl"
        onClick={handleRight}
      >
        <FaChevronRight />
      </button>
      <div className="absolute bottom-8">
        {data?.map((elem, index) => {
          return (
            <button key={index}
              className={
                index === activeSlide
                  ? "ml-1 p-[4px]  rounded-full bg-white"
                  : "ml-1 p-[4px]  rounded-full bg-black"
              }
              onClick={() => handleIndicator(index)}
            ></button>
          );
        })}
      </div>
    </div>
  );
}

export default Carousel;
