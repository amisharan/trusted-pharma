"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Distribution", href: "/distribution" },
    { name: "Careers", href: "/careers" },
    { name: "Downloads", href: "/downloads" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-transparent absolute top-10 left-0 w-full z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">

                <div className="flex items-center gap-2 md:gap-3">
                    <div className="relative w-10 h-10 md:w-12 md:h-12 bg-white rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                            src="/assets/bayles_logo.jpg"
                            alt="Bayle's Pharmaceutical Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-white font-bold text-sm md:text-lg leading-none">
                            BAYLE'S PHARMACEUTICAL
                        </span>
                        <span className="text-gray-400 text-[10px] md:text-xs font-bold">PRIVATE LIMITED</span>
                    </div>
                </div>

                {/* Mobile Menu Button (Right) */}
                <button
                    className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                    onClick={() => setIsOpen(true)}
                >
                    <Menu size={24} />
                </button>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-gray-300 hover:text-[#00aaff] text-sm font-medium transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <>
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsOpen(false)}
                                className="fixed inset-0 bg-black/80 z-50 md:hidden"
                            />

                            {/* Drawer */}
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "-100%" }}
                                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                className="fixed top-0 left-0 h-full w-[280px] bg-[#111827] z-50 md:hidden shadow-2xl border-r border-gray-800 flex flex-col"
                            >
                                <div className="p-6 flex justify-between items-center border-b border-gray-800">
                                    <div className="flex items-center gap-2">
                                        <div className="relative w-8 h-8 bg-white rounded overflow-hidden">
                                            <Image
                                                src="/assets/bayles_logo.jpg"
                                                alt="Bayle's Pharmaceutical Logo"
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                        <span className="text-white font-bold text-xs">BAYLE'S PHARMACEUTICAL</span>
                                    </div>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        <X size={24} />
                                    </button>
                                </div>

                                <div className="flex-1 overflow-y-auto py-6 px-4">
                                    <div className="flex flex-col gap-2">
                                        {navLinks.map((link) => (
                                            <Link
                                                key={link.name}
                                                href={link.href}
                                                onClick={() => setIsOpen(false)}
                                                className="text-gray-300 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg text-sm font-medium transition-all flex items-center gap-3"
                                            >
                                                {link.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                <div className="p-6 border-t border-gray-800">
                                    <p className="text-xs text-gray-500 text-center">
                                        © 2025 BAYLE'S PHARMACEUTICAL PRIVATE LIMITED
                                    </p>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
