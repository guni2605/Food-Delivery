import React from "react";
import "./Delivery.css";
import { Cart } from "../Cart/Cart";
const Delivery = () => {
  return (
    <div className="outer-box">
      <div className="delivery-box">
        <p>Delivery information</p>
        <div className="flex-box">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>

        <div>
          <input
            type="text"
            placeholder="Email Address"
            className="input-box"
          />
        </div>
        <input type="text" placeholder="Street" className="input-box" />
        <div className="flex-box">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="flex-box">
          <input type="text" placeholder="Zip Name" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="phone" className="input-box" />
      </div>
      <Cart />
    </div>
  );
};

export default Delivery;
