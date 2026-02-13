"use client";

import BlogSection from "@/components/home/BlogSection";
import Link from "next/link";

export default function BlogPage() {
  return (
    <>
      {/* HERO BANNER - Premium Design */}
      <section className="relative min-h-[65vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A1F26] via-[#0B7A75] to-[#0A1F26]">
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-2xl">
            Dental Health <span className="text-[#4EE0D4]">Blogs</span> & Updates
          </h1>
          <p className="text-gray-200 mt-6 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Expert articles, dental tips, treatment insights, and guides to help you maintain a healthier smile every day.
          </p>
        </div>
      </section>

      {/* INTRO - Clean & Spacious */}
      <section className="py-16 md:py-20 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Explore Our Latest Dental Articles
          </h2>
          <p className="text-gray-600 mt-4 text-lg leading-relaxed max-w-2xl mx-auto">
            From professional teeth whitening to advanced orthodontic solutions, our dental experts provide reliable information for your oral health.
          </p>
        </div>
      </section>

      {/* BLOG GRID */}
      <BlogSection />

      {/* BOOK APPOINTMENT CTA - Bottom of Page */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#0A1F26] to-[#0B7A75]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to Transform Your Smile?</h2>
          <p className="text-white/90 mt-4 text-lg">Book your appointment at Maxalign Dental — expert care in Marathahalli.</p>
          <Link
            href="/appointment"
            className="inline-block mt-8 px-10 py-4 rounded-xl bg-white text-[#0B7A75] font-bold text-lg hover:bg-[#4EE0D4] hover:text-[#0A1F26] transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            BOOK APPOINTMENT
          </Link>
        </div>
      </section>
    </>
  );
}
