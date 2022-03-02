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
    border: "2px solid #FFFFFF",
    borderRadius: "40px",
  },
};

// eslint-disable-next-line react/prop-types
function UnlockModal({ modalstate, setModalstate, selecttoken }) {
  const walletDetail = useContext(WalletDetail);
  const [pending, setpending] = useState(false);
  const [completed, setcompleted] = useState(false);
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
    // console.log(contract_write.listeners(), "Hello");
    const tx = await contract_write.approve(
      BICOSTAKINGCONTRACT,
      "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
    );
    setpending(true);
    const receipt = await tx.wait();
    setcompleted(true);
  };

  useEffect(() => {}, [walletDetail]);

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
            <img src={UnlockIcon} alt="" className="h-6" /> Unlock{" "}
            {selecttoken === true ? "BICO" : "BBPT"}
          </p>
          {/* <button onClick={closeModal}>X</button> */}
        </div>
        {completed === true ? (
          <div className="text-center">
            <p className="text-xs text-center py-8 third-color">
              You approved the unlock of{" "}
              <span className="primary-color">
                {" "}
                {selecttoken === true ? "BICO" : "BBPT"}
              </span>{" "}
              ,<br></br>
              the transaction has been submitted to the<br></br> blockchain. You
              must wait until the unlocking<br></br>transaction is confirmed to
              be able to deposit<br></br> the unlocked amount.
            </p>
            <button className="btn-wallet py-4 px-8">
              <a href="https://">View In Explorer</a>
            </button>
          </div>
        ) : pending === true ? (
          <div className="">
            <p className="text-sm text-center py-8 third-color">
              Approval pending to unlock{" "}
              {selecttoken === true ? "BICO" : "BBPT"} for your upcoming
              transaction
            </p>
            <div className="flex justify-center my-6">
              {/* <svg
              width="130"
              height="131"
              viewBox="0 0 130 131"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M62.2971 22.3021V0.5H67.7138V22.3021L65.0054 22.1667L62.2971 22.3021ZM23.9525 51.7038L2.91417 46.065L1.50583 51.2975L22.5279 56.9308C22.8908 55.1379 23.3783 53.4046 23.9525 51.7038ZM56.4254 23.0225L50.7975 2.01667L45.5596 3.41958L51.1983 24.4525C52.9046 23.8783 54.6379 23.3854 56.4254 23.0225ZM21.6721 65.5L21.8075 62.7971H0V68.2138H21.8075L21.6721 65.5ZM36.3675 33.0379L20.9517 17.6275L17.1221 21.4571L32.5379 36.8729C33.735 35.5133 35.0133 34.235 36.3675 33.0379ZM28.9087 41.5367L10.0587 30.6546L7.35042 35.3454L26.2221 46.2437C27.0346 44.6242 27.9121 43.0425 28.9087 41.5367ZM103.095 44.8246L121.864 33.9912L120.743 32.0412L101.925 42.9017L103.095 44.8246ZM107.163 55.62L128.142 49.9975L127.443 47.3812L106.486 52.9983L107.163 55.62ZM87.2462 28.3633L98.1067 9.55667L96.9313 8.87958L86.0871 27.6592L87.2462 28.3633ZM76.6567 23.7971L82.2738 2.82917L81.4071 2.59625L75.7846 23.575L76.6567 23.7971ZM96.2596 35.5404L111.616 20.1896L110.338 18.9112L94.9867 34.2567L96.2596 35.5404ZM45.7383 26.7275L34.8454 7.85583L30.16 10.5642L41.0421 29.4087C42.5371 28.4121 44.1188 27.5346 45.7383 26.7275ZM22.5279 74.0854L1.51125 79.7188L2.91958 84.9512L23.9579 79.3125C23.3837 77.6117 22.8908 75.8783 22.5279 74.0854ZM84.4675 104.18L95.355 123.036L99.6504 120.555L88.7738 101.716C87.3925 102.62 85.9462 103.427 84.4675 104.18ZM101.449 88.8892L120.282 99.7604L122.314 96.245L103.485 85.3737C102.857 86.5871 102.175 87.7517 101.449 88.8892ZM93.9738 97.6642L109.368 113.058L112.564 109.868L97.1642 94.4738C96.1512 95.595 95.0896 96.6567 93.9738 97.6642ZM106.367 78.4567L127.324 84.0737L128.256 80.5854L107.272 74.9629C107.006 76.1437 106.719 77.3138 106.367 78.4567ZM108.257 63.9292L108.339 65.5L108.257 67.0871H130V63.9292H108.257ZM73.58 107.977L79.2079 128.989L84.4458 127.586L78.8071 106.547C77.1008 107.122 75.3675 107.615 73.58 107.977ZM65.0054 108.833L62.2971 108.698V130.5H67.7138V108.698L65.0054 108.833ZM32.5487 94.1433L17.1275 109.559L20.9571 113.389L36.3783 97.9675C35.0242 96.7758 33.7404 95.4975 32.5487 94.1433ZM26.2383 84.7725L7.36125 95.6708L10.0696 100.362L28.9196 89.4796C27.9175 87.9737 27.04 86.3921 26.2383 84.7725ZM41.0475 101.597L30.16 120.452L34.8454 123.16L45.7492 104.278C44.1296 103.471 42.5479 102.593 41.0475 101.597ZM51.2092 106.553L45.565 127.602L50.8029 129.005L56.4362 107.983C54.6487 107.62 52.9154 107.127 51.2092 106.553Z"
                fill="#D85111"
              />
            </svg> */}
            </div>
          </div>
        ) : (
          <div>
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
          </div>
        )}
      </Modal>
    </div>
  );
}

export default UnlockModal;
