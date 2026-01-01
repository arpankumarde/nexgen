"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
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
} from "lucide-react";

const Page = () => {
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const socialRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.1 });
  const formInView = useInView(formRef, { once: true, amount: 0.1 });
  const socialInView = useInView(socialRef, { once: true, amount: 0.1 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can add API call or email service integration here
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
      color: "hover:text-blue-500",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/nexgen",
      color: "hover:text-gray-400",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com/nexgen",
      color: "hover:text-blue-400",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com/nexgen",
      color: "hover:text-pink-500",
    },
  ];

  return (
    <div className="container mx-auto px-4 min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container py-24" ref={heroRef}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-mono text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl mx-auto leading-tight mb-4"
          >
            GET IN TOUCH
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mx-auto max-w-3xl text-2xl text-fuchsia-400 font-mono font-semibold"
          >
            We&apos;d love to hear from you
          </motion.p>
        </motion.div>

        {/* Contact Information Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16"
        >
          <Card className="bg-white/10 border-border backdrop-blur-sm p-6 text-center">
            <Mail className="h-8 w-8 mx-auto mb-4 text-fuchsia-400" />
            <h3 className="font-mono font-bold text-lg mb-2">Email</h3>
            <p className="text-muted-foreground font-mono text-sm">
              contact@nexgen.com
            </p>
          </Card>
          <Card className="bg-white/10 border-border backdrop-blur-sm p-6 text-center">
            <Phone className="h-8 w-8 mx-auto mb-4 text-fuchsia-400" />
            <h3 className="font-mono font-bold text-lg mb-2">Phone</h3>
            <p className="text-muted-foreground font-mono text-sm">
              +1 (555) 123-4567
            </p>
          </Card>
          <Card className="bg-white/10 border-border backdrop-blur-sm p-6 text-center">
            <MapPin className="h-8 w-8 mx-auto mb-4 text-fuchsia-400" />
            <h3 className="font-mono font-bold text-lg mb-2">Location</h3>
            <p className="text-muted-foreground font-mono text-sm">
              Meghnad Saha Institute of Technology
            </p>
          </Card>
        </motion.div>

        {/* Contact Form and Social Links */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, x: -30 }}
            animate={formInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-white/10 border-border backdrop-blur-sm p-8">
              <h2 className="font-mono text-2xl font-bold mb-6">
                SEND US A MESSAGE
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-mono">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="font-mono"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-mono">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="font-mono"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="font-mono">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="font-mono"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="font-mono">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us what's on your mind..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="font-mono resize-none"
                  />
                </div>
                <Button type="submit" className="w-full font-mono" size="lg">
                  <Send className="h-4 w-4 mr-2" />
                  SEND MESSAGE
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Social Links */}
          <motion.div
            ref={socialRef}
            initial={{ opacity: 0, x: 30 }}
            animate={socialInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <Card className="bg-white/10 border-border backdrop-blur-sm p-8">
              <h2 className="font-mono text-2xl font-bold mb-6">FOLLOW US</h2>
              <p className="text-muted-foreground font-mono mb-8">
                Stay connected with us on social media for the latest updates,
                events, and opportunities.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={socialInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                    className={`flex items-center gap-3 p-4 rounded-lg border border-border bg-white/5 hover:bg-white/10 transition-all ${social.color} group`}
                  >
                    <social.icon className="h-6 w-6" />
                    <span className="font-mono font-semibold">
                      {social.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </Card>

            <Card className="bg-white/10 border-border backdrop-blur-sm p-8">
              <h2 className="font-mono text-2xl font-bold mb-6">QUICK LINKS</h2>
              <div className="space-y-4">
                <a
                  href="/about"
                  className="block font-mono text-muted-foreground hover:text-fuchsia-400 transition-colors"
                >
                  → About Us
                </a>
                <a
                  href="/team"
                  className="block font-mono text-muted-foreground hover:text-fuchsia-400 transition-colors"
                >
                  → Our Team
                </a>
                <a
                  href="/events"
                  className="block font-mono text-muted-foreground hover:text-fuchsia-400 transition-colors"
                >
                  → Events
                </a>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Page;
