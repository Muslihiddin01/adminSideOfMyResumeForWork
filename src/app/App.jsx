import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../pages/protected/layout/layout";
import Home from "../pages/protected/home/home";
import Login from "../pages/auth/login/login";
import Orders from "../pages/protected/orders/orders";
import Products from "../pages/protected/products/products";
import AddProducts from "../pages/protected/addProducts/addProducts";
import OtherCategory from "../pages/protected/others/otherCategory";
import OtherBrands from "../pages/protected/others/othersBrands";
import OtherSubcategory from "../pages/protected/others/otherSubcategory";
const App = () => {
  const isAuthenticated = () => {
    return !!localStorage.getItem("access_token");
  };

  const PrivateRoute = ({ children }) => {
    return isAuthenticated() ? children : <Navigate to="/login" replace />;
  };
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        >
          <Route index element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/products" element={<Products />} />
          <Route path="/addProducts" element={<AddProducts />} />
          <Route path="/otherCategory" element={<OtherCategory />} />
          <Route path="/otherBrands" element={<OtherBrands />} />
          <Route path="/otherSubcategory" element={<OtherSubcategory />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
