import React from "react";
import WalletConnect from "../walletConnect/WalletConnect";

function Footer() {
  return (
    <div className="h-auto footer-background">
      <div className="container mx-auto flex justify-between p-6 items-center">
        <div className="lg:block hidden">
          <p>
            Visit{" "}
            <a
              href="https://hyphen.biconomy.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#615CCD]"
            >
              Hyphen
            </a>
          </p>
        </div>
        <div className="flex gap-6">
          <p>Twitter</p>
          <p>Discord</p>
          <p>Telegram</p>
        </div>
        <div className="lg:block hidden">
          <a
            href="https://biconomy.io"
            target="_blank"
            className="primary-color"
            rel="noreferrer"
          >
            Biconomy.io
          </a>
        </div>
      </div>
      <div className="text-center lg:hidden block">
        <WalletConnect />
      </div>
    </div>
  );
}

export default Footer;
