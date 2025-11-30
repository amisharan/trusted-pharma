"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";

const newsItems = [
    {
        date: "Nov 1, 2025",
        title: "New State-of-the-Art Manufacturing Facility",
        excerpt:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Doloremque, architecto ipsum.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    },
    {
        date: "Oct 15, 2025",
        title: "Expansion into European Markets",
        excerpt:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Doloremque, architecto ipsum.",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    },
];

export default function NewsSection() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">
                            Latest <span className="text-[#00aaff]">News & Updates</span>
                        </h2>
                        <p className="text-gray-500">
                            Stay informed about our recent developments
                        </p>
                    </div>
                    <Link
                        href="/news"
                        className="hidden md:flex items-center gap-2 text-[#00aaff] font-semibold hover:gap-3 transition-all"
                    >
                        View All News <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Featured News Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative rounded-2xl overflow-hidden group cursor-pointer h-[400px]"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
                            alt="Featured News"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-8">
                            <span className="bg-[#00aaff] text-white px-3 py-1 rounded-full text-xs font-bold mb-4 inline-block">
                                Featured
                            </span>
                            <h3 className="text-2xl font-bold text-white mb-2">
                                Top Pharma Stories June 2025
                            </h3>
                            <p className="text-gray-300 mb-4 line-clamp-2">
                                Discover the latest breakthroughs and headlines shaping the pharmaceutical industry this month.
                            </p>
                            <span className="text-white/80 text-sm flex items-center gap-2">
                                <Calendar className="w-4 h-4" /> June 12, 2025
                            </span>
                        </div>
                    </motion.div>

                    {/* Side News List */}
                    <div className="flex flex-col gap-6">
                        {newsItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="flex gap-6 bg-white p-4 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow group"
                            >
                                <div className="w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <span className="text-gray-400 text-xs flex items-center gap-1 mb-2">
                                        <Calendar className="w-3 h-3" /> {item.date}
                                    </span>
                                    <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#00aaff] transition-colors">
                                        {item.title}
                                    </h4>
                                    <p className="text-gray-500 text-sm line-clamp-2 mb-3">
                                        {item.excerpt}
                                    </p>
                                    <Link
                                        href="#"
                                        className="text-[#00aaff] text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all"
                                    >
                                        Read more <ArrowRight className="w-3 h-3" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="mt-8 md:hidden text-center">
                    <Link
                        href="/news"
                        className="inline-flex items-center gap-2 text-[#00aaff] font-semibold"
                    >
                        View All News <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
