type FileObject = {
  id: string
  name: string
  size: number
}

type DragFilesProps = {
  setFiles: React.Dispatch<React.SetStateAction<FileObject[]>>
}
