import React from "react";
import { Button } from "react-bootstrap";
import "./Product.css";
const Product = (props) => {
  const { name, price, ratings, seller } = props.product;
  return (
    <div className="card">
      <img src={props.img} alt="" />
      <div className="card-body">
        <p className="card-title">{name}</p>
        <p>Price: ${price}</p>
        <p>
          <small> Seller: {seller}</small>
        </p>
        <p>Rating: {ratings}</p>
      </div>
      <hr />
      <div className="btn-group">
        <button className="view-btn">Add</button>
      </div>
    </div>
  );
};

export default Product;
