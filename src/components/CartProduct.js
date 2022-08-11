import React, { useState, useEffect } from "react";
import Product from "./Product";
import logo from "../assets/nike.png";
import "../styles/cartProduct.css";
import list from "../data/shoes";

const CartProduct = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);
  // remove shoe
  const handleRemove = (item) => {
    list.shoes.find((product) => {
      if (product.id === item.id) {
        product.clicked = false;
      }
    });

    const arr = cart.filter((product) => product.id !== item.id);
    setCart(arr);
    handlePrice();
  };
  // update total price
  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans.toFixed(0));
  };
  useEffect(() => {
    handlePrice();
  });

  return (
    <div className="cart-product">
      <div className="cart-product-top">
        <img src={logo} alt="" className="cart-product-top-logo" />
      </div>
      <div className="cart-product-title">
        Your Cart
        <span className="cart-title-amount">${price}</span>
      </div>
      <div className="cart-product-container">
        {cart.length <= 0 ? (
          <div className="cart-product-empty">Your cart empty</div>
        ) : (
          cart.map((item) => {
            return (
              <Product
                item={item}
                key={item.id}
                handleRemove={handleRemove}
                handleChange={handleChange}
              />
            );
          })
        )}
      </div>
    </div>
  );
};
export default CartProduct;
