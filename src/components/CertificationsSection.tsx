"use client";

import { motion } from "framer-motion";
import { CheckCircle, Globe, ShieldCheck, Leaf } from "lucide-react";

const certifications = [
    {
        icon: ShieldCheck,
        title: "GMP",
        subtitle: "Good Manufacturing Practice",
    },
    {
        icon: CheckCircle,
        title: "ISO 9001",
        subtitle: "Quality Management",
    },
    {
        icon: Globe,
        title: "WHO - GMP",
        subtitle: "World Health Organisation",
    },
    {
        icon: Leaf,
        title: "ISO 14001",
        subtitle: "Environment Management",
    },
];

export default function CertificationsSection() {
    return (
        <section className="relative py-16 bg-gray-50 overflow-hidden">
           
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: "url('/assets/bg1.jpg')" }}
            />
           
            <div className="absolute inset-0 bg-white/40 z-0" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        Certified & <span className="text-[#00aaff]">Accredited</span>
                    </h2>
                    <div className="w-20 h-1 bg-[#00aaff] mx-auto mt-4 rounded-full" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="relative p-8 rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-100 flex flex-col items-center text-center group overflow-hidden"
                        >
                            
                            <div
                                className="absolute inset-0 bg-cover bg-center z-0"
                                style={{ backgroundImage: "url('/assets/bg3.jpeg')" }}
                            />
                            <div className="absolute inset-0 bg-white/40 z-0" />

                            <div className="relative z-10 flex flex-col items-center">
                                <div className="bg-blue-50 p-4 rounded-full mb-4 group-hover:bg-[#00aaff] transition-colors duration-300">
                                    <cert.icon className="w-8 h-8 text-[#00aaff] group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.title}</h3>
                                <p className="text-gray-500 text-sm">{cert.subtitle}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
