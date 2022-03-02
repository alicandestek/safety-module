import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3";
import Web3Modal from "web3modal";
import { ethers } from "ethers";

// In my BRAVE the modal is not showing up
//  I think this is the issue
// https://github.com/Web3Modal/web3modal/issues/173
// Modal Shows up in Private Window and Chrome

const getWeb3Modal = () => {
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: "27e484dcd9e3efcfd25a83a78777cdf1",
      },
      display: {
        description: "Scan with a wallet to connect",
      },
    },
  };

  const web3Modal = new Web3Modal({
    // network: "mainnet", // optional
    cacheProvider: false, // optional
    providerOptions, // required
    theme: "dark",
    disableInjectedProvider: false, // Forcing it to false becuase sometimes prevents the modal to show up
  });

  return web3Modal;
};

// Will have to write some logic to know that if the wallet is connected or not
const ConnectWeb3 = async () => {
  const web3Modal = await getWeb3Modal();
  var instance;
  const connection = await web3Modal.connect();
  const provider = new ethers.providers.Web3Provider(connection);
  // console.log(provider);
  instance = new Web3(provider);

  return provider;
};

export default ConnectWeb3;
