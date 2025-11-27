"use client";

import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

export default function GumDiseaseTreatment() {
  return (
    <section className="w-full bg-white">

      {/* ===================== TOP BANNER ===================== */}
      <div className="relative w-full h-[55vh] md:h-[70vh]">
        <Image
          src="/assets/services/gum-banner.jpg" // replace with relevant gum disease banner
          alt="Gum Disease Treatment Banner"
          fill
          className="object-cover brightness-[0.6]"
        />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="text-center text-white max-w-7xl">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
              Gum Disease Treatment in Marathahalli
            </h1>
            <p className="mt-4 text-xl md:text-2xl font-light drop-shadow">
              Expert Periodontal Care for Bleeding Gums & Infections
            </p>
          </div>
        </div>
      </div>

      {/* ===================== INTRO ===================== */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4">
          If you’re experiencing bleeding gums, gum swelling, or persistent bad breath, you may be suffering from gum disease. At Max Align Dental Clinic, we specialize in gum disease treatment in Marathahalli with advanced techniques and personalized care.
        </p>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4">
          Our team, led by experienced periodontists, is dedicated to restoring your gum health and preventing tooth loss. We also serve Kundalahalli, Brookefield, Kartik Nagar, Yemalur, Panathur, Kadubeesanahalli, and Whitefield.
        </p>
      </div>

      {/* ===================== LEFT IMAGE / RIGHT CONTENT ===================== */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h3 className="text-3xl md:text-4xl font-bold text-[#0B7A75] mb-6">What Is Gum Disease?</h3>
          <p className="text-gray-700 text-lg md:text-xl mb-4">
            Also known as periodontal disease, gum disease starts with gingivitis—a mild inflammation caused by plaque. If untreated, it can progress to periodontitis, leading to gum recession, bone loss, and tooth loss.
          </p>
          <ul className="list-disc list-inside text-gray-700 text-lg md:text-xl">
            <li>Swollen or tender gums</li>
            <li>Bleeding while brushing or flossing</li>
            <li>Persistent bad breath</li>
            <li>Loose or shifting teeth</li>
            <li>Receding gum line</li>
          </ul>
        </div>
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <Image
            src="/assets/services/gum2.jpg" // replace with relevant gum image
            alt="Gum Disease"
            width={600}
            height={450}
            className="rounded-xl shadow-2xl object-cover"
          />
        </div>
      </div>

      {/* ===================== GUM TREATMENTS ===================== */}
      <div className="py-20 bg-gradient-to-r from-[#0B7A75]/10 to-[#083f41]/5">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl md:text-4xl font-bold text-[#0B7A75] mb-12 text-center">Advanced Gum Treatments at Max Align</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg md:text-xl">
            {[
              "Deep Cleaning (Scaling & Root Planing): Removes tartar below the gumline",
              "Laser Therapy: Non-invasive, painless infection removal",
              "Surgical Options: Flap surgery, bone grafts, and soft tissue regeneration",
              "Comprehensive gum evaluation",
              "Professional teeth cleaning",
              "Oral hygiene guidance",
              "Antibacterial rinses & medication"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start space-x-3">
                <FaCheckCircle className="text-[#0B7A75] mt-1" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ===================== WHO SHOULD SEE A PERIODONTIST ===================== */}
      <div className="py-20 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#0B7A75]">
            Who Should See a Periodontist?
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg md:text-xl">
            {[
              "Gums bleed regularly",
              "Persistent bad breath",
              "Red, swollen, or shiny gums",
              "Receding gums or mobile teeth",
              "Prompt treatment can prevent serious health issues like heart disease, diabetes, and tooth loss"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start space-x-3">
                <FaCheckCircle className="text-[#0B7A75] mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ===================== SERVING AREAS ===================== */}
      <div className="py-20 bg-gradient-to-r from-[#0B7A75]/90 via-[#083f41]/80 to-black text-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT IMAGE */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/assets/services/gum.jpg" // replace with relevant image
              alt="Service Areas"
              width={500}
              height={400}
              className="rounded-xl shadow-2xl object-cover"
            />
          </div>
          {/* RIGHT CONTENT */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-8 text-[#00FFE0]">Serving Areas</h3>
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
                  <FaCheckCircle className="text-[#00FFE0]" />
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
          Book Your Gum Health Appointment Today!
        </h3>
        <p className="text-lg md:text-2xl mb-8">
          Don’t let gum disease steal your smile. Visit Max Align Dental Clinic in Marathahalli for advanced and compassionate gum care.
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
