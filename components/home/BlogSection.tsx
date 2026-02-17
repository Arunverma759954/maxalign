"use client";

import Image from "next/image";
import Link from "next/link";

export default function BlogSection() {
  const blogs = [
    { title: "Why Max Align is one of the Best Dental Clinics in Marathahalli", img: "/assets/blogs/b1.jpg", link: "/blogs/max-align-best-dental-clinic", date: "19-07-2025" },
    { title: "Top 5 Benefits of Professional Teeth Whitening", img: "/assets/blogs/b2.jpg", link: "/blogs/professional-teeth-whitening", date: "13-07-2025" },
    {
      title: "The Importance of Regular Dental Check-Ups",
      desc: "Skipping dental visits? Here’s why regular check-ups are essential...",
      img: "/assets/blogs/b3.jpg",
      link: "/blogs/importance-of-dental-checkups",
      date: "10-07-2025",
    },
    { title: "Why Winter is the Best Time to Have Teeth Whitening in Bangalore", img: "/assets/blogs/b2.jpg", link: "/blogs/teeth-whitening", date: "08-07-2025" },
    { title: "The 7 Best Dental Care Hacks To Maintain a Healthy Smile This Winter", img: "/assets/blogs/b1.jpg", link: "/blogs/winter-dental-care", date: "05-07-2025" },
    { title: "Common Dental Problems in Bangalore and How to Prevent Them", img: "/assets/blogs/b1.jpg", link: "/blogs/common-dental-problems-in-Bangalore", date: "01-07-2025" },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* TOP HEADING */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Latest Blogs & Updates
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Stay updated with the latest dental tips, treatments, and expert advice from Max Align Dental Clinic.
          </p>
        </div>

        {/* BLOG LIST - Thumbnail left, title + date right (second image style) */}
        <div className="max-w-3xl mx-auto space-y-4">
          {blogs.map((blog, index) => (
            <Link
              key={index}
              href={blog.link}
              className="group flex gap-5 items-center p-4 rounded-xl bg-white border border-gray-100 hover:shadow-lg hover:border-[#0B7A75]/20 transition-all duration-300"
            >
              <Image
                src={blog.img}
                alt={blog.title}
                width={100}
                height={100}
                className="rounded-xl object-cover shrink-0 w-24 h-24"
              />
              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#0B7A75] transition line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-gray-500 text-sm mt-0.5">{blog.date}</p>
              </div>
              <svg className="w-5 h-5 text-gray-400 group-hover:text-[#0B7A75] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
