"use client";

import * as React from "react";

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
import Link from "next/link";

export default function AdminNavbar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {adminLinks.map((nav, index) => (
          <NavigationMenuItem key={index}>
            <NavigationMenuTrigger>{nav.label}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-[150px]">
                {nav.links.map((component, index) => (
                  <ListItem
                    key={index}
                    title={component.link_text}
                    href={`/admin/${component.href}`}
                  ></ListItem>
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
