import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HeroSlider from "./components/hero/HeroSlider";
import WhyIS from "./components/sections/WhyIS";
import Solutions from "./components/sections/Solutions";
import BiddingSection from "./components/sections/BiddingSection";
import SISmSection from "./components/sections/SISmSection";
import RPASection from "./components/sections/RPASection";
import Contact from "./components/sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSlider />
      <WhyIS />
      <Solutions />
      <BiddingSection />
      <SISmSection />
      <RPASection />
      <Contact />
      <Footer />
    </div>
  );
}
