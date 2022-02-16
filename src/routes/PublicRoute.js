import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import your route components too

import Stake from "../pages/Stake";

function PublicRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Stake />} />
      </Routes>
    </BrowserRouter>
  );
}

export default PublicRoute;
