const { keyStores } = require("near-api-js")

import { useMbWallet } from "@mintbase-js/react"
import { connect, utils } from "near-api-js"
import { useEffect, useState } from "react"
import { buttonVariants } from "./ui/button"

const nearConfig = {
  networkId: "testnet",
  keyStore: new keyStores.BrowserLocalStorageKeyStore(),
  nodeUrl: "https://rpc.testnet.near.org",
  walletUrl: "https://wallet.testnet.near.org",
  helperUrl: "https://helper.testnet.near.org",
  explorerUrl: "https://explorer.testnet.near.org",
}

const WalletBalance = () => {
  const [balance, setBalance] = useState(null)
  const { activeAccountId } = useMbWallet()

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const near = await connect(nearConfig)
        const account = await near.account(activeAccountId)
        const balance = await account.getAccountBalance()

        setBalance(balance)
      } catch (error) {
        console.error("Error fetching balance:", error)
      }
    }

    fetchBalance()
  }, [activeAccountId])

  return (
    <div>
      {balance && (
        <p
          className={buttonVariants({
            variant: "default",
            size: "default",
          })}
        >
          Bal:{" "}
          {Number(utils.format.formatNearAmount(balance.available)).toFixed(2)}
        </p>
      )}
    </div>
  )
}

export default WalletBalance
