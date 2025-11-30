"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function StorySection() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    {/* Text Content */}
                    <motion.div
                        className="w-full lg:w-1/2"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            Our <span className="text-[#00aaff]">Story</span>
                        </h2>
                        <div className="space-y-4 text-gray-600 leading-relaxed">
                            <p>
                                Founded in 2000, PharmaCo Healthcare Solutions has grown from a small pharmaceutical manufacturer to a globally recognized leader in quality healthcare products. Our commitment to excellence, innovation, and patient safety has remained unwavering throughout our journey.
                            </p>
                            <p>
                                Today, we operate state-of-the-art manufacturing facilities, employ over 500 dedicated professionals, and distribute our products to more than 45 countries worldwide. Our extensive portfolio includes over 150 pharmaceutical formulations across multiple therapeutic areas.
                            </p>
                            <p>
                                Every product that bears the PharmaCo name represents our promise of quality, safety, and efficacy. We invest heavily in research and development, quality assurance, and continuous improvement to ensure we deliver the best possible healthcare solutions to patients and healthcare professionals.
                            </p>
                        </div>
                    </motion.div>

                    {/* Images Collage */}
                    <motion.div
                        className="w-full lg:w-1/2"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="grid grid-cols-2 gap-4 h-[500px]">
                            <div className="col-span-1 h-full">
                                <div className="h-full rounded-2xl overflow-hidden relative shadow-lg">
                                    <img
                                        src="https://images.unsplash.com/photo-1563213126-a4273aed2016?q=80&w=2070&auto=format&fit=crop"
                                        alt="Lab Equipment"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="col-span-1 flex flex-col gap-4 h-full">
                                <div className="h-1/2 rounded-2xl overflow-hidden relative shadow-lg">
                                    <img
                                        src="https://images.unsplash.com/photo-1579165466741-7f35a4755657?q=80&w=2079&auto=format&fit=crop"
                                        alt="Scientist"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="h-1/2 rounded-2xl overflow-hidden relative shadow-lg">
                                    <img
                                        src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=1979&auto=format&fit=crop"
                                        alt="Medicine Vials"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
