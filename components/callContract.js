const { connect, Account, keyStores, KeyPair } = require("near-api-js")

const nearConfig = {
  networkId: "testnet",
  keyStore: new keyStores.BrowserLocalStorageKeyStore(),
  nodeUrl: "https://rpc.testnet.near.org",
  walletUrl: "https://wallet.testnet.near.org",
  helperUrl: "https://helper.testnet.near.org",
  explorerUrl: "https://explorer.testnet.near.org",
}

async function deductNearEquivalentToOneDollar(
  activeAccountId,
  recipientId,
  secretKey
) {
  const near = await connect(nearConfig)
  const account = new Account(near.connection, activeAccountId)
  const oneDollarInYoctoNEAR = "100000000000000000000000"

  const keyPair = KeyPair.fromString(secretKey)
  await nearConfig.keyStore.setKey(
    nearConfig.networkId,
    activeAccountId,
    keyPair
  )

  await account.sendMoney(recipientId, oneDollarInYoctoNEAR)
  console.log("Money sent successfully")
}

module.exports = deductNearEquivalentToOneDollar
