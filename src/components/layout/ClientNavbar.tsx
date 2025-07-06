"use client";

import UserAuth from "@/components/auth/UserAuth";
import Logo from "@/components/ui/logo";
import HamburgerMenu from "@/components/layout/HamburgerMenu ";
import NavLinks from "@/components/layout/NavLinks";

import { ModeToggle } from "@/components/ui/ThemeColorMode";
import { cn } from "@/lib/utils";
import { useHeaderHidden } from "@/hooks/useHeader";

export default function Header() {
  const scrolled = useHeaderHidden();

  return (
    <header
      className={cn(
        "sticky flex bg-white justify-between inset-x-0 top-0 shadow z-50 transition-all duration-300 backdrop-blur border-b",
        scrolled ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <div className="flex items-center w-full justify-between container">
        <Logo />
        <NavLinks />
        <div className="flex items-center gap-3">
          <UserAuth />
          <ModeToggle />
          <HamburgerMenu />
        </div>
      </div>
    </header>
  );
}
