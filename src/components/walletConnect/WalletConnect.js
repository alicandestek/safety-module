import React, { useState } from "react";
import connectWeb3 from "../../utils/WallectConnectModal";
import BiconomyIcon from "../../assets/images/bico.svg";

function WalletConnect() {
  const [walletaddr, setWalletAddress] = useState();
  const [iswalletconnected, setIsWalletConnected] = useState();
  const [walletchain, setWalletChain] = useState();

  console.log(iswalletconnected, walletaddr);

  const HandleConnect = async () => {
    console.log("Made it to HandleConnect");
    const web3 = await connectWeb3();

    const accounts = await web3.eth.getAccounts();
    // setaddress(accounts[0]);
    // console.log("accounts", accounts);
    setWalletAddress(accounts[0]);
    localStorage.setItem("wallet", accounts[0]);
    setIsWalletConnected(true);
    web3.eth.getBalance();
    web3.eth.getChainId().then((id) => {
      // setChain(id);
      // alert(id)
      setWalletChain("0x" + id.toString(16));
    });
  };

  return (
    <div>
      {walletaddr && iswalletconnected !== undefined ? (
        <div className="flex">
          <button className="btn-balance px-4 py-1 text-sm text-white flex items-center">
            <img src={BiconomyIcon} alt="" className="mx-auto pr-1" />
            <p className="pr-2">1002 BICO</p>
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
