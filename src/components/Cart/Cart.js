import React from "react";
import "./Cart.css";
const Cart = ({ cart }) => {
  let total = 0;
  let shipping = 0;
  let grandTotal = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity += product.quantity;
    total = total + product.price * product.quantity;
    shipping += product.shipping;
  }
  const tax = parseFloat((total * 0.1).toFixed(2));
  grandTotal = total + shipping + tax;
  return (
    <div className="cart">
      <h4>Order Summary</h4>
      <h5>Selected Item: {quantity}</h5>
      <p>Total Price:{total}</p>
      <p>Total Shipping:{shipping}</p>
      <p>Tax:{tax}</p>
      <p>Grand Total:{parseFloat(grandTotal)}</p>
    </div>
  );
};

export default Cart;
