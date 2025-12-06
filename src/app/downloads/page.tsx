import Navbar from "@/components/Navbar";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import DownloadsHero from "@/components/DownloadsHero";
import { FileText, Calendar, Download, File } from "lucide-react";

export default function Downloads() {
    const documents = [
        {
            id: 1,
            title: "Product Catalog 2025",
            type: "Catalog",
            description: "Complete product catalog with all formulations",
            date: "Jan 15, 2025",
            size: "4.2 MB",
        },
        {
            id: 2,
            title: "Product Catalog 2025",
            type: "Catalog",
            description: "Complete product catalog with all formulations",
            date: "Jan 15, 2025",
            size: "4.2 MB",
        },
        {
            id: 3,
            title: "Product Catalog 2025",
            type: "Catalog",
            description: "Complete product catalog with all formulations",
            date: "Jan 15, 2025",
            size: "4.2 MB",
        },
        {
            id: 4,
            title: "Product Catalog 2025",
            type: "Catalog",
            description: "Complete product catalog with all formulations",
            date: "Jan 15, 2025",
            size: "4.2 MB",
        },
    ];

    return (
        <main className="min-h-screen bg-[#f8fafc]">
            <TopBar />
            <Navbar />
            <DownloadsHero />

            <div className="container mx-auto px-4 py-16">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl font-bold text-[#0f172a] mb-8 flex items-center gap-2">
                        <span className="border-b-4 border-[#00aaff] pb-1">4 Documents Available</span>
                    </h2>

                    <div className="space-y-6">
                        {documents.map((doc) => (
                            <div
                                key={doc.id}
                                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row items-start md:items-center gap-6 hover:shadow-md transition-shadow"
                            >

                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00aaff] to-[#0088cc] flex items-center justify-center flex-shrink-0 text-white shadow-lg shadow-blue-500/20">
                                    <FileText size={32} />
                                </div>


                                <div className="flex-grow">
                                    <div className="flex items-center gap-3 mb-2">
                                        <h3 className="text-xl font-bold text-[#0f172a]">
                                            {doc.title}
                                        </h3>
                                        <span className="px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-600 border border-gray-200">
                                            {doc.type}
                                        </span>
                                    </div>
                                    <p className="text-gray-600 mb-3">
                                        {doc.description}
                                    </p>
                                    <div className="flex items-center gap-4 text-sm text-gray-400">
                                        <div className="flex items-center gap-1.5">
                                            <Calendar size={14} />
                                            <span>{doc.date}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <File size={14} />
                                            <span>{doc.size}</span>
                                        </div>
                                    </div>
                                </div>


                                <div className="flex-shrink-0 mt-4 md:mt-0 w-full md:w-auto">
                                    <button className="w-full md:w-auto bg-[#0f172a] hover:bg-[#1e293b] text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors">
                                        <File size={18} />
                                        Downloads
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
