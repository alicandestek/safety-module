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
function UnlockModal({ modalstate, setModalstate, selecttoken }) {
  const walletDetail = useContext(WalletDetail);
  const [pending, setpending] = useState(false);
  const [completed, setcompleted] = useState(false)
  //   console.log(modalstate);

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleApprove = async (value) => {
    const tokenContractAddress = BICOCONTRACTADDRESS;
    const stakingContractAddress = BICOSTAKINGCONTRACT;
    
    const signer = walletDetail.connect.getSigner();

    const tokenContract = new ethers.Contract(
      tokenContractAddress,
      StakingAbi,
      walletDetail.connect
    )

    const stakingContractWrite = new ethers.Contract(
      stakingContractAddress,
      StakingAbi,
      signer
    );

    let allowed = '';

    tokenContract.allowance(walletDetail.address, stakingContractAddress).then((res) =>{
      allowed = res;
    })

    let bal = new BigNumber(ethers.utils.parseEther(walletDetail.balance));

    if(allowed.isLessThan(bal)){
      
    }
    

    const tx = await stakingContractWrite
      .approve(
        tokenContractAddress,
        "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
      )
      setpending(true);
      const receipt = await tx.wait();
      setcompleted(true);

  };

  useEffect(() => {

  }, [])

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
            {walletDetail.balance} {selecttoken === true ? "BICO" : "BBPT"}
          </span>
        </p>

        <div className="text-center">
          <button
            className="btn-wallet px-8 py-4 text-sm my-2"
            onClick={() => {
              handleApprove();
            }}
          >
            Unlock Permanently
          </button>
          <button className="btn-wallet px-6 py-4 text-sm">
            Unlock One Time Only
          </button>
        </div>
        {
          pending && (<p>Pending</p>)
        }
        {
          completed && (<p>Completed</p>)
        }
      </Modal>
    </div>
  );
}

export default UnlockModal;
