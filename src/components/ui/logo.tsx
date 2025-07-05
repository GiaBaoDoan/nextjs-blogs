import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100"
    >
      Gia Bảo<span className="text-indigo-500">.Dev</span>
    </Link>
  );
};

export default Logo;
