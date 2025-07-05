import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/constants/links";
import Link from "next/link";

const HamburgerMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon" aria-label="Open Menu">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64 pt-16">
        <nav className="flex flex-col gap-4">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium transition hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {link.link_text}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default HamburgerMenu;
