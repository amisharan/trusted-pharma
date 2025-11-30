"use client";

import { motion } from "framer-motion";

export default function CareersHero() {
    return (
        <section className="relative h-[300px] flex items-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/assets/pharmabg.jpeg')" }}
            >
                <div className="absolute inset-0 bg-black/60" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Join Our Team
                    </h1>
                    <p className="text-lg text-gray-200 max-w-2xl">
                        Build your career with a global leader in pharmaceutical innovation.
                        We're looking for passionate professionals to join our mission.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
