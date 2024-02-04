"use client"

import { useMbWallet } from "@mintbase-js/react"
import Link from "next/link"
import WalletBalance from "./WalletBalance"
import { Button } from "./ui/button"

const Header = () => {
  const { disconnect } = useMbWallet()

  return (
    <header className="shadow border-b py-3">
      <div className="px-5 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold">DApp File Storage</h1>
        </Link>

        <div className="flex gap-3 items-center">
          <WalletBalance />
          <Button variant={"destructive"} onClick={() => disconnect()}>
            Disconnect
          </Button>
        </div>
      </div>
    </header>
  )
}
export default Header
