import React, { useEffect } from "react";
import Login from "./Pages/LoginPage/Login";
import Signuppage from "./Pages/SignUpPage/SignUpPage";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./Pages/HomePage/Home";
import CartPageView from "./Pages/MyCartPage/CartPageView";
import ForgetPasswordView from "./Pages/ForgetPasswordPage/ForgetPasswordView";
import AboutUsPageView from "./Pages/AboutUsPage/AboutUsPageView";
import AccountPageView from "./Pages/AccountPage.js/AccountPageView";
import AffilliatesPageView from "./Pages/AffilliatesPage/AffilliatesPageView";
import BrandsPageView from "./Pages//BrandsPage/BrandsPageView";
import BuyGiftCardsPageView from "./Pages/BuyGiftCardPage/BuyGiftCardsPageView";
import CategoryPageView from "./Pages/CategoryPage/CategoryPageView";
import CheckoutPageView from "./Pages/CheckoutPage/CheckoutPageView";
import ContactPageView from "./Pages/ContactPage/ContactPageView";
import CustomerSupportPageView from "./Pages/CustomerSupportPage/CustomerSupportPageView";
import FavoritePageView from "./Pages/FavoritePage/FavoritePageView";
import InspirationPageView from "./Pages/InspirationPage/InspirationPageView";
import InvestorsPageView from "./Pages/InvestorsPage/InvestorsPageView";
import OutletPageView from "./Pages/OutletPage/OutletPageView";
import PaymentPageView from "./Pages/PaymentPage/PaymentPageView";
import PDPView from "./Pages/PDP/PDPView";
import ProductListingPageView from "./Pages/PLP/ProductListingPageView";
import RadeemCardPageView from "./Pages/RadeemCardPage/RadeemCardPageView";
import ReturnPageView from "./Pages/ReturnPage/ReturnPageView";
import SalePageView from "./Pages/SalePage/SalePageView";
import ShippngPageView from "./Pages/ShippingPage/ShippngPageView";
import TandCPageView from "./Pages/T&CPage/T&CPageView";
import ThankYouPageView from "./Pages/ThankYouPage/ThankYouPageView";
import OrderHistoryPageView from "./Pages/OrderHistoryPage/OrderHistoryPageView";
import BillingPageView from "./Pages/BillingPage/BillingPageView";
import ErrorBoundaryPageView from "./Pages/ErrorBoundaryPage/ErrorBoundaryPageView";
import Header from "./Pages/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { ProductData } from "./Redux/reducers/productReducer";
import { findLocalItems } from "./util/Functions/fetchLocalStorageData";
import { ClearCartItems, FetchItems } from "./Redux/reducers/cartReducer";
import FooterComp from "./components/Footer";
import PrivacyPageView from "./Pages/PrivacyPage/PrivacyPageView";
import ReturnPolicyPage from "./Pages/ReturnPolicyPage/ReturnPolicyPage";
import CookiesPageView from "./Pages/CookiesPage/CookiesPageView";
import MyProfile from "./Pages/MyProfile/MyProfile";
import SavedUPI from "./Pages/SavedUpiPage/SavedUPI";

function App() {
  const RootComponent = () => {
    // const length=useSelector((state)=>state.cart.length)
    const dispatch = useDispatch();
    useEffect(() => {
      async function fetchData() {
        const products = await fetch(
          // "https://api.escuelajs.co/api/v1/products"
          "https://dummyjson.com/products?limit=0"
        );

        const data = await products.json();
        const updatedData = data?.products.map((elem) => {
          return { ...elem, isFavorite: false, inCart: false, quantity: 0 };
        });

        dispatch(ProductData(updatedData));
      }
      let cartItems = findLocalItems();

      dispatch(ClearCartItems(cartItems));
      if (cartItems.length === 1) {
        dispatch(FetchItems([{ ProductId: cartItems[0]?.val?.prodId }]));
      } else if (cartItems.length > 1) {
        for (let i = 0; i < cartItems.length; i++) {
          dispatch(FetchItems([{ ProductId: cartItems[i]?.val?.prodId }]));
        }
      }

      fetchData();
    }, []);

    return (
      <div className="absolute top-0 left-0">
        <Header />
        <Outlet />
        <FooterComp/>
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootComponent />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/About-us",
          element: <AboutUsPageView />,
        },
        {
          path: "/my-account",
          element: <AccountPageView />,
          children:[
            {
              path: "/my-account/myProfile",
              element: <MyProfile />,
            },
            {
              path:"/my-account/savedUPI",
              element:<SavedUPI/>
            }
          ]
        },
        {
          path: "/affiliate",
          element: <AffilliatesPageView />,
        },
        {
          path: "/Brands",
          element: <BrandsPageView />,
        },
        {
          path: "/gift-cards",
          element: <BuyGiftCardsPageView />,
        },
        {
          path: "/my-cart",
          element: <CartPageView />,
        },
        {
          path: "/Categories",
          element: <CategoryPageView />,
        },
        {
          path: "/checkout",
          element: <CheckoutPageView />,
        },
        {
          path: "/Categories",
          element: <CategoryPageView />,
        },
        {
          path: "/contact-us",
          element: <ContactPageView />,
        },
        {
          path: "/customer-support",
          element: <CustomerSupportPageView />,
        },
        {
          path: "/favorites",
          element: <FavoritePageView />,
        },
        {
          path: "/inspiration",
          element: <InspirationPageView />,
        },
        {
          path: "/our-Investors",
          element: <InvestorsPageView />,
        },
        {
          path: "/Categories",
          element: <CategoryPageView />,
        },
        {
          path: "/our-outlets",
          element: <OutletPageView />,
        },
        {
          path: "/payments",
          element: <PaymentPageView />,
        },
        {
          path: "/Productdetail/:productId",
          element: <PDPView />,
        },
        {
          path: "/Product-Listing",
          element: <ProductListingPageView />,
        },
        {
          path: "/Radeem-card",
          element: <RadeemCardPageView />,
        },
        {
          path: "/Return-page",
          element: <ReturnPageView />,
        },
        {
          path: "/sale",
          element: <SalePageView />,
        },
        {
          path: "/shipping-page",
          element: <ShippngPageView />,
        },
        {
          path: "/T&C-page",
          element: <TandCPageView />,
        },
        {
          path: "/order-history",
          element: <OrderHistoryPageView />,
        },
        {
          path: "/Billing",
          element: <BillingPageView />,
        },
        {
          path: "/Privacy",
          element: <PrivacyPageView />,
        },
        {
          path: "/ShippingInfo",
          element: <ShippngPageView />,
        },
        {
          path: "/ReturnPolicy",
          element: <ReturnPolicyPage/>,
        },
        {
          path: "/Cookies",
          element: <CookiesPageView/>,
        },
        {
          path: "/Thankyou",
          element: <ThankYouPageView />,
        
        },
      ],
      errorElement: <ErrorBoundaryPageView />,
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <ErrorBoundaryPageView />,
    },

    {
      path: "/signup",
      element: <Signuppage />,
      errorElement: <ErrorBoundaryPageView />,
    },
    {
      path: "/forgetPassword",
      element: <ForgetPasswordView />,
      errorElement: <ErrorBoundaryPageView />,
    },

   
  ]);

  return <RouterProvider router={router} />;
}

export default App;
