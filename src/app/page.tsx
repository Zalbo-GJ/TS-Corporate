import LandingPage from "@/components/LandingPage";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <div className="bg-white md:px-24 px-4">
      <LandingPage />
      <AboutSection />
      <ServicesSection />
    </div>
  );
}
