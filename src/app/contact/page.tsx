"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import {
  motion,
  useInView,
  useMotionValue,
  useMotionTemplate,
} from "framer-motion";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Linkedin,
  Mail,
  Github,
  Twitter,
  Instagram,
  Send,
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-react";

const Page = () => {
  const heroRef = useRef(null);
  const infoRef = useRef(null);
  const formRef = useRef(null);
  const socialRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.1 });
  const infoInView = useInView(infoRef, { once: true, amount: 0.1 });
  const formInView = useInView(formRef, { once: true, amount: 0.1 });
  const socialInView = useInView(socialRef, { once: true, amount: 0.1 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const mouseXpx = useMotionValue(0);
  const mouseYpx = useMotionValue(0);
  const mouseX = useRef(0);
  const mouseY = useRef(0);

  const glow = useMotionTemplate`
    radial-gradient(
      600px circle at ${mouseXpx}px ${mouseYpx}px,
      rgba(52,211,153,0.12),
      transparent 45%
    )
  `;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/company/nexgen",
      color: "hover:text-emerald-400",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/nexgen",
      color: "hover:text-emerald-400",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com/nexgen",
      color: "hover:text-emerald-400",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com/nexgen",
      color: "hover:text-emerald-400",
    },
  ];

  return (
    <div
      className="relative min-h-screen overflow-hidden"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.current = ((e.clientX - rect.left) / rect.width) * 100;
        mouseY.current = ((e.clientY - rect.top) / rect.height) * 100;
        mouseXpx.set(e.clientX);
        mouseYpx.set(e.clientY);
      }}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        style={{ background: glow }}
      />

      <div className="relative z-10 container mx-auto px-4 md:px-12">
        <section className="py-16 md:py-20" ref={heroRef}>
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={
              heroInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}
            }
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center mb-12"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-mono text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold max-w-4xl mx-auto leading-tight mb-4 bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-300 bg-clip-text text-transparent"
            >
              CONTACT US
            </motion.h1>

            <motion.div
              initial={{ width: 0 }}
              animate={heroInView ? { width: "100px" } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-1 rounded-full mb-6 bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-300"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mx-auto max-w-2xl text-lg md:text-xl text-slate-300 font-mono"
            >
              Have questions? Let&apos;s build something together.
            </motion.p>
          </motion.div>

          <motion.div
            ref={infoRef}
            initial={{ opacity: 0, y: 30 }}
            animate={infoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16"
          >
            {[
              {
                icon: Mail,
                label: "Email",
                value: "contact@nexgen.com",
                color: "text-emerald-400",
              },
              {
                icon: Phone,
                label: "Phone",
                value: "+1 (555) 123-4567",
                color: "text-teal-400",
              },
              {
                icon: MapPin,
                label: "Location",
                value: "MSIT Campus, Kolkata",
                color: "text-teal-400",
              },
            ].map((item, idx) => (
              <Card
                key={idx}
                className="gap-2 bg-white/5 border-white/10 backdrop-blur-md p-4 group hover:border-emerald-500/50 transition-all duration-500 text-center"
              >
                <item.icon
                  className={`size-8 mx-auto mb-3 ${item.color} group-hover:scale-110 transition-transform duration-500`}
                />
                <h3 className="font-mono font-bold text-base text-white">
                  {item.label}
                </h3>
                <p className="text-slate-400 font-mono text-xs leading-relaxed uppercase tracking-tight">
                  {item.value}
                </p>
              </Card>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-start">
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: -30 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="lg:col-span-8"
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-md p-6 md:p-8 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h2 className="font-mono text-xl md:text-2xl font-bold mb-6 text-white relative z-10">
                  SEND A MESSAGE
                </h2>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 md:space-y-6 relative z-10"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="name"
                        className="font-mono text-slate-300 text-[10px] uppercase tracking-wider"
                      >
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-white/5 border-white/10 focus:border-emerald-400/50 focus:ring-emerald-400/20 text-white font-mono h-10 text-sm transition-all"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="email"
                        className="font-mono text-slate-300 text-[10px] uppercase tracking-wider"
                      >
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-white/5 border-white/10 focus:border-emerald-400/50 focus:ring-emerald-400/20 text-white font-mono h-10 text-sm transition-all"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="subject"
                      className="font-mono text-slate-300 text-[10px] uppercase tracking-wider"
                    >
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-white/5 border-white/10 focus:border-emerald-400/50 focus:ring-emerald-400/20 text-white font-mono h-10 text-sm transition-all"
                      placeholder="What is this regarding?"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="message"
                      className="font-mono text-slate-300 text-[10px] uppercase tracking-wider"
                    >
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="bg-white/5 border-white/10 focus:border-emerald-400/50 focus:ring-emerald-400/20 text-white font-mono resize-none transition-all p-3 text-sm"
                      placeholder="Type your message here..."
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-mono font-bold py-5 text-sm tracking-widest transition-all rounded-lg uppercase"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Dispatch Message
                  </Button>
                </form>
              </Card>
            </motion.div>

            <motion.div
              ref={socialRef}
              initial={{ opacity: 0, x: 30 }}
              animate={socialInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="lg:col-span-4 space-y-6"
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-md p-6 group">
                <h2 className="font-mono text-lg font-bold mb-4 text-white group-hover:text-emerald-400 transition-colors uppercase tracking-tight">
                  FOLLOW US
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center gap-2 p-2.5 rounded-lg border border-white/10 bg-white/5 ${social.color} hover:bg-emerald-500/10 hover:border-emerald-500/50 transition-all group/icon`}
                    >
                      <social.icon className="h-4 w-4" />
                      <span className="font-mono font-bold text-[10px] tracking-tight">
                        {social.name}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-md p-5 group">
                <h2 className="font-mono text-lg font-bold mb-4 text-white group-hover:text-teal-400 transition-colors uppercase tracking-tight">
                  QUICK LINKS
                </h2>
                <div className="space-y-0.5">
                  {[
                    { label: "About Us", href: "/about" },
                    { label: "Our Team", href: "/team" },
                    { label: "Events", href: "/events" },
                  ].map((link, idx) => (
                    <Link
                      key={idx}
                      href={link.href}
                      className="flex items-center justify-between group/link font-mono text-slate-400 hover:text-white transition-all py-2.5 border-b border-white/5 last:border-0"
                    >
                      <span className="text-sm">{link.label}</span>
                      <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-emerald-400" />
                    </Link>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
