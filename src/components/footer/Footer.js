import React from "react";

function Footer() {
  return (
    <div className="h-auto footer-background">
      <div className="container mx-auto flex justify-between p-6 items-center">
        <div>
          <p>
            Visit{" "}
            <a href="http://" className="text-[#615CCD]">
              Hyphen
            </a>
          </p>
        </div>
        <div className="flex gap-6">
          <p>Twitter</p>
          <p>Discord</p>
          <p>Telegram</p>
        </div>
        <div>
          <a href="http://" className="primary-color">
            Biconomy.io
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
