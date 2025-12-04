import Navbar from "@/components/Navbar";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import StorySection from "@/components/StorySection";
import MissionVisionSection from "@/components/MissionVisionSection";
import LeadershipSection from "@/components/LeadershipSection";
import ManufacturingSection from "@/components/ManufacturingSection";
import CoreValuesSection from "@/components/CoreValuesSection";

export default function About() {
    return (
        <main className="min-h-screen bg-white">
            <TopBar />
            <Navbar />
            <AboutHero />
            <StorySection />
            <MissionVisionSection />
            <LeadershipSection />
            <ManufacturingSection />
            <CoreValuesSection />
            <Footer />
        </main>
    );
}
