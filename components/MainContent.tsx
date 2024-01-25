"use client"

import { useState } from "react"
import DisplayFiles from "./DisplayFiles"
import DragFiles from "./DragFiles"

const MainContent = () => {
  const [files, setFiles] = useState<FileObject[]>([])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-7 p-5">
      <DragFiles setFiles={setFiles} />
      <DisplayFiles files={files} setFiles={setFiles} />
    </div>
  )
}
export default MainContent
