"use client";

import { useRef } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import Hero from "@/components/shared/Hero";
import Stats from "@/components/shared/Stats";
import Offerings from "@/components/shared/Offerings";
import Newsletter from "@/components/shared/Newsletter";

const Page = () => {
  const mouseXpx = useMotionValue(0);
  const mouseYpx = useMotionValue(0);

  const glow = useMotionTemplate`
    radial-gradient(
      800px circle at ${mouseXpx}px ${mouseYpx}px,
      rgba(52,211,153,0.1),
      transparent 50%
    )
  `;

  return (
    <div
      className="relative min-h-screen bg-[#1E1E1E] overflow-x-hidden"
      onMouseMove={(e) => {
        mouseXpx.set(e.clientX);
        mouseYpx.set(e.clientY);
      }}
    >
      {/* Global Glowing Background Effect */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-0"
        style={{ background: glow }}
      />

      <div className="relative z-10">
        <Hero />
        <Stats />
        <Offerings />
        <Newsletter />
      </div>
    </div>
  );
};

export default Page;

