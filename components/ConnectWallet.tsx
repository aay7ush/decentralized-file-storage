"use client"

import { useMbWallet } from "@mintbase-js/react"
import { Button } from "./ui/button"

export const ConnectWallet = () => {
  const { connect } = useMbWallet()

  return (
    <article className="fixed top-0 z-10 bg-black gradient text-white w-full min-h-screen grid place-content-center text-center space-y-5">
      <h1 className="text-5xl font-bold">Decentralized File Storage App</h1>
      <p className="max-w-xl mx-auto">
        This application leverages the power of blockchain technology,
        specifically the NEAR blockchain, to provide a secure and decentralized
        platform for storing, downloading, uploading, and sharing files.
      </p>
      <Button
        variant={"secondary"}
        className="mx-auto font-medium"
        onClick={() => connect()}
      >
        Connect To NEAR
      </Button>
    </article>
  )
}
