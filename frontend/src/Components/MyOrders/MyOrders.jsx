import React, { useContext, useEffect, useState } from "react";
import "./MyOrders.css";
import { Contextstore } from "../../store/Contextstore";
import axios from "axios";
import { assets } from "../../assets/frontend_assets/assets";

const MyOrders = () => {
  const { url, token } = useContext(Contextstore);
  const [data, setData] = useState([]);

  const fetchOrder = async () => {
    try {
      const response = await axios.post(
        `${url}/api/v1/order/userorders`,
        {},
        { headers: { token } }
      );
      setData(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  return (
    <div className="my-orders-container">
      <p className="my-orders-title">MY ORDERS</p>
      <div className="order-items">
        {data &&
          data.map((order, index) => (
            <div className="order-item" key={index}>
              <img src={assets.parcel_icon} alt="Parcel Icon" />
              <div>
                {order.items.map((item, itemIndex) => (
                  <span key={itemIndex}>
                    {item.name}*{item.quantity}
                    {itemIndex < order.items.length - 1 && ", "}
                  </span>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MyOrders;
