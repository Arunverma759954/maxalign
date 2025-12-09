"use client";

import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

export default function TeethWhitening() {
  return (
    <section className="w-full bg-white">

      {/* ===================== TOP BANNER ===================== */}
      <div className="relative w-full h-[55vh] md:h-[70vh]">
        <Image
          src="/assets/services/teeth-banner.jpg" // replace with your banner image
          alt="Teeth Whitening Banner"
          fill
          className="object-cover brightness-[0.6]"
        />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="md:text-center text-white max-w-7xl">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
              The Importance of Teeth Whitening
            </h1>
            <p className="mt-4 text-xl md:text-2xl font-light drop-shadow">
              Reveal a Brighter, More Confident Smile
            </p>
          </div>
        </div>
      </div>

      {/* ===================== INTRO ===================== */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4">
          At Max Align Dental Clinic, we believe that a healthy, white smile can transform your appearance and boost your confidence. Our professional teeth whitening in Marathahalli offers a safe, effective, and dentist-supervised solution to remove years of stains and discoloration—delivering visible results in just one session.
        </p>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4">
          Whether you're preparing for a special occasion or simply want to enhance your smile, our advanced whitening treatments provide a fast, comfortable, and long-lasting solution tailored to your needs.
        </p>
      </div>

      {/* ===================== LEFT IMAGE / RIGHT CONTENT ===================== */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h3 className="text-3xl md:text-4xl font-bold text-[#0B7A75] mb-6">What is Teeth Whitening?</h3>
          <p className="text-gray-700 text-lg md:text-xl mb-4">
            Teeth whitening, also known as teeth bleaching, is a cosmetic dental procedure that lightens the color of your teeth by removing surface stains and deep-seated discoloration. Our clinic in Marathahalli offers modern whitening techniques that are gentle yet effective—perfect for anyone seeking a fresh, youthful smile.
          </p>
        </div>
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <Image
            src="/assets/services/teeth.jpg" // replace with your content image
            alt="Teeth Whitening"
            width={600}
            height={450}
            className="rounded-xl shadow-2xl object-cover"
          />
        </div>
      </div>

      {/* ===================== WHY CHOOSE PROFESSIONAL WHITENING WITH IMAGE ===================== */}
      <div className="py-20 bg-gradient-to-r from-[#0B7A75]/90 via-[#083f41]/80 to-black text-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT IMAGE */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/assets/services/teeth2.jpg" // replace with your image
              alt="Teeth Whitening Benefits"
              width={500}
              height={400}
              className="rounded-xl shadow-2xl object-cover"
            />
          </div>

          {/* RIGHT POINTS */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-8 text-[#00FFE0]">
              Why Choose Professional Whitening?
            </h3>
            <ul className="space-y-4 text-lg md:text-xl">
              {[
                "Faster Results: Noticeable whitening in one session",
                "Customized Treatment: Based on your shade and condition",
                "Safe Application: Gum and enamel protection",
                "Long-Lasting Effects: Maintainable with good hygiene"
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

      {/* ===================== WHITENING OPTIONS CARDS ===================== */}
      <div className="py-20 bg-gradient-to-r from-[#0B7A75]/10 to-[#083f41]/5">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl md:text-4xl font-bold text-[#0B7A75] mb-12 md:text-center">Our Whitening Options</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "In-Office Whitening: Instant results with LED-activated gel",
              "Take-Home Kits: Custom trays with detailed usage guide"
            ].map((item, idx) => (
              <div key={idx} className="bg-white shadow-lg rounded-xl p-6 flex items-start space-x-3 hover:shadow-2xl transition">
                <FaCheckCircle className="text-[#0B7A75] mt-1" />
                <span className="text-gray-800 text-lg md:text-xl">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===================== WHO CAN BENEFIT WITH IMAGE ===================== */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center md:justify-start">
          <Image
            src="/assets/services/teeth.jpg" // replace with your image
            alt="Who Can Benefit"
            width={500}
            height={400}
            className="rounded-xl shadow-2xl object-cover"
          />
        </div>
        <div className="order-2 md:order-2">
          <h3 className="text-3xl md:text-4xl font-bold text-[#0B7A75] mb-8">Who Can Benefit?</h3>
          <ul className="space-y-4 text-lg md:text-xl">
            {[
              "Tea, coffee, or wine stains",
              "Smoking or tobacco use",
              "Aging or certain medications",
              "Poor dental hygiene"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center space-x-3">
                <FaCheckCircle className="text-[#0B7A75] mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

    {/* ===================== POST-WHITENING CARE ===================== */}
<div className="py-20 bg-white text-gray-800">
  <div className="max-w-7xl mx-auto px-6">
    <h3 className="text-3xl md:text-4xl font-bold mb-10 md:text-center text-[#0B7A75]">
      Post-Whitening Care
    </h3>
    <div className="flex flex-wrap justify-center gap-6 text-lg md:text-xl">
      {[
        "Avoid staining foods for 24–48 hours",
        "Brush and floss regularly",
        "Use a straw for colored drinks",
        "Avoid tobacco",
        "Visit us for touch-ups as advised"
      ].map((item, idx) => (
        <div
          key={idx}
          className="flex items-center space-x-3 bg-[#F0FDF4] rounded-xl px-6 py-4 shadow-md hover:shadow-lg transition"
        >
          <FaCheckCircle className="text-[#0B7A75] mt-1" />
          <span>{item}</span>
        </div>
      ))}
    </div>
  </div>
</div>


      {/* ===================== WHY MAXALIGN WITH CARDS ===================== */}
      <div className="py-20 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl md:text-4xl font-bold mb-12 md:text-center text-[#0B7A75]">
            Why Max Align Dental Clinic?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Skilled Cosmetic Dentists: With advanced training",
              "Modern Technology: LED lights, digital planning",
              "Patient-Centered Care: Transparent and tailored",
              "Great Location: Near Bellandur, Indiranagar & more",
              "Budget-Friendly Packages: Flexible pricing"
            ].map((item, idx) => (
              <div key={idx} className="bg-white border border-gray-200 shadow-lg rounded-xl p-6 flex items-start space-x-3 hover:shadow-2xl transition">
                <FaCheckCircle className="text-[#0B7A75] mt-1" />
                <span className="text-gray-800 text-lg md:text-xl">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===================== CTA ===================== */}
      <div className="w-full bg-[#0B7A75] py-20 md:text-center text-white">
        <h3 className="text-3xl md:text-5xl font-bold mb-6">
          Book Your Teeth Whitening Appointment Today!
        </h3>
        <p className="text-lg md:text-2xl mb-8">
          Are you ready to unveil your best smile? Let the experts at Max Align Dental Clinic help you shine. Our professional teeth whitening in Marathahalli is designed to give you safe, effective, and confidence-boosting results.
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
