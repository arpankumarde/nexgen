"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useInView,
  useMotionValue,
  useMotionTemplate,
} from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Linkedin, Github, Twitter, Instagram } from "lucide-react";
import NeuralBackground from "@/components/shared/NeuralBackground";
import { Member } from "@/types/Member";
import members from "@/data/members";

const TeamMemberCard = ({
  member,
  index,
  isInView,
  delay,
}: {
  member: Member;
  index: number;
  isInView: boolean;
  delay: number;
}) => {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: delay + index * 0.1,
        duration: 0.6,
      }}
      className="group"
    >
      <Card className="h-full bg-white/5 border-white/10 backdrop-blur-md hover:border-emerald-500/50 transition-all duration-500 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <CardContent className="p-8 flex flex-col items-center relative z-10">
          <div className="relative mb-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative z-10"
            >
              <Avatar className="size-32 border-2 border-emerald-500/20 group-hover:border-emerald-500 transition-colors duration-500 p-1 bg-[#1E1E1E]">
                <AvatarImage
                  src={member.avatar ?? ""}
                  alt={member.name}
                  className="rounded-full object-cover"
                />
                <AvatarFallback className="bg-emerald-500/10 text-emerald-400 text-3xl font-mono font-bold">
                  {getInitials(member.name)}
                </AvatarFallback>
              </Avatar>
            </motion.div>

            <div className="absolute inset-0 border-2 border-emerald-500/10 rounded-full scale-110 group-hover:scale-125 group-hover:opacity-0 transition-all duration-700" />
            <div className="absolute inset-0 border border-emerald-500/5 rounded-full scale-125 group-hover:scale-150 group-hover:opacity-0 transition-all duration-1000" />
          </div>

          <motion.h3 className="text-2xl font-mono font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
            {member.name}
          </motion.h3>

          <p className="text-emerald-400/80 font-mono text-sm mb-6 uppercase tracking-wider">
            {member.role}
          </p>

          <div className="flex justify-center gap-4">
            <Link
              href={
                member.socials.find((social) => social.platform === "github")
                  ?.url ?? ""
              }
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-emerald-500/20 transition-all duration-300"
              aria-label={`${member.name}'s GitHub`}
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href={
                member.socials.find((social) => social.platform === "linkedin")
                  ?.url ?? ""
              }
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-emerald-500/20 transition-all duration-300"
              aria-label={`${member.name}'s LinkedIn`}
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            {member.socials.find((social) => social.platform === "twitter")
              ?.url && (
              <Link
                href={
                  member.socials.find((social) => social.platform === "twitter")
                    ?.url ?? ""
                }
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-emerald-500/20 transition-all duration-300"
                aria-label={`${member.name}'s Twitter`}
              >
                <Twitter className="h-5 w-5" />
              </Link>
            )}
            {member.socials.find((social) => social.platform === "instagram")
              ?.url && (
              <Link
                href={
                  member.socials.find(
                    (social) => social.platform === "instagram"
                  )?.url ?? ""
                }
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-emerald-500/20 transition-all duration-300"
                aria-label={`${member.name}'s Instagram`}
              >
                <Instagram className="h-5 w-5" />
              </Link>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const TeamSection = ({
  title,
  members,
  delay = 0,
}: {
  title: string;
  members: Member[];
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="mb-32">
      <div className="flex flex-col items-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: delay, duration: 0.6 }}
          className="font-mono text-3xl font-bold sm:text-4xl md:text-5xl text-white tracking-tight"
        >
          {title}
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: "80px" } : {}}
          transition={{ delay: delay + 0.3, duration: 0.8 }}
          className="h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mt-4 rounded-full"
        />
      </div>

      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
      >
        {members.map((member, index) => (
          <TeamMemberCard
            key={member.name}
            member={member}
            index={index}
            isInView={isInView}
            delay={delay + 0.2}
          />
        ))}
      </div>
    </section>
  );
};

const Page = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseXpx = useMotionValue(0);
  const mouseYpx = useMotionValue(0);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const glow = useMotionTemplate`
    radial-gradient(
      600px circle at ${mouseXpx}px ${mouseYpx}px,
      rgba(52,211,153,0.12),
      transparent 40%
    )
  `;

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-[#1E1E1E]"
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
      <NeuralBackground mouseX={mouseX.current} mouseY={mouseY.current} />

      <div className="relative z-10 container mx-auto px-4">
        <section className="container py-24">
          <motion.div
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center mb-24"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-mono text-5xl font-bold sm:text-6xl md:text-7xl lg:text-8xl max-w-5xl mx-auto leading-tight mb-6 bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-300 bg-clip-text text-transparent"
            >
              OUR TEAM
            </motion.h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "150px" }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-1.5 rounded-full mb-10 bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-300"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mx-auto max-w-2xl text-xl text-slate-300 font-mono italic"
            >
              The minds behind Nexgen: A collective of data specialists,
              innovators, and problem solvers.
            </motion.p>
          </motion.div>

          <TeamSection
            title="CORE TEAM"
            members={members.filter((member) => member.type === "core")}
            delay={0.6}
          />
          <TeamSection
            title="EXTENDED TEAM"
            members={members.filter((member) => member.type === "extended")}
            delay={0.8}
          />
        </section>
      </div>
    </div>
  );
};

export default Page;
