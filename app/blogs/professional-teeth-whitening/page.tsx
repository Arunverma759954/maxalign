"use client";

import Image from "next/image";
import Link from "next/link";

export default function WhiteningBlog() {
  return (
    <>
      {/* ================== DARK BLOG BANNER ================== */}
  <div className="bg-white">   
<section
  className="relative w-full h-[55vh] md:h-[65vh] flex items-center justify-center
    bg-gradient-to-b from-[#0A1F26] via-[#0B7A75] to-[#0A1F26]"
>
  <div className="text-center px-6 max-w-7xl mx-auto">
    <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-xl leading-tight">
            Top 5 Benefits of Professional Teeth Whitening
          </h1>

          <p className="text-gray-300 mt-4 text-lg md:text-xl">
            Admin • 19 Jul 2025
          </p>
        </div>
      </section>

      {/* ================== PAGE CONTENT ================== */}
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* LEFT ARTICLE - Image inside content box */}
          <article className="md:col-span-2 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="overflow-hidden">
              <Image
                src="/assets/blogs/b2.jpg"
                alt="Professional Teeth Whitening"
                width={900}
                height={450}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="p-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B7A75] mb-6 leading-snug">
              Top 5 Benefits of Professional Teeth Whitening
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">

              <p>
                <strong>Reveal a Brighter, More Confident Smile</strong><br /><br />
                At Max Align Dental Clinic, we believe that a healthy, white smile can transform your appearance and boost your confidence.
                Our professional teeth whitening in Marathahalli offers a safe, effective, and dentist-supervised solution to remove years of stains —
                delivering visible results in just one session.
              </p>

              <h3 className="text-2xl font-bold text-[#0B7A75]">What is Teeth Whitening?</h3>
              <p>
                Teeth whitening is a cosmetic dental procedure that lightens the color of your teeth by removing surface stains and deep discoloration.
                It’s safe, effective and designed to give you a bright, youthful smile.
              </p>

              <h3 className="text-2xl font-bold text-[#0B7A75]">
                Why Choose Professional Whitening?
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Faster Results – noticeable in one session</li>
                <li>Custom shade planning</li>
                <li>Enamel-safe procedures</li>
                <li>Long-lasting outcomes</li>
              </ul>

              <h3 className="text-2xl font-bold text-[#0B7A75]">Our Whitening Options</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>In-office LED whitening</li>
                <li>Custom take-home gel trays</li>
              </ul>

              <h3 className="text-2xl font-bold text-[#0B7A75]">Who Can Benefit?</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Tea, coffee, or wine stains</li>
                <li>Smoking or tobacco stains</li>
                <li>Aging discoloration</li>
                <li>Medication stains</li>
              </ul>

              <h3 className="text-2xl font-bold text-[#0B7A75]">What to Expect</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Examination & shade check</li>
                <li>Gum protection</li>
                <li>LED activation gel</li>
                <li>Instant whitening boost</li>
              </ul>

              <h3 className="text-2xl font-bold text-[#0B7A75]">Post-Whitening Care</h3>
              <ul className="list-disc pl-6 space-y-2 mb-10">
                <li>Avoid colored foods for 24–48 hours</li>
                <li>Maintain brushing & flossing</li>
                <li>Use a straw for cold drinks</li>
                <li>Avoid tobacco</li>
              </ul>

            </div>
            </div>

          </article>

          {/* RIGHT SIDEBAR */}
          <aside className="space-y-8">
            <div className="bg-white shadow-lg rounded-xl p-6 border">
              <h3 className="text-2xl font-bold text-[#0B7A75] mb-4">
                Latest Blogs
              </h3>

              <div className="space-y-5">
                <Link href="/blogs/max-align-best-dental-clinic" className="block overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md hover:shadow-lg transition group">
                  <div className="overflow-hidden">
                    <Image src="/assets/blogs/b1.jpg" width={280} height={140} alt="Why Max Align is one of the Best Dental Clinics in Marathahalli" className="w-full h-28 object-cover group-hover:scale-105 transition duration-300" />
                  </div>
                  <p className="p-3 text-gray-700 font-medium">Why Max Align is one of the Best Dental Clinics in Marathahalli</p>
                </Link>
                <Link href="/blogs/professional-teeth-whitening" className="block overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md hover:shadow-lg transition group">
                  <div className="overflow-hidden">
                    <Image src="/assets/blogs/b2.jpg" width={280} height={140} alt="Top 5 Benefits of Professional Teeth Whitening" className="w-full h-28 object-cover group-hover:scale-105 transition duration-300" />
                  </div>
                  <p className="p-3 text-gray-700 font-medium">Top 5 Benefits of Professional Teeth Whitening</p>
                </Link>
                <Link href="/blogs/importance-of-dental-checkups" className="block overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md hover:shadow-lg transition group">
                  <div className="overflow-hidden">
                    <Image src="/assets/blogs/b3.jpg" width={280} height={140} alt="The Importance of Regular Dental Check-Ups" className="w-full h-28 object-cover group-hover:scale-105 transition duration-300" />
                  </div>
                  <p className="p-3 text-gray-700 font-medium">The Importance of Regular Dental Check-Ups</p>
                </Link>
                <Link href="/blogs/teeth-whitening" className="block overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md hover:shadow-lg transition group">
                  <div className="overflow-hidden">
                    <Image src="/assets/blogs/b2.jpg" width={280} height={140} alt="Why Winter is the Best Time to Have Teeth Whitening in Bangalore" className="w-full h-28 object-cover group-hover:scale-105 transition duration-300" />
                  </div>
                  <p className="p-3 text-gray-700 font-medium">Why Winter is the Best Time to Have Teeth Whitening in Bangalore</p>
                </Link>
                <Link href="/blogs/WinterDentalCareBlog" className="block overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md hover:shadow-lg transition group">
                  <div className="overflow-hidden">
                    <Image src="/assets/blogs/b1.jpg" width={280} height={140} alt="The 7 Best Dental Care Hacks To Maintain a Healthy Smile This Winter" className="w-full h-28 object-cover group-hover:scale-105 transition duration-300" />
                  </div>
                  <p className="p-3 text-gray-700 font-medium">The 7 Best Dental Care Hacks To Maintain a Healthy Smile This Winter.</p>
                </Link>
              </div>
              {/* Book Appointment CTA */}
              <Link href="/appointment" className="block mt-6 rounded-xl bg-gradient-to-r from-[#0A1F26] to-[#0B7A75] p-6 text-center shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                <p className="text-white font-bold text-lg">Ready for your best smile?</p>
                <p className="text-white/90 text-sm mt-1 mb-4">Expert care at Maxalign Dental</p>
                <span className="inline-block w-full py-3 px-6 rounded-lg bg-white text-[#0B7A75] font-semibold hover:bg-[#4EE0D4] hover:text-[#0A1F26] transition">BOOK APPOINTMENT</span>
              </Link>
            </div>
          </aside>

        </div>
      </section>
      </div>
    </>
  );
}
