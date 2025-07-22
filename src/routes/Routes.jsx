import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Detail from "../pages/Detail";
import Error404 from "../components/Error404";

const PageRoutes = () => {
  return (
    <div>
        <Routes>
          <Route path="/:category/search/:keyword" element={<Catalog/>} />
          <Route path="/:category/:id" element={<Detail/>} />
          <Route path="/:category" element={<Catalog/>} />
          <Route path="/" element={<Home/>} />
          <Route path="*" element={<Error404/>} />
        </Routes>
    </div>
  );
};

export default PageRoutes;
