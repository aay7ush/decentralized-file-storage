import { nanoid } from "nanoid"
import Image from "next/image"

const DragFiles: React.FC<DragFilesProps> = ({ setFiles }) => {
  const onFileDrop = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles: FileObject[] = Array.from(
      event.target.files as FileList
    ).map((file) => ({
      id: nanoid(),
      name: file.name,
      size: file.size,
    }))
    setFiles((prev) => [...prev, ...newFiles])
  }

  return (
    <section className="relative bg-[#effaff] border-dashed border-blue-100 border-[7px]  rounded-xl grid place-content-center">
      <Image
        src="/files-illustration.svg"
        alt="files illustration"
        width={350}
        height={350}
      />

      <div className="font-medium text-gray-500 text-3xl text-center pb-10">
        <h2>Drop your files here.</h2>
        <p>
          or <span className="text-blue-600 font-bold">Browse</span>
        </p>
      </div>

      <input
        type="file"
        className="w-full h-full absolute left-0 top-0 opacity-0 cursor-pointer"
        onChange={onFileDrop}
        multiple
      />
    </section>
  )
}

export default DragFiles
