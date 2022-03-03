/* eslint-disable react/prop-types */
import React, { createContext, useState } from "react";

export const WalletDetail = createContext();

export default function WalletDetailProvider(props) {
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState("");
  const [connect, setConnect] = useState("");

  return (
    <>
      <WalletDetail.Provider
        value={{
          address,
          setAddress,
          balance,
          setBalance,
          connect,
          setConnect,
        }}
      >
        {props.children}
      </WalletDetail.Provider>
    </>
  );
}
