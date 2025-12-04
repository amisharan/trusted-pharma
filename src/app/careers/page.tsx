import Navbar from "@/components/Navbar";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import CareersHero from "@/components/CareersHero";
import WhyBayles from "@/components/WhyBayles";
import OpenPositions from "@/components/OpenPositions";
import GeneralApplication from "@/components/GeneralApplication";

export default function Careers() {
    // Force rebuild
    return (
        <main className="min-h-screen bg-white">
            <TopBar />
            <Navbar />
            <CareersHero />
            <WhyBayles />
            <OpenPositions />
            <GeneralApplication />
            <Footer />
        </main>
    );
}
