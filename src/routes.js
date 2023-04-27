import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Users from "./pages/users";

const routes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  );
};

export default routes;
