const nearAPI = require('near-api-js'); 
const { connect, utils } = nearAPI; 
const { nearConfig } = require('./config');

async function checkBalance(accountId) { 
  
  const near = await connect(nearConfig);
  const account = await near.account(accountId);
  const balance = await account.getAccountBalance(); 

  console.log(`>> Total balance: ${utils.format.formatNearAmount(balance.total)}`); 
  console.log(`>> Available balance: ${utils.format.formatNearAmount(balance.available)}`); 
} 

module.exports = checkBalance;



