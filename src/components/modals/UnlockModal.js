import React, { useContext } from "react";
import Modal from "react-modal";
import UnlockIcon from "../../assets/images/unlock.svg";
import { WalletDetail } from "../../contexts/Context.js";

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
function UnlockModal({ modalstate, setModalstate }) {
  const walletDetail = useContext(WalletDetail);
  //   console.log(modalstate);

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Modal
        isOpen={modalstate}
        onRequestClose={() => {
          setModalstate(false);
        }}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <p className="font-semibold text-xl flex justify-center gap-2 py-4">
            <img src={UnlockIcon} alt="" className="h-6" /> Unlock BBPT
          </p>
          {/* <button onClick={closeModal}>X</button> */}
        </div>

        <p className="text-sm text-center py-10 third-color">
          Please grant permission to our<br></br> smart contract to move{" "}
          <span className="primary-color">{walletDetail.address} BBPT</span>
        </p>

        <div className="text-center">
          <button className="btn-wallet px-8 py-4 text-sm my-2">
            Unlock Permanently
          </button>
          <button className="btn-wallet px-6 py-4 text-sm">
            Unlock One Time Only
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default UnlockModal;
