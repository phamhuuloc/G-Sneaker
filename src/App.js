import React, { useEffect, useState } from "react";
import ListCard from "./components/ListCard";
import list from "./data/shoes";
import "./App.css";
import CartProduct from "./components/CartProduct";

function App() {
  // cart is list product of user selected
  // const [cart, setCart] = useState([]);

  const [cart, setCart] = useState(() => {
    const localData = localStorage.getItem("CartProduct");
    return localData !== null ? JSON.parse(localData) : [];
  });

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    item.amount = 1;
    item.clicked = true;
    setCart([...cart, item]);
    localStorage.setItem("CartProduct", JSON.stringify(cart));
  };
  // handleChange cart product (amount, remove) shoes
  const handleChange = (item, d) => {
    // increase amount of product
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;
    setCart([...arr]);
    // remove product from cart and update status of list card if amount === 0
    if (arr[ind].amount === 0) {
      const arr = cart.filter((product) => product.id !== item.id);
      list.shoes.find((product) => {
        if (product.id === item.id) {
          product.clicked = false;
        }
      });
      setCart([...arr]);
    }
  };
  //save data into localStorage
  useEffect(() => {
    localStorage.setItem("CartProduct", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="app">
      <ListCard handleClick={handleClick} />
      <CartProduct cart={cart} setCart={setCart} handleChange={handleChange} />
    </div>
  );
}

export default App;
