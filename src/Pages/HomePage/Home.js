import React, { useEffect, useState } from "react";
// import { auth } from "../../firebase/firebase";
import { useLocation, useNavigate } from "react-router";
// import "react-toastify/dist/ReactToastify.css";

import Navbar from "../../components/Navbar";

// import CategorycardsContainer from "../../components/CategorycardsContainer";
import NewProductComponent from "../../components/NewProductComponent";

import PromoBanner from "../../components/PromoBanner";
// import PromoComponent from "../components/PromoComponent";
import Carousel from "../../components/Carousel";
import Subscription from "../../components/Subscription";
import PromoCardsContainer from "../../components/PromoCardsContainer";


function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState("");
  useEffect(() => {
    setUser(location?.state?.userInfo);
  }, [location]);

  const handleLogout = async () => {
    // await auth.signOut();
    // alert("confirm!!");

    // navigate("/");
  };
  return (
    <div className="w-[100vw] z-10">
      <Navbar />
      {/* <h1>welcome to the page {user?.firstName+ " "+ user?.lastName}</h1>
      <button onClick={handleLogout}>logout</button> */}
     <Carousel/>
      {/* <CategorycardsContainer /> */}
      <NewProductComponent width={90} />
      <PromoBanner />
      <PromoCardsContainer/>

     

      <Subscription/>
     
    </div>
  );
}

export default Home;
