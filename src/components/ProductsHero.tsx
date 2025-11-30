"use client";

import { motion } from "framer-motion";

export default function ProductsHero() {
    return (
        <section className="relative h-[300px] flex items-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=1979&auto=format&fit=crop')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black/70" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Our Products
                    </h1>
                    <p className="text-lg text-gray-200 max-w-2xl">
                        Explore our comprehensive range of pharmaceutical formulations, rigorously tested and manufactured to the highest quality standards.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
