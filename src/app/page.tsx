import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ExcellenceSection from "@/components/ExcellenceSection";
import CertificationsSection from "@/components/CertificationsSection";
import NewsSection from "@/components/NewsSection";
import StatsSection from "@/components/StatsSection";
import PartnerSection from "@/components/PartnerSection";
import Footer from "@/components/Footer";
import FeatureCards from "@/components/FeatureCards";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <TopBar />
      <Navbar />
      <Hero />
      <FeatureCards />
      <ExcellenceSection />
      <CertificationsSection />
      <NewsSection />
      <StatsSection />
      <PartnerSection />
      <Footer />
    </main>
  );
}
