import { motion } from "motion/react";

interface HeroSlideProps {
  index: number;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  image: string;
}

export default function HeroSlide({ index, title, subtitle, description, badge, image }: HeroSlideProps) {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover scale-105"
          style={{ filter: "brightness(0.45) saturate(0.7)" }}
        />
        {/* Dark overlay — deep but not solid navy, lets image breathe on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#030f1f]/95 via-[#0a1a35]/80 to-[#0a1a35]/40" />
        {/* Subtle bottom vignette */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#030f1f]/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 h-full flex flex-col justify-center pt-[70px]">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 mb-8"
          >
            <div className="w-8 h-[2px] bg-[#2563eb]" />
            <span className="text-[#60a5fa] text-[13px] font-semibold tracking-[0.2em] uppercase">
              {badge}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[40px] lg:text-[58px] xl:text-[68px] font-bold text-white leading-[1.1] tracking-tight break-keep mb-4"
          >
            {title}
            <br />
            <span className="text-[#60a5fa]">{subtitle}</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-[16px] lg:text-[18px] text-white/70 leading-relaxed break-keep max-w-xl"
          >
            {description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 mt-10"
          >
            <button
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-4 bg-[#2563eb] text-white text-[14px] font-bold tracking-wide hover:bg-[#1d4ed8] transition-colors"
            >
              무료 상담 신청
            </button>
            <button
              onClick={() => {
                document.getElementById("solutions")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-4 border border-white/30 text-white text-[14px] font-medium hover:bg-white/10 transition-colors"
            >
              솔루션 살펴보기 →
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
