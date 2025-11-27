"use client";
import Link from "next/link";

export default function ServiceSection() {
  const services = [
    {
      name: "Orthodontic Treatment",
      img: "/assets/services/s1.jpg",
      desc: "Straighten your teeth with personalized orthodontic care for a perfect smile.",
      link: "/services/orthodontic-treatment",
    },
    {
      name: "Teeth Whitening",
      img: "/assets/services/s2.jpg",
      desc: "Brighten your smile with safe and effective teeth whitening treatments.",
      link: "/services/teeth-whitening",
    },
    {
      name: "Cavity Treatment",
      img: "/assets/services/s3.jpg",
      desc: "Restore your teeth with expert cavity treatment and filling options.",
      link: "/services/cavity-treatment",
    },
    {
      name: "Gum-Disease Treatment",
      img: "/assets/services/s4.jpg",
      desc: "Protect your gums and maintain oral health with professional care.",
      link: "/services/gum-disease-treatment",
    },
    {
      name: "Invisible Aligners",
      img: "/assets/services/s5.jpg",
      desc: "Discreetly align your teeth with custom-made invisible aligners.",
      link: "/services/invisible-aligners",
    },
    {
      name: "Dental Implants",
      img: "/assets/services/s6.jpg",
      desc: "Replace missing teeth with natural-looking and durable dental implants.",
      link: "/services/dental-implants",
    },
  ];

  return (
    <section className="w-full relative overflow-hidden bg-white">

      {/* Banner Section */}
      <div className="w-full h-[400px] md:h-[500px] bg-gradient-to-r from-[#0B7A75] via-[#083f41] to-black flex items-center justify-center">
        <div className="text-center px-6 z-10 max-w-2xl animate-fadeSlideInLeft">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white 
                         relative inline-block 
                         tracking-tight
                         text-shadow-[2px_2px_0_rgba(0,0,0,0.3),
                                      4px_4px_0_rgba(0,0,0,0.2),
                                      6px_6px_0_rgba(0,0,0,0.1)]">
            Our Services
          </h1>
          <p className="text-gray-200 mt-6 text-lg md:text-l drop-shadow-lg">
            We offer a wide range of expert dental treatments to keep your smile healthy and bright.
          </p>
        </div>
      </div>

      {/* Intro Section */}
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h2
          className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent 
                     bg-gradient-to-r from-[#0B7A75] via-[#083f41] to-black mb-8"
        >
          Personalized Care for Your Smile
        </h2>
        <p className="text-gray-700 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-4">
          At Maxalign Dental Clinic, our dedicated team provides personalized care tailored to your needs. We combine the latest technology with compassionate care to ensure every visit is comfortable and effective.
        </p>
        <p className="text-gray-700 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
          From routine check-ups to advanced dental procedures, our goal is to help you achieve a healthy, confident smile. Trust us to make your dental experience smooth, safe, and rewarding.
        </p>
      </div>

      {/* Services Upper Heading */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-bold text-[#0B7A75]">
          Explore Our Expert Services
        </h3>
      </div>

      {/* Services List with Gradient Cards */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        {services.map(({ name, img, desc, link }, idx) => (
          <Link key={idx} href={link} className="block">
            <div className="bg-gradient-to-b from-[#E0F7F6]/50 to-[#0B7A75]/20 rounded-3xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow">
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={img}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-[#0B7A75] font-semibold text-2xl mb-3">{name}</h3>
                <p className="text-gray-700 text-base leading-relaxed">{desc}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
