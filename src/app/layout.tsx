import { Inter } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://tscorporate.biz"),
  title: {
    template: "%s | TSCorporate",
    default: "TSCorporate - Multi-Service Corporation in Ethiopia",
  },
  description:
    "TSCorporate is a multifaceted corporation offering services across consulting, construction, manufacturing, agriculture, import-export, tourism, and travel.",
  keywords: [
    "TSCorporate",
    "consulting",
    "construction",
    "agriculture",
    "import-export",
    "Ethiopia",
    "Teshome Soromessa",
  ],
  authors: [{ name: "TSCorporate" }],
  creator: "TSCorporate",
  publisher: "TSCorporate",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
