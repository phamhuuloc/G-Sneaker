import React from "react";
import list from "../data/shoes";
import Cards from "./card";
import "../styles/listCard.css";
import logo from "../assets/nike.png";

const ListCard = ({ handleClick }) => {
  return (
    <div className="list-card">
      <div className="list-card-top">
        <img src={logo} alt="" className="card-top-logo" />
      </div>
      <div className="list-card-title">Our Product</div>
      <div className="list-card-container">
        {/* load data using map method */}
        {list.shoes.map((item) => {
          return <Cards key={item.id} item={item} handleClick={handleClick} />;
        })}
      </div>
    </div>
  );
};
export default ListCard;
