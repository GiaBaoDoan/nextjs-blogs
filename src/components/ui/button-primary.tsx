import { cn } from "@/lib/utils";
import Link from "next/link";

const ButtonPrimary = ({
  link,
  children,
  className,
}: {
  link?: string;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      href={link || ""}
      className={cn(
        "inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900",
        className
      )}
    >
      {children}
    </Link>
  );
};

export default ButtonPrimary;
