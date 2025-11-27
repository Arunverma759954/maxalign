"use client";
import Link from "next/link";
import Image from "next/image";

export default function DentalBanner() {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#041A1C] via-[#062F33] to-[#09474A] text-white pt-32 md:pt-40 pb-0 overflow-hidden">

      {/* Decorative Side Icons */}
      <div className="absolute left-0 top-1/4 text-white/10 text-6xl hidden md:block">⭐</div>
      <div className="absolute right-0 top-1/3 text-white/10 text-6xl hidden md:block">✦</div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16 relative">

        {/* LEFT CONTENT */}
        <div className="md:w-1/2 space-y-6 z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Your Smile, Our Passion
          </h1>

          <p className="text-lg md:text-xl text-gray-200">
            At Maxalign Dental Clinic, we promise exceptional dental care with advanced modern technology to ensure a brighter, healthier smile.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link href="/services">
              <button className="bg-[#4EE0D4] hover:bg-[#3acabe] text-black px-6 py-3 rounded-md font-semibold shadow-md transition">
                Our Services
              </button>
            </Link>

            <Link href="/appointment">
              <button className="bg-white hover:bg-gray-200 text-black px-6 py-3 rounded-md font-semibold shadow-md transition">
                Book Appointment
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE FULL IMAGE - TOUCHING BOTTOM */}
        <div className="md:w-1/2 relative flex justify-center md:justify-end">

          <div className="relative w-[320px] h-[420px] md:w-[420px] md:h-[550px] bottom-0">
            <Image
              src="/assets/dr.jpg"
              alt="Dentist"
              fill
              className="object-cover object-bottom"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
