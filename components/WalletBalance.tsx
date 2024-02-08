import useStore from "@/context/store"
import nearConfig from "@/lib/nearConfig"
import { useMbWallet } from "@mintbase-js/react"
import { Account, ConnectConfig, Near, connect, utils } from "near-api-js"
import { AccountBalance } from "near-api-js/lib/account"
import { useEffect } from "react"
import { buttonVariants } from "./ui/button"

export const fetchBalance = async (
  activeAccountId: string | null,
  setBalance: React.Dispatch<React.SetStateAction<AccountBalance | null>>
) => {
  try {
    if (activeAccountId) {
      const near: Near = await connect(nearConfig as ConnectConfig)
      const account: Account = await near.account(activeAccountId)
      const balance: AccountBalance = await account.getAccountBalance()
      setBalance(balance)
    }
  } catch (error) {
    console.error("Error fetching balance:", error)
  }
}

const WalletBalance = () => {
  const { activeAccountId } = useMbWallet()
  const { balance, setBalance } = useStore()

  useEffect(() => {
    fetchBalance(activeAccountId, setBalance)
  }, [activeAccountId, setBalance])

  return (
    <div>
      {balance && (
        <p
          className={buttonVariants({
            variant: "default",
            size: "default",
          })}
        >
          {Number(utils.format.formatNearAmount(balance.available)).toFixed(2)}{" "}
          NEAR
        </p>
      )}
    </div>
  )
}

export default WalletBalance
