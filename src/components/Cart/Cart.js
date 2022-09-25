import React from "react";

const Cart = ({ cart }) => {
  return (
    <div>
      <h4>Order Summyry</h4>
      <h5>Selected Item: {cart.length}</h5>
    </div>
  );
};

export default Cart;
