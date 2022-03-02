import React from "react";
import Logo from "../../assets/images/logo.svg";
import WalletConnect from "../walletConnect/WalletConnect";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="flex lg:container lg:mx-auto justify-between my-4 mx-6">
        <div>
          <img src={Logo} alt="" className="lg:h-6 h-4" />
        </div>
        <div className="menu flex">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Stake
          </NavLink>
          <NavLink
            to="/unstake"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Unstake
          </NavLink>
        </div>
        <div className="lg:block hidden">
          <WalletConnect />
        </div>
      </div>
    </>
  );
}

export default Header;
