"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Briefcase } from "lucide-react";

const positions = [
    {
        title: "Quality Assurance Manager",
        department: "Quality",
        type: "Full Time",
        location: "Mumbai, India",
        description:
            "Lead our quality assurance team to ensure all products meet the highest standards of safety and efficacy.",
    },
    {
        title: "Quality Assurance Manager",
        department: "Quality",
        type: "Full Time",
        location: "Mumbai, India",
        description:
            "Lead our quality assurance team to ensure all products meet the highest standards of safety and efficacy.",
    },
    {
        title: "Quality Assurance Manager",
        department: "Quality",
        type: "Full Time",
        location: "Mumbai, India",
        description:
            "Lead our quality assurance team to ensure all products meet the highest standards of safety and efficacy.",
    },
    {
        title: "Quality Assurance Manager",
        department: "Quality",
        type: "Full Time",
        location: "Mumbai, India",
        description:
            "Lead our quality assurance team to ensure all products meet the highest standards of safety and efficacy.",
    },
];

export default function OpenPositions() {
    return (
        <section className="py-20 bg-gradient-to-b from-[#e9f6ff] to-white">
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 border-b-4 border-[#00aaff] inline-block pb-2">
                        Open Positions
                    </h2>
                </div>

                <div className="space-y-4">
                    {positions.map((job, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-6 rounded-xl border border-gray-200 
                            bg-gradient-to-br from-[#eceff1] to-white
                            shadow-sm hover:shadow-md transition-shadow 
                            flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
                        >
                            <div className="flex-1">
                                <div className="flex flex-wrap gap-3 items-center mb-3">
                                    <h3 className="text-xl font-bold text-gray-900">
                                        {job.title}
                                    </h3>
                                    <span className="bg-[#003366] text-white text-xs px-2 py-1 rounded">
                                        {job.department}
                                    </span>
                                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded border border-gray-200">
                                        {job.type}
                                    </span>
                                </div>

                                <p className="text-gray-600 mb-4 text-sm">
                                    {job.description}
                                </p>

                                <div className="flex gap-6 text-sm text-gray-500">
                                    <div className="flex items-center gap-1">
                                        <MapPin className="w-4 h-4" />
                                        <span>{job.location}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        <span>{job.type}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Briefcase className="w-4 h-4" />
                                        <span>{job.department}</span>
                                    </div>
                                </div>
                            </div>

                            <button className="bg-[#003366] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#002244] transition-colors whitespace-nowrap w-full md:w-auto text-sm">
                                View Details & Apply
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
