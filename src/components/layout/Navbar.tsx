"use client";

import Logo from "@/components/ui/logo";
import HamburgerMenu from "@/components/layout/HamburgerMenu ";
import AdminNavLinks from "@/components/layout/AdminNavLinks";
import ClientNavLinks from "@/components/layout/ClientNavLinks";
import AccountTrigger from "@/components/auth/AccountTrigger";

import { cn } from "@/lib/utils";
import { useHeaderHidden } from "@/hooks/useHeader";
import { usePathname } from "next/navigation";
import { ADMIN_PREFIX } from "@/constants/path";

export default function Navbar() {
  const scrolled = useHeaderHidden();
  const pathname = usePathname();

  const isAdminPath = pathname?.startsWith(ADMIN_PREFIX);

  return (
    <header
      className={cn(
        "sticky flex bg-white justify-between inset-x-0 top-0 shadow z-50 transition-all duration-300 backdrop-blur border-b",
        scrolled ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <div className="flex items-center w-full justify-between container">
        <Logo />
        {isAdminPath ? <AdminNavLinks /> : <ClientNavLinks />}
        <div className="flex items-center gap-3">
          <AccountTrigger />
          <HamburgerMenu />
        </div>
      </div>
    </header>
  );
}
