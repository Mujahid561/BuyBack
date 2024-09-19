export const handleIncrement = (productId,price) => {
  // console.log(productId)

  let product = JSON.parse(localStorage.getItem(`myCart-ProdId${productId}`));
  if (product === null || undefined) {
    localStorage.setItem(
      `myCart-ProdId${productId}`,
      JSON.stringify({ prodId: productId, quantity: 1,price:price })
    );
  } else {
    let ProdQuantity = product?.quantity;
    localStorage.removeItem(`myCart-ProdId${productId}`);
    localStorage.setItem(
      `myCart-ProdId${productId}`,
      JSON.stringify({ prodId: productId, quantity: ProdQuantity + 1,price:price })
    );
  }
};
