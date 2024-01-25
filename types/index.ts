type FileObject = {
  id: string
  name: string
  size: number
}

type DragFilesProps = {
  setFiles: React.Dispatch<React.SetStateAction<FileObject[]>>
}

type DisplayFilesProps = {
  files: FileObject[]
  setFiles: React.Dispatch<React.SetStateAction<FileObject[]>>
}
