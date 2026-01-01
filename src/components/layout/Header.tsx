import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { title: "ABOUT US", href: "/about" },
  { title: "TEAM", href: "/team" },
  { title: "CONTACT", href: "/contact" },
];

const Header = () => {
  return (
    <header className="flex h-16 items-center justify-between mx-4">
      <Link href="/" className="flex items-center gap-2">
        <div className="flex items-center space-x-2">
          <Image src="/brand/logo.png" alt="Logo" width={150} height={50} />
        </div>
      </Link>

      <div className="flex items-center space-x-4">
        <nav className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-sm text-foreground transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center">
          <Button asChild className="hidden md:inline-flex">
            <Link href="/events">
              EVENTS <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="p-4 bg-background">
              <SheetTitle>MENU</SheetTitle>
              <nav className="flex flex-col gap-6 mt-6">
                {navigationItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="text-sm text-foreground transition-colors"
                  >
                    {item.title}
                  </Link>
                ))}
                <Button asChild>
                  <Link href="/events">
                    EVENTS <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
