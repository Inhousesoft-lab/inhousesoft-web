import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { FileText, Server, Workflow, ArrowRight } from "lucide-react";

const solutions = [
  {
    number: "01",
    icon: FileText,
    title: "공공입찰 컨설팅",
    subtitle: "Public Bidding Consulting",
    description:
      "공공기관 입찰 전 과정을 전문적으로 지원합니다. 공고 분석, 제안서 작성, 가격 전략까지 수주 성공률을 극대화합니다.",
    link: "bidding-section",
    color: "#2563eb",
  },
  {
    number: "02",
    icon: Server,
    title: "SI · SM",
    subtitle: "System Integration & Management",
    description:
      "ISP부터 설계, 구축, 운영, 고도화까지 IT 시스템 전 생애주기를 책임지는 통합 서비스를 제공합니다.",
    link: "sism-section",
    color: "#0E2E78",
  },
  {
    number: "03",
    icon: Workflow,
    title: "RPA",
    subtitle: "Robotic Process Automation",
    description:
      "반복적인 업무를 지능형 자동화로 처리합니다. 24/7 무중단 운영으로 업무 효율과 정확도를 동시에 향상시킵니다.",
    link: "rpa-section",
    color: "#2563eb",
  },
];

export default function Solutions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="solutions" ref={ref} className="bg-white py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-5"
            >
              <span className="text-[#0E2E78] text-[12px] font-semibold tracking-[0.25em] uppercase">
                Core Solutions
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[40px] lg:text-[52px] font-bold text-[#0f172a] leading-[1.15] tracking-tight break-keep"
            >
              전문화된 핵심 솔루션으로
              <br />
              <span className="text-[#0E2E78]">고객의 가치를 창출합니다</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[15px] text-[#4b5563] max-w-sm leading-relaxed lg:text-right"
          >
            공공·의료·제약 산업에 특화된 3가지 핵심 서비스로
            기업의 디지털 전환을 지원합니다.
          </motion.p>
        </div>

        {/* Solution cards */}
        <div className="grid lg:grid-cols-3 gap-px bg-gray-100 border border-gray-100">
          {solutions.map((sol, i) => (
            <motion.button
              key={sol.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              onClick={() => scrollTo(sol.link)}
              className="group relative bg-white p-7 text-left hover:bg-[#0E2E78] transition-all duration-300 overflow-hidden"
            >
              {/* Hover fill line */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#2563eb] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              {/* Icon */}
              <div className="w-14 h-14 border border-gray-200 group-hover:border-white/20 flex items-center justify-center mb-5 transition-colors">
                <sol.icon
                  className="text-[#0E2E78] group-hover:text-white transition-colors"
                  size={24}
                />
              </div>

              {/* Title */}
              <h3 className="text-[22px] font-bold text-[#0f172a] group-hover:text-white mb-1 transition-colors">
                {sol.title}
              </h3>
              <p className="text-[12px] text-gray-400 group-hover:text-white/40 font-medium tracking-wide mb-5 transition-colors">
                {sol.subtitle}
              </p>

              {/* Description */}
              <p className="text-[14px] text-[#4b5563] group-hover:text-white/70 leading-relaxed mb-8 transition-colors">
                {sol.description}
              </p>

              {/* CTA */}
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0f172a] group-hover:bg-white text-white group-hover:text-[#0E2E78] text-[13px] font-bold transition-all duration-300">
                자세히 보기 <ArrowRight size={13} />
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
