import React from "react";
import PublicRoute from "./routes/PublicRoute";
import WalletDetailProvider from "./contexts/Context.js";

function App() {
  return (
    <div>
      <WalletDetailProvider>
        <PublicRoute />
      </WalletDetailProvider>
    </div>
  );
}

export default App;
