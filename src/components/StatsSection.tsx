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
            {/* Background Wave Effect */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#00aaff] to-transparent blur-[100px]" />
            </div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.05]"
                style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}
            />

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
                            <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
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
