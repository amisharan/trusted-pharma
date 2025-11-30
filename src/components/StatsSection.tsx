"use client";

import { motion } from "framer-motion";

const stats = [
    { value: "150+", label: "Products" },
    { value: "50+", label: "Countries" },
    { value: "500+", label: "Employees" },
    { value: "10+", label: "Years" },
];

export default function StatsSection() {
    return (
        <section className="relative py-20 bg-[#001122] overflow-hidden">

            {/* Background Image FULL VISIBLE */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/assets/pharmahome.jpg')",
                }}
            />

            {/* Dark Overlay for readability */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Blue Glow Wave */}
            <div className="absolute inset-0 opacity-40 pointer-events-none">
                <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#00aaff] to-transparent blur-[120px]" />
            </div>

            {/* Grid Pattern */}
            <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                    backgroundImage:
                        "radial-gradient(#ffffff 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                }}
            />

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">
                                {stat.value}
                            </h3>
                            <p className="text-[#00aaff] font-medium uppercase tracking-wider text-sm">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}

                </div>
            </div>

        </section>
    );
}
