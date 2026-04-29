import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "../imageFallback/ImageWithFallback";
import {
  FileText,
  Mail,
  Database,
  Calendar,
  Receipt,
  Users,
} from "lucide-react";

export default function RPASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const automationItems = [
    {
      icon: FileText,
      title: "문서 처리 자동화",
      description: "계약서, 보고서 등 문서 작성 및 처리",
    },
    {
      icon: Mail,
      title: "이메일 자동화",
      description: "정기 발송, 응답 처리 자동화",
    },
    {
      icon: Database,
      title: "데이터 입력",
      description: "시스템 간 데이터 이관 및 입력",
    },
    {
      icon: Calendar,
      title: "스케줄 관리",
      description: "일정 확인 및 알림 자동화",
    },
    {
      icon: Receipt,
      title: "청구서 처리",
      description: "송장 및 청구서 자동 처리",
    },
    {
      icon: Users,
      title: "HR 업무",
      description: "입퇴사, 근태 관리 자동화",
    },
  ];

  return (
    <section
      id="rpa-section"
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
            RPA
          </h2>
          <p className="text-xl text-[#6f8394] max-w-3xl">
            반복적인 업무를 자동화하여 업무 효율성을 극대화하고 오류를
            최소화합니다
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&h=600"
                alt="RPA"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-[#0E2E78] mb-4">
                지능형 업무 자동화
              </h3>
              <p className="text-[#6f8394] leading-relaxed mb-4">
                RPA(Robotic Process Automation)를 통해 반복적이고 시간 소모적인
                업무를 자동화합니다. 인간의 개입 없이 24/7 안정적으로 작동하며,
                업무 처리 속도를 획기적으로 개선합니다.
              </p>
              <p className="text-[#6f8394] leading-relaxed">
                직원들은 더 창의적이고 가치 있는 업무에 집중할 수 있으며, 휴먼
                에러를 최소화하여 업무 품질을 향상시킵니다.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {automationItems.map((item) => (
            <div
              key={item.title}
              className="p-6 bg-white border border-[#e5e7eb] rounded-lg hover:border-[#2563eb] transition-all shadow-sm"
            >
              <div className="w-12 h-12 bg-[#2563eb]/10 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="text-[#2563eb]" size={24} />
              </div>
              <h4 className="text-lg font-semibold text-[#0E2E78] mb-2">
                {item.title}
              </h4>
              <p className="text-sm text-[#6f8394]">{item.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
