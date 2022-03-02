import React, { useEffect, useContext, useState } from "react";
import Tooltip from "../tooltip/Tooltip";
import StakingAbi from "../../contract/StakingABI.json";
import { ethers } from "ethers";
import { BICOSTAKINGCONTRACT } from "../../config/Confing";
import { WalletDetail } from "../../contexts/Context.js";

function SummaryCard() {
  const walletDetail = useContext(WalletDetail);
  const [cooldownvalue, setCooldown] = useState();
  const [totalSupply, setTotalSupply] = useState();

  const getSummaryCardData = async () => {
    const tokenContractAddress = BICOSTAKINGCONTRACT;
    //  const signer = walletDetail.connect.getSigner();
    const contract_write = new ethers.Contract(
      tokenContractAddress,
      StakingAbi,
      walletDetail.connect
    );

    const cooldown = await contract_write.COOLDOWN_SECONDS();
    console.log("addsd", cooldown.toString());
    setCooldown(cooldown.toString());

    const totalSupply = await contract_write.totalSupply();
    console.log("addsd", totalSupply.toString());
    setTotalSupply(totalSupply.toString());
  };

  useEffect(() => {
    getSummaryCardData();
  }, [walletDetail.connect]);

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
        <p className="third-color text-sm">
          {totalSupply > 0 ? totalSupply + " USD" : "0 USD"}
        </p>
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
        <p className="third-color text-2xl">
          {cooldownvalue > 0 ? cooldownvalue / 60 + "Minutes" : "0 Minutes"}
        </p>
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
