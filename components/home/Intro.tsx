"use client";

import Link from "next/link";

export default function DrIntro() {
  return (
    <section className="w-full bg-white py-20 md:py-24">
      <div className="max-w-4xl mx-auto px-6 md:text-center ">

        <p className="text-[#0B7A75] font-semibold tracking-wide uppercase">
          About Maxalign Dental Clinic
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mt-4">
          Meet <span className="text-[#0B7A75]">Dr. Ayushi Verma</span>
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed mt-6">
          At Maxalign Dental Clinic, we are committed to delivering exceptional dental
          care with a personal touch. Our modern and patient-friendly facility ensures
          comfort, cleanliness, and clinical excellence.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          Led by{" "}
          <strong className="text-[#0B7A75]">
            Dr. Ayushi Verma, B.D.S., M.D.S.
          </strong>{" "}
          — a Certified Invisalign Provider — we specialize in discreet and advanced
          teeth alignment using the latest dental technology.
        </p>

        {/* BUTTON */}
        <div className="mt-8">
          <Link href="/drprofile">
            <button className="bg-[#0B7A75] hover:bg-[#096863] text-white px-8 py-3 rounded-md font-semibold shadow-md transition">
              Meet the Doctor →
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}
