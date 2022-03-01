import React, { useState } from "react";
import WalletIcon from "../../assets/images/wallet.svg";
import ClaimIcon from "../../assets/images/claim.svg";
import UnlockModal from "../modals/UnlockModal";
import StakingAbi from "../../contract/StakingABI.json";

function StakingCard() {
  const [ethchange, setEthhchnage] = useState(false);
  const [selecttoken, setSelecttoken] = useState(true);

  const [modalstate, setModalstate] = useState(false);

  const handleTokenChange = (value) => {
    setSelecttoken(value);
  };

  const setDeposit = (value) => {};

  return (
    <div>
      <div className="flex justify-center">
        <div className="flex gap-4 border-2 border-black bg-white rounded-full items-center px-1">
          <p
            className={
              selecttoken
                ? "bg-[#545757] text-white py-3 px-6 my-1 rounded-full cursor-pointer text-sm font-semibold"
                : "py-3 px-6 cursor-pointer text-sm font-semibold"
            }
            onClick={() => handleTokenChange(true)}
          >
            BICO
          </p>
          <p
            className={
              selecttoken === false
                ? "bg-[#545757] text-white py-3 px-6 my-1 rounded-full cursor-pointer text-sm font-semibold"
                : "py-3 px-6 cursor-pointer text-sm font-semibold"
            }
            onClick={() => {
              handleTokenChange(false);
              console.log("hello");
            }}
          >
            BBPT
          </p>
        </div>
      </div>
      <div className="staking-card p-12 -mt-8">
        <div>
          <div className="flex justify-between">
            <p>Staking</p>
            <a href="#" className="">
              🤔{" "}
              <span className="underline underline-offset-4">
                How does it work?
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 my-6 gap-6 items-center">
            <div className="relative">
              <div className="flex justify-between px-2 pb-2 items-center">
                <p className="text-xs uppercase font-semibold">Amount</p>
                <p className="flex text-xs items-center secondary-color">
                  <img src={WalletIcon} className="h-4 pr-1" alt="" />
                  <span className="font-semibold">
                    {selecttoken ? "-- BICO" : "-- BBPT"}
                  </span>
                </p>
              </div>
              <input
                type="number"
                className="bg-white border rounded-xl border-slate-400 py-3 w-full placeholder:text-lg"
                placeholder="0"
              />
              <button className="btn-tiny">Max</button>
            </div>
            <div>
              <p className="uppercase text-xs px-2 pb-2 font-semibold">
                Currently Staked {selecttoken ? "BICO" : "BBPT"}
              </p>
              <input
                type="number"
                className="input-bg py-3 w-full mt-1  placeholder:text-lg"
                placeholder="0"
              />
            </div>
          </div>
          {ethchange ? (
            <div>
              <button className="btn-wallet py-4  w-full text-white">
                Switch To Ethereum
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-6">
              <div>
                <button
                  className="btn-unlock py-4 w-full text-white"
                  onClick={() => {
                    setModalstate(true);
                  }}
                >
                  Unlock {selecttoken ? "BICO" : "BBPT"}
                </button>
              </div>
              <div>
                <button className="btn-wallet py-4 px-12 w-full text-white">
                  Confirm Deposit
                </button>
              </div>
              <UnlockModal
                modalstate={modalstate}
                setModalstate={setModalstate}
              />
            </div>
          )}
        </div>

        <div className="flex justify-between">
          <p>Earnings</p>
          <p className="text-sm secondary-color">
            Your total accrued BICO tokens.
          </p>
        </div>
        <div className="grid grid-cols-2 my-6 gap-6 items-center">
          <div>
            <input
              type="number"
              className="input-bg py-3 w-full placeholder:text-lg mt-1"
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
    </div>
  );
}

export default StakingCard;
