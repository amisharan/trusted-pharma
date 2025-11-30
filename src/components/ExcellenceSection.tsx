"use client";

import { motion } from "framer-motion";
import { Eye, Target, Award, TrendingUp, Users } from "lucide-react";
import Image from "next/image";

export default function ExcellenceSection() {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4">

                {/* Heading */}
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                        Excellence in <span className="text-[#00aaff]">Global Healthcare</span>
                    </h2>

                    <p className="text-xl text-gray-600">
                        Leading pharmaceutical innovation for over 25 years
                    </p>
                    <div className="h-1 w-20 bg-gradient-to-r from-[#00aaff] to-blue-50 rounded-full mb-4" />
                </div>

                {/* Main Section */}
                <div className="flex flex-col lg:flex-row gap-12 items-start">

                    {/* LEFT — IMAGE SECTION */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="relative rounded-3xl shadow-2xl overflow-visible">
                            <img
                                src="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2080&auto=format&fit=crop"
                                alt="Pharmaceutical Research"
                                className="w-full h-[450px] object-cover"
                            />

                            {/* Stats Cards Overlapping */}
                            <div className="absolute -bottom-6 left-6 right-6 grid grid-cols-3 gap-4">

                                {/* Card 1 */}
                                <div className="bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg text-center transform hover:-translate-y-1 transition-transform duration-300">
                                    <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mx-auto -mt-6 shadow-md">
                                        <Award className="w-6 h-6 text-[#00aaff]" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">10+</h3>
                                    <p className="text-xs text-gray-600 font-medium">Years</p>
                                </div>

                                {/* Card 2 */}
                                <div className="bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg text-center transform hover:-translate-y-1 transition-transform duration-300">
                                    <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mx-auto -mt-6 shadow-md">
                                        <TrendingUp className="w-6 h-6 text-[#00aaff]" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">150+</h3>
                                    <p className="text-xs text-gray-600 font-medium">Products</p>
                                </div>

                                {/* Card 3 */}
                                <div className="bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg text-center transform hover:-translate-y-1 transition-transform duration-300">
                                    <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mx-auto -mt-6 shadow-md">
                                        <Users className="w-6 h-6 text-[#00aaff]" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">50+</h3>
                                    <p className="text-xs text-gray-600 font-medium">Countries</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT — TEXT CARDS */}
                    <div className="w-full lg:w-1/2 space-y-6">

                        {/* Mission Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-blue-50/50 p-8 rounded-3xl border border-blue-100 hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />

                            <div className="flex gap-6 relative z-10">
                                <div className="bg-[#00aaff] w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-200">
                                    <Target className="w-7 h-7 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
                                    <div className="h-1 w-12 bg-[#00aaff] rounded-full mb-4" />
                                    <p className="text-gray-600 leading-relaxed">
                                        To improve global health by delivering affordable, high-quality pharmaceutical
                                        products that meet the highest international standards. We are committed to
                                        making healthcare accessible to all while maintaining uncompromising quality
                                        and safety standards.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Vision Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="bg-blue-50/50 p-8 rounded-3xl border border-blue-100 hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />

                            <div className="flex gap-6 relative z-10">
                                <div className="bg-[#00aaff] w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-200">
                                    <Eye className="w-7 h-7 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
                                    <div className="h-1 w-12 bg-[#00aaff] rounded-full mb-4" />
                                    <p className="text-gray-600 leading-relaxed">
                                        To be a globally recognized pharmaceutical company known for innovation,
                                        quality, and integrity. We aspire to be the preferred partner for healthcare
                                        professionals and patients worldwide, continuously advancing the science of
                                        medicine.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}
