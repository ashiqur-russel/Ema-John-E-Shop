import { getStoredCart } from "../utilities/fakedb";

export const ProductsAndCartLoader = async () => {
  //get products
  const productsData = await fetch("products.json");
  const products = await productsData.json();

  //get cart

  const savedCart = getStoredCart();
  const initialCart = [];
  for (const id in savedCart) {
    const addedproduct = products.find((product) => product.id === id);
    if (addedproduct) {
      const savedQuantity = savedCart[id];
      addedproduct.quantity = savedQuantity;
      initialCart.push(addedproduct);
    }
  }
  console.log(initialCart);
  return { products, initialCart };
};
