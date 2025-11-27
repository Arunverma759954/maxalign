"use client";

import BlogSection from "@/components/home/BlogSection";

export default function BlogPage() {
  return (
    <>
      {/* FULL HEIGHT BLOG BANNER (Same as About Page Style) */}
      <section className="h-[60vh] md:h-[70vh] flex items-center justify-center bg-gradient-to-b from-[#0C3436] via-[#0A1F26] to-[#0C3436] text-white">
        <div className="text-center px-6">
          <h1 className="text-4xl md:text-6xl  font-bold text-[#4EE0D4]">
            Dental Health Blogs & Updates
          </h1>

          <p className="text-gray-300 mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            Expert articles, dental tips, treatment insights, and guides to help you
            maintain a healthier smile every day.
          </p>
        </div>
      </section>

      {/* INTRO SECTION UNDER BANNER */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B7A75]">
            Explore Our Latest Dental Articles
          </h2>

          <p className="text-gray-600 mt-4 text-lg leading-relaxed max-w-3xl mx-auto">
            From professional teeth whitening to advanced orthodontic solutions, 
            our dental experts provide reliable information to help you make the 
            best choices for your oral health.
          </p>
        </div>
      </section>

      {/* BLOG GRID SECTION */}
      <BlogSection />
    </>
  );
}
