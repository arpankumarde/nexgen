import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp, FaInstagram, FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import socials from "@/data/socials";

const mainLinks = [
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  {
    icon: <FaLinkedinIn className="h-4 w-4" />,
    href: socials.linkedin,
    label: "LinkedIn",
  },
  {
    icon: <FaGithub className="h-4 w-4" />,
    href: socials.github,
    label: "GitHub",
  },
  {
    icon: <FaTwitter className="h-4 w-4" />,
    href: socials.twitter,
    label: "Twitter",
  },
  {
    icon: <FaInstagram className="h-4 w-4" />,
    href: socials.instagram,
    label: "Instagram",
  },
  {
    icon: <FaWhatsapp className="h-4 w-4" />,
    href: socials.whatsapp,
    label: "WhatsApp",
  },
];

const Footer = () => {
  return (
    <footer className="relative border-t border-white/30 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40">
        <div className="absolute bottom-0 left-1/4 h-32 w-64 bg-emerald-500/10 blur-[80px] rounded-full" />
        <div className="absolute top-0 right-1/4 h-32 w-64 bg-teal-500/10 blur-[80px] rounded-full" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link
              href="/"
              className="group transition-transform duration-300 hover:scale-105"
            >
              <Image
                src="/brand/logo.png"
                alt="Nexgen Logo"
                width={120}
                height={40}
                className="opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="font-mono text-sm text-slate-500 uppercase tracking-[0.2rem]">
              ©{new Date().getFullYear()} NEXGEN COMMUNITY
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <nav className="flex flex-wrap items-center justify-center md:justify-end gap-x-8 gap-y-2">
              {mainLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-mono font-bold text-slate-400 hover:text-emerald-400 tracking-widest uppercase transition-all duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  asChild
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-lg bg-white/5 hover:bg-emerald-500/10 border border-white/5 hover:border-emerald-500/30 text-slate-400 hover:text-emerald-400 transition-all duration-300"
                >
                  <Link
                    href={social.href}
                    target="_blank"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
