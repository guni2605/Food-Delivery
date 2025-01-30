import React, { useContext } from "react";
import { Contextstore } from "../../../store/Contextstore.jsx";
import FoodItem from "./FoodItem";
import "./FoodDisplay.css";
import { useEffect } from "react";
function FoodDisplay() {
  const { foodList } = useContext(Contextstore);
  const { category } = useContext(Contextstore);
  const { addToCart } = useContext(Contextstore);
  const { removeFromCart } = useContext(Contextstore);

  return (
    <div className="Food-list">
      <h1>Top picks for you ...</h1>
      <div className="food-item-list">
        {foodList &&
          foodList.map((item, index) => {
            return category === "All" || item.category === category ? (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                image={item.image}
                price={item.price}
                description={item.description}
                category={item.category}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            ) : (
              <></>
            );
          })}
      </div>
    </div>
  );
}

export default FoodDisplay;
