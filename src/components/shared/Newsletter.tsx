"use client";

import { ArrowRight } from "lucide-react";
import socials from "@/data/socials";

import Link from "next/link";

const Newsletter = () => {
    return (
        <section className="py-24 relative z-10 px-4">
            <div className="container mx-auto flex justify-center">
                <div className="relative w-full max-w-6xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-12 lg:p-16">
                    {/* Decorative elements */}
                    <div className="absolute -top-24 -right-24 size-96 bg-emerald-500/10 blur-[100px]" />
                    <div className="absolute -bottom-24 -left-24 size-96 bg-teal-500/10 blur-[100px]" />

                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-mono font-bold text-white mb-6 leading-tight">
                                READY TO <br />
                                <span className="text-emerald-400">CONNECT?</span>
                            </h2>
                            <p className="text-slate-300 font-mono text-base md:text-lg max-w-md mx-auto lg:mx-0 leading-relaxed">
                                Join our community of over 250+ data enthusiasts and stay updated with upcoming workshops and hackathons.
                            </p>
                        </div>

                        <div className="flex flex-col gap-8 items-center lg:items-end">
                            <Link
                                href={socials.whatsapp}
                                target="_blank"
                                className="group relative w-full sm:w-auto"
                            >
                                <div className="flex items-center gap-5 px-8 py-6 rounded-[1.5rem] bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-500 hover:border-emerald-500/50 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(52,211,153,0.1)] group-active:scale-95">
                                    <div className="size-12 flex items-center justify-center rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 group-hover:border-[#25D366]/50 transition-all duration-500">
                                        <svg
                                            viewBox="0 0 24 24"
                                            className="size-8 fill-[#25D366]"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                        </svg>
                                    </div>
                                    <div className="text-left">
                                        <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-1 group-hover:translate-x-1 transition-transform duration-500">
                                            Join Discussion
                                        </div>
                                        <div className="text-2xl font-mono font-bold text-white group-hover:text-emerald-400 transition-colors duration-500">
                                            WHATSAPP COMMUNITY
                                        </div>
                                    </div>
                                    <ArrowRight className="size-6 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-2 transition-all duration-500 ml-4 hidden md:block" />
                                </div>
                            </Link>

                            <div className="flex flex-wrap gap-4 opacity-70 justify-center lg:justify-end">
                                {["#DataScience", "#ML", "#AI", "#Innovation"].map(tag => (
                                    <span key={tag} className="text-xs font-mono text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full bg-emerald-500/5 hover:bg-emerald-500/10 transition-colors cursor-default">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
