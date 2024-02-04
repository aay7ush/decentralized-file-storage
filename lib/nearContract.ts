import nearConfig from "@/lib/nearConfig"
import { Account, ConnectConfig, KeyPair, connect, utils } from "near-api-js"

export default async function deductNearEquivalentToOneDollar(
  activeAccountId: string,
  recipientId: string
) {
  const near = await connect(nearConfig as ConnectConfig)
  const account = new Account(near.connection, activeAccountId)
  const oneDollarInYoctoNEAR = "100000000000000000000000"

  const newKeyPair = KeyPair.fromRandom("ed25519")

  await account.addKey(
    newKeyPair.publicKey,
    null,
    null,
    utils.format.parseNearAmount("1")
  )

  await account.sendMoney(recipientId, oneDollarInYoctoNEAR)
  console.log("Money sent successfully")
}
