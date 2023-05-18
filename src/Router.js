import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page from "./pages/Page";
import Login from "./pages/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/page" element={<Page />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
