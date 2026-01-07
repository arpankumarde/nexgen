// "use client";

// import * as React from "react";
// import {
//   Activity,
//   ArrowRight,
//   BarChart,
//   Plug,
//   Sparkles,
//   Zap,
// } from "lucide-react";

// import { motion, useAnimation, useInView } from "framer-motion";
// import { Button } from "@/components/ui/button";

// const labels = [
//   { icon: Sparkles, label: "Predictive Analytics" },
//   { icon: Plug, label: "Data Engineering" },
//   { icon: Activity, label: "Natural Language Processing" },
// ];

// const features = [
//   {
//     icon: BarChart,
//     label: "Advanced Analytics",
//     description:
//       "Gain deeper insights from your data with our cutting-edge predictive models.",
//   },
//   {
//     icon: Zap,
//     label: "Intelligent Automation",
//     description:
//       "Streamline your processes with AI-powered automation solutions.",
//   },
//   {
//     icon: Activity,
//     label: "Real-time Insights",
//     description:
//       "Make informed decisions faster with our real-time data processing capabilities.",
//   },
// ];

// const Hero = () => {
//   const controls = useAnimation();
//   const ref = React.useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.1 });

//   React.useEffect(() => {
//     if (isInView) {
//       controls.start("visible");
//     }
//   }, [controls, isInView]);

//   const titleWords = [
//     "WE",
//     "PLAY",
//     "WITH",
//     "THE",
//     "OIL",
//     "OF",
//     "THE",
//     "21ST",
//     "CENTURY",
//   ];

//   return (
//     <div className="container mx-auto px-4 min-h-screen bg-background">
//       <main>
//         <section className="container py-24">
//           <div className="flex flex-col items-center text-center">
//             <motion.h1
//               initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
//               animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="relative font-mono text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl mx-auto leading-tight"
//             >
//               {titleWords.map((text, index) => (
//                 <motion.span
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{
//                     delay: index * 0.15,
//                     duration: 0.6,
//                   }}
//                   className="inline-block mx-2 md:mx-4"
//                 >
//                   {text}
//                 </motion.span>
//               ))}
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1.2, duration: 0.6 }}
//               className="mx-auto mt-8 max-w-2xl text-xl text-foreground font-mono"
//             >
//               We empower businesses with cutting-edge AI solutions to transform
//               data into actionable insights.
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 1.8, duration: 0.6 }}
//               className="mt-12 flex flex-wrap justify-center gap-6"
//             >
//               {labels.map((feature, index) => (
//                 <motion.div
//                   key={feature.label}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{
//                     delay: 1.8 + index * 0.15,
//                     duration: 0.6,
//                     type: "spring",
//                     stiffness: 100,
//                     damping: 10,
//                   }}
//                   className="flex items-center gap-2 px-6"
//                 >
//                   <feature.icon className="h-5 w-5 text-primary" />
//                   <span className="text-sm font-mono">{feature.label}</span>
//                 </motion.div>
//               ))}
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{
//                 delay: 2.4,
//                 duration: 0.6,
//                 type: "spring",
//                 stiffness: 100,
//                 damping: 10,
//               }}
//             >
//               <Button size="lg" className="mt-12">
//                 VIEW EVENTS <ArrowRight className="ml-1 w-4 h-4" />
//               </Button>
//             </motion.div>
//           </div>
//         </section>

//         <section className="container" ref={ref}>
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{
//               delay: 3.0,
//               duration: 0.6,
//               type: "spring",
//               stiffness: 100,
//               damping: 10,
//             }}
//             className="text-center text-4xl font-mono font-bold mb-6"
//           >
//             Unlock the Power of AI
//           </motion.h2>
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 3.2, duration: 0.6 }}
//             className="grid md:grid-cols-3 max-w-6xl mx-auto"
//           >
//             {features.map((feature, index) => (
//               <motion.div
//                 key={feature.label}
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{
//                   delay: 3.2 + index * 0.2,
//                   duration: 0.6,
//                   type: "spring",
//                   stiffness: 100,
//                   damping: 10,
//                 }}
//                 className="flex flex-col items-center text-center p-8 bg-background border"
//               >
//                 <div className="mb-6 rounded-full bg-primary/10 p-4">
//                   <feature.icon className="h-8 w-8 text-primary" />
//                 </div>
//                 <h3 className="mb-4 text-xl font-mono font-bold">
//                   {feature.label}
//                 </h3>
//                 <p className="text-muted-foreground font-mono text-sm leading-relaxed">
//                   {feature.description}
//                 </p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default Hero;

"use client";

import * as React from "react";
import {
  Activity,
  ArrowRight,
  BarChart,
  Plug,
  Sparkles,
  Zap,
  Circle,
} from "lucide-react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
} from "framer-motion";
import { Button } from "@/components/ui/button";

/* ================= DATA ================= */

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
    description:
      "Automate workflows with AI-powered decision systems.",
  },
  {
    icon: Activity,
    label: "Real-time Insights",
    description:
      "Process streaming data and act instantly.",
  },
];

/* ================= NEURAL BACKGROUND ================= */

const NODE_COUNT = 24;
const SAFE_MARGIN = 6;

function NeuralBackground({
  mouseX,
  mouseY,
}: {
  mouseX: number;
  mouseY: number;
}) {
  const [nodes, setNodes] = React.useState<
    { x: number; y: number }[]
  >([]);

  React.useEffect(() => {
    const generated = Array.from({ length: NODE_COUNT }).map(() => ({
      x: SAFE_MARGIN + Math.random() * (100 - SAFE_MARGIN * 2),
      y: SAFE_MARGIN + Math.random() * (100 - SAFE_MARGIN * 2),
    }));
    setNodes(generated);
  }, []);

  // Don't render on server → prevents mismatch
  if (nodes.length === 0) return null;

  return (
    <div className="absolute inset-0 z-0">
      {nodes.map((node, i) => {
        const dx = mouseX - node.x;
        const dy = mouseY - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const active = dist < 16;

        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
            }}
            animate={{
              scale: active ? 1.6 : 1,
              opacity: active ? 0.9 : 0.45,
            }}
            transition={{ duration: 0.25 }}
          >
            <Circle
              size={active ? 14 : 10}
              strokeWidth={1.5}
              className="
                text-emerald-400
                drop-shadow-[0_0_14px_rgba(52,211,153,0.45)]
              "
            />
          </motion.div>
        );
      })}
    </div>
  );
}


/* ================= HERO ================= */

export default function Hero() {
  const mouseXpx = useMotionValue(0);
  const mouseYpx = useMotionValue(0);

  const mouseX = React.useRef(0);
  const mouseY = React.useRef(0);

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
      className="relative min-h-screen overflow-hidden bg-[#1E1E1E]"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.current = ((e.clientX - rect.left) / rect.width) * 100;
        mouseY.current = ((e.clientY - rect.top) / rect.height) * 100;
        mouseXpx.set(e.clientX);
        mouseYpx.set(e.clientY);
      }}
    >
      {/* Cursor Glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        style={{ background: glow }}
      />

      {/* Neural Nodes */}
      <NeuralBackground
        mouseX={mouseX.current}
        mouseY={mouseY.current}
      />

      {/* ================= CONTENT ================= */}
      <section className="relative z-10 container mx-auto px-4 py-28 text-center">
        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8 }}
          className="
            mx-auto max-w-5xl font-mono text-4xl font-bold leading-tight
            sm:text-5xl md:text-6xl lg:text-7xl
            bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-300
            bg-clip-text text-transparent
          "
        >
          {titleWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.14,
                duration: 0.6,
              }}
              className="inline-block mx-2"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* UNDERLINE */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "160px" }}
          transition={{ delay: 1.2 }}
          className="
            mx-auto mt-6 h-1 rounded-full
            bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-300
          "
        />

        {/* SUBTITLE */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="mx-auto mt-8 max-w-2xl
                     text-lg md:text-xl font-mono text-slate-300"
        >
          A data science community exploring intelligence, systems,
          and real-world impact.
        </motion.p>

        {/* LABELS */}
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
              <span className="text-sm font-mono text-white">
                {item.label}
              </span>
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
            size="lg"
            className="
              mt-14 font-mono
              bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600
            "
          >
            VIEW EVENTS <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="container mx-auto px-4 pb-32 relative z-10">
        <h2 className="mb-16 text-center text-3xl md:text-4xl
                       font-mono font-bold text-white">
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
                bg-white/5 backdrop-blur-md
                p-8 text-center
                hover:shadow-[0_0_30px_rgba(52,211,153,0.18)]
                transition-all duration-300
              "
            >
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center
                              rounded-full bg-emerald-500/10">
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
}

