import React from "react";
import CartList from "./CartList";
import { Cart } from "./Cart";

const CartShow = () => {
  return (
    <div>
      <CartList />
      <Cart />
    </div>
  );
};

export default CartShow;
