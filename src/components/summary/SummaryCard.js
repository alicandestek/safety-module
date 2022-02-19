import React from "react";

function SummaryCard() {
  return (
    <div className="summary-card p-12">
      <div>
        <p>Summary</p>
      </div>
      <div className="my-8">
        <p className="uppercase font-semibold third-color text-xs">
          Current APY
        </p>
        <p className="third-color text-2xl">14.41%</p>
      </div>
      <div className="my-8">
        <p className="uppercase font-semibold third-color text-xs">
          Funds in pool
        </p>
        <p className="third-color text-2xl">6,345,306 USD</p>
      </div>
      <div className="my-8">
        <p className="uppercase font-semibold third-color text-xs">Cooldown</p>
        <p className="third-color text-2xl">14 days</p>
      </div>
      <div className="my-8">
        <p className="uppercase font-semibold third-color text-xs">
          Slashing rate
        </p>
        <p className="third-color text-2xl">30%</p>
      </div>
    </div>
  );
}

export default SummaryCard;
