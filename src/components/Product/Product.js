import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import React from "react";
import "./Product.css";
const Product = (props) => {
  const { id, name, price, ratings, seller } = props.product;
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
        <button
          className="view-btn"
          onClick={() => props.handleAddToCart(props.product)}
        >
          Add To Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default Product;
