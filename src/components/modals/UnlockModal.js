import React, { useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import UnlockIcon from "../../assets/images/unlock.svg";
import { WalletDetail } from "../../contexts/Context.js";
import StakingAbi from "../../contract/StakingABI.json";
import { ethers } from "ethers";
import { BICOSTAKINGCONTRACT } from "../../config/Confing";

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
    const tokenContractAddress = BICOSTAKINGCONTRACT;
    const signer = walletDetail.connect.getSigner();
    const contract_write = new ethers.Contract(
      tokenContractAddress,
      StakingAbi,
      signer
    );
    console.log(contract_write.listeners(), "Hello");
    const tx = await contract_write
      .approve(
        BICOSTAKINGCONTRACT,
        "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
      )
      setpending(true);
      const receipt = await tx.wait();
      setcompleted(true);

  };

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
