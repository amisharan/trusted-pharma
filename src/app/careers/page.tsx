import Navbar from "@/components/Navbar";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import CareersHero from "@/components/CareersHero";
import WhyPharmaCo from "@/components/WhyPharmaCo";
import OpenPositions from "@/components/OpenPositions";
import GeneralApplication from "@/components/GeneralApplication";

export default function Careers() {
    // Force rebuild
    return (
        <main className="min-h-screen bg-white">
            <TopBar />
            <Navbar />
            <CareersHero />
            <WhyPharmaCo />
            <OpenPositions />
            <GeneralApplication />
            <Footer />
        </main>
    );
}
