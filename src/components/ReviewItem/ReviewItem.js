import React from "react";
import "./ReviewItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const reviewItem = ({ product }) => {
  const { name, price, quantity, img } = product;
  return (
    <div className="review-item">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="review-details-container">
        <div className="review-details">
          <h6>{name}</h6>
          <p>
            <small>Price: {price}</small>
          </p>
          <p>
            <small>Quantity: {quantity}</small>
          </p>
        </div>
        <div className="delete-container">
          <button className="btn-delete ">
            <FontAwesomeIcon className="delete-icon" icon={faTrash} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default reviewItem;
