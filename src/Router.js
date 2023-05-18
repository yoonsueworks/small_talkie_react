import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page from "./pages/Page";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Page" element={<Page />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
