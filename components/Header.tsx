import Link from "next/link"
import { ConnectWallet } from "./ConnectWallet"

const Header = () => {
  return (
    <header className="flex justify-between items-center p-5">
      <Link href="/" className="text-2xl font-bold">
        DApp File Storage
      </Link>
      <ConnectWallet />
    </header>
  )
}
export default Header
