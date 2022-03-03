import React, { useContext, useState, useEffect } from "react";
import connectWeb3 from "../../utils/WallectConnectModal";
import BiconomyIcon from "../../assets/images/bico.svg";
import { ethers } from "ethers";
import { BICOCONTRACTADDRESS } from "../../config/Confing";
import StakingAbi from "../../contract/StakingABI.json";
import { WalletDetail } from "../../contexts/Context.js";

function WalletConnect() {
  const walletDetail = useContext(WalletDetail);
  const [walletaddr, setWalletAddress] = useState();
  const [iswalletconnected, setIsWalletConnected] = useState(false);
  const [balance, setBalance] = useState(0);

  const HandleConnect = async () => {
    const connect = await connectWeb3();
    // console.log(connect);
    const account = await connect.listAccounts();
    setWalletAddress(account[0]);
    walletDetail.setAddress(account[0]);
    walletDetail.setConnect(connect);
    getAddress(account[0], connect);
    // console.log(account[0]);
    // console.log(walletDetail);
  };

  async function getAddress(address, provider) {
    const tokenContractAddress = BICOCONTRACTADDRESS;
    const contract = new ethers.Contract(
      tokenContractAddress,
      StakingAbi,
      provider
    );
    // console.log(contract.balanceOf);
    const accountBalance = await contract.balanceOf(address);
    // console.log(accountBalance);
    setBalance(ethers.utils.formatEther(accountBalance));
    console.log(ethers.utils.formatEther(accountBalance));
    walletDetail.setBalance(accountBalance);
    // walletDetail.setBalance(ethers.utils.formatEther(accountBalance));
  }

  useEffect(() => {
    // console.log(walletDetail);
  }, [walletDetail]);

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
