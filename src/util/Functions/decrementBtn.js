export const handleDecrement = (productId,price) => {
   
    let product= JSON.parse(localStorage.getItem(`myCart-ProdId${productId}`))
    let ProdQuantity=product?.quantity
 
  
       
     localStorage.removeItem(`myCart-ProdId${productId}` );
     localStorage.setItem(`myCart-ProdId${productId}` , JSON.stringify({prodId:productId,quantity:ProdQuantity-1,price:price}));

    
    
   };