"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
    return (
        <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black/60" />
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        About BAYLE'S PHARMACEUTICAL
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
                        Leading the way in pharmaceutical innovation and quality healthcare solutions for over 25 years.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
