import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home/Home";

import { Cart } from "./Components/Cart/Cart";
import ContextstoreProvider from "./store/Contextstore";
import Footer from "./Components/Footer/Footer";
import LoginPopup from "./Components/LoginPopup/LoginPopup";
import Delivery from "./Components/Delivery/Delivery";
import CartShow from "./Components/Cart/CartShow";
import Verify from "./Components/Verify/Verify";
import MyOrders from "./Components/MyOrders/MyOrders";
import Menu from "./Components/Menu/Menu";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <ContextstoreProvider>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />

        <Routes>
          <Route path="/" element=<Home /> />
          <Route path="/Menu" element=<Menu /> />

          <Route path="/Cart" element=<CartShow /> />
          <Route path="/delivery" element=<Delivery /> />
          <Route path="/verify" element=<Verify /> />
          <Route path="/myorders" element=<MyOrders /> />
        </Routes>
        <Footer />
      </div>
    </ContextstoreProvider>
  );
}

export default App;
