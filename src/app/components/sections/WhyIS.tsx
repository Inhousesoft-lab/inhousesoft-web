import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Shield, Lightbulb, RefreshCw } from "lucide-react";

const pillars = [
  {
    number: "01",
    icon: Shield,
    title: "기술력 & 책임감",
    description:
      "말만 하고 끝내지 않습니다. 구축 이후 운영까지, 약속한 것은 끝까지 함께합니다.",
    highlight: "기술 신뢰성",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "분야별 전문성",
    description:
      "공공·의료·제약 업무를 직접 경험한 전문가들이 현장에 맞는 솔루션을 제안합니다.",
    highlight: "산업 특화",
  },
  {
    number: "03",
    icon: RefreshCw,
    title: "End-to-End",
    description:
      "컨설팅, 개발, 운영, 고도화까지 한 팀이 처음부터 끝까지 담당합니다.",
    highlight: "원스톱 서비스",
  },
];

export default function WhyIS() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="about"
      ref={ref}
      className="relative bg-[#0E2E78] py-24 lg:py-32 overflow-hidden"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.9) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.9) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Large decorative text */}
      <div className="absolute right-0 bottom-0 overflow-hidden">
        <span
          className="text-[220px] font-black text-white/[0.025] leading-none select-none"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          WHY
        </span>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="text-[#60a5fa] text-[12px] font-semibold tracking-[0.25em] uppercase">
            Why 인하우스소프트
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[40px] lg:text-[56px] font-bold text-white leading-[1.15] tracking-tight mb-5 break-keep"
        >
          공공·의료·제약 분야의
          <br />
          <span className="text-[#60a5fa]">신뢰할 수 있는 파트너</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-white/60 text-[16px] lg:text-[18px] max-w-2xl leading-relaxed mb-16 break-keep"
        >
          화려한 약속보다 실제 결과로 증명합니다.
          <br />
          지금까지 그래왔고, 앞으로도 그럴 것입니다.
        </motion.p>

        {/* Pillars */}
        <div className="grid lg:grid-cols-3 gap-px bg-white/10">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
              className="group bg-[#0E2E78] p-7 hover:bg-[#132f7a] transition-colors cursor-default"
            >
              {/* Icon */}
              <div className="w-12 h-12 border border-[#2563eb]/40 flex items-center justify-center mb-5 group-hover:border-[#60a5fa] transition-colors">
                <pillar.icon className="text-[#60a5fa]" size={22} />
              </div>

              {/* Title */}
              <h3 className="text-[20px] font-bold text-white mb-3 leading-tight">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-white/70 text-[14px] leading-relaxed mb-6">
                {pillar.description}
              </p>

              {/* Highlight pill */}
              <div className="inline-flex items-center gap-2 text-[12px] text-[#60a5fa] font-semibold tracking-wide">
                <div className="w-4 h-[1px] bg-[#60a5fa]" />
                {pillar.highlight}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
