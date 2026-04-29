import { motion } from "motion/react";
import { ImageWithFallback } from "../imageFallback/ImageWithFallback";

interface HeroSlideProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export default function HeroSlide({
  title,
  subtitle,
  description,
  image,
}: HeroSlideProps) {
  return (
    <div className="relative w-full h-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E2E78]/95 via-[#0E2E78]/85 to-[#0E2E78]/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40 h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold text-white mb-6 leading-tight break-keep">
            {title}
            <br />
            <span className="text-[#2563eb]">{subtitle}</span>
          </h1>
          <p className="text-lg lg:text-xl text-white/90 leading-relaxed break-keep">
            {description}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
