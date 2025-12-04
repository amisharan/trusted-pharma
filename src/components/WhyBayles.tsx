"use client";

import { motion } from "framer-motion";
import { Target } from "lucide-react";

const benefits = [
    {
        title: "Growth Opportunities",
        description: "Continuous learning and career advancement programs",
    },
    {
        title: "Growth Opportunities",
        description: "Continuous learning and career advancement programs",
    },
    {
        title: "Growth Opportunities",
        description: "Continuous learning and career advancement programs",
    },
    {
        title: "Growth Opportunities",
        description: "Continuous learning and career advancement programs",
    },
];

export default function WhyBayles() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Why BAYLE'S PHARMACEUTICAL?</h2>
                    <p className="text-gray-600">
                        We offer a dynamic work environment where innovation meets impact
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative rounded-2xl border border-gray-200 overflow-hidden text-center group"
                        >
                            {/* Background Image layer */}
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: "url('/assets/blackwhitebg.jpg')" }}
                            ></div>

                            {/* Optional softer overlay so bg is visible */}
                            <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]"></div>

                            {/* Content */}
                            <div className="relative z-10 p-8">
                                <div className="bg-[#00aaff] w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-md">
                                    <Target className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                                <p className="text-gray-800 text-sm leading-relaxed font-medium">
                                    {benefit.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
