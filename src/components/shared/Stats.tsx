"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const StatItem = ({ value, label, suffix = "" }: { value: number; label: string; suffix?: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = value;
            const duration = 2000;
            const increment = end / (duration / 16);

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);

            return () => clearInterval(timer);
        }
    }, [isInView, value]);

    return (
        <div ref={ref} className="flex flex-col items-center text-center">
            <div className="text-3xl md:text-5xl font-mono font-bold text-emerald-400 mb-1">
                {count}{suffix}
            </div>
            <div className="text-[10px] md:text-xs font-mono text-slate-400 uppercase tracking-[0.2em]">
                {label}
            </div>
        </div>
    );
};

const Stats = () => {
    return (
        <section className="py-16 relative z-10">
            <div className="container mx-auto px-4 flex justify-center">
                <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 border border-white/10 py-10 md:py-12 px-6 backdrop-blur-md bg-white/5 rounded-[2rem] shadow-2xl">
                    <StatItem value={250} label="Community Members" suffix="+" />
                    <StatItem value={10} label="Events Hosted" suffix="+" />
                    <StatItem value={3} label="Expert Sessions" />
                </div>
            </div>
        </section>
    );
};

export default Stats;
