"use client"
import { useMbWallet } from "@mintbase-js/react"
import { Button } from "./ui/button"

export const ConnectWallet = () => {
  const { connect } = useMbWallet()

  return (
    <div className="fixed top-0 z-10 bg-black gradient text-white w-full min-h-screen grid place-content-center text-center space-y-5">
      <h1 className="text-5xl font-bold">Decentralized File Storage</h1>
      <p className="max-w-lg mx-auto">
        Simple dapp file storage app where you can store, share and download
        files
      </p>
      <Button
        variant={"secondary"}
        className="mx-auto"
        onClick={() => connect()}
      >
        Connect To NEAR
      </Button>
    </div>
  )
}
