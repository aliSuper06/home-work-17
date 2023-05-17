import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "./components/products/Products";
import MyCart from "./components/myCart/MyCart";
import MyOrders from "./components/myOrders/MyOrders";
import Header from "./components/Header/Header";
import Empty from "./components/Empty";
import { PhoneDetails } from "./components/products/ProductDetails";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="*" element={<Empty />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<PhoneDetails />} />
        <Route path="/my-cart" element={<MyCart />} />
        <Route path="/my-orders" element={<MyOrders />} />
      </Routes>
    </div>
  );
};

export default App;
