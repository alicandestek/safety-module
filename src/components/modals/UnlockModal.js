import React, { useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import UnlockIcon from "../../assets/images/unlock.svg";
import { WalletDetail } from "../../contexts/Context.js";
import StakingAbi from "../../contract/StakingABI.json";
import { ethers } from "ethers";
import { BICOSTAKINGCONTRACT, BICOCONTRACTADDRESS } from "../../config/Confing";
import { BigNumber } from "ethers";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "400px",
    height: "400px",
    // background: "#FFFFFF",
    border: "2px solid #FFFFFF",
    borderRadius: "40px",
  },
};

// eslint-disable-next-line react/prop-types
function UnlockModal({ modalstate, setModalstate, selecttoken, inputAmount }) {
  const walletDetail = useContext(WalletDetail);
  const [pending, setpending] = useState(false);
  const [completed, setcompleted] = useState(false);
  const [dispBalance, setDispBalance] = useState(0);

  useEffect(() => {
    if(walletDetail.balance){
      let b = ethers.utils.formatEther(walletDetail.balance);
      setDispBalance(b);
    }
  }, [walletDetail.balance])
  //   console.log(modalstate);

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleApproveInf = async (value) => {
    const tokenContractAddress = BICOCONTRACTADDRESS;
    const stakingContractAddress = BICOSTAKINGCONTRACT;

    const signer = walletDetail.connect.getSigner();

    const tokenContract = new ethers.Contract(
      tokenContractAddress,
      StakingAbi,
      walletDetail.connect
    );

    const tokenContractWrite = new ethers.Contract(
      tokenContractAddress,
      StakingAbi,
      signer
    );

    const tx = await tokenContractWrite.approve(
      stakingContractAddress,
      "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
    );
    setpending(true);
    const receipt = await tx.wait();
    setcompleted(true);

  };

  const handleApproveOneTime = async () => {
    const tokenContractAddress = BICOCONTRACTADDRESS;
    const stakingContractAddress = BICOSTAKINGCONTRACT;

    const signer = walletDetail.connect.getSigner();

    const tokenContract = new ethers.Contract(
      tokenContractAddress,
      StakingAbi,
      walletDetail.connect
    );

    const tokenContractWrite = new ethers.Contract(
      tokenContractAddress,
      StakingAbi,
      signer
    );
    const tx = await tokenContractWrite.approve(
      stakingContractAddress,
      ethers.utils.parseEther(inputAmount)
    );
    setpending(true);
    const receipt = await tx.wait();
    setcompleted(true);
  }

  const checkAllowance = async () => {
    const tokenContractAddress = BICOCONTRACTADDRESS;
      const stakingContractAddress = BICOSTAKINGCONTRACT;

      const signer = walletDetail.connect.getSigner();

      const tokenContract = new ethers.Contract(
        tokenContractAddress,
        StakingAbi,
        walletDetail.connect
      );

      

      console.log(tokenContract);

      let allowed = await tokenContract
        .allowance(walletDetail.address, stakingContractAddress)

      console.log(allowed);
      // If allowed is greater than input than no need to ask for approval
      let req = ethers.utils.parseEther(inputAmount.toString());
      if (allowed.lte(req)) {
        console.log("not enough");
        // setDispBalance(ethers.utils.formatEther(req.sub(allowed)));
        
      }else {
        console.log("enough");
        setcompleted(true);

      }

  }

  useEffect(() => {
    checkAllowance();
  }, [inputAmount])
  

  useEffect(() => {
    if (walletDetail.connect) {
      
        checkAllowance();
      
      //   console.log(inputAmount, typeof inputAmount);

      //   if(allowed){
      //     allowed = BigNumber.from(allowed.toString());
      //   }

      
      // let req = ethers.utils.parseEther(inputAmount.toString());

      // if (allowed.isLessThan(req)) {
      //   console.log("not enough");
      // }else {
      //   console.log("enough");
      // }
    }
  }, [walletDetail.connect]);

  useEffect(() => {
    console.log(walletDetail);
  }, [walletDetail]);

  return (
    <div>
      <Modal
        isOpen={modalstate}
        onRequestClose={() => {
          setModalstate(false);
        }}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <div>
          <p className="font-semibold text-xl flex justify-center gap-2 py-4">
            <img src={UnlockIcon} alt="" className="h-6" /> Unlock BBPT
          </p>
          {/* <button onClick={closeModal}>X</button> */}
        </div>

        <p className="text-sm text-center py-10 third-color">
          Please grant permission to our<br></br> smart contract to move{" "}
          <span className="primary-color">
            {inputAmount} {selecttoken === true ? "BICO" : "BBPT"}
          </span>
        </p>

        <div className="text-center">
          <button
            className="btn-wallet px-8 py-4 text-sm my-2"
            onClick={() => {
              handleApproveInf();
            }}
          >
            Unlock Permanently
          </button>
          <button className="btn-wallet px-6 py-4 text-sm"
            onClick={() => {
              handleApproveOneTime();
            }}
          >
            Unlock One Time Only
          </button>
        </div>
        {pending && <p>Pending</p>}
        {completed && <p>Completed</p>}
      </Modal>
    </div>
  );
}

export default UnlockModal;
