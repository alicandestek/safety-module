import React from "react";
import WalletIcon from "../../assets/images/wallet.svg";
import ClaimIcon from "../../assets/images/claim.svg";

function StakingCard() {
  return (
    <div className="staking-card p-12">
      <div className="flex justify-between">
        <p>Staking</p>
        <a href="#" className="">
          🤔{" "}
          <span className="underline underline-offset-4">
            How does it work?
          </span>
        </a>
      </div>
      <div>
        <div className="grid grid-cols-2 my-6 gap-6 items-center">
          <div>
            <div className="flex justify-between px-2 pb-2 items-center">
              <lable className="text-xs uppercase font-semibold">Amount</lable>
              <p className="flex text-xs items-center secondary-color">
                <img src={WalletIcon} className="h-4 pr-1" alt="" />
                <span className="font-semibold"> -- BBPT</span>
              </p>
            </div>
            <input
              type="number"
              className="bg-white border rounded-xl border-slate-400 py-3 w-full placeholder:pl-6 placeholder:text-lg"
              placeholder="0"
            />
          </div>
          <div>
            <lable className="uppercase text-xs px-2 pb-2 font-semibold">
              Currently Staked BBPT
            </lable>
            <input
              type="number"
              className="input-bg py-3 w-full mt-1 placeholder:pl-6 placeholder:text-lg"
              placeholder="0"
            />
          </div>
        </div>
        <button className="btn-wallet py-4 px-12 w-full text-white">
          Switch To Ethereum
        </button>
      </div>

      <div className="flex justify-between my-6">
        <p>Earnings</p>
        <p className="text-sm secondary-color">
          Your total accrued BICO tokens.
        </p>
      </div>
      <div className="grid grid-cols-2 my-6 gap-6 items-center">
        <div>
          <input
            type="number"
            className="input-bg py-3 w-full placeholder:pl-6 placeholder:text-lg mt-1"
            placeholder="0"
          />
        </div>
        <div className="">
          <button className="btn-claim py-3 w-full text-white flex justify-center items-center gap-2">
            <img src={ClaimIcon} alt="Claim" className="" /> Claim Rewards
          </button>
        </div>
      </div>

      <div className="my-16">
        <p className="secondary-color text-sm ">
          Biconomy Stakers receive protocol incentives in the form of BICO
          tokens in exchange for taking the risk of securing the protocol. In
          case you want to unstake your BBPT/BICO, you will need to activate a
          14 days cooldown period before you are able to withdraw your stake.
        </p>
      </div>
    </div>
  );
}

export default StakingCard;
