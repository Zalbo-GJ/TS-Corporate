import LandingPage from "@/components/LandingPage";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <div className="bg-white px-24">
      <LandingPage />
      <AboutSection />
      <ServicesSection/>
    </div>
  );
}
