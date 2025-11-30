"use client";

import { motion } from "framer-motion";
import { Eye, Target, FlaskConical, Award } from "lucide-react";
import Image from "next/image";

export default function ExcellenceSection() {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                 
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2080&auto=format&fit=crop"
                                alt="Pharmaceutical Research"
                                className="w-full h-[500px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                       
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg flex items-center gap-3 max-w-[200px]"
                            >
                                <div className="bg-blue-100 p-2 rounded-full">
                                    <FlaskConical className="w-6 h-6 text-[#00aaff]" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-semibold">Research</p>
                                    <p className="text-sm font-bold text-gray-800">Advanced Labs</p>
                                </div>
                            </motion.div>

                           
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="absolute top-6 right-6 bg-[#00aaff]/90 backdrop-blur-md p-4 rounded-xl shadow-lg flex items-center gap-3"
                            >
                                <div className="bg-white/20 p-2 rounded-full">
                                    <Award className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-xs text-white/80 font-semibold">Award Winning</p>
                                    <p className="text-sm font-bold text-white">Top Pharma 2024</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                   
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h4 className="text-[#00aaff] font-bold text-sm uppercase tracking-wider mb-2">
                                Excellence in Global Healthcare
                            </h4>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Leading pharmaceutical innovation for over 25 years
                            </h2>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                We are committed to improving global health by delivering affordable, high-quality pharmaceutical products that meet the highest international standards.
                            </p>
                        </motion.div>

                        <div className="space-y-6">
                           
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="bg-blue-50 p-6 rounded-xl border border-blue-100 hover:shadow-md transition-shadow flex gap-4"
                            >
                                <div className="bg-[#00aaff] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Target className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        To improve global health by delivering affordable, high-quality pharmaceutical products that meet the highest international standards.
                                    </p>
                                </div>
                            </motion.div>

                          
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex gap-4"
                                 style={{ backgroundImage: "url('/assets/bg3.jpeg')" }}
                            >
                                <div className="bg-[#00aaff] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Eye className="w-6 h-6 text-white" />
                                </div>
                                <div >
                                    <h3 className="text-xl font-bold text-gray-900 mb-2" >Our Vision</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed ">
                                        
                                        To be a globally recognized pharmaceutical company known for innovation, quality, and integrity.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
