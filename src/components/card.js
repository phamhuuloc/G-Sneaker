import React, { useState } from "react";
import "../styles/card.css";

const Cards = ({ item, handleClick }) => {
  const { id, image, name, description, price } = item;

  return (
    <div className="shoe">
      <div className="shoe-img" style={{ backgroundColor: item.color }}>
        <img src={image} alt="" />
      </div>
      <div className="shoe-name">{name}</div>
      <div className="shoe-description">{description}</div>
      <div className="shoe-bottom">
        <div className="shoe-price">${price}</div>
        <div
          className={item.clicked ? "shoe-button inactive" : "shoe-button"}
          onClick={() => handleClick(item)}
        >
          {item.clicked ? (
            <div className="shoe-button-cover">
              <div className="shoe-button-cover-check-icon"></div>
            </div>
          ) : (
            <p onClick={() => handleClick(item)}>ADD TO CART</p>
          )}
        </div>
      </div>
    </div>
  );
};
export default Cards;
