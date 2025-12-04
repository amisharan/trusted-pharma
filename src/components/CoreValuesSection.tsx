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
                            className="relative p-8 rounded-xl text-center overflow-hidden group 
                                       border border-transparent hover:border-gray-200 
                                       shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                         
                            <div
                                className="absolute inset-0 bg-cover bg-center rounded-xl 
                                           group-hover:scale-105 transition-all duration-500"
                                style={{
                                    backgroundImage: "url('/assets/bg6.png')",
                                }}
                            ></div>

                          
                            <div className="absolute inset-0 bg-white/85 group-hover:bg-white/60 transition-all duration-300"></div>

                         
                            <div className="relative z-10">
                                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                                    <value.icon className="w-7 h-7 text-[#00aaff]" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
