"use client";

import { motion } from "framer-motion";

export default function DistributionHero() {
    return (
        <section className="relative h-[300px] flex items-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black/60" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Distribution Network
                    </h1>
                    <p className="text-lg text-gray-200 max-w-2xl">
                        Our global presence spans 45+ countries with a network of trusted distributors and partners.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
