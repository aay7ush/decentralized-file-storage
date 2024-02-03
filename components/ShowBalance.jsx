"use client";
const nearAPI = require("near-api-js");
import React, { useState, useEffect } from "react";
import { connect, utils } from "near-api-js";

const nearConfig = {
  networkId: "testnet",
  walletUrl: "https://wallet.testnet.near.org",
  helperUrl: "https://helper.testnet.near.org",
  nodeUrl: "https://rpc.testnet.near.org",
  keyStore: new nearAPI.keyStores.BrowserLocalStorageKeyStore(),
};

const ShowBalance = ({ accountId }) => {
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const near = await connect(nearConfig);
        const account = await near.account(accountId);
        const balance = await account.getAccountBalance();

        setBalance(balance);
      } catch (error) {
        console.error("Error fetching balance:", error);
      }
    };

    fetchBalance();
  }, [accountId]);

  return (
    <div>
      {balance && (
        <>
          <p>Total balance: {utils.format.formatNearAmount(balance.total)}</p>
          <p>
            Available balance:{" "}
            {utils.format.formatNearAmount(balance.available)}
          </p>
        </>
      )}
    </div>
  );
};

export default ShowBalance;
