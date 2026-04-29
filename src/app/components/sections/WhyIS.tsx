import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Shield, Lightbulb, RefreshCw } from "lucide-react";

export default function WhyIS() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: Shield,
      title: "기술력 & 책임감",
      description:
        "검증된 기술력과 끝까지 책임지는 운영으로 고객의 성공을 보장합니다",
    },
    {
      icon: Lightbulb,
      title: "전문 컨설팅",
      description:
        "의료·디지털문서화·보안 등 분야에 대한 깊은 이해와 산업 특화 컨설팅 제공합니다",
    },
    {
      icon: RefreshCw,
      title: "End-to-End",
      description: "컨설팅부터 구축, 운영, 고도화까지 전 과정을 책임집니다",
    },
  ];

  return (
    <section id="about" ref={ref} className="pb-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0E2E78] mb-4">
            Why 인하우스소프트
          </h2>
          <p className="text-lg text-[#6f8394] max-w-3xl mx-auto">
            공공·의료·제약 분야의 특화된 경험과 기술력으로 신뢰할 수 있는
            파트너가 되겠습니다
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-6 bg-white border border-[#e5e7eb] rounded-lg hover:border-[#2563eb] transition-all text-center shadow-sm"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2563eb]/10 rounded-full mb-6 group-hover:bg-[#2563eb]/20 transition-all">
                <feature.icon className="text-[#2563eb]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#0E2E78] mb-3">
                {feature.title}
              </h3>
              <p className="text-[#6f8394] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
