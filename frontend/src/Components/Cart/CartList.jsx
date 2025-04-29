import React, { useContext } from "react";
import { Contextstore } from "../../store/Contextstore";
import { assets } from "../../assets/frontend_assets/assets.js";
import "./Cart.css";
const CartList = () => {
  const { url, cartList, foodList, setCartList, removeFromCart } =
    useContext(Contextstore);
  return (
    <div>
      <h2>
        <center>Cart List</center>
      </h2>
      <div className="cart-title">
        <ul className="cart-title-item">
          <li>Item no</li>
          <li>Food Image</li>
          <li>Item Name</li>
          <li>Price</li>
          <li>Quantity</li>
          <li>Remove item</li>
        </ul>
      </div>
      {foodList.map((item) => {
        return cartList[item._id] > 0 ? (
          <div key={item._id} className="cart-item-list">
            <p>{item._id.slice(10)}</p>
            <img src={url + "/images/" + item.image} alt="" />
            <h3>{item.name}</h3>
            <p>{item.price * cartList[item._id] * 10}</p>
            <p>{cartList[item._id]}</p>
            <img
              src={assets.cross_icon}
              className="remove-item"
              alt=""
              onClick={() => removeFromCart(item._id)}
            />
            <hr />
          </div>
        ) : (
          <></>
        );
      })}
    </div>
  );
};

export default CartList;
