"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

const ButtonSecondary = ({
  link,
  className,
  children,
}: {
  link?: string;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      href={link || ""}
      className={cn(
        className,
        "inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
      )}
    >
      {children}
    </Link>
  );
};

export default ButtonSecondary;
