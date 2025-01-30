import React from "react";
import "./Home.css";
import Header from "./Header/Header";
import Exploremenu from "./ExploreMenu/Exploremenu";
import { useState } from "react";
import FoodDisplay from "./FoodDisplay/FoodDisplay";
export const Home = () => {
  return (
    <div>
      <Header />
      <Exploremenu />
      <FoodDisplay />
    </div>
  );
};
