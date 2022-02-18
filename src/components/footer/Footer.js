import React from "react";

function Footer() {
  return (
    <div className="relative">
      <div className="container mx-auto flex justify-between absolute inset-x-0 bottom-0 p-6 items-center   ">
        <div>
          <p>
            Visit <a href="http://">Hyphen</a>
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
