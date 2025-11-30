"use client";

import { motion } from "framer-motion";

export default function GeneralApplication() {
    return (
        <section className="py-24 bg-white text-center">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        Don't See a Position That Fits?
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto mb-8">
                        We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
                    </p>
                    <button className="bg-[#00aaff] text-white px-8 py-3 rounded-full font-bold hover:bg-[#0099e6] transition-colors shadow-lg shadow-blue-200">
                        Submit General Application
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
