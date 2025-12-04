"use client";

// import { motion } from "framer-motion";

export default function DownloadsHero() {
    return (
        <section className="relative h-[300px] flex items-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=1920&auto=format&fit=crop')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black/60" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div
                // initial={{ opacity: 0, y: 20 }}
                // animate={{ opacity: 1, y: 0 }}
                // transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Downloads
                    </h1>
                    <p className="text-lg text-gray-200 max-w-2xl">
                        Access product catalogs, certificates, and technical documentation.
                    </p>
                </div>
            </div>
        </section>
    );
}
