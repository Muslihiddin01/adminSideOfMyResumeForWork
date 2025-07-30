import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../pages/protected/layout/layout";
import Home from "../pages/protected/home/home";
import Login from "../pages/auth/login/login";
import Orders from "../pages/protected/orders/orders";
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
        </Route>
      </Routes>
    </>
  );
};

export default App;
