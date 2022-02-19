import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import your route components too

import Stake from "../pages/Stake";
import Unstake from "../pages/UnStake";

function PublicRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Stake />} />
        <Route path="/unstake" element={<Unstake />} />
      </Routes>
    </BrowserRouter>
  );
}

export default PublicRoute;
