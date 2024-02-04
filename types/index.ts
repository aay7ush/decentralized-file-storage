type FileObject = {
  id: string
  name: string
  size: number
  hash: string
}

type DragFilesProps = {
  setFiles: React.Dispatch<React.SetStateAction<FileObject[]>>
}

type DisplayFilesProps = {
  files: FileObject[]
  setFiles: React.Dispatch<React.SetStateAction<FileObject[]>>
}

type SocialProps = {
  name: string
  icon: JSX.Element
  url: string
}
