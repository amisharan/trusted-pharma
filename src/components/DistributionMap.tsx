"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";

export default function DistributionMap() {
    return (
        <section className="py-20 bg-white">
            <div
                className="container mx-auto px-4 text-center h-[400px] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/assets/bg4.jpg')" }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <div className="bg-[#00aaff] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Globe className="w-8 h-8 text-white" />
                    </div>

                    <h2 className="text-3xl font-bold text-[#00aaff] mb-4">
                        Interactive Distribution Map
                    </h2>

                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Our distribution network spans across continents. Use the filters below to find distributors in your region.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
