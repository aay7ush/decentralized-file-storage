"use client"

import { useMbWallet } from "@mintbase-js/react"
import { useState } from "react"
import { ConnectWallet } from "./ConnectWallet"
import DisplayFiles from "./DisplayFiles"
import DragFiles from "./DragFiles"

const MainContent = () => {
  const [files, setFiles] = useState<FileObject[]>([])
  const { isConnected } = useMbWallet()

  return (
    <>
      {isConnected ? (
        <article className="grid grid-cols-1 md:grid-cols-2 gap-7 p-5 basis-full">
          <DragFiles setFiles={setFiles} />
          <DisplayFiles files={files} setFiles={setFiles} />
        </article>
      ) : (
        <ConnectWallet />
      )}
    </>
  )
}
export default MainContent
