import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import HeroSlide from "./HeroSlide";
import bigDataImg from "@/assets/images/bg_visual.svg";

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "디지털 기술로 산업 생태계에",
      subtitle: "새로운 가치를",
      description:
        "인하우스소프트는 생각과 기록 데이터를 모아 모두에게 만족을 주는 서비스로 연결 하겠습니다.",
      image: bigDataImg,
    },
    {
      title: "공공입찰 컨설팅 · SI · RPA",
      subtitle: "통합 솔루션 전문기업",
      description:
        "Since 2024, 의료·빅데이터·보안 분야의 디지털 전환을 선도하는 신뢰할 수 있는 IT 컨설팅 파트너입니다.",
      image: bigDataImg,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative w-full h-screen pt-20">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <HeroSlide
            title={slides[currentSlide].title}
            subtitle={slides[currentSlide].subtitle}
            description={slides[currentSlide].description}
            image={slides[currentSlide].image}
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center space-x-8 z-20">
        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft className="text-white" size={20} />
        </button>

        {/* Dots */}
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all rounded-full ${
                index === currentSlide
                  ? "w-12 h-3 bg-white"
                  : "w-3 h-3 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all"
          aria-label="Next slide"
        >
          <ChevronRight className="text-white" size={20} />
        </button>
      </div>
    </section>
  );
}
