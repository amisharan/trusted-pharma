"use client";

import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";

const locations = [
    { type: "Corporate Headquarter", city: "Mumbai, India", phone: "+91 8976564534" },
    { type: "Corporate Headquarter", city: "Mumbai, India", phone: "+91 8976564534" },
    { type: "Corporate Headquarter", city: "Mumbai, India", phone: "+91 8976564534" },
    { type: "Corporate Headquarter", city: "Mumbai, India", phone: "+91 8976564534" },
    { type: "Corporate Headquarter", city: "Mumbai, India", phone: "+91 8976564534" },
    { type: "Corporate Headquarter", city: "Mumbai, India", phone: "+91 8976564534" },
    { type: "Corporate Headquarter", city: "Mumbai, India", phone: "+91 8976564534" },
    { type: "Corporate Headquarter", city: "Mumbai, India", phone: "+91 8976564534" },
];

export default function LocationsGrid() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {locations.map((loc, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="relative rounded-2xl border border-gray-200 overflow-hidden"
                        >

                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: "url('/assets/blackwhitebg.jpg')" }}
                            ></div>


                            <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]"></div>


                            <div className="relative z-10 p-6">
                                <div className="bg-[#00aaff] w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                                    <MapPin className="w-5 h-5 text-white" />
                                </div>

                                <h3 className="font-bold text-gray-900 mb-3">
                                    {loc.type}
                                </h3>

                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-gray-800 text-sm">
                                        <MapPin className="w-4 h-4 text-gray-700" />
                                        <span>{loc.city}</span>
                                    </div>

                                    <div className="flex items-center gap-2 text-gray-800 text-sm">
                                        <Phone className="w-4 h-4 text-gray-700" />
                                        <span>{loc.phone}</span>
                                    </div>
                                </div>
                            </div>

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
