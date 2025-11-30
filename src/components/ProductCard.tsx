"use client";

import { motion } from "framer-motion";
import { Package, ArrowRight } from "lucide-react";

interface ProductCardProps {
    name: string;
    strength: string;
    category: string;
    form: string;
    packaging: string;
    indication: string;
}

export default function ProductCard({
    name,
    strength,
    category,
    form,
    packaging,
    indication,
}: ProductCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group"
        >
            <div className="flex justify-between items-start mb-6">
                <div className="bg-[#00aaff] w-12 h-12 rounded-xl flex items-center justify-center">
                    <Package className="w-6 h-6 text-white" />
                </div>
                <span className="px-3 py-1 rounded-full border border-blue-100 text-blue-500 text-xs font-medium">
                    {category}
                </span>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-1">
                {name} <span className="text-gray-500 font-normal text-lg">{strength}</span>
            </h3>

            <div className="mt-6 space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-50">
                    <span className="text-gray-400 text-sm">Form</span>
                    <span className="text-gray-700 font-medium text-sm">{form}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-50">
                    <span className="text-gray-400 text-sm">Packaging</span>
                    <span className="text-gray-700 font-medium text-sm">{packaging}</span>
                </div>
                <div className="pt-2">
                    <span className="text-gray-400 text-xs uppercase tracking-wider block mb-1">Indication</span>
                    <span className="text-gray-700 font-medium text-sm">{indication}</span>
                </div>
            </div>

            <div className="mt-6 pt-4">
                <button className="text-[#00aaff] text-sm font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                    View Details <ArrowRight className="w-4 h-4" />
                </button>
            </div>
        </motion.div>
    );
}
