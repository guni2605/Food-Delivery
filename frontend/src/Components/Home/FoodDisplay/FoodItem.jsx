import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { Contextstore } from "../../../store/Contextstore";
import { assets } from "../../../assets/frontend_assets/assets";
import "./FoodItem.css";
function FoodItem({
  id,
  name,
  image,
  price,
  category,
  description,
  addToCart,
  removeFromCart,
}) {
  let { url, cartList, setCartList } = useContext(Contextstore);
  console.log(cartList);
  const [itemCount, setItemCount] = useState(cartList[id]);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img
          className="food-item-image"
          src={url + "/images/" + image}
          alt=""
        />
        {!cartList[id] ? (
          <img
            className="add"
            onClick={() => {
              addToCart(id);
            }}
            src={assets.add_icon_white}
          />
        ) : (
          <div className="itemCount">
            <img
              src={assets.remove_icon_red}
              onClick={() => {
                removeFromCart(id);
              }}
            ></img>
            <p>{cartList[id]}</p>
            <img
              src={assets.add_icon_green}
              onClick={() => {
                setItemCount((prev) => prev + 1);
                addToCart(id);
              }}
            ></img>
          </div>
        )}
        {/* </img> */}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          {/* {console.log(name)} */}
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">{`Rs.${price * 10}`}</p>
      </div>
    </div>
  );
}

export default FoodItem;
