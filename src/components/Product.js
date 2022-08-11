import React, { useState, useEffect } from "react";
import removeIcon from "../assets/trash.png";
import "../styles/product.css";

const Product = ({ item, handleChange, handleRemove }) => {
  return (
    <div className="cart-item">
      <div className="cart-item-left">
        <div className="cart-item-img" style={{ backgroundColor: item.color }}>
          <div className="cart-item-img-block">
            <img src={item.image} alt="" />
          </div>
        </div>
      </div>
      <div className="cart-item-right">
        <div className="cart-item-name">{item.name}</div>
        <div className="cart-item-price">${item.price}</div>
        <div className="cart-item-actions">
          <div className="cart-item-count">
            <div
              className="cart-item-count-button"
              onClick={() => handleChange(item, -1)}
            >
              -
            </div>
            <div className="cart-item-count-number">{item.amount}</div>
            <div
              className="cart-item-count-button"
              onClick={() => handleChange(item, 1)}
            >
              +
            </div>
          </div>
          <div className="cart-item-remove">
            <img
              src={removeIcon}
              alt=""
              className="cart-item-remove-icon"
              onClick={() => handleRemove(item)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
