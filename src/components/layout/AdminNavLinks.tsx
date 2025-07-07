"use client";

import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { adminLinks } from "@/constants/links";
import { ListItem } from "@/components/ui/ListItem";

export default function AdminNavLinks() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex items-center gap-2">
        {adminLinks.map((nav, index) => (
          <NavigationMenuItem key={index}>
            <NavigationMenuTrigger>{nav.label}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-[160px]">
                {nav.links.map((component, idx) => (
                  <ListItem
                    key={idx}
                    title={component.link_text}
                    href={`/admin/${component.href}`}
                  />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}

        <NavigationMenuItem>
          <Link href="/admin/tags" className={navigationMenuTriggerStyle()}>
            Tags
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            href="/admin/categories"
            className={navigationMenuTriggerStyle()}
          >
            Danh mục
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/admin/users" className={navigationMenuTriggerStyle()}>
            Người dùng
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
