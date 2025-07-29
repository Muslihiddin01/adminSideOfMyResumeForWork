import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../pages/protected/layout/layout";
import Home from "../pages/protected/home/home";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
