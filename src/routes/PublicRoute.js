import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WalletDetail } from "../contexts/Context.js";
import { useContext, useEffect, useState } from "react";
// import your route components too

import Stake from "../pages/Stake";
import Unstake from "../pages/UnStake";

function PublicRoute() {
  const walletDetail = useContext(WalletDetail);
  const [loadstate, setLoadstate] = useState(false);
  const [storedata, setStoredata] = useState(walletDetail);

  useEffect(() => {
    console.log(storedata);
    window.onbeforeunload = () => {
      console.log("unload");
      console.log(storedata);
      alert("unload");
      localStorage.setItem("tempstore", JSON.stringify(storedata));
      setLoadstate(true);
    };
  }, []);

  useEffect(() => {
    console.log(walletDetail);
    setStoredata(walletDetail);
  }, [walletDetail]);

  useEffect(() => {
    console.log(localStorage.getItem("tempstore"));
    if (loadstate) {
      if (localStorage.getItem("tempstore")) {
        const tempwallet = localStorage.getItem("tempstore");
        const reloaddata = JSON.parse(tempwallet);
        console.log(reloaddata);
        walletDetail.setAddress(reloaddata.address);
        walletDetail.setBalance(reloaddata.balance);
        walletDetail.setConnect(reloaddata.connect);
      }
    }
  }, [loadstate]);

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
