"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useInView,
  useMotionValue,
  useMotionTemplate,
} from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  Code2,
  Mic2,
  Trophy,
  Cpu,
  Users2,
  Presentation,
  GraduationCap,
  Network,
} from "lucide-react";

const Page = () => {
  const heroRef = useRef(null);
  const gridRef = useRef(null);
  const whatWeDoRef = useRef(null);
  const whoWeServeRef = useRef(null);
  const whatWeOfferRef = useRef(null);
  const getInvolvedRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.1 });
  const gridInView = useInView(gridRef, { once: true, amount: 0.1 });
  const whatWeDoInView = useInView(whatWeDoRef, { once: true, amount: 0.1 });
  const whoWeServeInView = useInView(whoWeServeRef, {
    once: true,
    amount: 0.1,
  });
  const whatWeOfferInView = useInView(whatWeOfferRef, {
    once: true,
    amount: 0.1,
  });
  const getInvolvedInView = useInView(getInvolvedRef, {
    once: true,
    amount: 0.1,
  });

  const mouseXpx = useMotionValue(0);
  const mouseYpx = useMotionValue(0);
  const mouseX = useRef(0);
  const mouseY = useRef(0);

  const glow = useMotionTemplate`
    radial-gradient(
      600px circle at ${mouseXpx}px ${mouseYpx}px,
      rgba(52,211,153,0.15),
      transparent 45%
    )
  `;

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
        className="pointer-events-none fixed inset-0 z-0"
        style={{ background: glow }}
      />

      <div className="relative z-10 container mx-auto px-4">
        <section className="container py-24" ref={heroRef}>
          <motion.div
            initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
            animate={
              heroInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}
            }
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center mb-16"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl 
              max-w-4xl mx-auto leading-tight mb-4
              bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-300
              bg-clip-text text-transparent"
            >
              ABOUT US
            </motion.h1>

            <motion.div
              initial={{ width: 0 }}
              animate={heroInView ? { width: "120px" } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="
              h-1 rounded-full mb-8
              bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-300
            "
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mx-auto max-w-3xl text-2xl text-slate-300 font-mono font-semibold"
            >
              Where Data Meets Vision
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div
              className="
              bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12
              hover:shadow-[0_0_30px_rgba(52,211,153,0.1)] transition-all duration-300
            "
            >
              <p className="text-slate-300 font-mono text-lg leading-relaxed text-center">
                <span className="text-emerald-400 font-bold">Nexgen</span> is
                the recognized Data Science Community of{" "}
                <span className="text-emerald-400 font-bold">
                  Meghnad Saha Institute of Technology
                </span>
                . We are a student-driven platform created to cultivate and
                encourage a deep-rooted interest in data-centric innovation
                across the campus. Our community unites undergraduates,
                postgraduates, researchers, and faculty who are passionate about
                data science, machine learning, artificial intelligence, and
                analytical thinking. Through workshops, expert talks,
                hackathons, and collaborative projects, we foster a vibrant
                ecosystem where data meets vision and innovation thrives.
              </p>
            </div>
          </motion.div>

          <div
            ref={gridRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={gridInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="lg:col-span-2 lg:row-span-2 group"
            >
              <Card className="h-full bg-white/5 border-white/10 backdrop-blur-md overflow-hidden hover:border-emerald-500/50 transition-all duration-300 cursor-pointer p-0">
                <div className="relative h-full min-h-[400px] bg-[url('/about/image1.jpg')] bg-cover bg-center group-hover:scale-105 transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E]/90 via-[#1E1E1E]/30 to-transparent" />
                  <div className="absolute inset-0 flex items-end p-8">
                    <div className="text-white relative z-10">
                      <h3 className="font-mono font-bold text-2xl mb-2 text-emerald-400">
                        Community Events
                      </h3>
                      <p className="font-mono text-sm text-slate-300">
                        Bringing together passionate data enthusiasts
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Medium Card 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={gridInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="lg:col-span-2 group"
            >
              <Card className="h-full bg-white/5 border-white/10 backdrop-blur-md overflow-hidden hover:border-emerald-500/50 transition-all duration-300 cursor-pointer p-0">
                <div className="relative h-full min-h-[200px] bg-[url('/about/image2.jpg')] bg-cover bg-center group-hover:scale-105 transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E]/90 via-[#1E1E1E]/30 to-transparent" />
                  <div className="absolute inset-0 flex items-end p-6">
                    <div className="text-white relative z-10">
                      <h3 className="font-mono font-bold text-xl mb-2 text-emerald-400">
                        Workshops & Sessions
                      </h3>
                      <p className="font-mono text-sm text-slate-300">
                        Hands-on learning experiences
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Small Card 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={gridInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="group"
            >
              <Card className="h-full bg-white/5 border-white/10 backdrop-blur-md overflow-hidden hover:border-emerald-500/50 transition-all duration-300 cursor-pointer p-0">
                <div className="relative h-full min-h-[200px] bg-[url('/about/image3.jpg')] bg-cover bg-center group-hover:scale-105 transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E]/90 via-[#1E1E1E]/30 to-transparent" />
                  <div className="absolute inset-0 flex items-end p-6">
                    <div className="text-white relative z-10">
                      <h3 className="font-mono font-bold text-lg mb-2 text-emerald-400">
                        Hackathons
                      </h3>
                      <p className="font-mono text-sm text-slate-300">
                        Innovation challenges
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Small Card 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={gridInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="group"
            >
              <Card className="h-full bg-white/5 border-white/10 backdrop-blur-md overflow-hidden hover:border-emerald-500/50 transition-all duration-300 cursor-pointer p-0">
                <div className="relative h-full min-h-[200px] bg-[url('/about/image4.jpg')] bg-cover bg-center group-hover:scale-105 transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E]/90 via-[#1E1E1E]/30 to-transparent" />
                  <div className="absolute inset-0 flex items-end p-6">
                    <div className="text-white relative z-10">
                      <h3 className="font-mono font-bold text-lg mb-2 text-emerald-400">
                        Expert Talks
                      </h3>
                      <p className="font-mono text-sm text-slate-300">
                        Industry insights
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* What We Do Section - Integrated as a Feature Grid */}
          <section ref={whatWeDoRef} className="max-w-7xl mx-auto mb-32">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={whatWeDoInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-center text-4xl md:text-5xl font-mono font-bold mb-16 text-white tracking-widest"
            >
              WHAT <span className="text-emerald-400">WE DO</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "WORKSHOPS",
                  desc: "Hands-on sessions in Data Science, ML, and Analytics tools.",
                  icon: Code2,
                  delay: 0.3,
                },
                {
                  title: "EXPERT TALKS",
                  desc: "Insightful sessions with industry leaders and tech innovators.",
                  icon: Mic2,
                  delay: 0.4,
                },
                {
                  title: "HACKATHONS",
                  desc: "Competitive coding and real-world problem solving challenges.",
                  icon: Trophy,
                  delay: 0.5,
                },
                {
                  title: "PROJECTS",
                  desc: "Collaborative research and development in cutting-edge tech.",
                  icon: Cpu,
                  delay: 0.6,
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={whatWeDoInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: item.delay, duration: 0.6 }}
                >
                  <Card className="h-full bg-white/5 border-white/10 backdrop-blur-md p-8 hover:border-emerald-500/50 hover:bg-white/10 transition-all duration-500 group">
                    <item.icon className="h-10 w-10 text-emerald-400 mb-6 group-hover:scale-110 transition-transform duration-500" />
                    <h3 className="font-mono font-bold text-xl mb-2 text-white group-hover:text-emerald-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 font-mono text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Who We Serve Section - Featured Focus Card */}
          <section ref={whoWeServeRef} className="max-w-5xl mx-auto mb-32">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={whoWeServeInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-center text-4xl md:text-5xl font-mono font-bold mb-16 text-white tracking-widest"
            >
              WHO <span className="text-emerald-400">WE SERVE</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={whoWeServeInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-3xl opacity-50 group-hover:opacity-100 transition-opacity" />
              <Card className="relative bg-white/5 border-white/10 backdrop-blur-xl p-10 md:p-20 overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Users2 size={240} className="text-emerald-400" />
                </div>

                <div className="relative z-10 max-w-2xl">
                  <p className="text-slate-300 font-mono text-xl md:text-2xl leading-relaxed">
                    Our community welcomes all members of{" "}
                    <Link
                      href="https://msit.edu.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 font-bold italic"
                    >
                      Meghnad Saha Institute of Technology
                    </Link>
                    . From curious newcomers to seasoned researchers, we provide
                    a{" "}
                    <Link
                      href="/team"
                      className="text-white font-bold tracking-tight"
                    >
                      supportive space
                    </Link>{" "}
                    for anyone eager to collaborate, grow, and shape the future
                    of data.
                  </p>

                  <div className="mt-12 flex flex-wrap gap-4">
                    {[
                      "Undergraduates",
                      "Researchers",
                      "Faculty",
                      "Innovators",
                    ].map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-emerald-400 font-mono text-sm"
                      >
                        # {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          </section>

          {/* What We Offer Section - Feature List */}
          <section ref={whatWeOfferRef} className="max-w-7xl mx-auto mb-32">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={whatWeOfferInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-center text-4xl md:text-5xl font-mono font-bold mb-20 text-white tracking-widest"
            >
              WHAT <span className="text-emerald-400">WE OFFER</span>
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={whatWeOfferInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="space-y-8"
              >
                {[
                  {
                    label: "Hands-on Practical Experience",
                    sub: "Real-world projects that build industry-standard portfolios.",
                    icon: Presentation,
                  },
                  {
                    label: "Professional Mentorship",
                    sub: "Guidance from accomplished alumni and industry experts.",
                    icon: GraduationCap,
                  },
                  {
                    label: "Exclusive Network",
                    sub: "Connections to a vibrant ecosystem of data practitioners.",
                    icon: Network,
                  },
                ].map((offer, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="flex-shrink-0 h-14 w-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-emerald-500/10 group-hover:border-emerald-500/50 transition-all duration-500">
                      <offer.icon className="h-7 w-7 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-mono font-bold text-xl text-white mb-2 group-hover:text-emerald-300 transition-colors">
                        {offer.label}
                      </h4>
                      <p className="font-mono text-slate-400 leading-relaxed">
                        {offer.sub}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={whatWeOfferInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="relative h-[400px] rounded-3xl overflow-hidden border border-white/10 group shadow-[0_0_30px_rgba(52,211,153,0.1)]"
              >
                <div className="absolute inset-0 bg-[url('/about/offer-bg.jpg')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-transparent to-black/60" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8 backdrop-blur-md bg-white/5 rounded-2xl border border-white/10 group-hover:border-emerald-500/30 transition-all duration-500">
                    <p className="font-mono text-3xl font-bold text-white tracking-widest uppercase mb-4">
                      Elevate Your Career
                    </p>
                    <div className="h-1.5 w-24 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto rounded-full" />
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* How to Get Involved Section */}
          {/* <section ref={getInvolvedRef} className="max-w-4xl mx-auto mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={getInvolvedInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.8, duration: 0.6 }}
              className="text-center text-4xl font-mono font-bold mb-6 text-white"
            >
              HOW TO GET INVOLVED
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={getInvolvedInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.9, duration: 0.6 }}
              className="text-slate-300 font-mono text-lg leading-relaxed text-center mb-8"
            >
              Stay connected by following us on LinkedIn for the latest updates on
              events, workshops, and opportunities. If you&apos;re interested in
              contributing, collaborating, or simply learning more, feel free to
              reach out via our contact page or send us a message anytime.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={getInvolvedInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 2.0, duration: 0.6 }}
              className="flex justify-center gap-6"
            >
              <Link
                href="https://linkedin.com/company/nexgen"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors font-mono"
              >
                <Linkedin className="h-5 w-5" />
                Follow on LinkedIn
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors font-mono"
              >
                <Mail className="h-5 w-5" />
                Contact Us
              </Link>
            </motion.div>
          </section> */}
        </section>
      </div>
    </div>
  );
};

export default Page;
