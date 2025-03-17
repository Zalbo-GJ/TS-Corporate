import LandingPage from "@/components/LandingPage";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "TSCorporate ",
  description:
    "TSCorporate offers services across consulting, construction, manufacturing, agriculture, import-export, tourism, and travel. Founded by Prof. Teshome Soromessa.",
  keywords:
    "TSCorporate, consulting, construction, agriculture, import-export, Ethiopia, Teshome Soromessa",
  openGraph: {
    title: "TSCorporate | Multi-Service Corporation",
    description:
      "TSCorporate offers services across consulting, construction, manufacturing, agriculture, import-export, tourism, and travel.",
    url: "https://tscorporate.biz",
    siteName: "TSCorporate",
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Script id="organization-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "TSCorporate",
            "url": "https://tscorporate.biz",
            "logo": "https://tscorporate.biz/logo.png",
            "description": "TSCorporate is a multifaceted corporation offering services across consulting, construction, manufacturing, agriculture, import-export, tourism, and travel.",
            "foundingDate": "2017",
            "founder": {
              "@type": "Person",
              "name": "Prof. Teshome Soromessa"
            },
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "Ethiopia"
            },
            "sameAs": [
              "https://www.facebook.com/tscorporate",
              "https://www.linkedin.com/company/tscorporate"
            ]
          }
        `}
      </Script>
      <div className="bg-white md:px-24 px-4">
        <LandingPage />
        <AboutSection />
        <ServicesSection />
      </div>
    </>
  );
}
