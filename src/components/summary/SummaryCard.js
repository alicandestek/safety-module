import React from "react";
import Tooltip from "../tooltip/Tooltip";

function SummaryCard() {
  return (
    <div className="summary-card p-12">
      <div>
        <p>Summary</p>
      </div>
      <div className="my-8">
        <div className="flex gap-2">
          <p className="uppercase font-semibold third-color text-xs">
            Current APY
          </p>
          <Tooltip
            tooltipdata={
              "14-day cooldown period activated.You can withdraw in 1 day(s) 18 hours."
            }
          />
        </div>

        <p className="third-color text-2xl">14.41%</p>
      </div>
      <div className="my-8">
        <div className="flex gap-2">
          <p className="uppercase font-semibold third-color text-xs">
            Funds in pool
          </p>
          <Tooltip
            tooltipdata={
              "14-day cooldown period activated.You can withdraw in 1 day(s) 18 hours."
            }
          />
        </div>
        <p className="third-color text-2xl">6,345,306 USD</p>
      </div>
      <div className="my-8">
        <div className="flex gap-2">
          <p className="uppercase font-semibold third-color text-xs">
            Cooldown
          </p>
          <Tooltip
            tooltipdata={
              "14-day cooldown period activated.You can withdraw in 1 day(s) 18 hours."
            }
          />
        </div>
        <p className="third-color text-2xl">14 days</p>
      </div>
      <div className="my-8">
        <div className="flex gap-2">
          <p className="uppercase font-semibold third-color text-xs">
            Slashing rate
          </p>
          <Tooltip
            tooltipdata={
              "14-day cooldown period activated.You can withdraw in 1 day(s) 18 hours."
            }
          />
        </div>
        <p className="third-color text-2xl">30%</p>
      </div>
    </div>
  );
}

export default SummaryCard;
