"use client";

import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

export default function CavityPage() {
  return (
    <section className="w-full bg-white">

      {/* ===================== TOP BANNER ===================== */}
      <div className="relative w-full h-[55vh] md:h-[70vh]">
        <Image
          src="/assets/services/cavity-banner.jpg" // replace with your banner image path
          alt="Painless Cavity Treatment Banner"
          fill
          className="object-cover brightness-[0.6]"
        />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="text-center text-white max-w-7xl">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
              Painless Cavity Treatment in Marathahalli
            </h1>
            <p className="mt-4 text-xl md:text-2xl font-light drop-shadow">
              Cavity Treatment in Marathahalli – Painless Dental Fillings at MaxAlign Dental Clinic
            </p>
          </div>
        </div>
      </div>

      {/* ===================== INTRO ===================== */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4">
          At MaxAlign Dental Clinic, we provide advanced and painless cavity treatment in Marathahalli using modern techniques and high-quality materials. Whether you’re suffering from mild tooth sensitivity or visible decay, our experienced dentists offer effective and affordable solutions, including painless dental fillings, composite fillings, and long-lasting results to protect your smile.
        </p>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          Dental cavities can worsen if untreated. Small holes or sensitivity can lead to pain, infection, or tooth loss. Our expert team uses advanced tools to detect even the tiniest cavities and treat them using painless filling procedures.
        </p>
      </div>

      {/* ===================== WHY CHOOSE MAXALIGN / CAVITY POINTS ===================== */}
      <div className="py-20 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#0B7A75]">
            Best Dentist for Cavities in Marathahalli
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg md:text-xl">
            {[
              "Gentle and friendly approach",
              "Zero-pain dental fillings",
              "Patient-first, comfort-focused care",
              "Affordable pricing with quality assurance"
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 shadow-lg rounded-xl p-6 flex items-start space-x-3 hover:shadow-2xl transition"
              >
                <FaCheckCircle className="text-[#0B7A75] mt-1" />
                <span className="text-gray-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===================== LEFT IMAGE / RIGHT CONTENT ===================== */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h3 className="text-3xl md:text-4xl font-bold text-[#0B7A75] mb-6">
            What Causes Tooth Cavities?
          </h3>
          <ul className="space-y-4 text-lg md:text-xl list-disc list-inside text-gray-700">
            {[
              "Poor oral hygiene",
              "Sugary or acidic food and drinks",
              "Bacteria buildup and plaque",
              "Genetic predisposition"
            ].map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <Image
            src="/assets/services/cavity1.jpg"
            alt="Cavity Causes"
            width={600}
            height={450}
            className="rounded-xl shadow-2xl object-cover"
          />
        </div>
      </div>

      {/* ===================== FILLING PROCEDURE ===================== */}
      <div className="py-20 bg-gradient-to-r from-[#0B7A75]/10 to-[#083f41]/5">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl md:text-4xl font-bold text-[#0B7A75] mb-10 text-center">
            Painless Tooth Filling Procedure at MaxAlign
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 text-lg md:text-xl text-gray-700">
            {[
              "Local anesthesia or numbing gels",
              "High-speed, low-vibration instruments",
              "Modern composite materials matching tooth color",
              "Cleaned, disinfected, and filled in a single visit"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center space-x-3">
                <FaCheckCircle className="text-[#0B7A75] mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ===================== TYPES OF FILLINGS ===================== */}
      <div className="py-20 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl md:text-4xl font-bold mb-10 text-center text-[#0B7A75]">
            Types of Fillings We Offer
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-lg md:text-xl">
            {[
              "Composite Fillings: Aesthetic, durable, and ideal for visible areas.",
              "Glass Ionomer Fillings (GIC): Fluoride-releasing, used for deep cavities or children's teeth.",
              "Temporary Fillings: For emergencies or interim treatment."
            ].map((item, idx) => (
              <div key={idx} className="bg-white border border-gray-200 shadow-lg rounded-xl p-6 flex items-start space-x-3 hover:shadow-2xl transition">
                <FaCheckCircle className="text-[#0B7A75] mt-1" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    {/* ===================== SERVICE LOCATIONS WITH IMAGE (WHITE BG) ===================== */}
<div className="py-20 bg-white text-gray-800">
  <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

    {/* LEFT IMAGE */}
    <div className="flex justify-center md:justify-start">
      <Image
        src="/assets/services/cavity2.jpg" // replace with your image path
        alt="Service Areas"
        width={500}
        height={400}
        className="rounded-xl shadow-2xl object-cover"
      />
    </div>

    {/* RIGHT CONTENT */}
    <div>
      <h3 className="text-3xl md:text-4xl font-bold mb-8 text-[#0B7A75]">
        Serving Areas
      </h3>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg md:text-xl">
        {[
          "Kundalahalli",
          "Brookefield",
          "Kartik Nagar",
          "Yemalur",
          "Panathur",
          "Kadubeesanahalli",
          "Whitefield"
        ].map((item, idx) => (
          <li key={idx} className="flex items-center space-x-3">
            <FaCheckCircle className="text-[#0B7A75]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>

  </div>
</div>


      {/* ===================== CTA ===================== */}
      <div className="w-full bg-[#0B7A75] py-20 text-center text-white">
        <h3 className="text-3xl md:text-5xl font-bold mb-6">
          Book Your Cavity Treatment Today
        </h3>
        <p className="text-lg md:text-2xl mb-8">
          If you're searching for cavity treatment in Marathahalli, painless dental fillings, or affordable dental care near you, MaxAlign is here for you.
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
