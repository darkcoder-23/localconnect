
import Header from "@/components/layout/Header";
import HeroSection from "@/components/home/HeroSection";
import PopularServices from "@/components/home/PopularServices";
import HowItWorks from "@/components/home/HowItWorks";
import BrokerBanner from "@/components/home/BrokerBanner";
import FeaturedProfessionals from "@/components/home/FeaturedProfessionals";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <PopularServices />
        <HowItWorks />
        <BrokerBanner />
        <FeaturedProfessionals />
        <Footer />
      </main>
    </>
  );
}
