import Link from "next/link";
import { ConnectWallet } from "./ConnectWallet";
import ShowBalance from "./ShowBalance";

const Header = () => {
  const userAccountId = "subin123.testnet";
  return (
    <header className="flex justify-between items-center p-5">
      <Link href="/" className="text-2xl font-bold">
        DApp File Storage
      </Link>
      <ShowBalance accountId={userAccountId} />
      <ConnectWallet />
    </header>
  );
};
export default Header;
