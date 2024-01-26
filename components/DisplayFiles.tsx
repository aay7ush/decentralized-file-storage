"use client"

import { Download, Share2, X } from "lucide-react"
import Image from "next/image"

const DisplayFiles: React.FC<DisplayFilesProps> = ({ files, setFiles }) => {
  const removeFile = (name: string) => {
    setFiles((prev) => prev.filter((file) => file.name !== name))
  }

  return (
    <section className="space-y-5 overflow-y-scroll max-h-[420px] overflow-hidden no-scrollbar">
      {files.map((file) => (
        <div className="flex items-center gap-3 shadow-sm p-2" key={file.id}>
          <Image src="/file-icon.svg" alt="file icon" width={50} height={50} />

          <div className="w-full">
            <p className="text-lg font-bold">{file.name}</p>
            <p className="text-gray-500 text-sm">
              {(file.size / 1024).toFixed(2)} KB
            </p>
          </div>

          <div className="flex gap-3">
            <button className="border-2 p-1 border-green-500 text-green-500 rounded-full transition duration-200 hover:bg-green-500 hover:text-white">
              <Share2 size={18} />
            </button>
            <button className="border-2 p-1 border-blue-500 text-blue-500 rounded-full transition duration-200 hover:bg-blue-500 hover:text-white">
              <Download size={18} />
            </button>
            <button
              className="border-2 p-1 border-red-500 text-red-500 rounded-full transition duration-200 hover:bg-red-500 hover:text-white"
              onClick={() => removeFile(file.name)}
            >
              <X size={18} />
            </button>
          </div>
        </div>
      ))}
    </section>
  )
}
export default DisplayFiles
