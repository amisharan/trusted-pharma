"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
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

                {/* Mobile Menu Button (Left) */}
                <button
                    className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors mr-2"
                    onClick={() => setIsOpen(true)}
                >
                    <Menu size={24} />
                </button>

                <div className="flex items-center gap-3">
                    <div className="bg-[#00aaff] text-white p-2 rounded-lg font-bold text-xl">
                        PC
                    </div>
                    <div className="flex flex-col">
                        <span className="text-white font-bold text-lg leading-none">
                            PharmaCo
                        </span>
                        <span className="text-gray-400 text-xs">Healthcare Solutions</span>
                    </div>
                </div>

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
                                        <div className="bg-[#00aaff] text-white p-1.5 rounded font-bold text-sm">
                                            PC
                                        </div>
                                        <span className="text-white font-bold">PharmaCo</span>
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
                                        © 2025 PharmaCo Healthcare
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
