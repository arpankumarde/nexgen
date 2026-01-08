"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useMotionValue, useMotionTemplate } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, User, Users } from "lucide-react";
import events from "@/data/events";

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const formatDateRange = (startDate: string, endDate?: string): string => {
  const start = formatDate(startDate);
  if (!endDate || startDate === endDate) {
    return start;
  }
  const end = formatDate(endDate);
  return `${start} - ${end}`;
};

const Page = () => {
  const heroRef = useRef(null);
  const eventsRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.1 });
  const eventsInView = useInView(eventsRef, { once: true, amount: 0.1 });

  const mouseXpx = useMotionValue(0);
  const mouseYpx = useMotionValue(0);

  const glow = useMotionTemplate`
    radial-gradient(
      600px circle at ${mouseXpx}px ${mouseYpx}px,
      rgba(52,211,153,0.12),
      transparent 45%
    )
  `;

  return (
    <div
      className="relative min-h-screen overflow-hidden"
      onMouseMove={(e) => {
        mouseXpx.set(e.clientX);
        mouseYpx.set(e.clientY);
      }}
    >
      <motion.div
        className="pointer-events-none fixed inset-0 z-0"
        style={{ background: glow }}
      />

      <div className="relative z-10 container mx-auto px-4">
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
              className="text-5xl font-bold sm:text-6xl md:text-7xl lg:text-8xl max-w-5xl mx-auto leading-tight mb-6 bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-300 bg-clip-text text-transparent"
            >
              EVENTS
            </motion.h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "150px" }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-1.5 rounded-full mb-10 bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-300"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mx-auto max-w-3xl text-2xl text-slate-300 font-semibold"
            >
              Join Us for Workshops, Talks, and Events
            </motion.p>
          </motion.div>

          {/* Events Grid */}
          <div
            ref={eventsRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
          >
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                animate={eventsInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: 0.6 + index * 0.1,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                }}
                className="h-full"
              >
                <Card className="h-full pt-0 bg-white/10 border-border hover:border-primary/50 transition-all duration-300 backdrop-blur-sm flex flex-col group overflow-hidden">
                  <div className="relative w-full h-72 overflow-hidden">
                    <Image
                      src={event.poster ?? ""}
                      alt={event.title}
                      fill
                      className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src =
                          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%231e1e1e' width='400' height='300'/%3E%3Ctext fill='%23fff' font-family='monospace' font-size='20' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3EPoster Unavailable%3C/text%3E%3C/svg%3E";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  </div>

                  <CardHeader className="flex-shrink-0">
                    <CardTitle className="font-mono text-xl font-bold mb-2 line-clamp-2">
                      {event.title}
                    </CardTitle>
                    <CardDescription className="font-mono text-sm text-muted-foreground">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="h-4 w-4 text-emerald-400" />
                        <span className="text-emerald-400">
                          {formatDateRange(event.startDate, event.endDate)}
                        </span>
                      </div>
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-muted-foreground font-mono text-sm leading-relaxed mb-4 line-clamp-4">
                      {event.description}
                    </p>

                    {/* Speakers Section */}
                    <div className="mt-auto pt-4 border-t border-border">
                      <div className="flex items-start gap-2 mb-2">
                        {event.speakers.length === 1 ? (
                          <User className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                        ) : (
                          <Users className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                        )}
                        <div className="flex-1">
                          <p className="font-mono text-xs text-muted-foreground mb-1">
                            {event.speakers.length === 1 ? "Speaker" : "Speakers"}
                          </p>
                          {event.speakers.map((speaker, idx) => (
                            <div key={idx} className="mb-1 last:mb-0">
                              <p className="font-mono text-sm font-semibold text-foreground">
                                {speaker.name}
                              </p>
                              {speaker.designation && (
                                <p className="font-mono text-xs text-muted-foreground">
                                  {speaker.designation}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
