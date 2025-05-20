import React, { useContext, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import "./Navbar.css";
import { Contextstore } from "../store/Contextstore.jsx";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ setShowLogin }) {
  const { token, setToken } = useContext(Contextstore);
  const [selectedTab, setSelectedTab] = useState("Home");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  const handleOnClick = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <header className="navbar-container">
      <h1 className="logo">Food Dive</h1>
      <nav className="navbar-menu">
        {["Home", "Menu", "Mobile App", "Contact us"].map((tab) => (
          <li
            key={tab}
            className={selectedTab === tab ? "active" : ""}
            onClick={() => handleOnClick(tab)}
          >
            <Link to={`/${tab === "Home" ? "" : tab.replace(/\s+/g, "")}`}>
              {tab}
            </Link>
          </li>
        ))}
      </nav>
      <div className="navbar-actions">
        <Link
          to="/Cart"
          className="basket"
          onClick={() => setSelectedTab("cart")}
        >
          <img
            src={assets.basket_icon}
            alt="Cart"
            className={`basketicon ${selectedTab === "cart" ? "active" : ""}`}
          />
          <div className="dot" />
        </Link>
        {!token ? (
          <button onClick={() => setShowLogin(true)} className="auth-btn">
            Sign Up
          </button>
        ) : (
          <div className="user-profile">
            <img src={assets.profile_icon} className="user-logo" alt="User" />
            <ul className="login-feat-list">
              <li onClick={() => navigate("/myorders")}>Orders</li>
              <li onClick={logout}>Logout</li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
