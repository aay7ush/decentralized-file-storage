"use client"
import { useMbWallet } from "@mintbase-js/react"
import { Button } from "./ui/button"

export const ConnectWallet = () => {
  const { isConnected, selector, connect } = useMbWallet()

  const handleSignout = async () => {
    const wallet = await selector.wallet()
    return wallet.signOut()
  }

  const handleSignIn = async () => {
    return connect()
  }

  if (!isConnected) {
    return <Button onClick={handleSignIn}>Connect To NEAR</Button>
  }

  return (
    <div>
      {/* <p>You are connected as {activeAccountId}</p> */}
      <div>
        <Button onClick={handleSignout}> Disconnect </Button>
      </div>
    </div>
  )
}
