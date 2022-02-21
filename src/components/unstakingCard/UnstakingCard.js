import React, { useState, useEffect } from "react";
import ClaimIcon from "../../assets/images/claim.svg";
import ProgressBar from "../progressBar/ProgressBar";
import Tooltip from "../tooltip/Tooltip";

function UnstakingCard() {
  const [tokenchange, setTokenChange] = useState(true);

  const [selecttoken, setSelecttoken] = useState(true);

  const handleTokenChange = (value) => {
    setSelecttoken(value);
  };

  const [completed, setCompleted] = useState(10);

  useEffect(() => {
    setCompleted();
  }, []);

  const data = [{ tooltipdata: "dataajsdh" }];
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
            <p>Unstaking</p>
            {/* <a href="#" className="">
              🤔{" "}
              <span className="underline underline-offset-4">
                How does it work?
              </span>
            </a> */}
          </div>
          <div className="grid grid-cols-2 my-6 gap-6 items-center">
            <div className="relative">
              <div className="flex justify-between px-2 pb-2 items-center">
                <lable className="text-xs uppercase font-semibold">
                  Amount
                </lable>
                <p className="flex text-xs items-center secondary-color">
                  <span className="font-semibold uppercase">
                    45.9 {selecttoken ? "BICO" : "BBPT"} staked
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
              <lable className="uppercase text-xs px-2 pb-2 font-semibold">
                Your Pool Share
              </lable>
              <input
                type="number"
                className="input-bg py-3 w-full mt-1 placeholder:text-lg"
                placeholder="0"
              />
            </div>
          </div>
          <div className="flex gap-6">
            <button className="btn-cooldown py-4 px-12 w-full text-white">
              Cooldown Activated
            </button>
            <button className="btn-wallet py-4 px-12 w-full text-white">
              Confirm Withdrawal
            </button>
          </div>
          <div className="my-4">
            <ProgressBar bgcolor={"#00D28F"} completed={completed} />
          </div>
          <div className="flex gap-2 items-center">
            <p className="secondary-color text-sm font-semibold uppercase third-color">
              3 days to unlock
            </p>
            <Tooltip
              tooltipdata={
                "14-day cooldown period activated.You can withdraw in 1 day(s) 18 hours."
              }
            />
          </div>
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

export default UnstakingCard;
