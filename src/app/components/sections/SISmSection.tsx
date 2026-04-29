import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "../imageFallback/ImageWithFallback";
import {
  Lightbulb,
  Pen,
  Construction,
  Settings,
  TrendingUp,
} from "lucide-react";

export default function SISmSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const processes = [
    { icon: Lightbulb, label: "ISP", description: "정보화 전략 수립" },
    { icon: Pen, label: "설계", description: "시스템 아키텍처 설계" },
    { icon: Construction, label: "구축", description: "시스템 개발 및 구축" },
    { icon: Settings, label: "운영", description: "안정적 운영 및 유지보수" },
    { icon: TrendingUp, label: "고도화", description: "지속적 개선 및 최적화" },
  ];

  return (
    <section
      id="sism-section"
      ref={ref}
      className="min-h-screen flex items-center py-16 lg:py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0E2E78] mb-6">
            SI · SM
          </h2>
          <p className="text-xl text-[#6f8394] max-w-3xl">
            ISP부터 설계, 구축, 운영, 고도화까지 전 생애주기를 책임지는 통합
            서비스를 제공합니다
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
                전 과정을 책임지는 파트너
              </h3>
              <p className="text-[#6f8394] leading-relaxed mb-4">
                시스템 통합부터 운영까지, 프로젝트의 시작부터 끝까지 함께합니다.
                20년 이상의 경험을 바탕으로 안정적이고 효율적인 IT 시스템을
                구축하고 운영합니다.
              </p>
              <p className="text-[#6f8394] leading-relaxed">
                공공, 의료, 제약 분야의 특화된 경험으로 각 산업의 요구사항을
                정확히 이해하고 최적의 솔루션을 제공합니다.
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
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop"
                alt="SI · SM"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Process Flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-8 lg:gap-4">
            {processes.map((process, index) => (
              <div key={process.label} className="flex-1 relative">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 bg-[#2563eb]/10 rounded-full flex items-center justify-center mb-4 border-2 border-[#2563eb]">
                    <process.icon className="text-[#2563eb]" size={28} />
                  </div>
                  <h4 className="text-lg font-bold text-[#0E2E78] mb-2">
                    {process.label}
                  </h4>
                  <p className="text-sm text-[#6f8394]">
                    {process.description}
                  </p>
                </motion.div>

                {/* Arrow */}
                {index < processes.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 text-[#2563eb]">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
