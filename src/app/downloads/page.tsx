import Navbar from "@/components/Navbar";
import TopBar from "@/components/TopBar";

export default function Downloads() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white">
            <TopBar />
            <Navbar />
            <div className="container mx-auto px-4 pt-40">
                <h1 className="text-4xl font-bold mb-6 text-[#00aaff]">Downloads</h1>
                <p className="text-gray-300 text-lg">
                    Access product catalogs, brochures, and other resources.
                </p>
            </div>
        </main>
    );
}
