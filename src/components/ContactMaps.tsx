"use client";

import { motion } from "framer-motion";

export default function ContactMaps() {
    const locations = [
        {
            city: "New York",
            image: "https://images.unsplash.com/photo-1568515387631-8b650bbcdb58?q=80&w=800&auto=format&fit=crop", // Placeholder for map
        },
        {
            city: "London",
            image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800&auto=format&fit=crop", // Placeholder for map
        },
        {
            city: "Tokyo",
            image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop", // Placeholder for map
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {locations.map((loc, index) => (
                        <motion.div
                            key={loc.city}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative rounded-2xl overflow-hidden h-[300px] shadow-lg group"
                        >
                            <img
                                src={loc.image}
                                alt={`${loc.city} Map`}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                                <h3 className="text-2xl font-bold text-white">{loc.city}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
