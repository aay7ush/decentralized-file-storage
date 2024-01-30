const { connect, Contract, KeyPair, keyStores, WalletConnection, utils } = require('near-api-js');

const nearConfig = {
    networkId: "testnet",
    keyStore: new keyStores.InMemoryKeyStore(), // This should be configured correctly
    nodeUrl: "https://rpc.testnet.near.org",
    walletUrl: "https://wallet.testnet.near.org",
    helperUrl: "https://helper.testnet.near.org",
};

async function deductNearEquivalentToOneDollar(walletConnection, recipientId) {
    const currentNearToUsdExchangeRate = 2.88; // Corrected the comment here
    const oneDollarInNear = utils.format.parseNearAmount((1 / currentNearToUsdExchangeRate).toString());
    const gas = "30000000000000"; // 30 Tgas
    const contractName = "example-contract.testnet"; // Replace with your actual contract name

    // Ensure that the `walletConnection` is an instance of WalletConnection
    if (!(walletConnection instanceof WalletConnection)) {
        throw new Error("The walletConnection parameter must be an instance of WalletConnection.");
    }

    // Use `walletConnection.getAccountId()` to retrieve the sender's account ID
    const contract = new Contract(walletConnection.account(), contractName, {
        viewMethods: [],
        changeMethods: ["deduct_near"],
        sender: walletConnection.getAccountId(),
    });

    // Call the 'deduct_near' change method on the contract
    await contract.deduct_near({ recipient_id: recipientId, amount: oneDollarInNear }, gas);
}

// Export the function
module.exports = deductNearEquivalentToOneDollar;

