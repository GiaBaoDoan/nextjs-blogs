import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { navLinks } from "@/constants/links";
import { cn } from "@/lib/utils";

import Link from "next/link";

const NavLinks = () => {
  return (
    <NavigationMenu className="hidden md:block">
      <NavigationMenuList className="gap-4">
        {navLinks.map((link, index) => (
          <NavigationMenuItem key={index}>
            <Link
              href={link.href}
              className={cn(
                navigationMenuTriggerStyle(),
                "text-sm px-3 py-2 bg-none"
              )}
            >
              {link.link_text}
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavLinks;
