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
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth scroll-pt-20">
      <Header />
      <div className="snap-start snap-always bg-white">
        <HeroSlider />
      </div>
      <div className="snap-start snap-always min-h-screen flex flex-col justify-start lg:justify-center bg-white">
        <div className="p-[30px]">
          <WhyIS />
          <Solutions />
        </div>
      </div>
      <div className="snap-start snap-always">
        <BiddingSection />
      </div>
      <div className="snap-start snap-always">
        <SISmSection />
      </div>
      <div className="snap-start snap-always">
        <RPASection />
      </div>
      <div className="snap-start snap-always">
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
