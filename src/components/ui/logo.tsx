import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image
        src={logo}
        alt="logo"
        width={40}
        height={40}
        className="rounded-md"
      />
    </Link>
  );
};

export default Logo;
