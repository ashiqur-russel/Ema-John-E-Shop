import React, { useState, useEffect } from "react";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
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
            ></Product>
          );
        })}
      </div>
      <div className="cart-container">Order Summary</div>
    </div>
  );
};

export default Shop;
