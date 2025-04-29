import React, { useContext } from "react";
import { useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import "./Navbar.css";
import { Contextstore } from "../store/Contextstore.jsx";
import { Link, useNavigate } from "react-router-dom";
function Navbar({ setShowLogin }) {
  //const navigate = useNavigate()
  const { token, setToken } = useContext(Contextstore);
  const [selectedTab, setSelectedTab] = useState("Home");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    // go back to home page
    navigate("/");
  };
  const handleOnClick = (e) => {
    // console.log(e);
    setSelectedTab(e.target.innerText);
  };
  return (
    <div className="navBar">
      <h1 className="logo">Food dive</h1>
      <ul className="navbar-menu">
        <li
          className={selectedTab == "Home" ? "active" : ""}
          onClick={(e) => handleOnClick(e)}
        >
          <Link to="/"> Home </Link>
        </li>
        <li
          className={selectedTab == "Menu" ? "active" : ""}
          onClick={(e) => handleOnClick(e)}
        >
          <Link to="/Menu">Menu</Link>
        </li>
        <li
          className={selectedTab == "Mobile App" ? "active" : ""}
          onClick={(e) => handleOnClick(e)}
        >
          Mobile App
        </li>
        <li
          className={selectedTab == "Contact us" ? "active" : ""}
          onClick={(e) => handleOnClick(e)}
        >
          Contact us
        </li>
      </ul>
      <div className="right-navbar">
        <img src={assets.search_icon} alt="" className="search" />
        <Link to="/Cart" className="basket">
          <img
            src={assets.basket_icon}
            alt=""
            className={
              selectedTab == "cart" ? "active basketicon" : "basketicon"
            }
            onClick={() => setSelectedTab("cart")}
          />
          <div className="dot"></div>
        </Link>
        {!token ? (
          <button onClick={() => setShowLogin(true)} className="search-btn">
            Sign up
          </button>
        ) : (
          <div className="user-profile">
            <img src={assets.profile_icon} className="user-logo" alt="" />
            <ul className="login-feat-list">
              <li onClick={() => navigate("/myorders")}>
                <img src={assets.bag_icon} alt="" />
                Orders
              </li>
              <hr />
              <li onClick={() => logout()}>
                <img src={assets.logout_icon} alt="" />
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
