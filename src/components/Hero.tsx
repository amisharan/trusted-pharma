"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FlaskConical } from "lucide-react";


export default function Hero() {
    return (
        <>
            <div className="relative h-100vh w-full bg-[#0a0a0a]">
                {/* Background Image Overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-40"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1563213126-a4273aed2016?q=80&w=2070&auto=format&fit=crop')",
                    }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0a0a0a]" />

                <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center pt-20 pb-40">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 border border-[#00aaff]/30 bg-[#00aaff]/10 px-4 py-2 rounded-full mb-8 backdrop-blur-sm"
                    >
                        <FlaskConical className="w-4 h-4 text-[#00aaff]" />
                        <span className="text-white text-sm font-medium">
                            Trusted Healthcare Partner Since 1998
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
                    >
                        Trusted Pharma <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00aaff] to-[#006699] drop-shadow-[0_0_15px_rgba(0,170,255,0.5)]">
                            Solutions for Better
                        </span>{" "}
                        <br />
                        <span className="text-[#00aaff] drop-shadow-[0_0_20px_rgba(0,170,255,0.8)]">
                            Health
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-gray-300 text-lg md:text-xl max-w-2xl mb-10"
                    >
                        Rigorously tested pharmaceutical formulations — trusted worldwide.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <button className="bg-[#00aaff] hover:bg-[#0088cc] text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(0,170,255,0.3)] hover:shadow-[0_0_30px_rgba(0,170,255,0.5)]">
                            Explore Products
                            <ArrowUpRight className="w-4 h-4" />
                        </button>
                        <button className="border border-gray-600 hover:border-[#00aaff] text-white px-8 py-3 rounded-full font-semibold transition-all hover:bg-[#00aaff]/10">
                            Download Catalog
                        </button>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="absolute bottom-10 left-1/2 -translate-x-1/2"
                    >
                        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-1">
                            <motion.div
                                animate={{ y: [0, 12, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                                className="w-1 h-1 bg-[#00aaff] rounded-full"
                            />
                        </div>
                    </motion.div>

                </div>

            </div>
            {/* FeatureCards removed from here and placed in page.tsx */}
        </>
    );
}
