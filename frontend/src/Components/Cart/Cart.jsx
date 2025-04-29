import React, { useContext, useEffect, useState } from "react";
import "./Cart.css";
import { Contextstore } from "../../store/Contextstore";
import { assets } from "../../assets/frontend_assets/assets";
import { useNavigate } from "react-router-dom";
import CartList from "./CartList";
//import { food_list } from "../../assets/frontend_assets/assets";
export const Cart = () => {
  const navigate = useNavigate();
  const {
    url,
    cartList,
    foodList,
    setCartList,
    removeFromCart,
    TotalPrice,
    setTotalPrice,
  } = useContext(Contextstore);
  console.log(cartList);

  // const findPrice = () => {
  //   // console.log(cartList);

  //   let TPrice = 0;
  //   foodList.forEach((item) => {
  //     if (cartList[item._id]) {
  //       TPrice = item.price * cartList[item._id] + TPrice;

  //       console.log(TPrice);
  //     }
  //   });
  //   TPrice = TPrice * 10;
  //   setTotalPrice(TPrice);
  // };
  // useEffect(() => {
  //   findPrice();
  // });
  return (
    <div>
      <div className="cart-details">
        <div className="cartTotal">
          <h2>Cart Total Price</h2>
          <div className="cart-cont">
            <span>Subtotal :</span>
            <span>{TotalPrice}Rs.</span>
          </div>
          <div className="cart-cont">
            <span>Delivery Charges:</span>
            <span>49 Rs.</span>
          </div>
          <div className="cart-cont">
            <span>Total Prices :</span>
            <span>{TotalPrice + 49}Rs.</span>
          </div>
          <div className="btn-div">
            <button className="btn" onClick={(e) => navigate("/delivery")}>
              Proceed to checkout
            </button>
          </div>
        </div>
        <div className="promo-code">
          <p>If you have any promo code enter here</p>
          <div className="promo-code-det">
            <input
              type="text"
              placeholder="Enter the promo code to get discount"
            />
            <button className="btn"> Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};
