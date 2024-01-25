"use client"

import { MintbaseWalletContextProvider } from "@mintbase-js/react"
import "@near-wallet-selector/modal-ui/styles.css"

export function WalletProvider({ children }: { children: React.ReactNode }) {
  return (
    <MintbaseWalletContextProvider
      contractAddress={"testnet"}
      network={"testnet"}
      callbackUrl={"http://localhost:3000/"}
    >
      {children}
    </MintbaseWalletContextProvider>
  )
}
