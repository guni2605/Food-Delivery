import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Home } from "./Components/Home/Home.jsx";
import { Cart } from "./Components/Cart/Cart.jsx";
import { PlaceOrder } from "./Components/PlaceOrder/PlaceOrder.jsx";
import Layout from "./Components/Layout/Layout.jsx";
import App from "./App.jsx";
import ContextstoreProvider, { Contextstore } from "./store/Contextstore.jsx";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "Cart",
//         element: <Cart />,
//       },
//       {
//         path: "PlaceOrder",
//         element: <PlaceOrder />,
//       },
//     ],
//   },
// ]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ContextstoreProvider>
      <App />
    </ContextstoreProvider>
  </BrowserRouter>
);
