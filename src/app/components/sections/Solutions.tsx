import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { FileText, Server, Workflow } from "lucide-react";

export default function Solutions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const solutions = [
    {
      icon: FileText,
      title: "공공입찰 컨설팅",
      description: "특화된 입찰 매칭 및 제안서 작성 제안",
      link: "bidding-section",
    },
    {
      icon: Server,
      title: "SI · SM",
      description: "시스템 통합 및 운영 관리",
      link: "sism-section",
    },
    {
      icon: Workflow,
      title: "RPA",
      description: "업무 프로세스 자동화",
      link: "rpa-section",
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="solutions" ref={ref} className="pt-8 pb-32 lg:pb-0 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0E2E78] mb-4">
            Core Solutions
          </h2>
          <p className="text-lg text-[#6f8394] max-w-3xl mx-auto">
            공공·의료·제약 산업에 특화된 핵심 솔루션을 제공합니다
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {solutions.map((solution) => (
            <button
              key={solution.title}
              onClick={() => scrollToSection(solution.link)}
              className="group relative bg-white border border-[#e5e7eb] rounded-lg p-8 hover:border-[#2563eb] transition-all overflow-hidden text-center shadow-sm"
            >
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2563eb]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-[#2563eb]/10 rounded-full mb-6 group-hover:bg-[#2563eb]/20 transition-all">
                  <solution.icon className="text-[#2563eb]" size={40} />
                </div>

                <h3 className="text-xl font-bold text-[#0E2E78] mb-2">
                  {solution.title}
                </h3>

                <p className="text-[#6f8394]">{solution.description}</p>
              </div>
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
