"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BarChart,
  Plug,
  Sparkles,
  Zap,
} from "lucide-react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { Button } from "@/components/ui/button";
import NeuralBackground from "./NeuralBackground";

const labels = [
  { icon: Sparkles, label: "Predictive Analytics" },
  { icon: Plug, label: "Data Engineering" },
  { icon: Activity, label: "Natural Language Processing" },
];

const features = [
  {
    icon: BarChart,
    label: "Advanced Analytics",
    description:
      "Extract insights from complex data using modern ML pipelines.",
  },
  {
    icon: Zap,
    label: "Intelligent Automation",
    description: "Automate workflows with AI-powered decision systems.",
  },
  {
    icon: Activity,
    label: "Real-time Insights",
    description: "Process streaming data and act instantly.",
  },
];

const Hero = () => {
  const mouseXpx = useMotionValue(0);
  const mouseYpx = useMotionValue(0);

  const mouseX = useRef(0);
  const mouseY = useRef(0);

  const glow = useMotionTemplate`
    radial-gradient(
      600px circle at ${mouseXpx}px ${mouseYpx}px,
      rgba(52,211,153,0.2),
      transparent 45%
    )
  `;

  const titleWords = [
    "WE",
    "PLAY",
    "WITH",
    "THE",
    "OIL",
    "OF",
    "THE",
    "21ST",
    "CENTURY",
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

      <NeuralBackground mouseX={mouseX.current} mouseY={mouseY.current} />

      <section className="relative z-10 container mx-auto px-4 py-28 text-center">
        <motion.h1
          initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative font-mono text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl mx-auto leading-tight text-emerald-400"
        >
          {titleWords.map((text, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
              }}
              className="inline-block mx-2 md:mx-4"
            >
              {text}
            </motion.span>
          ))}
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "160px" }}
          transition={{ delay: 1.2 }}
          className="mx-auto mt-6 h-1 rounded-full bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-300"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="mx-auto mt-8 max-w-2xl text-lg md:text-xl font-mono text-slate-300"
        >
          A data science community exploring intelligence, systems, and
          real-world impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-12 flex flex-wrap justify-center gap-6"
        >
          {labels.map((item) => (
            <div
              key={item.label}
              className="
                flex items-center gap-2 px-6 py-2 rounded-full
                border border-white/10
                bg-white/5 backdrop-blur-md
                hover:shadow-[0_0_20px_rgba(52,211,153,0.25)]
              "
            >
              <item.icon className="h-5 w-5 text-emerald-400" />
              <span className="text-sm font-mono text-white">{item.label}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6 }}
        >
          <Button
            asChild
            size="lg"
            className="mt-14 font-mono bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600"
          >
            <Link href="/events">
              VIEW EVENTS <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </section>

      <section className="container mx-auto px-4 pb-32 relative z-10">
        <h2 className="mb-16 text-center text-3xl md:text-4xl font-mono font-bold text-white">
          Unlock the Power of AI
        </h2>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="
                rounded-2xl border border-white/10
                bg-white/5 backdrop-blur-md p-8 text-center
                hover:shadow-[0_0_30px_rgba(52,211,153,0.18)]
                transition-all duration-300"
            >
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10">
                <feature.icon className="h-7 w-7 text-emerald-400" />
              </div>
              <h3 className="mb-3 font-mono text-xl font-bold text-white">
                {feature.label}
              </h3>
              <p className="font-mono text-sm text-slate-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Hero;
