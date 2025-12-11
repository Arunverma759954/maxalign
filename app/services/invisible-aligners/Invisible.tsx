"use client";
import ServiceTabs from "@/components/services/ServiceTabs";
import Image from "next/image";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
const faqs = [
  {
    q: "Are invisible aligners suitable for adults and teens?",
    a: "Yes, the invisible aligners we use at MaxAlign are fully safe, comfortable, and ideal for both adults and teens. They help straighten teeth discreetly while maintaining oral hygiene.",
  },
  {
    q: "How long does the treatment with clear aligners take?",
    a: "Most clear aligner treatments take 6–12 months depending on the complexity of alignment required. Some cases may finish sooner.",
  },
  {
    q: "Are invisible aligners painful?",
    a: "Clear aligners are not painful. You may experience mild pressure during the first few days of wearing a new set, which is completely normal.",
  },
  {
    q: "Are clear braces affordable at MaxAlign Dental Clinic?",
    a: "Yes! We offer affordable and flexible plans to ensure clear aligner treatment fits every budget.",
  },
  {
    q: "Can invisible aligners correct all types of dental alignment issues?",
    a: "Invisible aligners can correct most alignment issues such as gaps, crowding, and mild-to-moderate bite problems. Severe cases may require additional orthodontic care.",
  },
];

export default function Invisible() {
    const [open, setOpen] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpen(open === i ? null : i);
  };
  return (
    <section className="w-full bg-white">

      {/* ===================== TOP BANNER ===================== */}
      <div className="relative w-full h-[55vh] md:h-[70vh]">
        <Image
          src="/assets/services/banner-invisalign.jpg" // replace with your banner
          alt="Invisible Aligners Banner"
          fill
          className="object-cover brightness-[0.6]"
        />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="md:text-center text-white max-w-7xl">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
              Invisalign Provider Marathahalli
            </h1>
            <p className="mt-4 text-xl md:text-2xl font-light drop-shadow">
              Affordable, Aesthetic Aligners at MaxAlign
            </p>
          </div>
        </div>
      </div>
      <ServiceTabs />

      {/* ===================== INTRO ===================== */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4">
          Are you willing to transform your smile? Well, no need to make any issue or discomfort in your surroundings, and grab the best look comfortably without anyone noticing! This will be a remarkable journey for you.
        </p>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4">
          However, some are still searching for the ideal provider of invisible aligners Marathahalli. It is MaxAlign that not only delivers invisible aligners but also aids in other types of dental services in Marathahalli, Bangalore.
        </p>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4">
          Whether you’re a professional, student, or simply want a smile upgrade, MaxAlign’s expert team ensures your journey is smooth, personalized, and rewarding. Join us today and embrace your finest looks with our invisible aligner treatment.
        </p>
      </div>

      {/* ===================== DISCOVER INVISIBLE ALIGNERS ===================== */}
      <div className="py-20 bg-gradient-to-r from-[#0B7A75]/90 via-[#083f41]/80 to-black text-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT IMAGE */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/assets/services/invisalign.jpg" // replace with actual image
              alt="Invisible Aligners"
              width={500}
              height={400}
              className="rounded-xl shadow-2xl object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-[#00FFE0]">
              Discover Invisible Aligners at MaxAlign
            </h3>
            <ul className="space-y-4 text-lg md:text-xl">
              {[
                "Discreet, Modern & Hassle-Free",
                "Use advanced 3D imaging",
                "Guaranteed results",
                "Supervise every step",
                "Give you the peace of mind",
                "Take care of every procedure from start to finish"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center space-x-3">
                  <FaCheckCircle className="text-[#00FFE0] mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ===================== WHY CHOOSE MAXALIGN ===================== */}
      <div className="py-20 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl md:text-4xl font-bold mb-12 md:text-center text-[#0B7A75]">
            MaxAlign: The Invisalign Provider Marathahalli Trusts
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Digital scans for precision-fit clear aligners",
              "A step-by-step treatment plan personalized for you",
              "Smooth and easy progress at every visit",
              "Pain-free and transparent braces Bangalore",
              "Expert team with advanced technology",
              "Regular check-ins and easy support whenever you need",
              "Prioritize a patient’s requirements",
              "A friendly consultation with our expert dentists",
              "Affordable aligners for adults Marathahalli",
              "Results are visible in months without any delay"
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-r from-[#0B7A75]/10 to-[#083f41]/5 p-6 rounded-xl shadow-lg flex items-start space-x-3 hover:shadow-2xl transition"
              >
                <FaCheckCircle className="text-[#0B7A75] mt-1" />
                <span className="text-gray-800 text-lg md:text-xl">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===================== CONCLUSION ===================== */}
      <div className="py-20 bg-gradient-to-r from-[#0B7A75]/80 via-[#083f41]/70 to-black text-white md:text-center px-6">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl md:text-4xl  font-bold mb-6 text-[#00FFE0]">
          Conclusion
        </h3>
        <p className="text-lg md:text-xl mb-4">
          Going with MaxAlign for invisible aligners Marathahalli isn’t just a simple option but a strong commitment. With the finest dental clinic in Marathahalli, Bangalore, it provides modern invisible aligners and clear braces. All types of advanced treatments are easy to access in the presence of experienced dentists.
        </p>
        <p className="text-lg md:text-xl mb-4">
          Wait no more and take your first step with us. Get ready to get affordable invisible aligners, enjoy flexible care, and most of all — fall in love with your reflection every day!
        </p>
        </div>
      </div>

    

      {/* ===================== FAQs ===================== */}
     <div className="py-20 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl md:text-4xl font-bold mb-10 md:text-center text-[#0B7A75]">
          FAQs
        </h3>

        <div className="space-y-4">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition p-5"
            >
              {/* Question Row */}
              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center font-semibold text-lg md:text-xl text-left"
              >
                {item.q}
                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    open === i ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? "max-h-40 mt-3" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>

        {/* ===================== BOOK CONSULTATION CTA ===================== */}
      <div className="w-full p-4 bg-[#0B7A75] py-20 md:text-center text-white">
        <h3 className="text-3xl md:text-5xl font-bold mb-6">
          Book Your Consultation
        </h3>
        <p className="text-lg md:text-2xl mb-8">
          Join MaxAlign for invisible aligners Marathahalli and transform your smile with comfort and confidence.
        </p>
        <a href="/contact">
          <button className="bg-white text-[#0B7A75] px-10 py-4 rounded-lg shadow-lg text-lg md:text-xl font-semibold hover:bg-gray-100 transition">
            Book Your Appointment
          </button>
        </a>
      </div>

    </section>
  );
}
