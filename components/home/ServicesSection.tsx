"use client";
import Link from "next/link";
import { FaTooth, FaSmile, FaTeethOpen } from "react-icons/fa";
import { GiTooth } from "react-icons/gi";
import { HiOutlineSparkles, HiOutlineClipboardList } from "react-icons/hi";

const services = [
  {
    title: "Orthodontics",
    description:
      "Straighten your smile with confidence. Our clinic provides traditional braces and invisible aligners for all age groups, with effective and pain-free solutions.",
    icon: <FaTeethOpen className="text-4xl text-[#4EE0D4]" />,
    link: "/services/orthodontics",
  },
  {
    title: "Professional Teeth Whitening",
    description:
      "Brighten your smile safely with advanced whitening technology using LED and whitening agents, restoring natural brightness in just one session.",
    icon: <HiOutlineSparkles className="text-4xl text-[#4EE0D4]" />,
    link: "/services/teeth-whitening",
  },
  {
    title: "Affordable Cavity Filling",
    description:
      "Prevent tooth decay with long-lasting, tooth-colored materials that restore your smile and function effectively.",
    icon: <FaTooth className="text-4xl text-[#4EE0D4]" />,
    link: "/services/cavity-filling",
  },
  {
    title: "Dental Implants",
    description:
      "Regain full function and aesthetics with top-rated implants using world-class systems and digital planning for perfect placement.",
    icon: <GiTooth className="text-4xl text-[#4EE0D4]" />,
    link: "/services/dental-implants",
  },
  {
    title: "Gum Disease Treatment",
    description:
      "Effective treatments for bleeding gums, bad breath, and periodontal infections using laser-assisted and non-surgical methods.",
    icon: <HiOutlineClipboardList className="text-4xl text-[#4EE0D4]" />,
    link: "/services/gum-disease",
  },
  {
    title: "Root Canal Treatment",
    description:
      "Pain-free procedure to save natural teeth and relieve dental pain with rotary instruments and apex locators for high precision.",
    icon: <FaSmile className="text-4xl text-[#4EE0D4]" />,
    link: "/services/root-canal",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0C3436] via-[#0A1F26] to-[#0C3436] text-white">
      <div className="max-w-7xl mx-auto px-6 md:text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-[#4EE0D4]">
          Our Dental Services
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Searching for the best dentist near Marathahalli, Bangalore? Get to MaxAlign and avail the right treatment with the latest technology and techniques.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
      <div
  key={index}
  className="relative bg-[#0C3B3A]/90 rounded-xl p-6 flex flex-col gap-4 shadow-xl transform transition-all duration-500
             hover:-translate-y-3 hover:shadow-[0_0_20px_#ffffff]"
>
  <div className="flex items-center justify-center mb-4">
    <div className="p-4 bg-[#0B7A75]/30 rounded-full animate-bounce">
      {service.icon}
    </div>
  </div>
  <h3 className="text-2xl font-semibold text-[#4EE0D4] text-center">
    {service.title}
  </h3>
  <p className="text-gray-200 text-center">{service.description}</p>
  <div className="flex justify-center mt-auto">
    <Link href={service.link}>
      <button className="bg-[#4EE0D4] hover:bg-[#36c9c0] text-black px-4 py-2 rounded-md font-semibold shadow-md transition">
        Read More
      </button>
    </Link>
  </div>
</div>


        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="/services">
          <button className="bg-[#0B7A75] hover:bg-[#096863] text-white px-8 py-3 rounded-md font-semibold shadow-md transition">
            View All Services
          </button>
        </Link>
      </div>
    </section>
  );
}
