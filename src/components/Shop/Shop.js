import React, { useState, useEffect } from "react";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  // load data
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              product={product}
              img={product?.img}
              handleAddToCart={handleAddToCart}
            ></Product>
          );
        })}
      </div>
      <div className="cart-container">
        <h2>Item in Cart: {cart.length}</h2>

        {cart.map((cart) => {
          return (
            <div key={cart.id}>
              <span>{cart.name}</span> <span>$</span>
              <span>{cart.price}</span>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
