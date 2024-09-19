import React, { useEffect, useState } from "react";
import { BiSolidLogIn } from "react-icons/bi";
import { MdFavorite } from "react-icons/md";
import { ImCart } from "react-icons/im";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { useSelector } from "react-redux";




function Header() {
  const [text, setText] = useState("");
  const [modal, setModal] = useState(false);
  const [filterSearch, setFilterSearch] = useState([]);
  const favLength = useSelector((state) => state.favorite.data.length);
  const data = useSelector((state) => state.product.data[0]);
  const cart=useSelector((state)=>state.cart.length)
  const [pid,setPid]=useState(null)

 
 

  const handleform = (e) => {
    e.preventDefault();
    setModal(false);
  };
  const handleOnFocus = () => {
    filtersearchHandle()
    setModal(true);
    
 
  };
  const hadleOnBlur = () => {
    
    if(text===""){
  setModal(false);
    }
 
  
  };

  const handleAutoComplete = (e,title) => {
    e.stopPropagation()
    // console.log("auto called")
    setText(title);
    setModal(false);
    };

  
  const filtersearchHandle = () => {
   
    let filteredData = data?.filter((elem) => {
   
      return elem.title.toLowerCase().includes(text.toLowerCase());
     
    });
  
    setFilterSearch(filteredData?.slice(0,9));
    // setFilterSearch()
    
  };
  useEffect(() => {
    filtersearchHandle();
 
  }, [text]);
 

  return (
  
    <div className="flex bg-white w-[100vw] shadow-md sticky top-0 z-20" >
      <div className=" flex w-3/12  items-center justify-center  ">
        <Link to="/" onClick={()=>setText("")}>
          <img
            className="w-35 h-20"
            src="https://img.freepik.com/premium-vector/cart-logo-shopping-design-shape-symbol-sign-vector-e-commerce-logo_393879-1172.jpg"
            alt="logo"
          />
        </Link>
      </div>

      {/* ------------------search bar and modal --------------------------- */}
      <div className="w-4/12  my-auto  "   >
     
        <form
          className="w-[100%] inline-flex border border-solid border-gray-500 rounded-lg justify-center items-center"
          onSubmit={(e) => handleform(e)}
        >
          <input
            className="p-2.5 w-[88%] outline-none md:bg-white"
            type="text"
            placeholder="Search.."
            value={text}
            onChange={(e) => setText(e.target.value)}
            onFocus={handleOnFocus}
            onBlur={hadleOnBlur}
           
          />
          <button className="pl-1 w-[10%] outline-none xl:pl-4 ">
            <IoSearch size={30}  />
          </button>
        </form>
        <div onBlur={hadleOnBlur}>
        {
         modal&&
          <div className="w-4/12 absolute max-h-[300px]  overflow-auto  bg-white shadow-lg  rounded-lg mt-0.5 " >
            {filterSearch===undefined?"":filterSearch.length !== 0
              ? filterSearch.map((elem) => {
               
                  return (
                    <Link to={`/Productdetail/${elem?.id}`} key={elem.title} onClick={(e) => handleAutoComplete(e,elem.title)}>
                      <h1 className="px-2 py-1 cursor-pointer font-light" >
                        {elem?.title}
                      </h1>
                    </Link>
                  );
                })
              : ""
              }
          </div>
        }
        </div>
      </div>



      {/* --------------------------------- nav items---------------------------- */}
      <div className="w-5/12   ">
        <div className=" pr-[5%] float-end bg-white  xl:pr-[18%] ">
          <Link to="/favorites" className="p-3 mx-2 my-3 inline-flex xl:m-3 ">
            <>
            <div className="text-2xl xl:text-3xl"><MdFavorite   /></div>
              
              <p className="pl-4 text-lg font-mono">Fav</p>
              <span className="absolute  p-[0.5px] px-2 rounded-full bg-white text-black border border-slate-300  top-1.5 ml-4 ">
                {favLength}
              </span>
            </>
          </Link>
          <Link to="/my-cart" className="p-3 mx-2 my-3 inline-flex xl:m-3 ">
            <>
              <div className="text-2xl xl:text-3xl"><ImCart  /></div>
              <span className="absolute  p-[0.5px] px-2 rounded-full bg-white text-black border border-slate-300  top-1.5 ml-4 ">
                {/* {cartItems.length===0?0:cartItems.length} */}
                {cart?.length}
              </span>
            </>
            <p className="pl-3 text-lg font-mono">Cart</p>
          </Link>

          <Link to="/login" className="p-3 mx-2 my-3 inline-flex xl:m-3 ">
          <div className="text-2xl xl:text-3xl">   <BiSolidLogIn  /></div>
         
            <p className="pl-2 text-lg font-mono">Login</p>
          </Link>
        </div>
      </div>
    </div>
  
  );
  
}

export default Header;
