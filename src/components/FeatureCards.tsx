"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, Microscope, Package, Phone } from "lucide-react";
import Link from "next/link";

const features = [
    {
        icon: Package,
        title: "Our Products",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, architecto ipsum",
        href: "/products",
    },
    {
        icon: Microscope,
        title: "Research & Development",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, architecto ipsum",
        href: "/research",
    },
    {
        icon: FileText,
        title: "Downloads",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, architecto ipsum",
        href: "/downloads",
    },
    {
        icon: Phone,
        title: "Contact Us",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, architecto ipsum",
        href: "/contact",
    },
];

export default function FeatureCards() {
    return (
        <section className="relative z-10 -mt-24 pb-20 px-4">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 0 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-xl p-6 shadow-xl relative overflow-hidden group"
                        >
                            {/* Geometric Pattern Overlay */}
                            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-black to-transparent" />

                            <div className="bg-[#00aaff] w-12 h-12 rounded-lg flex items-center justify-center mb-6 text-white shadow-lg shadow-[#00aaff]/30">
                                <feature.icon className="w-6 h-6" />
                            </div>

                            <h3 className="text-[#1f2937] text-xl font-bold mb-3">
                                {feature.title}
                            </h3>

                            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                                {feature.description}
                            </p>

                            <Link
                                href={feature.href}
                                className="inline-flex items-center gap-2 text-sm font-semibold text-[#1f2937] group-hover:text-[#00aaff] transition-colors"
                            >
                                Learn More
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
