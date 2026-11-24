import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import ProductsSection from "@/components/ProductsSection";
import AboutShowcase from "@/components/AboutShowcase";
import AchievementsSummits from "@/components/AchievementsSummits";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustSection />
      <ProductsSection />
      <AboutShowcase />
      <AchievementsSummits />
      <ContactSection />
    </>
  );
}
