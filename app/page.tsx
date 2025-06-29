import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/home/Hero";
import AboutMeSection from "@/components/sections/home/AboutMeSection";
import PortfolioSection from "@/components/sections/home/PortfolioSection";
import FollowMeSection from "@/components/sections/home/FollowMeSection";
import ContactSection from "@/components/sections/home/ContactSection";
import ScrollToTop from "@/components/shared/ScrollToTop";
import HashScrollHandler from "@/components/shared/HashScrollHandler";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Header />
      <HashScrollHandler />
      <div className="w-full">
        <Hero />
      </div>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AboutMeSection />
        <PortfolioSection />
        <FollowMeSection />
        <ContactSection />
      </div>
      <Footer />
      <ScrollToTop />
    </main>
  );
}
