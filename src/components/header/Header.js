import React from "react";
import Logo from "../../assets/images/logo.svg";
import WalletConnect from "../walletConnect/WalletConnect";

function Header() {
  return (
    <>
      <div className="flex container mx-auto justify-between my-4">
        <div>
          <img src={Logo} alt="" className="h-6" />
        </div>
        <div className="flex gap-6">
          <p>Stake</p>
          <p>Unstake</p>
        </div>
        <div>
          <WalletConnect />
        </div>
      </div>
    </>
  );
}

export default Header;
