import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Mail } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="contact"
      ref={ref}
      className="relative bg-[#071d52] py-28 lg:py-36 overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&h=600&fit=crop&auto=format"
          alt=""
          className="w-full h-full object-cover opacity-20"
          style={{ filter: "brightness(0.5) saturate(0.6)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#071d52]/60 via-[#071d52]/40 to-[#071d52]/80" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[32px] lg:text-[52px] font-bold text-white leading-[1.2] tracking-tight mb-4 break-keep"
        >
          프로젝트 시작, 지금 시작해보세요.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-[18px] lg:text-[22px] text-white/70 mb-10 break-keep"
        >
          컨설팅부터 고도화까지 인하우스소프트가 함께합니다.
        </motion.p>

        <motion.a
          href="mailto:inhousesoft@inhousesoft.com"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center gap-3 text-[#60a5fa] text-[16px] font-medium hover:text-white transition-colors"
        >
          <Mail size={20} />
          inhousesoft@inhousesoft.com
        </motion.a>
      </div>
    </section>
  );
}
