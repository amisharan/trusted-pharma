"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

export default function MissionVisionSection() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Mission Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex gap-6 items-start hover:shadow-md transition-shadow"
                    >
                        <div className="bg-blue-50 p-4 rounded-xl flex-shrink-0">
                            <Target className="w-8 h-8 text-[#00aaff]" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
                            <p className="text-gray-600 leading-relaxed">
                                To improve global health by delivering affordable, high-quality pharmaceutical products that meet the highest international standards. We are committed to making healthcare accessible to all while maintaining uncompromising quality and safety standards.
                            </p>
                        </div>
                    </motion.div>

                    {/* Vision Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex gap-6 items-start hover:shadow-md transition-shadow"
                    >
                        <div className="bg-blue-50 p-4 rounded-xl flex-shrink-0">
                            <Eye className="w-8 h-8 text-[#00aaff]" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
                            <p className="text-gray-600 leading-relaxed">
                                To be a globally recognized pharmaceutical company known for innovation, quality, and integrity. We aspire to be the preferred partner for healthcare professionals and patients worldwide, continuously advancing the science of medicine.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
