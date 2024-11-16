import React, { useContext } from "react";

import lendContext from "../context/lendContext";

const ConnectButton = () => {
  const { metamaskDetails, connectWallet } = useContext(lendContext);

  return (
    <div>
      {!metamaskDetails.currentAccount ? (
        <button
          className=" button_bg rounded-full bg-transparent py-3 px-6 sm:px-8"
          onClick={() => connectWallet()}
        >
          Connect wallet
        </button>
      ) : (
        <button className="button_border rounded-full px-6 sm:px-8 lg:px-12">
          <p className="uppercase">{metamaskDetails.networkName} - </p>
          {` ${metamaskDetails.currentAccount
            .toString()
            .substring(0, 4)}...${metamaskDetails.currentAccount
            .toString()
            .substring(38, 42)}`}
        </button>
      )}
    </div>
  );
};

export default ConnectButton;
