import React from 'react'
import PromoComponent from './PromoComponent'

function PromoCardsContainer() {
  return (
    <div className="h-[500px] bg-white w-[90%] shadow-lg my-8 mx-auto">
        <div className="flex mx-auto justify-evenly">
          <PromoComponent
            title={"Category"}
            offPercentage={"25%"}
            btnTitle={"SHOP NOW"}
            description={"discount on products from Category"}
            img={
              "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2020/06/ecommerce-website-examples.webp"
            }
          />
          <PromoComponent
            title={"Outlet"}
            offPercentage={"50%"}
            btnTitle={"BROWSE PRODUCTS"}
            description={"discount on all products"}
            img={
              "https://png.pngtree.com/thumb_back/fh260/background/20220522/pngtree-ecommerce-banner-planning-segmentation-selection-image_1375247.jpg"
            }
          />
        
        </div>
      </div>
  )
}

export default PromoCardsContainer
