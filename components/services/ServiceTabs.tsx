"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  FaTeethOpen, 
  FaSmile, 
  FaTooth, 
  FaHeartbeat,
  FaRegSmileBeam,
  FaTeeth 
} from "react-icons/fa";

const services = [
  { name: "Orthodontic Treatment", slug:"/services/orthodontic-treatment", icon: <FaTeethOpen size={18} /> },
  { name: "Teeth Whitening", slug:"/services/teeth-whitening", icon: <FaSmile size={18} /> },
  { name: "Cavity Treatment", slug:"/services/cavity-treatment", icon: <FaTooth size={18} /> },
  { name: "Gum-Disease Treatment", slug: "/services/gum-disease-treatment", icon: <FaHeartbeat size={18} /> },
  { name: "Invisible Aligners", slug:"/services/invisible-aligners", icon: <FaRegSmileBeam size={18} /> },
  { name: "Dental Implants", slug: "/services/dental-implants", icon: <FaTeeth size={18} /> },
];

export default function ServiceTabs() {
  const pathname = usePathname();

  return (
    <div className="w-full bg-white/70 backdrop-blur-xl border-b shadow-md sticky top-0 z-20">
      <div
        className="
          max-w-7xl mx-auto px-4 py-4
          grid grid-cols-2 gap-3
          md:flex md:gap-4 md:overflow-x-auto md:no-scrollbar
        "
      >
        {services.map((item) => {
          const active = pathname === item.slug;

          return (
            <Link key={item.slug} href={item.slug} className="w-full md:w-auto">
              <div
                className={`flex items-center justify-center md:justify-start gap-2 
                  px-4 py-3 rounded-full text-xs md:text-base font-semibold transition-all 
                  shadow-sm text-center
                ${
                  active
                    ? "bg-[#0B7A75] text-white shadow-lg md:scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-[#0B7A75]/10 md:hover:scale-105"
                }`}
              >
                {/* Icon only on desktop */}
                <span className="hidden md:inline-flex">
                  {item.icon}
                </span>

                <span>{item.name}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
