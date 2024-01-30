const nearAPI = require('near-api-js'); 
// import { includeBytes, NearPromise, near } from "near-sdk-js";
const { connect, keyStores, utils } = nearAPI; 

async function checkBalance(accountId) { 
  
  const config = { 
    networkId: 'testnet', 
    keyStore: new keyStores.InMemoryKeyStore(), 
    nodeUrl: 'https://rpc.testnet.near.org',
    walletUrl: 'https://wallet.testnet.near.org',  
    helperUrl: 'https://helper.testnet.near.org',  
    explorerUrl: 'https://explorer.testnet.near.org',
  }; 

  
  const near = await connect(config);
  const account = await near.account(accountId);
  const balance = await account.getAccountBalance(); 

  console.log(`Total balance: ${utils.format.formatNearAmount(balance.total)}`); 
  console.log(`Available balance: ${utils.format.formatNearAmount(balance.available)}`); 
} 

module.exports = checkBalance;



