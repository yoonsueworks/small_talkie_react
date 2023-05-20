import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import Signup from "./pages/Signup/Signup";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
