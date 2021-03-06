import React, { useState, useContext, useEffect } from "react";
import WalletIcon from "../../assets/images/wallet.svg";
import ClaimIcon from "../../assets/images/claim.svg";
import UnlockModal from "../modals/UnlockModal";
import StakingAbi from "../../contract/StakingABI.json";
import { ethers } from "ethers";
import { BICOSTAKINGCONTRACT } from "../../config/Confing";
import { WalletDetail } from "../../contexts/Context.js";

function StakingCard() {
  const walletDetail = useContext(WalletDetail);
  // const [ethchange, setEthhchnage] = useState(false);
  const [selecttoken, setSelecttoken] = useState(true);
  const [dispBalance, setDispBalance] = useState(0);
  const [inputAmount, setinputAmount] = useState(0);
  const [depositAmount, setdepositAmount] = useState(0);
  const [stakedAmountDisp, setstakedAmountDisp] = useState(0)

  const [modalstate, setModalstate] = useState(false);

  const handleTokenChange = (value) => {
    setSelecttoken(value);
  };

  useEffect(() => {
    if (walletDetail.balance) {
      let b = ethers.utils.formatEther(walletDetail.balance);
      setDispBalance(b);
    }
  }, [walletDetail.balance]);

  const handleDeposit = async () => {
    const stakingContractAddress = BICOSTAKINGCONTRACT;

    const signer = walletDetail.connect.getSigner();

    const stakingContractWrite = new ethers.Contract(
      stakingContractAddress,
      StakingAbi,
      signer
    );

    console.log(stakingContractWrite);

    const tx = await stakingContractWrite.stake(
      walletDetail.address,
      ethers.utils.parseEther(depositAmount)
    );
    
    const receipt = await tx.wait();
   
    console.log(receipt);
  }

  useEffect(() => {
    console.log(walletDetail);
  }, [walletDetail]);

  useEffect(() => {
    if (walletDetail.rewards) {
      let b = ethers.utils.formatEther(walletDetail.rewards);
      setstakedAmountDisp(b);
    }
  
  }, [walletDetail.rewards])

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
              ????{" "}
              <span className="underline underline-offset-4">
                How does it work?
              </span>
            </a>
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:my-6 lg:gap-6 lg:items-center mt-12 ">
            <div className="relative">
              <div className="flex justify-between px-2 pb-2 items-center">
                <p className="text-xs uppercase font-semibold">Amount</p>
                <p className="flex text-xs items-center secondary-color">
                  <img src={WalletIcon} className="h-4 pr-1" alt="" />
                  <span className="font-semibold">
                    {selecttoken ? dispBalance + "BIOC" : "-- BBPT"}
                  </span>
                </p>
              </div>
              <input
                type="number"
                className="bg-white border rounded-xl border-slate-400 py-3 w-full placeholder:text-lg"
                placeholder="0"
                onChange={(e) => setinputAmount(e.target.value)}
                value={inputAmount}
              />
              <button
                className="btn-tiny"
                onClick={() => {
                  setinputAmount(dispBalance);
                }}
              >
                Max
              </button>
            </div>
            <div className="lg:my-0 my-6">
              <p className="uppercase text-xs px-2 pb-2 font-semibold">
                Currently Staked {selecttoken ? "BICO" : "BBPT"}
              </p>
              <input
                type="number"
                className="input-bg py-3 w-full mt-1 placeholder:text-lg"
                placeholder="0"
                value={depositAmount}
                onChange={(e) => setdepositAmount(e.target.value)}
              />
            </div>
          </div>
          {walletDetail.address === "" ? (
            <div>
              <button className="btn-wallet py-4 w-full text-white mb-4">
                Switch To Ethereum
              </button>
            </div>
          ) : (
            <div className="lg:grid lg:grid-cols-2 lg:gap-6 ">
              <div className="lg:mb-0 mb-4">
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
                <button className="btn-wallet py-4 px-12 w-full text-white"
                  onClick={() => {
                    handleDeposit();
                  }}
                >
                  Confirm Deposit
                </button>
              </div>
              <UnlockModal
                modalstate={modalstate}
                setModalstate={setModalstate}
                selecttoken={selecttoken}
                inputAmount={inputAmount}
              />
            </div>
          )}
        </div>

        <div className="flex justify-between lg:mt-0 mt-4">
          <p>Earnings</p>
          <p className="text-sm secondary-color lg:block hidden">
            Your total accrued BICO tokens.
          </p>
        </div>
        <div className="lg:grid lg:grid-cols-2 my-6 gap-6 items-center">
          <div className="mb-4 lg:mb-0">
            <input
              type="number"
              className="input-bg py-3 w-full placeholder:text-lg md:mb-4 lg:mb-0"
              placeholder="0"
              value={stakedAmountDisp}
              disabled
            />
          </div>
          <div className="">
            <button className="btn-claim py-3 w-full text-white flex justify-center items-center gap-2">
              <img src={ClaimIcon} alt="Claim" className="" /> Claim Rewards
            </button>
          </div>
        </div>

        <div className="lg:my-16 md:my-12">
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
