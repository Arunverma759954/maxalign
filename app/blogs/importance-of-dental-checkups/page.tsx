"use client";

import Image from "next/image";
import Link from "next/link";

export default function RegularDentalCheckups() {
  const latestBlogs = [
    { title: "Top 5 Benefits of Professional Teeth Whitening", img: "/assets/blogs/b2.jpg", link: "/blogs/professional-teeth-whitening", date: "19-07-2025" },
    { title: "Why Max Align is one of the Best Dental Clinics in Marathahalli", img: "/assets/blogs/b1.jpg", link: "/blogs/max-align-best-dental-clinic", date: "13-07-2025" },
    { title: "The Importance of Regular Dental Check-Ups", img: "/assets/blogs/b3.jpg", link: "/blogs/importance-of-dental-checkups", date: "10-07-2025" },
    { title: "Why Winter is the Best Time to Have Teeth Whitening in Bangalore", img: "/assets/blogs/b2.jpg", link: "/blogs/teeth-whitening", date: "08-07-2025" },
    { title: "The 7 Best Dental Care Hacks To Maintain a Healthy Smile This Winter", img: "/assets/blogs/b1.jpg", link: "/blogs/winter-dental-care", date: "05-07-2025" },
  ];

  return (
    <>
      {/* ===================== TOP BANNER ===================== */}
  <div className="bg-white">  
<section
  className="relative w-full h-[55vh] md:h-[65vh] flex items-center justify-center
    bg-gradient-to-b from-[#0A1F26] via-[#0B7A75] to-[#0A1F26]"
>
  <div className="text-center px-6 max-w-7xl mx-auto">
    <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-xl leading-tight">
      The Importance of Regular Dental Check-Ups
    </h1>
  </div>
</section>

      {/* ===================== BLOG SECTION ===================== */}
      <section className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* LEFT CONTENT COLUMN - Image inside content box */}
        <div className="md:col-span-2">
          <article className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="overflow-hidden">
              <Image
                src="/assets/blogs/b3.jpg"
                alt="Regular Dental Check-ups"
                width={900}
                height={450}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="p-6 md:p-10">
          {/* Meta */}
          <p className="text-gray-600 text-sm mb-4">Admin • 19 Jul 2025</p>

          {/* Blog Content */}
          <div className="text-gray-700 space-y-6 leading-relaxed">

            <p>
              Have you been putting off your dental visit? You are not alone.
              Many people delay going to the dentist unless they experience pain
              or discomfort. However, regular dental check-ups are essential not
              only for solving problems but also for <strong>preventing</strong> them.
            </p>

            <p>
              At Maxalign Dental, we believe that a healthy smile reflects a
              healthy life. Whether you need routine care or advanced treatment
              from a <strong>gum disease specialist in Marathahalli</strong>,
              regular dental visits are crucial for maintaining good oral health.
            </p>

            {/* Heading */}
            <h2 className="text-2xl font-semibold text-gray-900">
              Thinking About Cosmetic or Implant Treatment?
            </h2>

            <p>
              If you're considering long-term solutions like dental implants,
              regular dental visits ensure that your gums and jawbone remain
              healthy enough to support implants in the future. As a trusted{" "}
              <strong>dental implant clinic in Marathahalli</strong>, we always
              recommend periodic check-ups for better outcomes.
            </p>

            <p>
              Cosmetic and orthodontic care, including{" "}
              <strong>invisible aligners in Marathahalli</strong>, also require
              regular monitoring to ensure proper alignment progress.
            </p>

            <p>
              If you're planning <strong>teeth whitening near Marathahalli</strong>,
              your dentist must confirm that your gums and enamel are healthy to
              prevent sensitivity or complications.
            </p>

            {/* Heading */}
            <h2 className="text-2xl font-semibold text-gray-900">
              Why Regular Dental Visits Matter
            </h2>

            <p>
              A dental check-up includes a complete examination of your teeth,
              gums, and mouth. It may also include professional cleaning, cavity
              detection, gum disease checks, and X-rays if required.
            </p>

            <p>
              Regular visits help detect problems early, such as cavities, gum
              infections, and even oral cancer — all of which start silently.
            </p>

            {/* Heading */}
            <h2 className="text-2xl font-semibold text-gray-900">
              Professional Teeth Cleaning Benefits
            </h2>

            <p>Professional cleaning helps:</p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Freshen your breath</li>
              <li>Brighten your smile</li>
              <li>Protect your gums</li>
              <li>Prevent gum disease</li>
            </ul>

            {/* Heading */}
            <h2 className="text-2xl font-semibold text-gray-900">
              Oral Health Is Overall Health
            </h2>

            <p>Poor oral hygiene is linked to major health issues like:</p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Heart disease</li>
              <li>Diabetes</li>
              <li>Pregnancy complications</li>
            </ul>

            <p>
              Infections in your mouth can spread to other parts of the body if
              untreated, making regular dental visits even more important.
            </p>

            {/* Heading */}
            <h2 className="text-2xl font-semibold text-gray-900">
              Why Choose Maxalign Dental?
            </h2>

            <p>
              Regular check-ups help build trust between you and your dentist.
              At Maxalign Dental, we provide a friendly, comfortable atmosphere
              for preventive and advanced treatments such as invisible aligners
              and dental implants.
            </p>

            <p className="font-semibold text-gray-900">
              Prevention is always better than cure — don't wait for pain.
              Prioritize your oral health today.
            </p>
          </div>
            </div>
          </article>
        </div>

        {/* ===================== RIGHT SIDEBAR ===================== */}
        <aside className="space-y-6">

          <h3 className="text-xl font-semibold text-gray-900 border-b pb-2">
            Latest Blogs
          </h3>

          <div className="space-y-4">
            {latestBlogs.map((blog, index) => (
              <Link key={index} href={blog.link} className="flex gap-4 items-start hover:opacity-90 transition group">
                <Image src={blog.img} alt={blog.title} width={80} height={80} className="rounded-xl object-cover shrink-0 w-20 h-20" />
                <div className="min-w-0 flex-1">
                  <p className="text-gray-900 font-semibold text-sm leading-tight group-hover:text-[#0B7A75] transition line-clamp-2">{blog.title}</p>
                  <p className="text-gray-500 text-xs mt-1">{blog.date}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Book Appointment CTA */}
          <Link
            href="/appointment"
            className="block mt-6 rounded-xl bg-gradient-to-r from-[#0A1F26] to-[#0B7A75] p-6 text-center shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
          >
            <p className="text-white font-bold text-lg">Ready for your best smile?</p>
            <p className="text-white/90 text-sm mt-1 mb-4">Expert care at Maxalign Dental</p>
            <span className="inline-block w-full py-3 px-6 rounded-lg bg-white text-[#0B7A75] font-semibold hover:bg-[#4EE0D4] hover:text-[#0A1F26] transition">
              BOOK APPOINTMENT
            </span>
          </Link>
        </aside>
      </section>
      </div>
    </>
  );
}
