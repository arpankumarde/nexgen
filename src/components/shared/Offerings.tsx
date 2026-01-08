"use client";

import { motion } from "framer-motion";
import {
    Code2,
    Terminal,
    Cpu,
    Globe,
    Layers,
    MousePointer2
} from "lucide-react";

const offerings = [
    {
        title: "Deep Learning",
        description: "Master neural networks and advanced AI architectures through peer-led research.",
        icon: Cpu,
        className: "md:col-span-2 md:row-span-2",
    },
    {
        title: "Data Engineering",
        description: "Build robust pipelines and distributed systems for scale.",
        icon: Layers,
        className: "md:col-span-1 md:row-span-1",
    },
    {
        title: "MLOps",
        description: "Productionizing ML models with automated workflows.",
        icon: Terminal,
        className: "md:col-span-1 md:row-span-1",
    },
    {
        title: "Open Source",
        description: "Contribute to cutting-edge tools used by thousands worldwide.",
        icon: Globe,
        className: "md:col-span-2 md:row-span-1",
    }
];

const Offerings = () => {
    return (
        <section className="py-24 relative z-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-mono font-bold text-white mb-4 uppercase tracking-tighter">
                        Community <span className="text-emerald-400">Ecosystem</span>
                    </h2>
                    <div className="h-1.5 w-24 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {offerings.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -8 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-emerald-500/30 hover:shadow-[0_20px_40px_-15px_rgba(52,211,153,0.1)] ${item.className}`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10 h-full flex flex-col">
                                <div className="mb-6 flex size-12 items-center justify-center rounded-2xl bg-white/5 border border-white/10 group-hover:border-emerald-500/50 transition-colors">
                                    <item.icon className="size-6 text-emerald-400" />
                                </div>
                                <h3 className="text-2xl font-mono font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-slate-400 font-mono text-sm leading-relaxed max-w-sm">
                                    {item.description}
                                </p>

                                <div className="mt-auto pt-8 opacity-0 group-hover:opacity-100 transition-opacity flex items-center text-emerald-400 font-mono text-xs font-bold uppercase tracking-widest gap-2">
                                    Explore Now <MousePointer2 className="size-3" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Offerings;
