import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const Contextstore = createContext(null);

const ContextstoreProvider = (props) => {
  const navigate = useNavigate();
  const [TotalPrice, setTotalPrice] = useState(0);
  const [foodList, setFoodList] = useState([]);
  const [category, setCategory] = useState("All");
  const [cartList, setCartList] = useState([]);
  const url = "https://food-delivery-backend-845b.onrender.com";
  const [token, setToken] = useState("");
  const fetchFood = async () => {
    const new_api = url + "/api/v1/food/list";
    const response = await axios.get(new_api);
    //console.log(response);
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
      if (response.data.cartData) setCartList(response.data.cartData);
      else {
        alert("Please login to view cart");
        navigate("/signup");
      }
    }
  };

  const findPrice = () => {
    // console.log(cartList);

    let TPrice = 0;
    foodList.forEach((item) => {
      if (cartList[item._id]) {
        TPrice = item.price * cartList[item._id] + TPrice;

        console.log(TPrice);
      }
    });
    TPrice = TPrice * 10;
    setTotalPrice(TPrice);
  };
  useEffect(() => {
    findPrice();
  });
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
        TotalPrice,
        setTotalPrice,
      }}
    >
      {props.children}
    </Contextstore.Provider>
  );
};
export default ContextstoreProvider;
