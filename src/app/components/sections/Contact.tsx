import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import imgLeft from "@/assets/images/icons/airplane_icon.svg";
import imgRight from "@/assets/images/icons/arrow_icon.svg";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center py-16 lg:py-24"
      style={{
        backgroundImage:
          'linear-gradient(0deg, rgba(255, 255, 255, 0) 83.27%, rgb(255, 255, 255) 100%), linear-gradient(rgba(255, 255, 255, 0) 74.58%, rgb(255, 255, 255) 100%), url(\'data:image/svg+xml;utf8,<svg viewBox="0 0 1440 959" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><rect x="0" y="0" height="100%" width="100%" fill="url(%23grad)" opacity="1"/><defs><radialGradient id="grad" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="10" gradientTransform="matrix(60.48 0 0 73.498 1466.1 862.33)"><stop stop-color="rgba(255,166,148,0.15)" offset="0"/><stop stop-color="rgba(255,166,148,0)" offset="1"/></radialGradient></defs></svg>\'), url(\'data:image/svg+xml;utf8,<svg viewBox="0 0 1440 959" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><rect x="0" y="0" height="100%" width="100%" fill="url(%23grad)" opacity="1"/><defs><radialGradient id="grad" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="10" gradientTransform="matrix(79.085 0 0 67.686 0 726.83)"><stop stop-color="rgba(129,105,255,0.15)" offset="0"/><stop stop-color="rgba(129,105,255,0)" offset="1"/></radialGradient></defs></svg>\'), linear-gradient(rgb(255, 255, 255) 0%, rgb(247, 248, 253) 8.78%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0E2E78] mb-6">
            CONTACT
          </h2>
        </motion.div>

        {/* Box with transparent background */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative bg-transparent border-2 border-white rounded-[20px] shadow-[0px_3px_12px_0px_rgba(0,0,0,0.12),0px_0px_2px_0px_rgba(0,0,0,0.3)] overflow-hidden h-[600px] flex items-center justify-center py-20 px-8"
        >
          {/* Left Image - Rocket */}
          <div className="absolute bottom-[58px] left-[72px] w-[120px] h-[120px]">
            <img src={imgLeft} alt="" className="w-full h-full object-cover" />
          </div>

          {/* Right Image - Magnifying Glass */}
          <div className="absolute top-[58px] right-[82px] w-[90px] h-[114px]">
            <img src={imgRight} alt="" className="w-full h-full object-cover" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col gap-[50px] items-center text-center max-w-4xl">
            <div className="flex flex-col gap-[20px] items-center">
              <div className="font-bold text-[#0e2e78] text-[36px]">
                <p className="leading-[48px] mb-0">
                  모두를 위한 서비스를 위해 시장의 변화를
                </p>
                <p className="leading-[48px]">
                  빠르게 대응하고 변화하는 플랫폼 기업입니다
                </p>
              </div>
              <div className="font-medium text-[#6f8394] text-[18px]">
                <p className="leading-[28px] mb-0">
                  기술 발전과 인터넷의 정보의 다양성에 힘입어 전 세계 사람들이
                </p>
                <p className="leading-[28px]">
                  사랑과 인간 관계를 찾는 새로운 방법을 찾아나가고 있습니다.
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-4 text-[#6f8394] text-[16px]">
              <div className="flex flex-col sm:flex-row gap-2 items-center justify-center">
                <span className="font-semibold text-[#0e2e78]">주소:</span>
                <span>경기도 광명시 일직로 43(GIDC광명역)</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 items-center justify-center">
                <span className="font-semibold text-[#0e2e78]">이메일:</span>
                <span>inhousesoft@inhousesoft.com</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
