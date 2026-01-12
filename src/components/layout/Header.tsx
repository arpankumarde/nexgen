"use client";

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
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

const navigationItems = [
  { title: "ABOUT US", href: "/about" },
  { title: "TEAM", href: "/team" },
  { title: "CONTACT", href: "/contact" },
];

export default function Header() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const glow = useMotionTemplate`
    radial-gradient(
      220px circle at ${mouseX}px ${mouseY}px,
      rgba(52,211,153,0.25),
      transparent 60%
    )
  `;

  return (
    <header
      onMouseMove={(e) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      }}
      className="
        sticky top-0 z-50
        mx-4 mt-4
        rounded-2xl
        border border-white/10
        bg-white/5 backdrop-blur-md
        overflow-hidden
      "
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        style={{ background: glow }}
      />

      <div className="relative z-10 flex h-16 items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative">
            <Image
              src="/brand/logo.png"
              alt="Logo"
              width={140}
              height={40}
              className="relative z-10"
            />
            <div className="absolute inset-0 rounded-lg blur-xl bg-gradient-to-r from-emerald-400/30 via-emerald-500/30 to-teal-400/30" />
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10 ml-auto mr-10">
          {navigationItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="
                relative text-sm font-mono tracking-wide text-slate-200
                transition-colors duration-300
                hover:text-emerald-300
                after:absolute after:-bottom-1 after:left-0
                after:h-[2px] after:w-0
                after:bg-gradient-to-r
                after:from-emerald-400 after:via-teal-400 after:to-amber-300
                after:transition-all after:duration-300
                hover:after:w-full
              "
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            asChild
            className="
              hidden md:inline-flex
              font-mono
              bg-gradient-to-r
              from-emerald-600 via-emerald-500 to-teal-600
              shadow-lg shadow-emerald-500/20
              hover:opacity-90 transition-all
            "
          >
            <Link href="/events">
              EVENTS <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          {/* MOBILE MENU */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="
                  md:hidden
                  text-emerald-400
                  hover:bg-white/10
                "
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="bg-black/70 backdrop-blur-sm border-l border-white/10 text-white p-4"
            >
              <SheetTitle className="text-lg">MENU</SheetTitle>

              <nav className="mt-10 flex flex-col gap-6">
                {navigationItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="
                      text-sm tracking-wide
                      text-slate-300
                      hover:text-emerald-400
                      transition-colors
                    "
                  >
                    {item.title}
                  </Link>
                ))}

                <Button
                  asChild
                  className="mt-6 bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600"
                >
                  <Link href="/events">
                    EVENTS <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
