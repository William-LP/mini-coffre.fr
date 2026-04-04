import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import ProductsPreview from "./components/ProductsPreview";
import AboutSection from "./components/AboutSection";
import CTASection from "./components/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <FeaturesSection /> */}
      <ProductsPreview />
      {/* <AboutSection /> */}
      <CTASection />
    </>
  );
}
