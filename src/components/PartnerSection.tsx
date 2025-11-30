"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users } from "lucide-react";
import Link from "next/link";

export default function PartnerSection() {
    return (
        <section className="py-24 bg-white text-center">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <Users className="w-8 h-8 text-[#00aaff]" />
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Partner <span className="text-[#00aaff]">With Us</span>
                    </h2>

                    <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                        Join our global network of distributors and healthcare partners. We're looking for dedicated partners to help us deliver quality healthcare solutions worldwide.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/distribution"
                            className="bg-[#00aaff] hover:bg-[#0088cc] text-white px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-200 hover:shadow-xl"
                        >
                            View Distribution Network
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                            href="/contact"
                            className="border border-gray-300 hover:border-[#00aaff] text-gray-700 hover:text-[#00aaff] px-8 py-3 rounded-full font-semibold transition-all hover:bg-blue-50"
                        >
                            Contact Us
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
