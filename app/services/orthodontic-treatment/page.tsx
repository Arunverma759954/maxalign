"use client";

import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

export default function OrthodonticTreatment() {
  return (
    <section className="w-full bg-white">

      {/* ===================== TOP BANNER ===================== */}
      <div className="relative w-full h-[55vh] md:h-[70vh]">
        <Image
          src="/assets/services/service-img1-banner.jpg"
          alt="Orthodontic Treatment Banner"
          fill
          className="object-cover brightness-[0.6]"
        />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="text-center text-white max-w-7xl">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
              The Importance of Orthodonic Treatment
            </h1>
            <p className="mt-4 text-xl md:text-2xl font-light drop-shadow">
              Best Orthodontic Treatment in Marathahalli
            </p>
          </div>
        </div>
      </div>

      {/* ===================== INTRO ===================== */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0B7A75] via-[#083f41] to-black mb-10">
          MaxAlign Dental Clinic
        </h2>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4">
          Your smile is the first thing people notice about you, and it deserves the best care. At MaxAlign Dental Clinic, we offer expert orthodontic treatment in Marathahalli to help align your teeth, correct bite issues, and give you a smile you will love for life.
        </p>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4">
          Whether you are a teen, adult, or parent seeking help for your child, we ensure safe, personalized, and affordable care in a friendly setting.
        </p>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          If you are looking for the best orthodontist in Marathahalli Bengaluru, or a certified orthodontist near Marathahalli, our standards and experience match the highest levels of care across India.
        </p>
      </div>

      {/* ===================== LEFT IMAGE / RIGHT CONTENT ===================== */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h3 className="text-3xl md:text-4xl font-bold text-[#0B7A75] mb-6">What is Orthodontics?</h3>
          <p className="text-gray-700 text-lg md:text-xl mb-4">
            Orthodontics is a branch of dentistry that focuses on correcting the position of teeth and jaws...
          </p>
          <p className="text-gray-700 text-lg md:text-xl">
            Orthodontic treatment uses devices like braces or clear aligners to gently move teeth into their correct positions...
          </p>
        </div>
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <Image
            src="/assets/services/service-img1.jpg"
            alt="Orthodontics"
            width={600}
            height={450}
            className="rounded-xl shadow-2xl object-cover"
          />
        </div>
      </div>

      {/* ===================== BRACES TYPES CARDS ===================== */}
      <div className="bg-gradient-to-r from-[#0B7A75]/10 to-[#083f41]/5 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl md:text-4xl font-bold text-[#0B7A75] mb-12 text-center">Braces Types</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Metal Braces: Durable and effective...",
              "Ceramic Braces: Tooth-colored braces...",
              "Lingual Braces: Completely hidden...",
              "Clear Aligners: Transparent trays...",
              "Self-Ligating Braces: Modern braces..."
            ].map((item, idx) => (
              <div key={idx} className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
                <div className="flex items-center mb-3">
                  <FaCheckCircle className="text-[#0B7A75] mr-3" />
                  <h4 className="font-semibold text-lg">{item.split(':')[0]}</h4>
                </div>
                <p className="text-gray-700">{item.split(':')[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
{/* ===================== WHY CHOOSE ORTHODONTICS WITH IMAGE ===================== */}
<div className="py-20 bg-gradient-to-r from-[#0B7A75]/90 via-[#083f41]/80 to-black text-white">
  <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    
    {/* LEFT IMAGE */}
    <div className="flex justify-center md:justify-start">
      <Image
        src="/assets/services/service-img1.jpg" // replace with your image path
        alt="Orthodontics Benefits"
        width={500}
        height={400}
        className="rounded-xl shadow-2xl object-cover"
      />
    </div>

    {/* RIGHT POINTS */}
    <div>
      <h3 className="text-3xl md:text-4xl font-bold mb-8 text-[#00FFE0]">
        Why Choose Orthodontics?
      </h3>
      <ul className="space-y-4 text-lg md:text-xl">
        {[
          "Better Oral Hygiene",
          "Improved Chewing & Speech",
          "Improved Appearance & Confidence",
          "Reduced Wear & Tear on Teeth",
          "Long-Term Dental Health Benefits"
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

    {/* ===================== WHY CHOOSE MAXALIGN WITH CARDS ===================== */}
<div className="py-20 bg-white text-gray-800">
  <div className="max-w-6xl mx-auto px-6">
    <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#0B7A75]">
      Why Choose MaxAlign Dental Clinic?
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[
        "Certified Orthodontists: Experienced professionals using the latest tech",
        "Tailored Plans: Customized to suit your smile and budget",
        "Modern Equipment: Digital X-rays, 3D scans, and more",
        "Friendly Environment: Comfort-focused care for all ages",
        "Affordable Pricing: EMI and packages for all needs"
      ].map((item, idx) => (
        <div
          key={idx}
          className="bg-white border border-gray-200 shadow-lg rounded-xl p-6 flex items-start space-x-3 hover:shadow-2xl transition"
        >
          <FaCheckCircle className="text-[#0B7A75] mt-1" />
          <span className="text-gray-800 text-lg md:text-xl">{item}</span>
        </div>
      ))}
    </div>
  </div>
</div>


      {/* ===================== POST-TREATMENT CARE TIPS ===================== */}
      <div className="py-20 bg-white text-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl md:text-4xl font-bold mb-10 text-center text-[#0B7A75]">
            Post-Treatment Care Tips
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg md:text-xl">
            {[
              "Wear your retainers as advised",
              "Brush and floss regularly",
              "Avoid hard/sticky foods",
              "Visit for 6-month checkups"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center space-x-3">
                <FaCheckCircle className="text-[#0B7A75] mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ===================== CTA ===================== */}
      <div className="w-full bg-[#0B7A75] py-20 text-center text-white">
        <h3 className="text-3xl md:text-5xl font-bold mb-6">
          Ready for a Confident, Beautiful Smile?
        </h3>
        <p className="text-lg md:text-2xl mb-8">
          If you’re looking for a certified orthodontist near Marathahalli, we’re your trusted partner.
        </p>
        <a href="/contact">
          <button className="bg-white text-[#0B7A75] px-10 py-4 rounded-lg shadow-lg text-lg md:text-xl font-semibold hover:bg-gray-100 transition">
            Book Your Consultation
          </button>
        </a>
      </div>

    </section>
  );
}
