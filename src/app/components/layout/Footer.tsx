import imgLogoFooter from "@/assets/images/footer_logo.svg";

export default function Footer() {
  return (
    <footer className="bg-[#0e2e78] relative w-full py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-6">
          {/* Logo */}
          <div className="w-12 h-8">
            <img
              src={imgLogoFooter}
              alt="inhousesoft"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Copyright */}
          <div className="font-['Hind_Vadodara',sans-serif] text-[14px] text-white leading-[20px]">
            © 2024 inhousesoft, all rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
