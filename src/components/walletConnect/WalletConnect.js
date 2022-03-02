import React, { useState } from "react";
import connectWeb3 from "../../utils/WallectConnectModal";
import BiconomyIcon from "../../assets/images/bico.svg";
import { ethers } from "ethers";
import { BICOCONTRACTADDRESS } from "../../config/Confing";
import StakingAbi from "../../contract/StakingABI.json";

function WalletConnect() {
  const [walletaddr, setWalletAddress] = useState();
  const [iswalletconnected, setIsWalletConnected] = useState(false);
  const [balance, setBalance] = useState(0);

  const HandleConnect = async () => {
    const connect = await connectWeb3();
    // console.log(connect);
    const account = await connect.listAccounts();
    setWalletAddress(account[0]);
    getAddress(account[0], connect);
  };

  async function getAddress(address, provider) {
    const tokenContractAddress = BICOCONTRACTADDRESS;
    const contract = new ethers.Contract(
      tokenContractAddress,
      StakingAbi,
      provider
    );

    const accountBalance = (await contract.balanceOf(address)).toString();
    setBalance(ethers.utils.formatEther(accountBalance));
  }

  return (
    <div className="">
      {walletaddr && iswalletconnected !== undefined ? (
        <div className="flex">
          <button className="btn-balance px-4 py-1 text-sm text-white flex items-center">
            <img src={BiconomyIcon} alt="" className="mx-auto pr-1" />
            <p className="pr-2">{balance} BICO</p>
          </button>
          <button className="btn-wallet px-4 py-1 text-sm text-white">
            {walletaddr.slice(0, 5)}...{walletaddr.slice(-5)}
          </button>
        </div>
      ) : (
        <button
          className="btn-wallet px-4 py-1 text-sm text-white"
          onClick={() => HandleConnect()}
        >
          Connect
        </button>
      )}
    </div>
  );
}

export default WalletConnect;
