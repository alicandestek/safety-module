import React from "react";
import PublicRoute from "./routes/PublicRoute";
import { WalletDetail } from "./contexts/Context.js";
import { useState } from "react";

function App() {
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState("");
  const [connect, setConnect] = useState("");

  return (
    <div>
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
        <PublicRoute />
      </WalletDetail.Provider>
    </div>
  );
}

export default App;
