import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "../imageFallback/ImageWithFallback";
import { Target, FileText, TrendingUp } from "lucide-react";

export default function BiddingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const services = [
    {
      icon: Target,
      title: "입찰 전략 및 공고 분석",
      description: "공고 조건, 평가 기준, 경쟁 환경을 종합 분석하여 참여 여부 판단 및 최적의 입찰 전략을 수립",
    },
    {
      icon: FileText,
      title: "제안서 및 입찰 수행 지원",
      description: "평가 기준에 맞춘 제안서 작성과 제출 프로세스를 지원하여 완성도 높은 입찰 수행을 보장",
    },
    {
      icon: TrendingUp,
      title: "가격 전략 및 사후 관리",
      description: "낙찰 가능성을 고려한 투찰 가격 설계와 함께 결과 분석 및 개선 전략까지 제공",
    },
  ];

  return (
    <section id="bidding-section" ref={ref} className="min-h-screen flex items-center py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0E2E78] mb-6">
            공공입찰 컨설팅
          </h2>
          <p className="text-xl text-[#6f8394] max-w-3xl">
            반복적이고 복잡한 입찰 업무를 체계적으로 관리하여 수주 성공률을 높이고 리스크를 최소화합니다
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-[#0E2E78] mb-4">
                체계적인 입찰 전략 지원
              </h3>
              <p className="text-[#6f8394] leading-relaxed mb-4">
                공공입찰 전 과정(분석–준비–제출–관리)을 전문적으로 지원하여 기업의 안정적인 수주를 돕습니다.
                입찰 공고 분석부터 제안서 작성, 일정 관리, 사후 대응까지 전 단계에서 전략적 컨설팅을 제공합니다.
              </p>
              <p className="text-[#6f8394] leading-relaxed">
                경험 기반의 데이터와 노하우를 통해 불필요한 시행착오를 줄이고, 경쟁력 있는 입찰 참여가 가능하도록 지원합니다.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop"
                alt="공공입찰 컨설팅"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {services.map((service) => (
            <div
              key={service.title}
              className="p-6 bg-white border border-[#e5e7eb] rounded-lg hover:border-[#2563eb] transition-all shadow-sm"
            >
              <div className="w-12 h-12 bg-[#2563eb]/10 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="text-[#2563eb]" size={24} />
              </div>
              <h4 className="text-lg font-semibold text-[#0E2E78] mb-2">
                {service.title}
              </h4>
              <p className="text-sm text-[#6f8394]">{service.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
