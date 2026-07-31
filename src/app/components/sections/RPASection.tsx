import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import {
  FileText,
  Mail,
  Database,
  Calendar,
  Receipt,
  Users,
  Zap,
  Clock,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

const automationItems = [
  {
    icon: FileText,
    title: "문서 처리 자동화",
    description: "계약서, 보고서 등 문서 작성 및 처리 자동화",
  },
  {
    icon: Mail,
    title: "이메일 자동화",
    description: "정기 발송, 응답 처리 및 분류 자동화",
  },
  {
    icon: Database,
    title: "데이터 입력",
    description: "시스템 간 데이터 이관 및 자동 입력",
  },
  {
    icon: Calendar,
    title: "스케줄 관리",
    description: "일정 확인, 알림 및 자동 예약 처리",
  },
  {
    icon: Receipt,
    title: "청구서 처리",
    description: "송장 및 청구서 자동 생성·처리",
  },
  {
    icon: Users,
    title: "HR 업무",
    description: "입퇴사, 근태 및 급여 관리 자동화",
  },
];

const benefits = [
  { icon: Zap, value: "80%↑", label: "업무 처리 속도 향상" },
  { icon: Clock, value: "24/7", label: "무중단 자동 운영" },
  { icon: TrendingUp, value: "95%↓", label: "휴먼 에러 감소" },
  { icon: ShieldCheck, value: "ROI+", label: "빠른 투자 회수" },
];

export default function RPASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section
      id="rpa-section"
      ref={ref}
      className="relative bg-white py-24 lg:py-32 overflow-hidden"
    >
      {/* Decorative right block */}
      <div className="absolute right-0 top-0 bottom-0 w-[300px] bg-[#f8fafc] hidden xl:block" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="text-[#2563eb] text-[12px] font-semibold tracking-[0.25em] uppercase">
            Robotic Process Automation
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
          {/* Left: Heading + benefits + image */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[40px] lg:text-[56px] font-bold text-[#0f172a] leading-[1.15] tracking-tight mb-6 break-keep"
            >
              RPA
              <br />
              <span className="text-[#0E2E78]">지능형 업무 자동화</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-[16px] text-[#4b5563] leading-relaxed mb-10 break-keep"
            >
              매일 반복되는 단순 업무, 사람이 꼭 해야 할까요?
              RPA로 자동화하면 실수도 줄고, 직원들은 더 중요한 일에 집중할 수 있습니다.
            </motion.p>

            {/* Benefits grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="grid grid-cols-2 gap-px bg-gray-100 border border-gray-100 mb-10"
            >
              {benefits.map((b, i) => (
                <div
                  key={i}
                  className="bg-white p-6 flex flex-col gap-2"
                >
                  <b.icon size={18} className="text-[#2563eb]" />
                  <span
                    className="text-[28px] font-black text-[#0E2E78] leading-none"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {b.value}
                  </span>
                  <span className="text-[12px] text-gray-400 font-medium">
                    {b.label}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&h=300&fit=crop&auto=format"
                alt="RPA 자동화"
                className="w-full h-40 object-cover"
                style={{ filter: "brightness(0.85) saturate(0.9)" }}
              />
            </motion.div>
          </div>

          {/* Right: Automation items grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="mb-6">
              <span className="text-[#2563eb] text-[12px] font-semibold tracking-[0.25em] uppercase">자동화 적용 영역</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {automationItems.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.07 }}
                  className="group bg-[#f8fafc] border border-gray-100 p-6 hover:bg-[#0E2E78] hover:border-[#0E2E78] transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-[#EFF4FF] group-hover:bg-white/10 flex items-center justify-center mb-4 transition-colors">
                    <item.icon
                      className="text-[#0E2E78] group-hover:text-white transition-colors"
                      size={18}
                    />
                  </div>
                  <h4 className="text-[14px] font-bold text-[#0f172a] group-hover:text-white mb-2 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-[12px] text-gray-400 group-hover:text-white/55 leading-relaxed transition-colors">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-8 bg-[#0E2E78] p-8">
              <div className="text-white/60 text-[13px] mb-3">
                업무 자동화가 필요하신가요?
              </div>
              <div className="text-white text-[20px] font-bold mb-5 break-keep">
                지금 바로 RPA 도입 상담을 받아보세요
              </div>
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-6 py-3 bg-[#0f172a] text-white text-[13px] font-bold hover:bg-white hover:text-[#0E2E78] transition-colors"
              >
                상담 신청하기 →
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
