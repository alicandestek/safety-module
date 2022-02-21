import React from "react";
import Logo from "../../assets/images/logo.svg";
import WalletConnect from "../walletConnect/WalletConnect";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="flex container mx-auto justify-between my-4">
        <div>
          <img src={Logo} alt="" className="h-6" />
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
        <div>
          <WalletConnect />
        </div>
      </div>
    </>
  );
}

export default Header;
