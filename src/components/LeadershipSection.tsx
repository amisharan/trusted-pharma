"use client";

import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import Image from "next/image";

const leaders = [
    {
        name: "Dr. Rajesh Kumar",
        role: "Chief Executive Officer",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
        bio: "With over 25 years in the pharmaceutical industry, Dr. Kumar leads our vision to deliver affordable, quality healthcare globally.",
    },
    {
        name: "Dr. Sarah Chen",
        role: "Chief Scientific Officer",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
        bio: "Dr. Chen oversees our R&D initiatives, driving innovation in new drug discovery and formulation development.",
    },
    {
        name: "Mr. James Wilson",
        role: "Chief Operations Officer",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop",
        bio: "Mr. Wilson ensures operational excellence across our global manufacturing and supply chain networks.",
    },
];

export default function LeadershipSection() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Leadership <span className="text-[#00aaff]">Team</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl">
                        Our experienced leadership team brings together decades of pharmaceutical industry expertise to guide our company's growth and innovation.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {leaders.map((leader, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow group"
                        >
                            <div className="h-64 overflow-hidden relative">
                                <img
                                    src={leader.image}
                                    alt={leader.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                                <p className="text-[#00aaff] font-medium mb-4 text-sm">{leader.role}</p>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                    {leader.bio}
                                </p>
                                <a href="#" className="inline-flex items-center justify-center w-8 h-8 rounded bg-[#0077b5] text-white hover:bg-[#006396] transition-colors">
                                    <Linkedin className="w-4 h-4" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
