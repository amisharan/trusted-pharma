import Navbar from "@/components/Navbar";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import ContactForm from "@/components/ContactForm";
import ContactMaps from "@/components/ContactMaps";

export default function Contact() {
    return (
        <main className="min-h-screen bg-white">
            <TopBar />
            <Navbar />
            <ContactHero />
            <ContactForm />
            <ContactMaps />
            <Footer />
        </main>
    );
}
