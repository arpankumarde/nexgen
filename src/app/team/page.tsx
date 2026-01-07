"use client";

import * as React from "react";
import { useRef, useState, useEffect } from "react";
import { motion, useInView, useMotionValue, useMotionTemplate } from "framer-motion";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Linkedin, Github, Twitter, Instagram, Circle } from "lucide-react";
import Link from "next/link";

/* ================= NEURAL BACKGROUND ================= */

const NODE_COUNT = 20;
const SAFE_MARGIN = 5;

function NeuralBackground({
  mouseX,
  mouseY,
}: {
  mouseX: number;
  mouseY: number;
}) {
  const [nodes, setNodes] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: NODE_COUNT }).map(() => ({
      x: SAFE_MARGIN + Math.random() * (100 - SAFE_MARGIN * 2),
      y: SAFE_MARGIN + Math.random() * (100 - SAFE_MARGIN * 2),
    }));
    setNodes(generated);
  }, []);

  if (nodes.length === 0) return null;

  return (
    <div className="absolute inset-0 z-0 opacity-30">
      {nodes.map((node, i) => {
        const dx = mouseX - node.x;
        const dy = mouseY - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const active = dist < 12;

        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
            }}
            animate={{
              scale: active ? 1.4 : 1,
              opacity: active ? 0.8 : 0.4,
            }}
            transition={{ duration: 0.3 }}
          >
            <Circle
              size={active ? 12 : 8}
              strokeWidth={1.5}
              className="text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.3)]"
            />
          </motion.div>
        );
      })}
    </div>
  );
}

type TeamMember = {
  name: string;
  department: string;
  photo: string;
  github: string;
  linkedin: string;
  twitter?: string;
  instagram?: string;
};

const coreTeam: TeamMember[] = [
  {
    name: "Alex Chen",
    department: "AI Engineering",
    photo: "/team/alex.jpg",
    github: "https://github.com/alexchen",
    linkedin: "https://linkedin.com/in/alexchen",
    twitter: "https://twitter.com/alexchen",
  },
  {
    name: "Sarah Johnson",
    department: "Data Engineering",
    photo: "https://avatars.githubusercontent.com/u/134305585?v=4",
    github: "https://github.com/sarahjohnson",
    linkedin: "https://linkedin.com/in/sarahjohnson",
  },
  {
    name: "Michael Rodri",
    department: "Software Development",
    photo: "/team/michael.jpg",
    github: "https://github.com/michaelrodriguez",
    linkedin: "https://linkedin.com/in/michaelrodriguez",
    instagram: "https://instagram.com/michaelrodriguez",
  },
  {
    name: "Emily Zhang",
    department: "AI Research",
    photo: "/team/emily.jpg",
    github: "https://github.com/emilyzhang",
    linkedin: "https://linkedin.com/in/emilyzhang",
    twitter: "https://twitter.com/emilyzhang",
    instagram: "https://instagram.com/emilyzhang",
  },
];

const extendedTeam: TeamMember[] = [
  {
    name: "David Kim",
    department: "Product Design",
    photo: "/team/david.jpg",
    github: "https://github.com/davidkim",
    linkedin: "https://linkedin.com/in/davidkim",
  },
  {
    name: "Lisa Wang",
    department: "Machine Learning",
    photo: "/team/lisa.jpg",
    github: "https://github.com/lisawang",
    linkedin: "https://linkedin.com/in/lisawang",
    twitter: "https://twitter.com/lisawang",
  },
  {
    name: "James Wilson",
    department: "DevOps",
    photo: "/team/james.jpg",
    github: "https://github.com/jameswilson",
    linkedin: "https://linkedin.com/in/jameswilson",
  },
  {
    name: "Maria Garcia",
    department: "Data Science",
    photo: "/team/maria.jpg",
    github: "https://github.com/mariagarcia",
    linkedin: "https://linkedin.com/in/mariagarcia",
    instagram: "https://instagram.com/mariagarcia",
  },
];

const TeamMemberCard = ({ member, index, isInView, delay }: { member: TeamMember, index: number, isInView: boolean, delay: number }) => {
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
        {/* Hover Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <CardContent className="p-8 flex flex-col items-center relative z-10">
          {/* Animated Avatar Container */}
          <div className="relative mb-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative z-10"
            >
              <Avatar className="size-32 border-2 border-emerald-500/20 group-hover:border-emerald-500 transition-colors duration-500 p-1 bg-[#1E1E1E]">
                <AvatarImage src={member.photo} alt={member.name} className="rounded-full object-cover" />
                <AvatarFallback className="bg-emerald-500/10 text-emerald-400 text-3xl font-mono font-bold">
                  {getInitials(member.name)}
                </AvatarFallback>
              </Avatar>
            </motion.div>

            {/* Background Decorative Rings */}
            <div className="absolute inset-0 border-2 border-emerald-500/10 rounded-full scale-110 group-hover:scale-125 group-hover:opacity-0 transition-all duration-700" />
            <div className="absolute inset-0 border border-emerald-500/5 rounded-full scale-125 group-hover:scale-150 group-hover:opacity-0 transition-all duration-1000" />
          </div>

          <motion.h3
            className="text-2xl font-mono font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300"
          >
            {member.name}
          </motion.h3>

          <p className="text-emerald-400/80 font-mono text-sm mb-6 uppercase tracking-wider">
            {member.department}
          </p>

          <div className="flex justify-center gap-4">
            <Link
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-emerald-500/20 transition-all duration-300"
              aria-label={`${member.name}'s GitHub`}
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-emerald-500/20 transition-all duration-300"
              aria-label={`${member.name}'s LinkedIn`}
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            {member.twitter && (
              <Link
                href={member.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-emerald-500/20 transition-all duration-300"
                aria-label={`${member.name}'s Twitter`}
              >
                <Twitter className="h-5 w-5" />
              </Link>
            )}
            {member.instagram && (
              <Link
                href={member.instagram}
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
  members: TeamMember[];
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

  /* ================= MOUSE TRACKING ================= */
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
      {/* Background Effects */}
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

          <TeamSection title="CORE TEAM" members={coreTeam} delay={0.6} />
          <TeamSection title="EXTENDED TEAM" members={extendedTeam} delay={0.8} />
        </section>
      </div>
    </div>
  );
};

export default Page;

