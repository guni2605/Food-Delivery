import React, { useContext, useState } from "react";
import "./Delivery.css";
import { Cart } from "../Cart/Cart";
import { Contextstore } from "../../store/Contextstore";
import axios from "axios";
const Delivery = () => {
  const { TotalPrice, foodList, cartList, url } = useContext(Contextstore);
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    phone: "",
  });
  const onChangeHandler = (e) => {
    e.preventDefault();
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    //console.log(data);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const orderItems = [];
    foodList.forEach((item) => {
      if (cartList[item._id] > 0) {
        const orderItem = item;
        orderItem["quantity"] = cartList[item._id];
        orderItems.push(orderItem);
      }
    });
    let orderData = {
      address: data,
      items: orderItems,
      amount: TotalPrice,
    };
    const response = await axios.post(url + "/api/v1/order/place", orderData, {
      headers: { token: localStorage.getItem("token") },
    });
    console.log(response);
    if (response.data.success) {
      const session_url = response.data.url;
      window.location.replace(session_url);
    }
    console.log(orderItems);
  };
  return (
    <form className="outer-box" onSubmit={handleSubmit}>
      <div className="delivery-box">
        <p>Delivery information</p>
        <div className="flex-box">
          <input
            required
            type="text"
            placeholder="First Name"
            onChange={onChangeHandler}
            name="first_name"
            value={data.first_name}
          />
          <input
            required
            type="text"
            placeholder="Last Name"
            onChange={(e) => onChangeHandler(e)}
            name="last_name"
            value={data.last_name}
          />
        </div>

        <div>
          <input
            required
            type="text"
            placeholder="Email Address"
            onChange={(e) => onChangeHandler(e)}
            className="input-box"
            name="email"
            value={data.email}
          />
        </div>
        <input
          required
          type="text"
          placeholder="Street"
          className="input-box"
          onChange={(e) => onChangeHandler(e)}
          name="street"
          value={data.street}
        />
        <div className="flex-box">
          <input
            required
            type="text"
            placeholder="City"
            name="city"
            value={data.city}
            onChange={(e) => onChangeHandler(e)}
          />
          <input
            required
            type="text"
            placeholder="State"
            onChange={(e) => onChangeHandler(e)}
            name="state"
            value={data.state}
          />
        </div>
        <div className="flex-box">
          <input
            required
            type="text"
            placeholder="Zip Name"
            onChange={(e) => onChangeHandler(e)}
            name="zip"
            value={data.zip}
          />
          <input
            required
            type="text"
            placeholder="Country"
            name="country"
            onChange={(e) => onChangeHandler(e)}
            value={data.country}
          />
        </div>
        <input
          required
          type="text"
          placeholder="phone"
          className="input-box"
          name="phone"
          onChange={(e) => onChangeHandler(e)}
          value={data.phone}
        />
      </div>

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
          <button className="btn" type="submit">
            Proceed to checkout
          </button>
        </div>
      </div>
    </form>
  );
};

export default Delivery;
