"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BarChart,
  Plug,
  Sparkles,
  User,
  Zap,
} from "lucide-react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { Button } from "@/components/ui/button";
import NeuralBackground from "./NeuralBackground";
import socials from "@/data/socials";
import events from "@/data/events";
import { Calendar, Users, Clock, MapPin } from "lucide-react";

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
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Button
            asChild
            size="lg"
            className="
              w-full sm:w-auto h-14
              bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600
              shadow-xl shadow-emerald-500/20
              hover:shadow-emerald-500/40
              hover:scale-105 active:scale-95
              transition-all duration-300
            "
          >
            <Link href={socials.whatsapp} target="_blank">
              JOIN COMMUNITY <ArrowRight className="size-4" />
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="
              w-full sm:w-auto h-14
              text-emerald-400 border-emerald-500/30
              bg-emerald-950/20 backdrop-blur-md
              hover:bg-emerald-500/10 hover:border-emerald-500/50
              transition-all duration-300
            "
          >
            <Link href="/events">
              VIEW EVENTS <ArrowRight className="size-4" />
            </Link>
          </Button>
        </motion.div>

        {/* CONDITIONAL UPCOMING EVENT SPOTLIGHT */}
        {(() => {
          const today = new Date().toISOString().split("T")[0];
          const upcomingEvents = events
            .filter((e) => e.startDate >= today)
            .sort((a, b) => a.startDate.localeCompare(b.startDate))
            .slice(0, 3);

          if (upcomingEvents.length === 0) return null;

          const isMulti = upcomingEvents.length > 1;

          return (
            <div
              className={`mt-20 grid gap-8 mx-auto ${
                upcomingEvents.length === 1
                  ? "max-w-5xl"
                  : upcomingEvents.length === 2
                    ? "grid-cols-1 md:grid-cols-2 max-w-6xl"
                    : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl"
              }`}
            >
              {upcomingEvents.map((upcomingEvent, index) => (
                <motion.div
                  key={upcomingEvent.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 3 + index * 0.2, duration: 0.8 }}
                  className="relative group h-full"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-emerald-500/20 rounded-3xl blur-xl opacity-30 group-hover:opacity-70 transition duration-1000" />

                  <div
                    className={`relative h-full flex flex-col ${
                      isMulti ? "p-8" : "md:flex-row items-center gap-10 p-10"
                    } rounded-3xl border border-white/10 bg-black/40 backdrop-blur-2xl overflow-hidden text-left`}
                  >
                    <div className="flex-1 space-y-6">
                      <div className="flex flex-col gap-4">
                        <div className="inline-flex items-center w-fit gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold font-mono tracking-widest text-emerald-400 uppercase">
                          {index === 0
                            ? "Next Intelligence Session"
                            : "Upcoming Session"}
                        </div>

                        <h3
                          className={`${isMulti ? "text-2xl" : "text-3xl md:text-4xl"} font-bold text-white tracking-tight`}
                        >
                          {upcomingEvent.title}
                        </h3>
                      </div>

                      <div
                        className={`flex flex-wrap ${isMulti ? "gap-4" : "gap-8"} text-slate-300 text-sm font-mono`}
                      >
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-emerald-400" />
                          <span>
                            {new Date(
                              upcomingEvent.startDate,
                            ).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                        </div>
                      </div>

                      <p
                        className={`text-slate-400 ${isMulti ? "text-sm" : "text-base"} leading-relaxed line-clamp-3`}
                      >
                        {upcomingEvent.description}
                      </p>

                      <div className="pt-2">
                        <div className="flex items-start gap-4">
                          {upcomingEvent.speakers.length === 1 ? (
                            <User className="h-5 w-5 text-emerald-400 mt-1 flex-shrink-0" />
                          ) : (
                            <Users className="h-5 w-5 text-emerald-400 mt-1 flex-shrink-0" />
                          )}
                          <div className="flex-1 space-y-3">
                            {upcomingEvent.speakers.map((speaker, idx) => (
                              <div key={idx} className="flex flex-col">
                                <p className="font-mono text-sm font-bold text-slate-200">
                                  {speaker.name}
                                </p>
                                {speaker.designation && (
                                  <p className="font-mono text-[10px] text-slate-400">
                                    {speaker.designation}
                                  </p>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`flex flex-col gap-4 ${
                        isMulti
                          ? "mt-8 w-full"
                          : "min-w-[220px] w-full md:w-auto self-end md:self-center"
                      }`}
                    >
                      {upcomingEvent.resources?.register && (
                        <Button
                          asChild
                          size="lg"
                          className="
                          h-12 w-full
                          bg-emerald-500 hover:bg-emerald-400 
                          text-black font-bold tracking-widest
                          shadow-[0_0_20px_rgba(16,185,129,0.3)]
                          transition-all duration-300
                        "
                        >
                          <Link
                            href={upcomingEvent.resources?.register}
                            target="_blank"
                          >
                            REGISTER NOW
                          </Link>
                        </Button>
                      )}
                      <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="
                          h-12 w-full
                          text-emerald-400 border-emerald-500/30
                          bg-emerald-500/5
                          hover:bg-emerald-500/10 hover:border-emerald-500/50
                          transition-all duration-300
                        "
                      >
                        <Link href="/events">EXPLORE DETAILS</Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          );
        })()}
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
