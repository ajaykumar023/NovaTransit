import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/landing/Hero";
import Statistics from "@/components/landing/Statistics";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import Footer from "@/components/landing/Footer";
import DashboardPreview from "@/components/landing/DashboardPreview";
import FAQ from "@/components/landing/FAQ";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Statistics />
      <Features />
      <HowItWorks />
      <DashboardPreview />
      <FAQ />
      <Footer />
    </>
  );
}