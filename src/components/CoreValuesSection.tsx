"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Users, Lightbulb, HeartHandshake } from "lucide-react";

const values = [
    {
        icon: ShieldCheck,
        title: "Quality",
        description: "Uncompromising commitment to product quality and safety",
    },
    {
        icon: Users,
        title: "Integrity",
        description: "Ethical business practices and transparent operations",
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description: "Continuous improvement and scientific advancement",
    },
    {
        icon: HeartHandshake,
        title: "Accessibility",
        description: "Making healthcare affordable and available to all",
    },
];

export default function CoreValuesSection() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Our <span className="text-[#00aaff]">Core Values</span>
                    </h2>
                    <p className="text-gray-600">
                        These values guide everything we do
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gray-50 p-8 rounded-xl text-center hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100"
                        >
                            <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6">
                                <value.icon className="w-7 h-7 text-[#00aaff]" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {value.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
