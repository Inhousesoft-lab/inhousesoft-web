import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { PenLine, Construction, Settings, TrendingUp, ArrowRight } from "lucide-react";

const processes = [
  {
    icon: PenLine,
    label: "설계",
    sub: "시스템 아키텍처",
    detail: "기능 요건 정의, 시스템 구조 및 데이터 모델 설계",
  },
  {
    icon: Construction,
    label: "구축",
    sub: "개발 및 구축",
    detail: "애자일 기반 개발, 품질 보증, 테스트 및 배포",
  },
  {
    icon: Settings,
    label: "운영",
    sub: "유지보수 · SM",
    detail: "24시간 모니터링, 장애 대응, 성능 최적화",
  },
  {
    icon: TrendingUp,
    label: "고도화",
    sub: "지속 개선",
    detail: "신규 요건 반영, 기술 스택 업그레이드, 확장성 확보",
  },
];

export default function SISmSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section
      id="sism-section"
      ref={ref}
      className="relative bg-[#0E2E78] py-24 lg:py-32 overflow-hidden"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.9) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.9) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="text-[#60a5fa] text-[12px] font-semibold tracking-[0.25em] uppercase">
            System Integration & Management
          </span>
        </motion.div>

        {/* Heading */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[40px] lg:text-[56px] font-bold text-white leading-[1.15] tracking-tight mb-6 break-keep"
          >
            SI · SM
            <br />
            <span className="text-[#60a5fa]">전 과정을 책임지는 파트너</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-white/75 text-[16px] leading-relaxed max-w-2xl break-keep"
          >
            프로젝트가 끝나도 인연이 끊기지 않습니다.
            기획부터 운영까지 같은 팀이 함께하기 때문에,
            시스템을 가장 잘 아는 사람이 항상 곁에 있습니다.
          </motion.p>
        </div>

        {/* Process pipeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="mb-6">
            <span className="text-[#60a5fa] text-[12px] font-semibold tracking-[0.25em] uppercase">서비스 프로세스</span>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-8 left-8 right-8 h-[1px] bg-white/10" />

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {processes.map((process, i) => (
                <motion.div
                  key={process.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
                  className="group relative bg-[#071d52] border border-white/5 p-5 hover:border-[#2563eb]/40 transition-all"
                >
                  {/* Icon */}
                  <div className="w-10 h-10 border border-[#2563eb]/30 flex items-center justify-center mb-5 group-hover:border-[#60a5fa] transition-colors">
                    <process.icon className="text-[#60a5fa]" size={18} />
                  </div>

                  {/* Label */}
                  <div className="text-[18px] font-bold text-white mb-1">
                    {process.label}
                  </div>
                  <div className="text-[12px] text-[#60a5fa] font-medium mb-3">
                    {process.sub}
                  </div>
                  <div className="text-[12px] text-white/40 leading-relaxed">
                    {process.detail}
                  </div>

                  {/* Arrow connector */}
                  {i < processes.length - 1 && (
                    <div className="hidden lg:block absolute -right-2 top-8 z-10">
                      <ArrowRight size={14} className="text-[#2563eb]/50" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Image row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-16 relative overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&h=400&fit=crop&auto=format"
            alt="SI·SM 서비스"
            className="w-full h-64 object-cover opacity-40"
            style={{ filter: "grayscale(0.5) brightness(0.6)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E2E78] via-transparent to-[#0E2E78]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-white/40 text-[13px] font-semibold tracking-[0.3em] uppercase mb-3">
                인하우스소프트의 약속
              </div>
              <div className="text-white text-[24px] lg:text-[32px] font-black">
                시작부터 끝까지, 고객과 함께합니다
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
