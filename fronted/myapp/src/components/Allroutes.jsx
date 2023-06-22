import React from "react";
import HomePage from "../pages/HomePage";
import { Route, Routes } from "react-router-dom";

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
    </Routes>
  );
};

export default Allroutes;
