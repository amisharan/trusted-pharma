"use client";

import { motion } from "framer-motion";

const stats = [
    { value: "10+", label: "Countries" },
    { value: "150+", label: "Distributors" },
    { value: "5", label: "Continents" },
    { value: "24/7", label: "Support" },
];

export default function GlobalReach() {
    return (
        <section className="py-20 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4">
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Global Reach</h2>
                    <p className="text-gray-600">
                        Our extensive distribution network ensures timely delivery of quality products worldwide
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative p-8 rounded-2xl text-center border overflow-hidden bg-cover bg-center"

                            style={{
                                backgroundImage: "url('/assets/bg6.png')",
                            }}
                        >
                            {/* Soft overlay for readability */}
                            <div className="absolute inset-0 bg-white/60 "></div>

                            {/* Content */}
                            <div className="relative z-10">
                                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                                    {stat.value}
                                </h3>
                                <p className="text-gray-700 font-medium">{stat.label}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
