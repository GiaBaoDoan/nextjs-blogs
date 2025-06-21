"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { navLinks } from "@/constants/links";
import { cn } from "@/lib/utils";
import Link from "next/link";

const ClientNavbar = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-4">
        {navLinks.map((link, index) => (
          <NavigationMenuItem key={index}>
            <Link
              href={link.href}
              className={cn(navigationMenuTriggerStyle(), "text-sm px-3 py-2")}
            >
              {link.link_text}
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default ClientNavbar;
