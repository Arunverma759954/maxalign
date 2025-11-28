"use client";

import Image from "next/image";
import Link from "next/link";

export default function DentalCheckupBlog() {
  const blogs = [
    {
      title: "Why Max Align is one of the Best Dental Clinics in Marathahalli",
      desc: "Finding the right dental clinic can be a challenge. Here is why Max Align stands out...",
      img: "/assets/blogs/b1.jpg",
      link: "/blogs/max-align-best-dental-clinic",
    },
    {
      title: "Top 5 Benefits of Professional Teeth Whitening",
      desc: "Reveal a brighter, more confident smile with safe and long-lasting whitening...",
      img: "/assets/blogs/b2.jpg",
      link: "/blogs/professional-teeth-whitening",
    },
    {
      title: "The Importance of Regular Dental Check-Ups",
      desc: "Skipping dental visits? Here’s why regular check-ups are essential...",
      img: "/assets/blogs/b3.jpg",
      link: "/blogs/importance-of-dental-checkups",
    },
  ];

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
           Why Max Align is one of the Best Dental Clinics in Marathahalli
          </h1>
        </div>
      </section>

      {/* FEATURED IMAGE */}
      <div className="max-w-4xl mx-auto px-6 mt-20 mb-12">
        <Image
          src="/assets/blogs/b1.jpg"
          alt="Featured Blog"
          width={1000}
          height={600}
          className="rounded-2xl shadow-2xl border-4 border-white"
        />
      </div>

      {/* ================== PAGE CONTENT ================== */}
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* ============== LEFT ARTICLE (CONTENT) ============== */}
          <article className="md:col-span-2 bg-white p-10 rounded-xl shadow-lg border border-gray-200">

            <div className="flex items-center text-gray-500 gap-6 text-sm mb-6">
              <span>👤 Admin</span>
              <span>📅 19 Jul 2025</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#0B7A75] mb-6 leading-snug">
              The Importance of Regular Dental Check-Ups
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">

              <p>
              Have you been putting off your dental visit? You are not alone. Many people delay going to the dentist unless they experience pain or discomfort. But what most people don’t realise is that regular dental check-ups are not just about solving problems, they are about preventing them.
              </p>

              <p>
              At Maxalign Dental, we believe a healthy smile is a reflection of a healthy life. Whether you are looking for routine care or advanced treatment from a gum disease specialist in Marathahalli, Bengaluru, regular visits play a crucial role in keeping your oral health in check.
              </p>

              <h3 className="text-2xl font-bold text-[#0B7A75]">Thinking About Cosmetic or Implant Treatment?</h3>

              <p>
              If you are considering long-term solutions like dental implants, staying on top of your dental health is essential. At Maxalign Dental, a trusted dental implant clinic in Marathahalli, we always recommend regular check-ups to ensure your gums and bone structure remain healthy enough to support implants if ever needed.
              </p>

              <p>
              Cosmetic and orthodontic care also benefit greatly from regular dental visits. For those interested in invisible aligners in Marathahalli, check-ups are essential to track your progress and ensure everything is on the right path.
              </p>

              <p>
              Regular monitoring allows adjustments to be made in real time, helping you achieve a perfectly aligned smile more efficiently. Likewise, if you are planning to improve your smile with teeth whitening near Marathahalli, it is important that your teeth and gums are in good condition before starting treatment to avoid sensitivity or damage.
              </p>

              <h3 className="text-2xl font-bold text-[#0B7A75]">Dental Check-Up Why Regular Dental Visits Matter</h3>

              <p>
              A dental check-up typically involves a detailed examination of your teeth, gums, and entire mouth. It may include professional cleaning to remove plaque and tartar, checking for cavities or gum infections, and even taking X-rays if needed. Your dentist will also guide you on brushing, flossing, and other oral hygiene habits. If you are someone looking for teeth whitening near Marathahalli, regular visits help assess whether your teeth are suitable for cosmetic treatments and ensure your smile is not only bright but also healthy.
              </p>

              <p>
              Many dental issues like cavities, gum infections, or even oral cancer can start silently and become serious over time. With regular check-ups, your dentist can catch these issues early, when they are easier and less expensive to treat.
              </p>

              <h3 className="text-2xl font-bold text-[#0B7A75]">Keep Your Smile Bright with Professional Cleaning</h3>

              <p>
              Dental cleanings during your visit play a key role in maintaining a beautiful smile. Even with good brushing and flossing habits, plaque can build up in hard-to-reach places.
              </p>

              <ul className="list-disc pl-6">
                <li>Freshen your breath</li>
                <li>Brighten your smile</li>
                <li>Protect your gums</li>
                <li>Prevent gum disease</li>
              </ul>

              <h3 className="text-2xl font-bold text-[#0B7A75]">Oral Health is Overall Health</h3>

              <p>
              Poor oral hygiene can lead to serious issues like heart disease, diabetes, pregnancy complications. Infections from your mouth can spread to other parts of the body if not treated in time.
              </p>

              <h3 className="text-2xl font-bold text-[#0B7A75]">Why Choose Maxalign Dental?</h3>

              <p>
              Another overlooked benefit of regular check-ups is the trust and comfort you build with your dentist. At Maxalign Dental, we create a friendly environment where you feel relaxed and cared for. Whether you are coming in for preventive care or advanced solutions like invisible aligners in Marathahalli or dental implants, we ensure personalised care that suits your needs. Our team knows your dental history and offers advice that is right for you. Prevention is always better than cure. Don’t wait for pain — prioritize your oral health today.
              </p>

            </div>
          </article>

          {/* ============== RIGHT SIDEBAR ============== */}
          <aside className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 h-fit">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Latest Blogs</h3>

            <ul className="space-y-8">
              {blogs.map((b, i) => (
                <li key={i} className="flex gap-4 items-center">
                  <Image
                    src={b.img}
                    alt={b.title}
                    width={90}
                    height={90}
                    className="rounded-xl object-cover shadow-md"
                  />
                  <div>
                    <Link
                      href={b.link}
                      className="font-semibold text-gray-800 hover:text-[#0B7A75] leading-tight"
                    >
                      {b.title}
                    </Link>
                    <p className="text-sm text-gray-500 mt-1">{b.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </aside>

        </div>
      </section>
      </div>
    </>
  );
}
