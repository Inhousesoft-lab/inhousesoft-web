import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Target, FileText, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "공고 분석 · 입찰 전략",
    description: "어떤 공고에 들어가야 하는지부터 시작합니다. 조건, 배점, 경쟁사까지 보고 전략을 세웁니다.",
  },
  {
    icon: FileText,
    title: "제안서 작성 지원",
    description: "평가위원이 원하는 방향으로 제안서를 구성합니다. 목차·내용·디자인 모두 함께합니다.",
  },
  {
    icon: TrendingUp,
    title: "가격 전략 · 사후 관리",
    description: "낙찰 가능한 가격을 데이터 기반으로 설계하고, 결과에 따른 개선 방향도 안내합니다.",
  },
];

const strengths = [
  "나라장터 · G2B 공고 모니터링",
  "배점 기준 심층 분석",
  "경쟁사 동향 파악",
  "제안서 목차 · 내용 · 디자인",
  "투찰 가격 데이터 설계",
  "결과 분석 및 개선 제안",
];

export default function BiddingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="bidding-section"
      ref={ref}
      className="relative bg-[#f8fafc] py-24 lg:py-32 overflow-hidden"
    >
      {/* Left accent stripe */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2563eb] via-[#0E2E78] to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="text-[#2563eb] text-[12px] font-semibold tracking-[0.25em] uppercase">
            Public Bidding Consulting
          </span>
        </motion.div>

        {/* Main layout */}
        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 items-start">
          {/* Left: Heading + intro */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[40px] lg:text-[56px] font-bold text-[#0f172a] leading-[1.15] tracking-tight mb-6 break-keep"
            >
              공공입찰
              <br />
              <span className="text-[#0E2E78]">컨설팅 솔루션</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-[16px] text-[#4b5563] leading-relaxed mb-8 break-keep"
            >
              혼자 하면 오래 걸리고 빠뜨리기 쉬운 것들이 있습니다.
              공고 분석부터 제출까지, 익숙한 사람이 옆에서 함께하면 달라집니다.
            </motion.p>

            {/* Strengths list */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10"
            >
              {strengths.map((s, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <span className="text-[#2563eb] text-[18px] leading-none mt-[-2px] shrink-0">•</span>
                  <span className="text-[15px] text-[#374151] leading-relaxed">{s}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 bg-[#0f172a] text-white text-[14px] font-bold hover:bg-[#0E2E78] transition-colors"
              >
                입찰 컨설팅 문의하기
              </button>
            </motion.div>
          </div>

          {/* Right: Service cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-4"
          >
            {/* Image */}
            <div className="relative overflow-hidden mb-6">
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=400&fit=crop&auto=format"
                alt="공공입찰 솔루션"
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E2E78]/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-white/60 text-[12px] font-medium tracking-wide mb-1 uppercase">
                  인하우스소프트
                </div>
                <div className="text-white text-[20px] font-bold">
                  수주 성공률을 높이는 전략적 파트너
                </div>
              </div>
            </div>

            {services.map((service, i) => (
              <div
                key={i}
                className="bg-white border border-gray-100 p-6 hover:border-[#0E2E78]/30 hover:shadow-sm transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#EFF4FF] flex items-center justify-center shrink-0 group-hover:bg-[#0E2E78] transition-colors">
                    <service.icon
                      className="text-[#0E2E78] group-hover:text-white transition-colors"
                      size={18}
                    />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-[#0f172a] mb-2">
                      {service.title}
                    </h4>
                    <p className="text-[13px] text-gray-500 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
