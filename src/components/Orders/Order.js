import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import Cart from "../Cart/Cart";
import { removeFromDb } from "../../utilities/fakedb";
const Order = () => {
  const { products, initialCart } = useLoaderData();
  const [cart, setCart] = useState(initialCart);

  // Remove item handler
  const handleRemoveItem = (id) => {
    console.log(id);
    const remainingProduct = cart.filter((product) => product.id !== id);
    setCart(remainingProduct);
    removeFromDb(id);
  };

  return (
    <div className="shop-container">
      <div className="orders-container">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            handleRemoveItem={handleRemoveItem}
            product={product}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Order;
