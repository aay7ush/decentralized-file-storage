"use client"

import { useMbWallet } from "@mintbase-js/react"
import { Button } from "./ui/button"

export function ConnectWallet() {
  const { connect, disconnect, isConnected } = useMbWallet()

  return (
    <Button
      onClick={() => {
        if (isConnected) {
          disconnect()
        } else {
          connect()
        }
      }}
    >
      {isConnected ? "Disconnect" : "Connect"}
    </Button>
  )
}
