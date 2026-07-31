import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import HeroSlide from "./HeroSlide";

const slides = [
  {
    badge: "IT 전문기업 · Since 2024",
    title: "공공·의료·제약 IT를 수행하는",
    subtitle: "SI·SM · RPA 전문기업",
    description:
      "화려한 제안보다 실제 결과로 말합니다. 함께할 준비가 되어 있습니다.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=900&fit=crop&auto=format",
  },
  {
    badge: "End-to-End IT Service",
    title: "시작부터 운영까지",
    subtitle: "한 팀이 책임집니다",
    description:
      "담당자가 바뀌고 맥락이 끊기는 일, 저희와 함께라면 없습니다.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&h=900&fit=crop&auto=format",
  },
  {
    badge: "공공입찰 · SI/SM · RPA",
    title: "필요한 것만 정확하게",
    subtitle: "맞춤 IT 솔루션",
    description:
      "입찰, 개발, 자동화 — 필요한 영역만 골라서 시작해도 됩니다. 규모에 상관없이 함께합니다.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&h=900&fit=crop&auto=format",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          setCurrent((c) => (c + 1) % slides.length);
          return 0;
        }
        return p + 2;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [current]);

  const goTo = (idx: number) => {
    setCurrent(idx);
    setProgress(0);
  };

  const prev = () => goTo((current - 1 + slides.length) % slides.length);
  const next = () => goTo((current + 1) % slides.length);

  return (
    <section id="home" className="relative w-full h-screen bg-[#071d52]">
      {/* Slides — all in DOM, cross-fade via opacity */}
      <div className="absolute inset-0">
        {slides.map((slide, idx) => (
          <motion.div
            key={idx}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: idx === current ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <HeroSlide
              index={idx}
              title={slide.title}
              subtitle={slide.subtitle}
              description={slide.description}
              badge={slide.badge}
              image={slide.image}
            />
          </motion.div>
        ))}
      </div>

      {/* Navigation: < 01 ——[bar] 02 03 > */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {/* Prev */}
        <button
          onClick={prev}
          aria-label="이전 슬라이드"
          className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
        >
          <ChevronLeft size={17} className="text-white/70" />
        </button>

        {/* Slide items */}
        <div className="flex items-center gap-2" style={{ fontFamily: "Inter, sans-serif" }}>
          {slides.map((_, idx) => {
            const isActive = idx === current;
            const isPast = idx < current;
            return (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                aria-label={`슬라이드 ${idx + 1}`}
                className="flex items-center gap-2"
              >
                {/* Number */}
                <span
                  className={`text-[13px] font-bold transition-colors leading-none ${
                    isActive
                      ? "text-white"
                      : isPast
                      ? "text-white/35"
                      : "text-white/35"
                  }`}
                >
                  0{idx + 1}
                </span>

                {/* Progress bar: only after the active slide */}
                {isActive && (
                  <div className="w-14 h-[2px] bg-white/15 relative overflow-hidden">
                    <div
                      className="absolute inset-y-0 left-0 bg-[#60a5fa]"
                      style={{ width: `${progress}%`, transition: "none" }}
                    />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Next */}
        <button
          onClick={next}
          aria-label="다음 슬라이드"
          className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
        >
          <ChevronRight size={17} className="text-white/70" />
        </button>
      </div>
    </section>
  );
}
