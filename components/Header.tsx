"use client"

import { useMbWallet } from "@mintbase-js/react"
import Link from "next/link"
import { Button } from "./ui/button"

const Header = () => {
  const { disconnect } = useMbWallet()

  return (
    <header className="flex justify-between items-center p-5">
      <Link href="/" className="text-2xl font-bold">
        DApp File Storage
      </Link>
      <div className="flex gap-3">
        {/* <WalletBalance /> */}
        <Button onClick={() => disconnect()}>Disconnect</Button>
      </div>
    </header>
  )
}
export default Header
