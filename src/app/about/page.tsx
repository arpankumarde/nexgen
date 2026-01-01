"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";

const Page = () => {
  const heroRef = useRef(null);
  const gridRef = useRef(null);
  const whoWeAreRef = useRef(null);
  const whatWeDoRef = useRef(null);
  const whoWeServeRef = useRef(null);
  const whatWeOfferRef = useRef(null);
  const getInvolvedRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.1 });
  const gridInView = useInView(gridRef, { once: true, amount: 0.1 });
  const whoWeAreInView = useInView(whoWeAreRef, { once: true, amount: 0.1 });
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
            ABOUT US
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mx-auto max-w-3xl text-2xl text-fuchsia-400 font-mono font-semibold"
          >
            Where Data Meets Vision
          </motion.p>
        </motion.div>

        {/* What is Nexgen Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-white/10 border border-border backdrop-blur-sm rounded-xl p-8 md:p-12">
            <p className="text-muted-foreground font-mono text-lg leading-relaxed text-center">
              <span className="text-fuchsia-400 font-semibold">Nexgen</span> is
              the recognized Data Science Community of{" "}
              <span className="text-fuchsia-400 font-semibold">
                Meghnad Saha Institute of Technology
              </span>
              . We are a student-driven platform created to cultivate and
              encourage a deep-rooted interest in data-centric innovation across
              the campus. Our community unites undergraduates, postgraduates,
              researchers, and faculty who are passionate about data science,
              machine learning, artificial intelligence, and analytical
              thinking. Through workshops, expert talks, hackathons, and
              collaborative projects, we foster a vibrant ecosystem where data
              meets vision and innovation thrives.
            </p>
          </div>
        </motion.div>

        {/* Bento Grid - Image Gallery */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto mb-20"
        >
          {/* Large Featured Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={gridInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="lg:col-span-2 lg:row-span-2 group"
          >
            <Card className="h-full bg-white/10 border-border backdrop-blur-sm overflow-hidden hover:border-primary/50 transition-all duration-300 cursor-pointer">
              <div className="relative h-full min-h-[400px] bg-[url('/about/image1.jpg')] bg-cover bg-center group-hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute inset-0 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="font-mono font-bold text-xl mb-2">
                      Community Events
                    </h3>
                    <p className="font-mono text-sm text-white/80">
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
            <Card className="h-full bg-white/10 border-border backdrop-blur-sm overflow-hidden hover:border-primary/50 transition-all duration-300 cursor-pointer">
              <div className="relative h-full min-h-[200px] bg-[url('/about/image2.jpg')] bg-cover bg-center group-hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute inset-0 flex items-end p-4">
                  <div className="text-white">
                    <h3 className="font-mono font-bold text-lg mb-1">
                      Workshops & Sessions
                    </h3>
                    <p className="font-mono text-xs text-white/80">
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
            <Card className="h-full bg-white/10 border-border backdrop-blur-sm overflow-hidden hover:border-primary/50 transition-all duration-300 cursor-pointer">
              <div className="relative h-full min-h-[200px] bg-[url('/about/image3.jpg')] bg-cover bg-center group-hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute inset-0 flex items-end p-4">
                  <div className="text-white">
                    <h3 className="font-mono font-bold text-base mb-1">
                      Hackathons
                    </h3>
                    <p className="font-mono text-xs text-white/80">
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
            <Card className="h-full bg-white/10 border-border backdrop-blur-sm overflow-hidden hover:border-primary/50 transition-all duration-300 cursor-pointer">
              <div className="relative h-full min-h-[200px] bg-[url('/about/image4.jpg')] bg-cover bg-center group-hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute inset-0 flex items-end p-4">
                  <div className="text-white">
                    <h3 className="font-mono font-bold text-base mb-1">
                      Expert Talks
                    </h3>
                    <p className="font-mono text-xs text-white/80">
                      Industry insights
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Who We Are Section */}
        <section ref={whoWeAreRef} className="max-w-4xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={whoWeAreInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="text-center text-4xl font-mono font-bold mb-6"
          >
            WHO WE ARE
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={whoWeAreInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="text-muted-foreground font-mono text-lg leading-relaxed text-center"
          >
            We are the recognized Data Science Community of{" "}
            <span className="text-fuchsia-400 font-semibold">
              Meghnad Saha Institute of Technology
            </span>{" "}
            — a student-driven platform created to cultivate and encourage a
            deep-rooted interest in data-centric innovation across the campus.
            Our community unites undergraduates, postgraduates, researchers, and
            faculty who are passionate about data science, machine learning,
            artificial intelligence, and analytical thinking.
          </motion.p>
        </section>

        {/* What We Do Section */}
        <section ref={whatWeDoRef} className="max-w-6xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={whatWeDoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="text-center text-4xl font-mono font-bold mb-6"
          >
            WHAT WE DO
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={whatWeDoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="text-muted-foreground font-mono text-lg leading-relaxed text-center max-w-4xl mx-auto"
          >
            We organize hands-on workshops covering Data Analysis, Data Science,
            Machine Learning, and Data visualization platforms. We also host
            expert talks and interactive sessions with industry leaders and
            alumni, and conduct hackathons and case competitions to foster
            practical, real-world problem-solving. Additionally, we facilitate
            study circles, mentorship opportunities, and collaborative project
            work.
          </motion.p>
        </section>

        {/* Who We Serve Section */}
        <section ref={whoWeServeRef} className="max-w-4xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={whoWeServeInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="text-center text-4xl font-mono font-bold mb-6"
          >
            WHO WE SERVE
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={whoWeServeInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="text-muted-foreground font-mono text-lg leading-relaxed text-center"
          >
            Our community welcomes all members of Meghnad Saha Institute of
            Technology — from newcomers curious about data science to seasoned
            learners pursuing research and career goals. Regardless of your
            skill level, you&apos;ll find a supportive space filled with
            resources, guidance, and like-minded peers eager to collaborate and
            grow together.
          </motion.p>
        </section>

        {/* What We Offer Section */}
        <section ref={whatWeOfferRef} className="max-w-6xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={whatWeOfferInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="text-center text-4xl font-mono font-bold mb-6"
          >
            WHAT WE OFFER
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={whatWeOfferInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.7, duration: 0.6 }}
            className="text-muted-foreground font-mono text-lg leading-relaxed text-center max-w-4xl mx-auto"
          >
            We offer a dynamic space to explore and advance in the field of data
            science, providing hands-on experience through practical projects
            and competitive events. You&apos;ll also gain connections with
            industry experts and accomplished alumni, along with mentorship and
            resources for internships, research, and career planning.
          </motion.p>
        </section>

        {/* How to Get Involved Section */}
        <section ref={getInvolvedRef} className="max-w-4xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={getInvolvedInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.8, duration: 0.6 }}
            className="text-center text-4xl font-mono font-bold mb-6"
          >
            HOW TO GET INVOLVED
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={getInvolvedInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.9, duration: 0.6 }}
            className="text-muted-foreground font-mono text-lg leading-relaxed text-center mb-8"
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
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-mono"
            >
              <Linkedin className="h-5 w-5" />
              Follow on LinkedIn
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-mono"
            >
              <Mail className="h-5 w-5" />
              Contact Us
            </Link>
          </motion.div>
        </section>
      </section>
    </div>
  );
};

export default Page;
