const { Contract, connect, utils } = require('near-api-js');
const { nearConfig } = require('./config');
const { Account } = require("@near-js/accounts");

async function deductNearEquivalentToOneDollar(activeAccountId, recipientId) {
    const amount = utils.format.parseNearAmount("0.25");
    const gas = "30000000000000"; // 30 Tgas
    const contractName = "dwallet.testnet";
    const near = await connect(nearConfig);
    
    const account = new Account(near.connection, activeAccountId);

    const contract = new Contract(account, contractName, {
        viewMethods: [],
        changeMethods: ["transfer"]
    });
    const totalAttachedNEAR = utils.format.parseNearAmount("0.26");; // Convert 0.26 NEAR to yoctoNEAR
    
    try {
        console.log('deduct_near contract called: recipientId:', recipientId);
        await contract.transfer(
            { recipient_id: recipientId, amount: amount },
            gas,
            totalAttachedNEAR // attached deposit in yoctoNEAR
        );
        
    } catch (error) {
        console.error('Error during balance check or deduction:', error);
    }
}

module.exports = deductNearEquivalentToOneDollar;



