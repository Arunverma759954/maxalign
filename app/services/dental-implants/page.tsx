"use client";

import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

export default function DentalImplants() {
  return (
    <section className="w-full bg-white">

      {/* ===================== TOP BANNER ===================== */}
      <div className="relative w-full h-[55vh] md:h-[70vh]">
        <Image
          src="/assets/services/service-img1-banner.jpg" // replace with banner
          alt="Dental Implants Banner"
          fill
          className="object-cover brightness-[0.6]"
        />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="text-center text-white max-w-7xl">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
              Permanent Tooth Replacement in Marathahalli
            </h1>
            <p className="mt-4 text-xl md:text-2xl font-light drop-shadow">
              Best Implant Dentist at Max Align Dental Clinic
            </p>
          </div>
        </div>
      </div>

      {/* ===================== INTRO ===================== */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4">
          Are you struggling with a missing tooth or uncomfortable dentures? Max Align Dental Clinic offers the most advanced and affordable solutions for permanent tooth replacement. With expert care and cutting-edge technology, we’re a top choice for dental implants in Marathahalli and surrounding areas.
        </p>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4">
          Permanent and natural-looking solution, restores chewing and speech function, prevents bone loss and facial sagging, no harm to surrounding natural teeth, easy to maintain like natural teeth.
        </p>
      </div>

      {/* ===================== LEFT IMAGE / RIGHT CONTENT ===================== */}
      <div className="py-20 bg-gradient-to-r from-[#0B7A75]/90 via-[#083f41]/80 to-black text-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT IMAGE */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/assets/services/dental-implants.jpg" // replace with actual image
              alt="Dental Implants"
              width={500}
              height={400}
              className="rounded-xl shadow-2xl object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-[#00FFE0]">
              Meet the Tooth Implant Specialist Near You
            </h3>
            <p className="text-lg md:text-xl mb-4">
              Our clinic is home to one of the top implant dentists in Bangalore, recognized for precision and patient-first care. From single tooth implants to implant-supported dentures, we use 3D diagnostics and global-grade systems for long-lasting results.
            </p>
          </div>
        </div>
      </div>

      {/* ===================== OUR IMPLANT OPTIONS ===================== */}
      <div className="py-20 bg-white text-gray-800">
        <h4 className="text-2xl md:text-3xl font-bold mb-12 text-center text-[#0B7A75]">
          Our Implant Options Include
        </h4>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Single Tooth Implants: Replace one missing tooth without affecting others.",
            "Multiple Implants: Restore multiple teeth with minimal surgery.",
            "Full Mouth Implants: Complete smile makeover using fixed prosthetics.",
            "Implant-Supported Dentures: Stable and secure alternative to traditional dentures.",
            "Immediate Loading Implants: Temporary crown on the same day for quick aesthetics."
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-tr from-[#00FFE0]/20 to-[#083f41]/10 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 flex flex-col"
            >
              <div className="flex items-center mb-3">
                <FaCheckCircle className="text-[#00FFE0] text-2xl flex-shrink-0 mr-3" />
                <h5 className="text-lg md:text-xl font-semibold text-gray-800">
                  {item.split(":")[0]}
                </h5>
              </div>
              <p className="text-gray-700 ml-7">{item.split(":")[1]}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ===================== WHY CHOOSE MAXALIGN ===================== */}
      <div className="py-20 bg-gradient-to-r from-[#0B7A75]/10 to-[#083f41]/5 text-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#0B7A75]">
            Why Patients Trust Max Align
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Certified Implantologists",
              "Global brands like Nobel Biocare & Straumann",
              "Sterile and advanced surgical setups",
              "Gentle, minimal-pain techniques",
              "Post-procedure guidance and care",
              "Customized solutions for every patient",
              "Implant-supported dentures: Secure, comfortable, reliable",
              "Expert hands you can trust",
              "Transparent pricing & EMI options",
              "Convenient Marathahalli location with nearby areas served"
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-lg flex items-start space-x-3 hover:shadow-2xl transition"
              >
                <FaCheckCircle className="text-[#0B7A75] mt-1" />
                <span className="text-gray-800 text-lg md:text-xl">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===================== PATIENT TESTIMONIALS ===================== */}
      <div className="py-20 bg-gradient-to-r from-[#0B7A75]/80 via-[#083f41]/70 to-black text-white text-center px-6">
        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-[#00FFE0]">
          Patient Testimonials
        </h3>
        <p className="text-lg md:text-xl mb-4">
          “I was nervous about dental implants, but Max Align made it smooth and pain-free. Highly recommended!” – Priya R., Marathahalli
        </p>
        <p className="text-lg md:text-xl mb-4">
          “Best dental clinic for implants in Bangalore! Affordable, clean, and professional.” – Rajesh K., Whitefield
        </p>
      </div>

      {/* ===================== BOOK CONSULTATION CTA ===================== */}
      <div className="w-full bg-[#0B7A75] py-20 text-center text-white">
        <h3 className="text-3xl md:text-5xl font-bold mb-6">
          Book Your Free Consultation
        </h3>
        <p className="text-lg md:text-2xl mb-8">
          If you're looking for dental implants in Marathahalli or permanent tooth replacement near you, Max Align Dental Clinic is here to help.
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
