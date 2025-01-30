import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";
import axios from "axios";

export const Contextstore = createContext(null);

const ContextstoreProvider = (props) => {
  const [foodList, setFoodList] = useState([]);
  const [category, setCategory] = useState("All");
  const [cartList, setCartList] = useState([]);
  const url = "http://localhost:4000";
  const [token, setToken] = useState("");
  const fetchFood = async () => {
    const new_api = url + "/api/v1/food/list";
    const response = await axios.get(new_api);
    if (response.data.data) {
      setFoodList(response.data.data);
    } else {
      throw console.error(error);
      console.log(response.data);
    }
  };
  const addToCart = async (itemId) => {
    if (cartList[itemId]) {
      setCartList((prev) => ({
        ...prev,
        [itemId]: prev[itemId] + 1,
      }));
    } else {
      setCartList((prev) => ({ ...prev, [itemId]: 1 }));
    }
    const response = await axios.post(
      url + "/api/v1/cart/add/cart",
      { itemId },
      { headers: { token: localStorage.getItem("token") } }
    );
    // console.log(response);
  };
  const removeFromCart = async (itemId) => {
    setCartList((prev) => ({
      ...prev,
      [itemId]: prev[itemId] - 1,
    }));
    const response = await axios.post(
      url + "/api/v1/cart/remove/cart",
      { itemId },
      { headers: { token: localStorage.getItem("token") } }
    );
  };
  const loadCartData = async () => {
    if (token) {
      const response = await axios.get(url + "/api/v1/cart/get/list", {
        headers: { token: localStorage.getItem("token") },
      });
      console.log(response);
      setCartList(response.data.cartData);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      await fetchFood();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        await loadCartData();
      }
    };
    loadData();
  }, []);
  useEffect(() => {
    loadCartData();
  }, [cartList]);
  return (
    <Contextstore.Provider
      value={{
        foodList,
        category,
        setCategory,
        cartList,
        setCartList,
        addToCart,
        removeFromCart,
        url,
        token,
        setToken,
      }}
    >
      {props.children}
    </Contextstore.Provider>
  );
};
export default ContextstoreProvider;
