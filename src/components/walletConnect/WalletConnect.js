import React, { useState } from "react";
import connectWeb3 from "../../utils/WallectConnectModal";

function WalletConnect() {
  const HandleConnect = async () => {
    console.log("Made it to HandleConnect");
    const web3 = await connectWeb3();
    const [walletaddr, setWalletAddress] = useState();
    const [iswalletconnected, setIsWalletConnected] = useState();
    const [walletchain, setWalletChain] = useState();

    const accounts = await web3.eth.getAccounts();
    // setaddress(accounts[0]);
    // console.log("accounts", accounts);
    setWalletAddress(accounts[0]);
    setIsWalletConnected(true);
    web3.eth.getChainId().then((id) => {
      // setChain(id);
      // alert(id)
      setWalletChain("0x" + id.toString(16), dispatch);
    });
  };
  return (
    <div>
      <button
        className="btn-wallet px-4 py-1 text-sm text-white"
        onClick={() => HandleConnect()}
      >
        Connect
      </button>
    </div>
  );
}

export default WalletConnect;
