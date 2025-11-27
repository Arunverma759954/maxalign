"use client";

import Image from "next/image";

export default function DoctorProfile() {
  return (
    <>
      {/* ===================== BANNER ===================== */}
      <section className="h-[60vh] md:h-[70vh] flex items-center justify-center bg-gradient-to-b from-[#0C3436] via-[#0A1F26] to-[#0C3436] text-white text-center px-6">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-[#4EE0D4]">
            Dr. Ayushi Verma
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mt-3">
            B.D.S., M.D.S. – Orthodontics & Dentofacial Orthopaedics  
          </p>
          <p className="text-lg md:text-xl text-gray-400 mt-2 font-medium">
            Certified Invisalign Provider
          </p>
        </div>
      </section>

     {/* ===================== ABOUT SECTION ===================== */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-12 items-start">

   

    {/* RIGHT CONTENT – 60% width */}
    <div className="md:col-span-3 space-y-5">

      <h2 className="text-3xl md:text-4xl font-bold text-[#0B7A75] leading-snug">
        Meet Dr. Ayushi Verma
      </h2>

      <p className="text-gray-600 leading-relaxed text-lg">
        Dr. Ayushi Verma is dedicated to providing world-class orthodontic and
        aesthetic dental care with a strong focus on comfort, precision, and
        patient education. She believes every smile is unique—so every treatment
        is tailor-made.
      </p>

      <p className="text-gray-600 leading-relaxed text-lg">
        She holds <span className="font-semibold text-[#0B7A75]">B.D.S. & M.D.S.</span> in Orthodontics & Dentofacial
        Orthopaedics, along with advanced certifications in smile designing,
        facial aesthetics, and modern orthodontic techniques.
      </p>

      <p className="text-gray-600 leading-relaxed text-lg">
        As a <span className="font-semibold text-[#0B7A75]">Certified Invisalign Provider</span>, Dr. Ayushi offers
        clear, comfortable, and highly effective teeth-alignment treatments
        designed for adults and teens who want a braces-free experience.
      </p>

      <p className="text-gray-600 leading-relaxed text-lg">
        Patients appreciate her gentle nature, detailed explanations and
        calm approach—making even anxious patients feel relaxed and cared for.
      </p>

      <p className="text-gray-600 leading-relaxed text-lg">
        Her mission is simple: to help every patient achieve a confident,
        healthy smile that enhances their personality and lifestyle.
      </p>

    </div>

     {/* LEFT IMAGE – 40% width */}
    <div className="md:col-span-2 flex justify-center md:justify-start">
      <Image
        src="/assets/dr.jpg"
        width={400}
        height={280}
        className="rounded-xl shadow-xl object-cover border border-gray-200"
        alt="Dr Ayushi Verma"
      />
    </div>
  </div>
</section>



      {/* ===================== SKILLS SECTION ===================== */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B7A75]">
            Expertise & Specializations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="p-6 bg-white shadow-md rounded-xl border">
              <h3 className="text-xl font-semibold text-[#0B7A75]">Orthodontics</h3>
              <p className="text-gray-600 mt-3">
                Braces, clear aligners, and bite correction treatments.
              </p>
            </div>

            <div className="p-6 bg-white shadow-md rounded-xl border">
              <h3 className="text-xl font-semibold text-[#0B7A75]">Invisalign Specialist</h3>
              <p className="text-gray-600 mt-3">
                Certified provider for invisible & painless teeth alignment.
              </p>
            </div>

            <div className="p-6 bg-white shadow-md rounded-xl border">
              <h3 className="text-xl font-semibold text-[#0B7A75]">Cosmetic Dentistry</h3>
              <p className="text-gray-600 mt-3">
                Smile designing, whitening, veneers & aesthetic treatments.
              </p>
            </div>

            <div className="p-6 bg-white shadow-md rounded-xl border">
              <h3 className="text-xl font-semibold text-[#0B7A75]">Restorative Dentistry</h3>
              <p className="text-gray-600 mt-3">
                Fillings, crowns, bridges & full-mouth rehabilitation.
              </p>
            </div>

            <div className="p-6 bg-white shadow-md rounded-xl border">
              <h3 className="text-xl font-semibold text-[#0B7A75]">Dental Implants</h3>
              <p className="text-gray-600 mt-3">
                Single, multiple & full arch implant solutions.
              </p>
            </div>

            <div className="p-6 bg-white shadow-md rounded-xl border">
              <h3 className="text-xl font-semibold text-[#0B7A75]">Root Canal Treatment</h3>
              <p className="text-gray-600 mt-3">
                Gentle, painless endodontic treatments with modern equipment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
