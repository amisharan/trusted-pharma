"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Twitter, Instagram, MessageCircle } from "lucide-react";

export default function ContactForm() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">

                    {/* Contact Info Card (Left) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-gradient-to-br from-[#00aaff] to-[#0066cc] p-10 md:w-2/5 text-white relative overflow-hidden"
                    >
                        {/* Decorative Circles */}
                        <div className="absolute bottom-[-50px] right-[-50px] w-40 h-40 bg-white/10 rounded-full" />
                        <div className="absolute bottom-[20px] right-[20px] w-20 h-20 bg-white/10 rounded-full" />

                        <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
                        <p className="text-blue-100 mb-12">
                            Say something to start a live chat!
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <Phone className="w-6 h-6" />
                                <span>+91 612 3456 789</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <Mail className="w-6 h-6" />
                                <span>demo@gmail.com</span>
                            </div>
                            <div className="flex items-start gap-4">
                                <MapPin className="w-6 h-6 flex-shrink-0" />
                                <span>
                                    Lorem ipsum is simply dummy text of the printing
                                </span>
                            </div>
                        </div>

                        <div className="flex gap-4 mt-12">
                            <a href="#" className="bg-black/20 p-2 rounded-full hover:bg-black/40 transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="bg-black/20 p-2 rounded-full hover:bg-black/40 transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="bg-black/20 p-2 rounded-full hover:bg-black/40 transition-colors">
                                <MessageCircle className="w-5 h-5" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Form (Right) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="p-10 md:w-3/5 bg-white"
                    >
                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-600">First Name</label>
                                    <input
                                        type="text"
                                        className="w-full border-b border-gray-300 focus:border-[#00aaff] outline-none py-2 transition-colors"
                                        placeholder="John"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-600">Last Name</label>
                                    <input
                                        type="text"
                                        className="w-full border-b border-gray-300 focus:border-[#00aaff] outline-none py-2 transition-colors"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-600">Email</label>
                                    <input
                                        type="email"
                                        className="w-full border-b border-gray-300 focus:border-[#00aaff] outline-none py-2 transition-colors"
                                        placeholder="Email@gmail.com"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-600">Phone Number</label>
                                    <input
                                        type="tel"
                                        className="w-full border-b border-gray-300 focus:border-[#00aaff] outline-none py-2 transition-colors"
                                        placeholder="+1 012 3456 789"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-600">Message</label>
                                <textarea
                                    className="w-full border-b border-gray-300 focus:border-[#00aaff] outline-none py-2 transition-colors resize-none"
                                    placeholder="Write your message.."
                                    rows={1}
                                />
                            </div>

                            <div className="flex justify-end pt-4">
                                <button className="bg-[#00aaff] hover:bg-[#0088cc] text-white px-8 py-3 rounded shadow-lg shadow-blue-500/30 transition-all transform hover:-translate-y-0.5">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
